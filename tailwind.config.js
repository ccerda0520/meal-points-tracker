module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#f6f6f6',
        scarlet: '#9b111e',
        darkgray: '#4a4a4a',
        blood: '#65000b',
        white: '#ffffff',
      },
    },
  },
  variants: {},
  plugins: [],
};
