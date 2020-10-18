# nuxt-userbase-module
> User authentication and data storage in
[Nuxt](https://nuxtjs.org) with [Userbase](https://userbase.com).

[![npm](https://img.shields.io/npm/v/nuxt-userbase-module?style=plastic)](https://www.npmjs.com/package/nuxt-userbase-module)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/nuxt-userbase-module?style=plastic)](https://www.npmjs.com/package/nuxt-userbase-module)

## Setup

1. Add `nuxt-userbase-module` dev dependency to your project

```sh
yarn add nuxt-userbase-module
```
or
```sh
npm install nuxt-userbase-module
```

2. Add `nuxt-userbase-module` to the `buildModules` section of `nuxt.config.js`.

3. Add `appId` to the `userbase` section. Take it [here](https://v1.userbase.com/).

```js
export default {
  buildModules: [
    'nuxt-userbase-module',
  ],
  userbase: {
    appId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
  }
}
```

## Usage

After setup, `$userbase` object were injected to vue instances, nuxt context and vuex store.


### Example
You can call it like:

```js
// middleware/example.js
export default async function ({ $userbase }) {
  const session = await $userbase.init()
  console.log(session)

  // or

  const user = await $userbase.signUp({
    username: 'test',
    password: 'test12345678'
  })
  console.log(user)
}
```
[Learn more about context](https://nuxtjs.org/api/context#__layout)


### Methods

This module fully complies with the [Userbase SDK](https://userbase.com/docs/sdk).

You can use methods directly from SDK.

This module is also fully typed with typescript in accordance with the SDK.


## TypeScript

If you are a [Nuxt TypeScript](https://typescript.nuxtjs.org) user, you need to add [declarations](./index.d.ts) to your `.d.ts` file for the module to work correctly.

## License

[MIT License](./LICENSE)

Copyright © Artjom Löbsack
