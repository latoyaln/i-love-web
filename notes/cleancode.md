Clean code - Robert C. Martin

schrijven van clean code is wat je doet om jezelf professional te kunnen noemen.

Try and leave this world a little better than you found it.. (boy scout rule)

Als we allemaal onze code net iets schoner inchecken dan toen we die uitchekten, zou de code simpelweg niet kunnen verouderen. 

Opruimen hoeft niets groots te zijn. Verander een variabelenaam in iets beters, splits een te grote functie op, elimineer een klein stukje duplicatie.

Tips:

- Gebruik beteknisvolle namen
Gebruik duidelijke en beschrijvende namen voor variabelen, functies en bestanden.

Vermijd cryptische afkortingen op generieke termen zoals a, x, data of temp.

- Schrijf kleine funcites 
Functies moeten klein zijn en slechts een verantwoordelijkheid hebben (Single Responsibility Principle) Lange functies zijn moeilijk te begrijpen en onderhouden.

Stel je functie op met zo min mogelijk parameters. Het liefst monadisch maar als het nodig is diadisch, vermeid triadisch.

Voorkom side-effects, dingen die buiten de scope van de functie vallen. Een functie heeft een ingang - parameters - en een uitgang - return

- Gebruik goed commentaar

Less  is more, goede code heeft weinig commentaar nodig omdat het zichzelf uitlegt.

- Maak code leesbaar (voor mensen)

Code wordt vaker gelezen dan geschreven.

Refactoring - Martin Fowler

Patroon: Hernoem functie declaratie
- De handtekening van een functie omvat de naam, parameters en soms returntype
- Dit patroon wordt bijv gebruikt om een functie een duidelijkere naam te geven, parameters toe te voegen of te verwijderen

Patroon: Splits coditionals op
-Complexe en onoverzichtelijke if-else 

Patroon: Vervang loops door pipelines
- Traditionele iteraties over collecites (zoals for, foreach of while loops) worden vervangen door een functionele stijl met behulp van eeen pipeline van operaaties

- Dit patroon maakt gebruik van methoden map, filter en reduce, die declaratief beschrijven wat er met de data moet gebeuren

Patroon: verschuif statements

- Herpositionering van code binnen een methode om leesbaarheid en logische volgorde te verbeteren.
- Het doelis gerelateerde statements dichter bij elkaar te plaatsen en irrelevante of afleidende stukken code te verplaatsen naar een meer geschikte locatie.
- Door statements op een logsichere manier te ordenen wordt de structuur van de methode duidelijker, wat leidt tot beter begrip en eenvoudiger onderhoud.

Structuur van een sveltekid code base

performance 

Sveltekit doet op het gebied van performance al een heleboel werk voor je:
- code splitting
- asset preloading
- file hashing
- request coalescing
- parallel loading
- pre rendeing 
- link preloading

npm run build ipv npm run dev

@sveltejs/enhanced-img
<enhanced:img src="">

sitemap.xml