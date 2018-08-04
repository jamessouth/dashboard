<template>
  <div class="bar_donut">
    <div class="bar-chart">
      <p>Natural events from
        <a
        class="newwindow"
        rel="noopener noreferrer"
        target="_blank"
        href="https://eonet.sci.gsfc.nasa.gov/eonet-project">EONET</a>
      </p>
      <button></button>
      <BarChart
      :options="chartOptions"
      :chart-data="chartData">
      </BarChart>
    </div>
    <div class="dough">
      <div class="donut-chart">
        <span>mobile users</span>
        <p></p>
        <canvas width="297" height="297"></canvas>
      </div>
      <div class="donut-legend"></div>
    </div>
  </div>
</template>

<script>
import BarChart from './BarChart.vue';

export default {
  name: 'BarDonut',
  data() {
    return {
      chartData: null,
      chartOptions: {
        tooltips: {
          backgroundColor: '#000',
          displayColors: false,
          titleFontSize: 13,
          bodyFontSize: 13,
          titleMarginBottom: 6,
          callbacks: {
            title(tooltipItem, data) {
              console.log(tooltipItem[0], data.datasets[1]);
              // return `${data.datasets[tooltipItem.datasetIndex].label}:`;
            },
            label(tooltipItem, data) {
              console.log(tooltipItem, data);
              return tooltipItem.yLabel;
            },
          },
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontSize: 13,
            },
            position: 'left',
          },
          {
            ticks: {
              callback() {
                return '';
              },
            },
            position: 'right',
            gridLines:{
              drawOnChartArea: false,
              drawTicks: false,
            },
          }],
          xAxes: [{
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            ticks: {
              fontSize: 13,
            },
          }],
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        legend: {
          labels: {
            fontSize: 13,
          },
        },
      },
    };
  },
  components: {
    BarChart,
  },
  mounted() {
    this.makeAPICall();
  },
  methods: {
    async makeAPICall() {
      try {
        // console.log(code);
        let data = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?days=30');
        console.log('data fetch bar');
        // console.log(data);
        if (data.ok) {
          data = await data.json();
        } else {
          throw new Error('Network problem - response not ok');
        }

        // if (data[1] === null) {
        //   throw new Error('No data available for this location');
        // }

        console.log(data);

        const slimData = data.events.reduce((obj, item) => { // eslint-disable-next-line
          obj[item.categories[0].title] = ++obj[item.categories[0].title] || 1;
          return obj;
        }, {});

        console.log(slimData);

        const colors = ['#435058', '#dcf763', '#7377bf', '#bfb7b6', '#f1f2ee'];
        const dataData = [];
        //
        Object.keys(slimData).forEach((evt, i) => {
          // dataLabels.push(evt);
          // dataData.push(slimData[evt]);
          dataData.push({
            label: evt,
            data: [slimData[evt]],
            backgroundColor: colors[i]
          });


        });
        //
        console.log(dataData);

        // [
        //   {
        //     label: dataLabels,
        //     data: [10],
        //     backgroundColor: '#7377BF',
        //   },
        //   {
        //     label: 'honey',
        //     data: [18],
        //     backgroundColor: '#f67042',
        //   },
        // ],
        // 'Number of events - past 30 days'

        this.chartData = {
          labels: ['1', '2', '3', '4', '5'],
          datasets: dataData,
        };
      } catch (err) {
        alert(`There was a problem grabbing the data: ${err}.  Please try again.`);
      }
      // return slimData;
    },
  },
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Josefin+Slab:400,600');
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:800i');
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:300');
  .bar_donut{
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #cecece;
    border-bottom: 1px solid #cecece;
  }
  .newwindow::after{
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url('../assets/newwindow.png') 0 0 no-repeat;
  }
  .bar-chart{
    width: 100%;
    margin: 2em auto;
  }
  .donut-chart{
    position: relative;
    border-top: 1px solid #cecece;
    width: 96%;
    padding-top: 1em;
    margin: 0 auto 1em;
  }
  span{
    position: absolute;
    font-family: 'Alegreya Sans', sans-serif;
    text-transform: uppercase;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
  }
  a{
    text-decoration: underline;
  }
  .donut-chart > p{
    position: absolute;
    font-family: 'Josefin Slab', serif;
    font-size: 22px;
    white-space: pre;
    bottom: 45%;
    left: 50%;
    transform: translateY(50%) translateX(-50%);
  }
  .donut-chart > canvas{
    width: 297px;
    height: 297px;
    margin: auto;
    margin-top: 20px;
    opacity: 0;
    background: url("../assets/shadow.jpg") no-repeat;
    transition: opacity 0.5s linear;
  }
  .donut-legend{
    margin-bottom: 1em;
    position: relative;
  }
  .donut-legend > ul{
    display: flex;
    justify-content: center;
  }
  .donut-legend > ul li{
    padding: 0 10px;
    display: flex;
    align-items: center;
    font-family: 'Alegreya Sans', sans-serif;
  }
  .donut-legend > ul li p{
    display: inline;
  }
  .donut-legend > ul li div{
    display: inline-block;
    margin-right: 5px;
  }
  .donut-legend > ul li:focus{
    padding: 0 10px;
    display: flex;
    align-items: center;
    font-family: 'Alegreya Sans', sans-serif;
  }
  .bar-chart > p{
    text-align: center;
    margin-bottom: 1em;
    font-family: 'Alegreya Sans', sans-serif;
    text-transform: uppercase;
  }
  button{
    font-family: 'Alegreya Sans SC', sans-serif;
    font-size: 16px;
    position: absolute;
    width: 40px;
    top: 15px;
    right: 3%;
    border: none;
    background-color: transparent;
    color: #7377bf;
    cursor: pointer;
  }
  button:focus,
  .donut-legend > ul li:focus{
    outline: 2px solid #7377bf;
  }

  @media screen and (min-width: 1024px){
    .bar-chart,
    .donut-chart{
      margin-bottom: 0;
      padding-bottom: 1em;
    }
    .bar_donut{
      flex-direction: row;
    }
    button{
      left: 45%;
    }
    .bar-chart > p{
      left: 8%;
    }
    span{
      left: 25%;
    }
    .donut-chart > p{
      bottom: 50%;
    }
    .donut-chart{
      border-left: 1px solid #cecece;
      border-top: none;
    }
    .dough{
      display: flex;
      flex-direction: row;
    }
    .dough,
    .bar-chart{
      width: 50%;
    }
    .donut-legend > ul{
      flex-direction: column;
      justify-content: space-evenly;
      height: 100%;
      margin-right: 50px;
    }
    .bar-chart{
      margin-left: 5px;
      margin-right: -5px;
    }

  }
</style>
