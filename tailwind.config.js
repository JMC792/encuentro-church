/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    container: {
      center: true,
      padding: '1.5rem'
    },
    extend: {
      backgroundImage: {
        'back-1': "url('..//public/images/qr-code.png')",
        'back-2': "url('..//public/images/donation/raisedHands.jpg')",
        'back-3': "url('..//public/images/coffee.jpg')",
        'back-4': "url('..//public/images/pink-background-2.jpg')",
      }
    },
  },
  plugins: [],
}
