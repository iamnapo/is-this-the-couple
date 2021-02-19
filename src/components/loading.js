import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import icon from "../assets/images/icon.png";

const colors = {
	lightest: "#fffdfc",
	darkest: "#0b2055",
	dark: "#3d4b6d",
	light: "#eef2fd",
	brand: "#6a2555",
};
const radar = keyframes`
  from {
    opacity: 1;
    transform: scale(0.45) rotate(5deg);
  }
  90% {
    opacity: 0;
  }
  to {
    opacity: 0;
    transform: scale(1) rotate(-3deg);
  }
`;

const Loading = styled("div")`
  align-items: center;
  background-color: ${colors.light};
  border-radius: 1rem;
  display: flex;
  height: 150px;
  margin-top: 2rem;
  position: relative;
  ::after,
  ::before {
    animation: ${radar} 2s ease infinite;
    border-radius: 50%;
    border: 4px solid ${colors.brand};
    border-top-color: transparent;
    border-bottom-color: transparent;
    content: ' ';
    height: 150px;
    left: calc(50% - 80px);
    position: absolute;
    top: calc(50% - 80px);
    transform: scale(0.01);
    width: 150px;
    z-index: 2;
  }
  ::after {
    animation-delay: 1s;
  }
`;

const Icon = styled("img")`
  flex: 1;
  margin: 0 auto;
  max-width: 100px;
  z-index: 1;
  * {
    margin-top: 0;
  }
`;

export default () => (
	<Loading>
		<Icon src={icon} alt="Loading." />
	</Loading>
);
