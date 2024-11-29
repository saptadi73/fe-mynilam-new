/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        primary: '#015438',
        'primary-2': '#7BB401',
        'primary-3': '#1DBA66',
        'primary-light': '#E9FDF2',
        'primary-border': '#B0CAC1',
        dark: '#013F2A',
      },
      fontFamily: {
        cera: ['Cera Pro', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
