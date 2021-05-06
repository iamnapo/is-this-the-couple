import * as React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";
import createEmotionServer from "@emotion/server/create-instance";

import { cache } from "./_app";

const { extractCritical } = createEmotionServer(cache);

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
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

	ctx.renderPage = () => originalRenderPage({
		enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
	});

	const initialProps = await NextDocument.getInitialProps(ctx);
	const styles = extractCritical(initialProps.html);

	return {
		...initialProps,
		styles: [
			...React.Children.toArray(initialProps.styles),
			sheets.getStyleElement(),
			<style
				key="emotion-style-tag"
				data-emotion={`css ${styles.ids.join(" ")}`}
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: styles.css }}
			/>,
		],
	};
};
