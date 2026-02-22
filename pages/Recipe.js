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

    // Recipe Title
    const title = document.createElement('h2');
    title.textContent = recipe.name;

    // Lists-Container
    const listsContainer = document.createElement('div');
    listsContainer.classList.add('lists-container');

    // ingredientslist and Image
    const ingAndImageContainer = document.createElement('div');
    ingAndImageContainer.classList.add('ingredients-list-and-image');

    const ingredientsContainer = document.createElement('div');
    const ingredientsList = IngredientsList(recipe, language);
    const ingredientsButton = createIngredientsButton();

    const recipeImage = document.createElement('img');
    recipeImage.src = recipeImagePaths[selectedRecipe];
    recipeImage.classList.add('recipe-image');

    ingredientsContainer.append(ingredientsButton);
    ingredientsContainer.append(ingredientsList);

    ingAndImageContainer.append(ingredientsContainer);
    ingAndImageContainer.append(recipeImage);

    // Instructionslist
    const instructionsContainer = document.createElement('div');
    const instructionsList = InstructionsList(recipe);
    const instructionsButton = createInstructionsButton();

    instructionsContainer.append(instructionsButton);
    instructionsContainer.append(instructionsList);

    listsContainer.append(ingAndImageContainer);
    listsContainer.append(instructionsContainer);

    section.appendChild(title);
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
  icon.src = 'assets/icons/vegetables.png';
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
