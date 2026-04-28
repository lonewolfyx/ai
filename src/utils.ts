import type { IConfig } from '@/types'
import { cancel, isCancel } from '@clack/prompts'

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
