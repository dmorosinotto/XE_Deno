// @deno-types="npm:@types/mssql"
import mssql from "npm:mssql";
import { assert } from "./deps.ts";
["SQL_UID", "SQL_PWD", "SQL_SRV"].forEach((e) =>
  assert(Deno.env.has(e), `MISSING .env ${e}`)
);

const sqlConfig = {
  user: Deno.env.get("SQL_UID"),
  password: Deno.env.get("SQL_PWD"),
  server: Deno.env.get("SQL_SRV"),
  database: "XeDotNet",
  pool: { max: 10, min: 0, idleTimeoutMillis: 30000 },
  options: { encrypt: false, trustServerCertificate: true },
} as mssql.config;

export async function runDb<R>(fn: (cnn: mssql.ConnectionPool) => R) {
  const cnn = await mssql.connect(sqlConfig);
  try {
    const res = await fn(cnn);
    return res;
  } catch (e) {
    console.error(e);
  } finally {
    await cnn.close();
  }
}

export async function doQuery<T>(
  sql: string | TemplateStringsArray,
  ...interpolations: any[]
): Promise<T[] | undefined> {
  return runDb(async (cnn) => {
    const res = typeof sql === "string"
      ? await cnn.query<T>(sql)
      : await cnn.query<T>(sql, ...interpolations);
    return res.recordset;
  });
}

export async function doExec(
  sql: string,
  params: object,
): Promise<number | undefined> {
  return runDb(async (cnn) => {
    const cmd = cnn.request();
    Object.entries(params).forEach(([par, val]) => cmd.input(par, val));
    const res = await cmd.query(sql);
    return res.rowsAffected[0];
  });
}
