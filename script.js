// Menu Items
const menuItems = [
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

const menuContainer = document.getElementById("menu-items");
const totalAmount = document.getElementById("total-amount");
let total = 0;

// Generate Menu Items
menuItems.forEach(item => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("menu-item");
    itemElement.innerHTML = `
        <span>${item.name}</span>
        <span class="price">£${item.price.toFixed(2)}</span>
        <button onclick="addToCart(${item.price})">Add</button>
    `;
    menuContainer.appendChild(itemElement);
});

// Add to Cart Function
function addToCart(price) {
    total += price;
    totalAmount.textContent = total.toFixed(2);
}

// Clear Cart Function
document.getElementById("clear-cart").addEventListener("click", () => {
    total = 0;
    totalAmount.textContent = total.toFixed(2);
});
