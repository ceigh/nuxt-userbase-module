# ⚾️ nuxt-userbase-module
> User authentication and data storage in
[Nuxt](https://nuxtjs.org) with [Userbase](https://userbase.com).

![npm](https://img.shields.io/npm/v/nuxt-userbase-module?style=plastic)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/nuxt-userbase-module?style=plastic)


## Setup

1. Add `nuxt-userbase-module` dev dependency to your project

```bash
yarn add -D nuxt-userbase-module # or npm i -D nuxt-userbase-module
```

2. Add `nuxt-userbase-module` to the `buildModules` section of `nuxt.config.js`.

3. Add `appId` to the `userbase` section. Take it [here](https://v1.userbase.com/).

```js
{
  buildModules: [
    'nuxt-userbase-module',
  ],
  userbase: {
    appId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
  }
}
```


## Usage

After setup, `$userbase` object were injected to nuxt `context`.


### Example
You can call it like:

```js
// ~/middleware/example.js
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

This module is also fully [typed](./types) with typescript in accordance with the SDK.


## Notes

If you are a [Nuxt TypeScript](https://typescript.nuxtjs.org) user, you must add this to your `~/types/index.d.ts` (or other file) for the module to work correctly:

```ts
import { Userbase } from 'nuxt-userbase-module/types'

declare module '@nuxt/types' {
  interface Context {
    $userbase: Userbase
  }
}
```


## Development

This project is build with [Yarn 2 Berry](https://github.com/yarnpkg/berry).

So it supports [Zero-Installs](https://yarnpkg.com/features/zero-installs), you need just:

```bash
git clone git@github.com:ceigh/nuxt-userbase-module.git
cd nuxt-userbase-module

# now you can start development
yarn watch
```


## License

[MIT License](./LICENSE)

Copyright (c) Artjom Löbsack
