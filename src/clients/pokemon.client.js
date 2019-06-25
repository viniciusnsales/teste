const superagent = require("superagent");

const BASE_API_POKEMON = "https://pokeapi.co/api/v2/";

const pokemonClient = () => {

  const byType = async (type) => {
    //https://pokeapi.co/api/v2/type/:type
    const pokemonResponse = await superagent.get(`${BASE_API_POKEMON}type/${type}`);

    const body = pokemonResponse.body;

    return body;

  };

  return {
    byType,
  };

};

module.exports = pokemonClient();