google.charts.load('current', { packages: ['corechart'] })
google.charts.setOnLoadCallback(drawChart)

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['HOA  ', 13.1],
    ['Property ', 13.9],
    ['Industrial  ', 14.6],
    ['Commercial ', 16.6],
    ['Apartments & Condos', 12.2],
    ['Retail ', 9.8],
    ['Other', 19.8],
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
