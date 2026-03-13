google.charts.load('current', { packages: ['corechart'] })
google.charts.setOnLoadCallback(drawChart)

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Poultry', 15.3],
    ['Fish', 14.2],
    ['Beef', 12.9],
    ['Pork', 8.9],
    ['Pet Food', 6.9],
    ['Vegetables', 5.4],
    ['Fruit', 4.7],
    ['Other', 26.5],
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
