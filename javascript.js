const myLibrary = [];

const newBookBtn = document.querySelector('.new-book');

newBookBtn.addEventListener('click', () => {
  const form = document.querySelector('form');
  if (form.style.display === 'none') {
    form.style.display = 'flex';
  } else {
    form.style.display = 'none';
  }
});
