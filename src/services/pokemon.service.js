const pokemonClient = require("../clients/pokemon.client");
const weatherClient = require("../clients/wather.client");

const pokemonService = () => {

  const byCity = async (city) => {
    const weatherResult = await weatherClient.byCity(city);

    const main = weatherResult.main;
    const weather = weatherResult.weather;

    const isRain = weather[0].main === "Rain";
    const climate = weather[0].description;
    const temp = main.temp;

    const pokeResult = await pokemonClient.byType("normal");

    const pokemons = pokeResult.pokemon;

    return {isRain, climate, temp, pokemons};

  };

  return {
    byCity,
  };

};

module.exports = pokemonService();