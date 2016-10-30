const router = require('express').Router();
const { getParks } = require('../../services/parks');
const { getFacs } = require('../../services/facs');

router.get('/', getParks, getFacs, (req, res) => {
  res.render('search/guest');
  // res.json(res.parks);
  // res.send('yo');
});

router.post('/', getParks, getFacs, (req, res) => {
  res.render('search/results/guest', {
    parks: res.parks,
    facs: res.facs,
  });
});

module.exports = router;

