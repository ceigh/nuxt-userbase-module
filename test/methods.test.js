const test = require('ava')
const { Nuxt, Builder } = require('nuxt')
const _ = require('./_.js')

test.before('Build and listen', async (t) => {
  const nuxt = new Nuxt(_.getConfig())
  t.context.nuxt = nuxt
  await new Builder(nuxt).build()
  nuxt.listen(4000, 'localhost')
})

test('Route / exists and render HTML', async (t) => {
  const { nuxt } = t.context
  const { html } = await nuxt.renderRoute('/')
  const regexp = /data:\[{\$userbase:{init/
  t.true(regexp.test(html))
})

test.after('Close server', (t) => {
  const { nuxt } = t.context
  nuxt.close()
})
