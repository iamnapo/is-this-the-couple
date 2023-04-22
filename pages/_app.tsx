import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { type EmotionCache } from "@emotion/cache";

import "../styles/index.scss";

import Header from "../components/header";
import Footer from "../components/footer";
import { createEmotionCache } from "../utils";

const theme = createTheme({
	palette: {
		primary: {
			main: "#6a2555",
			light: "#eef2fd",
		},
		secondary: {
			main: "#282c34",
		},
	},
	typography: {
		fontFamily: ["var(--dosis)", "-apple-system", "BlinkMacSystemFont", "Arial", "sans-serif"].join(","),
	},
});

const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: AppProps & { emotionCache?: EmotionCache }) => (
	<CacheProvider value={emotionCache}>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<title>{ "Is this the couple?" }</title>
		</Head>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<Component {...pageProps} />
			<Footer />
		</ThemeProvider>
	</CacheProvider>
);

export default App;
