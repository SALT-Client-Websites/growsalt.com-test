google.charts.load('current', { packages: ['corechart'] })
google.charts.setOnLoadCallback(drawChart)

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Medical ', 16.3],
    ['Automotive', 15.7],
    ['Aerospace ', 14.2],
    ['Industrial', 9.7],
    ['Goods', 14.1],
    ['Robotics', 3.1],
    ['Telecommunications', 9.4],
    ['Other', 17.5],
  ])

  var options = {
    pieHole: 0.5,
    colors: ['#ECD182', '#6AC5AE', '#7582BF', '#DBA16F', '#DB736D','#757778', '#31566E', '#3D3F40',],
    legend: { position: 'top', maxLines: '2' },
    chartArea: { left: 0, top: 40, bottom: 20, width: '90%', height: '90%' },
  }

  var chart = new google.visualization.PieChart(
    document.getElementById('piechart_3d')
  )
  chart.draw(data, options)
}
