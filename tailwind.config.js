/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', 'app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#110021',
				accentRed: '#C1272D',
				price: '#FEB536',
				lightRed: '#FF5F5F',
				mDark: '#0E1110'
			}
		}
	},
	plugins: []
}
