import { Button, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

import { useFaceApi } from "../utils";
import DropArea from "../components/drop-area";
import Examples from "../components/examples";
import WhoIsIt from "../components/who-is-it";

const useStyles = makeStyles((theme) => ({
	reset: {
		width: "50%",
		margin: "1rem auto",
		display: "flex",
		justifyContent: "center",
	},
	error: {
		textAlign: "center",
		border: "2px solid red",
		borderRadius: "0.25rem",
		padding: "1rem",
		color: theme.palette.primary.darkest,
		backgroundColor: "rgba(255 0 0 / 0.05)",
	},
}));

const Home = () => {
	const classes = useStyles();
	const [{ loading, error, matches, file }, { reset, checkFace, setError, loadModels }] = useFaceApi();
	const [modelsLoaded, setModelsLoaded] = useState(false);
	const [modelsLoading, setModelsLoading] = useState(false);

	return (
		<main>
			{!file && (
				<>
					<Typography align="justify">
						{"Are there a bearded man and a lovely lady front of you? Are they talking at length about code or pastry? "}
						{"Not sure if it’s "}
						<Link href="http://iamnapo.me">{"Napoleon Oikonomou"}</Link>
						{" and "}
						<Link href="http://marykouvela.com">{"Mary Kouvela"}</Link>
						{"?"}
					</Typography>
					<Typography mt="1rem">
						<strong>{"We can help!"}</strong>
						{" Upload an image of them and we’ll tell you which nerd you’re dealing with."}
					</Typography>
				</>
			)}
			{!modelsLoaded && (
				<Button
					disabled={modelsLoading}
					variant="contained"
					size="small"
					type="reset"
					onClick={() => {
						setModelsLoading(true);
						loadModels().then(() => {
							setModelsLoaded(true);
							setModelsLoading(false);
						});
					}}
					className={classes.reset}
				>
					{"Load the models!"}
				</Button>
			)}
			{error && <Typography className={classes.error}>{error}</Typography>}
			{file ? (
				<>
					{!error && <WhoIsIt {...matches} file={file} />}
					<Typography align="center">{"See another couple nearby?"}</Typography>
					<Button variant="contained" size="small" type="reset" onClick={reset} className={classes.reset}>
						{"Start over!"}
					</Button>
				</>
			) : (
				<>
					<DropArea
						handleDrop={checkFace}
						handleError={setError}
						loading={loading}
						modelsLoaded={modelsLoaded || modelsLoading}
					/>
					<Typography align="justify" variant="h5" gutterBottom sx={{ mt: "2rem", fontWeight: "bold" }}>{"Don’t have a lovely couple nearby?"}</Typography>
					<Typography align="justify">{"Click one of the images below to see how it works!"}</Typography>
					<Examples handleClick={checkFace} loading={loading || !(modelsLoaded || modelsLoading)} />
				</>
			)}
		</main>
	);
};

export default Home;
