// Create the tile layer that will be the background of our map
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.light",
  accessToken: API_KEY
});



// Initialize all of the LayerGroups we'll be using
var layers = {
 
};

// Create the map with our layers
var map = L.map("map-id", {
  center: [0, -0],
  zoom: 2,

});

// Add our 'lightmap' tile layer to the map
lightmap.addTo(map);

// Create an overlays object to add to the layer control
var overlays = {
  
};



// Create a legend to display information about our map
var info = L.control({
  position: "bottomright"
});

// When the layer control is added, insert a div with the class of "legend"
info.onAdd = function() {
  var div = L.DomUtil.create("div", "legend");
  return div;
};
// Add the info legend to the map
info.addTo(map);

L.circle([100 , 100], 10000).addTo(map);
 d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson", function(feat) {
    // var updatedAt = infoRes.last_updated;
    // var stationStatus = statusRes.data.stations;
    // var stationInfo = infoRes.data.stations;
    console.log(feat)
 
 
for (x in feat.features){
  xx = feat.features[x].geometry
  var lon = xx.coordinates[0]
  var lat = xx.coordinates[1]
  popUpInfo = String(" <BR> Place: " + feat.features[x].properties.place + "<br> Latitude: "+lat +"<BR> Longitude: "+lon + " <BR> Magnitude: " + feat.features[x].properties.mag )
  console.log(popUpInfo)
  maggie = feat.features[x].properties.mag
  console.log(maggie)
 // colorcircu = maggie* 25
  console.log(lat)
  console.log(lon)
  //console.log(Math.round(feat.features[x].properties.mag **7))
  console.log("---------------")
  L.circle([lat,lon], Math.round((feat.features[x].properties.mag **3.2 )*1000), {color: 'red', opacity:maggie/10} ).bindPopup(popUpInfo).addTo(map);
}
 
  })

  // addLegend('bottomright', pal = 15, values = last$BeatHomeLvl,
  //           title = 'Compare Home<br>Quote Count to<br>3Mos State Avg',
  //           opacity = 1)


  var attrOptions = {
    prefix: 'attribution sample'
 };
 
 // Creating an attribution
 var attr = L.control.attribution(attrOptions);
 attr.addTo(map)
