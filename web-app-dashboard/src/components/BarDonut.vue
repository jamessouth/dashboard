<template>
  <div class="bar_donut">
    <Wrapper
    :opts="barChartOptions"
    :chData="chartData"
    :type="'bar'">
    </Wrapper>
    <Wrapper
    :opts="donutChartOptions"
    :chData="chartData"
    :type="'donut'">
    </Wrapper>
  </div>
</template>

<script>
import Wrapper from './Wrapper.vue';

export default {
  name: 'BarDonut',
  data() {
    return {
      narrow: {
        type: 'logarithmic',
        ticks: {
          min: 0,
          fontSize: 13,
          callback(value) {
            return value === 10 || value % 20 === 0 ? value : '';
          },
        },
        position: 'left',
      },
      wide: {
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
      xs: {
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
      yright: {
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
      },
      mQ: window.matchMedia('(max-width: 580px)'),
      mQon: null,
      chartData: {},
      baseBarChartOptions: {
        title: {
          display: true,
          text: 'Number of Events - past 60 days',
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
          text: 'Share of Events - past 60 days',
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
    Wrapper,
  },
  computed: {
    barChartOptions() {
      if (this.mQon) {
        return {
          ...this.baseBarChartOptions,
          scales: {
            yAxes: [this.narrow, this.yright],
            ...this.xs,
          },
        };
      }
      return {
        ...this.baseBarChartOptions,
        scales: {
          yAxes: [this.wide, this.yright],
          ...this.xs,
        },
      };
    },
  },
  created() {
    this.makeAPICall();
    this.mQ.addListener(this.handleMQ);
    this.handleMQ(this.mQ);
  },
  methods: {
    getColors() {
      const colorBank = ['#4a051c', '#f6f930', '#7a9e7e', '#31493c', '#ffa400', '#85c7f2', '#baa898', '#848586', '#c2847a', '#d1603d', '#c5dca0', '#f65be3', '#2a2a72'];
      const nums = new Set();
      let num;
      while (nums.size < 13) {
        num = Math.floor(Math.random() * 13);
        nums.add(num);
      }
      return [...nums].map(x => colorBank[x]);
    },
    handleMQ(evt) {
      if (evt.matches) {
        this.mQon = true;
      } else {
        this.mQon = false;
      }
    },
    async makeAPICall() {
      try {
        let data = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?days=60');
        if (data.ok) {
          data = await data.json();
        } else {
          throw new Error('Network problem - response not ok');
        }
        if (!data || !data.events || data.events.length === 0) {
          throw new Error('No data available');
        }
        const slimData = data.events.reduce((obj, item) => { // eslint-disable-next-line
          obj[item.categories[0].title] = ++obj[item.categories[0].title] || 1;
          return obj;
        }, {});
        const dataLabels = [];
        const dataData = [];
        const colors = this.getColors();
        Object.keys(slimData).forEach((evt) => {
          dataLabels.push(evt);
          dataData.push(slimData[evt]);
        });
        this.chartData = Object.assign({}, this.chartData, {
          labels: dataLabels,
          datasets: [
            {
              label: '',
              data: dataData,
              backgroundColor: colors,
              borderWidth: Array(13).fill(0),
            },
          ],
        });
      } catch (err) { // eslint-disable-next-line
        alert(`There was a problem grabbing the data: ${err}.  Please try again.`);
      }
    },
  },
};
</script>

<style scoped>
  .bar_donut{
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid #cecece;
    border-bottom: 1px solid #cecece;
  }
  @media screen and (min-width: 1024px){
    .bar_donut{
      flex-direction: row;
      justify-content: space-around;
    }
  }
</style>
