google.charts.load('current', { packages: ['corechart'] })
google.charts.setOnLoadCallback(drawChart)

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Aero', 37.6],
    ['Defense', 19.4],
    ['Off-Highway', 15.1],
    ['Industrial', 12.9],
    ['Oil & Gas', 7.5],
    ['Other', 7.5],
  ])

  var options = {
    pieHole: 0.5,
    colors: [ '#3D3F40', '#31566E','#6AC5AE', '#DBA16F', '#12394F','#ECD182'],
    legend: { position: 'top', maxLines: '2' },
    chartArea: { left: 0, top: 40, bottom: 20, width: '90%', height: '90%' },
  }

  var chart = new google.visualization.PieChart(
    document.getElementById('piechart_3d')
  )
  chart.draw(data, options)
}
