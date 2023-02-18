import { type Middleware } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { bold, green } from "https://deno.land/std@0.177.0/fmt/colors.ts";

// Response Time Middleware
export const respTimeMW: Middleware = async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
};

// Log Request Middleware
export const loggerMW: Middleware = async (ctx, next) => {
  await next();
  const time = ctx.response.headers.get("X-Response-Time");
  console.log(
    `${green(ctx.request.method)} ${bold(ctx.request.url.pathname)} - ${time}`,
  );
};
