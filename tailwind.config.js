const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	purge: {
		enabled: true,
		content: ["./src/*.html"],
		safelist: ["left-1/4"],
	},
	theme: {
		extend: {
			gridTemplateColumns: {
				kozep: "1fr 5fr 1fr",
			},
			fontFamily: {
				sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				zold: {
					base: "#62c6b2",
					"base-d": "#3D9382",
					"base-dd": "#368676",
				},
				teal: {
					800: "#00695c",
					900: "#004d40",
					"accent-100": "#a7ffeb",
					"accent-200": "#64ffda",
					"accent-400": "#1de9b6",
					"accent-700": "#00bfa5",
				},
				gray: {
					50: "#fafafa",
					100: "#f5f5f5",
					200: "#eeeeee",
					300: "#e0e0e0",
					400: "#bdbdbd",
					500: "#9e9e9e",
					600: "#757575",
					700: "#616161",
					800: "#424242",
					900: "#212121",
				},
			},
			spacing: {
				7: "1.75rem",
				9: "2.25rem",
				28: "7rem",
				80: "20rem",
				96: "24rem",
			},
			height: {
				"1/2": "50%",
			},
			spacing: {
				"navfull-16": "calc(100% - 4rem)",
				"navfull-20": "calc(100% - 5rem)",
				"navfel-16": "calc(50% - 2rem)",
				"navfel-20": "calc(50% - 2.5rem)",
				"navnegyed-16": "calc(25% - 1rem)",
				"navnegyed-16": "calc(25% - 1.25rem)",
				"nav34-16": "calc(75% - 3rem)",
				"nav34-20": "calc(75% - 3.75rem)",
			},
			scale: {
				30: ".3",
			},
			boxShadow: {
				outline: "0 0 0 3px rgba(101, 31, 255, 0.4)",
			},
		},
	},
	variants: {
		textColor: ["responsive", "hover", "focus"],
		opacity: ["responsive", "hover", "focus"],
		backgroundColor: ["hover", "focus"],
	},
	plugins: [],
};
