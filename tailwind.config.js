module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      4: '4px',
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
        grey: '#f3f3f4',
        greywhite: '#f2f2f2',
      },
      spacing: {
        96: '24rem',
        128: '32rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
