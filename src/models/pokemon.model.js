module.exports = class Pokemon {

  constructor({
    name,
    type,
    sprite,
  } = {}) {
    this.name = name;
    this.type = type;
    this.sprite = sprite;
  }

};