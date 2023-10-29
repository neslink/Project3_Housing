// Creating the map object
let myMap = L.map("map2", {
    center: [34.813702929456198, -117.666466304851994],
    zoom: 7
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  // Use this link to get the GeoJSON data.
  let link = "https://gis-calema.opendata.arcgis.com/datasets/59d92c1bf84a438d83f78465dce02c61_0.geojson?outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D";


  // Getting our GeoJSON data
  d3.json(link).then(function(data) {
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data, {style: function(feature){
        return{
            color: "white",
            fillColor: chooseColor(feature.properties.CountyName),
            fillOpacity: 0.5,
            weight: 1.5
        }
    },
    onEachFeature: function (feature, layer) {
        layer.on({
            mouseover: function (event) {
                layer = event.target;
                layer.setStyle({
                    fillOpacity: 0.9
                })
            },
            mouseout: function (event) {
                layer = event.target;
                layer.setStyle({
                    fillOpacity: 0.5
                })
            },
            click: function (event) {
                myMap.fitBounds(event.target.getBounds());
            }
        }); //this is a new layer.
        layer.bindPopup(
            "<h1>" + feature.properties.CountyName + "</h1><h2> " + feature.
            properties.CountyName + "</ > "
        );
    }
    
}).addTo(myMap);
  });
  

  function chooseColor(county){
    if (county == "San Francisco") return "Yellow";
    else if (county == "Bronx") return "red";
    else if (county == "San Mateo") return "orange";
    else if (county == "Marin") return "green";
    else if (county == "Orange") return "purple";
    else if (county == "Monterrey") return "pink";
    else if (county == "Santa Clara") return "blue";
    else if (county == "Los Angeles") return "yellow";
    else if (county == "Alameda") return "brown";
    else if (county == "Napa") return "green";
    else return "black";

  }