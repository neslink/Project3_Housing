// // Inflatin vs Mortagage Rate 

// let years = ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"];
// let inflationRates = [1.5, 1.6, 0.1, 1.3, 2.1, 2.4, 1.8, 1.3, 4.7, 8.0, 4.1];
// let mortgageRates = [3.98, 4.17, 3.85, 3.65, 3.99, 4.54, 3.94, 3.11, 2.96, 5.34, 6.68];

// let trace1 = {
//     x: years,
//     y: inflationRates,
//     type: "scatter",
//     mode: "lines+markers",
//     name: "Inflation Rate",
//     line: {color: "blue"}
// };

// let trace2 = {
//     x: years,
//     y: mortgageRates,
//     type: "scatter",
//     mode: "lines+markers",
//     name: "Mortgage Rate",
//     line: {color: "red"}
// };

// let data = [trace1, trace2];
// let layout = {
//     title: "Inflation Rate vs Mortgage Rate (2013-2023)",
//     xaxis: {
//         title: "Year"
//     },
//     yaxis: {
//         title: "Percentage %"
//     },
//     margin: {
//          l: 50,
//          r: 50,
//          b: 200,
//          t: 50,
//          pad: 7
//     }
// }
// Plotly.newPlot("plot", data, layout);








// // Number of Homes Sold

let usData = HomesSold.find(entry => entry.RegionName === "United States");
let months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
let daysInMonth = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];

let sales2022 = months.map((month, index) => parseFloat(usData[`2022-${month}-${daysInMonth[index]}`]));

let trace = {
    x: months.map(month => `2022-${month}`),
    y: sales2022,
    type: 'bar',
    name: 'Houses Sold',
    marker: {
        color: 'navy'
    }
};

let data = [trace];
let layout = {
    title: 'Number of Homes Sold by Month in 2022',
    xaxis: {
        title: 'Months',
        tickangle: 45,
        nticks: 12
    },
    yaxis: {
        title: 'Homes Sold'
    },
    margin: {
        l: 80,
        r: 70,
        b: 200,
        t: 50,
        pad: 7
    },
    bargap: 0.5
};

Plotly.newPlot("plot", data, layout);



