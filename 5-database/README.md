Esempio accesso a database MS SQL Server utilizzando libreria NPM mssql + lettura .env + commandline che sfrutta WebPlatform: console.dir/table alert/prompt/confirm

```
deno run -A cmd.ts
```

## PREREQUISITI
Utilizzare DOCKER per hostare SQL Server + fare il restore di [AdwantureWorksLT](https://learn.microsoft.com/en-us/sql/samples/adventureworks-install-configure?view=sql-server-ver16&tabs=ssms) su docker rinominando DB in `XeDotNet`

```
docker pull mcr.microsoft.com/mssql/server:2019-CU6-ubuntu-16.04

docker run --name sqlMac -e ACCEPT_EULA=Y -e SA_PASSWORD=P@ssw0rd -p 1433:1433 -v sqlvolume:/var/opt/mssql -d mcr.microsoft.com/mssql/server:2019-CU6-ubuntu-16.04

docker cp ~/Download/AdventureWorksLT2019.bak sqlMac:/var/opt/mssql/backup
```