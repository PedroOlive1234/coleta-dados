const fs = require('fs');
const path = require('path');

function getHabilidades() {
    const filePath = path.join(__dirname, '../dados/habilidades.json');
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

module.exports = {
    getHabilidades
}