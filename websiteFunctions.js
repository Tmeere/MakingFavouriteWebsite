//Add or remove items and display the current number of items in the car 

let currentCartItems = 0;

function addToCart(AddOrRemove) {
    if (AddOrRemove) {
        currentCartItems++; 
    } else {
        currentCartItems--;  
    }
    
    currentCartItems = clamp(currentCartItems, 0, 10);
    
    return currentCartItems;
}

console.log(addToCart);  


// Finds the price of all items in the cart 

let allCartItems = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 20 },
    { name: "Item 3", price: 30 }
];

function getCartTotal() {
    return allCartItems.reduce((total, item) => total + item.price, 0);
}

console.log(getCartTotal()); 


// Apply and Discount to the item if the correct code is inputted
function applyDiscount(price, discountCode) {
    let discount = 0;

    if (discountCode === "CODE10") {
        discount = 0.1;
    }

    // Calculate the discounted total
    let discountedTotal = price - (price * discount);
    console.log("Item Price after discount is: " + discountedTotal);
    return discountedTotal;
}

// Checks if the shipping is valid and the cost for it
function checkShippingCost(zipCode) {
    let shippingCost = 2.25;

    // Check if zipCode is valid and starts with 8
    if (zipCode && zipCode.startsWith('8')) {
        console.log('Shipping Cost is: ' + shippingCost);
        return shippingCost;
    } else {
        console.log('Shipping is not available for this zip code');
        return;
    }
}


// Checks when the page was loaded and when the button was clicked if done to fast  its a robot
let pageLoadTime = Date.now();

function checkIfRobot(ButtonClicked) {
    let clickedButtonTime = Date.now();
    let timeDifference = clickedButtonTime - pageLoadTime;

    if(timeDifference < 1000){
        console.log("YOU ARE A ROBOT BE GONE!")
        return;
    } else{
        console.log("WELCOME TRUSTED USER!")
        return;

    }
}
