Esempio Rest API fatte con [Oak](https://deno.land/x/oak)
Provare i seguenti comandi per l'esecuzione + richiamo vari entrypoint

```
deno run --watch --allow-net --allow-read rest-api.ts


curl -X GET "http://localhost:8004/users"
curl -X GET "http://localhost:8004/user/42"
curl -X GET "http://localhost:8004/user/asd"
curl -X GET "http://localhost:8004/calc/add?a=1&b=2"
curl -X GET "http://localhost:8004/calc/add?a=.1&b=.2"
curl -X GET "http://localhost:8004/calc/add?b=asd"
curl -X GET "http://localhost:8004/calc/sub/4?b=1"
curl -X GET "http://localhost:8004/calc/sub/1?a=5&b=1"
curl -X PUT "http://localhost:8004/cnt/set/40"
curl -X POST "http://localhost:8004/cnt/incr"
curl -X POST "http://localhost:8004/cnt/incr"
curl -X GET "http://localhost:8004/cnt/show"
curl -X DELETE "http://localhost:8004/cnt/reset"
```