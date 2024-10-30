
var chartBar  
var chartDonut

const handleData = async rows => {

  const data = await (await fetch(`datos-${rows}.json`)).json()  

  chartBar.updateOptions({
    series: [{
      name: 'Datos Nuevos',
      data: data.sales
    }],
    xaxis: {
      categories: data.labels
    }
  })
  
  chartDonut.updateOptions({
    series: data.sales,
    labels: data.labels
  })
}


document.querySelector('select').addEventListener('change', (event) => handleData(parseInt(event.target.value, 10)))

document.addEventListener('DOMContentLoaded',async () => {
  const data = await (await fetch(`datos-2019.json`)).json()

  const optionsBar = {
    series: [{
      name: "sales",
      data: data.sales
    }],
    chart: {
      type: 'bar',
      height: 380
    },
    xaxis: {
      categories: data.labels,
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 600
        }
      }
    },
  }
  chartBar = new ApexCharts(document.querySelector("#chart-bar"), optionsBar)
  chartBar.render()


  const optionsDonut = {
    series: data.sales, 
    chart: {
      type: 'donut',
      height: 380
    },
    labels: data.labels, 
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
  chartDonut = new ApexCharts(document.querySelector("#chart-donut"), optionsDonut)
  chartDonut.render()

})