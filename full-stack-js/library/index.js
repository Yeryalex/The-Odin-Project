const title = document.querySelector('#title')

console.log(title);
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
    this.info = function () {
        return (`${this.title} ${this.author}, ${this.pages} pages, ${(this.read) ? "read" : "not read yet"}`);
    }
}


const x = new Book("The amazing", "Yery R", 99, true);


// console.log(x);

// function addBookToLibrary(objectDetailsBook) {
//   myLibrary.push(objectDetailsBook);
// }


// title.addEventListener("input", (e)  =>{
//     console.log(e.target.value);
// });