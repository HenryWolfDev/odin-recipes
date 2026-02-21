import { createStore } from './state/store.js';
import { Header } from './components/Header/render.js';
import { Footer } from './components/Footer/render.js';
import { MainContent } from './pages/MainContent.js';

const app = document.getElementById('app');

const App = () => {
  const store = createStore({
    language: 'english',
    currentPage: 'preview',
    selectedRecipe: null,
  });
  const header = Header(store);
  const main = MainContent(store);
  const footer = Footer();

  app.appendChild(header);
  app.appendChild(main);
  app.appendChild(footer);
};

App();
