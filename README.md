# Nullfuse Code

A cloud coding agent. Sign in with GitHub, pick a repo, and chat with an AI agent that reads your code, edits files and runs commands in a cloud sandbox. Watch every step live, then get a pull request.

> **Status:** early development. Not usable yet.

## Stack

- **Web:** TanStack Start on Cloudflare Workers
- **Database:** Neon Postgres + Drizzle
- **Auth:** Better Auth (GitHub)
- **Agent:** Trigger.dev + AI SDK
- **Sandboxes:** Daytona
- **Model:** Tencent HY 4 Flash
- **Tracing:** Langfuse
- **Billing:** Polar

## Development

Requires Node 26+ and pnpm.

```
pnpm install
pnpm check
```

## License

[AGPL-3.0](LICENSE). The hosted version at code.nullfuse.com is a paid service.
