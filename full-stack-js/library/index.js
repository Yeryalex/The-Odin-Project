const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const isRead = document.querySelector('#read');
const addBookForm = document.querySelector('#book-form');
const cardContainer = document.querySelector('.card-container');

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


addBookForm.addEventListener("submit", (e) => {

    // e.preventDefault();
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }
    
    addBookToLibrary(new Book(title.value, author.value, pages.value, isRead.checked));
    displayCards(myLibrary);
    
    addBookForm.reset();
});

function addBookToLibrary(objectDetailsBook) {
    myLibrary.push(objectDetailsBook);
}

function displayCards(myLibrary) {
   
    myLibrary.forEach(element => {
        
        const card = document.createElement("div");
        const tittleCard = document.createElement("div");
        const infoCard = document.createElement("div");
        const pAuthor = document.createElement("p");
        const pPages = document.createElement("p");
        const pRead = document.createElement("p");
        
        tittleCard.innerText = element.title;
        pAuthor.innerText = element.author;
        pPages.innerText = element.pages;
        pRead.innerText = element.read;

        card.classList.add("card");
        tittleCard.classList.add("book-title");
        infoCard.classList.add("info-card");
        pAuthor.classList.add("author");
        pPages.classList.add("pages");
        pRead.classList.add("read");
        
        infoCard.appendChild(pAuthor);
        infoCard.appendChild(pPages);
        infoCard.appendChild(pRead);
        
        card.appendChild(tittleCard);
        card.appendChild(infoCard);
        
        cardContainer.appendChild(card);
    });
}
