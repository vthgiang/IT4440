window.onload = function() {
  var chart = new CanvasJS.Chart("chartContainer", {
    title: {
      text: "KPI tháng 10/2019"
    },
    axisX: {
      valueFormatString: "MMM DD"
    },
    axisY2: {
      title: "% KPI",
      suffix: "%"
    },
    toolTip: {
      shared: true
    },
    legend: {
      cursor: "pointer",
      verticalAlign: "top",
      horizontalAlign: "center",
      dockInsidePlotArea: true,
      itemclick: toogleDataSeries
    },
    data: [
      {
        type: "line",
        axisYType: "secondary",
        name: "Kì vọng",
        showInLegend: true,
        markerSize: 0,
        yValueFormatString: "##,00%",
        dataPoints: [
          {
            x: new Date(2019, 09, 05),
            y: 20
          },
          {
            x: new Date(2019, 09, 10),
            y: 40
          },
          {
            x: new Date(2019, 09, 15),
            y: 50
          },
          {
            x: new Date(2019, 09, 20),
            y: 70
          },
          {
            x: new Date(2019, 09, 25),
            y: 85
          },
          {
            x: new Date(2019, 09, 30),
            y: 100
          }
        ]
      },
      {
        type: "line",
        axisYType: "secondary",
        name: "Thực tế",
        showInLegend: true,
        markerSize: 0,
        yValueFormatString: "##,00%",
        dataPoints: [
          {
            x: new Date(2019, 09, 05),
            y: 25
          },
          {
            x: new Date(2019, 09, 10),
            y: 45
          },
          {
            x: new Date(2019, 09, 15),
            y: 55
          },
          {
            x: new Date(2019, 09, 20),
            y: 75
          },
          {
            x: new Date(2019, 09, 25),
            y: 90
          },
          {
            x: new Date(2019, 09, 30),
            y: 100
          }
        ]
      }
    ]
  });
  chart.render();

  function toogleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }
};
