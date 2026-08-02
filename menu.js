const menu = {

fish: [
  {name:"Cone of Chips",price:2.50},
  {name:"Small Chips",price:3.50},
  {name:"Large Chips",price:4.90},
  {name:"Cheesy Chips",price:4.60},
  {name:"Chips in Pitta/Bap",price:3.50},
  {name:"Potato Fritter",price:0.80},
  {name:"Mushy Pea Fritter",price:2.00},
  {name:"Mini Cod",price:4.35},
  {name:"Large Cod",price:8.95},
  {name:"Haddock",price:8.95},
  {name:"Fishcake",price:2.00},
  {name:"Scampi (10)",price:4.50},
  {name:"Tinned Roe",price:2.00}
],

burgers: [
  {name:"Plain Burger",price:3.75},
  {name:"Cheeseburger",price:4.25},
  {name:"Double Cheeseburger",price:5.25},
  {name:"Chicken Burger",price:4.25},
  {name:"Chicken Fillet Burger",price:4.75},
  {name:"Doner Burger",price:5.00},
  {name:"Veggie Burger",price:4.50},
  {name:"Mega Burger",price:6.75}
],

kebabs: [
  {name:"Small Kebab in Pitta",price:5.95},
  {name:"Medium Kebab in Pitta",price:6.95},
  {name:"Large Kebab in Pitta",price:7.95},
  {name:"Small Kebab in Naan",price:6.95},
  {name:"Medium Kebab in Naan",price:7.95},
  {name:"Large Kebab in Naan",price:8.95},
  {name:"Kebab Wrap",price:7.50},
  {name:"Kebab Tray & Chips",price:7.75},
  {name:"Kebab Bap",price:5.00},
  {name:"Large Mixed Naan",price:9.50}
],

chicken: [
  {name:"¼ Chicken Breast",price:4.65},
  {name:"Popcorn Chicken",price:4.25},
  {name:"4 Hot Wings",price:5.00},
  {name:"4 SFC",price:5.25},
  {name:"8 Nuggets",price:3.80},
  {name:"Breaded Goujons (5)",price:5.65},
  {name:"Salt & Chilli Goujons",price:5.65},
  {name:"Battered Chicken Chunks",price:5.65},
  {name:"SFC Chunks",price:5.65}
],

pies: [
  {name:"Steak Pie",price:3.50},
  {name:"Steak & Kidney Pie",price:3.50},
  {name:"Steak & Onion Pie",price:3.50},
  {name:"Chicken & Mushroom Pie",price:3.50},
  {name:"Meat & Potato Pie",price:3.50},
  {name:"Steak & Kidney Pudding",price:3.50},
  {name:"Cheese & Onion Pasty",price:3.00},
  {name:"Cheese & Onion Pie",price:3.25}
],

extras: [
  {name:"Onion Rings (5)",price:3.45},
  {name:"Mozzarella Sticks (5)",price:3.45},
  {name:"Jalapeno Bites (5)",price:3.45},
  {name:"Chilli Cheese Bites (5)",price:3.45},
  {name:"Cheese & Onion Fryit",price:1.95},
  {name:"Single Naan",price:1.95},
  {name:"Single Pitta",price:1.35},
  {name:"Single Bap",price:0.85},
  {name:"Jacket Potato",price:5.00}
],

desserts: [
  {name:"Donut",price:0.80},
  {name:"Cookie Dough Cheesecake",price:3.50},
  {name:"Vanilla Cheesecake",price:3.50},
  {name:"Lotus Biscoff Cheesecake",price:3.50},
  {name:"Chocolate Fudge Cake",price:3.50},
  {name:"Brownie",price:3.50},
  {name:"Carrot Cake",price:3.50},
  {name:"Apple Pie",price:3.50}
],

glutenfree: [
  {name:"GF Cone of Chips",price:2.70},
  {name:"GF Small Chips",price:3.70},
  {name:"GF Large Chips",price:5.10},
  {name:"GF Mini Cod",price:4.85},
  {name:"GF Large Cod",price:9.50},
  {name:"GF Haddock",price:9.50},
  {name:"GF Fishcake",price:2.65},
  {name:"GF Scampi",price:3.65},
  {name:"GF Cheeseburger",price:4.95},
  {name:"GF Chicken Burger",price:4.65}
],

vegan: [
  {name:"Vegan Cone of Chips",price:2.70},
  {name:"Vegan Small Chips",price:3.70},
  {name:"Vegan Large Chips",price:5.10},
  {name:"Vegan Sausage",price:2.00},
  {name:"Vegan Battered Sausage",price:2.20},
  {name:"Vegan Chicken & Mushroom Pie",price:4.20},
  {name:"Vegan Mince Steak & Onion Pie",price:4.20},
  {name:"Vegan Burger",price:4.95},
  {name:"Vegan Wrap",price:6.95},
  {name:"Vegan Onion Rings",price:3.20}
],

  drinks: [

  {name:"Can", price:1.35},
  {name:"Bottle", price:1.95},
  {name:"Water", price:1.00},
  {name:"Fruit Shoot", price:1.00},

  {name:"Small Vanilla Milkshake", price:3.50},
  {name:"Large Vanilla Milkshake", price:4.50},

  {name:"Small Chocolate Milkshake", price:3.50},
  {name:"Large Chocolate Milkshake", price:4.50},

  {name:"Small Strawberry Milkshake", price:3.50},
  {name:"Large Strawberry Milkshake", price:4.50},

  {name:"Small Banana Milkshake", price:3.50},
  {name:"Large Banana Milkshake", price:4.50},

  {name:"Small Crunchie Milkshake", price:4.95},
  {name:"Large Crunchie Milkshake", price:5.95},

  {name:"Small Oreo Milkshake", price:4.95},
  {name:"Large Oreo Milkshake", price:5.95},

  {name:"Small Maltesers Milkshake", price:4.95},
  {name:"Large Maltesers Milkshake", price:5.95},

  {name:"Small M&M Milkshake", price:4.95},
  {name:"Large M&M Milkshake", price:5.95},

  {name:"Small Kinder Bueno Milkshake", price:4.95},
  {name:"Large Kinder Bueno Milkshake", price:5.95},

  {name:"Small Caramel Coffee Milkshake", price:4.95},
  {name:"Large Caramel Coffee Milkshake", price:5.95}

],

  specials: [

  {name:"Mini Cod, Sausage & Chips", price:8.50},

  {name:"Any Pie & Chips", price:7.50},

  {name:"4 Chicken Nuggets & Chips", price:5.00},

  {name:"Small Sausage & Chips", price:5.00},

  {name:"Large Sausage & Chips", price:6.00},

  {name:"Fish Cake & Chips", price:5.00},

  {name:"4 SFC Strips & Chips", price:7.50},

  {name:"4 Hot Wings & Chips", price:7.50},

  {name:"Cheese Burger & Chips", price:7.50},

  {name:"Pudding & Chips", price:7.50}

],

],

salads: [

  {name:"Tuna Salad", price:5.50},
  {name:"Side Salad", price:2.95}

]
