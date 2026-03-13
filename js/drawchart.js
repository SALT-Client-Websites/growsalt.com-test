google.charts.load('current', { packages: ['corechart'] })
google.charts.setOnLoadCallback(drawChart)

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Aero', 35],
    ['Defense', 18],
    ['Off-Highway', 14],
    ['Industrial', 12],
    ['Oil & Gas', 7],
    ['Other', 7],
  ])

  var options = {
    pieHole: 0.5,
    colors: ['#6890a2', '#3c3e3f', '#EBD081', '#67C7AE', '#7481C2', '#E98F8B'],
    legend: { position: 'top', maxLines: '2' },
    chartArea: { left: 0, top: 40, bottom: 20, width: '90%', height: '90%' },
  }

  var chart = new google.visualization.PieChart(
    document.getElementById('piechart_3d')
  )
  chart.draw(data, options)
}
