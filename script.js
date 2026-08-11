let basket = [];


/* =========================
   SHOW MENU CATEGORY
========================= */

function showCategory(category){

    const div = document.getElementById("menu");

    if(!div){
        return;
    }

    div.innerHTML = "";


    if(!menu[category]){

        div.innerHTML =
            "<p>No items found.</p>";

        return;
    }


    const title =
        category.charAt(0).toUpperCase()
        + category.slice(1);


    div.innerHTML =
        `<h2>${title}</h2>`;


    menu[category].forEach(item => {

        let image =
            "images/chips.jpg";


        const itemName =
            item.name.toLowerCase();


        if(
            itemName.includes("cod") ||
            itemName.includes("haddock") ||
            itemName.includes("fishcake") ||
            itemName.includes("scampi") ||
            itemName.includes("roe")
        ){

            image =
                "images/cod.jpg";

        }
        else if(
            itemName.includes("burger")
        ){

            image =
                "images/burger.jpg";

        }
        else if(
            itemName.includes("kebab") ||
            itemName.includes("doner")
        ){

            image =
                "images/kebab.jpg";

        }
        else if(
            itemName.includes("chicken") ||
            itemName.includes("wing") ||
            itemName.includes("nugget") ||
            itemName.includes("goujon") ||
            itemName.includes("sfc")
        ){

            image =
                "images/chicken.jpg";

        }
        else if(
            itemName.includes("pie") ||
            itemName.includes("pudding") ||
            itemName.includes("pasty")
        ){

            image =
                "images/pie.jpg";

        }
        else if(
            itemName.includes("sausage")
        ){

            image =
                "images/sausage.jpg";

        }
        else if(
            itemName.includes("milkshake")
        ){

            image =
                "images/milkshake.jpg";

        }
        else if(
            itemName.includes("cake") ||
            itemName.includes("brownie") ||
            itemName.includes("cheesecake") ||
            itemName.includes("donut")
        ){

            image =
                "images/dessert.jpg";

        }
        else if(
            itemName.includes("salad")
        ){

            image =
                "images/salad.jpg";

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
                onclick="addToBasket('${item.name}',${item.price})"
            >
                +
            </button>

        </div>

        `;

    });

}


/* =========================
   ADD TO BASKET
========================= */

function addToBasket(name,price){

    const existing =
        basket.find(
            item => item.name === name
        );


    if(existing){

        existing.qty++;

    }
    else{

        basket.push({

            name:name,

            price:price,

            qty:1

        });

    }


    updateBasket();


    /* KEBAB EXTRAS */

    if(
        name.toLowerCase().includes("kebab")
    ){

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


    /* CHIPS / FISH EXTRAS */

    if(

        name.toLowerCase().includes("chips") ||

        name.toLowerCase().includes("cod") ||

        name.toLowerCase().includes("haddock")

    ){

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


/* =========================
   INCREASE
========================= */

function increase(index){

    basket[index].qty++;

    updateBasket();

}


/* =========================
   DECREASE
========================= */

function decrease(index){

    basket[index].qty--;


    if(
        basket[index].qty <= 0
    ){

        basket.splice(index,1);

    }


    updateBasket();

}


/* =========================
   REMOVE
========================= */

function removeItem(index){

    basket.splice(index,1);

    updateBasket();

}


/* =========================
   UPDATE BASKET
========================= */

function updateBasket(){

    const basketDiv =
        document.getElementById(
            "basketItems"
        );


    if(!basketDiv){
        return;
    }


    basketDiv.innerHTML = "";


    let total = 0;


    basket.forEach(
        (item,index) => {

            total +=
                item.price * item.qty;


            basketDiv.innerHTML += `

            <div class="basket-item">

                <strong>
                    ${item.name}
                </strong>

                <br>

                £${item.price.toFixed(2)}
                × ${item.qty}

                =
                £${(
                    item.price *
                    item.qty
                ).toFixed(2)}

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

            </div>

            `;

        }
    );


    const totalElement =
        document.getElementById("total");


    if(totalElement){

        totalElement.innerText =
            total.toFixed(2);

    }


    const count =
        basket.reduce(
            (sum,item) =>
                sum + item.qty,
            0
        );


    const countElement =
        document.getElementById(
            "basketCount"
        );


    const basketTotal =
        document.getElementById(
            "basketTotal"
        );


    if(countElement){

        countElement.innerText =
            count;

    }


    if(basketTotal){

        basketTotal.innerText =
            total.toFixed(2);

    }

}


/* =========================
   OPEN / CLOSE BASKET
========================= */

function toggleBasket(){

    const basketElement =
        document.getElementById(
            "basket"
        );


    if(!basketElement){
        return;
    }


    basketElement.classList.toggle(
        "basket-open"
    );

}


/* =========================
   SEARCH
========================= */

function searchMenu(){

    const searchInput =
        document.getElementById(
            "search"
        );


    const div =
        document.getElementById(
            "menu"
        );


    if(!searchInput || !div){
        return;
    }


    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    if(search === ""){

        showCategory("fish");

        return;

    }


    div.innerHTML =
        "<h2>Search Results</h2>";


    let found = false;


    Object.keys(menu).forEach(
        category => {

            menu[category].forEach(
                item => {

                    if(
                        item.name
                            .toLowerCase()
                            .includes(search)
                    ){

                        found = true;


                        let image =
                            "images/chips.jpg";


                        const name =
                            item.name
                                .toLowerCase();


                        if(
                            name.includes("cod") ||
                            name.includes("haddock")
                        ){

                            image =
                                "images/cod.jpg";

                        }
                        else if(
                            name.includes("burger")
                        ){

                            image =
                                "images/burger.jpg";

                        }
                        else if(
                            name.includes("kebab")
                        ){

                            image =
                                "images/kebab.jpg";

                        }
                        else if(
                            name.includes("chicken") ||
                            name.includes("wing") ||
                            name.includes("nugget")
                        ){

                            image =
                                "images/chicken.jpg";

                        }
                        else if(
                            name.includes("pie") ||
                            name.includes("pudding")
                        ){

                            image =
                                "images/pie.jpg";

                        }
                        else if(
                            name.includes("milkshake")
                        ){

                            image =
                                "images/milkshake.jpg";

                        }
                        else if(
                            name.includes("cake") ||
                            name.includes("brownie") ||
                            name.includes("cheesecake") ||
                            name.includes("donut")
                        ){

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
                                onclick="addToBasket('${item.name}',${item.price})"
                            >
                                +
                            </button>

                        </div>

                        `;

                    }

                }
            );

        }
    );


    if(!found){

        div.innerHTML +=
            "<p>No matching items found.</p>";

    }

}


