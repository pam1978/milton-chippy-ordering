let basket = [];


// ========================================
// SAUCE LIST
// ========================================

const sauceList = [
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
];


// ========================================
// SHOW MENU CATEGORY
// ========================================

function showCategory(category) {

    const div = document.getElementById("menu");

    if (!div) return;

    div.innerHTML = "";

    if (!menu[category]) {
        div.innerHTML = "<p>No items found.</p>";
        return;
    }

    menu[category].forEach(function(item) {

        let image = "images/chips.jpg";

        const itemName = item.name.toLowerCase();

        if (
            itemName.includes("cod") ||
            itemName.includes("haddock") ||
            itemName.includes("fish") ||
            itemName.includes("scampi") ||
            itemName.includes("fishcake")
        ) {
            image = "images/cod.jpg";
        }

        else if (itemName.includes("burger")) {
            image = "images/burger.jpg";
        }

        else if (
            itemName.includes("kebab") ||
            itemName.includes("doner")
        ) {
            image = "images/kebab.jpg";
        }

        else if (
            itemName.includes("chicken") ||
            itemName.includes("wing") ||
            itemName.includes("nugget") ||
            itemName.includes("sfc") ||
            itemName.includes("goujon")
        ) {
            image = "images/chicken.jpg";
        }

        else if (
            itemName.includes("pie") ||
            itemName.includes("pudding") ||
            itemName.includes("pasty")
        ) {
            image = "images/pie.jpg";
        }

        else if (itemName.includes("milkshake")) {
            image = "images/milkshake.jpg";
        }

        else if (
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

                <p>
                    £${item.price.toFixed(2)}
                </p>

            </div>

            <button
                onclick='addToBasket(${JSON.stringify(item.name)}, ${item.price})'
            >
                +
            </button>

        </div>

        `;

    });

}


// ========================================
// ADD TO BASKET
// ========================================

function addToBasket(name, price) {

    const existing = basket.find(function(item) {
        return item.name === name;
    });


    if (existing) {

        existing.qty++;

    } else {

        basket.push({

            name: name,
            price: price,
            qty: 1,
            extras: []

        });

    }


    updateBasket();

    showExtrasForItem(name);

}


// ========================================
// POPUP RULES
// ========================================

function showExtrasForItem(name) {

    const itemName = name.toLowerCase();


    // ------------------------------------
    // SPECIALS
    // ------------------------------------

    if (
        itemName.includes("mini cod, sausage") ||
        itemName.includes("any pie & chips") ||
        itemName.includes("nuggets & chips") ||
        itemName.includes("sausage & chips") ||
        itemName.includes("fishcake & chips") ||
        itemName.includes("sfc strips & chips") ||
        itemName.includes("hot wings & chips") ||
        itemName.includes("cheeseburger & chips") ||
        itemName.includes("pudding & chips")
    ) {

        showPopup([

            "Salt & Vinegar",
            "No Salt & Vinegar",

            "Peas",
            "Curry Sauce",
            "Gravy"

        ]);

        return;
    }


    // ------------------------------------
    // ALL BURGERS
    // ------------------------------------

    if (itemName.includes("burger")) {

        showPopup([

            "🥗 Salad",
            "No Salad",

            ...sauceList

        ]);

        return;
    }


    // ------------------------------------
    // ALL KEBABS / DONER
    // ------------------------------------

    if (
        itemName.includes("kebab") ||
        itemName.includes("doner")
    ) {

        showPopup([

            "🥗 Salad",
            "No Salad",

            ...sauceList

        ]);

        return;
    }


    // ------------------------------------
    // CHIPS
    // ------------------------------------

    if (itemName.includes("chips")) {

        showPopup([

            "Salt & Vinegar",
            "No Salt & Vinegar"

        ]);

        return;
    }


    // ------------------------------------
    // EVERYTHING ELSE
    // ------------------------------------

    showPopup([

        "Salt & Vinegar",
        "No Salt & Vinegar"

    ]);

}


// ========================================
// SHOW POPUP
// ========================================

function showPopup(options) {

    const popup =
        document.getElementById("popup");

    const list =
        document.getElementById("popupOptions");


    if (!popup || !list) return;


    list.innerHTML = "";


    options.forEach(function(option) {

        list.innerHTML += `

        <label
            style="
                display:block;
                padding:12px;
                margin:6px 0;
                font-size:17px;
                cursor:pointer;
                border-radius:8px;
                background:#f3f3f3;
            "
        >

            <input
                type="checkbox"
                class="extra-option"
                value="${option}"
                style="
                    width:20px;
                    height:20px;
                    margin-right:8px;
                "
            >

            ${option}

        </label>

        `;

    });


    popup.style.display = "flex";

}


// ========================================
// CLOSE POPUP
// ========================================

function closePopup() {

    const popup =
        document.getElementById("popup");


    if (!popup) return;


    const selected =
        document.querySelectorAll(
            ".extra-option:checked"
        );


    const extras = [];


    selected.forEach(function(option) {

        extras.push(option.value);

    });


    if (
        basket.length > 0
    ) {

        const lastItem =
            basket[basket.length - 1];


        lastItem.extras = extras;

    }


    popup.style.display = "none";


    updateBasket();

}


// ========================================
// INCREASE
// ========================================

function increase(index) {

    if (!basket[index]) return;

    basket[index].qty++;

    updateBasket();

}


// ========================================
// DECREASE
// ========================================

function decrease(index) {

    if (!basket[index]) return;

    basket[index].qty--;


    if (basket[index].qty <= 0) {

        basket.splice(index, 1);

    }


    updateBasket();

}


// ========================================
// REMOVE
// ========================================

function removeItem(index) {

    if (!basket[index]) return;

    basket.splice(index, 1);

    updateBasket();

}


// ========================================
// UPDATE BASKET
// ========================================

function updateBasket() {

    const basketDiv =
        document.getElementById("basketItems");


    if (!basketDiv) return;


    basketDiv.innerHTML = "";


    let total = 0;

    let count = 0;


    basket.forEach(function(item, index) {

        const itemTotal =
            item.price * item.qty;


        total += itemTotal;

        count += item.qty;


        let extrasHTML = "";


        if (
            item.extras &&
            item.extras.length > 0
        ) {

            extrasHTML = `

            <div
                style="
                    color:#ffd700;
                    font-size:14px;
                    margin-top:6px;
                "
            >

                ${item.extras.join(", ")}

            </div>

            `;

        }


        basketDiv.innerHTML += `

        <div class="basket-item">

            <strong>
                ${item.name}
            </strong>

            ${extrasHTML}

            <br>

            £${item.price.toFixed(2)}
            × ${item.qty}

            =
            £${itemTotal.toFixed(2)}

            <br><br>

            <button
                onclick="decrease(${index})"
            >
                −
            </button>

            <button
                onclick="increase(${index})"
            >
                +
            </button>

            <button
                onclick="removeItem(${index})"
            >
                Remove
            </button>

            <hr>

        </div>

        `;

    });


    const totalElement =
        document.getElementById("total");

    const basketCount =
        document.getElementById("basketCount");

    const basketTotal =
        document.getElementById("basketTotal");


    if (totalElement) {

        totalElement.innerText =
            total.toFixed(2);

    }


    if (basketCount) {

        basketCount.innerText =
            count;

    }


    if (basketTotal) {

        basketTotal.innerText =
            total.toFixed(2);

    }

}


// ========================================
// SEARCH
// ========================================

function searchMenu() {

    const searchInput =
        document.getElementById("search");

    const div =
        document.getElementById("menu");


    if (!searchInput || !div) return;


    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    if (search === "") {

        showCategory("fish");

        return;

    }


    div.innerHTML =
        "<h2>Search Results</h2>";


    let found = false;


    Object.keys(menu).forEach(function(category) {

        menu[category].forEach(function(item) {

            if (
                item.name
                    .toLowerCase()
                    .includes(search)
            ) {

                found = true;


                let image =
                    "images/chips.jpg";


                const itemName =
                    item.name.toLowerCase();


                if (
                    itemName.includes("cod") ||
                    itemName.includes("haddock") ||
                    itemName.includes("fish")
                ) {

                    image =
                        "images/cod.jpg";

                }

                else if (
                    itemName.includes("burger")
                ) {

                    image =
                        "images/burger.jpg";

                }

                else if (
                    itemName.includes("kebab") ||
                    itemName.includes("doner")
                ) {

                    image =
                        "images/kebab.jpg";

                }

                else if (
                    itemName.includes("chicken") ||
                    itemName.includes("wing") ||
                    itemName.includes("nugget") ||
                    itemName.includes("sfc")
                ) {

                    image =
                        "images/chicken.jpg";

                }

                else if (
                    itemName.includes("pie") ||
                    itemName.includes("pudding")
                ) {

                    image =
                        "images/pie.jpg";

                }

                else if (
                    itemName.includes("milkshake")
                ) {

                    image =
                        "images/milkshake.jpg";

                }

                else if (
                    itemName.includes("cake") ||
                    itemName.includes("brownie") ||
                    itemName.includes("cheesecake") ||
                    itemName.includes("donut")
                ) {

                    image =
                        "images/dessert.jpg";

                }


                div.innerHTML += `

                <div class="menu-item">

                    <img
                        src="${image}"
                        class="food-photo"
                        alt="${item.name}"
                    >

                    <div class="food-info">

                        <h3>
                            ${item.name}
                        </h3>

                        <p>
                            £${item.price.toFixed(2)}
                        </p>

                    </div>

                    <button
                        onclick='addToBasket(${JSON.stringify(item.name)}, ${item.price})'
                    >
                        +
                    </button>

                </div>

                `;

            }

        });

    });


    if (!found) {

        div.innerHTML +=
            "<p>No matching items found.</p>";

    }

}


// ========================================
// DEFAULT COLLECTION TIME
// ========================================

function setDefaultCollectionTime() {

    const input =
        document.getElementById(
            "collectionTime"
        );


    if (!input) return;


    const now =
        new Date();


    now.setMinutes(
        now.getMinutes() + 20
    );


    input.value =
        now.toTimeString()
            .slice(0, 5);

}


// ========================================
// CHECKOUT
// ========================================

function setupCheckout() {

    const checkout =
        document.getElementById("checkout");


    if (!checkout) return;


    checkout.addEventListener(
        "click",
        function() {


            if (basket.length === 0) {

                alert(
                    "Your basket is empty."
                );

                return;

            }


            const name =
                document.getElementById(
                    "customerName"
                ).value.trim();


            const phone =
                document.getElementById(
                    "customerPhone"
                ).value.trim();


            const time =
                document.getElementById(
                    "collectionTime"
                ).value;


            const notes =
                document.getElementById(
                    "notes"
                ).value.trim();


            if (name === "") {

                alert(
                    "Please enter your name."
                );

                return;

            }


            if (phone === "") {

                alert(
                    "Please enter your phone number."
                );

                return;

            }


            if (time === "") {

                alert(
                    "Please choose a collection time."
                );

                return;

            }


            let order = "";


            basket.forEach(function(item) {

                order +=
                    `${item.qty} x ${item.name}`;


                if (
                    item.extras &&
                    item.extras.length > 0
                ) {

                    order +=
                        `\n   Choices: ${item.extras.join(", ")}`;

                }


                order +=
                    `\n   £${(
                        item.qty *
                        item.price
                    ).toFixed(2)}\n\n`;

            });


            const total =
                document.getElementById(
                    "total"
                ).innerText;


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

        }
    );

}


// ========================================
// PAGE LOAD
// ========================================

window.addEventListener(
    "DOMContentLoaded",
    function() {

        showCategory("fish");

        setDefaultCollectionTime();

        setupCheckout();

    }
);
