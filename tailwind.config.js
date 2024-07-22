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