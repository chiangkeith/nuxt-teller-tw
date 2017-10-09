# Teller-TW

> personal blog

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## nuxtent-module

'cause posts data are composed in markedown format like:

```
---
titile: hihi
---

Hello World
```

Teller-tw takes [nuxtent-module](https://github.com/nuxt-community/nuxtent-module) as the tool to render all posts content and generate static files with it.


## trouble-shooting

If got problem `cannot find module '.../nuxtjs/axios'`, check if `@nuxtjs/axios` is installed correctly. This would cause nuxtent couldn't work properly.

