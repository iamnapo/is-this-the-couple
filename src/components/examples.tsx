import { Box, Grid } from "@mui/material";

import type { FC } from "react";

const napo = "https://res.cloudinary.com/iamnapo/image/upload/c_thumb,f_auto,g_north_west,h_300,q_auto/is-this-the-couple/napo";
const mary = "https://res.cloudinary.com/iamnapo/image/upload/c_thumb,f_auto,g_north_west,h_300,q_auto/is-this-the-couple/mary";
const couple = "https://res.cloudinary.com/iamnapo/image/upload/c_thumb,f_auto,g_north_west,h_300,q_auto/is-this-the-couple/couple";
const others = "https://res.cloudinary.com/iamnapo/image/upload/c_thumb,f_auto,g_north_west,w_250,q_auto/is-this-the-couple/others";

type ExampleProps = { loading: boolean; handleClick: (_: string) => Promise<void> };

const Examples: FC<ExampleProps> = ({ loading, handleClick }) => (
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
				bgcolor: "#fffdfcdd",
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
		<Grid size={6} sx={{ display: "flex", placeContent: "center" }}>
			<a
				href="#example"
				onClick={(event) => {
					event.preventDefault();
					void handleClick(mary);
				}}
			>
				<Box component="img" sx={{ maxHeight: "150px" }} src={mary} alt="Choose this to see who’s in it." />
			</a>
		</Grid>
		<Grid size={6} sx={{ display: "flex", placeContent: "center" }}>
			<a
				href="#example"
				onClick={(event) => {
					event.preventDefault();
					void handleClick(napo);
				}}
			>
				<Box component="img" sx={{ maxHeight: "150px" }} src={napo} alt="Choose this to see who’s in it." />
			</a>
		</Grid>
		<Grid size={6} sx={{ display: "flex", placeContent: "center" }}>
			<a
				href="#example"
				onClick={(event) => {
					event.preventDefault();
					void handleClick(couple);
				}}
			>
				<Box component="img" sx={{ maxHeight: "150px" }} src={couple} alt="Choose this to see who’s in it." />
			</a>
		</Grid>
		<Grid size={6} sx={{ display: "flex", placeContent: "center" }}>
			<a
				href="#example"
				onClick={(event) => {
					event.preventDefault();
					void handleClick(others);
				}}
			>
				<Box component="img" sx={{ maxHeight: "150px" }} src={others} alt="Choose this to see who’s in it." />
			</a>
		</Grid>
	</Grid>
);

export default Examples;
