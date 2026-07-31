import imageCafe from "./images/cafe.jpg"

export function aboutPage() {
const divContainer = document.querySelector("#container");
const restaurantDescription = document.createElement("p");
const imageRestaurant = document.createElement("img");

restaurantDescription.innerText = "This is a wonderfull ABOUUUUUUUUUUUUUUUUUUUUUUUUUUUT";
imageRestaurant.src = imageCafe;
imageRestaurant.style.height = "200px"

divContainer.textContent = "";
divContainer.appendChild(imageRestaurant);
divContainer.appendChild(restaurantDescription);
}