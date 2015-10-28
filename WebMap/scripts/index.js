require(["esri/map", "dojo/domReady!"], function(Map) {
// code to create the map and add a basemap will go here
map = new Map("mapDiv", {
center: [-56.049, 38.485],
zoom: 3,
basemap: "streets"
});

});
