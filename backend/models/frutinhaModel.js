const fs = require('fs');
const path = require('path');

function getFrutinhas() {
    const filePath = path.join(__dirname, '../dados/frutinhas.json');
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

module.exports = {
    getFrutinhas
}