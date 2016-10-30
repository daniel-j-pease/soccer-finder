const router = require('express').Router();
const { getParks } = require('../../services/parks');
const { authenticate }   = require('../../lib/auth');
const { getFacs } = require('../../services/facs');

router.get('/', authenticate, (req, res) => {
  res.render('search/user', {
    user: res.user,
  });
});

router.post('/', getParks, getFacs, authenticate, (req, res) => {
  res.render('search/results/user', {
    parks: res.parks,
    facs: res.facs,
    user: res.user,
  });
  // res.json(res.parks);
});

module.exports = router;

