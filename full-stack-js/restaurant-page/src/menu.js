import imageCafe from "./images/victoria-shes-UC0HZdUitWY-unsplash.jpg"

export function menuPage() {
    const divContainer = document.querySelector("#container");
    const restaurantDescription = document.createElement("p");
    const imageRestaurant = document.createElement("img");
    const h1 = document.createElement("h1");
    const heroContainer = document.createElement("div");

    h1.innerText = "The Barbecue On Fire"
    restaurantDescription.innerText = "Vegetables and delicious meat 65$";
    imageRestaurant.src = imageCafe;
    imageRestaurant.style.height = "400px"

    divContainer.textContent = "";
    heroContainer.classList.add("hero-container")
    heroContainer.appendChild(h1);
    heroContainer.appendChild(imageRestaurant);
    heroContainer.appendChild(restaurantDescription);
    divContainer.appendChild(heroContainer);
}