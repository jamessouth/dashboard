

<script>
import { Line, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  // props: ['chartLabels'],
  mounted() {
    this.renderChart(this.chartData);
  },
  name: 'LineChart',
};
</script>

<style scoped>

</style>
