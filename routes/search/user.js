const router = require('express').Router();
const { getParks } = require('../../services/parks');
const { authenticate }   = require('../../lib/auth');
const { getFacs } = require('../../services/facs');
const { getGames, makeGame } = require('../../models/games');

//prepare search for user
router.get('/', authenticate, (req, res) => {
  res.render('search/user', {
    user: res.user,
  });
});

//display search results to user
router.post('/', getParks, getFacs, getGames, authenticate, (req, res) => {
  res.render('search/results/user', {
    parks: res.parks || [],
    facs: res.facs || [],
    user: res.user || [],
    games: res.games || [],
  });
});

module.exports = router;

