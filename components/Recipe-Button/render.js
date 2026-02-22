import { prevButtonData } from './data.js';

export const RecipeButton = (recipe, language) => {
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-green');

  const iconKey = recipe.showcase.headline;

  button.innerHTML = `
    <span>${prevButtonData[language].text.start}</span>
    <img class="icon" src="${prevButtonData[language].paths[iconKey]}">
    <span>${prevButtonData[language].text.end}</span>
  `;

  return button;
};
