'use strict';
import { recipes } from '../data/recipes.js';

export const Recipe = store => {
  const section = document.createElement('section');
  section.classList.add('recipe-section');

  store.subscribe(state => {
    const { language, selectedRecipe } = state;
    const recipe = recipes[language][selectedRecipe];

    // TODO: Später implementieren!

    if (!recipe) {
      section.innerHTML = `<p>Kein Rezept ausgewählt</p>`;
      return;
    }

    section.replaceChildren();

    const title = document.createElement('h2');
    title.textContent = recipe.name;

    section.appendChild(title);
  });

  return section;
};
