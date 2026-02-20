# odin-recipes

A basic recipe website

## Learnings:

---

### Übergeben einer eindeutigen Rezept ID im HTML zum rendern des Inhalts

Ziel:
Jeder Button soll ein bestimmtes Rezept laden.
Meine Idee: Jeder Button übergibt als Argument eine eindeutige ID, damit das passende
Rezept gerendert werden kann.

#### Meine Erste Idee (Verworfen):

```html
<button onclick="loadRecipe('chili-con-carne')"></button>
```

Das Problem:
HTML und JavaScript werden miteinander vermischt.
Das spricht gegen das Prinzip des: Separation of Concerns.

#### Die Lösung:

Jeder Button erhält das data-attribute:
Dies dient als stabile, eindeutige ID, welche ausgelesen wird und das passende Rezept lädt.
Wichtig hierbei:
Ich sollte nicht den Rezeptnamen als Schlüssel für das data-attribute verwenden.
Denn dieser ist Sprachabhängig und enthält eventuell Leerzeichen und Umlaute.
Besser:
Jedes Objekt sollte eine explizite ID besitzen.
Map-Objekte haben deutlich einfacheren Zugriff über eine ID.

```javascript
export const recipes = {
  german: {
    'chili-con-carne': {
      id: 'chili-con-carne',
      name: 'Chili con Carne',
      ...
    },
    'chicken-curry': {
      id: 'chicken-curry',
      name: 'Hähnchen-Curry',
      ...
    }
  }
};
```
