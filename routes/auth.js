const express    = require('express');
const { logIn }  = require('../lib/auth');

const authRouter = express.Router();

 //authenticate user and upon success redirect to searchpage
authRouter.post('/', logIn, (req, res) => {
  res.redirect('/userSearch');
});

// Logout by assigning null to the userId in the session
// Thanks Rafael Pacas!
authRouter.delete('/', (req, res) => {
  req.session.userId = null;
  res.redirect('/');
});

module.exports = authRouter;
