'use strict';
import { recipes } from '../data/recipes.js';
import { PreviewButton } from '../components/Preview-Button/render.js';

export const Preview = store => {
  const section = document.createElement('section');
  section.classList.add('preview-section');

  store.subscribe(state => {
    const { language } = state;
    section.replaceChildren();

    Object.values(recipes[language]).forEach(recipeObj => {
      console.log(recipeObj);
      const container = document.createElement('div');
      container.classList.add('introductory');

      const head = document.createElement('div');
      head.classList.add('intro-head');

      const title = document.createElement('h2');
      title.textContent = recipeObj.showcase.headline;

      const tag = document.createElement('span');
      tag.textContent = recipeObj.showcase.tagline;

      const intro = document.createElement('p');
      intro.classList.add('intro-text');
      intro.textContent = recipeObj.showcase.intro;

      const prevButton = PreviewButton(recipeObj, language);

      prevButton.addEventListener('click', () => {
        const currentState = store.getState();
        store.setState({
          ...currentState,
          currentPage: 'recipe',
          selectedRecipe: recipeObj,
        });
      });

      head.append(title, tag);
      container.append(head, intro, prevButton);
      section.appendChild(container);
    });
  });

  return section;
};
