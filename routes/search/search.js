const router = require('express').Router();
const { getParks } = require('../../services/parks');
const { getFacs } = require('../../services/facs');
const { authenticate } = require('../../lib/auth')

router.get('/', getParks, getFacs, (req, res) => {
  res.render('search/search');
  // res.json(res.parks);
  // res.send('yo');
});

router.post('/results', getParks, getFacs, authenticate, (req, res) => {
  res.render('search/results', {
    parks: res.parks,
    facs: res.facs,
    user: res.user,
  });
  // res.json(res.facs)
});

module.exports = router;

