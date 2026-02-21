export const Header = store => {
  const header = document.createElement('header');
  const hero = document.createElement('div');
  hero.classList.add('main-header');
  const title = document.createElement('h1');
  title.textContent = 'Odin Recipes';
  const icon = document.createElement('img');
  icon.classList.add('header-icon');
  icon.src = 'assets/icons/cooking-2.png';

  const preferences = document.createElement('div');
  preferences.classList.add('preferences');

  const languageSwitcher = document.createElement('button');
  languageSwitcher.id = 'langSwitcher';
  languageSwitcher.classList.add('btn-style');
  languageSwitcher.textContent = 'DE';

  languageSwitcher.addEventListener('click', () => {
    const current = store.getState();
    const next = current === 'english' ? 'german' : 'english';
    languageSwitcher.textContent = getNextLanguage(next);
    store.setState(next);
  });

  hero.appendChild(title);
  hero.appendChild(icon);

  preferences.appendChild(languageSwitcher);

  header.appendChild(hero);
  header.appendChild(preferences);

  return header;
};

const getNextLanguage = currentLanguage => {
  return currentLanguage === 'english' ? 'DE' : 'EN';
};
