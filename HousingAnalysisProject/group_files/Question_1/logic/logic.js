// Homes Sold (2018 to 2023) - Line
let homeData = HomesSold[0];
let homeDates = [];
let values = [];

for (let key in homeData) {
    let year = key.split("-")[0];
    if (year >= "2018" && year <= "2023") {
        homeDates.push(key);
        values.push(parseFloat(homeData[key]));
    }
}

let graph1 = {
    x: homeDates,
    y: values,
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Homes Sold',
    marker: {
        color: 'rgb(158,202,225)'
    }
};

let data2 = [graph1];

let layout2 = {
    title: 'Homes Sold in the United States',
    xaxis: {
        title: 'Years',
        type: 'date'
    },
    yaxis: {
        title: 'Number of Homes Sold' 
    },
    plot_bgcolor: 'transparent',      
    paper_bgcolor: 'transparent',     
    margin: {                         
        l: 50,
        r: 40,
        b: 50,
        t: 50,
        pad: 4
    },
    bordercolor: 'transparent',
    width: 700,  
    height: 330,  
};
Plotly.newPlot("soldline", data2, layout2);


// Mortgage Rate (2018-2023)
let mortgagedates = [];
let mortgagesrates = [];

for (let entry of MortgageRate) {
    let year = entry["DATE"].split("-")[0];
    if (year >= "2018" && year <= "2023") {
        mortgagedates.push(entry["DATE"]);
        mortgagesrates.push(parseFloat(entry["30 YR FRM"]));
    }
}

let graph2 = {
    x: mortgagedates,
    y: mortgagesrates,
    type: 'scatter',
    mode: 'line',
    name: '30 YR FRM',
    marker: {
        color: 'rgba(222,45,38,0.8)'
    }
};

let data3 = [graph2];

let layout3 = {
    title: 'Mortgage Rate - 30 Year Fixed (2018-2023)',
    xaxis: {
        title: 'Years',
        type: 'date'
    },
    yaxis: {
        title: 'Rate %'
    },
    plot_bgcolor: 'transparent',      
    paper_bgcolor: 'transparent',     
    margin: {                         
        l: 50,
        r: 40,
        b: 50,
        t: 80,
        pad: 4
    },
    bordercolor: 'transparent',
    width: 700,  
    height: 340,  
};

Plotly.newPlot("fixedrate", data3, layout3);









// Homes Sold Monthly(2022) 

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
        color: 'rgb(204,204,204)'
    }
};

let data1 = [trace];
let layout1 = {
    title: 'Homes Sold by Month',
    xaxis: {
        title: 'Months',
        tickangle: 45,
        nticks: 12
    },
    yaxis: {
        title: 'Homes Sold'
    },
    plot_bgcolor: 'transparent',      
    paper_bgcolor: 'transparent',     
    margin: {  
        l: 75,
        r: 20,
        b: 70,
        t: 80,
        pad: 4
    },
    bordercolor: 'transparent',
    width: 700,  
    height: 350, 
    bargap: 0.5
};

Plotly.newPlot("plot2", data1, layout1);




// Inflatin vs Mortagage Rate

let years = ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"];
let inflationRates = [1.5, 1.6, 0.1, 1.3, 2.1, 2.4, 1.8, 1.3, 4.7, 8.0, 4.1];
let mortgageRates = [3.98, 4.17, 3.85, 3.65, 3.99, 4.54, 3.94, 3.11, 2.96, 5.34, 6.68];

let trace1 = {
    x: years,
    y: inflationRates,
    type: "scatter",
    mode: "lines+markers",
    name: "Inflation Rate",
    line: {color: "rgba(55,128,191,0.7)"}
};

let trace2 = {
    x: years,
    y: mortgageRates,
    type: "scatter",
    mode: "lines+markers",
    name: "Mortgage Rate",
    line: {color: "rgba(222,45,38,0.8)"}
};

let data = [trace1, trace2];
let layout = {
    title: "Inflation Rate vs Mortgage Rate",
    xaxis: {
        title: "Years"
    },
    yaxis: {
        title: "Rate %"
    },
    plot_bgcolor: 'transparent',      
    paper_bgcolor: 'transparent',     
    margin: {  
        l: 65,
        r: 20,
        b: 55,
        t: 80,
        pad: 4
    },
    bordercolor: 'transparent',
    width: 730,  
    height: 350, 
    bargap: 0.5
}
Plotly.newPlot("inflationvsmortgage", data, layout);

