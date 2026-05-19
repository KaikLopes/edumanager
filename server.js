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
// RESPONSÁVEL: Lucas Pereira (US2 - Listar Alunos)
// Rota para enviar a lista de alunos para o Frontend
// ---------------------------------------------------------
app.get('/alunos', (req, res) => {
    res.json(bancoAlunos);
});


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
