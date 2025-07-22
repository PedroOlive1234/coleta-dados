const fs = require('fs');
const path = require('path');

function getPokemons() {
    const filePath = path.join(__dirname, '../dados/pokemons.json');
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

module.exports = {
    getPokemons
}