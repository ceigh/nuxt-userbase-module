# ⚾️ nuxt-userbase-module
> User authentication and data storage in
[Nuxt](https://nuxtjs.org) with [Userbase](https://userbase.com).


## Setup

1. Add `nuxt-userbase-module` dev dependency to your project

```bash
yarn add -D nuxt-userbase-module # or npm i -D nuxt-userbase-module
```

2. Add `nuxt-userbase-module` to the `buildModules` section of `nuxt.config.js` with `appId` in options from your [Userbase app](https://v1.userbase.com/).

```js
{
  buildModules: [
    [
      'nuxt-userbase-module',
      { appId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' }  // required
    ]
  ]
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
[Learn more about context](https://nuxtjs.org/api/contex)


### Methods

This module fully complies with the [Userbase SDK](https://userbase.com/docs/sdk).

You can use methods directly from SDK.

This module is also fully [typed](./types/userbase.d.ts) with typescript in accordance with the SDK.


## Notes

If you are a [Nuxt TypeScript](https://typescript.nuxtjs.org) user, you must add this to your `~/types/index.d.ts` (or other file) for the module to work correctly:

```ts
declare module '@nuxt/types' {
  interface Context {
    $userbase: any  // TODO: pass correct type
  }
}
```

## License

[MIT License](./LICENSE)

Copyright (c) Artjom Löbsack
