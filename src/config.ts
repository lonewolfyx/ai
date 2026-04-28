import type { CommandArgs, IAiConfig, IConfig } from '@/types'
import { readFile } from 'node:fs/promises'
import { findUp } from 'find-up'
import { ROOT_PATH } from '@/constant.ts'

export const resolveConfig = async (options: CommandArgs): Promise<IConfig> => {
    let projects: IAiConfig = {}
    const projectConfigPath = await findUp('ai.config.json', {
        cwd: ROOT_PATH,
    })

    if (!projectConfigPath) {
        projects = {}
    }
    else {
        projects = JSON.parse(await readFile(projectConfigPath, 'utf-8')) as IAiConfig
    }

    return {
        ...options,
        projects,
    } as IConfig
}
