const { ObjectID } = require('mongodb');
const { getDB }    = require('../lib/dbConnect.js');

const DB_CONNECTION = process.env.MONGODB_URI || 'mongodb://localhost:27017/soccerFinder';

function getGames(req, res, next) {
  getDB().then((db) => {
    db.collection('games')
      .find()
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

function getMyGames(req, res, next) {
  getDB().then((db) => {
    db.collection('games')
      .find({userId: { $eq: req.session.userId } })
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
  const insertObj = {};
  for(key in req.body) {
    insertObj[key] = req.body[key];
  }
  insertObj.game.userId = req.session.userId;
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

function deleteGame(req, res, next) {
  getDB().then((db) => {
    db.collection('games')
      .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, result) => {
        if (removeErr) return next(removeErr);
        res.removed = result;
        db.close();
        next();
      });
      return false;
  });
  return false;
}

function editGame(req, res, next) {
  getDB().then((db) => {
    db.collection('games')
    .findAndModify({ _id: ObjectID(req.params.id)}, [], {$set: req.body.name}, {new: true}, (editErr, results) => {
        if(editErr) return next(editErr);
        console.log(edited);
        res.edited = results;
        db.close();
        return next();
      })
  })
}

module.exports = {
  getGames,
  getMyGames,
  makeGame,
  deleteGame,
  editGame,
};
