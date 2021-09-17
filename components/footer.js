import { Box, Link, Typography } from "@mui/material";

const Footer = () => (
	<Box component="footer" mt="2rem" textAlign="justify">
		<Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>{"What is this site?"}</Typography>
		<Typography variant="body2">
			{"This website uses "}
			<Link href="https://github.com/justadudewhohacks/face-api.js">{"face-api.js"}</Link>
			{" for facial recognition. It uses "}
			<Link href="https://www.tensorflow.org/js">{"TensorFlow.js"}</Link>
			{" to understand if an image contains people, and, if so, which "}
			<strong>{"specific"}</strong>
			{" people it contains. It was built by tweaking "}
			<Link href="https://whichbeardisthis.com/">{"this"}</Link>
			{" creation of "}
			<Link href="https://twitter.com/jlengstorf">{"Jason Lengstorf"}</Link>
			{" and "}
			<Link href="https://twitter.com/gantlaborde">{"Gant Laborde"}</Link>
			{"."}
		</Typography>
		<Typography mt="2rem" align="center" variant="body2">
			{"Made with ❤️ by "}
			<Link href="https:/iamnapo.me">{"Napoleon"}</Link>
			{" · "}
			<Link href="https://github.com/iamnapo/is-this-the-couple">{"source code"}</Link>
		</Typography>
	</Box>
);

export default Footer;
