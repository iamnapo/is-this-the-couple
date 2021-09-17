import * as React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@mui/styles";
import createEmotionServer from "@emotion/server/create-instance";

const getCache = () => {
	const cache = createCache({ key: "css", prepend: true });
	cache.compat = true;
	return cache;
};

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Dosis&display=swap"
						rel="stylesheet"
					/>
					<meta charSet="utf-8" />
					<meta name="description" content="Upload an image of them and we’ll tell you which nerd you’re dealing with." />
					<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
					<meta name="theme-color" content="#000000" />
					<link rel="manifest" href="manifest.json" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

Document.getInitialProps = async (ctx) => {
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	const cache = getCache();
	const { extractCriticalToChunks } = createEmotionServer(cache);

	ctx.renderPage = () => originalRenderPage({
		enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
		enhanceComponent: (Component) => (props) => (
			<CacheProvider value={cache}>
				<Component {...props} />
			</CacheProvider>
		),
	});

	const initialProps = await NextDocument.getInitialProps(ctx);
	const emotionStyles = extractCriticalToChunks(initialProps.html);
	const emotionStyleTags = emotionStyles.styles.map((style) => (
		<style
			data-emotion={`${style.key} ${style.ids.join(" ")}`}
			key={style.key}
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
	));

	return {
		...initialProps,
		styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement(), ...emotionStyleTags],
	};
};
