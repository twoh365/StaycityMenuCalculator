// Fridge Items
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

// Pantry Items
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

const fridgeContainer = document.getElementById("fridge-items");
const pantryContainer = document.getElementById("pantry-items");
const cartContainer = document.getElementById("cart-items");
const totalAmount = document.getElementById("total-amount");
let total = 0;

// Generate Items
function generateItems(items, container) {
    items.forEach(item => {
        const itemElement = document.createElement("li");
        itemElement.classList.add("menu-item");
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <span>£${item.price.toFixed(2)}</span>
            <div class="quantity-container">
                <input type="number" value="1" min="1" max="99">
                <button onclick="addToCart('${item.name}', ${item.price}, this)">Add</button>
            </div>
        `;
        container.appendChild(itemElement);
    });
}

generateItems(fridgeItems, fridgeContainer);
generateItems(pantryItems, pantryContainer);

// Add to Cart Function
function addToCart(name, price, button) {
    const quantity = parseInt(button.previousElementSibling.value);
    const totalPrice = price * quantity;
    total += totalPrice;
    totalAmount.textContent = total.toFixed(2);

    const cartItem = document.createElement("li");
    cartItem.classList.add("cart-item");
    cartItem.textContent = `${name} x${quantity} - £${totalPrice.toFixed(2)}`;
    cartContainer.appendChild(cartItem);
}

// Clear Cart Function
document.getElementById("clear-cart").addEventListener("click", () => {
    total = 0;
    totalAmount.textContent = total.toFixed(2);
    cartContainer.innerHTML = "";
});
