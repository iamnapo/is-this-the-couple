import { Button, Link, Typography } from "@material-ui/core";
import { useState } from "react";

import { useFaceApi } from "../utils";
import DropArea from "../components/drop-area";
import Examples from "../components/examples";
import WhoIsIt from "../components/who-is-it";

const Home = () => {
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
					sx={{
						width: "50%",
						m: "1rem auto",
						display: "flex",
						justifyContent: "center",
					}}
				>
					{"Load the models!"}
				</Button>
			)}
			{error && (
				<Typography sx={{
					textAlign: "center",
					border: "2px solid red",
					borderRadius: "0.25rem",
					padding: "1rem",
					color: "primary.darkest",
					bgcolor: "rgba(255 0 0 / 0.05)",
				}}
				>
					{error}
				</Typography>
			)}
			{file ? (
				<>
					{!error && <WhoIsIt {...matches} file={file} />}
					<Typography align="center">{"See another couple nearby?"}</Typography>
					<Button
						variant="contained"
						size="small"
						type="reset"
						onClick={reset}
						sx={{
							width: "50%",
							m: "1rem auto",
							display: "flex",
							justifyContent: "center",
						}}
					>
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
