module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["next/babel"],
		plugins: [
			["import", { libraryName: "@mui/material", libraryDirectory: "", camel2DashComponentName: false }, "core"],
		],
	};
};
