const pokemonClient = require("../clients/pokemon.client");
const weatherClient = require("../clients/wather.client");

// class
const pokemonService = () => {

  const byCity = async (city) => {
    const weather = await weatherClient.byCity(city);
    const pokemonType = typeByWeather(weather.temperature, weather.isRaining());
    const allPokemons = await pokemonClient.byType(pokemonType);
    const pokemons =  await selectPokemons(allPokemons, pokemonType);

    return {
      weather,
      pokemons,
    };

  };

  const typeByWeather = (temperature, isRaining) => {

    if (isRaining) {
      return "electric";
    } else {
      if (temperature < 5) {
        return "ice";
      } else if (temperature >= 5 && temperature < 10) {
        return "water";
      } else if (temperature >= 12 && temperature <= 15) {
        return "grass";
      } else if (temperature > 15 && temperature <= 21) {
        return "ground";
      } else if (temperature >= 23 && temperature <= 27) {
        return "bug";
      } else if (temperature > 27 && temperature <= 33) {
        return "rock";
      } else if (temperature > 33) {
        return "fire";
      } else {
        return "normal";
      }
    }

  };

  const selectPokemons = async (pokemons, type) => {

    const selectedPokemons = [];

    for (let i = 0; i < 4; i++) {

      const index = Math.floor(Math.random() * (pokemons.length / 2 - 1));
      const pokemon = await pokemonClient.findPokemonByName(pokemons[index].name);
      pokemon.type = type;
      selectedPokemons.push(pokemon);
    }

    return selectedPokemons;
  };


  return {
    byCity,
  };

};

module.exports = pokemonService();