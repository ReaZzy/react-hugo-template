const production = process.env.NODE_ENV === 'production';
module.exports = {
  content: [
    './content/**/*.html',
    './static/**/*.{js,tsx, html}',
    './layouts/**/*.{html}',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
  ...(production ? {} : { safelist: [{ pattern: /./ }] }),
};
