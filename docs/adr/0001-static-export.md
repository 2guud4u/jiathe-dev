# Static export served as Workers static assets

The site builds with `output: "export"` and deploys the `out/` directory as a
static-assets-only Cloudflare Worker (`wrangler.jsonc`, no `main` script) at
jiathe.dev, rather than running Next.js through OpenNext. The site is a single
page with no dynamic data, so a server runtime buys nothing. `wrangler.jsonc`
must stay committed: without it, `wrangler deploy` auto-detects Next.js and
migrates to OpenNext, which fails on a static export. `jiathe.dev/watsthesplit`
is a separate Worker route on the same zone; routes run ahead of a custom-domain
Worker, so it keeps that path. Trade-off: `output: "export"` permanently
forecloses Next.js server features — API routes, ISR, middleware, server actions.
