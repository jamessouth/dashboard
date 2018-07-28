

<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  props: ['masterData', 'indicator'],
  computed: {
    data() {
      if (this.indicator) {
        if (this.indicator.toLowerCase().includes('pop')) {
          return this.masterData.population;
        } else if (this.indicator.toLowerCase().includes('reg')) {
          return this.masterData.regulation;
        } else if (this.indicator.toLowerCase().includes('int')) {
          return this.masterData.realInterestRate;
        }
      }
      return this.masterData.gdpPerCapita;
    },
  },
  mounted() {
    this.renderChart(this.data);
  },
  name: 'LineChart',
};
</script>

<style scoped>

</style>
