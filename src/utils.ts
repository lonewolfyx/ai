import type { IConfig } from '@/types'
import { writeFile } from 'node:fs/promises'
import { cancel, isCancel } from '@clack/prompts'
import { CONFIG_FILE } from '@/constant.ts'

export const runAgent = async (config: IConfig): Promise<void> => {
    const { execa } = await import('execa')
    await execa(config.agent, {
        stdio: 'inherit',
        cwd: config.client.path,
    })
}

export const isCancelProcess = (value: unknown, message: string = 'Operation cancelled'): void => {
    if (isCancel(value)) {
        cancel(message)
        return process.exit(0)
    }
}

export const saveConfig = async (config: IConfig): Promise<void> => {
    await writeFile(CONFIG_FILE, JSON.stringify(config.projects, null, 2))
}
