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


// ---------------------------------------------------------
// RESPONSÁVEL: Ruan Vituriano (US3 - Matricular Aluno)
// Rota para receber os dados do Frontend e salvar na memória
// ---------------------------------------------------------
app.post('/alunos', (req, res) => {
    const novoAluno = req.body;
    bancoAlunos.push(novoAluno);
    res.status(201).json({ mensagem: "Aluno matriculado com sucesso!" });
});


// Kaik: Inicia o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Backend rodando em http://localhost:${PORT}`);
});
