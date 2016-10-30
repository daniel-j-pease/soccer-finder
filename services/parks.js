const fetch = require('node-fetch');

// DPR Parks Properties
const API_URL = 'https://data.cityofnewyork.us/resource/p7jc-c8ak.json?';
const APP_TOKEN = process.env.APP_TOKEN;

function getParks(req, res, next) {

  console.log('getting parks');
  const rb = req.body;
  let qs = '';
  if (rb.borough) qs += `&borough=${rb.borough}`;
  if (rb.zipcode) qs += `&zipcode=${rb.zipcode}`;

  console.log(qs)

  fetch(`${API_URL}$$app_token=${APP_TOKEN}&${qs}`)
  .then(r => r.json())
  .then((result) => {
    res.parks = result;
    console.log(res.parks[0])
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
