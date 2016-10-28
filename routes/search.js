const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('search', {
    results: res.results || [],
    parks: res.parks || []
  });
});

module.exports = router;

