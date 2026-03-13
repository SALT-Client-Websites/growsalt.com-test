google.charts.load('current', { packages: ['corechart'] })
google.charts.setOnLoadCallback(drawChart)

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Agriculture', 5.1],
    ['Fabricators', 11.6],
    ['Off-Highway', 6.2],
    ['Industrial', 16.7],
    ['Goods', 19.5],
    ['Architectural', 22.5],
    ['Medical', 8.1],
    ['Other', 10.3],
  ])

  var options = {
    pieHole: 0.5,
    colors: ['#7582BF', '#DBA16F','#31566E', '#3D3F40','#ECD182', '#6AC5AE','#DB736D','#757778'],
    legend: { position: 'top', maxLines: '2' },
    chartArea: { left: 0, top: 40, bottom: 20, width: '90%', height: '90%' },
  }

  var chart = new google.visualization.PieChart(
    document.getElementById('piechart_3d')
  )
  chart.draw(data, options)
}
