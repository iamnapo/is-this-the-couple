import type { MetadataRoute } from "next";

const Robots = (): MetadataRoute.Robots => ({
	rules: { userAgent: "*", disallow: "" },
	sitemap: "https://www.isthisthecouple.iamnapo.me/sitemap.xml",
});

export default Robots;
