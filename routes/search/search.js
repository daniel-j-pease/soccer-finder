const router = require('express').Router();
const { getParks } = require('../../services/parks');
const { getFacs } = require('../../services/facs');

router.get('/', getParks, getFacs, (req, res) => {
  res.render('search/search');
  // res.json(res.parks);
  // res.send('yo');
});

module.exports = router;

