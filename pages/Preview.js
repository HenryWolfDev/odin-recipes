'use strict';
import { recipes } from '../data/recipes.js';
import { PreviewButton } from '../components/Preview-Button/render.js';

export const Preview = language => {
  // Preview Section
  const prevSection = document.createElement('section');
  prevSection.classList.add('preview-section');

  Object.entries(recipes[language]).forEach(recipe => {
    // Container
    const container = document.createElement('div');
    container.classList.add('introductory');

    // Header
    const head = document.createElement('div');
    head.classList.add('intro-head');
    const title = document.createElement('h2');
    title.textContent = recipe[1].showcase.headline;
    const tag = document.createElement('span');
    tag.textContent = recipe[1].showcase.tagline;

    // Intro Text
    const intro = document.createElement('p');
    intro.classList.add('intro-text');
    intro.textContent = recipe[1].showcase.intro;

    const prevButton = PreviewButton(recipe, language);

    head.appendChild(title);
    head.appendChild(tag);

    container.appendChild(head);
    container.appendChild(intro);
    container.appendChild(prevButton);

    prevSection.appendChild(container);
  });

  return prevSection;
};
