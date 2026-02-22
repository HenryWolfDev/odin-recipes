'use strict';
import { recipes } from '../data/recipes.js';
import { IngredientsList } from '../components/ingredientsList/render.js';
import { recipeImagePaths } from '../data/recipes-images.js';
import { InstructionsList } from '../components/instructionsList/render.js';

export const Recipe = store => {
  const section = document.createElement('section');
  section.classList.add('recipe-section');

  store.subscribe(state => {
    const { language, selectedRecipe } = state;
    const recipe = recipes[language][selectedRecipe];
    section.replaceChildren();

    const title = document.createElement('h2');
    title.textContent = recipe.name;

    const recipeImage = document.createElement('img');
    recipeImage.src = recipeImagePaths[selectedRecipe];
    recipeImage.classList.add('recipe-image');

    const listsContainer = document.createElement('div');
    listsContainer.classList.add('lists-container');

    const ingredientsContainer = document.createElement('div');
    const instructionsContainer = document.createElement('div');

    const ingredientsList = IngredientsList(recipe, language);
    const instructionsList = InstructionsList(recipe);

    const ingredientsButton = createIngredientsButton();
    const instructionsButton = createInstructionsButton();

    ingredientsContainer.append(ingredientsButton);
    ingredientsContainer.append(ingredientsList);
    instructionsContainer.append(instructionsButton);
    instructionsContainer.append(instructionsList);

    listsContainer.append(ingredientsContainer);
    listsContainer.append(instructionsContainer);

    section.appendChild(title);
    section.appendChild(recipeImage);
    section.appendChild(listsContainer);
  });

  return section;
};

const createIngredientsButton = () => {
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-transparent');

  const name = document.createElement('span');
  name.textContent = 'Ingredients';

  const icon = document.createElement('img');
  icon.src = 'assets/icons/zutaten.png';
  icon.classList.add('icon');

  button.append(icon);
  button.append(name);

  return button;
};

const createInstructionsButton = () => {
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-transparent');

  const name = document.createElement('span');
  name.textContent = 'Instructions';

  const icon = document.createElement('img');
  icon.src = 'assets/icons/prep.png';
  icon.classList.add('icon');

  button.append(icon);
  button.append(name);

  return button;
};
