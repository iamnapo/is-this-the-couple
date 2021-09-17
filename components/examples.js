import PropTypes from "prop-types";
import { Box, Grid } from "@mui/material";

import { couple, mary, napo, others } from "../utils";

const Examples = ({ loading, handleClick }) => (
	<Grid
		container
		spacing={4}
		sx={{
			textAlign: "center",
			placeContent: "center",
			position: "relative",
			marginTop: 0,
			overflowX: "scroll",
			"::before": {
				display: loading ? "block" : "none",
				transition: "opacity 500ms linear",
				cursor: "not-allowed",
				borderRadius: "1rem",
				bgcolor: (t) => `${t.palette.primary.lightest}dd`,
				content: "\"\"",
				position: "absolute",
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				zIndex: 10,
			},
		}}
	>
		<Grid item xs={6} sx={{ display: "flex", placeContent: "center" }}>
			<a
				disabled={loading}
				href="#example"
				onClick={(event) => {
					event.preventDefault();
					handleClick(mary);
				}}
			>
				<Box component="img" sx={{ maxHeight: "150px" }} src={mary} alt="Choose this to see who’s in it." />
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
				<Box component="img" sx={{ maxHeight: "150px" }} src={napo} alt="Choose this to see who’s in it." />
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
				<Box component="img" sx={{ maxHeight: "150px" }} src={couple} alt="Choose this to see who’s in it." />
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
				<Box component="img" sx={{ maxHeight: "150px" }} src={others} alt="Choose this to see who’s in it." />
			</a>
		</Grid>
	</Grid>
);

Examples.propTypes = { loading: PropTypes.bool.isRequired, handleClick: PropTypes.func.isRequired };

export default Examples;
