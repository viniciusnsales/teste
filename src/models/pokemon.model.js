module.exports = class Pokemon {

  constructor({
    name,
    type,
    url,
  } = {}) {
    this.name = name;
    this.type = type;
    this.url = url;
  }

};