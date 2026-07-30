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

        const name = item.name.toLowerCase();

        if (name.includes("cod") || name.includes("haddock")) {
            image = "images/cod.jpg";
        }
        else if (name.includes("burger")) {
            image = "images/burger.jpg";
        }
        else if (name.includes("kebab")) {
            image = "images/kebab.jpg";
        }
        else if (name.includes("chicken") || name.includes("wing") || name.includes("nugget")) {
            image = "images/chicken.jpg";
        }
        else if (name.includes("pie") || name.includes("pudding")) {
            image = "images/pie.jpg";
        }
        else if (name.includes("milkshake")) {
            image = "images/milkshake.jpg";
        }
        else if (
            name.includes("cake") ||
            name.includes("brownie") ||
            name.includes("cheesecake") ||
            name.includes("donut")
        ) {
            image = "images/dessert.jpg";
        }

        div.innerHTML += `
        <div class="menu-item">

            <img src="${image}" class="food-photo">

            <div class="food-info">
                <h3>${item.name}</h3>
                <p>£${item.price.toFixed(2)}</p>
            </div>

            <button onclick="addToBasket('${item.name}', ${item.price})">
                +
            </button>

        </div>
        `;

    });

}

// ==========================
// BASKET
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

}

function increase(index) {

    basket[index].qty++;

    updateBasket();

}

function decrease(index) {

    basket[index].qty--;

    if (basket[index].qty <= 0) {

        basket.splice(index,1);

    }

    updateBasket();

}

function removeItem(index){

    basket.splice(index,1);

    updateBasket();

}

function updateBasket(){

    const basketDiv = document.getElementById("basketItems");

    basketDiv.innerHTML="";

    let total=0;

    basket.forEach((item,index)=>{

        total += item.price * item.qty;

        basketDiv.innerHTML += `

        <div class="basket-item">

        <strong>${item.name}</strong><br>

        £${item.price.toFixed(2)} × ${item.qty}

        = £${(item.price*item.qty).toFixed(2)}

        <br><br>

        <button onclick="decrease(${index})">−</button>

        <button onclick="increase(${index})">+</button>

        <button onclick="removeItem(${index})">Remove</button>

        <hr>

        </div>

        `;

    });

    document.getElementById("total").innerText = total.toFixed(2);
const count = basket.reduce((sum, item) => sum + item.qty, 0);

document.getElementById("basketCount").innerText = count;
document.getElementById("basketTotal").innerText = total.toFixed(2);
}
// ==========================
// CHECKOUT
// ==========================

document.getElementById("checkout").addEventListener("click", function () {

    if (basket.length === 0) {
        alert("Your basket is empty.");
        return;
    }

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const time = document.getElementById("collectionTime").value;
    const notes = document.getElementById("notes").value;

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

        order += `${item.qty} x ${item.name} - £${(item.qty * item.price).toFixed(2)}\n`;

    });

    const total = document.getElementById("total").innerText;

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

// ==========================
// DEFAULT COLLECTION TIME
// ==========================

const now = new Date();
now.setMinutes(now.getMinutes() + 20);

const collectionInput = document.getElementById("collectionTime");

if (collectionInput) {
    collectionInput.value = now.toTimeString().slice(0,5);
}

// ==========================
// SEARCH MENU
// ==========================

function searchMenu() {

    const search = document.getElementById("search").value.toLowerCase();

    const div = document.getElementById("menu");

    div.innerHTML = "";

    Object.keys(menu).forEach(category => {

        menu[category].forEach(item => {

            if(item.name.toLowerCase().includes(search)){

                div.innerHTML += `
                <div class="menu-item">
                    <h3>${item.name}</h3>
                    <p>£${item.price.toFixed(2)}</p>
                    <button onclick="addToBasket('${item.name}', ${item.price})">
                        Add to Basket
                    </button>
                </div>
                `;

            }

        });

    });

}

// ==========================
// LOAD DEFAULT MENU
// ==========================

window.onload = function () {

    showCategory("fish");

};
function showPopup(options) {

    const popup = document.getElementById("popup");
    const list = document.getElementById("popupOptions");

    list.innerHTML = "";

    options.forEach(option => {

        list.innerHTML += `
        <label style="display:block;margin:10px 0;">
            <input type="checkbox"> ${option}
        </label>
        `;

    });

    popup.style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
