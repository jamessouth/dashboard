<template>
  <div class="bar_donut">
    <Wrapper
    :opts="barChartOptions"
    :chData="barChartData"
    :type="'bar'">
    </Wrapper>
    <Wrapper
    :opts="donutChartOptions"
    :chData="donutChartData"
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
    Wrapper,
  },
  mounted() {
    this.makeAPICall();
  },
  methods: {
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
      } catch (err) {
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
