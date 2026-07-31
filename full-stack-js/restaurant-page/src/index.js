import "./style.css"
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

homePage();

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

homeButton.addEventListener("click", homePage);
menuButton.addEventListener("click", menuPage);
aboutButton.addEventListener("click", aboutPage);