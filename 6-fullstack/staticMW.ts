import { type Middleware } from "https://deno.land/x/oak@v11.1.0/mod.ts";

// Serve static dist relative to
console.warn("CWD -> ", Deno.cwd());
export default function staticMW(dist: string = "dist"): Middleware {
	return async (ctx, next) => {
		try {
			await ctx.send({
				root: `${Deno.cwd()}/${dist}`,
				index: "index.html"
			});
		} catch {
			await next();
		}
	};
}
