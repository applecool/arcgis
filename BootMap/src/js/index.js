require(["esri/map", "esri/dijit/Scalebar", "application/bootstrapmap", "dojo/domReady!"],
  function(Map, Scalebar, BootstrapMap) {
    // Get a reference to the ArcGIS Map class
    var map = BootstrapMap.create("mapDiv", {
      basemap: "national-geographic",
      center: [-122.45, 37.77],
      zoom: 12,
      scrollWheelZoom: false
    });

    var scalebar = new Scalebar({
      map: map,
      scalebarUnit: "dual"
    });

    $(document).ready(function() {
      $("#basemapList li").click(function(e) {
        switch (e.target.text) {
          case "Streets":
            map.setBasemap("streets");
            break;
          case "Imagery":
            map.setBasemap("hybrid");
            break;
          case "National Geographic":
            map.setBasemap("national-geographic");
            break;
          case "Topographic":
            map.setBasemap("topo");
            break;
          case "Gray":
            map.setBasemap("gray");
            break;
          case "Open Street Map":
            map.setBasemap("osm");
            break;
        }
      });
    });
  });
