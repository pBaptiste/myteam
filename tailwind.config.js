/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'midnight-green' : '#014E56',
        'light-coral' : '#F67E7E',
        'rapture-blue' : '#79C8C7',
        'police-blue' : '#2C6269',
        'deep-jungle-green' : '#004047',
        'sacramento-state-green' : '#012F34',
        'dark-green' : '#002529',
      },
      fontFamily: {
        'sans': ['Livvic','sans-serif'],
      },},
  },
  plugins: [],
}
