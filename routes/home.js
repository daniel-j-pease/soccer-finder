const homeRouter = require('express').Router();

//homepage
homeRouter.get('/', (req, res) => {
  res.render('home');
});

//signup
homeRouter.get('/signup', (req, res) => {
  res.render('signup');
});

//login
homeRouter.get('/login', (req, res) => {
  res.render('login');
});

module.exports = homeRouter;

