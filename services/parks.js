const fetch = require('node-fetch');

// DPR Parks Properties
const API_URL = 'https://data.cityofnewyork.us/resource/p7jc-c8ak.json?';
const APP_TOKEN = process.env.APP_TOKEN;

function getParks(req, res, next) {
  fetch(`${API_URL}$$app_token=${APP_TOKEN}&borough=Q`)
  .then(r => r.json())
  .then((result) => {
    res.parks = result;
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  });
}

module.exports = {
  getParks,
};
