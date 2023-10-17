const response = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("Success");
    } else {
      reject("Failed");
    }
  }, 3000);
});

console.log("start");
response
  .then((x) => {
    console.log(x);
  })
  .catch((x) => {
    console.log(x);
  });
console.log("finish");
// terminated
