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
      <div :style="{ marginBottom: '1em' }">
        <ul :style="legendStyles" ref="legend"></ul>
      </div>
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
        title: {
          display: true,
          text: 'Number of Events - past 30 days',
          fontSize: 13,
        },
        tooltips: {
          backgroundColor: '#000',
          displayColors: false,
          titleFontSize: 13,
          bodyFontSize: 13,
          titleMarginBottom: 6,
          callbacks: {
            title(tooltipItem) {
              return `${tooltipItem[0].xLabel}:`;
            },
            label(tooltipItem) {
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
            gridLines: {
              drawOnChartArea: false,
              drawTicks: false,
            },
          }],
          xAxes: [{
            barPercentage: 1.0,
            categoryPercentage: 1.0,
            ticks: {
              fontSize: 1,
              fontColor: 'transparent',
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
          display: false,
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
  computed: {
    legendStyles() {
      return {
        display: 'flex',
        flexDirection: 'row',
        margin: 'auto',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        minHeight: '50px',
      };
    },
  },
  methods: {
    legendCallback(barChartData) {
      const colors = barChartData.datasets[0].backgroundColor;
      let li;
      let p;
      let colorBox;
      for (let i = 0; i < barChartData.datasets[0].data.length; i += 1) {
        li = document.createElement('li');
        p = document.createElement('p');
        colorBox = document.createElement('div');
        li.style.display = 'flex';
        li.style.alignItems = 'center';
        colorBox.style.width = '30px';
        colorBox.style.height = '16px';
        colorBox.style.backgroundColor = colors[i];
        colorBox.style.marginRight = '5px';
        p.textContent = barChartData.labels[i];
        p.style.fontFamily = "'Alegreya Sans', sans-serif";
        p.style.marginRight = '4px';
        li.appendChild(colorBox);
        li.appendChild(p);
        this.$refs.legend.appendChild(li);
      }
    },
    async makeAPICall() {
      try {
        let data = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?days=30');

        if (data.ok) {
          data = await data.json();
        } else {
          throw new Error('Network problem - response not ok');
        }

        // if (data[1] === null) {
        //   throw new Error('No data available for this location');
        // }

        // console.log(data);

        const slimData = data.events.reduce((obj, item) => { // eslint-disable-next-line
          obj[item.categories[0].title] = ++obj[item.categories[0].title] || 1;
          return obj;
        }, {});

        // console.log(slimData);

        const dataLabels = [];
        const dataData = [];
        const colors = ['#7377bf', '#e88d67', '#8cd867', '#f6e27f', '#f71735', '#22181c', '#ffd289', '#522a27', '#bb999c', '#011627', '#c0e6de', '#d8cc34', '#e6e4ce'];

        Object.keys(slimData).forEach((evt) => {
          dataLabels.push(evt);
          dataData.push(slimData[evt]);
        });

        // console.log(dataLabels, dataData);

        this.chartData = {
          labels: dataLabels,
          datasets: [
            {
              label: '',
              data: dataData,
              backgroundColor: colors,
            },
          ],
        };
        this.legendCallback(this.chartData);
      } catch (err) {
        alert(`There was a problem grabbing the data: ${err}.  Please try again.`);
      }
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
