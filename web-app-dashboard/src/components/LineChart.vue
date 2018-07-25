<template>
  <div class="line-chart">
    <canvas></canvas>
    <p>{{ country }}, {{  }}</p>
  </div>
</template>

<script>
// this.$store.state.currentData
import countries from '@/assets/iso2countries';

export default {
  props: ['country'],
  name: 'LineChart',
  beforeRouteEnter(to, from, next) {

  },
  beforeRouteUpdate(to, from, next) {

  },
  methods: {
    lookupCountryCode(country) {
      return countries.filter((c) => c.country.toLowerCase().replace(/ /g, '-') === country)[0].code.toLowerCase();
    },
    async getData(country) {
      const code = lookupCountryCode(country);



    },
  },
};
</script>

<style scoped>


  .line-chart{
    position: relative;
    width: 96%;
    margin: 1.5em auto 1em;
  }

  @media screen and (min-width: 768px){
    .line-chart{
      width: 94%;
    }
  }
</style>
