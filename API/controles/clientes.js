const express = require('express');

const db = require('../db/models/index');

const router = express.Router();

router.post("/", async (req, res) => {

    try {
    const dados = req.body;
    const dadosMensagem = await db.clientes.create(dados);
        return res.json({
            error: false,
            mensagem: "Cadastro efetuado com sucesso",
            dados: dadosMensagem
        });
    } catch (error) {
        return res.json({
            error: true,
            mensagem: "Cadastro não efetuado, Por favor tente novamente",
            });
        };
});

module.exports = router;