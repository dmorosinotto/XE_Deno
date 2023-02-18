---
theme: white
---

# XE Fullstack TypeScript with Deno

Con l'avvento di Blazor abbiamo visto che possiamo usare C# per scrivere anche il frontend, e se volessimo fare lo stesso _(al contrario)_ con **TypeScript**?!

--

## Welcome to ![logo](Deno.svg) [Deno](https://deno.land)!

**Daniele Morosinotto**
[@dmorosinotto](https://twitter.com/dmorosinotto)

Repo: [https://github.com/dmorosinotto/XE_Deno](https://github.com/dmorosinotto/XE_Deno)

--

# AGENDA by [ChatGPT](chatGPT.md)

-   **Introduzione a Deno**: cos'è e perché è stato creato
-   **Confronto con Node.js**: differenze fondamentali e miglioramenti
-   **Caratteristiche di Deno**: sicurezza, facilità d'uso, integrazione funzionalità Web
-   Modalità di **esecuzione del codice** in Deno
-   **Gestione delle dipendenze** e dei pacchetti in Deno
-   **Esempi** di codice in Deno
-   **Strumenti e librerie** disponibili in Deno + Integrazione _Node / NPM_
-   Considerazioni sul **futuro di Deno** e sulla sua adozione
-   Conclusione e **ulteriori risorse** per la formazione.

--

# 1. INTRO A DENO

## Cos'è e perché è stato creato

-   Presentare Deno come un runtime JavaScript e TypeScript open source basato sul server
-   Sottolineare che è stato sviluppato da Ryan Dahl, il creatore di Node.js
-   Spiegare che è stato creato per risolvere alcuni dei problemi che si sono verificati con Node.js

--

Deno è un runtime JavaScript e TypeScript open source basato sul server, sviluppato da Ryan Dahl, il creatore di Node.js. È stato lanciato nel maggio 2020 ed è caratterizzato da una maggiore sicurezza, una maggiore facilità d'uso e una maggiore integrazione delle funzionalità rispetto a Node.js.

![Tagline](slides/intro_00-tagline.png)
![WhatIs](slides/intro_01-whatis.png)
![WhatIs ALL](slides/intro_01-whatis-ALL.png)
![Single Exe](slides/intro_01-single-exe.png)
![Install CLI](slides/intro_03-deno-install.png)

--

![Timeline](slides/intro_02-timeline.png)
![Short History](slides/intro_02-history.png)
[Storia Versioni](history/history.md)

---

# 2. DENO vs NODE.JS

Confronto con Node.js: differenze fondamentali e miglioramenti

-   Mostrare le principali differenze tra Deno e Node.js
-   Solo ESModule, run url, deps, importmap, typescript OOTBox
-   Sottolineare i miglioramenti apportati da Deno rispetto a Node.js come ad esempio la facilità d'uso: Typescript , run url, gestione dipendenze, sicurezza, integrazione funzionalità/tool...

--

![Deno vs Node](slides/node_01-main-vs.png)
![Growth stars](slides/node_02-growth.png)
![Core tech comparison](slides/node_03-core-tech-comparison.png)
![Tools comparison](slides/node_04-tools-comparison.png)
[Architectura RUST+V8](architecture/architecture.md)

--

![Notable Features](slides/feat_00-.png)
![Typescript out of the box](slides/feat_01-typescript.png)
![Typescript support](slides/feat_01-typescript-support.png)
![run url](slides/run_00-deno-run.png)

---

# 3. CARATTERISTICHE DENO

Caratteristiche di Deno: sicurezza, facilità d'uso, integrazione delle funzionalità

-   Approfondire le caratteristiche di Deno, come ad esempio la sicurezza integrata, la modalità di esecuzione del codice e la gestione delle dipendenze
-   Sottolineare la facilità d'uso di Deno, come ad esempio la possibilità di eseguire codice direttamente dal terminale senza la necessità di installare pacchetti o gestire la configurazione
-   Discutere l'integrazione delle funzionalità di Deno, come ad esempio la capacità di eseguire sia JavaScript che TypeScript
-   Aderenza a _Web Standard_

--

![Secure Execution](slides/feat_03-secure-exec.png)
![Secure Prompt](slides/feat_03-secure-prompt.png)
![Secure Permissions](slides/feat_03-secure-permissions.png)

--

# 4. RUN CODE WITH DENO

Modalità di esecuzione del codice in Deno

-   Mostrare come eseguire codice in Deno direttamente dal terminale
-   Discutere le opzioni disponibili per l'esecuzione di codice, come ad esempio l'esecuzione di file o l'esecuzione di codice in repl o direttamente da url

--

![run url](slides/run_00-deno-run.png)
![deps management](slides/run_01-deps.png)
![importmap](slides/run_02-link-url.png)
![std lib](slides/run_03-std-lib.png)

---

# 5. MODULE SYSTEM

Gestione delle dipendenze e dei pacchetti in Deno

-   Discutere come gestire le dipendenze in Deno, ad esempio tramite URL
-   Sottolineare che non esiste un registro centrale come NPM per i pacchetti

--

![lib std](slides/libs_02-deno-std.png)
![deno docs](slides/libs_03-deno-docs.png)
![auto gen docs](slides/libs_03-deno-doc-auto.png)
![deno std](slides/libs_03-std.png)
![deno land x](slides/libs_04-denolandx.png)
![push to deno land](slides/libs_04-push-deno-land.png)
![deno fmt & lint](slides/libs_06-deno-fmt-lint.png)
![deno test](slides/libs_06-deno-test.png)
![publish NPM](slides/libs_07-publish-npm.png)
![using DNT](slides/libs_07-using-DNT.png)
[DEMO esempio LIB Deno -> NPM](publish/publish.md)

---

# 6. DEMO ESEMPI

Esempi di codice in Deno

-   Mostrare alcuni esempi di codice Deno per mostrare come utilizzare le funzionalità di base
-   Discutere i casi d'uso più comuni per Deno, come ad esempio lo sviluppo di API e la creazione di tool per la riga di comando

![DEMO setup VSCode](slides/demo_00-setup-VSCode.png)
![DEMO Fetch + Magenta](slides/demo-01-fetch+magenta.png)
![DEMO Fetch - Magenta](slides/demo-01-fetch-magenta.png)
![DEMO serve](slides/demo_02-http-serve.png)
![DEMO helloworld](slides/demo_02-hello-world.png)

--

> Per una sessione di introduzione a Deno, potresti considerare di presentare i seguenti esempi di codice:

-   Hello World: Un semplice esempio per mostrare come stampare "Hello World" in Deno utilizzando la funzione console.log().
-   Server HTTP: Mostrare come creare un semplice server HTTP in Deno utilizzando la libreria built-in "http".
-   Lettura di un file: Mostrare come leggere il contenuto di un file in Deno utilizzando la funzione Deno.readFile().
-   Script di utilizzo comune: Mostrare come eseguire uno script Deno come programma da riga di comando.
-   Lavorare con le API: Mostrare come effettuare richieste HTTP a un'API esterna e recuperare i dati in Deno.

-   Programmazione asincrona: Mostrare come utilizzare le funzionalità di programmazione asincrona di Deno, come le promesse e i gestori di coroutine, per creare applicazioni efficienti.

> Questi esempi possono fornirti una base per comprendere le principali funzionalità di Deno e come utilizzarle per sviluppare applicazioni.

---

# 7. DENO CLI & STD LIBS + NPM

Strumenti e librerie disponibili in Deno

-   Mostrare gli strumenti e le librerie disponibili per Deno, come ad esempio le librerie per l'elaborazione di file CSV e JSON
-   Mostrare utilizzo WEB Standards
-   Discutere come questi strumenti e librerie possono aiutare nello sviluppo (vedi Oak)
-   Integrazione _NPM_ e _Node standard_

--

![CLI command tools](slides/feat_04-cli-tools.png)
![CLI tools](slides/feat_04-builtin-tools.png)

--

![Standard lib](slides/libs_03-std.png)
![deno std site](slides/run_01-deno-std-lib.png)

--

![deno doc site](slides/libs_03-deno-docs.png)
![Deno land X](slides/libs_04-denolandx.png)

--

![NPM package](slides/libs_05-npm-package.png)
![Node compat](slides/libs_05-node-compat.png)

---

# 8. FUTURE OF DENO

Considerazioni sul futuro di Deno e sulla sua adozione

-   Discutere la crescita della comunità e l'adozione di Deno da parte di sviluppatori e aziende
-   Fare una previsione sul futuro di Deno e sul suo ruolo all'interno dell'ecosistema JavaScript e TypeScript
-   Idea _Javascript Container_ -> deno deploy

## Adozione di Deno da parte delle aziende

Anche molte aziende stanno iniziando a utilizzare Deno per lo sviluppo di applicazioni e servizi, il che dimostra la sua affidabilità e il suo potenziale a lungo termine

--

## Prospettive future di Deno
Il futuro di Deno sembra molto promettente, con una comunità attiva e in crescita che sta lavorando per migliorare ulteriormente il runtime.
Vedi ultimi rilasci concentrati a semplificare **compatibilità con Node** e integrazione **pacchetti npm**

--
![deno deploy](slides/next_01-deploy.png)
![company](slides/next_03-company.png)
![deploy](slides/next_01-denodeploy.png)
![future](slides/next_02-future.png)

## Idea: Javascript Container

Riferimento ad [articolo](https://tinyclouds.org/javascript_containers) e visione di Ryan Dahl sul fatto di non avere più bisogno di _Container Doker_ per far girare Deno, ma avere direttamente **Javascript Container** ossia direttamente **istanze del Runtime** come _"aprire una Tab in the cloud"_

-   `Deno deploy` [offerta commerciale](https://deno.com/deploy/pricing) Deno Company:  Github CI/CD -> Deno to the EDGE in 5sec
-   Lavoro della fondation [WinterCG](https://wintercg.org) con Cloudflare per standardizzare le funzionalità del Runtime distribuito to the Edge

---

# 9. CONCLUSION

Conclusione e ulteriori risorse per la formazione

-   Riepilogare i punti principali della presentazione
-   Fornire risorse utili per ulteriori approfondimenti su Deno, come documentazione ufficiale, tutorial e video

Aprire la sessione a domande e rispondere a qualsiasi domanda su Deno.

## Q&A + REFERENCE

Bellissimo video/esempi base Learn Deno in 20min https://youtu.be/Bkzem7vLjlA bello intro basato su esempi con introduzione permission passo passo
State deno 2022 Npm compat https://youtu.be/IaSq3pxZtn0 bello mostra intro concetti + api base + run + uso npm module + mod.ts + import map + deno cache lock
Slides https://tinyurl.com/state-of-deno-2022
Deno su docker + deploy in cloud https://youtu.be/pmqvGHaRXUM
Deno by Examples (spunti x esempi/how to con code e commentato) https://examples.deno.land
Deno to the EDGE https://youtu.be/G_2AgdgEbkI
Ritrovare Talk. Deno 101 intro by LUcA Casonato https://youtu.be/qXV6aL0-7n4
What’s deno by Brian Dahl https://youtu.be/dzfW7Q57O8E
Scrivere Lib x TS / deno e browser https://youtu.be/91sGi9Gkxjg bello mostra DNT dal min17 x esportare codice TS deno -> node (compila CJS + ESM da provare se vain browser)
Intro to Deno for Node.js dev https://youtu.be/Jqh9wpi3ME0 bello mostra timeline deno e architettura interna rust+v8 + deno CLI e deno std / deno vendor
Deno NEWS online https://deno.news/archive/54-npm-compatibility-is-stabilized-in-128
Podcast Deno by Bian Dahl https://podrocket.logrocket.com/deno
Rilascio Deno 1.29 novità REPL https://deno.com/blog/v1.29
Utilizzo di ZOD x validazione https://www.totaltypescript.com/tutorials/zod
Extra articolo su Supabase + prisma + trpc https://noahflk.com/blog/supabase-typescript-trpc/
Figata tRPC fullstack API typesafe con TS https://trpc.io/docs/
Deno to the EDGE (deno deploy). https://youtu.be/G_2AgdgEbkI
Video su Deno FFI chiamate a func C++/Rust https://youtu.be/9f9Ujeods5o
Articolo su come creare server GraphQL in Deno https://deno.com/blog/build-a-graphql-server-with-deno
Deno latest news office hour q&a https://deno.com/blog/office-hours-transcript-2023-01-13
DENO 1.30 RELEASE NOTE (aggiunto builtin moduli Node.js) https://deno.com/blog/v1.30
10 regrets of Node by Bryan 2018 the born of Deno https://youtu.be/M3BM9TB-8yA
What is Deno by Ryan 50min 2021 https://youtu.be/dzfW7Q57O8E
Deno crash course 1h intro -> full Rest api example https://youtu.be/NHHhiqwcfRM
Deno workshop 2h su come usare Fresh (SSR) https://youtu.be/7OrJP_EeX4s + articolo su SSR evoluzione storica e come fare JS island isomorfico in Deno https://deno.com/blog/back-to-the-ssr
Visione Ryan Dahl su futuro Deno podcast: https://changelog.com/jsparty/256 / container https://tinyclouds.org/javascript_containers / deno deploy
DEEP-DIVE su TS module resolution veramente na merda senza DENO https://youtu.be/MEl2R7mEAP8
Bellissimo talk su deno deploy + dream stack by Ryan https://youtu.be/3NR9Spj0DmQ
Deno + Vite bel video da provare https://youtu.be/MRDV6O7YAtQ
Esempio come usare tRPC serverside (in falstify) + ZOD per validazione <-> clienside in Angular https://angularexperts.io/blog/angular-trpc + documentazione tRPC per usare adapter fetch che permette di usare tRPC + zod su progetto Deno deploy https://trpc.io/docs/fetch repo esempio https://github.com/trpc/trpc/tree/main/examples/deno-deploy
Bella serie di Esempi uso DENO commentati e provabili come url (potrei usarne alcuni x le DEMO) https://examples.deno.land oppure anche questi vanno bene https://deno.land/manual@v1.30.0/examples
Modo per limitare CPU usate in .NET CORE https://learn.microsoft.com/en-us/dotnet/framework/configure-apps/file-schema/runtime/thread-useallcpugroups-element
Fights articolo che mostra come fare risposte tipo ChatGPT usando Supabase + function su Deno x ricerca vector similarity https://supabase.com/blog/openai-embeddings-postgres-vector
Sito per controllare se lib pubblicata su npm ha package.json fatto bene https://publint.dev
Bell’esempio che mostra come usare PRISMA per accesso DB con Postgress + API crud in Oak https://deno.land/manual@v1.30.3/node/how_to_with_npm/prisma  + guida Prisma con Deno deploy https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-deno-deploy
Provare questa guida che mostra come fare APP Vue che usa API fatta in Deno (capire se mette insieme server side della pagina e dove si incastra) e casomai usare esempio API Oak come base per mostrare CRUD (casomai aggiungere anche ZOD per verifica dai) https://deno.land/manual@v1.30.3/node/how_to_with_npm/vue
Bel video su Dino Deploy https://youtu.be/G_2AgdgEbkI
Bella discussione + demo su come usare NPM + qualche weird case commonJS https://youtu.be/eRs_MGdCXGU
Video che mostra come farsi runtimeJs a partire da rust crate di deno https://www.youtube.com/live/-8L3_OOeENo?feature=share l’articolo codice https://github.com/denoland/roll-your-own-javascript-runtime
Esempio API crud + jwt con oak GitHub - 22mahmoud/deno_crud_jwt: 🦕 basic jwt implementation with CRUD operations using deno + postgres
Come usare Redis client compilato in WASM (solo 700Kb) https://github.com/WasmEdge/wasmedge-db-examples/tree/main/redis
Sito per testare se pacchetto NPM è fatto bene (pubblicato come ESM) https://publint.dev
 Come compilare Rust -> WASM https://surma.dev/things/rust-to-webassembly/
Come usare zod coerce/parse x trasformare querystring o route params in oggetto valido https://timdeschryver.dev/blog/get-easy-access-to-angular-route-and-query-parameters-with-zod
Bellissimo articolo sul perché usare Deno (per scripting/Cli e universali ) https://matklad.github.io/2023/02/12/a-love-letter-to-deno.html
Polyscale servizio cache distribuita x Postgres/Supabase x ottimizzare accesso dati on the Edge con deno deploy https://youtu.be/F505n0d9iuA

---

## FEEDBACK & CONTACT

![Me](https://www.xedotnet.org/media/1032/morosinotto_foto.jpg?height=300)

#### Daniele Morosinotto

**Javascript enthusiast**

-   Twitter [@dmorosinotto](https://twitter.com/dmorosinotto)
-   Email [d.morosinotto@icloud.com](d.morosinotto@icloud.com)
-   Repo [https://github.com/dmorosinotto/XE_Deno](https://github.com/dmorosinotto/XE_Deno)
