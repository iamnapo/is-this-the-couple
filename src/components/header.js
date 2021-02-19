import styled from "@emotion/styled";

import logo from "../assets/images/which-beard.jpg";

const Logo = styled("img")`
  max-width: 600px;
  * {
    margin-top: 0;
  }
`;

const Header = styled("header")`
	margin: 0 auto 2rem;
  display: flex;
	place-content: center;
`;

export default () => (
	<Header>
		<Logo
			src={logo}
			alt="Which beard is this?"
		/>
	</Header>
);
