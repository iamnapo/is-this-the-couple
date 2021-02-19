import { lazy, StrictMode, Suspense } from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import { LinearProgress, StyledEngineProvider } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { SWRConfig } from "swr";

import "./index.scss";

import history from "./history";
import Header from "./components/header";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const Home = lazy(() => import("./screens/Home"));

const swrConfig = { revalidateOnFocus: false, shouldRetryOnError: false };
const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#61dafb",
		},
		secondary: {
			main: "#282c34",
		},
	},
});

const App = () => (
	<StyledEngineProvider injectFirst>
		<ThemeProvider theme={theme}>
			<SWRConfig value={swrConfig}>
				<Header />
				<main style={{ margin: "5% auto", maxWidth: "90%", width: "600px" }}>
					<Switch>
						<Suspense fallback={<LinearProgress />}>
							<Route exact path="/" component={Home} />
						</Suspense>
					</Switch>
				</main>
			</SWRConfig>
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
