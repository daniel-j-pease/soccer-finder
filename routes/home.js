const homeRouter = require('express').Router();

homeRouter.get('/', (req, res) => {
  res.render('home');
});

homeRouter.get('/signup', (req, res) => {
  res.render('signup');
});

homeRouter.get('/login', (req, res) => {
  res.render('login');
});

module.exports = homeRouter;

