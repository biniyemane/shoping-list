
const shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
shoppingList.push("fruit loops");
shoppingList[4] = 'fair trade coffee';
shoppingList.splice(2,2,"rice","beans");
console.log(shoppingList);
const shoppingCart = [];
shoppingList.pop();
shoppingCart.push("coffee");
console.log(shoppingCart);
shoppingList.shift();
shoppingCart.push('pop tarts');
console.log(shoppingCart);
console.log(shoppingList);
let i = 0;

while( i < shoppingList.length ){
    shoppingCart.push(shoppingList[i])
    i++
}
console.log(shoppingCart)
shoppingCart.sort();
console.log(shoppingCart)
let cartString = shoppingCart.join(', ')
console.log(cartString)