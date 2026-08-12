let basket = [];

// ==========================
// SHOW MENU CATEGORY
// ==========================

function showCategory(category) {

    const div = document.getElementById("menu");

    if (!div) return;

    div.innerHTML = "";

    if (!menu[category]) {
        div.innerHTML = "<p>No items found.</p>";
        return;
    }

    menu[category].forEach(item => {

        let image = "images/chips.jpg";
        const itemName = item.name.toLowerCase();

        if (
            itemName.includes("cod") ||
            itemName.includes("haddock") ||
            itemName.includes("fish")
        ) {
            image = "images/cod.jpg";

        } else if (itemName.includes("burger")) {
            image = "images/burger.jpg";

        } else if (
            itemName.includes("kebab") ||
            itemName.includes("doner")
        ) {
            image = "images/kebab.jpg";

        } else if (
            itemName.includes("chicken") ||
            itemName.includes("wing") ||
            itemName.includes("nugget") ||
            itemName.includes("sfc")
        ) {
            image = "images/chicken.jpg";

        } else if (
            itemName.includes("pie") ||
            itemName.includes("pudding") ||
            itemName.includes("pasty")
        ) {
            image = "images/pie.jpg";

        } else if (itemName.includes("milkshake")) {
            image = "images/milkshake.jpg";

        } else if (
            itemName.includes("cake") ||
            itemName.includes("brownie") ||
            itemName.includes("cheesecake") ||
            itemName.includes("donut") ||
            itemName.includes("dessert")
        ) {
            image = "images/dessert.jpg";
        }

        div.innerHTML += `
        <div class="menu-item">

            <img src="${image}" class="food-photo" alt="${item.name}">

            <div class="food-info">

                <h3>${item.name}</h3>

                <p>£${item.price.toFixed(2)}</p>

            </div>

            <button onclick="addToBasket(${JSON.stringify(item.name)}, ${item.price})">
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

    // Show the correct popup
    showExtrasForItem(name);
}


// ==========================
// EXTRAS / SAUCE POPUP
// ==========================

function showExtrasForItem(name) {

    const itemName = name.toLowerCase();

    /*
    KEBABS, DONER MEAT, CHICKEN MEAT,
    MIXED MEAT AND CHIPS
    */

    const kebabOrMeatOrChips =
        itemName.includes("kebab") ||
        itemName.includes("doner") ||
        itemName.includes("chicken meat") ||
        itemName.includes("mixed meat") ||
        itemName.includes("chips");

    if (kebabOrMeatOrChips) {

        showPopup([

            "🥗 Salad",
            "No Salad",

            "Sweet Chilli",
            "Hot Chilli",
            "BBQ",
            "Mayo",
            "Garlic Mayo",
            "Yoghurt Mint",
            "Ketchup",
            "Lemon Juice",
            "Sweetcorn Relish",
            "Burger Relish",

            "No Sauce"

        ]);

        return;
    }

    /*
    EVERYTHING ELSE
    */

    showPopup([

        "Salt & Vinegar",
        "No Salt & Vinegar"

    ]);
}


// ==========================
// POPUP
// ==========================

function showPopup(options) {

    const popup = document.getElementById("popup");
    const list = document.getElementById("popupOptions");

    if (!popup || !list) return;

    list.innerHTML = "";

    options.forEach((option, index) => {

        list.innerHTML += `
        <label class="popup-option">

            <input
                type="checkbox"
                name="popupChoice"
                value="${option}"
            >

            <span>${option}</span>

        </label>
        `;

    });

    popup.style.display = "flex";
}


// ==========================
// CLOSE POPUP
// ==========================

function closePopup() {

    const popup = document.getElementById("popup");

    if (popup) {
        popup.style.display = "none";
    }

}


// ==========================
// INCREASE BASKET
// ==========================

function increase(index) {

    if (!basket[index]) return;

    basket[index].qty++;

    updateBasket();

}


// ==========================
// DECREASE BASKET
// ==========================

function decrease(index) {

    if (!basket[index]) return;

    basket[index].qty--;

    if (basket[index].qty <= 0) {

        basket.splice(index, 1);

    }

    updateBasket();

}


// ==========================
// REMOVE ITEM
// ==========================

function removeItem(index) {

    if (!basket[index]) return;

    basket.splice(index, 1);

    updateBasket();

}


// ==========================
// UPDATE BASKET
// ==========================

function updateBasket() {

    const basketDiv = document.getElementById("basketItems");

    if (!basketDiv) return;

    basketDiv.innerHTML = "";

    let total = 0;
    let count = 0;

    basket.forEach((item, index) => {

        const itemTotal = item.price * item.qty;

        total += itemTotal;
        count += item.qty;

        basketDiv.innerHTML += `

        <div class="basket-item">

            <strong>${item.name}</strong>

            <br>

            £${item.price.toFixed(2)} × ${item.qty}

            = £${itemTotal.toFixed(2)}

            <br><br>

            <button onclick="decrease(${index})">
                −
            </button>

            <button onclick="increase(${index})">
                +
            </button>

            <button onclick="removeItem(${index})">
                Remove
            </button>

            <hr>

        </div>

        `;

    });

    const totalElement = document.getElementById("total");
    const basketCount = document.getElementById("basketCount");
    const basketTotal = document.getElementById("basketTotal");

    if (totalElement) {
        totalElement.innerText = total.toFixed(2);
    }

    if (basketCount) {
        basketCount.innerText = count;
    }

    if (basketTotal) {
        basketTotal.innerText = total.toFixed(2);
    }

}


// ==========================
// SEARCH MENU
// ==========================

function searchMenu() {

    const searchInput = document.getElementById("search");
    const div = document.getElementById("menu");

    if (!searchInput || !div) return;

    const search = searchInput.value.toLowerCase().trim();

    div.innerHTML = "";

    Object.keys(menu).forEach(category => {

        menu[category].forEach(item => {

            if (item.name.toLowerCase().includes(search)) {

                let image = "images/chips.jpg";

                const itemName = item.name.toLowerCase();

                if (
                    itemName.includes("cod") ||
                    itemName.includes("haddock") ||
                    itemName.includes("fish")
                ) {
                    image = "images/cod.jpg";

                } else if (itemName.includes("burger")) {
                    image = "images/burger.jpg";

                } else if (
                    itemName.includes("kebab") ||
                    itemName.includes("doner")
                ) {
                    image = "images/kebab.jpg";

                } else if (
                    itemName.includes("chicken") ||
                    itemName.includes("wing") ||
                    itemName.includes("nugget") ||
                    itemName.includes("sfc")
                ) {
                    image = "images/chicken.jpg";

                } else if (
                    itemName.includes("pie") ||
                    itemName.includes("pudding") ||
                    itemName.includes("pasty")
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

                    <img
                        src="${image}"
                        class="food-photo"
                        alt="${item.name}"
                    >

                    <div class="food-info">

                        <h3>${item.name}</h3>

                        <p>£${item.price.toFixed(2)}</p>

                    </div>

                    <button onclick="addToBasket(${JSON.stringify(item.name)}, ${item.price})">
                        +
                    </button>

                </div>

                `;

            }

        });

    });

}


