import { createMain, defineCommand } from 'citty'
import { description, name, version } from '../package.json'

const command = defineCommand({
    meta: {
        name,
        version,
        description,
    },
    run({ args }) {
        console.log(args)
    },
})

createMain(command)({})
