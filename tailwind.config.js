const colors = require('tailwindcss/colors');
module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		colors: {
			blue: colors.blue,
			gray: colors.blueGray,
			green: colors.green,
		},
		fontFamily: {
			mont: 'Montserrat, ui-sans-serif',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
