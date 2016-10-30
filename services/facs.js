const fetch = require('node-fetch');

// DPR Athletic Facilities
const API_URL = 'https://data.cityofnewyork.us/resource/9wwi-sb8x.json?';
const APP_TOKEN = process.env.APP_TOKEN;

function getFacs(req, res, next) {
  console.log('getting facs');
  fetch(`${API_URL}$$app_token=${APP_TOKEN}&borough=${req.body.borough}`)
  .then(r => r.json())
  .then((result) => {
    res.facs = result;
    console.log(res.facs[0])
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
