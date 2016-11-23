/* eslint-disable */
var path      = require('path');

var User      = require('../models/').User;
var Review    = require('../models/').Review;
var Job       = require('../models/').Job;

var axios     = require('axios');
var expect    = require('chai').expect;

var {
  users,
  reviews,
  jobs,
  urls
} = require('./testHelpers');

// Set the connection to the db
var dbSetup = require('../models/index');

//TODO: REFACTOR TESTS TO USE DATA FROM TESTHELPERS.JS SO THEY'RE LESS CHUNKY
//TODO: CREATE MORE TESTS. LOTS OF 'EM

describe('Tradesman database CRUD', function() {
  
  beforeEach(function(done) {
    // Couldn't find a way to delete the info before each test, so this is the workaround
    // Before each test it deletes any info for users named Mario or Luigi
    // A thought was to delete it based off of id, but then persisted data that we'd want on
    // the frontend for development would be deleted, too and need to be recreated each time
    // I tried a bunch of other methods, like the one commented out below, but none did the trick
    // Sequelize is very particular about it's foreign key restraints and forces some name changes
    // of models, making them hard to access.
    User.destroy({
      where: {
        $or: [
          { name:
            {
              $eq: 'Mario'
            } 
          },
          { name:
            {
              $eq: 'Luigi'
            } 
          }
        ]
      },
      cascade: true
    })
    .then(() => done());

    /* OTHER ATTEMPT AT CLEARING DATABASES BEFORE EACH TEST*/
    // Promise.all([sequelize.transaction((t) => {    
    //   const options = { raw: true, transaction: t };
    //   return sequelize
    //   .query('SET CONSTRAINTS ALL DEFERRED', options)
    //   .then(() => sequelize.query('TRUNCATE TABLE ' + tables.join(', ') + ' RESTART IDENTITY', options))
    //   .then(() => sequelize.query('SET CONSTRAINTS ALL IMMEDIATE', options))
    //   // .catch((err) => console.log('err',err));
    // })])
    // .then(() => {
    //   console.log('finished truncating');
    //   done()
    // });
  });

  describe('/user', function(){
    it('Should insert users into the DB', function() {
      console.log('user from helper', users.user1);
      return axios.post('http://127.0.0.1:3000/user',
      {
        name:'Mario',
        profession:'plumber',
        description:'Itsss a meeeee, Marrrioooo',
        experience: 25,
        location:'N64'
      })
      .then( function(res) {
        return axios.post('http://127.0.0.1:3000/user',
        {
          name:'Luigi',
          profession:'electrician',
          description:'Im the best in the west!',
          experience: 23,
          location:'N64'
        })
      })
      .then( function(res) {
        return User.findAll({})
      })
      .then((users)=> {
        expect(users.length).to.equal(2);
      });
    });
  });

  describe('/review', function(){
    //This test is not correct yet... But moving on to connecting front/backend for mvp
    it('Should insert posted reviews to the DB', function() {
      return axios.post('http://127.0.0.1:3000/user',
      {
        name:'Mario',
        profession:'plumber',
        description:'Itsss a meeeee, Marrrioooo',
        experience: 25,
        location:'N64'
      })
      .then( function(res) {
        console.log('res', res);
        return axios.post('http://127.0.0.1:3000/review',
        {
          comment:'Paint the house',
          rating:'San Francisco',
          ReviewFrom: 1,
          ReviewFor: 1,
        })
      })
      .then( function(res) {
        return Review.findAll({})
      })
      .then((review) => expect(review).length.to.be.above(0))
    });

    describe('other stuff', function() {
      it(';kasdjnfg;jnffsjk', function() {
        console.log('third test');
      });
    });
  });
});

