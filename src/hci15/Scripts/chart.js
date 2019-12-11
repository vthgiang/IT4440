// JavaScript source code

window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {

        axisX: {
            valueFormatString: "MMM YYYY"
        },
        axisY2: {
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
        data: [{
            type: "line",
            axisYType: "secondary",
            name: "Nguyễn Văn Thắng",
            showInLegend: true,
            markerSize: 0,
            yValueFormatString: "##,##%",
            dataPoints: [
                { x: new Date(2018, 00, 01), y: 100 },
                { x: new Date(2018, 01, 01), y: 98 },
                { x: new Date(2018, 02, 01), y: 94 },
                { x: new Date(2018, 03, 01), y: 96 },
                { x: new Date(2018, 04, 01), y: 99 },
                { x: new Date(2018, 05, 01), y: 99 },
                { x: new Date(2018, 06, 01), y: 99 },
                { x: new Date(2018, 07, 01), y: 98 },
                { x: new Date(2018, 08, 01), y: 96 },
                { x: new Date(2018, 09, 01), y: 98 },
                { x: new Date(2018, 10, 01), y: 99 },
                { x: new Date(2018, 11, 01), y: 99 },
                { x: new Date(2019, 00, 01), y: 95 },
                { x: new Date(2019, 01, 01), y: 99 },
                { x: new Date(2019, 02, 01), y: 99 },
                { x: new Date(2019, 03, 01), y: 99 },
                { x: new Date(2019, 04, 01), y: 99 },
                { x: new Date(2019, 05, 01), y: 97 },
                { x: new Date(2019, 06, 01), y: 99 },
                { x: new Date(2019, 07, 01), y: 99 },
                { x: new Date(2019, 08, 01), y: 99 },
                { x: new Date(2019, 09, 01), y: 99 },
                { x: new Date(2019, 10, 01), y: 96 },
                { x: new Date(2019, 11, 01), y: 99 }
            ]
        },
        {
            type: "line",
            axisYType: "secondary",
            name: "Lâm Phúc Anh Tú",
            showInLegend: true,
            markerSize: 0,
            yValueFormatString: "##,##%",
            dataPoints: [
                { x: new Date(2018, 00, 01), y: 91 },
                { x: new Date(2018, 01, 01), y: 92 },
                { x: new Date(2018, 02, 01), y: 92 },
                { x: new Date(2018, 03, 01), y: 93 },
                { x: new Date(2018, 04, 01), y: 94 },
                { x: new Date(2018, 05, 01), y: 95 },
                { x: new Date(2018, 06, 01), y: 94 },
                { x: new Date(2018, 07, 01), y: 93 },
                { x: new Date(2018, 08, 01), y: 92 },
                { x: new Date(2018, 09, 01), y: 91 },
                { x: new Date(2018, 10, 01), y: 90 },
                { x: new Date(2018, 11, 01), y: 92 },
                { x: new Date(2019, 00, 01), y: 93 },
                { x: new Date(2019, 01, 01), y: 92 },
                { x: new Date(2019, 02, 01), y: 93 },
                { x: new Date(2019, 03, 01), y: 93 },
                { x: new Date(2019, 04, 01), y: 92 },
                { x: new Date(2019, 05, 01), y: 91 },
                { x: new Date(2019, 06, 01), y: 92 },
                { x: new Date(2019, 07, 01), y: 92 },
                { x: new Date(2019, 08, 01), y: 92 },
                { x: new Date(2019, 09, 01), y: 92 },
                { x: new Date(2019, 10, 01), y: 92 },
                { x: new Date(2019, 11, 01), y: 92 }
            ]
        },
        {
            type: "line",
            axisYType: "secondary",
            name: "Bùi Việt Anh",
            showInLegend: true,
            markerSize: 0,
            yValueFormatString: "##,##%",
            dataPoints: [
                { x: new Date(2018, 00, 01), y: 96 },
                { x: new Date(2018, 01, 01), y: 97 },
                { x: new Date(2018, 02, 01), y: 96 },
                { x: new Date(2018, 03, 01), y: 96 },
                { x: new Date(2018, 04, 01), y: 96 },
                { x: new Date(2018, 05, 01), y: 96 },
                { x: new Date(2018, 06, 01), y: 96 },
                { x: new Date(2018, 07, 01), y: 96 },
                { x: new Date(2018, 08, 01), y: 96 },
                { x: new Date(2018, 09, 01), y: 96 },
                { x: new Date(2018, 10, 01), y: 96 },
                { x: new Date(2018, 11, 01), y: 96 },
                { x: new Date(2019, 00, 01), y: 96 },
                { x: new Date(2019, 01, 01), y: 96 },
                { x: new Date(2019, 02, 01), y: 96 },
                { x: new Date(2019, 03, 01), y: 96 },
                { x: new Date(2019, 04, 01), y: 96 },
                { x: new Date(2019, 05, 01), y: 96 },
                { x: new Date(2019, 06, 01), y: 96 },
                { x: new Date(2019, 07, 01), y: 96 },
                { x: new Date(2019, 08, 01), y: 96 },
                { x: new Date(2019, 09, 01), y: 96 },
                { x: new Date(2019, 10, 01), y: 96 },
                { x: new Date(2019, 11, 01), y: 96 }
            ]
        },
        {
            type: "line",
            axisYType: "secondary",
            name: "Hồ Văn Toàn",
            showInLegend: true,
            markerSize: 0,
            yValueFormatString: "##,##%",
            dataPoints: [
                { x: new Date(2018, 00, 01), y: 97 },
                { x: new Date(2018, 01, 01), y: 95 },
                { x: new Date(2018, 02, 01), y: 94 },
                { x: new Date(2018, 03, 01), y: 93 },
                { x: new Date(2018, 04, 01), y: 92 },
                { x: new Date(2018, 05, 01), y: 92 },
                { x: new Date(2018, 06, 01), y: 91 },
                { x: new Date(2018, 07, 01), y: 97 },
                { x: new Date(2018, 08, 01), y: 99 },
                { x: new Date(2018, 09, 01), y: 93 },
                { x: new Date(2018, 10, 01), y: 89 },
                { x: new Date(2018, 11, 01), y: 90 },
                { x: new Date(2019, 00, 01), y: 90 },
                { x: new Date(2019, 01, 01), y: 91 },
                { x: new Date(2019, 02, 01), y: 99 },
                { x: new Date(2019, 03, 01), y: 93 },
                { x: new Date(2019, 04, 01), y: 94 },
                { x: new Date(2019, 05, 01), y: 92 },
                { x: new Date(2019, 06, 01), y: 95 },
                { x: new Date(2019, 07, 01), y: 96 },
                { x: new Date(2019, 08, 01), y: 92 },
                { x: new Date(2019, 09, 01), y: 91 },
                { x: new Date(2019, 10, 01), y: 90 },
                { x: new Date(2019, 11, 01), y: 99 }
            ]
        },
        ]
    });
    chart.render();

    function toogleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }

}