const express = require("express") //Importa biblioteca(recursos) do express
const app = express()
app.use(express.json())

const seriesRouter = require("./routes/seriesRouter")
app.use("/serie/", seriesRouter)

module.exports = app