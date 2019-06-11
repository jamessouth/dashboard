<script>
import { Bar, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  name: 'BarChart',
  extends: Bar,
  mixins: [reactiveProp],
  props: {
    options: Object,
  },
  watch: {
    options() {
      this.renderChart(this.chartData, this.options);
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>

<style scoped>

</style>
