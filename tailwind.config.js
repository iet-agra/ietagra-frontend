const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        shimmer: 'shimmer 2s infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('tw-elements/dist/plugin.cjs'),
  ],
});
