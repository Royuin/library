const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

const newBookBtn = document.querySelector('.new-book');
const form = document.querySelector('form');

newBookBtn.addEventListener('click', () => {
  if (form.style.display === 'none') {
    form.style.display = 'flex';
  } else {
    form.style.display = 'none';
  }
});
