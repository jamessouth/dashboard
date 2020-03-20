<template>
  <div :class="{ barClass: type === 'bar', donutClass: type === 'donut' }">
    <p>
      Natural events from
      <a
        class="newwindow"
        rel="noopener noreferrer"
        target="_blank"
        href="https://eonet.sci.gsfc.nasa.gov/eonet-project"
      >EONET</a>
    </p>
    <div :style="{ margin: '0 auto', width: '90%' }">
      <ul
        ref="legend"
        :style="legendStyles"
      />
    </div>
    <BarChart
      v-if="type === 'bar'"
      :options="opts"
      :chart-data="chData"
    />
    <DonutChart
      v-else
      :options="opts"
      :chart-data="chData"
    />
  </div>
</template>

<script>
import BarChart from './BarChart.vue';
import DonutChart from './DonutChart.vue';

export default {
  name: 'ChartWrapper',
  components: {
    BarChart,
    DonutChart,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    chData: {
      type: Object,
      required: true,
    },
    opts: {
      type: Object,
      required: true,
    },
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
  watch: {
    chData() {
      this.legendCallback(this.chData);
    },
  },
  methods: {
    legendCallback(chartData) {
      const colors = chartData.datasets[0].backgroundColor;
      let li;
      let p;
      let colorBox;
      for (let i = 0; i < chartData.datasets[0].data.length; i += 1) {
        li = document.createElement('li');
        p = document.createElement('p');
        colorBox = document.createElement('div');
        li.style.display = 'flex';
        li.style.alignItems = 'center';
        colorBox.style.width = '30px';
        colorBox.style.height = '16px';
        colorBox.style.backgroundColor = colors[i];
        colorBox.style.marginRight = '5px';
        p.textContent = chartData.labels[i];
        p.style.fontFamily = "'Alegreya Sans', sans-serif";
        p.style.fontWeight = '300';
        p.style.marginRight = '4px';
        li.appendChild(colorBox);
        li.appendChild(p);
        this.$refs.legend.appendChild(li);
      }
    },
  },
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:300');
  .newwindow::after{
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url('../assets/newwindow.png') 0 0 no-repeat;
  }
  .barClass{
    width: 96%;
    margin: 2em 0;
  }
  .donutClass{
    border-top: 1px solid #cecece;
    width: 96%;
    margin: 0 0 2em;
  }
  .donutClass p{
    margin-top: 2em;
  }
  .barClass > div:last-of-type, .donutClass > div:last-of-type{
    position: relative;
    min-width: 0;
  }
  a{
    text-decoration: underline;
  }
  p{
    text-align: center;
    margin-bottom: 1em;
    font-family: 'Alegreya Sans', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
  }
  @media screen and (min-width: 1024px){
    .barClass, .donutClass{
      margin-bottom: 0;
      padding-bottom: 1em;
      max-width: calc((98vw - 90px) / 2);
    }
    .donutClass{
      border-left: 1px solid #cecece;
      border-top: none;
      margin-top: 2em;
    }
    .donutClass p{
      margin-top: 0;
    }
  }
</style>
