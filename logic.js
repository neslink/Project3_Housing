
// let myMap = L.map("map", {
//     center: [40.7, -73.95],
//     zoom: 11
// });

// Adding the tile layer
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(myMap);

// stores the url from which the code scraps the lat and longitude of each region
latAndLonURL = 'https://www.openstreetmap.org/#map=5/38.152/-102.524'

//gets region name and countyname from clean state house pricing json and stores them into variables
var regionNameVar = "RegionName";
var countyNameVar = "CountyName";

let queryKey = housing_pricing_clean[regionNameVar, countyNameVar];

  metroArray = []

  //test calls the setLonAndLat function to see if its working
  function testCall(paramOne, paramTwo)
  {
    let innerVar = paramOne;
    let innerVarTwo = paramTwo;
    setLonAndLat(innerVar, innerVarTwo);
     console.log(innerVar, innerVarTwo);
  }
  
  //sets the region and county name to a array
  function setLonAndLat(queryKey)
  {   
       metroArray = [queryKey];
      // return metroArray;
       console.log(metroArray);
  
  }
// // query = regionNameVar + countyNameVar;

// housingDataArray = housingDataLoop,

// //for(let i = 0; i < data.length; i++){

// d3.json(url).then(function(response){

//      let markers = L.markerClusterGroup();

//     for(let i = 0; i <response.length; i++ ){

//         let location = response[i].location; // response[0]

//            if (location){
//             markers.addLayer(L.marker([RegionName[1], RegionName[0]]).bindPopup(response[i].descriptor));
//         }
//      }

//      myMap.addLayer(markers);

//  })
// }
// );


// function createFeatures(earthquakeData) {
    
//   function onEachFeature(feature, layer) {
//       layer.bindPopup(`<h3>${feature.properties.place}</h3>  <p>  ${new Date(feature.properties.time)} </p>`)
//   }


//   let earthquakes = L.geoJSON(earthquakeData, {
//       onEachFeature: onEachFeature
//   });

//   createMap(earthquakes);

// }



// function createMap(earthquakesLayer) {


//   let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   })

//   let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//       attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
//   });

//   let baseMaps = {
//     Street: street,
//     Topograhpy: topo
// }
// let overlayMaps = {
//     Earthquakes: earthquakesLayer
// }
// let map = L.map("map", {
//     center: [37.71, 2.2137],
//     zoom: 6,
//     layers: [street, earthquakesLayer]
// })

// }

// function getLonAndLat(setLonAndLat){
//   d3.json(latAndLonURL).then(function(data)
//   {
//   for k,v in metroArray{
//     console.log(k,v)
//   }

// }



// let cityMarker = [];
// let stateMarker = [];

//39.708378, -91.358482



//Marion County
//39.744141, -91.480247
// for (let i = 0; i < locations.length; i++){

//     let location = locations[i];


//     cityMarker.push(
//         L.circle(countyName,
//             {
//                 radius:Math.sqrt(location.city.population)*50,
//                 fillColor : "blue",
//                 fillOpacity : 0.2,
//                 color : "blue"
//             }))

//     stateMarker.push(
//         L.circle(location.coordinates,
//             {
//                 radius:Math.sqrt(location.state.population)*50,
//                 fillColor : "red",
//                 fillOpacity : 0.2,
//                 color : "red"
//             })


//     );
// }

// let cityLayer = L.layerGroup(cityMarker);
// let stateLayer = L.layerGroup(stateMarker);

// let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// })
// let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//   attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
// });

