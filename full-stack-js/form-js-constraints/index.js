const form = document.querySelector("form");
const mail = document.querySelector("#email");
const mailError = document.querySelector(".error-mail");

mail.addEventListener("input", () => {

    if (mail.validity.valid) {
        if (!mail.value.endsWith(".com")) {
        mailError.textContent = "Proper email must end with \".com\"";
        mailError.className = "error-mail active"
        mail.className = "active-bg";
    } else {
        mailError.textContent = "";
        mailError.className = "error-mail";
        mail.className = "";
    }
    } else {
        showError();

    }
})


form.addEventListener("submit", (e) => {
    
    if (!mail.validity.valid) {
        showError();
        e.preventDefault();
    }
})


function showError() {
     if (mail.validity.valueMissing) {
    mailError.textContent = "You need to enter an email address.";
  } else if (mail.validity.typeMismatch) {
    mailError.textContent = "Entered value needs to be an email address.";
    } else if (mail.validity.tooShort) {
            mailError.textContent = "Entered value needs to be longer than 8 characters.";
    } 

    mailError.className = "error-mail active"
}