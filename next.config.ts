import { env } from "node:process";

import withSerwist from "@serwist/next";

import type { NextConfig } from "next";

const config = {
	reactCompiler: true,
	poweredByHeader: false,
	reactStrictMode: true,
	compiler: { reactRemoveProperties: true },
	generateBuildId: () => "build",
	images: { remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com", pathname: "/iamnapo/**" }] },
} satisfies NextConfig;

export default withSerwist({ swSrc: "src/app/sw.ts", swDest: "public/sw.js", disable: env.NODE_ENV !== "production" })(
	config,
);
