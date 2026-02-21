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

  const languageSwitcher = document.createElement('button');
  languageSwitcher.id = 'langSwitcher';
  languageSwitcher.classList.add('btn', 'btn-transparent');

  store.subscribe(state => {
    languageSwitcher.textContent = state.language === 'english' ? 'DE' : 'EN';
  });

  languageSwitcher.addEventListener('click', () => {
    const state = store.getState();
    const nextLanguage = state.language === 'english' ? 'german' : 'english';
    store.setState({ ...state, language: nextLanguage });
  });

  hero.appendChild(title);
  hero.appendChild(icon);

  preferences.appendChild(languageSwitcher);

  header.appendChild(hero);
  header.appendChild(preferences);

  return header;
};
