import path from "path";

module.exports = {
	assetsInclude: "public/*",
	resolve: {
		alias: {
			"@": `${path.resolve(__dirname, "src")}`,
		},
	},
};
