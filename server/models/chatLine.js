/* eslint-disable */
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define('Message', {
  chatId: DataTypes.INTEGER,
  text: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
         Message.belongsTo(models.User);
      }
    },
    freezeTableName: true
  });

  return Message;
};
