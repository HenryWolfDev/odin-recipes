'use strict';

export const Recipe = store => {
  const section = document.createElement('section');
  section.classList.add('recipe-section');

  store.subscribe(state => {
    section.replaceChildren();

    const recipe = state.selectedRecipe;

    if (!recipe) {
      section.innerHTML = `<p>Kein Rezept ausgewählt</p>`;
      return;
    }

    const title = document.createElement('h1');
    title.textContent = recipe.showcase.headline;

    section.appendChild(title);
  });

  return section;
};
