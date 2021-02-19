/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

const colors = {
	lightest: "#fffdfc",
	darkest: "#0b2055",
	dark: "#3d4b6d",
	light: "#eef2fd",
	brand: "#6a2555",
};
const Text = styled("p")`
  text-align: center;
`;

const Button = styled("button")`
  background: ${colors.brand};
  border: none;
  border-radius: 0.25rem;
  color: ${colors.lightest};
  cursor: pointer;
  display: block;
  font-family: brandon-grotesque;
  font-weight: bold;
  margin: 1rem auto 0;
  padding: 0.5rem;
  text-transform: uppercase;
  width: 300px;
`;

export default ({ reset }) => (
	<>
		<Text>{"See another bald guy?"}</Text>
		<Button type="reset" onClick={reset}>
			{"Start over!"}
		</Button>
	</>
);
