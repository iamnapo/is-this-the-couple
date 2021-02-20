import { Link } from "@material-ui/core";

import logo from "../assets/logo.webp";
import { useFaceApi } from "../utils";

const Header = () => {
	const [, { reset }] = useFaceApi();
	return (
		<header style={{ textAlign: "center" }}>
			<Link href="/" onClick={reset}>
				<img src={logo} alt="Is this the couple?" style={{ maxWidth: "600px", width: "100%" }} />
			</Link>
		</header>
	);
};

export default Header;
