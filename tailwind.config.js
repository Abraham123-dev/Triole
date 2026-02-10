/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"General Sans"', 'sans-serif'],
      },
      colors: {
        triloe: {
          blue: '#3452FF',
          dark: '#131313',
          grey: '#5A5A59',
          lightGrey: '#8C8C8C',
          bg: '#FFFFFF',
          offWhite: '#F7F7F7',
          border: '#E5E5E5'
        }
      },
      boxShadow: {
        'card': '0px 4px 24px 0px rgba(0, 0, 0, 0.06)',
        'button': '0px 10px 20px rgba(52, 82, 255, 0.2)',
      },
      borderRadius: {
        '4xl': '40px',
      }
    },
  },
  plugins: [],
}
