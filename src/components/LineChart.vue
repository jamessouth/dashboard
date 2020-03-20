<script>
import { Line, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  name: 'LineChart',
  extends: Line,
  mixins: [reactiveProp],
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  watch: {
    chartOptions(newChartOptions) {
      this.renderChart(this.chartData, newChartOptions);
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>

<style scoped>

</style>
