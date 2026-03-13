google.charts.load('current', { packages: ['corechart'] })
google.charts.setOnLoadCallback(drawChart)

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Food and Bev ', 22.3],
    ['Chemical', 12.2],
    ['Wine & Spirits', 11.9],
    ['Cosmetics', 4.9],
    ['Household Products', 14.2],
    ['Industrial', 6.4],
    ['Warehouse & Logistics', 9.2],
    ['Other', 19.2],
  ])

  var options = {
    pieHole: 0.5,
    colors: ['#31566E', '#3D3F40','#ECD182', '#6AC5AE', '#7582BF', '#DBA16F', '#DB736D','#757778'],
    legend: { position: 'top', maxLines: '2' },
    chartArea: { left: 0, top: 40, bottom: 20, width: '90%', height: '90%' },
  }

  var chart = new google.visualization.PieChart(
    document.getElementById('piechart_3d')
  )
  chart.draw(data, options)
}
