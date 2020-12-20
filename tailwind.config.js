const colors = require('tailwindcss/colors');
module.exports = {
	purge: ['./src/**/*.{html,js}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gray: colors.blueGray,
				lblue: colors.lightBlue,
			},
		},
		fontFamily: {
			mont: 'Montserrat, ui-sans-serif, sans-serif',
			// crete: 'Crete Round, ui-sans-serif, sans-serif',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
