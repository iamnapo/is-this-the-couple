import withPWA from "next-pwa";

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
	swcMinify: true,
};

export default withPWA(config);
