import type { ParsedArgs } from 'citty'
import type { args } from '@/args.ts'

export type AGENT = 'claude' | 'codex'

type DeepWriteable<T> = {
    -readonly [P in keyof T]: T[P] extends object ? DeepWriteable<T[P]> : T[P];
}

export type CommandArgs = ParsedArgs<DeepWriteable<typeof args>>

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
