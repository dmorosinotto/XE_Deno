import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { loggerMW, respTimeMW } from "../3-querystring/middleware.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import staticMW from "./staticMW.ts";
import api_router from "./api_router.ts";

const port = +Deno.args[0] || 8006;
const hostname = Deno.args[1] || "127.0.0.1";
const app = new Application();

// MIDDLEWARE PIPELINE EXEC IN ORDER
app.use(loggerMW);
app.use(respTimeMW);
app.use(oakCors({ origin: "http://localhost:4200" })); // Enable CORS for ng serve
app.use(staticMW("dist")); // Serve static dist output of ng build --prod
app.use(api_router.routes()); // Serve REST API api/users/... with mock data

app.addEventListener("listen", ({ secure, port }) => {
	console.log(`Listening on http${secure ? "s" : ""}://localhost:${port}`);
});
await app.listen({ port, hostname });
console.log("-THE END-");
