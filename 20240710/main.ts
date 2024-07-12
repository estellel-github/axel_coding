// Task 1: Define a Complex Interface for Clothing Inventory
// Task Description: Create a TypeScript interface ClothingItem that defines the structure for managing inventory items of clothing. Ensure strict typing for properties such as id, name, price, quantity, and sizes.
// Detailed Steps:
// Define an interface named ClothingItem with the following properties:
// id (number): Unique identifier for the item.
// name (string): Name or description of the clothing item.
// price (number): Price of the item.
// quantity (number): Number of items available in inventory.
// sizes (string[]): Array of sizes available for the item.
// Create an example ClothingItem object to demonstrate usage and ensure all properties are strictly typed.

const items: ClothingItem[] = [
  {
    id: 1,
    name: "Men's T-Shirt",
    category: "Tops",
    price: 19.99,
    color: "Black",
    size: ["M"],
    gender: "Men's",
    // picture_link: "https://example.com/images/mens-tshirt.jpg",
    availability: true,
    quantity: 10,
  },
  {
    id: 2,
    name: "Women's Jeans",
    category: "Bottoms",
    price: 29.99,
    color: "Blue",
    size: ["S"],
    gender: "Women's",
    picture_link: "https://example.com/images/womens-jeans.jpg",
    availability: true,
    quantity: 15,
  },
  {
    id: 3,
    name: "Men's Hoodie",
    category: "Outerwear",
    price: 39.99,
    color: "Gray",
    size: ["L"],
    gender: "Men's",
    // picture_link: "https://example.com/images/mens-hoodie.jpg",
    availability: false,
    quantity: 0,
  },
  {
    id: 4,
    name: "Women's Dress",
    category: "Dresses",
    price: 49.99,
    color: "Red",
    size: ["M"],
    gender: "Women's",
    picture_link: "https://example.com/images/womens-dress.jpg",
    availability: true,
    quantity: 12,
  },
  {
    id: 5,
    name: "Men's Shorts",
    category: "Bottoms",
    price: 24.99,
    color: "Khaki",
    size: ["L"],
    gender: "Men's",
    // picture_link: "https://example.com/images/mens-shorts.jpg",
    availability: true,
    quantity: 25,
  }
];

// Task Description: Write TypeScript functions to perform essential calculations on the ClothingItem interface. Implement functions to calculate the average price of items in the inventory and to count the total number of items available.
// Detailed Steps:
// Implement a function calculateAveragePrice(items: ClothingItem[]): number:
// Calculate the average price of all items in the inventory based on their price property.
// Handle scenarios where the inventory might be empty.
// Implement a function countItemsInInventory(items: ClothingItem[]): number:
// Count and return the total number of items available across all sizes (quantity property) in the inventory.
// Test these functions with example data to ensure accuracy and proper functionality.

function roundDownToTwoDecimals(num: number) {
  return Math.floor(num * 100) / 100;
}

const calculateAveragePrice = (items: ClothingItem[]): number => {
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
  const avgPrice = totalPrice / items.length;
  return roundDownToTwoDecimals(avgPrice);
}

const countItemsInInventory = (items: ClothingItem[]): number => {
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  return totalItems;
}

calculateAveragePrice(items);
countItemsInInventory(items);

// Bonus Task: Manage Inventory Stock Levels
// Task Description: Extend the previous inventory system to include functionality for managing stock levels. Implement TypeScript functions that allow adding new items to the inventory, updating quantities, and checking stock availability based on size.
// 1. Extend ClothingItem Interface:
// Add a property addStock(quantity: number, size?: string): void to the ClothingItem interface that increases the quantity of a specific size or all sizes if no size is specified.
// Add a property removeStock(quantity: number, size?: string): void to the ClothingItem interface that decreases the quantity of a specific size or all sizes if no size is specified.
// 2. Implement Functions:
// Implement functions  to handle adding and removing stock from the inventory:
// addToInventory(item: ClothingItem, quantity: number, size?: string): void
// removeFromInventory(item: ClothingItem, quantity: number, size?: string): void
// Ensure Type Safety:
// Ensure that the functions properly handle scenarios such as attempting to remove more items than are currently in stock.
// Use TypeScript's type annotations and interfaces to enforce correct usage and prevent runtime errors.

interface ClothingItem {
  id: number;
  name: string;
  category: string;
  price: number;
  color: string;
  size: string[];
  gender: string;
  picture_link?: string;
  availability: boolean;
  quantity: number;
}