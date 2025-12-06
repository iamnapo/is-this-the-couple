import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigIamnapo from "eslint-config-iamnapo";

const config = defineConfig([
	{
		files: [eslintConfigIamnapo.filePatterns.react],
		extends: [eslintConfigIamnapo.configs.react],
	},
	{
		files: [eslintConfigIamnapo.filePatterns["react-typescript"]],
		extends: [eslintConfigIamnapo.configs["react-typescript"]],
	},
	globalIgnores([".next", "next-env.d.ts", ".netlify", "public/workbox-*", "public/sw*"]),
]);

export default config;
