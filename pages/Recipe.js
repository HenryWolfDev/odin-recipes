'use strict';
import { recipes } from '../data/recipes.js';
import { IngredientsList } from '../components/ingredientsList/render.js';

export const Recipe = store => {
  const section = document.createElement('section');
  section.classList.add('recipe-section');

  store.subscribe(state => {
    const { language, selectedRecipe } = state;
    const recipe = recipes[language][selectedRecipe];

    section.replaceChildren();

    const title = document.createElement('h2');
    title.textContent = recipe.name;

    const ingredientsList = IngredientsList(recipe, language);

    const instructionsButton = createInstructionsButton();
    const ingredientsButton = createIngredientsButton();

    section.appendChild(title);
    section.appendChild(ingredientsButton);
    section.appendChild(ingredientsList);
    section.appendChild(instructionsButton);
  });

  return section;
};

const createIngredientsButton = () => {
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-transparent');

  const title = document.createElement('span');
  title.textContent = 'ingredients';

  const icon = document.createElement('img');
  icon.src = 'assets/icons/zutaten.png';
  icon.classList.add('icon');

  button.append(icon);
  button.append(title);

  return button;
};

const createInstructionsButton = () => {
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-transparent');
  button.textContent = 'Instructions';

  const icon = document.createElement('img');
  icon.src = 'assets/icons/prep.png';
  icon.classList.add('icon');

  button.append(icon);

  return button;
};
