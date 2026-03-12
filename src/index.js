// src/index.js

import "./styles.css";
import { homeLoad } from "./home.js";
import { aboutLoad } from "./about.js";
import { menuLoad } from "./menu.js";

homeLoad(); // initial load

const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');

homeBtn.addEventListener("click", () => {
    homeLoad()
});

menuBtn.addEventListener("click", () => {
    menuLoad()
});

aboutBtn.addEventListener("click", () => {
    aboutLoad()
});