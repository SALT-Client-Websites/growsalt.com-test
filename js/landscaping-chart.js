google.charts.load('current', { packages: ['corechart'] })
google.charts.setOnLoadCallback(drawChart)

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Professional   ',  7.0],
    ['Property ', 19.2],
    ['Schools', 15.5],
    ['Construction ', 13.2],
    ['Industrial ', 12.9],
    ['Non-Profit', 10.2],
    ['TMedical ', 11.8],
    ['Othe', 10.2],
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
