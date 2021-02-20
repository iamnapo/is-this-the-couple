import { Box, Link, Typography } from "@material-ui/core";

const Footer = () => (
	<Box component="footer" mt="2rem">
		<Typography align="justify" variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>{"What is this site?"}</Typography>
		<Typography align="justify" variant="body2">
			{"This website uses "}
			<Link href="https://github.com/justadudewhohacks/face-api.js">{"face-api.js"}</Link>
			{" for facial recognition. It was built by "}
			<Link href="https://iamnapo.me">{"iamnapo"}</Link>
			{" and is largely based upon "}
			<Link href="https://www.youtube.com/watch?v=PNEDvkKcXf0&amp;list=PLz8Iz-Fnk_eTpvd49Sa77NiF8Uqq5Iykx&amp;index=2">{"this"}</Link>
			{" livestream by "}
			<Link href="https://twitter.com/jlengstorf">{"Jason Lengstorf"}</Link>
			{" and "}
			<Link href="https://twitter.com/gantlaborde">{"Gant Laborde"}</Link>
			{"."}
		</Typography>
		<Typography mt="2rem" align="center" variant="body2">
			<Link href="https://github.com/iamnapo/is-this-the-couple">{"source code"}</Link>
			{" · "}
			<Link href="https://whichbeardisthis.com">{"whichbeardisthis.com"}</Link>
		</Typography>
	</Box>
);

export default Footer;
