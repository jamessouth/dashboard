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
      <div :style="{ margin: '0 auto', width: '90%' }">
        <ul :style="legendStyles" ref="barlegend"></ul>
      </div>
      <BarChart
      :options="barChartOptions"
      :chart-data="barChartData">
      </BarChart>
    </div>
    <div class="donut-chart">
      <div :style="{ margin: '68px auto 0', width: '90%' }">
        <ul :style="legendStyles" ref="donutlegend"></ul>
      </div>
      <DonutChart
      :options="donutChartOptions"
      :chart-data="donutChartData">
      </DonutChart>
    </div>
  </div>
</template>

<script>
import BarChart from './BarChart.vue';
import DonutChart from './DonutChart.vue';

export default {
  name: 'BarDonut',
  data() {
    return {
      barChartData: null,
      donutChartData: null,
      barChartOptions: {
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
        responsive: true,
        scales: {
          yAxes: [{
            type: 'logarithmic',
            ticks: {
              min: 0,
              fontSize: 13,
              callback(value) {
                return value;
              },
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
            gridLines: {
              drawOnChartArea: false,
              drawTicks: false,
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

      donutChartOptions: {
        title: {
          display: true,
          text: 'Share of Events - past 30 days',
          fontSize: 13,
        },
        responsive: true,
        rotation: (Math.floor(Math.random() * 100) / 10) * Math.PI,
        cutoutPercentage: 54,
        animation: {
          animateScale: true,
        },
        tooltips: {
          backgroundColor: '#000',
          displayColors: false,
          titleFontSize: 13,
          bodyFontSize: 13,
          titleMarginBottom: 6,
          callbacks: {
            label(tooltipItem, data) {
              const dataSet = data.datasets[0].data;
              const dataPoint = dataSet[tooltipItem.index];
              const sum = dataSet.reduce((a, b) => a + b, 0);
              return `${data.labels[tooltipItem.index]}: ${(Math.round((dataPoint / sum) * 10000)) / 100}%`;
            },
          },
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
          labels: {
            fontSize: 13,
          },
        },
      },
    };
  },
  components: {
    BarChart,
    DonutChart,
  },
  mounted() {
    this.makeAPICall();
  },
  computed: {
    legendStyles() {
      return {
        display: 'flex',
        flexFlow: 'row wrap',
        margin: 'auto',
        justifyContent: 'space-around',
        minHeight: '70px',
      };
    },
  },
  methods: {
    legendCallback(barChartData) {
      const colors = barChartData.datasets[0].backgroundColor;
      let li;
      let p;
      let colorBox;
      let clone;
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
        clone = li.cloneNode(true);
        this.$refs.barlegend.appendChild(li);
        this.$refs.donutlegend.appendChild(clone);
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

        this.barChartData = {
          labels: dataLabels,
          datasets: [
            {
              label: '',
              data: dataData,
              backgroundColor: colors,
            },
          ],
        };

        this.donutChartData = {
          labels: dataLabels,
          datasets: [
            {
              label: '',
              data: dataData,
              backgroundColor: colors,
              borderWidth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            },
          ],
        };

        this.legendCallback(this.barChartData);
      } catch (err) {
        alert(`There was a problem grabbing the data: ${err}.  Please try again.`);
      }
    },
  },
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:300');
  .bar_donut{
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    width: 96%;
    margin: 2em 0;
  }
  .donut-chart{
    border-top: 1px solid #cecece;
    width: 96%;
    margin: 0 0 2em;
  }
  .bar-chart > div:last-of-type, .donut-chart > div:last-of-type{
    position: relative;
    min-width: 0;
  }
  a{
    text-decoration: underline;
  }
  .bar-chart > p{
    text-align: center;
    margin-bottom: 1em;
    font-family: 'Alegreya Sans', sans-serif;
    text-transform: uppercase;
  }
  @media screen and (min-width: 1024px){
    .bar-chart,
    .donut-chart{
      margin-bottom: 0;
      padding-bottom: 1em;
      max-width: calc((98vw - 90px) / 2);
    }
    .bar_donut{
      flex-direction: row;
      justify-content: space-around;
    }
    .donut-chart{
      border-left: 1px solid #cecece;
      border-top: none;
    }
  }
</style>
