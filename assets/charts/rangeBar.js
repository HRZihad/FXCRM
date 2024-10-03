document.addEventListener("DOMContentLoaded", function () {
  var theme = localStorage.getItem('theme') || 'dark'; // Default to 'dark' if not set

  // Determine colors based on the theme
  var isDarkMode = theme === 'dark';
  var gridColor = isDarkMode ? "#3A3C56" : "#E0E0E0";

  var rangeOptions = {
    chart: {
      type: 'rangeBar',
      height: '100%',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true, // Horizontal bars
        barHeight: '50%',
        borderRadius: 10, 
      },
    },
    colors: ['#9C88FF', '#00A3E0'], // Default bar colors
    xaxis: {
      min: 1,
      max: 10,
      labels: {
        style: {
          colors: '#5B617F', // X-axis label color
        },
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#5B617F', // Y-axis label color
        },
      },
      axisBorder: {
        show: false,
      },
    },
    grid: {
      borderColor: gridColor, // Grid color
    },
    dataLabels: {
      enabled: false, // Hide the data labels on bars
    },
    series: [
      {
        data: [
          {
            x: 'Mon',
            y: [8, 10],
            fillColor: '#5A4AD2', // Color for Monday
          },
          {
            x: 'Tue',
            y: [3, 5],
            fillColor: '#0680DF', // Color for Tuesday
          },
          {
            x: 'Wed',
            y: [4, 6],
            fillColor: '#9276F1', // Color for Wednesday
          },
          {
            x: 'Thu',
            y: [2, 9],
            fillColor: '#9276F1', // Color for Thursday
          },
          {
            x: 'Fri',
            y: [1, 2],
            fillColor: '#0680DF', // Color for Friday
          },
        ],
      },
    ],
    tooltip: {
      theme: 'dark', // Tooltip style
    },
  };

  var chart = new ApexCharts(document.querySelector("#show-rangebar"), rangeOptions);
  chart.render();
});
