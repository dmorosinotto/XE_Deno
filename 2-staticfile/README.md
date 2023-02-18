Esempio per utilizzo File in Deno + servire file statici eseguire i seguenti comandi:

```
deno run --allow-net --allow-read=assets,last --allow-write=last static-file.ts
open http://localhost:8002/
open http://localhost:8002/style.css
open http://localhost:8002/qrcode
open http://localhost:8002/qrcode?pippo


deno run --allow-net --allow-read https://deno.land/std@0.177.0/http/file_server.ts

deno install --allow-net --allow-read  https://deno.land/std@0.177.0/http/file_server.ts
which file_server
file_server -h
deno uninstall file_server

deno install --allow-net --allow-read -n serve https://deno.land/std@0.177.0/http/file_server.ts --cors --cert ../localhost-cert.pem --key ../localhost-key.pem  
serve -p 8444
deno uninstall serve

deno compile --output=compiled --allow-read --allow-net  https://deno.land/std/http/file_server.ts -p 8080 
./compiled --help
./compiled -p 4000
rm compiled
```