//Define the SVG Height & Width
var svgHeight = 400;
var svgWidth = 400;

//Define the Margin Dimensions
var margin = {
    top: 10,
    left: 10,
    bottom: 10,
    right: 10
};

//Define the Chart Dimensions
var chartHeight = svgHeight - margin.top - margin.bottom;
var chartWidth = svgWidth - margin.left - margin.right;

//Create the SVG Element
var svg = d3.select('body')
    .append('svg')
    .attr('height', svgHeight)
    .attr('width', svgWidth);

//Create the Chart Group
var chartGroup = svg.append('g')
    .attr("transform", `translate(${margin.left}, ${margin.top})`);


//Read in the Data from the CSV File
d3.csv('./assets/data/data.csv').then(function(wellness) {

    //Check to Make Sure the Data got Loaded
    console.log(wellness);

    //Convert the Data into the Appropriate Data Types
    wellness.forEach(function(data) {
        data.id = +data.id;
        data.poverty = +data.poverty;
        data.povertyMoe = +data.povertyMoe;
        data.age = +data.age;
        data.ageMoe = +data.ageMoe;
        data.income = +data.income;
        data.incomeMoe = +data.incomeMoe;
        data.healthcare = +data.healthcare;
        data.healthcareLow = +data.healthcareLow;
        data.healthcareHigh = +data.healthcareHigh;
        data.obesity = data.obesity;
        data.obesityLow = +data.obesityLow;
        data.obesityHigh = +data.obesityHigh;
        data.smokes = +data.smokes;
        data.smokesLow = +data.smokesLow;
        data.smokesHigh = +data.smokesHigh;
        console.log(`The ids are: ${data.id}`);
        console.log(`The ages are: ${data.age}`);
        console.log(`The incomes are: ${data.income}`);
        console.log(`The healthcare absence percentages are: ${data.healthcare}`);
    });

    //Create Scaling Functions for Each KPI
    var idScale = d3.scaleLinear()
        .domain(d3.extent(wellness, data => data.id))
        .range([0, chartWidth]);
    console.log(`The id scale is: ${idScale}`);
    var povertyScale = d3.scaleLinear()
        .domain(d3.extent(wellness, data => data.poverty))
        .range([0, chartWidth]);
    console.log(`The poverty scale is: ${povertyScale}`);
    var incomeScale = d3.scaleLinear()
        .domain(d3.extent(wellness, data => data.income))
        .range([0, chartWidth]);
    console.log(`The income scale is: ${incomeScale}`);
    var healthcareScale = d3.scaleLinear()
        .domain(d3.extent(wellness, data => data.healthcare))
        .range([0, chartHeight]);
    console.log(`The healthcare scale is: ${healthcareScale}`);
    //Assign the Data Scales to the Axes
    var xAxis = d3.axisBottom(incomeScale);
    var yAxis = d3.axisLeft(healthcareScale);
    console.log(xAxis);
    console.log(yAxis);
    var dataLine = d3.line()
        .x(wellness, d => xAxis(d.income))
        .y(wellness, d => yAxis(d.healthcare));
    console.log(`The data line is: ${dataLine}`);
    //Append the Line to the Chart Group
    chartGroup.append('path')
        .attr('stroke', 'green')
        .attr('stroke-width', 5)
        .attr('fill', 'none')
        .attr('d', dataLine(wellness));
}).catch(function(error) {
    console.log(error);
  });