document.addEventListener('DOMContentLoaded', () => {
  const accounts = {
    line: 'https://page.line.me/436xhgmf',
    instagram: 'https://www.instagram.com/links.hon04/'
  };
  document.querySelectorAll('.contact-grid').forEach((grid) => {
    const buttons = grid.querySelectorAll('.contact-box');
    if (buttons[2]) {
      buttons[2].href = accounts.line;
      buttons[2].target = '_blank';
      buttons[2].rel = 'noopener noreferrer';
    }
    if (buttons[3]) {
      buttons[3].href = accounts.instagram;
      buttons[3].target = '_blank';
      buttons[3].rel = 'noopener noreferrer';
    }
  });
});
