module.exports = {
  content: [
    // https://tailwindcss.com/docs/content-configuration
    './*.php',
    './templates/**/*.php',
  ],
  safelist: [
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': { 'max': '1536px' },

      'xl': { 'max': '1280px' },

      'lg': { 'max': '1024px' },

      'md': { 'max': '768px' },

      'sm': { 'max': '640px' },
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}