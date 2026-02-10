// src/index.ts
export interface Env {
  ASSETS: Fetcher; // provided by wrangler assets binding
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // 1) Try to serve the requested asset (e.g. /assets/*.js, /logo.svg, etc.)
    const res = await env.ASSETS.fetch(request);

    // 2) If it's found, return it
    if (res.status !== 404) return res;

    // 3) SPA fallback: serve index.html for non-file routes
    const url = new URL(request.url);

    // If the URL looks like a real file request (has extension), keep the 404
    const isFile = url.pathname.split("/").pop()?.includes(".");
    if (isFile) return res;

    // Otherwise serve the app shell
    const indexReq = new Request(new URL("/index.html", url).toString(), request);
    return env.ASSETS.fetch(indexReq);
  },
};