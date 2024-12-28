/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "0rem",
					lg: "0rem",
					xl: "0rem",
					"2xl": "1.5rem",
				},
			},
			fontFamily: {
				DIN_Next_LT_Arabic: ["DIN Next LT Arabic", "sans-serif"],
			},

			colors: {
				"bg-light": "#ffffff",
				"bg-darken": "#f8f8f8",

				grayscale: {
					50: "#eeeeee",
					100: "#e8e8e8",
					200: "#cccccc",
					300: "#ababab",
					400: "#7d7d7d",
					500: "#666666",
					600: "#333333",
					700: "#000000",
				},
				primary: {
					50: "#fae7e8",
					100: "#fae7e8",
					200: "#f1b8b9",
					300: "#eda0a2",
					400: "#e37073",
					500: "#da4145",
					600: "#d6292d",
					700: "#d11116",
					800: "#bc0f14",
					900: "#a70e12",
				},
				warning: {
					50: "#fff7e5",
					100: "#fff5cc",
					200: "#ffeb99",
					300: "#ffd633",
					400: "#7D7D7D",
					500: "#ffcc00",
					600: "#cca300",
					700: "#997a00",
				},
				success: {
					50: "#ebfaef",
					100: "#d7f4de",
					200: "#aeeabd",
					300: "#86df9c",
					400: "#59d478",
					500: "#34c759",
					600: "#299e46",
					700: "#207936",
				},
				error: {
					50: "#ffeceb",
					100: "#ffd8d6",
					200: "#ffb1ad",
					300: "#ff8b85",
					400: "#ff645c",
					500: "#ff3b30",
					600: "#7a0600",
				},
			},

			keyframes: {
				"custom-bounce": {
					"0%, 100%": { transform: "translateY(4)" },
					"50%": { transform: "translateY(-4px)" },
				},
			},
			animation: {
				"custom-bounce": "custom-bounce 2.5s ease-in-out infinite",
			},
			boxShadow: {
				"custom-shadow": "0px 0px 35px 0px rgba(0, 0, 2, 0.07)",
				serviceBoxShadow: "0px 12px 35px 0px rgba(93, 76, 77, 0.2)",
				"aboutUs-shadow": "12px 12px 35px 0px rgba(209, 17, 22, 0.08)",
				"form-red-blur": "0px 0px 35px 0px rgba(209, 17, 22, 0.1)",
				"inner-custom": "inset 0px 0px 16px 0px rgba(74, 50, 50, 0.1)",
			},

			backgroundImage: {
				"custom-gradient":
					"linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 70%)",
			},
		},
	},
	plugins: [],
};
