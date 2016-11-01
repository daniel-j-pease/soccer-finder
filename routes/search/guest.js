const router = require('express').Router();
const { getParks } = require('../../services/parks');
const { getFacs } = require('../../services/facs');
const { getGames } = require('../../models/games');

//prepare search for guest
router.get('/', getParks, getFacs, (req, res) => {
  res.render('search/guest');
});

//render guest search results (which lack the ability to create games)
router.post('/', getParks, getFacs, getGames, (req, res) => {
  res.render('search/results/guest', {
    parks: res.parks || [],
    facs: res.facs || [],
    games: res.games || [],
  });
});

module.exports = router;

