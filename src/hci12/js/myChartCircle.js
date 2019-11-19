let myChartCircle = document.getElementById('myChartCircle').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Source Sans Pro';
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontColor = 'bold';

let myChartC = new Chart(myChartCircle, {
  type:'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:[
    'Công việc đang làm',
    'Công việc đã xong',
    'Công việc tồn đọng',
    'Công việc đang chờ duyệt'
    ],
    datasets:[{
      data:[
        16,
        15,
        14,
        20,
      ],
      //backgroundColor:'green',
      backgroundColor:[
        'rgba(54, 162, 235, 0.6)',
        'rgba(104, 162, 235, 0.6)',
        'rgba(154, 162, 235, 0.6)',
        'rgba(204, 162, 235, 0.6)',
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
      text:'Biểu đồ phần trăm công việc của phòng kế toán doanh nghiệp tháng 10 năm 2019',
      fontSize:25,
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




