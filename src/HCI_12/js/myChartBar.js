let myChart = document.getElementById('myChartBar').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Source Sans Pro';
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontColor = 'bold';

let massPopChart = new Chart(myChart, {
  type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:[
        'Nguyễn Anh Phương',
        'Lê Duy Anh',
        'Nguyễn Thị Mừng',
        'Vũ Thị Xinh',
        'Thoeun Rathana'],
    datasets:[{
      label:'KPI',
      data:[
        16,
        15,
        14,
        5,
        20,
      ],
      //backgroundColor:'green',
      backgroundColor:[
        'rgba(54, 162, 235, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(54, 162, 235, 0.6)',
      ],
      borderWidth:1,
      borderColor:'bold',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Bảng xếp hạng top 5 KPI tháng 10 năm 2019',
      fontSize:25
    },
    legend:{
      display:true,
      position:'right',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:10,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});




