<script>
import { Line, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: {
    options: Object,
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  watch: {
    chartOptions(newChartOptions) {
      this.renderChart(this.chartData, newChartOptions);
    },
  },
  name: 'LineChart',
};
</script>

<style scoped>

</style>
