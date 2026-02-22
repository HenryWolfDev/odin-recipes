import { ingredientsTypes } from '../../data/ingredient-icons.js';

export const IngredientsList = (recipe, language) => {
  const container = document.createElement('ul');

  recipe.ingredients.forEach(ing => {
    const ingredient = document.createElement('li');
    ingredient.classList.add('ingredient');

    const amount = document.createElement('span');
    amount.textContent = `${ing.amount}`;
    amount.classList.add('ing-amount');

    const unit = document.createElement('span');
    unit.textContent = `${ing.unit}`;
    unit.classList.add('ing-unit');

    ingredient.innerHTML = `
      <div class="image-container">
        <img class="icon" src="${ingredientsTypes[language][ing.type]}">
      </div>
      <div>
        <span class="ing-name">${ing.item}</span>
        <div class="amount-container">
        <span class="ing-amount">${ing.amount || ''}</span>
        <span class="ing-unit">${ing.unit || ''}</span>
        </div>
      </div>
    `;

    container.append(ingredient);
  });

  return container;
};

//  <span class="ing-amount">${ing.amount || ''}</span>
//          <span class="ing-unit">${ing.unit || ''}</span>
