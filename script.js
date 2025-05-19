const fridgeItems = [
    { name: "Coca Cola", price: 2.80 },
    { name: "Coca Cola Zero", price: 2.80 },
    { name: "Fanta Orange", price: 2.80 },
    { name: "Fanta Lemon", price: 2.80 },
    { name: "Sprite", price: 2.80 },
    { name: "Vimto", price: 2.80 },
    { name: "Irn Bru", price: 2.80 },
    { name: "Diet Irn Bru", price: 2.50 },
    { name: "Red Bull", price: 2.80 },
    { name: "Cano Water", price: 2.00 },
    { name: "Jimmy's Iced Coffee", price: 4.50 }
];

const pantryItems = [
    { name: "Nobby's Nuts", price: 2.50 },
    { name: "Metcalfe's Popcorn", price: 2.50 },
    { name: "Maltesers Treat Bag", price: 2.50 },
    { name: "Fruit Pastilles Treat Bag", price: 2.50 },
    { name: "REAL Crisps", price: 1.00 },
    { name: "Taylor's Crisps", price: 1.00 },
    { name: "Skittles Treat Bag", price: 2.50 },
    { name: "Haribo Treat Bag", price: 2.50 }
];

function populateItems(items, containerId) {
    const container = document.getElementById(containerId);
    items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<img src="assets/icons/asterisk1.svg" alt=""> ${item.name} - £${item.price.toFixed(2)}`;
        container.appendChild(li);
    });
}

populateItems(fridgeItems, "fridge-items");
populateItems(pantryItems, "pantry-items");
