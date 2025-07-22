const express = require('express');
const router = express.Router();

const pokemonController = require('../controllers/pokemonController');
const frutinhasController = require('../controllers/frutinhasController');
const habilidadeController = require('../controllers/habilidadeController');
const itemController = require('../controllers/itemController');

router.get('/pokemons', pokemonController.getAll);
router.get('/frutinhas', frutinhasController.getAll);
router.get('/habilidades', habilidadeController.getAll);
router.get('/itens', itemController.getAll);

module.exports = router;
