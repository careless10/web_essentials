function calculateColorCost(color) {
  if (color == "black") {
    return 1000;
  }
  if (color == "white") {
    return 500;
  }
  return 100;
}

function calculatePrice(car) {
  let total = 5000;
  if (car.model == "SUV") {
    total += 3000;
  } else {
    total += 1000;
  }

  total += calculateColorCost(car.color);

  if (car.sunroof) {
    total += 1300;
  }

  if (car.leatherSeats) {
    total += 1900;
  }

  return total;
}

let car = {
  model: "SUV",
  color: "black",
  sunroof: true,
  leatherSeats: true,
};
console.log(`Your customization costs: ${calculatePrice(car)} KD`);
