const ItemModel = require('../models/itemModel');

function getAll(req, res) {
  const itens = ItemModel.getItens();
  res.json(itens);
}

module.exports = { getAll };
