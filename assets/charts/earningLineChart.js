document.addEventListener("DOMContentLoaded", function () {
  var theme = localStorage.getItem('theme') || 'dark'; // Default to 'light' if not set

  // Determine colors based on the theme
  var isDarkMode = theme === 'dark';
  var borderColor = isDarkMode ? "#1F2336" : '#E0E0E0'; 
  
  var earningAmnt = {
    series: [
      {
        name: "Desktops",
        data: [0, 50, 30, 80, 60, 100, 60],
      },
    ],
    chart: {
      height: "100%",
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      colors: ["#5A4AD2"],
      width: 2,
    },

    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ["Mon", "tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        style: {
          colors: "#9297A1", // Label color
        },
      },
      axisBorder: {
        show: true,
        color: borderColor,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: true,
        color: borderColor,
      },
    },
    grid: {
      show: false,
    },
  };

  var chart = new ApexCharts(
    document.querySelector("#show_e-graph"),
    earningAmnt
  );
  chart.render();
});
