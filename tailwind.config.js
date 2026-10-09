/** @type {import('tailwindcss').Config} */
module.exports = {
  // Classes are also generated from JS templates and the EN dictionary
  content: ['./index.html', './assets/script.js', './assets/i18n.js'],
  theme: {
    extend: {
      screens: { nav: '1091px' }, // desktop nav from 1091px; mobile menu at ≤1090px
      colors: {
        // FDI palette — green 70% (brand) · blue 20% (navy) · orange 10% (accent)
        brand: { DEFAULT: '#18A84C', dark: '#12903F' },
        ink: '#163A75', off: '#1546A0', muted: '#5E6878', subtle: '#8A93A3',
        sky: '#E7F8EC', mint: '#CDF0D8', line: '#A8E6BD',
        accent: { DEFAULT: '#F7941D', dark: '#D9690A', soft: '#FFF3E6' },
        fog: { 100: '#E9EAED', 200: '#D4D6DB', 300: '#C4C6CC' } // light text on blue backgrounds
      },
      fontFamily: {
        sans: ['Noto Sans Thai', 'system-ui', 'sans-serif'],
        en: ['Noto Sans Thai', 'system-ui', 'sans-serif'],
        th: ['Noto Sans Thai', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: 'rgba(0,0,0,.04) 0 2px 6px, rgba(0,0,0,.06) 0 5px 18px, rgba(0,0,0,.1) 0 24px 83px',
        btn: 'rgba(0,0,0,.03) 0 4px 6.4px, rgba(0,0,0,.05) 0 3px 9.6px, rgba(0,0,0,.07) 0 8px 32px, rgba(0,0,0,.1) 0 32px 96px',
        lift: 'rgba(0,0,0,.25) 0 15px 50px'
      },
      borderRadius: { loom: '44px' },
      spacing: { '4.5': '18px', '13': '52px', '18': '72px', '26': '104px', '30': '120px' }
    }
  }
};
