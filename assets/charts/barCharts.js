document.addEventListener("DOMContentLoaded", function () {
  var barChart = {
    series: [
      {
        name: "Inflation",
        data: [
          {
            x: "Jan",
            y: 50,
            fillColor: "#966bcf", // Bar 1 color
          },
          {
            x: "Feb",
            y: 70,
            fillColor: "#966bcf", // Bar 2 color
          },
          {
            x: "Mar",
            y: 100,
            fillColor: "#3380FF", // Bar 3 color
          },
          {
            x: "April",
            y: 60,
            fillColor: "#966bcf", // Bar 4 color
          },
        ],
      },
    ],
    chart: {
      height: 110,
      width: 120,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10, // Set the radius for top corners
        borderRadiusApplication: 'end', // Round only the top
        borderRadiusWhenStacked: 'all',
        dataLabels: {
          position: "top", // Set data labels position
        },
      },
    },
    
    dataLabels: {
      enabled: false,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "April"], // Labels for bars
      position: "top",
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    yaxis: {
      min: 0,
      max: 100,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        },
      },
    },
  };

  var chart = new ApexCharts(document.querySelector("#bar-chart"), barChart);
  chart.render();
});
