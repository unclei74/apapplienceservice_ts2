// src/index.ts
export interface Env {}

export default {
  async fetch(_request: Request, _env: Env): Promise<Response> {
    return new Response("OK", { status: 200 });
  },
};