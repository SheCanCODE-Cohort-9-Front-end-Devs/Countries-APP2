/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm': '320px',
      'md': '768px',
    },

    extend: {
      backgroundImage: {
        'header-background': "url('./header-bg_720.png')",
        'footer-texture': "url('/img/footer-texture.png')",
       }
    },
  },
  plugins: [],
}