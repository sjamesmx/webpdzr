const baseConfig = require('./base.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme.extend,
      backgroundColor: {
        DEFAULT: '#FFFFFF',
      },
      textColor: {
        DEFAULT: '#0F172A',
      },
    },
  },
}