const HabilidadeModel = require('../models/habilidadeModel');

function getAll(req, res) {
  const habilidades = HabilidadeModel.getHabilidades();
  res.json(habilidades);
}

module.exports = { getAll };
