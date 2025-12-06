"use client";

import { useEffect } from "react";

const LayoutClient = () => {
	useEffect(() => {
		void globalThis.navigator.serviceWorker?.register("/sw.js", { scope: "/" });
	}, []);

	return null;
};

export default LayoutClient;
