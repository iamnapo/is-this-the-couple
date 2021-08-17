const withPWA = require("next-pwa");

module.exports = withPWA({
	pwa: {
		dest: "public",
		disable: process.env.NODE_ENV !== "production",
	},
	poweredByHeader: false,
	reactStrictMode: true,
	target: "serverless",
	experimental: {
		optimizeCss: true,
		optimizeImages: true,
		esmExternals: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	webpack: (config, { isServer }) => {
		if (!isServer) config.resolve.fallback.fs = false;
		return config;
	},
});
