import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import { couple, mary, napo, others } from "../utils";

const useStyles = makeStyles((theme) => ({
	examples: {
		position: "relative",
		marginTop: 0,
		overflowX: "scroll",
		"&::before": {
			display: "none",
			transition: "opacity 500ms linear",
			cursor: "not-allowed",
			borderRadius: "1rem",
			backgroundColor: `${theme.palette.primary.lightest}dd`,
			content: "\"\"",
			position: "absolute",
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
			zIndex: 10,
		},
	},
	show: {
		"&::before": {
			display: "block",
		},
	},
	image: {
		maxHeight: "150px",
	},
}));

const Examples = ({ loading, handleClick }) => {
	const classes = useStyles();
	return (
		<Grid container spacing={4} sx={{ textAlign: "center", placeContent: "center" }} className={clsx(classes.examples, loading && classes.show)}>
			<Grid item xs={6} sx={{ display: "flex", placeContent: "center" }}>
				<a
					disabled={loading}
					href="#example"
					onClick={(event) => {
						event.preventDefault();
						handleClick(mary);
					}}
				>
					<img className={classes.image} src={mary} alt="Choose this to see who’s in it." />
				</a>
			</Grid>
			<Grid item xs={6} sx={{ display: "flex", placeContent: "center" }}>
				<a
					disabled={loading}
					href="#example"
					onClick={(event) => {
						event.preventDefault();
						handleClick(napo);
					}}
				>
					<img className={classes.image} src={napo} alt="Choose this to see who’s in it." />
				</a>
			</Grid>
			<Grid item xs={6} sx={{ display: "flex", placeContent: "center" }}>
				<a
					disabled={loading}
					href="#example"
					onClick={(event) => {
						event.preventDefault();
						handleClick(couple);
					}}
				>
					<img className={classes.image} src={couple} alt="Choose this to see who’s in it." />
				</a>
			</Grid>
			<Grid item xs={6} sx={{ display: "flex", placeContent: "center" }}>
				<a
					disabled={loading}
					href="#example"
					onClick={(event) => {
						event.preventDefault();
						handleClick(others);
					}}
				>
					<img className={classes.image} src={others} alt="Choose this to see who’s in it." />
				</a>
			</Grid>
		</Grid>
	);
};

Examples.propTypes = { loading: PropTypes.bool.isRequired, handleClick: PropTypes.func.isRequired };

export default Examples;
