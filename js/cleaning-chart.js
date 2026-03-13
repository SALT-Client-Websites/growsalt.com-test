google.charts.load('current', { packages: ['corechart'] })
google.charts.setOnLoadCallback(drawChart)

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Schools  ', 14.5],
    ['Professional ', 15.7],
    ['Resorts/Clubs ', 6.6],
    ['Property ', 12.0],
    ['Industrial ', 18.7],
    ['Non-Profit', 11.2],
    ['TMedical ', 12.9],
    ['Othe', 14.9],
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
