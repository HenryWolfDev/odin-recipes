export const Footer = () => {
  const footer = document.createElement('footer');
  const gitHub = document.createElement('a');
  gitHub.href = 'https://github.com/HenryWolfDev/odin-recipes/tree/main';
  gitHub.target = '_blank';
  gitHub.classList.add('global-btn-style');
  gitHub.textContent = 'GitHub';

  const attribution = document.createElement('div');
  const copyRight = document.createElement('small');
  copyRight.textContent = `Made by Henry &copy; 2026`;

  attribution.appendChild(copyRight);

  footer.appendChild(gitHub);
  footer.appendChild(attribution);

  return footer;
};
