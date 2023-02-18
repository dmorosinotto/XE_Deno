import "https://deno.land/std@0.177.0/dotenv/load.ts";
import { magenta } from "./deps.ts";
import * as cust from "./customer.ts";

console.clear();
console.time("Total");
do {
  console.log("\n\n");
  let id = Number(window.prompt("Digita ID da visualizzare:"));
  if (!id) console.table(await cust.getAll());
  else console.dir((await cust.getOne(id)) ?? "NON TROVATO!");

  if (window.confirm("Vuoi modificare?")) {
    let name = prompt("Digita nome completo:")!.split(" ");
    if (name && name.length) {
      do {
        id = +prompt("ID da modificare:", "" + id)!;
      } while (!id);
      let data = {} as Partial<cust.ICustomer>;
      if (name.length > 2) data.Title = name.shift();
      if (name.length > 1) data.LastName = name.pop();
      if (name.length > 0) data.FirstName = name.shift();
      if (name.length) data.MiddleName = name.join(" ");
      let ok = await cust.update(id, data);

      if (ok) console.log(magenta("UPDATE SUCCESSFULLY"));
      else window.alert(`FAILED TO UPDATE ${id}!!`);
    } else continue;
  } else break;
} while (true);
console.timeEnd("Total");
