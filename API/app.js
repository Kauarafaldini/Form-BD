const express = require("express");

const app = express();

app.use(express.json());

const clientes = require("./controles/mensagens");

app.use("/mensage", clientes)

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000: http://localhost:3000")
}); 