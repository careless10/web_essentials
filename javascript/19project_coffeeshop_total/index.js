const orders = [
  {
    name: "Latte",
    price: 2,
    quantity: 4,
  },
  {
    name: "Americano",
    price: 1.25,
    quantity: 2,
  },
  {
    name: "Donut",
    price: 1,
    quantity: 9,
  },
];
function OrderDisplay(order) {
  console.log(`
  ====================================================
  =Customer ordered product: ${order.name},
  =Costs: ${order.price} KD, Quantity: ${order.quantity}
  =Total is ${order.price * order.quantity} KD
  ====================================================`);
}

let total = 0;

orders.forEach((item) => {
  total += item.price * item.quantity;
  OrderDisplay(item);
});

console.log(`Customer should pay: ${total}`);
