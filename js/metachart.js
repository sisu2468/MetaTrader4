
// $.get("https://api.twelvedata.com/v2/currencies.json", {
//     "api_key": "81fe018f-bb25-4ad9-abd0-ca2dd884bef2",
//     "data_set": "OANDA"
$.get("https://api.twelvedata.com/time_series?symbol=AAPL,EUR/USD,IXIC&interval=1min&apikey=439b1bae789a4f11bdff7d9e07385aa6", function (data) {
    console.log(data);
});


// console.log('Excel file generated:', filePath);


var chartDom = document.getElementById('brokers');
var myChart = echarts.init(chartDom);
var option;
// Configuration options for the chart
option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    tooltip: { trigger: 'axis' },
    series: [
        {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
        },
        {
            data: [100, 180, 200, 190, 160, 140, 180], // Additional data
            type: 'line'
        }
    ]
};
// Apply the configuration options to the chart
option && myChart.setOption(option);

myChart.setOption(option);
// Function to remove a line when the button is clicked
function removeLine(seriesIndex) {
    // Remove the specified series (line) from the option object
    console.log(option.series[0]);
    option.series.splice(0, 1);

    // Apply the updated option to the chart
    myChart.setOption(option);
}

var chartDom = document.getElementById('broker1');
var myChart = echarts.init(chartDom);
var option;

// Configuration options for the chart
option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    tooltip: { trigger: 'axis' },
    series: [
    {
        data: [15, 20, 324, 118, 35, 107, 460],
        type: 'line',
        areaStyle: {
            color: 'rgba(0, 128, 0, 0.3)' // Set the color of the area underline line
        },
        // You can also customize the line style if needed
        lineStyle: {
            color: 'green' // Set the color of the line
        }
    }]
};
// Apply the configuration options to the chart
option && myChart.setOption(option);