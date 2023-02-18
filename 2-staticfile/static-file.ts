import { serve } from "https://deno.land/std/http/server.ts";
import { serveDir } from "https://deno.land/std/http/file_server.ts";
import { qrcode } from "https://deno.land/x/qrcode/mod.ts";

serve(
	async (req: Request) => {
		const { pathname, search } = new URL(req.url);
		if (pathname.startsWith("/qrcode")) {
			const imgBase64 = await qrcode(search || "Welcome to Deno!");
			const pathQR = "./last/qrcode.html";
			await Deno.writeTextFile(pathQR, `<img src="${imgBase64}" />`);

			const file = await Deno.open(pathQR);
			const resp = new Response(file.readable);
			resp.headers.set("Content-Type", "text/html");
			return resp;
		} else {
			return serveDir(req, {
				fsRoot: "./assets",
				urlRoot: ""
			});
		}
	},
	{ port: +Deno.args[0] || 8002 }
);
