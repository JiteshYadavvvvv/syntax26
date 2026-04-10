/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#030712', // deep dark background
        glow: '#3b82f6', // blue glow
      },
      fontFamily: {
        sans: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
