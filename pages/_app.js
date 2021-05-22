import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@material-ui/core";
import createCache from "@emotion/cache";

import "../styles/index.scss";

import Header from "../components/header";
import Footer from "../components/footer";

const theme = createTheme({
	palette: {
		primary: {
			main: "#6a2555",
			darkest: "#0b2055",
			lightest: "#fffdfc",
			light: "#eef2fd",
		},
		secondary: {
			main: "#282c34",
		},
	},
	typography: {
		fontFamily: [
			"Dosis",
			"-apple-system",
			"BlinkMacSystemFont",
			"Arial",
			"sans-serif",
		].join(","),
	},
});

const cache = createCache({ key: "css", prepend: true });

const App = (props) => {
	const { Component, pageProps } = props;

	React.useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) jssStyles.remove();
	}, []);

	return (
		<CacheProvider value={cache}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<title>{"Is this the couple?"}</title>
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</CacheProvider>
	);
};

App.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};

export default App;
