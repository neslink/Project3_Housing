// // Nationwide Homes Sold by Month(2022)

// let usData = HomesSold.find(entry => entry.RegionName === "United States");
// let months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
// let sales2022 = months.map(month => parseFloat(usData[`2022-${month}-31`]));

// let trace = {
//     x: months.map(month => `2022-${month}`),
//     y: sales2022,
//     type: 'bar',
//     name: 'Houses Sold',
//     marker: {
//         color: 'blue'
//     }
// };

// let data = [trace];
// let layout = {
//     title: 'Number of Houses Sold by Month in 2022',
//     xaxis: {
//         title: 'Month'
//     },
//     yaxis: {
//         title: 'Number of Houses Sold'
//     }
// };

// Plotly.newPlot("plot", data, layout);
