/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        chirp: ['Chirp-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

