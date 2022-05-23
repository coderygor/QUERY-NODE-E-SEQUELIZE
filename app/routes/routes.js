
module.exports = app => {
    const modelAnswers = require('../controllers/controller');
    var route = require("express").Router();

    route.get("/", modelAnswers.findAll);
    route.get("/:id",  modelAnswers.findOne);
    route.get("/:id",  modelAnswers.findOne);
    route.get("/publish",  modelAnswers.findAllPublished);
}