const fs = require('fs');
const path = require('path');

function getItens() {
    const filePath = path.join(__dirname, '../dados/itens.json');
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

module.exports = {
    getItens
}