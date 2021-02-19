import { useFaceApi } from "../utils";
import Error from "../components/error";
import Loading from "../components/loading";
import Dropzone from "../components/dropzone";
import Examples from "../components/examples";
import WhoIsIt from "../components/who-is-it";
import Reset from "../components/reset";
import About from "../components/about";

const Home = () => {
	const [{ loading, error, matches, file }, { reset, checkFace, setError }] = useFaceApi();

	return (
		<>
			{!file && (
				<>
					<p>
						{"Is there a bald, bearded man in front of you? Is he talking at"}
						{"length about code? Not sure if it’s"}
						{" "}
						<a href="https://twitter.com/kyleshevlin">{"Kyle Shevlin"}</a>
						{" "}
						{"or"}
						{" "}
						<a href="https://twitter.com/jlengstorf">{"Jason Lengstorf"}</a>
						{"?"}
					</p>
					<p>
						<strong>{"We can help!"}</strong>
						{" "}
						{"Upload an image of this bearded"}
						{"stranger and we’ll tell you which nerd you’re dealing with."}
					</p>
				</>
			)}
			<Error error={error} />
			{!file && (
				<>
					{loading ? (
						<Loading />
					) : (
						<Dropzone handleDrop={checkFace} handleError={setError} />
					)}
					<Examples handleClick={checkFace} loading={loading} />
				</>
			)}
			{file && (
				<>
					{!error && <WhoIsIt {...matches} file={file} />}
					<Reset reset={reset} />
				</>
			)}
			<About />
		</>
	);
};

export default Home;
