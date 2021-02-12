var myMap = L.map("map", {
    center: [39.0997, -94.5786],
    zoom: 8
});

// Create the base tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "satellite-v10",
    accessToken: API_KEY
}).addTo(myMap);

//   // Initialize all of the LayerGroups we'll be using
// var layers = {
//     Tectonic_Plates: new L.LayerGroup(),
//     Earthquakes: new L.LayerGroup()
//   };

  // URL that holds JSON data
  var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

  // Use D3 to go through the JSON file, and strip out the latitude and longitude 
  // of each earthquake and plot with a marker
  d3.json(url, function(response) {

    // Log the json data
    console.log(response);

    // Create an empty array that will hold the coordinates of earthquakes
    var markers = [];

    // For loop to gather all the coordinates and push onto the empty array of markers
    for (var i = 0; i < response.length; i++) {

        var location = response[i].location;

        if (location) {
            markers.push([location.coordinates[0], location.coordinates[1]]);
        }
  }
   // Add the markers to the map   
  L.marker(markers).addTo(myMap);
});
