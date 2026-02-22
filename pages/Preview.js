'use strict';
import { recipes } from '../data/recipes.js';
import { RecipeButton } from '../components/Recipe-Button/render.js';

export const Preview = store => {
  const section = document.createElement('section');
  section.classList.add('preview-section');

  store.subscribe(state => {
    const { language } = state;

    section.replaceChildren();

    Object.entries(recipes[language]).forEach(([recipeID, recipeObj]) => {
      const wrapper = document.createElement('div');
      wrapper.classList.add('introduction');

      wrapper.innerHTML = `
        <div class="intro-head">
          <h2 class="intro-header">${recipeObj.showcase.headline}</h2>
          <span class="intro-tagline">${recipeObj.showcase.tagline}</span>
        </div>
        <p class="intro-text">${recipeObj.showcase.intro}</p>
        <div class="recipe-btn-container"></div>
      `;

      const prevButton = RecipeButton(recipeObj, language);

      prevButton.addEventListener('click', () => {
        const currentState = store.getState();
        store.setState({
          ...currentState,
          currentPage: 'recipe',
          selectedRecipe: recipeID,
        });
      });

      wrapper.querySelector('.recipe-btn-container').replaceWith(prevButton);

      section.appendChild(wrapper);
    });
  });

  return section;
};
