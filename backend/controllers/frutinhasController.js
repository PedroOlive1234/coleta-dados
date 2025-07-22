const FrutinhaModel = require('../models/frutinhaModel');

function getAll(req, res) {
  const frutinhas = FrutinhaModel.getFrutinhas();
  res.json(frutinhas);
}

module.exports = { getAll };
