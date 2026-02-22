import { LanguageButton } from '../Language-Button/render.js';

export const Header = store => {
  const header = document.createElement('header');

  header.innerHTML = `
    <div class="hero-container">
      <h1>Odin Recipes</h1>
      <img class="hero-icon" src="assets/icons/cooking-2.png">
    </div>
    <div class="preferences"></div>
  `;

  const languageSwitcher = LanguageButton(store);

  header.querySelector('.preferences').append(languageSwitcher);

  return header;
};
