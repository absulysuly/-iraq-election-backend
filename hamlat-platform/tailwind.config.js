/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Iraqi flag colors
        'iraqi-red': '#CE1126',
        'iraqi-green': '#007A3D',
        'iraqi-black': '#000000',
        'iraqi-white': '#FFFFFF',
      },
      fontFamily: {
        arabic: ['Tajawal', 'Cairo', 'sans-serif'],
        english: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
