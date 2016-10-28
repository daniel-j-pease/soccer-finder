const $ = require('jQuery');

const API_URL = 'https://data.cityofnewyork.us/resource/9wwi-sb8x.json?'
const APP_TOKEN = process.env.APP_TOKEN;

$(document).ready( () => {
  $.ajax({
    url: `${API_URL}`,
    type: 'GET',
    data: {
      $limit: 5000,
      $$app_token: '',
    },
  })
  .done((data) => {
    console.log(data);
  })
});
