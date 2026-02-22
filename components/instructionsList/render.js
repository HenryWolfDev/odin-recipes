export const InstructionsList = recipe => {
  const container = document.createElement('ol');
  recipe.instructions.forEach((ing, index) => {
    const instructionLine = document.createElement('li');
    const lineNumber = document.createElement('span');
    lineNumber.textContent = `${index + 1}. `;
    const instruction = document.createElement('span');
    instruction.textContent = ing;

    instructionLine.append(lineNumber);
    instructionLine.append(instruction);
    container.appendChild(instructionLine);
  });
  return container;
};
