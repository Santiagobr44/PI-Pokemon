const { Router } = require("express");
const getPokemons = require("../controllers/getPokemons");
const getPokemonById = require("../controllers/getPokemonById");
const getPokemonByName = require("../controllers/getPokemonByName");
const createPokemon = require("../controllers/createPokemon");

const pokemonRouter = Router();

const LIMIT = process.env.POKEMON_LIMIT || 50; // ! Límite de pokemons que obtendra de la API

const handleErrors = (res, error, errorMessage) => {
  console.error("Error:", error.message);
  res.status(404).json({ error: errorMessage });
};

pokemonRouter.get("/", async (req, res) => {
  try {
    const pokemons = await getPokemons(LIMIT);
    res.status(200).json(pokemons);
  } catch (error) {
    handleErrors(res, error, "Pokémons no encontrados");
  }
});

pokemonRouter.get("/id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await getPokemonById(id);
    res.status(200).json(pokemon);
  } catch (error) {
    console.error("Error:", error.message);
    handleErrors(res, error, "Pokémon no encontrado");
  }
});

pokemonRouter.get("/name/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const pokemon = await getPokemonByName(name);
    res.status(200).json(pokemon);
  } catch (error) {
    console.error("Error:", error.message);
    handleErrors(res, error, "Pokémon no encontrado");
  }
});

pokemonRouter.post("/", async (req, res) => {
  try {
    const { name, image, hp, attack, defense, speed, height, weight, type } =
      req.body;

    const newPokemon = await createPokemon({
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      type,
    });
    res.status(200).json(newPokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

pokemonRouter.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

module.exports = pokemonRouter;
