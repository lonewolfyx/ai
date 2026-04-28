# @lonewolfyx/ai

`@lonewolfyx/ai` is a local AI CLI launcher used to maintain the mapping between projects and AI platforms.

It starts the corresponding AI agent based on the current project or the saved project configuration. Currently supported:

- `claude`
- `codex`

It is suitable for quickly switching between multiple projects and using a single `ai` command to start the corresponding workflow.

## 2. Installation and Usage

Install:

```bash
npm install -g @lonewolfyx/ai
```

```bash
ai
```

When you run it for the first time in a new project directory, it enters an interactive flow:

1. Choose to initialize the current project or enter an existing project
2. Choose the AI platform to bind
3. Save the project configuration and start the corresponding agent

View saved projects:

```bash
ai --list
```

## 3. CLI Arguments

| Argument | Alias | Type | Description |
| --- | --- | --- | --- |
| `--project` | `-p` | `string` | Project name |
| `--agent` | - | `string` | AI platform to use |
| `--list` | - | `boolean` | List all currently saved projects |

## License

[MIT](./LICENSE) License © [lonewolfyx](https://github.com/lonewolfyx)
