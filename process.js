

const handleData = async rows => {

  const data = await (await fetch(`datos-${rows}.json`)).json()


  renderBarChart(data.sales, data.labels);
  renderDonutChart( data.sales, data.labels);
  
  
}

const renderBarChart = (sales, labels) => {

  let optionsBar = {
    series: [{
      name: "Sales",
      data: sales
    }],
    chart: {
      type: 'bar',
      height: 380
    },
    xaxis: {
      categories: labels,
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 600
        }
      }
    },
  };

  const chartBar = new ApexCharts(document.querySelector("#chart-bar"), optionsBar);
  chartBar.render();
};

const renderDonutChart = (sales, labels) => {
  let optionsDonut = {
    series: sales, 
    chart: {
      type: 'donut',
      height: 380
    },
    labels: labels, 
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }
  

  const chartDonut = new ApexCharts(document.querySelector("#chart-donut"), optionsDonut);
  console.log(chartDonut.data.w.config.series);
  chartDonut.render();
  console.log(chartDonut.data.w.config.series);
};





document.querySelector('select').addEventListener('change', (event) => handleData(parseInt(event.target.value, 10)))
