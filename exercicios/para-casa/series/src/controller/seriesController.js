const serieJson = require("../models/series.json")

const getAllSeries = (req, res) =>{
    try {
    res.status(200).json([{
        series: serieJson
    }])
} catch (error) {
    res.status(500).send([{
        message: "Erro no servidor"
    }])
}
}

const getGenSerie = (req, res) =>{
    const genSerieRequest = req.query.genre
    const genFilter = serieJson.filter((serie)=> serie.genre == genSerieRequest)

    if (genFilter.length > 0 ) {
        res.status(200).send(genFilter)
    } else {
        res.status(404).send([{
            message: "Genero de serie não encontrada"
        }])        
    }
}

const getSerie = (req, res) => {
    const serieRequest = req.params.id
    const serieFilter = serieJson.filter((serie)=> serie.id == serieRequest)

    if(serieFilter.length > 0) {
        res.status(200).send(serieFilter)
    } else {
        res.status(404).send([{
            message: "Serie não encontrada"
        }])
    }
}

const addSerie = (req, res)=> {
    try {
        let nameRequest = req.body.name;
        let createSerieRequest = req.body.createSerie;
        let topicRequest = req.body.topic;
        let trilogyRequest = req.body.trilogy

        let newSerie = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            name: nameRequest,
            createSerie: createSerieRequest,
            topic: topicRequest,
            stars: trilogyRequest
            }
            serieJson.push(newSerie);
            res.status(201).json([{
                message: "Nova serie cadastrada",
                newSerie
            }])
    } catch (error) {
        console.log(error)
        res.status(500).send([{
            message: "Erro interno ao cadastrar"
        }])
    }
}

const deleteSerie = (req, res)=> {
    const idRequest = req.params.id
    const indiceSerie = serieJson.findIndex((serie)=> serie.id == idRequest)

    serieJson.splice(indiceSerie,1)

    if (indiceSerie) {
        res.status(200).json([{
            message: "A serie selecionada foi deletada",
            "Serie deletada": idRequest,
            serieJson
        }])
    } else {
        res.status(404).send([{
            message: "Not found"
        }])
    }
}

const updateSerie = (req, res)=> {
    const idRequest = req.params.id
    const likedRequest = req.body.liked
    likedFind = serieJson.find((serie)=> serie.id == idRequest)

    if(likedFind) {
        likedFind.liked = likedRequest
        res.status(200).json([{
            message: "Gostei da serie"
        }])
    } else {
        res.status(404).json([{
            message: "Não gostei da serie"
        }])
    }
}


module.exports = {
getAllSeries,
getGenSerie,
getSerie,
addSerie,
deleteSerie,
updateSerie
}