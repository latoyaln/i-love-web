# Week 1

Choices, choices. deze sprint kiezen wij zelf welke frameworks/ tools en workflow we kunnen gebruiken voor ons project. We kunnen ervoor kiezen om ook een andere headless cms te kiezen.

## 14/10/2024 College Maandag

Tech stack zijn alle tooling die je gebruikt om een project werkend te maken. 

Factoren voor het kiezen van je Tech Stack:

1 project
2 project type 
3 scalability
4 performance
5 team expertize
6 maintenance
7 cost
8 met hoeveel mensen je werkt

De combinatie van user experience, content management-experience en 
developer experience wegen mee bij de keuze voor een tech stack.

UX,DX,CMX overlappen elkaar een beetje

Jamstack.org, filteren op javascript. Optioneel kan je ook een headless CMS kiezen. 

# Week 2

## Atomic Design

Tijdens de code/design review met shyanta heb ik een beter beeld gekregen van atomic design. Zij heeft dit visuelere gemaakt door een voorbeeld site te laten zien en te laten zien welk component wat is. Omdat ik verder werk aan een project die al atomic design gebruikte vind ik het fijn om het nu beter te begrijpen.

### Atomic Desing React

Om verder te werken en atomic design beter te begrijpen en toe te passen met React ben ik deze video gaan kijken. [Atomic Design in React](https://www.youtube.com/watch?v=zaaknDxK-Fg)

Hier is het zo ingedeelt:

```ts

atomic-design/
├ src/
│ ├ components/
│ │ ├ atoms/
│ │ │ └ Button/
│ │ │ │ ├ Button.css
│ │ │ │ └ Button.jsx
│ │ ├ molecules/
│ │ ├ organisms/
│ │ ├ templates/
│ │ └ pages/
```
Atoms zijn een klein onderdeel van een component dus bijvoorbeeld, buttons, logos en texts. Deze kan je gebruiken in een ander component. Atoms kan je hergebruiken.

Molecules zijn een combinatie van atoms. 

In organisms kan je een combinatie van Molecules hebben.

In templates is een combinatie van molecules, organisms etc.

In page is de pagina waar de gebruiker mee interact.