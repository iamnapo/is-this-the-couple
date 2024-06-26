import { useCallback, useState } from "react";

const FACIAL_MATCH_THRESHOLD = 0.6;

const useFaceApi = () => {
	const [loading, setLoading] = useState(true);
	const [matches, setMatches] = useState({ isMary: false, isNapo: false, faceCount: 0 });
	const [file, setFile] = useState(null);
	const [error, setError] = useState(false);
	const loadModels = useCallback(() => import("face-api.js").then(({ nets }) => Promise.all([
		nets.tinyFaceDetector.loadFromUri("/models/"),
		nets.faceLandmark68TinyNet.loadFromUri("/models/"),
		nets.faceRecognitionNet.loadFromUri("/models/"),
	])).then(() => setLoading(false)), []);

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

		const { utils, euclideanDistance, fetchImage, detectAllFaces, TinyFaceDetectorOptions } = await import("face-api.js");

		// Load our two reference images and the uploaded file.
		let images = [];
		try {
			images = await Promise.all(["./mary.jpg", "./napo.jpg", uploadedFile].map(fetchImage));
		} catch {
			setError("There was an error with the uploaded file.  Only JPG and PNG images are accepted.");
			setLoading(false);
			return;
		}

		// Find the faces in the uploaded images.
		const [[mary], [napo], faces] = await Promise.all(
			images.map((img) => detectAllFaces(img, new TinyFaceDetectorOptions()).withFaceLandmarks(true).withFaceDescriptors()),
		);

		if (!faces[0] || !faces[0].descriptor) {
			setError("We couldn’t find a face in this image.");
			setFile(uploadedFile);
			return;
		}

		const getDistance = (ref, upload) => utils.round(euclideanDistance(ref.descriptor, upload.descriptor));

		for (const face of faces) {
			if (face.descriptor) {
				if (getDistance(mary, face) < FACIAL_MATCH_THRESHOLD) {
					setMatches((p) => ({ ...p, isMary: true }));
				} else if (getDistance(napo, face) < FACIAL_MATCH_THRESHOLD) {
					setMatches((p) => ({ ...p, isNapo: true }));
				}
			}
		}

		setMatches((p) => ({ ...p, faceCount: faces.length }));
		setFile(uploadedFile);
		setLoading(false);
		setError(false);
	};

	return [{ loading, error, matches, file }, { reset, checkFace, setError, loadModels }];
};

export default useFaceApi;
