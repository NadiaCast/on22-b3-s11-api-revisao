const seriesController = require("../../src/controller/seriesController")
const express = require("express")
const router = express.Router()

router.get("/library", seriesController.getAllSeries);

router.get("/genre", seriesController.getGenSerie);

router.get("/:id", seriesController.getSerie);

router.post("/add", seriesController.addSerie);

router.delete("/delete/:id", seriesController.deleteSerie);

router.patch("/update/:id/liked", seriesController.updateSerie);

module.exports = router