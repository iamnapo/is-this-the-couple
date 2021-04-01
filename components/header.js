import { Link } from "@material-ui/core";

import { useFaceApi } from "../utils";

const Header = () => {
	const [, { reset }] = useFaceApi();
	return (
		<header style={{ textAlign: "center" }}>
			<Link href="/" onClick={reset}>
				<img src="https://res.cloudinary.com/iamnapo/image/upload/q_auto,f_auto/is-this-the-couple/logo" alt="Is this the couple?" style={{ maxWidth: "600px", width: "100%" }} />
			</Link>
		</header>
	);
};

export default Header;
