// src/index.ts
// Cloudflare Pages Functions entrypoint.
// This is intentionally minimal for a static React site.

export interface Env {}

export default {
  async fetch(_request: Request, _env: Env, _ctx: ExecutionContext): Promise<Response> {
    // Pages will serve static assets automatically.
    // If you add API routes later, implement routing here.
    return new Response("OK", { status: 200 });
  },
};