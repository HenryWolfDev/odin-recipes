'use strict';
import { recipes } from '../data/recipes.js';

export const Recipe = store => {
  const section = document.createElement('section');
  section.classList.add('recipe-section');

  store.subscribe(state => {
    const { language, selectedRecipe } = state;
    const recipe = recipes[language][selectedRecipe];

    // TODO: Später implementieren!
    // if (!recipe) {
    //   section.innerHTML = `<p>Kein Rezept ausgewählt</p>`;
    //   return;
    // }

    section.replaceChildren();

    const title = document.createElement('h2');
    title.textContent = recipe.name;

    const pictureButton = document.createElement('button');
    pictureButton.classList.add('action-btn');

    const navBar = document.createElement('nav');
    navBar.classList.add('navigation-bar');

    const ingredientsButton = document.createElement('button');
    ingredientsButton.classList.add('action-btn');
    ingredientsButton.textContent = 'Ingredients';
    const ingredientIcon = document.createElement('img');
    ingredientIcon.src = 'assets/icons/zutaten.png';
    ingredientIcon.classList.add('icon');

    ingredientsButton.append(ingredientIcon);
    navBar.append(ingredientsButton);

    const pictureIcon = document.createElement('img');
    pictureIcon.src = 'assets/icons/frame.png';
    pictureIcon.classList.add('icon');

    pictureButton.append(pictureIcon);

    section.appendChild(title);
    section.appendChild(navBar);
    section.appendChild(pictureButton);
  });

  return section;
};
