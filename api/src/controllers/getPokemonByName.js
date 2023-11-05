const pokemonsService = require("./pokemonsService");

const BASE_API_URL = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonByName = async (name) => {
  if (typeof name !== "string" || name.trim() === "") {
    throw new Error("El nombre del Pokémon es inválido.");
  }

  const url = `${BASE_API_URL}${name.toLowerCase()}`;
  const pokemon = await pokemonsService.getPokemonDetails(url);

  if (!pokemon) {
    throw new Error("Pokémon no encontrado.");
  }

  return pokemon;
};

module.exports = getPokemonByName;
