let products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Book", category: "Books" },
  { id: 3, name: "Headphones", category: "Electronics" },
  { id: 4, name: "Chair", category: "Furniture" },
  { id: 5, name: "Smartphone", category: "Electronics" },
  { id: 6, name: "Tablet", category: "Electronics" },
  { id: 7, name: "Desk", category: "Furniture" },
  { id: 8, name: "Monitor", category: "Electronics" },
  { id: 9, name: "Backpack", category: "Accessories" },
  { id: 10, name: "Printer", category: "Electronics" },
  { id: 11, name: "Sofa", category: "Furniture" },
  { id: 12, name: "Keyboard", category: "Electronics" },
  { id: 13, name: "Mouse", category: "Electronics" },
  { id: 14, name: "Dining Table", category: "Furniture" },
  { id: 15, name: "Camera", category: "Electronics" },
  { id: 16, name: "Bed", category: "Furniture" },
  { id: 17, name: "Couch", category: "Furniture" },
  { id: 18, name: "Watch", category: "Accessories" },
  { id: 19, name: "Speaker", category: "Electronics" },
  { id: 20, name: "Rug", category: "Furniture" },
];

const searchProduct = (input) => {
  let found = false;

  for (let i = 0; i < products.length; i++) {
    if (products[i].name === input) {
      found = true;
      break;
    }
  }

  if (found) {
    return console.log(`${input}`)
  }
}

const analyzeProductSearch = () => {
  const start = performance.now();
  searchProduct("Couch");
  const end = performance.now();
  const result = end - start;
  const resultEl = document.querySelector("#result");
  return resultEl.textContent = `Execution time: ${result}`;
}