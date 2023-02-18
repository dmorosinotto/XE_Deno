import { Router, helpers, Status } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { z } from "npm:zod";

const QSModel = z.object({
	a: z.coerce.number(),
	b: z.coerce.number()
});
type TQS = z.infer<typeof QSModel>;

export default function mount(mountPath: string, router: Router) {
	router.get(`${mountPath}/add`, ctx => {
		try {
			const qs = helpers.getQuery(ctx);
			console.log("PRIMA ", qs);
			let { a, b } = QSModel.parse(qs);
			console.log("DOPO ->", a, b);
			ctx.response.body = { add: a + b };
		} catch (e) {
			ctx.throw(Status.BadRequest, JSON.stringify(e));
		}
	});

	router.get(`${mountPath}/sub/:a/:b?`, ctx => {
		try {
			const qs = helpers.getQuery(ctx, { mergeParams: true });
			let { a, b } = QSModel.parse(qs);
			ctx.response.body = { sub: a - b };
		} catch (e) {
			ctx.throw(Status.BadRequest, JSON.stringify(e));
		}
	});
}
