/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const colors = {
	lightest: "#fffdfc",
	darkest: "#0b2055",
	dark: "#3d4b6d",
	light: "#eef2fd",
	brand: "#6a2555",
};

const Heading = styled("h1")`
  color: ${colors.darkest};
  font-size: 1.75rem;
  line-height: 1.1;
  text-align: center;
`;

const Image = styled("img")`
  display: block;
  margin: 1rem auto 0;
  width: 300px;
`;

const getHeading = (isKyle, isJason) => {
	if (isKyle && isJason) {
		return "We can’t tell them apart either. ¯\\_(ツ)_/¯";
	}

	if (isKyle) {
		return "This is Kyle Shevlin.";
	}

	if (isJason) {
		return "This is Jason Lengstorf.";
	}

	return "This must be someone else.";
};

export default ({ isKyle, isJason, file }) => (
	<>
		<Heading>{getHeading(isKyle, isJason)}</Heading>
		<Image src={file} alt="uploaded file" />
	</>
);
