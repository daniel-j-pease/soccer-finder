const fetch = require('node-fetch');

// DPR Parks Properties
const API_URL = 'https://data.cityofnewyork.us/resource/9wwi-sb8x.json?';
const APP_TOKEN = process.env.APP_TOKEN;

function getFacs(req, res, next) {

  fetch(`${API_URL}$$app_token=${APP_TOKEN}&gispropnum=${req.body.test}`)
  .then(r => r.json())
  .then((result) => {
    res.athfac = result;
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  });
}

module.exports = {
  getFacs,
};
