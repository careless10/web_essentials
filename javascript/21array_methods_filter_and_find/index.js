// Initial array of products
let products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "TV", price: 1500 },
  { name: "Headphones", price: 100 },
];

const cheapProducts = products.filter((product) => {
  return product.price < 1000;
});

const firstCheapProduct = products.find((product) => {
  return product.price < 1000;
});

console.log(firstCheapProduct);
