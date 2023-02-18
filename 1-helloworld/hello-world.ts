//CONTENUTO PUBBLICATO SU https://examples.deno.land/http-server.ts 
import { serve } from "https://deno.land/std@0.175.0/http/server.ts";
function handler(_req: Request): Response {
  return new Response("Hello, World!");
}
console.log("Listening on http://localhost:8000");
serve(handler);