import PropTypes from "prop-types";
import Dropzone from "react-dropzone";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const DropArea = ({ handleDrop, handleError, loading = false }) => {
	const classes = useStyles();
	return (
		<Dropzone
			disabled={loading}
			accept="image/jpeg, image/png"
			onDrop={(accepted) => {
				const file = accepted[0];
				const reader = new FileReader();
				reader.addEventListener("load", () => handleDrop(reader.result));
				try {
					reader.readAsDataURL(file);
				} catch {
					handleError("There was an error with the uploaded file.  Only JPG and PNG images are accepted.");
				}
			}}
			activeStyle={{ borderStyle: "solid" }}
		>
			{({ getRootProps, getInputProps }) => (
				<Box className={classes.dropArea} {...getRootProps()}>
					{loading ? <CircularProgress disableShrink /> : (
						<>
							<input {...getInputProps()} />
							<Typography align="center">{"Drop an image here or click to choose an image from your device."}</Typography>
						</>
					)}
				</Box>
			)}
		</Dropzone>
	);
};

DropArea.propTypes = {
	handleDrop: PropTypes.func.isRequired,
	handleError: PropTypes.func.isRequired,
	loading: PropTypes.bool,
};

export default DropArea;
