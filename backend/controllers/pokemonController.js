const PokemonModel = require('../models/pokemonModel');

function getAll(req, res) {
  const pokemons = PokemonModel.getPokemons();
  res.json(pokemons);
}

module.exports = { getAll };
