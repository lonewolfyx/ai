import { dirname, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)

export const ROOT_PATH = dirname(__filename)

export const CLIENT_PATH = process.cwd()

export const CONFIG_FILE = resolve(ROOT_PATH, 'ai.config.json')
