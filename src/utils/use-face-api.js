import { useState } from "react";
import * as faceapi from "face-api.js";

const getDistance = (reference, upload) => faceapi.utils.round(faceapi.euclideanDistance(reference.descriptor, upload.descriptor));

const FACIAL_MATCH_THRESHOLD = 0.6;

const useFaceApi = () => {
	const [loading, setLoading] = useState(true);
	const [matches, setMatches] = useState({ isJason: false, isKyle: false });
	const [file, setFile] = useState(null);
	const [error, setError] = useState(false);

	if (loading) {
		Promise.all([
			faceapi.loadSsdMobilenetv1Model("./face_model"),
			faceapi.loadFaceLandmarkModel("./face_model"),
			faceapi.loadFaceRecognitionModel("./face_model"),
		]).then(() => {
			setLoading(false);
		});
	}

	const reset = () => {
		setLoading(false);
		setMatches({ isJason: false, isKyle: false });
		setFile(null);
		setError(false);
	};

	const checkFace = async (uploadedFile) => {
		setLoading(true);

		if (!uploadedFile) {
			setError("There was a problem with the upload. Please try again.");
			setLoading(false);
			return;
		}

		// Load our two reference images and the uploaded file.
		const images = await Promise.all(
			["./jason-lengstorf.jpg", "./kyle-shevlin.jpg", uploadedFile].map((imgPath) => faceapi.fetchImage(imgPath)),
		);

		// Find the faces in the uploaded images.
		const [[jason], [kyle], faces] = await Promise.all(
			images.map((img) => faceapi.allFacesSsdMobilenetv1(img)),
		);

		if (!faces[0] || !faces[0].descriptor) {
			setError("We couldn’t find a face in this image.");
			setFile(uploadedFile);
			return;
		}

		const match = faces.find((face) => {
			if (!face.descriptor) {
				return false;
			}

			const isJason = getDistance(jason, face) < FACIAL_MATCH_THRESHOLD;
			const isKyle = getDistance(kyle, face) < FACIAL_MATCH_THRESHOLD;

			if (isJason || isKyle) {
				setError(false);
				setLoading(false);
				setMatches({ isJason, isKyle });
				setFile(uploadedFile);

				// Return true to stop the loop
				return true;
			}

			// Keep looping.
			return false;
		});

		if (!match) {
			setLoading(false);
			setMatches({ isJason: false, isKyle: false });
			setFile(uploadedFile);
		}
	};

	return [{ loading, error, matches, file }, { reset, checkFace, setError }];
};

export default useFaceApi;
