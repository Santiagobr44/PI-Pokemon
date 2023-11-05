const pokemonsService = require("./pokemonsService");

const BASE_API_URL = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonById = async (id) => {
  if (isNaN(id) || id <= 0) {
    throw new Error(
      "ID de Pokémon no válido. Debe ser un número mayor que cero."
    );
  }

  const url = BASE_API_URL + id;

  const pokemon = await pokemonsService.getPokemonDetails(url);

  if (!pokemon) {
    throw new Error("No se encontró ningún Pokémon con el ID proporcionado.");
  }

  return pokemon;
};

module.exports = getPokemonById;
