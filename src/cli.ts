import { log, note, select } from '@clack/prompts'
import { createMain, defineCommand } from 'citty'
import pc from 'picocolors'
import { args } from '@/args.ts'
import { resolveConfig } from '@/config.ts'
import { isCancelProcess, runAgent, saveConfig } from '@/utils.ts'
import { description, name, version } from '../package.json'

const command = defineCommand({
    meta: {
        name,
        version,
        description,
    },
    args,
    async run({ args }) {
        const config = await resolveConfig(args)

        const projectKeys = Object.keys(config.projects)
        if (config.list) {
            note(projectKeys.map(project => `- ${project} ${pc.cyan(`[ai -p=${project}]`)}`)
                .join('\n'), 'support projects:')
            return ''
        }

        if (config.project && projectKeys.includes(config.project)) {
            config.agent = config.projects[config.project]!.agent
            return await runAgent(config)
        }

        if (projectKeys.includes(config.client.name)) {
            const project = config.projects[config.client.name]!
            config.project = config.client.name
            config.agent = project.agent
            return await runAgent(config)
        }

        const action = await select({
            message: '您准备如何开始？',
            options: [
                { value: 'init', label: '初始化当前项目', hint: '在当前文件夹创建配置' },
                { value: 'switch', label: '进入另一个项目', hint: '切换到其他工作空间' },
            ],
        })
        isCancelProcess(action)

        if (action === 'switch') {
            if (!projectKeys.length) {
                return log.error('没有项目，请先创建项目')
            }

            const projectName = await select({
                message: '请选择您要进入的项目',
                options: projectKeys.map(project => ({
                    value: project,
                    label: project,
                })),
            }) as string

            isCancelProcess(projectName)

            const project = config.projects[projectName]!
            config.client.name = config.project = projectName
            config.client.path = project.path
            config.agent = project.agent

            return await runAgent(config)
        }

        const agent: string = await select({
            message: '请选择您使用的 agent 平台',
            options: [
                { value: 'claude', label: 'ClaudeCode' },
                { value: 'codex', label: 'Codex' },
            ],
        }) as string

        isCancelProcess(agent)
        config.agent = agent

        Object.assign(config.projects, {
            [config.client.name]: {
                path: config.client.path,
                agent,
            },
        })

        await saveConfig(config)

        await runAgent(config)
    },
})

createMain(command)({})
