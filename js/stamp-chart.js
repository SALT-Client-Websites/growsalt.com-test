google.charts.load('current', { packages: ['corechart'] })
google.charts.setOnLoadCallback(drawChart)

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Agriculture', 15.3],
    ['Automotive', 18.6],
    ['Off-Highway', 17.9],
    ['Industrial', 18.2],
    ['Goods', 12.8],
    ['Electronics', 8.1],
    ['Other', 9.1],
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
