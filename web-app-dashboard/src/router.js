import Vue from 'vue';
import Router from 'vue-router';
import LineChartWrapper from './components/LineChartWrapper.vue';
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
      component: LineChartWrapper,
    },
  ],
});
