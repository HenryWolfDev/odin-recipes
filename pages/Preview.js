'use strict';
import { recipes } from '../data/recipes.js';
import { PreviewButton } from '../components/Preview-Button/render.js';

export const Preview = store => {
  const prevSection = document.createElement('section');
  prevSection.classList.add('preview-section');

  store.subscribe(language => {
    prevSection.replaceChildren();

    Object.values(recipes[language]).forEach(recipeObj => {
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

      head.append(title, tag);
      container.append(head, intro, prevButton);
      prevSection.appendChild(container);
    });
  });

  return prevSection;
};
