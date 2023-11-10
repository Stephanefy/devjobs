const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['Kumbh Sans']
    },
      colors: {
      'app-violet': '#5964E0',
      'app-light-violet': 'rgb(147, 155, 244)',
      'app-very-black-blue': 'rgb(25, 32, 45)',
      'app-midnight': 'rgb(18, 23, 33)',
      'app-light-grey': 'rgb(244, 246, 248)',
      'app-gray': 'rgb(157, 174, 194)',
      'app-dark-grey': 'rgb(110, 128, 152)'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
    addVariablesForColors
  ],
}



// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  })}