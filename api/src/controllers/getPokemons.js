const axios = require("axios");
const pokemonsService = require("./pokemonsService");

// * Este controller se encarga de obtener y retornar la informacion de los pokemons
const getPokemons = async (limit = 5) => {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
  const response = await axios.get(apiUrl);

  const pokemonList = response.data.results;
  const pokemonDetails = await Promise.all(
    pokemonList.map((pokemon) => {
      return pokemonsService.getPokemonDetails(pokemon.url);
    })
  );

  return pokemonDetails;
};

module.exports = getPokemons;
