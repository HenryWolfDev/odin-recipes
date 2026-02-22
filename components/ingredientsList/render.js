import { ingredientsTypes } from '../../data/ingredient-icons.js';

export const IngredientsList = (recipe, language) => {
  const container = document.createElement('ul');
  recipe.ingredients.forEach(ing => {
    const ingredient = document.createElement('li');
    ingredient.classList.add('ingredient');

    const icon = document.createElement('img');
    icon.src = ingredientsTypes[language][ing.type];
    icon.classList.add('icon');

    const name = document.createElement('span');
    name.textContent = ing.item;

    const amount = document.createElement('span');
    amount.classList.add('amount');
    amount.textContent = ing.amount;

    const unit = document.createElement('span');
    unit.textContent = ing.unit;

    ingredient.append(icon);

    if (ing.unit) {
      ingredient.append(amount);
    }
    if (ing.unit) {
      ingredient.append(unit);
    }

    ingredient.append(name);
    container.appendChild(ingredient);
  });

  return container;
};
