
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Dosis } from "next/font/google";
import { Suspense, type PropsWithChildren } from "react";

import Footer from "#components/footer";
import Header from "#components/header";
import LayoutClient from "#components/layout-client";

import theme from "../theme";

const dosis = Dosis({ subsets: ["latin"], weight: ["400"], variable: "--dosis" });

const Layout = ({ children }: PropsWithChildren) => (
	<html lang="en">
		<body className={dosis.variable}>
			<AppRouterCacheProvider>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Header />
					<main>{children}</main>
					<Footer />
				</ThemeProvider>
			</AppRouterCacheProvider>
			<Suspense>
				<LayoutClient />
			</Suspense>
		</body>
	</html>
);

export const metadata = {
	applicationName: "Is this the couple?",
	title: "Is this the couple?",
	authors: [{ name: "Napoleon-Christos Oikonomou" }],
	description: "Upload an image of them and we'll tell you which nerd you're dealing with.",
	icons: {
		icon: [
			{ url: "favicon.ico", type: "image/x-icon" },
			{ type: "image/png", sizes: "32x32", url: "favicon-32x32.png" },
			{ type: "image/png", sizes: "16x16", url: "favicon-16x16.png" },
		],
		apple: "apple-touch-icon.png",
	},
	openGraph: {
		type: "website",
		title: "Is this the couple?",
		description: "Upload an image of them and we'll tell you which nerd you're dealing with.",
		url: "/",
		images: "couple-512x512.png",
	},
	manifest: "manifest.json",
	twitter: {
		title: "Is this the couple?",
		description: "Upload an image of them and we'll tell you which nerd you're dealing with.",
		images: "couple-512x512.png",
		creator: "@_iamnapo",
		card: "summary_large_image",
	},
	appleWebApp: { capable: true, title: "Is this the couple?", statusBarStyle: "default" },
	metadataBase: new URL("https://isthisthecouple.iamnapo.me"),
};

export const viewport = { themeColor: "#000000" };

export default Layout;
