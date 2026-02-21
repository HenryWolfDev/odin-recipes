'use strict';

export const Recipe = store => {
  const section = document.createElement('section');
  section.classList.add('recipe-section');

  store.subscribe(state => {
    section.replaceChildren();

    const recipe = state.selectedRecipe;
    const { language } = state;

    console.log(recipe);

    // TODO: Später implementieren!

    // if (!recipe) {
    //   section.innerHTML = `<p>Kein Rezept ausgewählt</p>`;
    //   return;
    // }

    const title = document.createElement('h2');
    title.textContent = recipe.showcase.headline;

    section.appendChild(title);
  });

  return section;
};
