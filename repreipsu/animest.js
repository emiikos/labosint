const data = [
    {x: 10, y: 20},
    {x: 30, y: 50},
    {x: 40, y: 70}
];

const svg = d3.select("svg");
const margin = 50;
const width = svg.attr("width") - 2 * margin;
const height = svg.attr("height") - 2 * margin;

const xScale = d3.scaleLinear()
    .domain([0, 50])
    .range([0, width]);

const yScale = d3.scaleLinear()
    .domain([0, 100])
    .range([height, 0]);

const chart = svg.append('g')
    .attr('transform', `translate(${margin}, ${margin})`);

chart.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', d => xScale(d.x))
    .attr('cy', d => yScale(d.y))
    .attr('r', 5);
