module.exports = class Weather {

  constructor({
    temperature,
    condition,
    conditionId,
  } = {}) {
    this.temperature = temperature;
    this.condition = condition;
    this.conditionId = conditionId;
  }

  isRaining() {
    return this.conditionId === "Rain";
  }

};