// src/menu.js

export function menuLoad() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h1>Menu</h1>
        <h2>The Disciple's Fish $9.90</h2>
        <p>Fresh caught tilapia from the Sea of Galilee, roasted on charcoal with red-berry woods to bring the distinct smoky aroma. Garnished with fresh olives and disciple's special-created sauce to match the warm and delicate sourbread and paired with home-made vegetables pickle.</p>

        <h2>The Two Fish and Five Bread $14.90</h2>
        <p>A pair of freshly caught sardines from the Mediterranean sea, steamed on selected ancient-spices; cumin, coriander and saffron, along with imported luxury spices such as cinnamon, pepper and frankincense. To pair these aromatic and savory aroma, five piece of legume bread hand-made and baked to perfection.</p>

        <h2>The Lamb $13.90</h2>
        <p>Slow-roasted lamb marinated in olive oil, lemon, garic and dried herbs, such as oregano and thyme, then sealed tightly in parchment paper with potatoes and baked until falling off the bone. A sauce made of onion mixture, broth, rosemary and thyme to accompany the meltingly tender lamb.</p>
        
        <h2>Galilee's Shakshuka $7.90</h2>
        <p>A full pot of simmering tomatoes, butternut squash, brussel sprout, spinach, onions, garlic, spices and gently poached eggs. This nourishing and satisfying meal buds will tantalising you to eat again and again. A generous layer of feta cheese on top to make this dish such a national favorite.</p>
    `
};