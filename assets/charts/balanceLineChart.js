document.addEventListener("DOMContentLoaded", function () {
  var theme = localStorage.getItem('theme') || 'dark'; // Default to 'light' if not set

  // Determine colors based on the theme
  var isDarkMode = theme === 'dark';
  var borderColor = isDarkMode ? "#1F2336" : '#E0E0E0'; 
  var options = {
    series: [{
    name: 'Peter',
    data: [5,  10, 10, 7, 8, 6, 9]
  }, {
    name: 'Johnny',
    data: [2, 15,  10, 12, 15, 12, 14,]
  }, ],
    chart: {
    height: "100",
    type: 'line',
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false, 
    },
    animations: {
      enabled: false
    },
    offsetX: 0, 
    offsetY: 0,
  },
  legend: {
    show: false
  },
  stroke: {
    width: [3,3],
    curve: 'smooth'
  },
  tooltip: {
    enabled: false,
  },
  yaxis: {
   
    labels: {
      show: false, // Hides x-axis text labels
    },
    axisBorder: {
      show: true,
      color: borderColor,
    },
    axisTicks: {
      show: false, // Hides the y-axis ticks
    },
  },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17,18, 19,20,21,22,23,24,25,26,27,28,29,30,31],
  
  xaxis: {
    labels: {
      show: false, // Hides x-axis text labels
    },
    axisBorder: {
      show: true, // show the x-axis border/line
      color: borderColor
    },
    axisTicks: {
      show: false, // Hides the y-axis ticks
    },
  },
  grid: {
    show: false,
  }
  };

  var chart = new ApexCharts(document.querySelector("#balance-chart"), options);
  chart.render();

});