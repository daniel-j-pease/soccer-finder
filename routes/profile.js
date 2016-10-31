const profileRouter = require('express').Router();
const getMyGames = require('../models/games');
const getGames = require('../models/games');
const makeGame = require('../models/games');
const deleteGame = require('../models/games');
const { authenticate }   = require('../lib/auth');

profileRouter.get('/', authenticate, getMyGames.getMyGames, (req, res) => {
  res.render('profile', {
    user: res.user || [],
    games: res.games || [],
  });
});

profileRouter.post('/games', getGames.getGames, getMyGames.getMyGames, makeGame.makeGame, (req, res) => {
  res.redirect('/userSearch');
});

profileRouter.delete('/games/:id', deleteGame.deleteGame, (req, res) => {
  res.redirect('/profile');
});

module.exports = profileRouter;
