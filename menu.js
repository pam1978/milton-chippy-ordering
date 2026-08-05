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

sauces: [
  {name:"Mushy Peas (Small)",price:1.50},
  {name:"Mushy Peas (Large)",price:1.90},
  {name:"Curry Sauce (Small)",price:1.50},
  {name:"Curry Sauce (Large)",price:1.90},
  {name:"Gravy (Small)",price:1.50},
  {name:"Gravy (Large)",price:1.90},
  {name:"Beans",price:1.90},
  {name:"Dips",price:0.80}
],

kebabs: [
  {name:"Small Doner Meat & Chips",price:5.95},
  {name:"Medium Doner Meat & Chips",price:6.95},
  {name:"Large Doner Meat & Chips",price:7.95},

  {name:"Small Chicken Meat & Chips",price:5.95},
  {name:"Medium Chicken Meat & Chips",price:6.95},
  {name:"Large Chicken Meat & Chips",price:7.95},

  {name:"Small Mixed Meat & Chips",price:5.95},
  {name:"Medium Mixed Meat & Chips",price:6.95},
  {name:"Large Mixed Meat & Chips",price:7.95},

  {name:"Any Kebab Meat in a Tray",price:7.75},
  {name:"Any Kebab Meat in a Pitta",price:7.75},
  {name:"Any Kebab Meat in a Wrap",price:7.50},
  {name:"Any Kebab Meat in a Bap",price:5.00},
  {name:"Any Kebab Meat in a Naan",price:9.50}
],
  
