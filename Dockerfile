# Stage 1: Build environment
FROM node:18-alpine as build
WORKDIR /app

# Copy only necessary files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Build the application
RUN yarn build

# Stage 2: Production environment
FROM nginx:stable-alpine

# Copy built files from the build stage to NGINX html directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy NGINX configuration template
COPY nginx/nginx.conf.template /etc/nginx/conf.d/default.template

# Copy entry script and make it executable
COPY scripts/docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Expose ports
EXPOSE 80
EXPOSE 443

# Start NGINX using entry script
CMD ["/docker-entrypoint.sh"]
