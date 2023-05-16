/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.{html,js}',
  ],
  content: ['./public/**/*.{html,js}'],
  theme: {
    fontFamily: {
      'mulish': ['Mulish', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

