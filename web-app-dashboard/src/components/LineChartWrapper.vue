<template>
  <div>
    <LineChart :data="chartData"></LineChart>
    <p>{{ country }} {{ error }}</p>
  </div>
</template>

<script>
import countries from '@/assets/iso2countries';
import LineChart from './LineChart.vue';

export default {

  data() {
    return {
      error: false,
      chartData: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20],
          },
        ],
      },
    };
  },
  props: ['country'],
  name: 'LineChartWrapper',
  components: {
    LineChart,
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.getData(vm.$store.state.defaultCountryCode));
  },
  beforeRouteUpdate(to, from, next) {
    console.log('update');
    const code = this.lookupCountryCode(to.params.country);

    if (code instanceof Error || code.message) {
      this.error = true;
      next(false);
    } else {
      this.error = false;
      if (this.$store.getters.dataIsCached(code)) {
        this.$store.getters.getDataFromCache(code);
      } else {
        this.getData(code);
      }
      next();
    }
  },
  methods: {
    lookupCountryCode(country) {
      const lookup = countries.filter(c => c.country.toLowerCase().replace(/ /g, '-') === country);
      try {
        return lookup[0].code.toLowerCase();
      } catch (err) {
        return err;
      }
    },
    async makeAPICall(code, indicator) {
      const slimData = {
        years: [],
        data: [],
      };
      try {
        // console.log(code);
        let data = await fetch(`http://api.worldbank.org/v2/countries/${code}/indicators/${indicator}?MRV=5&format=json`);
        console.log('data fetch');
        // console.log(data);
        if (data.ok) {
          data = await data.json();
        } else {
          throw new Error('Network problem - response not ok');
        }

        if (data[1] === null) {
          // commit('clearCurrentData');
          throw new Error('No data available for this location');
        }

        // console.log(data);
        await data[1].forEach((x) => {
          slimData.years.push(x.date);
          slimData.data.push(x.indicator.id.includes('POP') ? x.value : (Math.round(x.value * 100) / 100).toFixed(2));
        });

        // console.log(slimData);
        // commit('setCurrentData', slimData);
        // commit('cacheData');
      } catch (err) {
        alert(`There was a problem grabbing the data: ${err}.  Please try again.`);
      }
      return slimData;
    },
    async getData(code) {
      const [gdp, pop, reg, int] = await Promise.all([
        this.makeAPICall(code, 'NY.GDP.PCAP.KD'),
        this.makeAPICall(code, 'SP.POP.TOTL'),
        this.makeAPICall(code, 'IC.REG.DURS'),
        this.makeAPICall(code, 'FR.INR.RINR'),
      ]);


      // console.log(gdp, pop, reg, int);
      const master = {
        gdp, pop, reg, int, code,
      };
      // console.log(master);
      this.$store.commit('cacheData', master);
      console.log('here');
    },
  },
};
</script>

<style scoped>


  /* .line-chart{
    position: relative;
    width: 96%;
    margin: 1.5em auto 1em;
  }

  @media screen and (min-width: 768px){
    .line-chart{
      width: 94%;
    }
  } */
</style>
