const colors = require('tailwindcss/colors');
module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gray: colors.blueGray,
			},
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
