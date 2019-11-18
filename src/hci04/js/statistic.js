var ctx = document.getElementById('chart-01').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
    labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
    datasets: [{
      label: 'Đã hoàn thành',
      backgroundColor: '#28a745',
      borderColor: '#28a745',
      data: [80, 90, 60, 70, 50, 60, 50, 60, 40, 50, 50, 60]
    }, {
      label: 'Đang đúng hạn',
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      data: [70, 60, 40, 50, 30, 40, 50, 50, 40, 50, 30, 40]
    }, {
      label: 'Đang quá hạn',
      backgroundColor: '#dc3545',
      borderColor: '#dc3545',
      data: [20, 10, 10, 5, 10, 10, 5, 10, 10, 5, 10, 10]
    }, {
      label: 'Chưa thực hiện',
      backgroundColor: '#6c757d',
      borderColor: '#6c757d',
      data: [20, 10, 10, 5, 0, 10, 5, 10, 10, 5, 0, 10]
    }],
  },

  // Configuration options go here
  options: {
    title: {
      display: true,
      text: 'Tiến độ 12 tháng'
    },
    responsive: true,
    scales: {
      xAxes: [{
        stacked: true,
      }],
      yAxes: [{
        stacked: true
      }]
    }
  }
});
