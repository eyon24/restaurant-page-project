import "./styles.css";
import { homepage } from "./pages/homepage.js";
import { menu } from "./pages/menu.js";
import { contact } from "./pages/contact.js";

const contentDiv = document.querySelector("#content");

const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const contactBtn = document.querySelector(".contactBtn");

homepage();

homeBtn.addEventListener("click", () => {
  contentDiv.replaceChildren();
  homepage();
});

menuBtn.addEventListener("click", () => {
  contentDiv.replaceChildren();
  menu();
});

contactBtn.addEventListener("click", () => {
  contentDiv.replaceChildren();
  contact();
});
