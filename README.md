# NapShort

> ⚠️ This repository will no longer receive updates and will be **archived**, in the future i'll be refactoring this project.

🚀 **NapShort** is a elegant and modern URL shortener built with NextJs and MongoDB
[https://napshort.herokuapp.com/](https://napshort.herokuapp.com/)

![preview](https://user-images.githubusercontent.com/107975184/194691574-98eac24d-67b3-49b4-862d-89e6e9ce3ee5.png)

## Beware

You will need to change _next.config.js_ and provide your own mongo connection string

```
/** next.config.js */
const withImages = require('next-images')

module.exports = {
  withImages: withImages({ esModule: true }),
  env: {
    mongodburl: 'YOUR_MONGO_URL', // Your own String here!!
  },
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'en-US',
  },
}
```

## Features

- [x] Free and open source

- [x] Responsive UI

- [x] Support for i18n english and portuguese

- [x] Dark theme

- [x] Store shortened urls in cookies
