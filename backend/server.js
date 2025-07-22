const express = require('express');
const app = express();
const routes = require('./routes/routes');
const PORT = 3000;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Rodando em http://localhost:${PORT}/pokemons`)
})