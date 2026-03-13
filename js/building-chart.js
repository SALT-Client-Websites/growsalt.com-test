google.charts.load('current', { packages: ['corechart'] })
google.charts.setOnLoadCallback(drawChart)

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Architects', 35.1],
    ['Interior Designers', 14.1],
    ['Contractors', 13.4],
    ['End Users', 11.7],
    ['Installers', 10.9],
    ['Builders', 6.3],
    ['Other', 8.5],
  ])

  var options = {
    pieHole: 0.5,
    colors: ['#DBA16F','#31566E', '#757778', '#6AC5AE', '#12394F','#DB736D','#3D3F40'],
    legend: { position: 'top', maxLines: '2' },
    chartArea: { left: 0, top: 40, bottom: 20, width: '90%', height: '90%' },
  }

  var chart = new google.visualization.PieChart(
    document.getElementById('piechart_3d')
  )
  chart.draw(data, options)
}
