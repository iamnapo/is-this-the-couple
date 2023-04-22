import { Link } from "@mui/material";

import { useFaceApi } from "../utils";

const Header = (): JSX.Element => {
	const [, { reset }] = useFaceApi();
	return (
		<header style={{ textAlign: "center" }}>
			<Link href="/" onClick={reset}>
				<img
					loading="lazy"
					style={{ maxWidth: "600px", width: "100%" }}
					src="https://res.cloudinary.com/iamnapo/image/upload/f_auto,q_auto,w_600/is-this-the-couple/logo"
					alt="Is this the couple?"
				/>
			</Link>
		</header>
	);
};

export default Header;
