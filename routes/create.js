const createRouter = require('express').Router();

createRouter.get('/', (req, res) => {
  res.render('create');
})

module.exports = createRouter;
