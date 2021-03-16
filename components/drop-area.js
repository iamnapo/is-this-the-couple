import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useCallback } from "react";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
	dropArea: {
		border: "2px dashed",
		borderColor: theme.palette.primary.darkest,
		borderRadius: "1rem",
		placeContent: "center",
		display: "flex",
		marginTop: "2rem",
		padding: "2rem",
		"&:focus": {
			boxShadow: `0 0 3pt 2pt ${theme.palette.primary.darkest}`,
			outline: "none",
		},
	},
}));

const DropArea = ({ handleDrop, handleError, loading = false, modelsLoaded = false }) => {
	const classes = useStyles();
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
		<Box {...getRootProps({ className: clsx(classes.dropArea, "dropzone", (loading || !modelsLoaded) && "disabled") })}>
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
