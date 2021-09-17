import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const getHeading = (isNapo, isMary, faceCount) => {
	if (isNapo && isMary) return `Got it! This is, in fact, the lovely couple!${faceCount > 2 ? " (Amongst others.)" : ""}`;
	if (isNapo) return `This is Napoleon!${faceCount > 1 ? " (Amongst others.)" : ""}`;
	if (isMary) return `This is Mary!${faceCount > 1 ? " (Amongst others.)" : ""}`;
	if (faceCount > 1) return "That’s a bunch of other people.";
	if (faceCount === 1) return "This must be someone else.";
	return "There’s noone is here.";
};

const WhoIsIt = ({ isNapo, isMary, faceCount, file }) => (
	<>
		<Typography variant="h4" align="center" fontSize="1.75rem" mt="1rem">{getHeading(isNapo, isMary, faceCount)}</Typography>
		<img src={file} alt="uploaded file" style={{ display: "block", margin: "1rem auto", width: "50%" }} />
	</>
);

WhoIsIt.propTypes = {
	isNapo: PropTypes.bool.isRequired,
	isMary: PropTypes.bool.isRequired,
	faceCount: PropTypes.number.isRequired,
	file: PropTypes.string.isRequired,
};

export default WhoIsIt;
