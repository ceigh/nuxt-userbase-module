import { resolve } from 'path'
import anyTest, { TestInterface } from 'ava'
// @ts-ignore
import { Nuxt } from 'nuxt'

export interface Config {
  buildModules: string[],
  userbase: {
    appId?: string
  },
  dev: boolean
}
export function getConfig (): Config {
  const rootDir = resolve(__dirname, '../../test/fixture')
  const config = require(resolve(rootDir, 'nuxt.config.js'))
  config.rootDir = rootDir
  return config
}

export interface Context {
  config?: Config,
  nuxt?: Nuxt
}
const test = anyTest as TestInterface<Context>
export default test
