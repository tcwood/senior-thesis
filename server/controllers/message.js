/* eslint-disable */
var User = require('../models/').User;
var Review = require('../models/').Review;
var Job = require('../models/').Job;
var Message = require('../models/').Message;
var db = require('../models/');

module.exports = {
// Create new job
// (first finds user by id to associate with foreign key)
  createMessage(req, res) {
    Message.create(req.body).then(function(message) {
      res.status(201).json(message);
    }).catch(function (error) {
      res.status(500).json(error);
    });
  },
};
