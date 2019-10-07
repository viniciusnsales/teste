const weatherClient = require("../clients/wather.client");

const weatherService = () => {

  const findByCity = async (city) => {

    const result = await weatherClient.byCity(city);

    return result;
  };

  return {
    findByCity,
  };

};

module.exports = weatherService();
