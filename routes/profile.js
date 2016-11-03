const profileRouter = require('express').Router();
const getMyGames = require('../models/games');
const getGames = require('../models/games');
const makeGame = require('../models/games');
const deleteGame = require('../models/games');
const editGame = require('../models/games')
const { authenticate }   = require('../lib/auth');

//render profile
profileRouter.get('/', authenticate, getMyGames.getMyGames, (req, res) => {
  res.render('profile', {
    user: res.user || [],
    games: res.games || [],
  });
});

//show a logged in users' games
profileRouter.post('/games', getGames.getGames, getMyGames.getMyGames, makeGame.makeGame, (req, res) => {
  res.redirect('/userSearch');
});

//remove a player's game
profileRouter.delete('/games/:id', deleteGame.deleteGame, (req, res) => {
  res.redirect('/profile');
});

// profileRouter.put('/edit/:id', editGame.editGame, (req, res) => {
//   res.redirect('/');
// })

module.exports = profileRouter;
