const fetch = require('node-fetch');

// NYC Open Data Parks Properties
const API_URL = 'https://data.cityofnewyork.us/resource/p7jc-c8ak.json?';
const APP_TOKEN = process.env.APP_TOKEN;

function getParks(req, res, next) {
  console.log('getting parks');
  const rb = req.body;
  let qs = '';
  //build query
  if (rb.borough) qs += `&borough=${rb.borough}`;
  if (rb.zipcode) qs += `&zipcode=${rb.zipcode}`;
  fetch(`${API_URL}$$app_token=${APP_TOKEN}&${qs}`)
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
