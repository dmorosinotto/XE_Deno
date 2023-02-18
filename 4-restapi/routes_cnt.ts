import { Router, Status } from "https://deno.land/x/oak@v11.1.0/mod.ts";

let i = 0;
const cnt = new Router()
	.get("/show", async ctx => {
		ctx.response.body = `CURRENT VALUE: ${i}`; //STRINGA
	})
	.post("/incr", async ctx => {
		//INCREMENTA E TORNA VOLARE ATTUALE IN JSON
		ctx.response.body = { count: i++ };
	})
	.put("/set/:n", async ctx => {
		const n = Number(ctx.params.n);
		if (n) {
			i = n; //SETTA n SE VALIDO E TORNA HTML
			ctx.response.body = `<h1>SET ${n}</h1>`;
		} else ctx.throw(Status.BadRequest);
	})
	.delete("/reset", async ctx => {
		console.warn("RESET:", i, "->0");
		i = 0;
		ctx.response.body = i; //RITONA NUMERO -> STRINGA
	});
export default cnt;
