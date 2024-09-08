/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#015438',
        'primary-2': '#7BB401',
      },
      fontFamily: {
        cera: ['Cera Pro', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
