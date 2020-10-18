const test = require('ava')
const { Nuxt, Builder } = require('nuxt')
const _ = require('./_.js')

test.before('Set config', (t) => {
  t.context.config = _.getConfig()
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
