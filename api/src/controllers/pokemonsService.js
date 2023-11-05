const axios = require("axios");

const getPokemonDetails = async (url) => {
  const response = await axios.get(url);

  if (!response.data) throw Error("La respuesta no contiene datos válidos.");

  const { id, name, height, weight, sprites, stats } = response.data;

  const hp = getStat(stats, "hp");
  const attack = getStat(stats, "attack");
  const defense = getStat(stats, "defense");
  const speed = getStat(stats, "speed");

  return {
    id,
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    image: sprites ? sprites.front_default : null,
  };
};

const getStat = (stats, statName) => {
  const stat = stats.find((stat) => stat.stat.name === statName);
  return stat ? stat.base_stat : null;
};

module.exports = {
  getPokemonDetails,
};
