const items = [
  { name: "Coca Cola", price: 2.8, section: "fridge" },
  { name: "Coca Cola Zero", price: 2.8, section: "fridge" },
  { name: "Fanta Orange", price: 2.8, section: "fridge" },
  { name: "Fanta Lemon", price: 2.8, section: "fridge" },
  { name: "Sprite", price: 2.8, section: "fridge" },
  { name: "Vimto", price: 2.8, section: "fridge" },
  { name: "Irn Bru", price: 2.8, section: "fridge" },
  { name: "Diet Irn Bru", price: 2.5, section: "fridge" },
  { name: "Red Bull", price: 2.8, section: "fridge" },
  { name: "Cano Water", price: 2.0, section: "fridge" },
  { name: "Jimmy's Iced Coffee", price: 4.5, section: "fridge" },
  { name: "Metcalfe's Popcorn", price: 2.5, section: "pantry" },
  { name: "Maltesers Treat Bag", price: 2.5, section: "pantry" },
  { name: "Fruit Pastels Treat Bag", price: 2.5, section: "pantry" },
  { name: "Nobby's Nuts", price: 2.5, section: "pantry" },
  { name: "REAL Crisps", price: 1.0, section: "pantry" },
  { name: "Taylor's Crisps", price: 1.0, section: "pantry" }
];

const asteriskIcons = [
  './dist/assets/icons/asterisk1.svg',
  './dist/assets/icons/asterisk2.svg',
  './dist/assets/icons/asterisk3.svg',
  './dist/assets/icons/asterisk4.svg',
  './dist/assets/icons/asterisk5.svg',
  './dist/assets/icons/asterisk6.svg'
];

function getRandomAsterisk() {
  return asteriskIcons[Math.floor(Math.random() * asteriskIcons.length)];
}

function formatPrice(price) {
  return `£${price.toFixed(2)}`;
}

let cart = {};

function renderList(containerId, section) {
  const ul = document.getElementById(containerId);
  ul.innerHTML = "";
  items.forEach(item => {
    if (item.section === section) {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = getRandomAsterisk();
      img.className = "asterisk-img";
      let container = document.getElementById(section + '-container');
      if(container){
        let color = getComputedStyle(container).getPropertyValue('--text-color').trim();
        img.style.filter = `none`;
        if(color === 'black' || color === '#000000') {
          img.style.filter = `invert(0)`;
        } else {
          img.style.filter = `none`;
          img.style.color = color;
          img.style.webkitMaskImage = `url(${img.src})`;
          img.style.backgroundColor = color;
          img.src = '';
        }
      }
      li.appendChild(img);
      li.appendChild(document.createTextNode(`${item.name} - ${formatPrice(item.price)}`));
      li.addEventListener("click", () => addToCart(item.name));
      ul.appendChild(li);
    }
  });
}

function renderCart() {
  const ul = document.getElementById("cart-list");
  ul.innerHTML = "";
  let total = 0;
  Object.entries(cart).forEach(([name, qty]) => {
    const item = items.find(i => i.name === name);
    const price = item.price * qty;
    total += price;
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = getRandomAsterisk();
    img.className = "asterisk-img";
    let cartContainer = document.getElementById('cart-container');
    let color = getComputedStyle(cartContainer).getPropertyValue('--text-color').trim();
    img.style.filter = `none`;
    if(color === 'black' || color === '#000000') {
      img.style.filter = `invert(0)`;
    } else {
      img.style.filter = `none`;
      img.style.color = color;
      img.style.webkitMaskImage = `url(${img.src})`;
      img.style.backgroundColor = color;
      img.src = '';
    }
    li.appendChild(img);
    li.appendChild(document.createTextNode(`${name} x${qty} - ${formatPrice(price)}`));
    ul.appendChild(li);
  });
  document.getElementById("total-price").textContent = `Total: ${formatPrice(total)}`;
}

function addToCart(name) {
  cart[name] = (cart[name] || 0) + 1;
  renderCart();
}

function clearCart() {
  cart = {};
  renderCart();
}
document.getElementById("clear-cart").addEventListener("click", clearCart);

const importantInfoSteps = [
  "There are two versions of this calculator: a blank file with no items showing and a pre-loaded version with all current items in the fridge and pantry (as of 11/06/2025).",
  "The Master Price List is where you can update items and prices that appear in the fridge and pantry.",
  "If prices change or new items are added, use the Master Price List to make updates.",
  "Export your Master Price List regularly and save these files in the F&B folder on the reception desktop.",
  "The main pre-loaded file is updated monthly to include the latest Master Price List."
];

