/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #201606 0%, #000000 100%)',
        'custom-gradient-hover': 'linear-gradient(180deg, #4a330d 0%, #000000 100%)',
      },
      boxShadow: {
        'custom-shadow': '0 4px 4px rgba(0, 0, 0, 0.50)',
      },
      animation: {
        'slow-spin': 'spin 5s ease-in infinite',
      },
    },
  },
  plugins: [],
}