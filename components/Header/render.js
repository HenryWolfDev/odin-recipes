import { LanguageButton } from '../Language-Button/render.js';

export const Header = store => {
  const header = document.createElement('header');
  const hero = document.createElement('div');
  hero.classList.add('title-container');
  const title = document.createElement('h1');
  title.textContent = 'Odin Recipes';
  const icon = document.createElement('img');
  icon.classList.add('title-icon');
  icon.src = 'assets/icons/cooking-2.png';

  const preferences = document.createElement('div');
  preferences.classList.add('preferences');

  const languageSwitcher = LanguageButton(store);

  hero.appendChild(title);
  hero.appendChild(icon);

  preferences.appendChild(languageSwitcher);

  header.appendChild(hero);
  header.appendChild(preferences);

  return header;
};
