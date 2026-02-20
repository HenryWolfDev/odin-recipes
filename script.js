'use strict';
import { recipes } from './data/recipes-data.js';
import { previewButton } from './components/preview-button/button-component.js';

const app = document.getElementById('app');

const renderPreview = language => {
  // Preview Section
  const prevSection = document.createElement('section');
  prevSection.classList.add('preview-section');

  Object.entries(recipes[language]).forEach(recipe => {
    // Container
    const container = document.createElement('div');
    container.classList.add('introductory-recipe');

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

    const prevButton = previewButton(recipe, language);

    head.appendChild(title);
    head.appendChild(tag);

    container.appendChild(head);
    container.appendChild(intro);
    container.appendChild(prevButton);

    prevSection.appendChild(container);

    app.appendChild(prevSection);
  });
};

renderPreview('german');
