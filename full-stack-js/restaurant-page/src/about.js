import imageCafe from "./images/alex-haney-CAhjZmVk5H4-unsplash.jpg"

export function aboutPage() {

    const divContainer = document.querySelector("#container");
    const restaurantDescription = document.createElement("p");
    const imageRestaurant = document.createElement("img");
    const h1 = document.createElement("h1");
    const heroContainer = document.createElement("div");

    h1.innerText = "This is about us"
    restaurantDescription.innerText = `Stepping into Viva Restaurant feels like walking into the home of a close friend.

    With smiling staff who treat you like family and a menu built around soul-warming comfort food, it’s a cozy haven designed for slow, lingering evenings.`;
    imageRestaurant.src = imageCafe;
    restaurantDescription.style.width = "400px";
    restaurantDescription.style.paddingBottom = "20px";

    divContainer.textContent = "";
    heroContainer.classList.add("hero-container")
    heroContainer.appendChild(h1);
    heroContainer.appendChild(imageRestaurant);
    heroContainer.appendChild(restaurantDescription);
    divContainer.appendChild(heroContainer);
}