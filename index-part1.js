/*
  Step 1: Review the "simple map" example in the Google API Docs here:
          https://developers.google.com/maps/documentation/javascript/tutorial
  Step 2: Discuss why we are making a separate JS file as opposed to using an inline script tag.
  Step 3: Explain new google.maps.Map (Map class is built into Google Maps API) and we create a new instance.
  Step 4: Discuss parameters passed in when creating Map instance -- params are the map div we created and a JSON object.
          Maybe draw out the JSON object on the board.
  Step 5: Look up lat and long for our GWC classroom and update map to use it.
  Step 6: Go through "simple map" doc on Google API (see above) to understand/tweak zoom etc.
*/
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
