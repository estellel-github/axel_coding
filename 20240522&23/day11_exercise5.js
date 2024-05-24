// Task 5: Shopping Cart:
// ● Create a JavaScript object named cart representing a
// shopping cart.
// ● Add properties such as items (an array of objects
// representing items in the cart), total (the total cost of items),
// and addItem (a method for adding items to the cart).
// ● Implement the addItem method to add items to the cart
// array and update the total cost.
// ● Test the addItem method by adding sample items to the cart
// and displaying the updated cart object.

class Cart {
  constructor() {
    this.items = [];
    this.total = 0;
  }
  
  addItem(item) {
    this.items.push(`\nItem: ${item.name} (${item.price} EUR)`);
    this.total += item.price;
    return this.total;
  }
}

const currentCart = new Cart();
const itemsToAdd = [
  {name: "Baguette", price: 2},
  {name: "Cheese", price: 3},
  {name: "Wine", price: 5},
  {name: "Eclair au café", price: 3},
  {name: "Croissant", price: 3},
  {name: "Vodka", price: 20}
]

for (const item of itemsToAdd) {
  currentCart.addItem(item)
}

console.log(`Current cart: ${currentCart.items}`)
console.log(`Total price: ${currentCart.total} EUR`)