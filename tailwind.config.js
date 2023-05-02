/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      },
      height: {
'128': '32rem',
'130':'40rem',
'132':'45rem',
'140':'125rem',
'141':'145rem',
'100':'28rem',
'135':'70rem'
},
colors: {

'myblue': '#B4E8F6',
},
screens: {
'2xl': {'max': '2095px'},
// => @media (max-width: 1535px) { ... }

'desk': {'max': '1279px'},
// => @media (max-width: 1279px) { ... }

'lappy': {'max': '1023px'},
// => @media (max-width: 1023px) { ... }

'tab': {'max': '767px'},
// => @media (max-width: 767px) { ... }

'phone': {'max': '639px'},
// => @media (max-width: 639px) { ... }

'sphone': {'max': '400px'},
// => @media (max-width: 639px) { ... }
},
    }
  
  },
  plugins: [],
}

