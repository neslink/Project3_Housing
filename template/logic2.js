let myMap = L.map("map", {
    center: [40.7128, -95.0059],
    zoom: 4
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

  let mapStyle = {
    color: "brown",
    fillColor: "pink",
    fillOpacity: 0.3,
    weight: 1.5
  }
  
  

  // var layerGroup = L.layerGroup().addTo(myMap);
  // var slider = document.getElementById("myRange");
  // var output = document.getElementById("demo");
  // output.innerHTML = slider.value;
  // slider.oninput = function () {
  //   output.innerHTML = values2[this.value];
  //   let dat = values2[this.value];
  //   layerGroup.clearLayers()
    
  //   // Getting our GeoJSON data
  //   d3.json("data/States.json").then(function (data) {
  //     d3.json("data/clean_state_house_pricing.json").then(function (states) {
  //       L.geoJson(data, {
  //         style: function (feature) {
  //           return {
  //             color: "black",
  //             fillColor: chooseColor(feature.properties.NAME),
  //             fillOpacity: 0.5,
  //             weight: 1.5
  //           }
  //         },


  //         onEachFeature: function (feature, layer) {
  //           let state = feature.properties.NAME;
  //           let money = states[state][dat]
  //           if (money == 0){
  //             money = "Undocumented"
  //           }
  //           layer.on({
  //             mouseover: function (event) {
  //               layer = event.target;
  //               layer.setStyle({
  //                 fillOpacity: 0.9
  //               })
  //             },


  //             mouseout: function (event) {
  //               layer = event.target;
  //               layer.setStyle({
  //                 fillOpacity: 0.5
  //               })
  //             },


  //             click: function (event) {
  //               myMap.fitBounds(event.target.getBounds());
  //             }
  //           });


  //           layer.bindPopup(
  //             "<h1>" + state + "</h1>" +
  //             "<h2>The average home price is $" + money + " in " + [dat] + "</h2>"
  //           );
  //           //  console.log(states[state][dat]);
  //         }
  //       }).addTo(layerGroup);
  //       console.log(states);



  //       function chooseColor(arg) {
  //         let prices = []
  //         let places = ['California', 'Texas', 'Florida', 'New York', 'Pennsylvania', 'Illinois', 'Ohio',
  //           'Georgia', 'North Carolina', 'Michigan', 'New Jersey', 'Virginia', 'Washington', 'Arizona',
  //           'Massachusetts', 'Tennessee', 'Indiana', 'Maryland', 'Missouri', 'Wisconsin', 'Colorado',
  //           'Minnesota', 'South Carolina', 'Alabama', 'Louisiana', 'Kentucky', 'Oregon', 'Oklahoma',
  //           'Connecticut', 'Utah', 'Iowa', 'Nevada', 'Arkansas', 'Mississippi', 'Kansas', 'New Mexico',
  //           'Nebraska', 'Idaho', 'West Virginia', 'Hawaii', 'New Hampshire', 'Maine', 'Rhode Island',
  //           'Montana', 'Delaware', 'South Dakota', 'North Dakota', 'Alaska', 'District of Columbia', 'Vermont',
  //           'Wyoming']


  //         for (i = 0; i < 51; i++) {
  //           prices.push(states[places[i]][dat]);
  //           prices.sort(function (a, b) { return a - b });
  //         }


  //         B = d3.quantile(prices, 0.25);
  //         C = d3.quantile(prices, 0.5);
  //         D = d3.quantile(prices, 0.75);


  //         if (states[arg][dat] > D) return "green";
  //         else if (states[arg][dat] > C) return "yellow";
  //         else if (states[arg][dat] > B) return "orange";
  //         else return "red";
  //       }
  //     })
  //   })
  // };
  // const values2 = ['Jan2000', 'Feb2000', 'Mar2000', 'apr2000', 'May2000', 'Jun2000',
  //   'Jul2000', 'Aug2000', 'Sep2000', 'Oct2000', 'Nov2000', 'Dec2000', 'Jan2001',
  //   'Feb2001', 'Mar2001', 'apr2001', 'May2001', 'Jun2001', 'Jul2001', 'Aug2001', 'Sep2001',
  //   'Oct2001', 'Nov2001', 'Dec2001', 'Jan2002', 'Feb2002', 'Mar2002', 'apr2002', 'May2002',
  //   'Jun2002', 'Jul2002', 'Aug2002', 'Sep2002', 'Oct2002', 'Nov2002', 'Dec2002', 'Jan2003',
  //   'Feb2003', 'Mar2003', 'apr2003', 'May2003', 'Jun2003', 'Jul2003', 'Aug2003', 'Sep2003', 'Oct2003',
  //   'Nov2003', 'Dec2003', 'Jan2004', 'Feb2004', 'Mar2004', 'apr2004', 'May2004', 'Jun2004',
  //   'Jul2004', 'Aug2004', 'Sep2004', 'Oct2004', 'Nov2004', 'Dec2004', 'Jan2005', 'Feb2005',
  //   'Mar2005', 'apr2005', 'May2005', 'Jun2005', 'Jul2005', 'Aug2005', 'Sep2005', 'Oct2005',
  //   'Nov2005', 'Dec2005', 'Jan2006', 'Feb2006', 'Mar2006', 'apr2006', 'May2006', 'Jun2006',
  //   'Jul2006', 'Aug2006', 'Sep2006', 'Oct2006', 'Nov2006', 'Dec2006', 'Jan2007', 'Feb2007',
  //   'Mar2007', 'apr2007', 'May2007', 'Jun2007', 'Jul2007', 'Aug2007', 'Sep2007', 'Oct2007',
  //   'Nov2007', 'Dec2007', 'Jan2008', 'Feb2008', 'Mar2008', 'apr2008', 'May2008', 'Jun2008',
  //   'Jul2008', 'Aug2008', 'Sep2008', 'Oct2008', 'Nov2008', 'Dec2008', 'Jan2009', 'Feb2009',
  //   'Mar2009', 'apr2009', 'May2009', 'Jun2009', 'Jul2009', 'Aug2009', 'Sep2009', 'Oct2009',
  //   'Nov2009', 'Dec2009', 'Jan2010', 'Feb2010', 'Mar2010', 'apr2010', 'May2010', 'Jun2010',
  //   'Jul2010', 'Aug2010', 'Sep2010', 'Oct2010', 'Nov2010', 'Dec2010', 'Jan2011', 'Feb2011',
  //   'Mar2011', 'apr2011', 'May2011', 'Jun2011', 'Jul2011', 'Aug2011', 'Sep2011', 'Oct2011',
  //   'Nov2011', 'Dec2011', 'Jan2012', 'Feb2012', 'Mar2012', 'apr2012', 'May2012', 'Jun2012',
  //   'Jul2012', 'Aug2012', 'Sep2012', 'Oct2012', 'Nov2012', 'Dec2012', 'Jan2013', 'Feb2013',
  //   'Mar2013', 'apr2013', 'May2013', 'Jun2013', 'Jul2013', 'Aug2013', 'Sep2013', 'Oct2013',
  //   'Nov2013', 'Dec2013', 'Jan2014', 'Feb2014', 'Mar2014', 'apr2014', 'May2014', 'Jun2014',
  //   'Jul2014', 'Aug2014', 'Sep2014', 'Oct2014', 'Nov2014', 'Dec2014', 'Jan2015', 'Feb2015',
  //   'Mar2015', 'apr2015', 'May2015', 'Jun2015', 'Jul2015', 'Aug2015', 'Sep2015', 'Oct2015',
  //   'Nov2015', 'Dec2015', 'Jan2016', 'Feb2016', 'Mar2016', 'apr2016', 'May2016', 'Jun2016',
  //   'Jul2016', 'Aug2016', 'Sep2016', 'Oct2016', 'Nov2016', 'Dec2016', 'Jan2017', 'Feb2017',
  //   'Mar2017', 'apr2017', 'May2017', 'Jun2017', 'Jul2017', 'Aug2017', 'Sep2017', 'Oct2017',
  //   'Nov2017', 'Dec2017', 'Jan2018', 'Feb2018', 'Mar2018', 'apr2018', 'May2018', 'Jun2018',
  //   'Jul2018', 'Aug2018', 'Sep2018', 'Oct2018', 'Nov2018', 'Dec2018', 'Jan2019', 'Feb2019',
  //   'Mar2019', 'apr2019', 'May2019', 'Jun2019', 'Jul2019', 'Aug2019', 'Sep2019', 'Oct2019',
  //   'Nov2019', 'Dec2019', 'Jan2020', 'Feb2020', 'Mar2020', 'apr2020', 'May2020', 'Jun2020',
  //   'Jul2020', 'Aug2020', 'Sep2020', 'Oct2020', 'Nov2020', 'Dec2020', 'Jan2021', 'Feb2021',
  //   'Mar2021', 'apr2021', 'May2021', 'Jun2021', 'Jul2021', 'Aug2021', 'Sep2021', 'Oct2021',
  //   'Nov2021', 'Dec2021', 'Jan2022', 'Feb2022', 'Mar2022', 'apr2022', 'May2022', 'Jun2022',
  //   'Jul2022', 'Aug2022', 'Sep2022', 'Oct2022', 'Nov2022', 'Dec2022', 'Jan2023', 'Feb2023',
  //   'Mar2023', 'apr2023', 'May2023', 'Jun2023', 'Jul2023', 'Aug2023', 'Sep2023'];
  