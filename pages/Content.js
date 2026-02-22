import { Preview } from './Preview.js';
import { Recipe } from './Recipe.js';

export const MainContent = store => {
  const container = document.createElement('main');
  container.id = 'main-content';

  const render = () => {
    const state = store.getState();
    container.innerHTML = '';

    if (state.currentPage === 'preview') {
      container.appendChild(Preview(store));
    } else if (state.currentPage === 'recipe') {
      container.appendChild(Recipe(store));
    }
  };

  store.subscribe(render);

  render();

  return container;
};
