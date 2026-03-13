google.charts.load('current', { packages: ['corechart'] })
google.charts.setOnLoadCallback(drawChart)

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Automotive', 13.5],
    ['Industrial', 16.7],
    ['Aerospace', 11.7],
    ['Battery',  4],
    ['Food & Beverage', 9.8],
    ['Energy', 7.2],
    ['Chemical', 4.7],
    ['Other', 33.3],
  ])

  var options = {
    pieHole: 0.5,
    colors: ['#31566E', '#12394F', '#ECD182', '#6AC5AE', '#757778', '#3D3F40', '#DB736D', '#DBA16F'],
    legend: { position: 'top', maxLines: '2' },
    chartArea: { left: 0, top: 40, bottom: 20, width: '90%', height: '90%' },
  }

  var chart = new google.visualization.PieChart(
    document.getElementById('piechart_3d')
  )
  chart.draw(data, options)
}
