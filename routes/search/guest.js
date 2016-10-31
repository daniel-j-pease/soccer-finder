const router = require('express').Router();
const { getParks } = require('../../services/parks');
const { getFacs } = require('../../services/facs');
const { getGames } = require('../../models/games');

router.get('/', getParks, getFacs, (req, res) => {
  res.render('search/guest');
});

router.post('/', getParks, getFacs, getGames, (req, res) => {
  res.render('search/results/guest', {
    parks: res.parks || [],
    facs: res.facs || [],
    games: res.games || [],
  });
});

module.exports = router;

