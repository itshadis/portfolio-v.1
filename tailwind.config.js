/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    'index.html',
    './public/**/*.{html,js}',
  ],
  content: [
    'index.html',
    './public/**/*.{html,js}'],
  theme: {
    fontFamily: {
      'mulish': ['Mulish', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

