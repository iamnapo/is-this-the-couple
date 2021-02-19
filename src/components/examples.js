/* eslint-disable react/prop-types */
import styled from "@emotion/styled";

import both from "../assets/images/both.jpg";
import neither from "../assets/images/neither-1.jpg";
import jason from "../assets/images/puppy-jason.jpg";
import kyle from "../assets/images/headgear-kyle.jpg";

const colors = {
	lightest: "#fffdfc",
	darkest: "#0b2055",
	dark: "#3d4b6d",
	light: "#eef2fd",
	brand: "#6a2555",
};

const Subheading = styled("h2")`
  font-size: 1.5rem;
  margin-top: 2rem;
`;

const Examples = styled("div")`
  display: flex;
  margin-top: 0;
  overflow-x: scroll;
  padding: 0.5rem 0;
  position: relative;
  ::before {
    background: ${colors.lightest}dd;
    border-radius: 1rem;
    content: ' ';
    cursor: not-allowed;
    bottom: 0;
    display: ${(props) => (props.loading ? "block" : "none")};
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 500ms linear;
    z-index: 10;
  }
  * + * {
    margin-top: 0;
  }
`;

const Example = styled("img")`
  flex: 1 80px;
  margin: 0.5rem;
  width: 80px;
	* {
    margin: 0;
  }
`;

export default ({ loading, handleClick }) => (
	<>
		<Subheading>{"Don’t have a bearded nerd nearby?"}</Subheading>
		<p>{"Click one of the images below to see how it works!"}</p>
		<Examples loading={loading}>
			<a
				key="example-1"
				disabled={loading}
				href="#example"
				onClick={(event) => {
					event.preventDefault();
					handleClick(both);
				}}
			>
				<Example
					src={both}
					alt="Choose this to see who is in the image."
				/>
			</a>
			<a
				key="example-2"
				disabled={loading}
				href="#example"
				onClick={(event) => {
					event.preventDefault();
					handleClick(neither);
				}}
			>
				<Example
					src={neither}
					alt="Choose this to see who is in the image."
				/>
			</a>
			<a
				key="example-3"
				disabled={loading}
				href="#example"
				onClick={(event) => {
					event.preventDefault();
					handleClick(jason);
				}}
			>
				<Example
					src={jason}
					alt="Choose this to see who is in the image."
				/>
			</a>
			<a
				key="example-4"
				disabled={loading}
				href="#example"
				onClick={(event) => {
					event.preventDefault();
					handleClick(kyle);
				}}
			>
				<Example
					src={kyle}
					alt="Choose this to see who is in the image."
				/>
			</a>
			<a
				key="example-5"
				disabled={loading}
				href="#example"
				onClick={(event) => {
					event.preventDefault();
					handleClick(kyle);
				}}
			>
				<Example
					src={kyle}
					alt="Choose this to see who is in the image."
				/>
			</a>
		</Examples>
	</>
);
