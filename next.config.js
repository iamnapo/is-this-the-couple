const withPWA = require("next-pwa");

/**
 * @type {import("next/dist/server/config").NextConfig}
 */
const config = {
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
	generateBuildId: () => "build",
};

module.exports = withPWA(config);