const howToUseSteps = [
  "Click on any item in the Fridge or Pantry lists to add it to the cart.",
  "The cart will display each selected item with quantities and total price.",
  "Use the Clear Cart button to remove all items from the cart.",
  "Use the color selectors below each section to change the theme colors.",
  "Click 'Show/Hide Master Price List' (at the bottom) to view or edit all items and prices.",
  "Use the buttons in the Cart section to Save Cart as CSV, Copy Cart to Clipboard, or Email Cart."
];

function createAsteriskBullet(text) {
  const li = document.createElement("li");
  li.style.display = "flex";
  li.style.alignItems = "center";
  li.style.gap = "10px";
  li.style.marginBottom = "8px";
  const img = document.createElement("img");
  img.src = getRandomAsterisk();
  img.style.width = "14px";
  img.style.height = "14px";
  img.style.flexShrink = "0";
  li.appendChild(img);
  const span = document.createElement("span");
  span.textContent = text;
  li.appendChild(span);
  return li;
}

function renderInstructions() {
  const ulTop = document.getElementById("top-instructions-list");
  const ulHowTo = document.getElementById("howto-list");
  ulTop.innerHTML = "";
  ulHowTo.innerHTML = "";
  importantInfoSteps.forEach(text => ulTop.appendChild(createAsteriskBullet(text)));
  howToUseSteps.forEach(text => ulHowTo.appendChild(createAsteriskBullet(text)));
}

document.getElementById("add-master-item-btn").addEventListener("click", () => {
  document.getElementById("modal-overlay").style.display = "flex";
  document.getElementById("modal-form").reset();
  document.getElementById("item-name").focus();
});

document.getElementById("modal-cancel-btn").addEventListener("click", () => {
  document.getElementById("modal-overlay").style.display = "none";
});

document.getElementById("modal-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("item-name").value.trim();
  const section = document.getElementById("item-section").value;
  const price = parseFloat(document.getElementById("item-price").value);
  if (!name) { alert("Please enter a name."); return; }
  if (!section) { alert("Please select a section."); return; }
  if (isNaN(price) || price < 0) { alert("Please enter a valid price."); return; }
  items.push({ name, section, price });
  renderMasterPriceList();
  renderList("fridge-list", "fridge");
  renderList("pantry-list", "pantry");
  renderCart();
  document.getElementById("modal-overlay").style.display = "none";
});

function renderMasterPriceList() {
  const container = document.getElementById("master-list-body");
  container.innerHTML = "";
  items.forEach((item, index) => {
    const tr = document.createElement("tr");

    const nameTd = document.createElement("td");
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = item.name;
    nameInput.addEventListener("change", () => {
      item.name = nameInput.value.trim() || item.name;
      renderList("fridge-list", "fridge");
      renderList("pantry-list", "pantry");
      renderCart();
    });
    nameTd.appendChild(nameInput);
    tr.appendChild(nameTd);

    const sectionTd = document.createElement("td");
    const sectionSelect = document.createElement("select");
    ["fridge", "pantry"].forEach(sec => {
      const opt = document.createElement("option");
      opt.value = sec;
      opt.textContent = sec.charAt(0).toUpperCase() + sec.slice(1);
      if (sec === item.section) opt.selected = true;
      sectionSelect.appendChild(opt);
    });
    sectionSelect.addEventListener("change", () => {
      item.section = sectionSelect.value;
      renderList("fridge-list", "fridge");
      renderList("pantry-list", "pantry");
      renderCart();
    });
    sectionTd.appendChild(sectionSelect);
    tr.appendChild(sectionTd);

    const priceTd = document.createElement("td");
    const priceInput = document.createElement("input");
    priceInput.type = "number";
    priceInput.min = "0";
    priceInput.step = "0.01";
    priceInput.value = item.price.toFixed(2);
    priceInput.addEventListener("change", () => {
      const val = parseFloat(priceInput.value);
      if (!isNaN(val) && val >= 0) {
        item.price = val;
        renderList("fridge-list", "fridge");
        renderList("pantry-list", "pantry");
        renderCart();
      } else {
        priceInput.value = item.price.toFixed(2);
      }
    });
    priceTd.appendChild(priceInput);
    tr.appendChild(priceTd);

    const actionTd = document.createElement("td");
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "btn-orange";
    delBtn.addEventListener("click", () => {
      items.splice(index, 1);
      renderMasterPriceList();
      renderList("fridge-list", "fridge");
      renderList("pantry-list", "pantry");
      renderCart();
    });
    actionTd.appendChild(delBtn);
    tr.appendChild(actionTd);

    container.appendChild(tr);
  });
}

