export const createLanguageState = initialState => {
  let language = initialState;
  const listeners = [];

  const getLanguageState = () => language;

  const setLanguage = nextState => {
    language = nextState;
    listeners.forEach(fn => fn(language));
  };

  const subscribe = fn => {
    listeners.push(fn);
    fn(language);
  };

  return { getState: getLanguageState, setState: setLanguage, subscribe };
};
