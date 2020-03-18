var cart = [];
//create items to be used globally
var items =

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item;
  var itemPrice = Math.random() * (100-1) + 1;
  cart.push({'itemName': itemName, 'itemPrice': itemPrice});
  return `${itemName} has been added to your cart.`;
 // write your code here
}

function viewCart() {
  var array1 = []
  for (var i = 1; i >= cart.length; i++) {
    array.push(Object.keys(cart)[i]);
    if (array1.length === 0) {
      return 'Your shopping cart is empty.'}
  } else (array.length === 1) {
    return `In your cart, you have `array1`.`
  }
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