/* =========================
   POPUP
========================= */

function showPopup(options){

    const popup =
        document.getElementById(
            "popup"
        );


    const list =
        document.getElementById(
            "popupOptions"
        );


    if(!popup || !list){
        return;
    }


    list.innerHTML = "";


    options.forEach(option => {

        list.innerHTML += `

        <label
            style="
                display:block;
                margin:10px 0;
            "
        >

            <input
                type="checkbox"
            >

            ${option}

        </label>

        `;

    });


    popup.style.display =
        "flex";

}


function closePopup(){

    const popup =
        document.getElementById(
            "popup"
        );


    if(popup){

        popup.style.display =
            "none";

    }

}


/* =========================
   PAGE LOAD
========================= */

window.addEventListener(
    "load",
    function(){

        showCategory("fish");


        const input =
            document.getElementById(
                "collectionTime"
            );


        if(input){

            const now =
                new Date();


            now.setMinutes(
                now.getMinutes() + 20
            );


            input.value =
                now.toTimeString()
                    .slice(0,5);

        }

    }
);


/* =========================
   CHECKOUT
========================= */

const checkoutButton =
    document.getElementById(
        "checkout"
    );


if(checkoutButton){

    checkoutButton.addEventListener(
        "click",
        function(){

            if(
                basket.length === 0
            ){

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
                ).value;


            if(name === ""){

                alert(
                    "Please enter your name."
                );

                return;

            }


            if(phone === ""){

                alert(
                    "Please enter your phone number."
                );

                return;

            }


            if(time === ""){

                alert(
                    "Please choose a collection time."
                );

                return;

            }


            let order = "";


            basket.forEach(
                item => {

                    order +=
                        `${item.qty} x ${item.name} - £${(
                            item.qty *
                            item.price
                        ).toFixed(2)}\n`;

                }
            );


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


            /* CONFETTI */

            if(
                typeof confetti ===
                "function"
            ){

                confetti({

                    particleCount:150,

                    spread:90,

                    origin:{
                        y:.6
                    }

                });

            }


            /* OPEN EMAIL */

            setTimeout(
                function(){

                    window.location.href =
                        `mailto:Ranvirkaurbassi@gmail.com?subject=Milton Chippy Online Order&body=${encodeURIComponent(body)}`;

                },
                1200
            );

        }
    );

}
