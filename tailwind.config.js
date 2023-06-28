/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle .6s linear',
      },
      keyframes: {
        wiggle: {
          '0%': { opacity: 0, transform: 'scale(2)' },
          '20%': { opacity: 1, transform: 'scale(1)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [
    "t"
  ],
}
