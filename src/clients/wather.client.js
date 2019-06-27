const Weather = require("../models/weather.model");

const superagent = require("superagent");

const BASE_API_OPENWEATHER = "https://api.openweathermap.org/data/2.5/weather";
const APPID = "ae8ea9f96d42b75c0f625a8695156636";

const weatherClient = () => {

  const byCity = async (city) => {
    const weatherResponse = await superagent.get(BASE_API_OPENWEATHER)
      .query({
        q: city,
        APPID,
        units: "metric",
        lang: "pt",
      });

    const body = weatherResponse.body;

    return new Weather({
      temperature: body.main.temp,
      condition: body.weather[0].description,
      conditionId: body.weather[0].main,
    });

  };

  return {
    byCity,
  };

};

module.exports = weatherClient();