function mountChart(labels, scores, colors, canvasSelector) {
  var ctx = document.getElementById(canvasSelector).getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      responsive: false,
      data: {
          labels,
          datasets: [{
              label: 'Homophily connectivity score',
              data: scores,
              backgroundColor: colors,
          }]
      },
      options: {
        responsive: false,
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
};

function initiate(data, canvasSelector) {
  const chartLabels = [];
  const chartScores = [];
  const chartColors = [];
  const rows = data.split('\n');
  for(let i=0; i<rows.length; i++) {
    const columns = rows[i].split(',');
    //			Maine,8.916415450206477,#ffc71b,,,,
    //['    Maine', '8.91641545', '#ffc71b', '', '', '', '', ''];
    chartLabels.push(columns[0].trim());
    chartScores.push(Number(columns[1]));
    chartColors.push(columns[2]);
  }
  mountChart(chartLabels, chartScores, chartColors, canvasSelector);
}
initiate(csv1,'myChart');
initiate(csv2,'myChart2');
