import { dirname } from 'node:path'
import * as process from 'node:process'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)

export const ROOT_PATH = dirname(__filename)

export const CLIENT_PATH = process.cwd()
