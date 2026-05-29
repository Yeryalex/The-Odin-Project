const ulRef = document.querySelector("ul");
const inputRef = document.querySelector("form input");
const buttonRef = document.querySelector("button");

function addItem(e) {
    
    e.preventDefault();

    let itemToAdd = e.target.form.item.value;
    e.target.form.item.value = "";


    let liItem = document.createElement("li");
    let spanItem = document.createElement("span");
    let buttonDelete = document.createElement("button");

    liItem.appendChild(spanItem);
    liItem.appendChild(buttonDelete);

    spanItem.textContent = itemToAdd;
    buttonDelete.textContent = "Delete"
    ulRef.appendChild(liItem);
}

ulRef.addEventListener("click", (e) => {

    if (e.target.tagName == "BUTTON" && e.target.innerText == "Delete") {
        let removeLi = e.target.closest("li");
        removeLi.remove();
    }
})

buttonRef.addEventListener("click", addItem);