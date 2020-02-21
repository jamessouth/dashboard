import Vue from 'vue';
import VueMoment from 'vue-moment';
import moment from 'moment';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueMoment, {
  moment,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
