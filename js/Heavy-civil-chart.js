google.charts.load('current', { packages: ['corechart'] })
google.charts.setOnLoadCallback(drawChart)

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Railroad', 6.0],
    ['Landfill', 12.5],
    ['Pad Sites', 26.3],
    ['Government', 4.2],
    ['Communications', 5.3],
    ['Energy', 7.4],
    ['General Contractors', 16.0],
    ['Other', 22.3],
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
