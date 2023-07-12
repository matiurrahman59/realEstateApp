/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				lato: ['Lato_400Regular'],
				raleway: ['Raleway_400Regular'],
				montserrat: ['Montserrat_400Regular'],
			},
			colors: {
				primary: '#8BC83F',
				secondary: '#234F68',
				defaultColor: '#252B5C',
				bodyText: '#53587A',

				'gray--1': '#204D6C',
				'dark--1': '#292929',

				'gray--1': '#DFDFDF',
				'gray--2': '#cccccc',
				'gray--3': '#F5F4F8',
				'gray--4': '#A1A5C1',

				yellow: '#FFC42D',
			},
		},
	},
	plugins: [],
}
