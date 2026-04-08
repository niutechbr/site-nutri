/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        gio: {
          blue: '#83B0C4',
          dark: '#5B7A8A',
          light: '#F5F9FB',
          text: '#1d1d1f'
        }
      },
      fontFamily: { sans: ['Plus Jakarta Sans', 'sans-serif'] }
    }
  },
  plugins: []
}
