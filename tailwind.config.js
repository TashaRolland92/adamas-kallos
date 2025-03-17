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
		backgroundImage: {
			'hero-mobile': "url('/src/assets/hero_mobile.webp')",
			'hero-desktop': "url('/src/assets/hero_desktop.webp')",
			'hero-4k': "url('/src/assets/hero_4k.webp')",
		},
		screens: {
			'retina': {'raw': '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'},
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
			  ".playfair": generateFontClass(["Playfair Display"], 400),
			  ".playfair-500": generateFontClass(["Playfair Display"], 500),
			  ".playfair-600": generateFontClass(["Playfair Display"], 600),
			  ".playfair-700": generateFontClass(["Playfair Display"], 700),
			  ".playfair-800": generateFontClass(["Playfair Display"], 800),
			  ".playfair-900": generateFontClass(["Playfair Display"], 900),
			  ".playfair-italic-400": generateFontClass(["Playfair Display"], 400, "italic"),
			  ".playfair-italic-700": generateFontClass(["Playfair Display"], 700, "italic"),
			  ".playfair-italic-900": generateFontClass(["Playfair Display"], 900, "italic"),

			  // Lato
			  ".lato": generateFontClass(["Lato", "sans-serif"], 400),
			  ".lato-700": generateFontClass(["Lato", "sans-serif"], 700),
			  ".lato-italic-400": generateFontClass(["Lato", "sans-serif"], 400, "italic"),
			  ".lato-italic-700": generateFontClass(["Lato", "sans-serif"], 700, "italic"),
			};

			addUtilities(newUtilities);
		},
	],
};