/* eslint-disable */

// change base if want to run test non-locally
var base = 'http://127.0.0.1:3000';

var urls = {
  createUser: base + '/user',
  getUsers: base + '/user',
  modifyUser1: base + '/user/1',
  createReview: base + '/review',
  getReviewsForUser1: base + '/review/1',
  createJob: base + '/job',
  getAllJobs: base + '/job',
  updateJob1: base + '/job/1',
  modifyJob1: base + '/job/1'
}

var users = {
  user1: {
    name:'Luigi',
    profession:'electrician',
    description:'Im the best in the west!',
    experience: 23,
    location:'N64'
  },
  user2: {
    name:'Mario',
    profession:'plumber',
    description:'Itsss a meeeee, Marrrioooo',
    experience: 25,
    location:'N64'
  }
}

var reviews = {
  review1: {
    comment:'He is so amazing at what he does! Truly!',
    rating: 5,
    ReviewFrom: 1,
    ReviewFor: 2,
  },
  review2: {
    comment:'Meh, I have seen better',
    rating: 2,
    ReviewFrom: 1,
    ReviewFor: 2,
  }
}

var jobs = {
  job1: {
    description: 'We are going to build something that changes the world',
    location: 'Oakland',
    timeFrame: '12.6 days',
    vacancies: 3,
    UserId: 1
  },
  job2: {
    description: 'I\'ve got just the gig for you',
    location: 'San Francisco',
    timeFrame: '12.6 days',
    vacancies: 3,
    UserId: 1
  }
}

