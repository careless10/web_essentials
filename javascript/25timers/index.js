console.log("start");
const x = setInterval(() => {
  console.log("setInterval called after 1 second");
}, 1000);

setTimeout(() => {
  console.log("setTimeout called after 3 seconds, and kill interval: x");
  clearInterval(x);
}, 3000);
console.log("finish");
