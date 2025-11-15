import './style.css'
import Mainpage from "./Mainpage";
import Menu from "./Menu";
import About from "./About";

let Home = document.getElementById("home");
Home.addEventListener('click', () => {Mainpage()});
let MenuPage = document.getElementById("menu");
MenuPage.addEventListener('click', () => {Menu()});
let AboutPage = document.getElementById("about");
AboutPage.addEventListener('click', () => {About()});

Mainpage();