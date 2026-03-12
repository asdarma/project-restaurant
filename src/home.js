// src/home.js

import homeImg from "./homeImg.png";

export function homeLoad() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h1>Morning in Tiberias Restaurant</h1>
            <img src="${homeImg}" alt="Morning in Tiberias">
        <h2>Welcome</h2>
            <p>Morning in Tiberias is inspired by the beautiful moment in the Bible when the risen Jesus Christ invited His disciples to share breakfast by the sea after the miraculous catch of fish at the Sea of Galilee near Tiberias. It was more than a meal—it was a moment of restoration, friendship, and quiet wonder at dawn. Our restaurant brings that spirit to life through a refined culinary experience that celebrates ancient Middle-Eastern flavors in a modern fine-dining style.</p>

        <h2>At a glance</h2>
            <p>Step into a place where tradition meets elegance. At Morning in Tiberias, every dish is crafted with inspiration from the foods that have nourished cultures around the Sea of Galilee for centuries—fresh fish, fragrant herbs, warm breads, olives, and timeless spices.</p>
            <p>We transform these ancient ingredients into a sophisticated dining experience, honoring the simplicity of the past while presenting it with contemporary artistry. Each plate tells a story of hospitality, gratitude, and abundance.</p>

        <h2>Join us</h2>
            <p><b>One-Way-Jesus Street, Tiberias 1410555, ISRAEL.</b></p>
            <p><b>RSVP: +972-5-1234567</b></p>
    `
};