Esempio di utilizzo QueryString con validazione dei parametri a,b numerici 
+ esegue e ritorna oggetto JSON `{ add: a+b }` + utilizzo primi [middleware](middleware.ts) 
per calcolo del tempo risposta.

Eseguire questi comandi per provare codice + altri comandi CLI: `deno install, bundle, compile`

```
deno run --watch --allow-net query-string.ts
open http://localhost:8003/add?a=1&b=2"

deno info query-string.ts


deno bundle query-string.ts allinone.js
more allinone.js
deno run allinone.js
rm allinone.js

deno vendor query-string.ts
ls -la vendor
more vendor/import_map.json
deno run --no-remote --import-map=vendor/import_map.json query-string.ts 
rm -rf vendor
```