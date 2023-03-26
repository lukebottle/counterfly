/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.html',
    './*.html'
    ],
  content: [],
  theme: {
    extend: {
      colors:{
        coral: {
          100: "#fce2de",
          200: "#fac6bd",
          300: "#f7a99b",
          400: "#f58d7a",
          500: "#f27059",
          600: "#c25a47",
          700: "#914335",
          800: "#612d24",
          900: "#301612"
        },
        purple: {
          100: "#ebddff",
          200: "#d8baff",
          300: "#c498ff",
          400: "#b175ff",
          500: "#9d53ff",
          600: "#7e42cc",
          700: "#5e3299",
          800: "#3f2166",
          900: "#1f1133"
        },
        green: {
          100: "#e1ebdc",
          200: "#c3d6b8",
          300: "#a6c295",
          400: "#88ad71",
          500: "#6a994e",
          600: "#557a3e",
          700: "#405c2f",
          800: "#2a3d1f",
          900: "#151f10"
        },
        indigo: {
          100: "#dee8e8",
          200: "#bcd1d1",
          300: "#9bb9b9",
          400: "#79a2a2",
          500: "#588b8b",
          600: "#466f6f",
          700: "#355353",
          800: "#233838",
          900: "#121c1c"
      },
      cream: {
          100: "#fff7f3",
          200: "#ffeee7",
          300: "#ffe6da",
          400: "#ffddce",
          500: "#ffd5c2",
          600: "#ccaa9b",
          700: "#998074",
          800: "#66554e",
          900: "#332b27"
      },
      orange: {
          100: "#fce9d8",
          200: "#fad2b1",
          300: "#f7bc89",
          400: "#f5a562",
          500: "#f28f3b",
          600: "#c2722f",
          700: "#915623",
          800: "#613918",
          900: "#301d0c"
      },
      red: {
          100: "#f4ddd8",
          200: "#e9bbb1",
          300: "#de998b",
          400: "#d37764",
          500: "#c8553d",
          600: "#a04431",
          700: "#783325",
          800: "#502218",
          900: "#28110c"
},
    black: {
        100: "#d0d0d0",
        200: "#a1a1a1",
        300: "#727272",
        400: "#434343",
        500: "#1D1D1D",
        600: "#101010",
        700: "#0c0c0c",
        800: "#080808",
        900: "#040404"
    },
      },
      screens: {
        // Tiny => @media (min-width: 320px) { ... }
        'ty': '320px',
        // Mobile
        'md': '640px',
        // Tablet
        'sm': '768px',
        // Desktop
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'tiny': {'max': '320px'},
        'mob': {'max': '768px'},
      },
      fontFamily:{
        'montserrat': ['Montserrat', 'sans-serif'],
        'logo': ['Space Grotesk', 'sans-serif']
      },
      backgroundImage:{
        'hero-main': "url('../images/mesh-gradient.png')",
        'hero-about': "url('../images/mesh-gradient-about.png')",
        'hero-footer-block': "url('../images/mesh-gradient-footer.png')",
        'page': "url('../images/page-bg.webp')",
        'grid': "url('../images/grid.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-bg-patterns'),
  ],
}
