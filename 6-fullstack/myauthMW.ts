import { type Middleware, Status } from "https://deno.land/x/oak@v11.1.0/mod.ts";

// My auth Middleware that check X-Auth token secret
export default function myauthMW(secret: string): Middleware {
	return async (ctx, next) => {
		//secret MUST MATCH WITH authInterceptor IN ANGULAR
		if (ctx.request.headers.get("X-Auth") === secret) {
			await next();
		} else ctx.throw(Status.Unauthorized, "You are not Authorized (INVALUD X-Auth)");
	};
}
