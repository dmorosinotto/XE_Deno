import { Router, Status } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { FilterModel, TFilter, TUser, UserModel } from "./models/user.model.ts";
import myauthMW from "./myauthMW.ts";

import mock from "../4-restapi/mock_users.json" assert { type: "json" };
const _USERS: TUser[] = mock.map((u: any) => UserModel.parse(u));

const router = new Router();
router.get("/api/users", async ctx => {
	ctx.response.body = _USERS;
});

router.get("/api/users/:id", async ctx => {
	const id = Number(ctx.params.id);
	if (id > 0) {
		const found = _USERS.find(i => i.id === id);
		if (!found) ctx.throw(Status.NotFound, `${id} NOT FOUND!`);
		else ctx.response.body = found;
	} else ctx.throw(Status.BadRequest);
});

router.post("/api/users/kill", myauthMW("$ecr3t"), async ctx => {
	let filter: TFilter | null = null;
	try {
		const body = ctx.request.body();
		if (body.type == "json") filter = FilterModel.parse(await body.value);
	} catch (e) {
		ctx.throw(Status.BadRequest, e);
	}
	if (filter != null) {
		const n = _USERS.length - 1;
		const props = Object.keys(filter) as Array<keyof TFilter>;
		for (let i = n; i >= 0; i--) {
			let user = _USERS[i];
			const del = props.every(p => user[p] === filter![p]);
			if (del) _USERS.splice(i, 1);
		}
		const keep = _USERS.length;
		ctx.response.body = { deleted: n != keep, keep };
	} else ctx.throw(Status.NotFound, "MUST SPECIFY FILTER");
});

export default router;
