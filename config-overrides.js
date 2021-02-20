const { fixBabelImports, override } = require("customize-cra");

module.exports = override(fixBabelImports("@material-ui/core", { libraryDirectory: ".", camel2DashComponentName: false }));
