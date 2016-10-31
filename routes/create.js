const createRouter = require('express').Router();
const makeGame = require('../models/games');

createRouter.post('/', makeGame.makeGame, (req, res) => {
  // res.render('create');
  // res.redirect('search/results/user');
  res.send('yo');
})

module.exports = createRouter;
