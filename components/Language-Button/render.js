export const LanguageButton = store => {
  const languageSwitcher = document.createElement('button');
  languageSwitcher.id = 'langSwitcher';
  languageSwitcher.classList.add('btn', 'btn-transparent');

  store.subscribe(state => {
    languageSwitcher.textContent = state.language === 'english' ? 'DE' : 'EN';

    languageSwitcher.addEventListener('click', () => {
      const state = store.getState();
      const nextLanguage = state.language === 'english' ? 'german' : 'english';
      store.setState({ ...state, language: nextLanguage });
    });
  });

  return languageSwitcher;
};
