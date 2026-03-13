google.charts.load('current', { packages: ['corechart'] })
google.charts.setOnLoadCallback(drawChart)

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Food ', 24.7],
    ['Chemical ', 11.3],
    ['Wine  ', 16.9],
    ['Cosmetics ', 14.7],
    ['Household ', 13.2],
    ['Industrial ', 6.4],
    ['Other', 12.8],
  ])

  var options = {
    pieHole: 0.5,
    colors: ['#31566E', '#12394F', '#3D3F40', '#757778', '#6AC5AE', '#DB736D', '#DBA16F'],
    legend: { position: 'top', maxLines: '2' },
    chartArea: { left: 0, top: 40, bottom: 20, width: '90%', height: '90%' },
  }

  var chart = new google.visualization.PieChart(
    document.getElementById('piechart_3d')
  )
  chart.draw(data, options)
}
