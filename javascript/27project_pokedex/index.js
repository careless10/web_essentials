const takeInput = require("./helpers");

async function run() {
  const pokemonName = await takeInput("Enter Pokemon Name?");
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
  );
  const pokemonData = await response.json();
  let { height, weight, name, types } = pokemonData;
  const formattedTypes = types.map((x) => x.type.name);
  console.log(`
    Pokemon Name: ${name}
    Height: ${height} feet
    Weight: ${weight} kg
    Types: ${formattedTypes}
    `);
}

run();
