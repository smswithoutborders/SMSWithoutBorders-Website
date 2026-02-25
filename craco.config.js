module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      return webpackConfig;
    },
  },
  devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    // Create a new config object based on the old one
    const newConfig = {
      ...devServerConfig,
    };

    // Remove deprecated options that are not compatible with webpack-dev-server v5
    delete newConfig.onBeforeSetupMiddleware;
    delete newConfig.onAfterSetupMiddleware;
    delete newConfig.https;

    // Handle https option - it should be moved to server.type and server.options
    if (devServerConfig.https) {
      if (typeof devServerConfig.https === 'boolean' && devServerConfig.https) {
        newConfig.server = 'https';
      } else if (typeof devServerConfig.https === 'object') {
        newConfig.server = {
          type: 'https',
          options: devServerConfig.https,
        };
      }
    } else {
      newConfig.server = 'http';
    }

    newConfig.setupMiddlewares = (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      return middlewares;
    };

    return newConfig;
  },
};
