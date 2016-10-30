const router = require('express').Router();
const { getParks } = require('../../services/parks');
const { authenticate }   = require('../../lib/auth');
const { getFacs } = require('../../services/facs');

router.get('/', authenticate, getParks, getFacs, (req, res) => {
  res.render('search/in', {
    user: res.user,
  });
});

router.post('/results', getParks, getFacs, (req, res) => {
  res.send('yo')
})

module.exports = router;

