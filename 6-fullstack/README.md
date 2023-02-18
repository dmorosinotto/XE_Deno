Esempio Fullstack 
- Deno API rest Oak + CORS (per far funzionare `ng serve`) + Serve file statici dist/ (prodotto da `ng build --prod`) 

- Progetto _Angular 15_ **ngnew_latest** con richiamo API + gestione "FAKE LOGIN" con **X-Auth** header per funzione DELETE +
 
- **Condivisione dei Modelli DTO** definiti con _zod_ con puntamento client `@models/user.model` e server allo [stesso file](models/user.model.ts)


```
deno run --reload --watch --allow-net --allow-read --import-map=import-map.json  fullstack.ts 8006

//GENERAZIONE MOCK
deno repl --allow-read --allow-write --allow-net
import { default as init } from "https://esm.sh/xe-nodejs-mock@1.0.0";
var mock = init(1000);
await Deno.writeTextFile("mock_users.json", JSON.stringify(mock))
```

# PROVARE
Aprire http://localhost:8006 <-- api + static dist (scritta da ng build)

ng serve DA PROGETTO ngnew_latest <-- http://localhost:4200 + API CORS
CAMBIARE models/users.model.ts  DEFINIZIONE DI cap -> z.coerce.number()