<template>
  <div>
    <line-chart
      v-if="!this.$store.state.loading"
      :chart-data="chartData">
    </line-chart>
    <div v-else>Loading...</div>
    <p>{{ country }} {{ indicator }} {{ error }} {{ this.$store.state.loading }}</p>
  </div>
</template>

<script>
import countries from '@/assets/iso2countries';
import LineChart from './LineChart.vue';

export default {

  data() {
    return {
      error: false,
      countryData: {},
      chartData: null,
    };
  },
  props: ['country', 'indicator'],
  name: 'LineChartWrapper',
  components: {
    LineChart,
  },
  beforeRouteEnter(to, from, next) {
    console.log('enter');
    next(async (vm) => {
      const code = vm.lookupCountryCode(vm.country);
      const indicatorName = vm.getIndicatorName(vm.indicator);
      await vm.getData(code);
      vm.setProps(indicatorName);
      console.log('end enter');
    });
  },
  async beforeRouteUpdate(to, from, next) {
    console.log('update');
    this.$store.commit('toggleLoadingStatus'); // to true
    const code = await this.lookupCountryCode(to.params.country);
    const indicatorName = await this.getIndicatorName(to.params.indicator);
    console.log(indicatorName);
    if (code instanceof Error || code.message) {
      this.error = true;
      this.$store.commit('toggleLoadingStatus'); // to false
      next(false);
    } else {
      this.error = false;
      if (this.$store.getters.dataIsCached(code)) {
        this.$store.commit('toggleLoadingStatus'); // to false
        this.countryData = await this.$store.getters.getDataFromCache(code);
        this.setProps(indicatorName);
      } else {
        await this.getData(code);
        this.setProps(indicatorName);
      }
      next();
    }
  },
  methods: {
    setProps(indicator) {
      const data = this.countryData[indicator];
      this.chartData = {
        labels: data.labels,
        datasets: [
          {
            data: data.data,
          },
        ],
      };
    },
    getIndicatorName(indicator) {
      if (indicator) {
        if (indicator.toLowerCase().includes('pop')) {
          return 'population';
        } else if (indicator.toLowerCase().includes('reg')) {
          return 'regulation';
        } else if (indicator.toLowerCase().includes('int')) {
          return 'realInterestRate';
        }
        return 'gdp';
      }
      return 'gdp';
    },
    lookupCountryCode(country) {
      const lookup = countries.filter(c => c.country.toLowerCase().replace(/ /g, '-') === country);
      try {
        return lookup[0].code.toLowerCase();
      } catch (err) {
        return err;
      }
    },
    async makeAPICall(code, indicatorCode) {
      const slimData = {
        labels: [],
        data: [],
      };
      try {
        // console.log(code);
        let data = await fetch(`http://api.worldbank.org/v2/countries/${code}/indicators/${indicatorCode}?MRV=5&format=json`);
        console.log('data fetch');
        // console.log(data);
        if (data.ok) {
          data = await data.json();
        } else {
          throw new Error('Network problem - response not ok');
        }

        if (data[1] === null) {
          throw new Error('No data available for this location');
        }

        // console.log(data);
        await data[1].forEach((x) => {
          slimData.labels.push(x.date);
          slimData.data.push(x.indicator.id.includes('POP') ? x.value : (Math.round(x.value * 100) / 100).toFixed(2));
        });
      } catch (err) {
        alert(`There was a problem grabbing the data: ${err}.  Please try again.`);
      }
      return slimData;
    },
    async getData(code) {
      const [gdp, population, regulation, realInterestRate] = await Promise.all([
        this.makeAPICall(code, 'NY.GDP.PCAP.KD'),
        this.makeAPICall(code, 'SP.POP.TOTL'),
        this.makeAPICall(code, 'IC.REG.DURS'),
        this.makeAPICall(code, 'FR.INR.RINR'),
      ]);

      const master = {
        gdp, population, regulation, realInterestRate, code,
      };
      // console.log(master);
      this.$store.commit('cacheData', master);
      this.countryData = master;
      this.$store.commit('toggleLoadingStatus'); // to false
      console.log('here');
    },
  },
};
</script>

<style scoped>

  div > div{
    color: red;
  }

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
