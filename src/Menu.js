function Menu() {
    let content = document.getElementById("content");
    content.innerHTML = "";
    let h2 = document.createElement('h1');
    h2.innerText = "Main Dishes";
    let div = document.createElement("div");
    div.id = "menuChoice";
    div.appendChild(h2);
    let menuHead = document.createElement('h4');
    menuHead.id = "menuHead";
    menuHead.innerText = "Grilled Salmon";
    div.appendChild(menuHead);
    let menuBody = document.createElement('p');
    menuBody.id = "menuBody";
    menuBody.innerText = "Fresh salmon fillet grilled to perfection, served with mashed potatoes and sautéed seasonal vegetables.\n";
    div.appendChild(menuBody);
    let price = document.createElement('p');
    price.id = "price";
    price.innerText = "$14.99";
    div.appendChild(price);
    content.appendChild(div);

    let menuHeadOne = menuHead.cloneNode(true);
    let menuBodyOne = menuBody.cloneNode(true);
    let priceOne = price.cloneNode(true);
    menuHeadOne.innerText = "Classic Cheeseburger";
    menuBodyOne.innerText = "100% beef patty with melted cheddar, lettuce, tomato, pickles, and onions, served with crispy fries.\n";
    priceOne.innerText = "$14.99";
    div.appendChild(menuHeadOne);
    div.appendChild(menuBodyOne);
    div.appendChild(priceOne);

    let menuHeadTwo = menuHead.cloneNode(true);
    let menuBodyTwo = menuBody.cloneNode(true);
    let priceTwo = price.cloneNode(true);
    menuHeadTwo.innerText = "Chicken Alfredo Pasta";
    menuBodyTwo.innerText = "Creamy Alfredo sauce with grilled chicken, served over fettuccine pasta.\n";
    priceTwo.innerText = "$17.99";
    div.appendChild(menuHeadTwo);
    div.appendChild(menuBodyTwo);
    div.appendChild(priceTwo);

    let menuHeadThree = menuHead.cloneNode(true);
    let menuBodyThree = menuBody.cloneNode(true);
    let priceThree = price.cloneNode(true);
    menuHeadThree.innerText = "Vegetable Stir-Fry";
    menuBodyThree.innerText = "A colorful mix of fresh vegetables stir-fried in a savory soy-ginger sauce, served with steamed rice.\n";
    priceThree.innerText = "$14.49";
    div.appendChild(menuHeadThree);
    div.appendChild(menuBodyThree);
    div.appendChild(priceThree);

    let menuHeadFour = menuHead.cloneNode(true);
    let menuBodyFour = menuBody.cloneNode(true);
    let priceFour = price.cloneNode(true);
    menuHeadFour.innerText = "New York Strip Steak";
    menuBodyFour.innerText = "10 oz. USDA choice steak, grilled to your liking, served with mashed potatoes and steamed broccoli.\n";
    priceFour.innerText = "$26.99";
    div.appendChild(menuHeadFour);
    div.appendChild(menuBodyFour);
    div.appendChild(priceFour);

    let menuHeadFive = menuHead.cloneNode(true);
    let menuBodyFive = menuBody.cloneNode(true);
    let priceFive = price.cloneNode(true);
    menuHeadFive.innerText = "Margherita Pizza";
    menuBodyFive.innerText = "Thin-crust pizza with fresh mozzarella, tomatoes, basil, and a drizzle of olive oil.\n";
    priceFive.innerText = "$13.99";
    div.appendChild(menuHeadFive);
    div.appendChild(menuBodyFive);
    div.appendChild(priceFive);

    let h22 = h2.cloneNode(true);
    h22.innerText = "Beverages";
    div.appendChild(h22);

    let menuHeadSix = menuHead.cloneNode(true);
    let menuBodySix = menuBody.cloneNode(true);
    let priceSix = price.cloneNode(true);
    menuHeadSix.innerText = "Soft Drinks";
    menuBodySix.innerText = "Coke, Diet Coke, Sprite\n";
    priceSix.innerText = "$2.49";
    div.appendChild(menuHeadSix);
    div.appendChild(menuBodySix);
    div.appendChild(priceSix);

    let menuHeadSeven = menuHead.cloneNode(true);
    let priceSeven = price.cloneNode(true);
    menuHeadSeven.innerText = "Iced Tea";
    priceSeven.innerText = "$2.99";
    div.appendChild(menuHeadSeven);
    div.appendChild(priceSeven);

    let menuHeadEight = menuHead.cloneNode(true);
    let priceEight = price.cloneNode(true);
    menuHeadEight.innerText = "Coffee or Tea";
    priceEight.innerText = "$2.49";
    div.appendChild(menuHeadEight);
    div.appendChild(priceEight);

    let menuHeadNine = menuHead.cloneNode(true);
    let priceNine = price.cloneNode(true);
    menuHeadNine.innerText = "House Wine";
    priceNine.innerText = "$6.99";
    div.appendChild(menuHeadNine);
    div.appendChild(priceNine);

}
export default Menu;