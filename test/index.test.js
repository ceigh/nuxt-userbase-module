const { resolve } = require('path')
const test = require('ava')
const { Nuxt, Builder } = require('nuxt')

test.before('Set config', (t) => {
  const rootDir = resolve(__dirname, 'mock')
  const config = require(resolve(rootDir, 'nuxt.config.js'))
  config.rootDir = rootDir
  config.dev = false
  t.context.config = config // save config to context
})

test('Building fails with bad config', async (t) => {
  const config = { ...t.context.config, userbase: { appId: undefined } }
  const nuxt = new Nuxt(config)
  const { message } = await t.throwsAsync(async () => {
    await new Builder(nuxt).build()
  })
  t.is(message, 'Missing `appId` in userbase options')
})

test('Building pass with right config', async (t) => {
  const config = { ...t.context.config }
  const nuxt = new Nuxt(config)
  await t.notThrowsAsync(async () => {
    await new Builder(nuxt).build()
  })
})