document.getElementById("export-btn").addEventListener("click", () => {
  const dataStr = JSON.stringify(items, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `master_price_list_${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

document.getElementById("import-btn").addEventListener("click", () => {
  document.getElementById("import-file").value = null;
  document.getElementById("import-file").click();
});

document.getElementById("import-file").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const importedItems = JSON.parse(e.target.result);
      if (!Array.isArray(importedItems)) throw new Error("Invalid JSON format");
      for (const it of importedItems) {
        if (typeof it.name !== "string" || typeof it.price !== "number" || typeof it.section !== "string") {
          throw new Error("JSON items must contain name (string), price (number), and section (string)");
        }
      }
      items.length = 0;
      importedItems.forEach(it => items.push(it));
      renderMasterPriceList();
      renderList("fridge-list", "fridge");
      renderList("pantry-list", "pantry");
      renderCart();
      alert("Master Price List successfully imported!");
    } catch (err) {
      alert("Error importing Master Price List: " + err.message);
    }
  };
  reader.readAsText(file);
});

let currentAsteriskIndex = 0;
function animateHeaderAsterisk() {
  const img = document.getElementById("header-asterisk");
  currentAsteriskIndex = (currentAsteriskIndex + 1) % asteriskIcons.length;
  img.src = asteriskIcons[currentAsteriskIndex];
}
setInterval(animateHeaderAsterisk, 500);

window.onload = () => {
  renderList("fridge-list", "fridge");
  renderList("pantry-list", "pantry");
  renderCart();
  renderMasterPriceList();
  renderInstructions();
  setupColorSelector("fridge-container");
  setupColorSelector("pantry-container");
  setupColorSelector("cart-container");
};

function setupColorSelector(id) {
  const cont = document.getElementById(id);
  const blocks = cont.querySelectorAll(".color-block");
  const invertBtn = cont.querySelector(".invert-btn");
  let currentColor = "purple";
  let inverted = false;

  function apply() {
    cont.classList.remove(
      "brown", "brown-inverted",
      "purple", "purple-inverted",
      "darkpurple", "darkpurple-inverted",
      "teal", "teal-inverted",
      "orange", "orange-inverted"
    );
    cont.classList.add(inverted ? `${currentColor}-inverted` : currentColor);
    blocks.forEach(b => b.classList.toggle("selected", b.classList.contains(currentColor)));
  }

  blocks.forEach(b => b.addEventListener("click", () => {
    currentColor = [...b.classList].find(c => ["brown", "purple", "darkpurple", "teal", "orange"].includes(c));
    inverted = false;
    apply();
  }));

  invertBtn.addEventListener("click", () => {
    inverted = !inverted;
    apply();
  });

  apply();
}

document.getElementById('save-csv').addEventListener('click', () => {
  if (Object.keys(cart).length === 0) {
    alert("Cart is empty.");
    return;
  }
  let csvContent = "Item,Quantity,Price,Total\n";
  let totalCost = 0;
  for (const [name, qty] of Object.entries(cart)) {
    const item = items.find(i => i.name === name);
    if (!item) continue;
    const lineTotal = item.price * qty;
    totalCost += lineTotal;
    csvContent += `"${name}",${qty},${item.price.toFixed(2)},${lineTotal.toFixed(2)}\n`;
  }
  csvContent += `,,Total,${totalCost.toFixed(2)}\n`;
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `cart_${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

document.getElementById('copy-cart').addEventListener('click', () => {
  if (Object.keys(cart).length === 0) {
    alert("Cart is empty.");
    return;
  }
  let text = "Cart contents:\n";
  let totalCost = 0;
  for (const [name, qty] of Object.entries(cart)) {
    const item = items.find(i => i.name === name);
    if (!item) continue;
    const lineTotal = item.price * qty;
    totalCost += lineTotal;
    text += `${name} x${qty} = £${lineTotal.toFixed(2)}\n`;
  }
  text += `Total: £${totalCost.toFixed(2)}`;
  navigator.clipboard.writeText(text).then(() => {
    alert("Cart copied to clipboard!");
  }, () => {
    alert("Failed to copy cart.");
  });
});

document.getElementById('email-cart').addEventListener('click', () => {
  if (Object.keys(cart).length === 0) {
    alert("Cart is empty.");
    return;
  }
  let body = "Items purchased:\n\n";
  let totalCost = 0;
  for (const [name, qty] of Object.entries(cart)) {
    const item = items.find(i => i.name === name);
    if (!item) continue;
    const lineTotal = item.price * qty;
    totalCost += lineTotal;
    body += `${name} x${qty} = £${lineTotal.toFixed(2)}\n`;
  }
  body += `\nTotal: £${totalCost.toFixed(2)}\n\nKind regards,\nThe Pantry`;
  const mailtoLink = `mailto:?subject=F&B Cart Purchase&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
});
