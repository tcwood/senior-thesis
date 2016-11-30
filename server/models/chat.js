/* eslint-disable */
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Chat = sequelize.define('Chat', {
  }, {
    classMethods: {
      associate: function(models) {
        Chat.belongsTo(models.User, {foreignKey: 'Participant1', as: 'user1'});
        Chat.belongsTo(models.User, {foreignKey: 'Participant2', as: 'user2'});
        Chat.hasMany(models.Message);
      }
    },
    freezeTableName: true
  });

  return Chat;
};
