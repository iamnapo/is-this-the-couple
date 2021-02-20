import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import "./index.scss";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./screens/main";

const theme = createMuiTheme({
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

const App = () => (
	<StyledEngineProvider injectFirst>
		<ThemeProvider theme={theme}>
			<Header />
			<Main />
			<Footer />
		</ThemeProvider>
	</StyledEngineProvider>
);

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.querySelector("#root"),
);

serviceWorkerRegistration.register();
