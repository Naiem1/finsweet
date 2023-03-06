module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      green: '#1AD993',
      aquamarine: '#ABFFE0',
      blue: '#503AE7',
      purple: '#832BC1',
      black: '#14142B',
      grey: '#AFB0B9',
      'off-white': '#F4F2FF',
      white: '##FFFFFF',
    },
    fontSize: {
      '6xl': ['48px', {
        lineHeight: '52.8px',
        fontWeight: '700',
      }],
      '5xl': ['32px', {
        lineHeight: '38.4px',
        fontWeight: '700',
      }],
      '4xl': ['24px', {
        lineHeight: '30px',
        fontWeight: '600',
      }],
      '3xl': ['20px', {
        lineHeight: '28px',
        fontWeight: '600',
      }],
      '2xl': ['16px', {
        lineHeight: '24px',
        fontWeight: '500',
      }],
      '1xl': ['12px', {
        lineHeight: '18px',
        fontWeight: '500',
      }],
      'body-text': ['16px', {
        lineHeight: '24px',
        fontWeight: '400',
      }],

    }
  },
  plugins: [],
};
