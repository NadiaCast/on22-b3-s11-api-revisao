const app = require("./src/app")
const porta = 5566;

app.listen(porta, () => {
    console.log(`Servidor está rodando na porta ${porta}`)
})