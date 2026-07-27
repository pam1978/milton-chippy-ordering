let basket = [];

function showCategory(category) {

    const div = document.getElementById("menu");
    div.innerHTML = "";

    menu[category].forEach(item => {

        let image = "images/chips.jpg";

        if(item.name.toLowerCase().includes("cod")) image="images/cod.jpg";
        else if(item.name.toLowerCase().includes("burger")) image="images/burger.jpg";
        else if(item.name.toLowerCase().includes("kebab")) image="images/kebab.jpg";
        else if(item.name.toLowerCase().includes("chicken")) image="images/chicken.jpg";
        else if(item.name.toLowerCase().includes("pie")) image="images/pie.jpg";
        else if(item.name.toLowerCase().includes("milkshake")) image="images/milkshake.jpg";
        else if(item.name.toLowerCase().includes("cake") || item.name.toLowerCase().includes("cheesecake") || item.name.toLowerCase().includes("brownie"))
            image="images/dessert.jpg";

        div.innerHTML += `
        <div class="menu-item">

            <img src="${image}" class="food-photo">

            <div class="food-info">
                <h3>${item.name}</h3>
                <p>£${item.price.toFixed(2)}</p>
            </div>

            <button onclick="addToBasket('${item.name}',${item.price})">
                +
            </button>

        </div>
        `;
    });

}
    }

    menu[category].forEach((item) => {
        div.innerHTML += `
        <div class="menu-item">
            <h3>${item.name}</h3>
            <p>£${item.price.toFixed(2)}</p>
            <button onclick="addToBasket('${item.name}', ${item.price})">
                Add to Basket
            </button>
        </div>
        `;
    });
}

function addToBasket(name, price) {
    const existing = basket.find(item => item.name === name);

    if (existing) {
        existing.qty++;
    } else {
        basket.push({
            name,
            price,
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
}

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
`🍟 MILTON CHIPPY ONLINE ORDER

Customer: ${name}

Phone: ${phone}

Collection Time: ${time}

================================

${order}

================================

TOTAL £${total}

Notes:

${notes}

Collection Only - Pay In Store`;

    window.location.href =
`mailto:Ranvirkaurbassi@gmail.com?subject=Milton Chippy Online Order&body=${encodeURIComponent(body)}`;

});

// Set default collection time to 20 minutes from now
const now = new Date();
now.setMinutes(now.getMinutes() + 20);

document.getElementById("collectionTime").value =
    now.toTimeString().slice(0, 5);
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
                        Add to Basket
                    </button>
                </div>
                `;

            }

        });

    });

}
