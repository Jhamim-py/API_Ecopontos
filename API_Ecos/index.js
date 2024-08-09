const express = require('express');
const app = express();

// Importar o arquivo JSON
const ecopontos = require('./ecopontos.json');

// Rota para obter todos os ecopontos
app.get('/ecopontos', (req, res) => {
    res.json(ecopontos);
});

// Iniciar o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
