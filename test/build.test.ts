// @ts-ignore
import { Nuxt, Builder } from 'nuxt'
import test, { getConfig } from './_'

test.before('Set config', (t) => {
  t.context.config = getConfig()
})

test.serial('Building pass with right config', async (t) => {
  const config = { ...t.context.config }
  const nuxt = new Nuxt(config)
  await t.notThrowsAsync(async () => {
    await new Builder(nuxt).build()
  })
})
