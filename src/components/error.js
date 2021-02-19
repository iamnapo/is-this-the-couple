/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const colors = {
	lightest: "#fffdfc",
	darkest: "#0b2055",
	dark: "#3d4b6d",
	light: "#eef2fd",
	brand: "#6a2555",
};
const Error = styled("p")`
  background-color: rgba(255, 0, 0, 0.05);
  border: 2px solid red;
  border-radius: 0.25rem;
  color: ${colors.darkest};
  padding: 1rem;
`;

export default ({ error }) => error && <Error>{error}</Error>;
