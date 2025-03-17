/** @type {import('tailwindcss').Config} */

export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		fontFamily: {
			playfair: ["Playfair Display", "serif"],
			lato: ["Lato", "sans-serif"],
		},
		colors: {
			primaryContent: "#0E4148",
			babyblue: "#e4f4f3",
			aquamarine: "#a1dbf1",
			tiffanyblue: "#71d5e4",
			bluegreen: "#00b6bc",
		},
	  },
	},
	plugins: [
		function ({ addUtilities }) {
			const generateFontClass = (fontFamily, weight, style = "normal") => {
			  return {
				fontFamily: fontFamily,
				fontWeight: weight,
				fontStyle: style,
			  };
			};

			const newUtilities = {
			  // Playfair Display
			  ".playfair-regular": generateFontClass(["Playfair Display", "serif"], 400),
			  ".playfair-500": generateFontClass(["Playfair Display", "serif"], 500),
			  ".playfair-600": generateFontClass(["Playfair Display", "serif"], 600),
			  ".playfair-700": generateFontClass(["Playfair Display", "serif"], 700),
			  ".playfair-800": generateFontClass(["Playfair Display", "serif"], 800),
			  ".playfair-900": generateFontClass(["Playfair Display", "serif"], 900),
			  ".playfair-italic-400": generateFontClass(["Playfair Display", "serif"], 400, "italic"),
			  ".playfair-italic-700": generateFontClass(["Playfair Display", "serif"], 700, "italic"),
			  ".playfair-italic-900": generateFontClass(["Playfair Display", "serif"], 900, "italic"),

			  // Lato
			  ".lato-regular": generateFontClass(["Lato", "sans-serif"], 400),
			  ".lato-700": generateFontClass(["Lato", "sans-serif"], 700),
			  ".lato-italic-400": generateFontClass(["Lato", "sans-serif"], 400, "italic"),
			  ".lato-italic-700": generateFontClass(["Lato", "sans-serif"], 700, "italic"),
			};

			addUtilities(newUtilities);
		},
	],
};