Helloworld server web con esecuzione direttamente da URL
```
deno run --allow-net --reload https://examples.deno.land/http-server.ts
open http://localhost:8000/
```

Io ho riportato il codice in [locale](hello-world.ts)
e poi ho creato esempio che [serve HTTPS](https-world.ts) che utilizza i file Certificati generati con [mkcert](https://github.com/FiloSottile/mkcert) 

```
deno run --allow-net --watch https-world.ts 8443
//deno run --allow-net --allow-read=.. https-world.ts 8441
```

Notate che l'esecuzione del server web richiede il permesso `--allow-net` e l'accessso ai file del certificato `--allow-read` 