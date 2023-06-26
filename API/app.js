const express = require("express");

const cors = require('cors')

const app = express();

app.use(express.json());

app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

    res.header("Access-Control-Allow-Headers", "Content-Type");

    app.use(cors());

    next()

})

const clientes = require("./controles/mensagens");

app.use("/mensagens", clientes)

app.listen(3001, () => {
    console.log("Servidor iniciado na porta 3001: http://localhost:3001")
}); 