let basket = [];

function showCategory(category) {
    const div = document.getElementById("menu");
    div.innerHTML = "";

    if (!menu[category]) {
        div.innerHTML = "<p>No items available.</p>";
        return;
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
        basket.splice(index,1);
    }

    updateBasket();
}

function removeItem(index) {
    basket.splice(index,1);
    updateBasket();
}

function updateBasket() {

    const basketDiv = document.getElementById("basketItems");

    basketDiv.innerHTML = "";

    let total = 0;

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

document.getElementById("checkout").addEventListener("click", function(){

    if(basket.length===0){
        alert("Your basket is empty.");
        return;
    }

    alert("Checkout page coming next!");

});
