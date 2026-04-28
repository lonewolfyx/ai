export const args = {
    project: {
        type: 'string',
        description: '项目名称',
        default: '',
        alias: 'p',
    },
    agent: {
        type: 'string',
        description: '使用的 ai 平台',
        default: '',
    },
    list: {
        type: 'boolean',
        description: '列出所有目前使用 ai 驱动的项目清单列表',
        default: false,
    },
} as const
