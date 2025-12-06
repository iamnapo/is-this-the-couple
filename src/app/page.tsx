"use client";

import { Alert, Box, Button, Link, Typography } from "@mui/material";
import { useState } from "react";

import DropArea from "#components/drop-area";
import Examples from "#components/examples";
import WhoIsIt from "#components/who-is-it";

import useFaceApi from "#hooks/use-face-api";

const Home = () => {
	const [{ loading, error, matches, file }, { reset, checkFace, setError, loadModels }] = useFaceApi();
	const [modelsLoaded, setModelsLoaded] = useState(false);
	const [modelsLoading, setModelsLoading] = useState(false);

	return (
		<Box mx={2} maxWidth={700} justifySelf="center" textAlign="justify" display="grid">
			{!file && (
				<>
					<Typography>
						{"Are there a bearded man and a lovely lady front of you? Are they talking at length about code or pastry? "}
						{"Not sure if it's "}
						<Link href="https://iamnapo.me">{"Napoleon Oikonomou"}</Link>
						{" and "}
						<Link href="https://marykouvela.com">{"Mary Kouvela"}</Link>
						{"?"}
					</Typography>
					<Typography mt={2}>
						<strong>{"We can help!"}</strong>
						{" Upload an image of them and we'll tell you which nerd you're dealing with."}
					</Typography>
				</>
			)}
			{!modelsLoaded && (
				<Button
					disabled={modelsLoading}
					variant="contained"
					size="small"
					type="reset"
					sx={{ width: "50%", justifySelf: "center", display: "flex", mt: 2 }}
					onClick={() => {
						setModelsLoading(true);
						void loadModels().then(() => {
							setModelsLoaded(true);
							setModelsLoading(false);
						});
					}}
				>
					{"Load the models!"}
				</Button>
			)}
			{error && (
				<Alert severity="error" sx={{ mt: 4 }}>
					{error}
				</Alert>
			)}
			{file
				? (
					<>
						{!error && <WhoIsIt {...matches} file={file} />}
						<Typography align="center">{"See another couple nearby?"}</Typography>
						<Button
							variant="contained"
							size="small"
							type="reset"
							sx={{ width: "50%", justifySelf: "center", display: "flex", mt: 2 }}
							onClick={reset}
						>
							{"Start over!"}
						</Button>
					</>
				)
				: (
					<>
						<DropArea
							handleDrop={checkFace}
							handleError={setError}
							loading={loading}
							modelsLoaded={modelsLoaded || modelsLoading}
						/>
						<Typography gutterBottom variant="h5" sx={{ mt: 4, fontWeight: "bold" }}>
							{"Don't have a lovely couple nearby?"}
						</Typography>
						<Typography gutterBottom>{"Click one of the images below to see how it works!"}</Typography>
						<Examples handleClick={checkFace} loading={loading || !(modelsLoaded || modelsLoading)} />
					</>
				)}
		</Box>
	);
};

export default Home;
