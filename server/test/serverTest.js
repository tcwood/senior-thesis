/* eslint-disable */
var Sequelize = require('sequelize');
var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(module.filename);
var env       = 'test';
var config    = require(__dirname + '/../config.json')[env];
var db        = {};

var User      = require('../models/').User;
var Review    = require('../models/').Review;
var Job       = require('../models/').Job;

// var request   = require('request');
// var rp        = require('request-promise');
var axios     = require('axios');
var expect    = require('chai').expect;

var sequelize = new Sequelize(config.database, config.username, config.password, config);
// var tables = [];

/*fs
  .readdirSync(__dirname + '/../models/')
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file !== 'index.js') && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    if (file)
    var model = sequelize['import'](path.join(__dirname + '/../models', file));
    db[model.name] = model;
  });
// Create associations between models if they exist
Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
    tables.push(`"${db[modelName].getTableName()}"`);
  }
});
// "force: true" drops tables if they already exist before creating them
sequelize.sync({force: true})
*/

// This sets up the connection to the db
var dbSetup = require('../models/index');

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

    // console.log('test user length', User.findAll({}));
  });
});
