import { useEffect, useState } from "react";
import * as faceapi from "face-api.js";

const getDistance = (reference, upload) => faceapi.utils.round(faceapi.euclideanDistance(reference.descriptor, upload.descriptor));

const FACIAL_MATCH_THRESHOLD = 0.6;

const useFaceApi = () => {
	const [loading, setLoading] = useState(true);
	const [matches, setMatches] = useState({ isMary: false, isNapo: false, faceCount: 0 });
	const [file, setFile] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		let isMounted = true;

		(async () => {
			await Promise.all([
				faceapi.loadSsdMobilenetv1Model("./models"),
				faceapi.loadFaceLandmarkModel("./models"),
				faceapi.loadFaceRecognitionModel("./models"),
			]);
			if (isMounted) setLoading(false);
		})();

		return () => { isMounted = false; };
	}, []);

	const reset = () => {
		setLoading(false);
		setMatches({ isMary: false, isNapo: false, faceCount: 0 });
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
			["./mary.jpg", "./napo.jpg", uploadedFile].map((imgPath) => faceapi.fetchImage(imgPath)),
		);

		// Find the faces in the uploaded images.
		const [[mary], [napo], faces] = await Promise.all(
			images.map((img) => faceapi.detectAllFaces(img, new faceapi.SsdMobilenetv1Options()).withFaceLandmarks().withFaceDescriptors()),
		);

		if (!faces[0] || !faces[0].descriptor) {
			setError("We couldn’t find a face in this image.");
			setFile(uploadedFile);
			return;
		}

		for (const face of faces) {
			if (face.descriptor) {
				if (getDistance(mary, face) < FACIAL_MATCH_THRESHOLD) setMatches((p) => ({ ...p, isMary: true }));
				if (getDistance(napo, face) < FACIAL_MATCH_THRESHOLD + 0.1) setMatches((p) => ({ ...p, isNapo: true }));
			}
		}

		setMatches((p) => ({ ...p, faceCount: faces.length }));
		setFile(uploadedFile);
		setLoading(false);
		setError(false);
	};

	return [{ loading, error, matches, file }, { reset, checkFace, setError }];
};

export default useFaceApi;
