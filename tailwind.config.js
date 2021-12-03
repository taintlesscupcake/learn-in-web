module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        carbon: '#A9A9A9',
        watermelon: "#ff3b3f",
        neutral: "#efefef",
        sky: "#caebf2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
