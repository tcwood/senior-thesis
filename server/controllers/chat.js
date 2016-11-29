/* eslint-disable */
var Chat = require('../models/').Chat;
var db = require('../models/');

module.exports = {
  createChat(req, res) {
    Chat.create(req.body).then(function(chat) {
      res.status(201).json(chat);
    }).catch(function (error) {
      res.status(500).json(error);
    });
  },
};
