const express = require('express');
const path = require('path');

const app = express();

// Serve a pasta 'public' como estática
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
