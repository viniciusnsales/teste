module.exports = class WeatherPokemon {

  constructor({
    climate,
    isRaining,
    temperature,
    pokemons,
  } = {}) {
    this.climate = climate;
    this.isRaining = isRaining;
    this.temperature = temperature;
    this.pokemons = pokemons;
  }

};