/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8BC83F',
        secondary: '#234F68',
        'gray--1': '#204D6C',

        'dark--1': '#292929',
        'dark--2': '#252B5C',

        'gray--1': '#DFDFDF',
        'gray--2': '#cccccc',
        'gray--3': '#F5F4F8',
        'gray--4': '#A1A5C1',
      },
    },
  },
  plugins: [],
};
