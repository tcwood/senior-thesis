/* eslint-disable */
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define('Message', {
  text: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
         Message.belongsTo(models.User);
         Message.belongsTo(models.Chat);
      }
    },
    freezeTableName: true
  });

  return Message;
};
