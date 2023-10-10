const pokemon = {
  name: "Charizard",
  type: ["Fire", "Flying"],
  enemies: [{ name: "Squarle", type: ["Water"] }],
  attack() {
    console.log("Flying...");
    console.log("Inflicted 100 HP");
    // Decrease enemy health
  },
};

console.log(pokemon.enemies[0]);
