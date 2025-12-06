"use client";

import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#6a2555",
			light: "#eef2fd",
		},
		secondary: {
			main: "#282c34",
		},
		background: {
			default: "#fffdfc",
		},
		text: {
			primary: "#3d4b6d",
		},
	},
	typography: {
		fontFamily: ["var(--dosis)", "-apple-system", "BlinkMacSystemFont", "Arial", "sans-serif"].join(","),
	},
});

export default theme;
