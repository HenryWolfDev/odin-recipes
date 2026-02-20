import { prevButtonData } from './data/preview-button-data.js';

export const previewButton = (recipe, language) => {
  // Recipe Button
  const button = document.createElement('button');
  button.classList.add('recipe-btn');

  // Recipe Icon
  const icon = document.createElement('img');
  icon.classList.add('button-icon');
  const iconKey = recipe[1].showcase.headline;

  icon.src = prevButtonData[language].paths[iconKey];

  // Button Text
  const textNodeStart = document.createElement('span');
  textNodeStart.textContent = prevButtonData[language].text.start;
  const textNodeEnd = document.createElement('span');
  textNodeEnd.textContent = prevButtonData[language].text.end;

  button.appendChild(textNodeStart);
  button.appendChild(icon);
  button.appendChild(textNodeEnd);

  return button;
};
