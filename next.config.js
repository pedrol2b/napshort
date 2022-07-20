/** next.config.js */
const withImages = require('next-images')

module.exports = {
  withImages: withImages({ esModule: true }),
  env: {
    mongodburl: 'mongodb+srv://pedrolbb:6biLQ3rJKXwiXUVd@napshort.adrj7z4.mongodb.net/napshort',
  },
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US',
  },
}
