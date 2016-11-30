/* eslint-disable */
var Chat = require('../models/').Chat;
var Message = require('../models/').Message;
var db = require('../models/');

module.exports = {
  createChat(req, res) {
    Chat.create(req.body).then(function(chat) {
      res.status(201).json(chat);
    }).catch(function (error) {
      res.status(500).json(error);
    });
  },
  // Given a user, should return chatIds of all chats associated with the user
  findUsersChats(req, res) {
    Chat.findAll({
      where: {
        $or: [{
          "Participant1": req.params.userId
        }, {
          "Participant2": req.params.userId
        }]
      },
      // include: Message
    })
    .then(function(chats) {
      res.status(200).json(chats);
    })
    .catch(function(error) {
      res.status(500).json(error);
    })
  }
};
