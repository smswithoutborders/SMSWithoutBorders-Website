//

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				highlight: "#f59e0b",
				primary: "#3b82f6",
				"primary-dark": "#2563eb"
			},
			fontFamily: {
				sans: ["Nunito", "sans-serif"]
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
