const { Pokemon } = require("../db");

const createPokemon = async ({
  name,
  image,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  type,
}) => {
  const newPokemon = await Pokemon.create({
    name,
    image,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
  });

  newPokemon.addTypes(type);

  return newPokemon;
};

module.exports = createPokemon;
