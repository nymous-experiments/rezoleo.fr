const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['src/**/*.html'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

const prodPlugins = process.env.NODE_ENV === 'production' ? [purgecss] : []

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-preset-env')({stage: 0}),
    require('autoprefixer'),
    ...prodPlugins,
  ],
}
