import * as React from "react";
import NextDocument, { Html, Head, Main, NextScript, type DocumentContext } from "next/document";
import type { AppType } from "next/app";
import createEmotionServer from "@emotion/server/create-instance";
import type { EmotionCache } from "@emotion/cache";

import { createEmotionCache, dosis } from "../utils";

export default class Document extends NextDocument<{ emotionStyleTags: JSX.Element[] }> {
	static override async getInitialProps(ctx: DocumentContext) {
		const originalRenderPage = ctx.renderPage;
		const cache = createEmotionCache();
		const emotionServer = createEmotionServer(cache);
		ctx.renderPage = () => originalRenderPage({
			enhanceApp: (App: React.ComponentType<React.ComponentProps<AppType> & { emotionCache?: EmotionCache }>) => (props) => (
				<App emotionCache={cache} {...props} />
			),
		});
		const initialProps = await NextDocument.getInitialProps(ctx);
		const emotionStyles = emotionServer.extractCriticalToChunks(initialProps.html);
		const emotionStyleTags = emotionStyles.styles.map((style) => (
			<style
				key={style.key}
				dangerouslySetInnerHTML={{ __html: style.css }} // eslint-disable-line react/no-danger
				data-emotion={`${style.key} ${style.ids.join(" ")}`}
			/>
		));
		return { ...initialProps, emotionStyleTags };
	}

	override render(): JSX.Element {
		const { emotionStyleTags } = this.props;
		return (
			<Html lang="en" className={dosis.variable}>
				<Head>
					<meta charSet="utf-8" />
					<meta name="description" content="Upload an image of them and we’ll tell you which nerd you’re dealing with." />
					<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
					<meta name="theme-color" content="#000000" />
					<link rel="manifest" href="manifest.json" />
					<meta name="emotion-insertion-point" content="" />
					{emotionStyleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
