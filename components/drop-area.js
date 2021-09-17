import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useCallback } from "react";

const DropArea = ({ handleDrop, handleError, loading = false, modelsLoaded = false }) => {
	const onDrop = useCallback((accepted) => {
		const file = accepted[0];
		const reader = new FileReader();
		reader.addEventListener("load", () => handleDrop(reader.result));
		try {
			reader.readAsDataURL(file);
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
					boxShadow: (t) => `0 0 3pt 2pt ${t.palette.primary.darkest}`,
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

DropArea.propTypes = {
	handleDrop: PropTypes.func.isRequired,
	handleError: PropTypes.func.isRequired,
	loading: PropTypes.bool,
	modelsLoaded: PropTypes.bool.isRequired,
};

export default DropArea;
