// src/about.js

import aboutImg from "./about.png";

export function aboutLoad() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h1>About</h1>
        <h2>We are here to serve you</h2>
        <img src="${aboutImg}">
        <p>Our culinary team is a diverse group of highly trained professional chefs who bring together flavors, techniques, and traditions from across the world. United by a shared passion for excellence, each chef contributes unique cultural influences and specialized skills, creating a dynamic kitchen where creativity and authenticity thrive.</p> 
        <p>From the careful selection of fresh ingredients to the precise execution of every dish, our team is dedicated to delivering an exceptional dining experience. Their collaboration, discipline, and love for the craft ensure that every plate reflects both professional mastery and the rich diversity of global cuisine</p>
        <p><i>When you acknowledge, as you must, that there is no such thing as perfect food, only the idea of it, then the real purpose of striving toward perfection becomes clear: to make people happy, that is what cooking is all about.</i></p>
        <p><i><b>Haim Cohen, Head chef of Morning in Tiberias Restaurant</b></i></p>
        `
};