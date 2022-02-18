const themeDir = __dirname + '../../../';

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [themeDir + '/hugo_stats.json'],
  defaultExtractor: (content: string) => {
    let els = JSON.parse(content).htmlElements;
    return els.tags.concat(els.classes, els.ids);
  },
});

module.exports = {
  plugins: [
    require('postcss-import')({
      path: [themeDir],
    }),
    require('tailwindcss')(themeDir + './tailwind.config.ts'),
    require('autoprefixer')({
      path: [themeDir],
    }),
  ],
  ...(process.env.NODE_ENV === 'production' ? { purgecss } : {}),
};
