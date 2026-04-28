import type { ParsedArgs } from 'citty'
import type { args } from '@/args.ts'

export type AGENT = 'claude' | 'codex'

export type CommandArgs = ParsedArgs<typeof args>

export interface IAiConfig {
    [key: string]: {
        path: string
        agent: AGENT
    }
}

export type IConfig = CommandArgs & {
    client: {
        name: string
        path: string
    }
    projects: IAiConfig
}
