import type { Linter } from 'eslint'
import antfu from '@antfu/eslint-config'

export default antfu({
    type: 'lib',
    stylistic: {
        indent: 4,
        quotes: 'single',
    },
    yaml: {
        overrides: {
            'yaml/indent': ['error', 2],
        },
    },
    rules: {
        'no-console': 'off',
        'node/prefer-global/process': 'off',
        'regexp/no-unused-capturing-group': 'off',
    },
}) as Linter.Config
