import "./styles.css";
import { homepage } from "./pages/homepage.js";
import { menu } from "./pages/menu.js";

const contentDiv = document.querySelector("#content");
const homeTab = homepage;
const menuTab = menu;

const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const aboutBtn = document.querySelector(".aboutBtn");

homeBtn.addEventListener("click", () => {
  //   contentDiv.removeChild(contentDiv.firstChild);
  contentDiv.appendChild(homeTab);
});

menuBtn.addEventListener("click", () => {
  contentDiv.removeChild(contentDiv.firstChild);
  contentDiv.appendChild(menuTab);
});
