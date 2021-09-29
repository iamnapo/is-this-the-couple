import { useDropzone } from "react-dropzone";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useCallback } from "react";

type DropAreaProps = {
	handleDrop: (_: string) => Promise<void>;
	handleError: (_: string) => void;
	loading?: boolean;
	modelsLoaded?: boolean;
};

const DropArea = ({ handleDrop, handleError, loading = false, modelsLoaded = false }: DropAreaProps): JSX.Element => {
	const onDrop = useCallback((accepted: Blob[]) => {
		const file = accepted[0];
		const reader = new FileReader();
		reader.addEventListener("load", () => {
			void handleDrop(reader.result as string);
		});
		try {
			reader.readAsDataURL(file as Blob);
		} catch {
			handleError("There was an error with the uploaded file.  Only JPG and PNG images are accepted.");
		}
	}, [handleDrop, handleError]);
	const { getRootProps, getInputProps } = useDropzone({ onDrop, disabled: loading || !modelsLoaded, maxFiles: 1 });
	return (
		<Box
			sx={{
				border: "2px dashed",
				borderColor: "primary.darkest",
				borderRadius: "1rem",
				placeContent: "center",
				display: "flex",
				marginTop: "2rem",
				padding: "2rem",
				"&:focus": {
					boxShadow: "0 0 3pt 2pt #0b2055",
					outline: "none",
				},
			}}
			{...getRootProps()}
		>
			{modelsLoaded
				? loading
					? <CircularProgress disableShrink />
					: (
						<>
							<input {...getInputProps()} />
							<Typography align="center">
								{"Drop an image here or click to choose an image from your device."}
							</Typography>
						</>
					)
				: <Typography align="center">{"Press the button above to load the models. ⬆️"}</Typography>}
		</Box>
	);
};

export default DropArea;
