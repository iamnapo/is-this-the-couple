import { lazy, StrictMode, Suspense, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import { LinearProgress, StyledEngineProvider } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { SnackbarProvider } from "notistack";
import { SWRConfig } from "swr";
import shallow from "zustand/shallow";

import "./index.scss";

import history from "./history";
import { useGlobalState } from "./utils";
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

const App = () => {
	const { stuff, setStuff } = useGlobalState(useCallback((e) => ({
		stuff: e.stuff,
		setStuff: e.setStuff,
	}), []), shallow);

	console.log(stuff);

	useEffect(() => {
		setStuff("Learn React");
	}, [setStuff]);

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<SWRConfig value={swrConfig}>
					<SnackbarProvider anchorOrigin={{ vertical: "bottom", horizontal: "right" }} maxSnack={1}>
						<main>
							<Switch>
								<Suspense fallback={<LinearProgress />}>
									<Route exact path="/" component={Home} />
								</Suspense>
							</Switch>
						</main>
					</SnackbarProvider>
				</SWRConfig>
			</ThemeProvider>
		</StyledEngineProvider>
	);
};

ReactDOM.render(
	<StrictMode>
		<Router history={history}>
			<App />
		</Router>
	</StrictMode>,
	document.querySelector("#root"),
);

serviceWorkerRegistration.register();
