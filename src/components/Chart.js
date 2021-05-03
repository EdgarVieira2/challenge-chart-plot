import React from "react";
import ReactApexChart from "react-apexcharts";

//I chose apexchart because it was the one that best suited my project

function LineChart() {
  const series = [
    {
      name: "Linux Chrome Min Response Time",
      data: [0,0.1]
    },
    {
      name: "Linux Chrome Max Response Time",
      data: [1,0.9],
    },
    {
      name: "Mac Chrome Min Response Time",
      data: [0.2,0],
    },
    {
      name: "Mac Chrome Max Response Time",
      data: [1,1.2],
    },
    {
      name: "Linux fireox Min Response Time",
      data: [0,0.4],
    },
    {
      name: "Linux fireox Max Response Time",
      data: [1,1.4],
    },
    {
      name: "Mac fireox Min Response Time",
      data: [0.3,0.2],
    },
    {
      name: "Mac fireox Max Response Time",
      data: [0.9,1.2],
    },
  ];
  
  //I put random Date to complete the graph
  
  const options = {
    dataLabels: {
      enabled: false,
    },
    chart: {
      fontFamily:['Source Sans Pro', 'sans-serif'],
      type: 'line',
    
    },
    markers: {
      size: 7,
    },
    toolbar: {
      show: false,
      offsetX: 0,
      offsetY: 0,
      tools: {
        download: false,
        selection: false,
        zoom: false,
        zoomin: false,
        zoomout: false,
        pan: false,
        
        
      },
    },
    legend: {
      position: 'right',
    },

    colors: ['#6eea8b', '#1c7c4e','#7069d3','#5d36a5',"#62c9e0",'#157ac6',"#e5e516",'#ea8d31'],
     
    stroke: {
      width: 3,
      curve: "straight",
    },
    xaxis: {
      labels: {
        datetimeFormatter: {
          hour: 'HH:mm'
        }
      },
  
      type: "time",
      categories: [
        "00:00",
        "00:01"
      ],
    },
    yaxis: {
      labels: {
        show: false
      },
      min:0,
      max:1.5,
      tickAmount: 5,

      },

   
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
  };

  return (
    <div>
      <br />
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
        width={1000}
      />
      <br />
    </div>
  );
}

export default LineChart;


// {type: 'start', timestamp: 1519862400000, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser']}
// {type: 'span', timestamp: 1519862400000, begin: 1519862400000, end: 1519862460000}
// {type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
// {type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'chrome', min_response_time: 0.2, max_response_time: 1.2}
// {type: 'data', timestamp: 1519862400000, os: 'mac', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.2}
// {type: 'data', timestamp: 1519862400000, os: 'linux', browser: 'firefox', min_response_time: 0.1, max_response_time: 1.0}
// {type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'chrome', min_response_time: 0.2, max_response_time: 0.9}
// {type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.0}
// {type: 'data', timestamp: 1519862460000, os: 'mac', browser: 'firefox', min_response_time: 0.2, max_response_time: 1.1}
// {type: 'data', timestamp: 1519862460000, os: 'linux', browser: 'firefox', min_response_time: 0.3, max_response_time: 1.4}
// {type: 'stop', timestamp: 1519862460000}





