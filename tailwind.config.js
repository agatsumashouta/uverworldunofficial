/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        myColor1: 'rgb(255, 0, 0)',
        myColor2: 'rgb(33,103,180)',
        myColor3: 'rgb(152,181,205)',
        myColor4: 'rgba(52,53,65,0.5)',
      },
      fontFamily: {
        customFont: ['MyCustomFont', 'Comic Sans MS'],
      },
      fontSize: {
        '8px': '8px',
      },
    },
  },
  plugins: [],
};
