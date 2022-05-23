const db = require('../models');
const ModelAnswers = db.modelAnswers;
const Op = db.Sequelize.Op;

// ver todos com condição

exports.findAll = (req, res) => {

  const actionId  = req.query.actionId;
  var condition = actionId ? { actionId: { [Op.like]: `%${actionId}%` } } : null;
  ModelAnswers.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ModelAnswerss."
      });
    });
};
  

// para encontrar somente um

exports.findOne = (req,res) => {

    const id = req.params.id;
    ModelAnswers.findByPk(id)
         .then(data => {
          res.send(data);
        })
         .catch(err => {
         res.status(500).send({
           message: "Error retrieving ModelAnswers with id=" + id
         });
        });
};

//para ver todos os objetos

exports.findAllPublished = (req,res) => {
    ModelAnswers.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ModelAnswerss."
      });
    });
};
