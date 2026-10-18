# Static export to Cloudflare Pages

The site builds with `output: "export"` and Cloudflare Pages serves the `out/`
directory as static files at jiathe.dev, rather than running a Next.js server.
The site is a single page with no dynamic data, so a Node server buys nothing.
`jiathe.dev/watsthesplit` is served by a separate Worker route on the same zone,
which runs ahead of the Pages origin. Trade-off: `output: "export"` permanently
forecloses Next.js server features — API routes, ISR, middleware, server actions.
If any of those are needed later, move to Workers and drop the flag.
