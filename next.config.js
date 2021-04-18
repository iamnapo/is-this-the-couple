const withPWA = require("next-pwa");

module.exports = withPWA({
	pwa: {
		dest: "public",
		disable: process.env.NODE_ENV !== "production",
	},
	poweredByHeader: false,
	reactStrictMode: true,
	target: "experimental-serverless-trace",
	future: {
		webpack5: true,
	},
	experimental: {
		optimizeCss: true,
		optimizeFonts: true,
		optimizeImages: true,
	},
	webpack: (config, { isServer }) => {
		if (!isServer) config.resolve.fallback.fs = false;
		return config;
	},
});
