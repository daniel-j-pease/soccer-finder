const router = require('express').Router();
const { getParks } = require('../services/parks')

router.get('/', getParks, (req, res) => {
  // res.render('search', {
  //   results: res.results || [],
  //   parks: res.parks || [],
  // });
  res.json(res.parks);
});

module.exports = router;

