module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["next/babel"],
		plugins: [
			["import", { libraryName: "@material-ui/core", libraryDirectory: "", camel2DashComponentName: false }, "core"],
		],
	};
};
