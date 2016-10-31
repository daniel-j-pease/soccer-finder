const { ObjectID } = require('mongodb');
const { getDB }    = require('../lib/dbConnect.js');

const DB_CONNECTION = 'mongodb://localhost:27017/soccerFinder';

function getGames(req, res, next) {
  // find all games for your userId
  getDB().then((db) => {
    db.collection('games')
      .find({ userId: { $eq: req.session.userId } })
      .toArray((toArrErr, data) => {
        if(toArrErr) return next(toArrErr);
        res.games = data;
        db.close();
        next();
      });
      return false;
  });
  return false;
}

function makeGame(req, res, next) {
  // creating an empty object for the insertObj
  const insertObj = {};

  // copying all of req.body into insertObj
  for(key in req.body) {
    insertObj[key] = req.body[key];
  }

  // Adding userId to insertObj
  // insertObj.game.userId = req.session.userId;

  getDB().then((db) => {
    db.collection('games')
      .insert(insertObj.game, (insertErr, result) => {
        if (insertErr) return next(insertErr);
        res.saved = result;
        db.close();
        next();
      });
      return false;
  });
  return false;
}

module.exports = {
  getGames,
  makeGame,
}
