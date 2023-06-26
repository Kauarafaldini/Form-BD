
const express = require("express");

const db = require("../db/models");

const router = express.Router();

router.post("/", async (req, res) => {

    var dados = req.body

    try {
        const dadosMensagem = await db.mensagem.create(dados);
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
    }

});

module.exports = router;