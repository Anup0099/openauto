/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#F0F2F4',
        'light-gray': '#EDEDED',
        'light-black': '#414548',
        'white-smoke': '#F5F5F5',

        'light-border': '#414548',
        'light-black2': '#161B25',
      },
    },
    fontFamily: {
      inter: " 'Inter',sans-serif ",
      public: " 'Inter',sans-serif ",
    },
    screens: {
      sm: { max: '640px' },
      md: { min: '641px', max: '820px' },

      lg: { min: '821px', max: '1024px' },
      xl: { min: '1025px', max: '1280px' },
      xxl: { min: '1281px', max: '1536px' },
      '3xl': { min: '1537px', max: '1920px' },
      '4xl': { min: '1921px', max: '2560px' },
    },
  },
  plugins: [],
}
