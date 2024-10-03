document.addEventListener("DOMContentLoaded", function () {
  var theme = localStorage.getItem("theme") || "dark"; // Default to 'light' if not set

  // Determine colors based on the theme
  var isDarkMode = theme === "dark";
  var borderColor = isDarkMode ? "#1F2336" : "#E0E0E0";

  var options = {
    series: [
      {
        name: "Network",
        data: [
          { x: "1", y: 0, color: "red" },
          { x: "2", y: 10, color: "red" },
          { x: "3", y: 20, color: "green" },
          { x: "4", y: 70, color: "green" },
        ],
      },
    ],
    chart: {
      type: "area",
      width: "100%",
      height: "100%", // Adjust width if needed
      animations: {
        enabled: false,
      },
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false, // Disable the toolbar (menu bar)
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["#9276F1"],
      width: 2,
    },
    fill: {
      opacity: 1,
      type: "solid",
      colors: ["#524892"],
    },
    markers: {
      size: 3,
      hover: {
        size: 5,
      },
      colors: ["#9276F1"],
      strokeColor: "transparent", // Removes the border
      strokeWidth: 0, // Ensures no border width
    },

    tooltip: {
      enabled: false,
    },
    xaxis: {
      labels: {
        show: true, // Show x-axis text labels
        style: {
          color: "#9297A1", // Set font color for y-axis labels
        },
      },
      axisBorder: {
        show: false, // Hides the x-axis border/line
      },
      axisTicks: {
        show: false, // Hides the x-axis ticks
      },
    },

    yaxis: {
      min: 0,
      max: 70,
      tickAmount: 7,
      labels: {
        show: true, // Show y-axis text labels
        style: {
          color: "#9297A1", // Set font color for y-axis labels
        },
      },
      axisBorder: {
        show: true, // Show the y-axis border
        color: borderColor, // Change the y-axis border color
      },
    },
    grid: {
      show: false,
    },
  };

  // Initialize ApexCharts and render
  var chart = new ApexCharts(
    document.querySelector("#show-amount-graph"),
    options
  );
  // change the marker with custom photo https://codepen.io/apexcharts/pen/LYGNXrN
  chart.render().then(() => {
    for (let i = 1; i <= chart.w.globals.series[0].length; i++) {
      const datapoint = chart.w.config.series[0].data[i - 1];
      // console.log(i)

      const imageUrls = [
        "",
        "../../assets/images/icon/ETH-2.png",
        "../../assets/images/icon/ETC.png",
        "../../assets/images/icon/BTC.png",
        "../../assets/images/icon/BTC.png",
      ];
      console.log(imageUrls[i]);

      // imageUrls.map(item => {console.log(item)})

      chart.addPointAnnotation({
        x: datapoint.x,
        y: datapoint.y,
        marker: {
          size: 0,
        },
        image: {
          path: imageUrls[i],
          offsetY: -3,
        },
      });
    }
  });

  // console.log( "data  map >> " , options.series[0].data.map((item) => {
  //   return item
  // }));
});
