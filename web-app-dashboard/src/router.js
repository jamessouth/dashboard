import Vue from 'vue';
import Router from 'vue-router';
import LineChart from './components/LineChart.vue';
// import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/united-states',
    },
    {
      path: '/:country',
      name: 'country',
      props: true,
      component: LineChart,
    },
  ],
});
