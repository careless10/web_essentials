// const fetchPokemon = fetch("https://pokeapi.co/api/v2/pokemon/ditto");
// fetchPokemon
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => console.log(error));

async function pokemonFetcher() {
  const fetchPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const pokemon = await fetchPokemon.json();
  console.log(pokemon);
}

pokemonFetcher();
