export const Footer = () => {
  const footer = document.createElement('footer');

  footer.innerHTML = `
    <a 
       class="btn btn-transparent" 
       href="https://github.com/HenryWolfDev/odin-recipes/tree/main" 
       target="_blank">
       GitHub
    </a>
    <div classList="copy-right">
      <small>Made by Henry ${'&copy;'} 2026</small>
    </div>
  `;

  return footer;
};
