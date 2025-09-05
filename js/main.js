// Misc site behaviors
document.addEventListener('click', (e) => {
  if (e.target.matches('[data-copy]')) {
    const txt = e.target.getAttribute('data-copy');
    navigator.clipboard.writeText(txt).then(() => {
      e.target.textContent = 'Copied!';
      setTimeout(() => (e.target.textContent = 'Copy'), 1500);
    });
  }
});