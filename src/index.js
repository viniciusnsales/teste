const express = require("express");
const bodyParser = require("body-parser");
const queryParser = require("express-query-int");
const pokemonController = require("./controllers/pokemon.controller");
const weatherController = require("./controllers/weather.controller");
const app = express();

const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(queryParser());
app.use(pokemonController);
app.use(weatherController);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
