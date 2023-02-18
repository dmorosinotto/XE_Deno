import { Application, helpers, Router, Status } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { loggerMW, respTimeMW } from "../3-querystring/middleware.ts";

import * as users from "./user-logic.ts";
import cnt from "./routes_cnt.ts";
import mountOper from "./use-zod.ts";

const port = +Deno.args[0] || 8004;
const app = new Application();

// MIDDLEWARE PIPELINE EXEC IN ORDER
app.use(loggerMW);
app.use(respTimeMW);

const router = new Router();
router.get("/users", async ctx => {
	ctx.response.body = users.getAll();
});
router.get("/user/:id", async ctx => {
	const id = Number(ctx.params.id);
	console.log("USER ->", id);
	if (id > 0) {
		const found = users.searchBy(id);
		if (!found) ctx.throw(Status.NotFound, `${id} NOT FOUND!`);
		else ctx.response.body = found;
	} else ctx.throw(Status.BadRequest);
});
router.use("/cnt", cnt.routes(), cnt.allowedMethods());
mountOper("/calc", router);
app.use(router.routes());
app.use(router.allowedMethods());
app.addEventListener("listen", ({ secure, port }) => {
	console.log(`Listening on http${secure ? "s" : ""}://localhost:${port}`);
});
await app.listen({ port, hostname: "127.0.0.1" });
console.log("-THE END-");
