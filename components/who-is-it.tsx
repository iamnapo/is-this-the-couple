import { Typography } from "@mui/material";

const getHeading = (isNapo: boolean, isMary: boolean, faceCount: number) => {
	if (isNapo && isMary) return `Got it! This is, in fact, the lovely couple!${faceCount > 2 ? " (Amongst others.)" : ""}`;
	if (isNapo) return `This is Napoleon!${faceCount > 1 ? " (Amongst others.)" : ""}`;
	if (isMary) return `This is Mary!${faceCount > 1 ? " (Amongst others.)" : ""}`;
	if (faceCount > 1) return "That’s a bunch of other people.";
	if (faceCount === 1) return "This must be someone else.";
	return "There’s noone is here.";
};

type WhoIsItProps = {
	isNapo: boolean;
	isMary: boolean;
	faceCount: number;
	file: string;
};

const WhoIsIt = ({ isNapo, isMary, faceCount, file }: WhoIsItProps): JSX.Element => (
	<>
		<Typography variant="h4" align="center" fontSize="1.75rem" mt="1rem">
			{getHeading(isNapo, isMary, faceCount)}
		</Typography>
		<img
			loading="lazy"
			src={file}
			alt="uploaded file"
			style={{ display: "block", margin: "1rem auto", width: "50%" }}
		/>
	</>
);

export default WhoIsIt;
