import type { CommandArgs, IAiConfig, IConfig } from '@/types'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { findUp } from 'find-up'
import { CLIENT_PATH, ROOT_PATH } from '@/constant.ts'

export async function resolveConfig(options: CommandArgs): Promise<IConfig> {
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

    const client_name = path.basename(CLIENT_PATH)

    return {
        ...options,
        client: {
            name: client_name,
            path: CLIENT_PATH,
        },
        projects,
    } as IConfig
}
