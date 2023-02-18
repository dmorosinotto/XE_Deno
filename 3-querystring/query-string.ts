import { Application, type Context, helpers, Status } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { loggerMW, respTimeMW } from "./middleware.ts";

const port = +Deno.args[0] || 8003;
const app = new Application();
// MIDDLEWARE PIPELINE EXEC IN ORDER
app.use(loggerMW);
app.use(respTimeMW);
app.use(async (ctx: Context) => {
	const path = ctx.request.url.pathname.toLowerCase();
	const qs = ctx.request.url.searchParams;
	if (path === "/add") {
		ctx.assert(qs.has("a") && !isNaN(Number(qs.get("a"))), Status.BadRequest, "Invalid qs `a` must be number!");
		ctx.assert(qs.has("b") && !isNaN(Number(qs.get("b"))), Status.BadRequest, "Invalid qs `b` must be number!");
		//ctx.response.type = "json"; //AUTO INFERRED BY BODY
		ctx.response.body = { add: Number(qs.get("a")) + Number(qs.get("b")) };
	} else ctx.throw(Status.MethodNotAllowed, "URL not valid, try /add?a=1&b=2");
});

app.addEventListener("listen", ({ secure, hostname, port }) => {
	console.log(`Listening on http${secure ? "s" : ""}://localhost:${port}`);
});
await app.listen({ port, hostname: "127.0.0.1" });
console.log("-THE END-");
