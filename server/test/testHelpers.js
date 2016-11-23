/* eslint-disable */

// change base if want to run test non-locally
var base = 'http://127.0.0.1:3000';

exports.urls = {
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

exports.users = {
  user1: {
    name: "luigi",
    username: "luigi",
    password: "1",
    profession: "carpenter",
    description: "doing it bigger and better",
    experience: 3,
    location: "san francisco",
    mobile: "(555)444-3333",
    profilePicUrl: "https://s3.amazonaws.com/puffyshirts/missing-profile.jpg"
  },
  user2: {
    name: "mario",
    username: "mario",
    password: "1",
    profession: "plumber",
    description: "It'sss a meeeee, Marioooo!!",
    experience: 5,
    location: "berkeley",
    mobile: "(234)567-8910",
    profilePicUrl: "https://s3.amazonaws.com/puffyshirts/missing-profile.jpg"
  },
}

exports.reviews = {
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

exports.jobs = {
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