sausages: [
  {name:"Small Sausage",price:1.55},
  {name:"Large Sausage",price:1.95},
  {name:"Small Battered Sausage",price:1.75},
  {name:"Large Battered Sausage",price:2.15},
  {name:"Large Spicy Sausage",price:2.10}
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

salad: [
  {name:"Tuna Salad",price:4.00},
  {name:"Side Salad",price:2.00}
],

burgers: [
  {name:"Cheeseburger",price:4.25},
  {name:"Double Cheeseburger",price:5.25},
  {name:"Chicken Burger",price:4.25},
  {name:"Chicken Fillet Burger",price:4.75},
  {name:"Plain Burger",price:3.75},
  {name:"Doner Burger",price:5.00},
  {name:"Veggie Burger",price:4.50},
  {name:"Mega Burger",price:6.75}
],

chicken: [
  {name:"¼ Chicken Breast",price:4.65},
  {name:"Popcorn Chicken",price:4.25},
  {name:"4 Hot Wings",price:5.00},
  {name:"4 SFC Chicken",price:5.25},
  {name:"8 Chicken Nuggets",price:3.80},
  {name:"Breaded Goujons (5)",price:5.65},
  {name:"Salt & Chilli Goujons (5)",price:5.65},
  {name:"Battered Chicken Chunks (5)",price:5.65},
  {name:"SFC Chunks (5)",price:5.65}
],

extras: [
  {name:"Onion Rings (5)",price:1.25},
  {name:"Mozzarella Sticks (5)",price:3.45},
  {name:"Jalapeno Bites (5)",price:3.45},
  {name:"Chilli Cheese Bites (5)",price:3.45},
  {name:"Cheese & Onion Fryit",price:1.95},
  {name:"Single Naan",price:1.95},
  {name:"Single Pitta",price:1.35},
  {name:"Single Bap",price:0.85},
  {name:"Jacket Potato",price:5.00}
],

specials: [
  {name:"Mini Cod, Sausage & Chips",price:8.50},
  {name:"Any Pie & Chips",price:7.50},
  {name:"4 Chicken Nuggets & Chips",price:5.00},
  {name:"Small Sausage & Chips",price:5.00},
  {name:"Large Sausage & Chips",price:6.00},
  {name:"Fishcake & Chips",price:5.50},
  {name:"4 SFC Strips & Chips",price:7.50},
  {name:"4 Hot Wings & Chips",price:7.50},
  {name:"Cheeseburger & Chips",price:7.50},
  {name:"Pudding & Chips",price:7.50}
],

drinks: [
  {name:"Can",price:1.35},
  {name:"Bottle",price:1.95},
  {name:"Water",price:1.00},
  {name:"Fruit Shoot",price:1.00},

  {name:"Small Vanilla Milkshake",price:3.50},
  {name:"Small Chocolate Milkshake",price:3.50},
  {name:"Small Strawberry Milkshake",price:3.50},
  {name:"Small Banana Milkshake",price:3.50},

  {name:"Large Vanilla Milkshake",price:4.50},
  {name:"Large Chocolate Milkshake",price:4.50},
  {name:"Large Strawberry Milkshake",price:4.50},
  {name:"Large Banana Milkshake",price:4.50},

  {name:"Small Crunchie Milkshake",price:4.95},
  {name:"Small Oreo Milkshake",price:4.95},
  {name:"Small Maltesers Milkshake",price:4.95},
  {name:"Small M&M Milkshake",price:4.95},
  {name:"Small Kinder Bueno Milkshake",price:4.95},
  {name:"Small Caramel Coffee Milkshake",price:4.95},

  {name:"Large Crunchie Milkshake",price:5.95},
  {name:"Large Oreo Milkshake",price:5.95},
  {name:"Large Maltesers Milkshake",price:5.95},
  {name:"Large M&M Milkshake",price:5.95},
  {name:"Large Kinder Bueno Milkshake",price:5.95},
  {name:"Large Caramel Coffee Milkshake",price:5.95}
],

desserts: [
  {name:"Donut",price:0.80},
  {name:"Cookie Dough Cheesecake Slice",price:3.50},
  {name:"Vanilla Cheesecake Slice",price:3.50},
  {name:"Toffee & Honeycomb Cheesecake",price:3.50},
  {name:"Lotus Biscoff Cheesecake Slice",price:3.50},
  {name:"Bramley Apple Pie Slice",price:3.50},
  {name:"Carrot Cake Slice",price:3.50},
  {name:"Chocolate Fudge Deluxe Slice",price:3.50},
  {name:"Chocolate Fudge Cake Slice",price:3.50},
  {name:"Jaffa Cake Slice",price:3.50},
  {name:"Chocolate Brownie Slice",price:3.50}
],

glutenfree: [

  {name:"GF Cone of Chips",price:2.70},
  {name:"GF Small Chips",price:3.70},
  {name:"GF Large Chips",price:5.10},
  {name:"GF Potato Fritter",price:1.00},
  {name:"GF Mushy Pea Fritter",price:2.30},

  {name:"GF Mini Cod",price:4.85},
  {name:"GF Large Cod",price:9.50},
  {name:"GF Haddock",price:9.50},
  {name:"GF Fishcake",price:2.65},
  {name:"GF Haddock & Mozzarella Fishcake",price:3.25},
  {name:"GF Scampi",price:3.65},
  {name:"GF Calamari Strips (6)",price:3.65},

  {name:"GF Large Mushy Peas",price:1.90},
  {name:"GF Large Curry Sauce",price:2.35},
  {name:"GF Large Gravy",price:2.35},
  {name:"GF Large Beans",price:1.90},

  {name:"GF Large Sausage",price:2.50},
  {name:"GF Large Battered Sausage",price:2.70},

  {name:"GF Cheeseburger",price:4.65},
  {name:"GF Veggie Burger",price:4.65},
  {name:"GF Chicken Burger",price:4.65},

  {name:"GF Chicken Breast",price:4.65},
  {name:"GF Small Chicken Tikka Meat",price:6.95},
  {name:"GF Breaded Goujons (5)",price:5.65},
  {name:"GF Salt & Chilli Goujons (5)",price:5.65},
  {name:"GF Battered Chicken Chunks (5)",price:5.65},
  {name:"GF SFC Chunks (5)",price:5.65},

  {name:"GF Onion Rings (6)",price:3.20},
  {name:"GF Mozzarella Sticks (6)",price:3.50},
  {name:"GF Falafels (5)",price:3.65},
  {name:"GF Vegetable Pakoras (5)",price:3.65},

  {name:"GF Chocolate Fudge Cake Slice",price:3.50},
  {name:"GF New York Style Cheesecake Slice",price:3.50},
  {name:"GF Carrot Cake Slice",price:3.50},
  {name:"GF Chocolate Brownie Slice",price:3.50},
  {name:"GF Chocolate Truffle Brownie Torte",price:3.50},
  {name:"GF Sticky Toffee Pudding",price:3.50},
  {name:"GF Apple & Blackberry Crumble",price:3.50}
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

  {name:"Vegan Chicken Style Nuggets (8)",price:4.50},
  {name:"Vegan Southern Fried Wings (5)",price:5.50},
  {name:"Vegan Fishless Fingers (5)",price:5.50},

  {name:"Vegan Falafels (5)",price:3.65},
  {name:"Vegan Vegetable Pakoras (5)",price:3.65},

  {name:"Vegan Wrap",price:6.95},

  {name:"Vegan Onion Rings (6)",price:3.20},
  {name:"Vegan Mozzarella Sticks (6)",price:3.50},

  {name:"Vegan Chocolate Fudge Cake",price:3.50},
  {name:"Vegan Chocolate Brownie",price:3.50},
  {name:"Vegan Sticky Toffee Pudding",price:3.50},
  {name:"Vegan Apple & Blackberry Crumble",price:3.50}

]

};  
