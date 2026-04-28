import { createMain, defineCommand } from 'citty'
import { args } from '@/args.ts'
import { resolveConfig } from '@/config.ts'
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
        console.log(config)
    },
})

createMain(command)({})
