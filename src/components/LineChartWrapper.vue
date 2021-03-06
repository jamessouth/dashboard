<template>
  <div>
    <LineChartControls
      :country="country"
      :indicator="indicator"
    />
    <line-chart
      v-if="!this.$store.state.loading && isData"
      :chart-data="chartData"
      :options="chartOptions"
    />
    <img
      v-else-if="!this.$store.state.loading && !isData"
      width="300"
      height="360"
      src="../assets/nodata.png"
      alt="no data"
    >
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
import countries from '@/assets/iso2countries';
import LineChart from './LineChart.vue';
import LineChartControls from './LineChartControls.vue';

export default {
  name: 'LineChartWrapper',
  components: {
    LineChart,
    LineChartControls,
  },
  props: {
    country: {
      type: String,
      default: '',
    },
    indicator: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      baseToolTipOpts: {
        backgroundColor: '#000',
        displayColors: false,
        titleFontColor: '#d5d5ec',
        titleFontSize: 13,
        bodyFontColor: '#ecd5d5',
        bodyFontStyle: 'bold',
        bodyFontSize: 13,
        titleMarginBottom: 6,
        callbacks: {
          title(tooltipItem) {
            return `${tooltipItem[0].xLabel}:`;
          },
        },
      },
      error: false,
      indicatorDetails: {
        gdp: 'GDP per capita (constant 2010 US$)',
        population: 'Total population',
        regulation: 'Time required to start a business (days)',
        tax: 'Total tax rate (% of commercial profits)',
      },
      countryData: {},
      chartData: null,
      masterOptions: {
        gdp: {
          tooltips: {
            callbacks: {
              label(tooltipItem) {
                const currencyFormatter = new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2,
                });
                return currencyFormatter.format(tooltipItem.yLabel);
              },
            },
          },
          scales: {
            yAxes: [{
              ticks: {
                callback(value) {
                  const currencyFormatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0,
                  });
                  return currencyFormatter.format(value);
                },
              },
            }],
          },
        },
        population: {
          tooltips: {
            callbacks: {
              label(tooltipItem) {
                const largeNumberFormatter = new Intl.NumberFormat('en-US', {
                  maximumFractionDigits: 0,
                });
                return largeNumberFormatter.format(tooltipItem.yLabel);
              },
            },
          },
          scales: {
            yAxes: [{
              ticks: {
                callback(value) {
                  const largeNumberFormatter = new Intl.NumberFormat('en-US', {
                    maximumFractionDigits: 0,
                  });
                  return largeNumberFormatter.format(value);
                },
              },
            }],
          },
        },
        regulation: {
          tooltips: {
            callbacks: {
              label(tooltipItem) {
                const numFormatter = new Intl.NumberFormat('en-US', {
                  minimumFractionDigits: 1,
                  maximumFractionDigits: 1,
                });
                return numFormatter.format(tooltipItem.yLabel);
              },
            },
          },
          scales: {
            yAxes: [{
              ticks: {
                callback(value) {
                  const numFormatter = new Intl.NumberFormat('en-US', {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                  });
                  return numFormatter.format(value);
                },
              },
            }],
          },
        },
        tax: {
          tooltips: {
            callbacks: {
              label(tooltipItem) {
                const percentFormatter = new Intl.NumberFormat('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                });
                return `${percentFormatter.format(tooltipItem.yLabel)}%`;
              },
            },
          },
          scales: {
            yAxes: [{
              ticks: {
                callback(value) {
                  const percentFormatter = new Intl.NumberFormat('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  });
                  return `${percentFormatter.format(value)}%`;
                },
              },
            }],
          },
        },
      },
    };
  },
  computed: {
    isData() {
      return this.chartData && this.chartData.datasets[0].data.length > 0;
    },
    chartOptions() {
      return {
        scales: this.masterOptions[this.indicator].scales,
        tooltips: {
          ...this.baseToolTipOpts,
          callbacks: {
            ...this.masterOptions[this.indicator].tooltips.callbacks,
            ...this.baseToolTipOpts.callbacks,
          },
        },
      };
    },
  },
  beforeRouteEnter(to, from, next) {
    next(async (vm) => {
      const code = vm.lookupCountryCode(vm.country);
      const indicatorName = vm.getIndicatorName(vm.indicator);
      await vm.getData(code);
      vm.setProps(indicatorName);
    });
  },
  async beforeRouteUpdate(to, from, next) {
    this.$store.commit('toggleLoadingStatus'); // to true
    const code = this.lookupCountryCode(to.params.country);
    const indicatorName = this.getIndicatorName(to.params.indicator);
    if (code instanceof Error || code.message || indicatorName === 'error') {
      this.error = true;
      this.$store.commit('toggleLoadingStatus'); // to false
      next(false);
    } else {
      this.error = false;
      if (this.$store.getters.dataIsCached(code)) {
        this.$store.commit('toggleLoadingStatus'); // to false
        this.countryData = await this.$store.getters.getDataFromCache(code);
      } else {
        await this.getData(code);
      }
      this.setProps(indicatorName);
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
            label: this.indicatorDetails[indicator],
            data: data.data,
            backgroundColor: 'rgba(115,119,191,0.3)',
            lineTension: 0,
            borderColor: '#7377BF',
            borderWidth: 1,
            pointRadius: 4,
            pointBorderWidth: 2,
            pointBorderColor: '#7377BF',
            pointBackgroundColor: '#fbfbfb',
            pointHoverRadius: 4,
          },
        ],
      };
    },
    getIndicatorName(indicator) {
      if (['gdp', 'population', 'regulation', 'tax'].includes(indicator)) {
        return indicator;
      }
      return 'error';
    },
    lookupCountryCode(country) {
      const lookup = countries.filter((c) => c.country.toLowerCase().replace(/ /g, '-') === country);
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
        let data = await fetch(`https://api.worldbank.org/v2/countries/${code}/indicators/${indicatorCode}?MRV=5&format=json`);
        if (data.ok) {
          data = await data.json();
        } else {
          throw new Error('Network problem - response not ok');
        }
        if (data[1] === null) {
          throw new Error('No data available for this location or series');
        }
        await data[1].forEach((x) => {
          slimData.labels.unshift(x.date);
          slimData.data.unshift(x.indicator.id.includes('POP') ? x.value : (Math.round(x.value * 100) / 100).toFixed(2));
        });
      } catch (err) { // eslint-disable-next-line
        alert(`There was a problem grabbing the data: ${err}.  Please try again.`);
      }
      return slimData;
    },
    async getData(code) {
      const [gdp, population, regulation, tax] = await Promise.all([
        this.makeAPICall(code, 'NY.GDP.PCAP.KD'),
        this.makeAPICall(code, 'SP.POP.TOTL'),
        this.makeAPICall(code, 'IC.REG.DURS'),
        this.makeAPICall(code, 'IC.TAX.TOTL.CP.ZS'),
      ]);
      const master = {
        gdp, population, regulation, tax, code,
      };
      this.$store.commit('cacheData', master);
      this.countryData = master;
      this.$store.commit('toggleLoadingStatus'); // to false
    },
  },
};
</script>

<style scoped>
  div > div{
    color: red;
  }
  img{
    display: block;
    margin: auto;
  }
</style>
