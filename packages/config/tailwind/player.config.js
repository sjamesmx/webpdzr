const baseConfig = require('./base.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  darkMode: 'class',
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme.extend,
      backgroundColor: {
        DEFAULT: '#0B0F19',
      },
      textColor: {
        DEFAULT: '#FFFFFF',
      },
    },
  },
}