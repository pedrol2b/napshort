/** next.config.js */
const withImages = require('next-images')

module.exports = {
  withImages: withImages({ esModule: true }),
  env: {
    mongodburl: 'YOUR_MONGO_URL',
  },
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US',
  },
}
