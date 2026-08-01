import imageCafe from "./images/lily-banse--YHSwy6uqvk-unsplash.jpg"

export function homePage() {

    const divContainer = document.querySelector("#container");
    const restaurantDescription = document.createElement("p");
    const imageRestaurant = document.createElement("img");
    const h1 = document.createElement("h1");
    const heroContainer = document.createElement("div");

    h1.innerText = "Viva Restaurant"
    restaurantDescription.innerText = "A wonderfull place to hang out with friends";
    imageRestaurant.src = imageCafe;
    imageRestaurant.style.height = "400px";
    imageRestaurant.style.width = "700px";

    divContainer.textContent = "";
    heroContainer.classList.add("hero-container")
    heroContainer.appendChild(h1);
    heroContainer.appendChild(imageRestaurant);
    heroContainer.appendChild(restaurantDescription);
    divContainer.appendChild(heroContainer);
}