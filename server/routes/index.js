/* eslint-disable */
var express = require('express');
var router = express.Router();
// var models = require('../models/index');
var userController = require('../controllers/user');
var reviewController = require('../controllers/review');
var jobController = require('../controllers/job');
var chatController = require('../controllers/chat');
var messageController = require('../controllers/message');

// USERS
// Create a new user
router.post('/user', userController.createUser);
// Retrieve all users
router.get('/user', userController.findAllUsers);
// Retrieve one user by id
router.get('/user/:id', userController.findOneUser);
// Update users infromation
router.put('/user/:id', userController.updateUser);
// Attempt to sign in
router.post('/signin', userController.signIn);
// Attempt to sign up
router.get('/exists/:username', userController.exists);

// REVIEWS
// Create a new review
router.post('/review', reviewController.createReview);
// Find all reviews associated with a given UserId
router.get('/review/:id', reviewController.findUsersReviews);

// JOBS
// Create a new job
router.post('/job', jobController.createJob);
// Retrieve all jobs (& associated user)
router.get('/job', jobController.findJobs);
// Retrieve job by id (& associated user)
router.get('/job/:id', jobController.findSpecificJob);
// Update job
router.put('/job/:id', jobController.updateJob);

//CHATS AND MESSAGES
// Create a new chat
router.post('/chat', chatController.createChat);
// Retrieve all chats associated with a user
router.get('/chat/:userId', chatController.findUsersChats);
// Create a new message
router.post('/message', messageController.createMessage);

module.exports = router;

