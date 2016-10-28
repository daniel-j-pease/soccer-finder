const router = require('express').Router();
const parks = require('./models/parks')

router.get('/', (req, res) => {
  res.render('home', {
    results: res.results || [],
    parks: res.parks || [],
  });
});

module.exports = router;

