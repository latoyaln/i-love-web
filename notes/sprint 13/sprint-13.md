---
title: Sprint 13
description: Learning Journal 
date: '2024-09-10'
categories:
  - sveltekit
  - svelte
  - directus
---

# Week 1
Deze week beginnen we met werken met Sveltekit. Wij moeten een squadpage maken met Sveltekit.

## 02/09/2024 College Maandag
Vandaag hebben we geleerd hoe je Sveltekit kan gebruiken en installeren voor je eigen project.

Stappen die je moet volgen om Sveltekit te installeren voor je project.

```ts
npm create svelte@latest
npm install
npm run dev -- --open
```

### Bronnen
[SvelteKit](https://kit.svelte.dev/)

## 04/09/2024 College Woensdag
Svelte vs Sveltekit

### Svelte

Svelte is een frontend JavaScript-framework waarmee je webapplicaties kunt bouwen. Svelte is een compiler en draait vaak op pinautomaten omdat het goed beveiligt is. 
het verschilt van andere frameworks doordat het de meeste van zijn werk tijdens de compileertijd doet in plaats van tijdens runtime.

### SvelteKit

Sveltekit is een library geschreven in svelte. Het is een web framework van svelte. 

Het biedt een set tools en functies om complexe, webapplicaties te ontwikkelen,
waaronder routing, server-side rendering (SSR), en statische sitegeneratie (SSG).

De bestandstructuur van SvelteKit.
```ts
my-project/
├ src/
│ ├ lib/
│ │ ├ server/
│ │ │ └ [your server-only lib files]
│ │ └ [your lib files]
│ ├ params/
│ │ └ [your param matchers]
│ ├ routes/
│ │ └ [your routes]
│ ├ app.html
│ ├ error.html
│ ├ hooks.client.js
│ ├ hooks.server.js
│ └ service-worker.js
├ static/
│ └ [your static assets]
├ tests/
│ └ [your tests]
├ package.json
├ svelte.config.js
├ tsconfig.json
└ vite.config.js
```

**Src**<br>
Hier zitten alle bestanden en code die je maakt voor je applicatie.

**Src/routes/**<br>
Dit is de map waar je pagina's en routes aanmaakt.
Elke 'slug' wordt gebruikt als route en moet hetzelfde naam hebben als de API url paden.

**+Page.svelte**<br>
Dit is het bestand dat de UI voor een specifieke pagina bevat.

**Src/lib/:**<br>
Dit is een map waarin je herbruikbare code plaatst, zoals componenten of functies die je in meerdere delen van je app wilt gebruiken.

**Static**<br>
Hierin plaats je statische bestanden zoals afbeeldingen, lettertypen of andere assets die niet veranderen.

**Svelte.config.js**<br>
Dit is het configuratiebestand voor SvelteKit. Hier kun je dingen instellen zoals adapter-opties

# Week 2

## 09/09/2024 College Maandag

Op maandag was er een college over figma. Hier zijn diverse figma shortcuts uitgelegt die wij kunnen gebruiken tijdens het schetsen maken.

## 11/09/2024 College Woensdag

Vandaag was er een workshop over creative coding. Wij moesten een clean install doen voor de squadpage. 

1. Maak een tijdelijk kopie van de folder van de squadpage repo
2. Installeer een clean install van SvelteKit voor de squadpage
3. Voeg /routes/+page.js deze regel code toe export let csr = false
4. Neem in /lib/fetch-json.js de code over uit hetzelfde bestand van je laatste node.js project van sprint 12
5. Importeer deze functie in /routes/+page.server.js
6. Check aan de hand van het voorbeeld of je alles goed gedaan hebt
7. Copy / paste jullie toegevoegde svelte code terug in /routes/+page.svelte

## 13/09/2024 College Vrijdag

Op vrijdag deden wij een code/design Review

# Week 3

## 16/09/2024 College Maandag

We hebben een workshop gehad over prioriteren en het gebruik van de MoSCoW methode. 

*Epics -> (user)stories -> tasks*

Met epics kan je goed je werk organiseren. Het zijn algemene en grotere taken. Voorbeelden hiervan zijn bijvoorbeeld:

Een nieuwe e-commerce website lanceren voor
Een bestaande website verbetern voor

