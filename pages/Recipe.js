'use strict';
import { recipes } from '../data/recipes.js';
import { IngredientsList } from '../components/ingredientsList/render.js';
import { recipeImagePaths } from '../data/recipes-images.js';
import { InstructionsList } from '../components/instructionsList/render.js';
import { LanguageButton } from '../components/Language-Button/render.js';

export const Recipe = store => {
  const section = document.createElement('section');
  section.classList.add('recipe-section');

  section.innerHTML = `
    <div>
      <h2 class="recipe-title"></h2>
      <div class="language-container"></div>
    </div>
    <div class="recipe-main">
      <div class="ingredients-and-image">
        <div class="ingredients-container"</div>
        <img src="" class="recipe-image">
      </div>
      <div class="instructions-container"></div>
    </div>
  `;

  const elements = {
    title: section.querySelector('.recipe-title'),
    image: section.querySelector('.recipe-image'),
    languageContainer: section.querySelector('.language-container'),
    ingContainer: section.querySelector('.ingredients-container'),
    insContainer: section.querySelector('.instructions-container'),
  };

  elements.languageContainer.append(LanguageButton(store));

  store.subscribe(state => {
    const { language, selectedRecipe } = state;
    console.log(state);
    const recipe = recipes[language][selectedRecipe];

    elements.title.textContent = recipe.name;
    elements.image.src = recipeImagePaths[selectedRecipe];

    elements.ingContainer.replaceChildren(
      createButton('Ingredients', 'assets/icons/vegetables.png'),
      IngredientsList(recipe, language),
    );

    elements.insContainer.replaceChildren(
      createButton('Instructions', 'assets/icons/prep.png'),
      InstructionsList(recipe),
    );
  });
  return section;
};

const createButton = (text, iconPath) => {
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-transparent');

  button.innerHTML = `
    <img src="${iconPath}" class="icon" alt="">
    <span>${text}</span>
  `;

  return button;
};
