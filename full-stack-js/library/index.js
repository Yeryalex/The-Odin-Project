const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const isRead = document.querySelector('#read');
const addBookForm = document.querySelector('#book-form');

const myLibrary = [];

function Book(title, author, pages, read) {

    if (!new.target) {
        throw Error("Object from Book is being created without the new keyword.");
    }

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    return (`${this.title} ${this.author}, ${this.pages} pages, ${(this.read) ? "read" : "not read yet"}`);
};


function addBookToLibrary(objectDetailsBook) {
  myLibrary.push(objectDetailsBook);
}


addBookForm.addEventListener("submit", (e) => {

    // e.preventDefault();

    addBookToLibrary(new Book(title.value, author.value, pages.value, isRead.checked));
    console.log(myLibrary);
    addBookForm.reset();
});

