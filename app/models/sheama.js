
module.exports = (sequelize, Sequelize) => {
    const ModelAnswers = sequelize.define("modelAnswers", {
      actionId: {
          type: Sequelize.STRING
      },
      startDate:{
          type: Sequelize.STRING
      },
      endDate:{
        type: Sequelize.STRING
      },
      ih1:{
        type: Sequelize.STRING
      },
      ih2:{
        type: Sequelize.STRING
      },
      metric:{
        type: Sequelize.STRING
      },
      groupId:{
        type: Sequelize.STRING
      },
      indicator:{
        type: Sequelize.STRING
      },
      indicatorValue:{
        type: Sequelize.STRING
      },
      indicatorRange:{
        type: Sequelize.STRING
      },
      reportType:{
        type: Sequelize.STRING
      },
    });
    return ModelAnswers;
}

//antes de executar estude como modificar Tutorial para o nome da nossa collection no banco