const L = require('leaflet');
const csv = require('csvtojson');

const map = L.map('map').setView([37.88, -122.23], 5);

// Add a base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const housingLayer = L.layerGroup().addTo(map);

// let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//   attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
// });

// Load CSV data
csv()
    .fromFile('housing.csv')
    .then((data) => {
        data.forEach((row) => {
            // Extract latitude, longitude, and price from the CSV data
            const lat = parseFloat(row.lat);
            const lng = parseFloat(row.lng);
            const price = parseFloat(row.price);

            // Create a marker for each data point
            const marker = L.marker([lat, lng]).addTo(housingLayer);

            // Customize the marker based on the price (you can adjust this to fit your data)
            marker.bindPopup(`Price: $${price}`);
        });
    });

// Define base maps and overlay maps
const baseMaps = {
    'OpenStreetMap': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    })
};

const overlayMaps = {
    'Housing Data': housingLayer
};

// Add layer control to switch between base and overlay maps
L.control.layers(baseMaps, overlayMaps).addTo(map);
