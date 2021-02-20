import { lazy, StrictMode, Suspense } from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import { LinearProgress, StyledEngineProvider } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import "./index.scss";

import history from "./history";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import Footer from "./components/footer";

const Home = lazy(() => import("./screens/Home"));

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
});

const App = () => (
	<StyledEngineProvider injectFirst>
		<ThemeProvider theme={theme}>
			{/* <Header /> */}
			<main style={{ marginTop: "1rem" }}>
				<Switch>
					<Suspense fallback={<LinearProgress />}>
						<Route exact path="/" component={Home} />
					</Suspense>
				</Switch>
			</main>
			<Footer />
		</ThemeProvider>
	</StyledEngineProvider>
);

ReactDOM.render(
	<StrictMode>
		<Router history={history}>
			<App />
		</Router>
	</StrictMode>,
	document.querySelector("#root"),
);

serviceWorkerRegistration.register();
