const axios = require("axios");
const { Type } = require("../db");
const typesUrl = "https://pokeapi.co/api/v2/type";

// Función para obtener y guardar tipos de Pokémon
const getTypes = async () => {
  const existingTypes = await Type.findAll();
  if (existingTypes.length > 0) {
    return existingTypes;
  }

  // Obtener tipos desde la API
  const response = await axios.get(typesUrl);
  const types = response.data.results.map((type) => ({ name: type.name }));

  // Guardar tipos en la base de datos
  const newTypes = await Type.bulkCreate(types);

  return newTypes;
};

module.exports = getTypes;
