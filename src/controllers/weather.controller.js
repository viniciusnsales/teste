const express = require("express");
const weatherService = require("../services/weather.service");

const weatherController = () => {

  const router = express.Router();

  router.get("/weather/by-city", async (req, res) => {

    const city = req.query.city;
    const result = await weatherService.findByCity(city);

    res.send(result);

  });

  return router;

};

module.exports = weatherController();
