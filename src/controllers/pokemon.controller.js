const express = require("express");
const pokemonService = require("../services/pokemon.service");

const pokemonController = () => {
  const router = express.Router();

  router.get("/pokemons/by-city", async (req, res) => {

    const city = req.query.name;
    const result = await pokemonService.byCity(city);

    res.send(result);
  });

  return router;

};

module.exports = pokemonController();
