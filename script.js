let basket = [];

// ==========================
// SHOW MENU CATEGORY
// ==========================

function showCategory(category) {

    const div = document.getElementById("menu");
    div.innerHTML = "";

    if (!menu[category]) {
        div.innerHTML = "<p>No items found.</p>";
        return;
    }

    menu[category].forEach(item => {

        let image = "images/chips.jpg";
        const itemName = item.name.toLowerCase();

        if (itemName.includes("cod") || itemName.includes("haddock")) {
            image = "images/cod.jpg";
        } else if (itemName.includes("burger")) {
            image = "images/burger.jpg";
        } else if (itemName.includes("kebab")) {
            image = "images/kebab.jpg";
        } else if (
            itemName.includes("chicken") ||
            itemName.includes("wing") ||
            itemName.includes("nugget")
        ) {
            image = "images/chicken.jpg";
        } else if (
            itemName.includes("pie") ||
            itemName.includes("pudding")
        ) {
            image = "images/pie.jpg";
        } else if (itemName.includes("milkshake")) {
            image = "images/milkshake.jpg";
        } else if (
            itemName.includes("cake") ||
            itemName.includes("brownie") ||
            itemName.includes("cheesecake") ||
            itemName.includes("donut")
        ) {
            image = "images/dessert.jpg";
        }

        div.innerHTML += `
<div class="menu-item">

    <img src="${image}" class="food-photo">

    <div class="food-info">

        <h3>${item.name}</h3>

        <p class="price">
            £${item.price.toFixed(2)}
        </p>

    </div>

    <button class="add-btn"
        onclick="addToBasket('${item.name}',${item.price})">

        +

    </button>

</div>
`;

    });

}

// ==========================
// ADD TO BASKET
// ==========================

function addToBasket(name, price) {

    const existing = basket.find(item => item.name === name);

    if (existing) {
        existing.qty++;
    } else {
        basket.push({
            name: name,
            price: price,
            qty: 1
        });
    }

    updateBasket();

    if (name.toLowerCase().includes("kebab")) {
        showPopup([
            "🥗 Salad",
            "No Salad",
            "🧄 Garlic Mayo",
            "🌶️ Chilli Sauce",
            "🌿 Mint Sauce",
            "🍅 Tomato Sauce",
            "🥚 Mayonnaise",
            "🍖 BBQ Sauce",
            "No Sauce"
        ]);
    }

    if (
        name.toLowerCase().includes("chips") ||
        name.toLowerCase().includes("cod") ||
        name.toLowerCase().includes("haddock")
    ) {
        showPopup([
            "Salt",
            "Vinegar",
            "Curry Sauce",
            "Gravy",
            "Mushy Peas",
            "Beans"
        ]);
    }

}

// ==========================
// BASKET
// ==========================

function increase(index) {
    basket[index].qty++;
    updateBasket();
}

function decrease(index) {
    basket[index].qty--;

    if (basket[index].qty <= 0) {
        basket.splice(index, 1);
    }

    updateBasket();
}

function removeItem(index) {
    basket.splice(index, 1);
    updateBasket();
}

function updateBasket() {

    const basketDiv = document.getElementById("basketItems");
    basketDiv.innerHTML = "";

    let total = 0;

    basket.forEach((item, index) => {

        total += item.price * item.qty;

        basketDiv.innerHTML += `
        <div class="basket-item">
            <strong>${item.name}</strong><br>

            £${item.price.toFixed(2)} × ${item.qty}
            = £${(item.price * item.qty).toFixed(2)}

            <br><br>

            <button onclick="decrease(${index})">−</button>
            <button onclick="increase(${index})">+</button>
            <button onclick="removeItem(${index})">Remove</button>

            <hr>
        </div>
        `;

    });

    document.getElementById("total").innerText = total.toFixed(2);

    const basketCount = document.getElementById("basketCount");
    const basketTotal = document.getElementById("basketTotal");

    if (basketCount) basketCount.innerText = basket.reduce((sum, item) => sum + item.qty, 0);
    if (basketTotal) basketTotal.innerText = total.toFixed(2);

}

// ==========================
// SEARCH
// ==========================

function searchMenu() {

    const search = document.getElementById("search").value.toLowerCase();

    const div = document.getElementById("menu");
    div.innerHTML = "";

    Object.keys(menu).forEach(category => {

        menu[category].forEach(item => {

            if (item.name.toLowerCase().includes(search)) {

                div.innerHTML += `
                <div class="menu-item">
                    <h3>${item.name}</h3>
                    <p>£${item.price.toFixed(2)}</p>
                    <button onclick="addToBasket('${item.name}', ${item.price})">
                        +
                    </button>
                </div>
                `;

            }

        });

    });

}

// ==========================
// POPUP
// ==========================

function showPopup(options) {

    const popup = document.getElementById("popup");
    const list = document.getElementById("popupOptions");

    if (!popup || !list) return;

    list.innerHTML = "";

    options.forEach(option => {

        list.innerHTML += `
        <label style="display:block;margin:10px 0;">
            <input type="checkbox">
            ${option}
        </label>
        `;

    });

    popup.style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// ==========================
// DEFAULT TIME
// ==========================

window.onload = function () {

    showCategory("fish");

    const input = document.getElementById("collectionTime");

    if (input) {
        const now = new Date();
        now.setMinutes(now.getMinutes() + 20);
        input.value = now.toTimeString().slice(0, 5);
    }

};

// ==========================
// CHECKOUT
// ==========================

document.getElementById("checkout").addEventListener("click", function () {

    if (basket.length === 0) {
        alert("Your basket is empty.");
        return;
    }

    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const time = document.getElementById("collectionTime").value;
    const notes = document.getElementById("notes").value;

    let order = "";

    basket.forEach(item => {
        order += `${item.qty} x ${item.name} - £${(item.qty * item.price).toFixed(2)}\n`;
    });

    const total = document.getElementById("total").innerText;

    const body =
`MILTON CHIPPY ONLINE ORDER

Customer: ${name}

Phone: ${phone}

Collection Time: ${time}

${order}

TOTAL £${total}

Notes:
${notes}

Collection Only - Pay In Store`;

    window.location.href =
`mailto:Ranvirkaurbassi@gmail.com?subject=Milton Chippy Online Order&body=${encodeURIComponent(body)}`;

});
