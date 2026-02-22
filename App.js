import { createStore } from './state/store.js';
import { Header } from './components/Header/render.js';
import { Footer } from './components/Footer/render.js';
import { MainContent } from './pages/Content.js';

const App = () => {
  const store = createStore({
    language: 'english',
    currentPage: 'preview',
    selectedRecipe: null,
  });

  const render = () => {
    const state = store.getState();
    const app = document.getElementById('app');
    app.innerHTML = '';

    if (state.currentPage === 'preview') {
      app.appendChild(Header(store));
    }

    app.appendChild(MainContent(store));
    app.appendChild(Footer());
  };

  store.subscribe(render);

  render();
};

App();
