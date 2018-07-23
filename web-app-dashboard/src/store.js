import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: 'James South',
    data: {},
  },
  getters: {

  },
  mutations: {
    addData(state, payload) {
      // console.log(state);

      state.data = {
        ...state.data,
        [payload.countryCode.countryCode]: {
          years: payload.years,
          data: payload.data,
        },
      };

      // console.log(state);
    },
  },
  actions: {
    async getData(context, countryCode) {
      const slimData = {
        years: [],
        data: [],
        countryCode,
      };
      console.log(context, countryCode.countryCode);
      let data = await fetch(`http://api.worldbank.org/v2/countries/${countryCode.countryCode}/indicators/NY.GDP.PCAP.KD?MRV=5&format=json`);
      console.log('data fetch');

      if (data.ok) {
        data = await data.json();
      } else {
        throw new Error('Network problem - response not ok');
      }

      console.log(data);
      await data[1].forEach((x) => {
        slimData.years.push(x.date);
        slimData.data.push(x.indicator.id.includes('POP') ? x.value : (Math.round(x.value * 100) / 100).toFixed(2));
      });

      console.log(slimData);
      context.commit('addData', slimData);
    },
  },
});
