$(document).ready(function() {
 
  $(document).ready(function() {
    var balance = {
      series: [55, 13],
      chart: {
        width: 300,
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false
      },
      fill: {
        type: 'gradient', // Use gradient fill
        gradient: {
          shade: 'light',
          type: "horizontal", // Change to "horizontal" for a linear gradient across the slice
          shadeIntensity: 0.6,
          gradientToColors: ['#D29FF9', '#DECBEE'], // Add gradient end colors
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      colors: ['#ffffff', '#D29FF9'], 
      legend: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
          },
        },
      ],
    };
    
    var chart = new ApexCharts(document.querySelector("#chart"), balance);
    chart.render();
  });
  
 
});
