export const InstructionsList = recipe => {
  const container = document.createElement('ol');
  recipe.instructions.forEach(ing => {
    const instructionLine = document.createElement('li');
    const instruction = document.createElement('span');
    instruction.textContent = ing;

    instructionLine.append(instruction);
    container.appendChild(instructionLine);
  });
  return container;
};
