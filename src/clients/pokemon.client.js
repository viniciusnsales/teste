const Pokemon = require("../models/pokemon.model");

const superagent = require("superagent");

const BASE_API_POKEMON = "https://pokeapi.co/api/v2/";

const pokemonClient = () => {

  const byType = async (type) => {
    // https://pokeapi.co/api/v2/type/:type
    const pokemonResponse = await superagent.get(`${BASE_API_POKEMON}type/${type}`);

    const body = pokemonResponse.body;

    return body.pokemon.map((item) => {
      return new Pokemon({
        name: item.pokemon.name,
        type,
      });
    });

  };

  const findPokemonByName = async (name) => {

    // https://pokeapi.co/api/v2/pokemon/:name/
    const pokemonResponse = await superagent.get(`${BASE_API_POKEMON}pokemon/${name}`);

    const body = pokemonResponse.body;

    return new Pokemon({
      sprite: body.sprites.front_default,
      name,
    });
  };

  return {
    byType,
    findPokemonByName,
  };

};

module.exports = pokemonClient();