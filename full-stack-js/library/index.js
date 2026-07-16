const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const isRead = document.querySelector('#read');
const addBookForm = document.querySelector('#book-form');
const cardContainer = document.querySelector('.card-container');
const buttonRead = document.querySelector(".read-button");

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

Book.prototype.toggleRead = function () {
    
    this.read = !this.read;
    return (this.read);
};


addBookForm.addEventListener("submit", (e) => {

    e.preventDefault();
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
        const deleteCardButton = document.createElement("img");
        const infoCard = document.createElement("div");
        const pTitle = document.createElement("p");
        const pAuthor = document.createElement("p");
        const pPages = document.createElement("p");
        const pReadButton = document.createElement("button");
        const pIsRead = document.createElement("p");
        
        pTitle.innerText = element.title;
        pAuthor.innerText = element.author;
        pPages.innerText = element.pages;
        pReadButton.innerText = "State";
        (element.read) ? pIsRead.innerText = "Read": pIsRead.innerText = "Unread";


        card.classList.add("card");
        card.setAttribute("data-ids", element.id);
        tittleCard.classList.add("book-title");
        deleteCardButton.classList.add("remove-button");
        deleteCardButton.src = "Icons/close-thick.svg";
        deleteCardButton.alt = "delete-card";
        infoCard.classList.add("info-card");
        pAuthor.classList.add("author");
        pPages.classList.add("pages");
        pReadButton.classList.add("read-button");
        pIsRead.classList.add("read");
        pIsRead.classList.add("unread");
        
        tittleCard.appendChild(pTitle);
        tittleCard.appendChild(deleteCardButton);
        infoCard.appendChild(pAuthor);
        infoCard.appendChild(pPages);
        infoCard.appendChild(pReadButton);
        infoCard.appendChild(pIsRead);
        
        card.appendChild(tittleCard);
        card.appendChild(infoCard);
        
        cardContainer.appendChild(card);

        deleteCardButton.addEventListener("click", (e) => {
            
            const id = card.dataset.ids;
            
            cardContainer.childNodes.forEach((e , index) => {
                if (e.dataset.ids === id) {
                    cardContainer.removeChild(cardContainer.childNodes[index]);
                }
            
                myLibrary.forEach((e, index) => {
                if (e.id === id) {
                    myLibrary.splice(index, 1)
                }
                });
            });
        });


        pReadButton.addEventListener("click", () => {
        
            if (element.toggleRead()) {
                pIsRead.innerText = "Read";
                pIsRead.className = "read";
            }
            else {
                pIsRead.innerText = "Unread";
                pIsRead.className = "unread";
            }
            // (element.toggleRead()) ? pIsRead.innerText = "Read" : pIsRead.innerText = "Unread";
        });

    });
}
