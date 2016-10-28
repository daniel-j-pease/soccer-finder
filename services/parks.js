const $ = require('jQuery');

$(document).ready( () => {
  $.ajax({
    url: 'https://data.cityofnewyork.us/resource/9wwi-sb8x.json',
    type: 'GET',
    data: {
      $limit: 5000,
      $$app_token: 'JeDqnn45DUDxmyCHvv7QE2VvC',
    },
  })
  .done((data) => {
    console.log(data);
  })
});
