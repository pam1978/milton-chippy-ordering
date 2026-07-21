let basket = [];

function showCategory(category) {

    const menuDiv = document.getElementById("menu");

    if (!menu[category] || menu[category].length === 0) {
        menuDiv.innerHTML = "<h2>" + category + "</h2><p>Coming soon.</p>";
        return;
    }

    menuDiv.innerHTML = "<h2>" + category.replace(/^\w/, c => c.toUpperCase()) + "</h2>";

    menu[category].forEach(item => {

        menuDiv.innerHTML += `
        <div class="menu-item">
            <div>
                <strong>${item.name}</strong><br>
                £${item.price.toFixed(2)}
            </div>

            <button onclick="addToBasket('${item.name}', ${item.price})">
                Add
            </button>
        </div>
        `;

    });

}

function addToBasket(name, price) {

    basket.push({
        name,
        price
    });

    updateBasket();

}

function updateBasket() {

    const basketItems = document.getElementById("basketItems");

    basketItems.innerHTML = "";

    let total = 0;

    basket.forEach(item => {

        total += item.price;

        basketItems.innerHTML += `
        <p>${item.name} - £${item.price.toFixed(2)}</p>
        `;

    });

    if (basket.length === 0) {
        basketItems.innerHTML = "Your basket is empty.";
    }

    document.getElementById("total").textContent = total.toFixed(2);

}
