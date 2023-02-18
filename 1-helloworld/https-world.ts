import { serveTls } from "https://deno.land/std@0.177.0/http/server.ts";

function handler(_req: Request): Response {
	return new Response("Welcome to Deno on HTTPS!");
}
const port = +Deno.args[0] || 8001;
serveTls(handler, {
	port,
	certFile: "../localhost-cert.pem",
	keyFile: "../localhost-key.pem"
});
