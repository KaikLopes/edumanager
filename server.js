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

    // Adiciona uma propriedade 'id' automaticamente antes de salvar
    novoAluno.id = bancoAlunos.length + 1;

    bancoAlunos.push(novoAluno);
    res.status(201).json({ mensagem: "Aluno matriculado com sucesso!" });
});

// ---------------------------------------------------------
// RESPONSÁVEL: Lucas Dantas (US4 - Remover Aluno)
// Rota para deletar um aluno específico usando o ID dele
// ---------------------------------------------------------

app.delete('/alunos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    bancoAlunos = bancoAlunos.filter(aluno => aluno.id !== id);
    res.json({ mensagem: "Aluno removido com sucesso!" });
});

// ---------------------------------------------------------
// RESPONSÁVEL: Lucas Pereira (US5 - Atualizar Alunos)
// Rota para atualizar cada aluno 
// ---------------------------------------------------------
app.put('/alunos/:id', (req, res) => {
    // 1. Pega o ID enviado na URL (ex: /alunos/2) e transforma em número
    const idProcurado = parseInt(req.params.id);

    // 2. Pega os novos dados que o Front-end enviou
    const dadosAtualizados = req.body;

    // 3. Procura o aluno no array
    const aluno = bancoAlunos.find(a => a.id === idProcurado);

    // Se encontrou o aluno, atualiza os dados dele
    if (aluno) {
        aluno.nome = dadosAtualizados.nome;
        aluno.curso = dadosAtualizados.curso;
        
        return res.json({ mensagem: "Aluno atualizado com sucesso!" });
    } else {
        // Se não encontrou, avisa o Front-end
        return res.status(404).json({ mensagem: "Aluno não encontrado." });
    }
});

// Kaik: Inicia o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Backend rodando em http://localhost:${PORT}`);
});

