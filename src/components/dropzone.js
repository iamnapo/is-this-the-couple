/* eslint-disable react/prop-types */
import Dropzone from "react-dropzone";
import styled from "@emotion/styled";

const colors = {
	lightest: "#fffdfc",
	darkest: "#0b2055",
	dark: "#3d4b6d",
	light: "#eef2fd",
	brand: "#6a2555",
};
const Drop = styled("section")`
  align-items: center;
  background-color: ${colors.light};
  border: 2px dashed ${colors.darkest};
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  height: 150px;
  margin-top: 2rem;
  padding: 2rem;
`;

const HelpText = styled("p")`
  flex: 1;
  max-width: 300px;
  text-align: center;
`;

export default ({ handleDrop, handleError }) => (
	<Dropzone
		accept="image/jpeg, image/png"
		onDrop={(accepted) => {
			const file = accepted[0];
			const reader = new FileReader();

			reader.addEventListener("load", () => {
				const fileAsDataURL = reader.result;

				handleDrop(fileAsDataURL);
			});

			try {
				reader.readAsDataURL(file);
			} catch {
				handleError(
					"There was an error with the uploaded file.  Only JPG and PNG images are accepted.",
				);
			}
		}}
		activeStyle={{ borderStyle: "solid" }}
	>
		{({ getRootProps, getInputProps }) => (
			<Drop>
				<div {...getRootProps()}>
					<input {...getInputProps()} />
					<HelpText>
						{"Drop an image here or click to choose an image from your device."}
					</HelpText>
				</div>
			</Drop>
		)}
	</Dropzone>
);
