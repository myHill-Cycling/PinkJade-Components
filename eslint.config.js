import { astro } from "@myhill-cycling/pinkjade-configuration/eslint";

export default [
	...astro,
	{
		rules: {
			"astro/jsx-a11y/anchor-is-valid": "off"
		}
	}
];
