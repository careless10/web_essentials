// Initial array of products
let products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "TV", price: 1500 },
  { name: "Headphones", price: 100 },
];

const discountProducts = products.map((product) => {
  product.price = product.price * 0.9;
  return product;
});

console.log(discountProducts);
