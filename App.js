import { Header } from './components/Header/render.js';
import { Preview } from './pages/Preview.js';
import { Footer } from './components/Footer/render.js';

const app = document.getElementById('app');

const App = () => {
  const header = Header();
  const preview = Preview();
  const footer = Footer();

  app.appendChild(header);
  app.appendChild(preview);
  app.appendChild(footer);
};

App();
