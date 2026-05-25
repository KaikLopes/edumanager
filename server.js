const express = require('express');
const cors = require('cors');

// ---------------------------------------------------------
// RESPONSÁVEL: Kaik (US1 e Setup Base)
// Configura o servidor, o CORS (para o front conseguir acessar) 
// e o "banco de dados" em memória.
// ---------------------------------------------------------
const app = express();
app.use(cors());
app.use(express.json());

let bancoAlunos = [];