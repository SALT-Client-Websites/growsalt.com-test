google.charts.load('current', { packages: ['corechart'] })
google.charts.setOnLoadCallback(drawChart)

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Tech', 15.2],
    ['Legal', 7.4],
    ['Consulting', 6.3],
    ['Marketing', 11.2],
    ['Industrial', 16.2],
    ['Non-Profit', 7.4],
    ['Medical', 7.2],
    ['Other', 29.1],
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
