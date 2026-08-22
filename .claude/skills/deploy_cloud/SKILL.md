---
name: deploy_cloud
description: Deploy this repo's latest code to Cloudflare Workers. Use when the user asks to deploy, ship, push to Cloudflare, or update the live site.
---

# deploy_cloud

Deploys this project (Vite + React static assets, served by a Cloudflare
Worker defined in `wrangler.jsonc`) to Cloudflare Workers.

## How deployment actually happens

Deployment runs via **GitHub Actions** (`.github/workflows/deploy.yml`), not
directly from a Claude session. This is deliberate: agent sessions running in
Anthropic's managed remote environment go through an egress proxy that blocks
direct calls to `api.cloudflare.com` (org network policy — 403 on CONNECT).
GitHub Actions runners are not subject to that restriction, so CI is the
reliable place to run `wrangler deploy`.

- **Trigger**: push to `main`, or manually via the "Run workflow" button on
  the `Deploy to Cloudflare Workers` workflow in the GitHub Actions tab
  (`workflow_dispatch`).
- **Steps**: `npm ci` → `npm run build` (outputs `dist/`) → `wrangler deploy`
  via `cloudflare/wrangler-action@v3`.
- **Worker config**: `wrangler.jsonc` (name: `apapplienceservice4`, serves
  `./dist` as static assets with a SPA fallback in `src/index.ts`).

## One-time setup required (human, in GitHub UI)

Add two repository secrets under **Settings → Secrets and variables →
Actions** on `unclei74/apapplienceservice_ts2`:

- `CLOUDFLARE_API_TOKEN` — a token scoped to "Edit Cloudflare Workers"
  (Account.Workers Scripts:Edit, Account.Account Settings:Read). Create at
  https://dash.cloudflare.com/profile/api-tokens. Do **not** add an IP
  restriction condition unless you know GitHub Actions' runner IP ranges
  in advance — GitHub-hosted runners use rotating IPs, so an IP-locked
  token will fail deploys from CI.
- `CLOUDFLARE_ACCOUNT_ID` — from the Cloudflare dashboard sidebar (Workers &
  Pages overview).

These must be added directly in GitHub's UI (or via `gh secret set`, which
encrypts client-side) — never paste raw Cloudflare tokens into a Claude
conversation or commit them to the repo. If a token was ever pasted into
chat, treat it as compromised and revoke/rotate it in the Cloudflare
dashboard.

## To deploy right now

1. Merge/push the desired commit to `main`, **or**
2. Go to the repo's Actions tab → "Deploy to Cloudflare Workers" →
   "Run workflow" for a manual trigger without waiting for a merge.

Then watch the run in the Actions tab for build/deploy logs.

## Manual fallback (from a machine with unrestricted network + Node)

```bash
npm ci
npm run build
CLOUDFLARE_API_TOKEN=<token> CLOUDFLARE_ACCOUNT_ID=<account-id> npx wrangler deploy
```

Only use this outside Anthropic's managed remote environment (e.g. the
user's own laptop) since that environment's egress proxy blocks
`api.cloudflare.com`.

## Alternative: Cloudflare MCP connector

A `Cloudflare_Developer_Platform` MCP connector may be available but
requires the user to authorize it first via claude.ai's connector settings
(OAuth — cannot be done from within a session). If authorized, its tools
route through Anthropic's connector infrastructure rather than this
session's restricted egress, and may allow deploying directly from a
Claude session without the GitHub Actions detour. Check `ToolSearch` for
`mcp__Cloudflare_Developer_Platform__*` tools before assuming this path is
unavailable.
