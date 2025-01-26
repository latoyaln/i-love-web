# Week 1

## 13/11/2024 College Woensdag

Workshop typografie in Web design

Micro Typografie:

Gaat meer over margin, de ruimte tussen woorden. Dit is nieuw in css (word-spacing)

Macro Typografie:

Meer over de font, line-height, columns

Je hebt een downloaded font, installed font en generic font family:

font-family: 'MyWebFont', Verdana, sans-serif;

cssfontstack

Monospace: elke letter/getal heeft dezelfde breedte.

Variabele fonts 

# Week 2

## 18/11/2024 College Maandag

Een component library is een verzameling herbruikbare en generieke componenten die je aan een project kunt toevoegen. Er bestaan vele standaard component libraries die je kunt downloaden en gebruiken.

Het gebruik van een componenet library 
- Versnelt ontwikkeling door hergebruik
- Zorgt voor consistentie in je projecten
- Vergroot de onderhoudbaarheid


De chaos bedwingen door afspraken te maken over:

- Naamgeving van componenten
- Naamgeving van variaties van componenten
- Naamgeving van properties binnen componenten
- Metanaamgeving: componente, patronen, etc.
- Indeling van de $lib folder

Meta naamgeving is een hierarchische benadering om het over bepaald soorten compnenten te hebben. 

Verschillende manieren om componenten library te zetten:

### Page-section-component

Pages: volledige paginas
Sections: secties van een pagina
Components: herbruikbare componenten binnen de secties.

### Functional layering 

Inputs: componenten voor gebruikersinvoer, bijv knoppen of formulieren
Display: Componenten voor het weergeven van informatie
Navigatie: componenten voor navigatie, menu's, breadcrumbs 
Structural: layout elementen die structuur brengen

### LEGO

Bricks: kleine niet herbruikbare stukjes
Blocks: herbruikbare basis componenten, een knop of een afbeelding
Assemblages: gecombineerde componenten met een specifiek functie, formulier of een kaart.
Constructions: complexe pagina-secties of templates, dashboard

### Atomic Design

Atoms: basis bouwblokken van je pagina, HTML elementen zoals een label input of button
Molecules: een groep atomen bij elkaar
Organism: een groep moleculen die samen een sectie van je website vormen, een header balk met een zoekformulier.
Templates: een group organismen die samen een paginatype vormen, een overzichtspagina of detailpagina
Pages: ingevuld template met inhoud

### Presenter-Container

Presentational components: UI-specifieke, stateless componenten die bepalen hoe data getoond wordt
Container components: Componenten die de presentational components van data voorzien en hun gedrag bepalen
Compositions: combinatie van containers en presentational components die specifieke pagina secties vormen.

# Week 3
