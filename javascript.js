const myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

const dune = new Book('Dune', 'some', 500, 'read');
const lordOfTheRings = new Book('lotr', 'tolkien', 400, 'not read');
myLibrary.push(dune, lordOfTheRings);

const newBookBtn = document.querySelector('.new-book');
const form = document.querySelector('form');

newBookBtn.addEventListener('click', () => {
  if (form.style.display === 'none') {
    form.style.display = 'flex';
  } else {
    form.style.display = 'none';
  }
});

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const tbody = document.querySelector('tbody');

function addBooksToTable() {
  const i = myLibrary.length - 1;
  const currentBook = myLibrary[i];
  const tr = document.createElement('tr');

  const tableBookData = (item) => {
    const td = document.createElement('td');
    tr.appendChild(td);
    td.appendChild(document.createTextNode(item));
    tbody.appendChild(tr);
  };
  Object.values(currentBook).forEach(tableBookData);
  tr.appendChild(document.createElement('button'));
}

document.querySelector('.add-book').addEventListener('click', (event) => {
  event.preventDefault();
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const bookPages = document.getElementById('pages').value;
  const bookStatus = document.getElementById('status').value;
  const myBook = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
  addBookToLibrary(myBook);
  addBooksToTable();
});