// ==========================
// CHECKOUT
// ==========================

function setupCheckout() {

    const checkout = document.getElementById("checkout");

    if (!checkout) return;

    checkout.addEventListener("click", function () {

        if (basket.length === 0) {

            alert("Your basket is empty.");

            return;

        }

        const name =
            document.getElementById("customerName").value.trim();

        const phone =
            document.getElementById("customerPhone").value.trim();

        const time =
            document.getElementById("collectionTime").value;

        const notes =
            document.getElementById("notes").value.trim();

        if (name === "") {

            alert("Please enter your name.");

            return;

        }

        if (phone === "") {

            alert("Please enter your phone number.");

            return;

        }

        if (time === "") {

            alert("Please choose a collection time.");

            return;

        }

        let order = "";

        basket.forEach(item => {

            order +=
                `${item.qty} x ${item.name} - £${(item.qty * item.price).toFixed(2)}\n`;

        });

        const total =
            document.getElementById("total").innerText;

        const body =
`MILTON CHIPPY ONLINE ORDER

Customer: ${name}

Phone: ${phone}

Collection Time: ${time}

--------------------------------

${order}

--------------------------------

TOTAL £${total}

Notes:
${notes}

Collection Only - Pay In Store`;

        window.location.href =
            `mailto:Ranvirkaurbassi@gmail.com?subject=Milton Chippy Online Order&body=${encodeURIComponent(body)}`;

    });

}


// ==========================
// DEFAULT COLLECTION TIME
// ==========================

function setDefaultCollectionTime() {

    const input =
        document.getElementById("collectionTime");

    if (!input) return;

    const now = new Date();

    now.setMinutes(now.getMinutes() + 20);

    input.value =
        now.toTimeString().slice(0, 5);

}


// ==========================
// PAGE LOAD
// ==========================

window.addEventListener("DOMContentLoaded", function () {

    showCategory("fish");

    setDefaultCollectionTime();

    setupCheckout();

});
