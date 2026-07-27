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

}
