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

function createRemoveBtn(tr, i) {
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-button');
  removeBtn.textContent = 'Remove';
  tr.appendChild(removeBtn);

  removeBtn.addEventListener('click', () => {
    const element = document.querySelector(`tr[data-id='${i}']`);
    element.remove();
    myLibrary.splice(i, 1);
  });
}

function createReadButton(tr, item, currentBook) {
  const td = document.createElement('td');
  tr.appendChild(td);
  const readBtn = document.createElement('button');
  readBtn.appendChild(document.createTextNode(item));
  td.appendChild(readBtn);

  readBtn.addEventListener('click', () => {
    if (readBtn.textContent === 'read') {
      const thisBook = currentBook.status;
      thisBook.textContent = 'not read';
      readBtn.textContent = 'not read';
    } else {
      const thisBook = currentBook.status;
      thisBook.textContent = 'read';
      readBtn.textContent = 'read';
    }
  });
}

function addBookToTable() {
  const i = myLibrary.length - 1;
  const currentBook = myLibrary[i];
  const tr = document.createElement('tr');
  tr.dataset.id = i;
  const tableBookData = (item) => {
    if (item !== 'read' && item !== 'not read') {
      const td = document.createElement('td');
      tr.appendChild(td);
      td.appendChild(document.createTextNode(item));
      tbody.appendChild(tr);
    } else {
      createReadButton(tr, item, currentBook);
    }
  };

  Object.values(currentBook).forEach(tableBookData);
  createRemoveBtn(tr, i);
}

document.querySelector('.add-book').addEventListener('click', (event) => {
  event.preventDefault();
  let bookStatus;
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const bookPages = document.getElementById('pages').value;
  if (document.getElementById('status').checked) {
    bookStatus = 'read';
  } else {
    bookStatus = 'not read';
  }
  const myBook = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
  addBookToLibrary(myBook);
  addBookToTable();
});
