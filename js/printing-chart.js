google.charts.load('current', { packages: ['corechart'] })
google.charts.setOnLoadCallback(drawChart)

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Insurance', 19.7],
    ['Utilities', 17.8],
    ['Medical', 17.6],
    ['Marketing  ', 12.1],
    ['Collections ', 14.9],
    ['Other', 17.9],
  ])

  var options = {
    pieHole: 0.5,
    colors: ['#31566E', '#12394F', '#3D3F40', '#757778', '#6AC5AE', '#DB736D'],
    legend: { position: 'top', maxLines: '2' },
    chartArea: { left: 0, top: 40, bottom: 20, width: '90%', height: '90%' },
  }

  var chart = new google.visualization.PieChart(
    document.getElementById('piechart_3d')
  )
  chart.draw(data, options)
}
