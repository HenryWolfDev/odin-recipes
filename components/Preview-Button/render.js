import { prevButtonData } from './data.js';

export const PreviewButton = (recipe, language) => {
  // Recipe Button
  const button = document.createElement('button');
  button.classList.add('action-btn');

  // Recipe Icon
  const icon = document.createElement('img');
  icon.classList.add('icon');
  const iconKey = recipe.showcase.headline;

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
