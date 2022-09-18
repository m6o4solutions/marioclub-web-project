/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html'],
	theme: {
		fontFamily: {
			ubuntu: 'Ubuntu, sans-serif',
		},
		extend: {
			colors: {
				redOrange: '#F63232',
				orangeYellow: '#FEB614',
				lightGray: '#F4F4F4',
				darkGray: '#4B4B4B',
				neon: '#71d300',
			},
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
	],
};
