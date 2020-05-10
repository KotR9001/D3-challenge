//Define the SVG Height & Width
var svgHeight = 400;
var svgWidth = 800;

//Define the Margin Dimensions
var margin = {
    top: 50,
    left: 150,
    bottom: 50,
    right: 50
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
        .range([chartHeight, 0]);
    console.log(`The healthcare scale is: ${healthcareScale}`);
    //Assign the Data Scales to the Axes
    var xAxis = d3.axisBottom(incomeScale);
    var yAxis = d3.axisLeft(healthcareScale);
    console.log(xAxis);
    console.log(yAxis);

    //Append Groups and Call Axes
    chartGroup.append('g')
        .classed('axis', true)
        .call(yAxis);
    chartGroup.append('g')
        .classed('axis', true)
        .attr('transform', `translate(0, ${chartHeight})`)
        .call(xAxis);

    //Append the Dots to the Chart Group
    //Found Methods at https://www.d3-graph-gallery.com/graph/scatter_basic.html
    //and https://www.dashingd3js.com/svg-text-element
    chartGroup.selectAll('dot')
        .data(wellness)
        .enter()
        .append('circle')
        .attr('cx', d => incomeScale(d.income))
        .attr('cy', d => healthcareScale(d.healthcare))
        .attr('r', 10)
        .style('fill', 'green');

    //Append State Abbreviations Text to the Graph
    chartGroup.selectAll('text')
        .data(wellness)
        .enter()
        .append('text')
        .text(d => d.abbr)
        .attr('x', d => incomeScale(d.income)-5)
        .attr('y', d => healthcareScale(d.healthcare))
        .attr('fill', 'white')
        .attr('font-size', "7px");

    //Append Axis Titles
    //Method to Handle Multiple Transformations Found at https://riptutorial.com/svg/example/11163/multiple-transformations
    chartGroup.append('text')
        .attr('transform', `translate(-50, ${chartHeight/2 + margin.top}) rotate(-90)`)
        .classed('healthcare text', true)
        .text('Lacks Healthcare (%)');
    chartGroup.append('text')
        .attr('transform', `translate(${chartWidth/2}, ${chartHeight + margin.top})`)
        .classed('income text', true)
        .text('Annual Income');
}).catch(function(error) {
    console.log(error);
  });