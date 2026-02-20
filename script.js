'use strict';
import { recipes } from './data/recipes-data.js';
import { buttonIconPaths } from './data/button-icon-paths.js';

const app = document.getElementById('app');

const buttonText = ['Auf zum ', 'Rezept'];

const renderPreview = () => {
  Object.entries(recipes.german).forEach(recipe => {
    // Container Preview
    const container = document.createElement('div');
    container.classList.add('introductory-recipe');

    // Header Preview
    const head = document.createElement('div');
    head.classList.add('intro-head');
    const title = document.createElement('h2');
    title.textContent = recipe[1].showcase.headline;
    const tag = document.createElement('span');
    tag.textContent = recipe[1].showcase.tagline;

    // Intro Preview
    const intro = document.createElement('p');
    intro.classList.add('intro-text');
    intro.textContent = recipe[1].showcase.intro;

    // Recipe Button
    const button = document.createElement('button');
    button.classList.add('recipe-btn');

    // Recipe Icon
    const icon = document.createElement('img');
    icon.classList.add('button-icon');
    const iconKey = recipe[1].showcase.headline;
    icon.src = buttonIconPaths.german[iconKey];

    // Button Text
    const textNodeStart = document.createElement('span');
    textNodeStart.textContent = buttonText[0];
    const textNodeEnd = document.createElement('span');
    textNodeEnd.textContent = buttonText[1];

    head.appendChild(title);
    head.appendChild(tag);

    button.appendChild(textNodeStart);
    button.appendChild(icon);
    button.appendChild(textNodeEnd);

    container.appendChild(head);
    container.appendChild(intro);
    container.appendChild(button);

    app.appendChild(container);
  });
};

function getButtonIcon() {}

renderPreview();
