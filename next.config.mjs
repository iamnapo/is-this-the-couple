import withPWA from "next-pwa";

/** @type {import("next").NextConfig} */
const config = {
	poweredByHeader: false,
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	webpack: (config, { isServer }) => {
		if (!isServer) config.resolve.fallback.fs = false;
		return config;
	},
	compiler: {
		reactRemoveProperties: true,
	},
	generateBuildId: () => "build",
	images: {
		remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com", pathname: "/iamnapo/**" }],
	},
};

export default withPWA({
	dest: "public",
	disable: process.env.NODE_ENV !== "production",
})(config);
