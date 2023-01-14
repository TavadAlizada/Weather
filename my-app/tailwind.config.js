/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",

  '*.{html,js}'], 
  theme: {
    extend: {
      colors:{
        'blue':'#bac8d4',
        'black':'rgba(8, 8, 8, 0.3)',
      },
    },
  },
  plugins: [],
}
