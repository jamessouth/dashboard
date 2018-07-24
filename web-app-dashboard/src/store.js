import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: 'James South',
    currentData: {},
    cache: {},
  },
  getters: {
    dataIsCurrent: state => countryCode =>
      Object.prototype.hasOwnProperty.call(state.currentData, countryCode),
    dataIsCached: state => countryCode =>
      Object.prototype.hasOwnProperty.call(state.cache, countryCode),
    getDataFromCache: state => countryCode => state.cache[countryCode],
  },
  mutations: {
    addData(state, payload) {
      state.currentData = {
        [payload.countryCode]: {
          years: payload.years,
          data: payload.data,
          countryCode: payload.countryCode,
        },
      };
    },
    cacheData(state) {
      state.cache = { ...state.cache, ...state.currentData };
    },
  },
  actions: {
    async getData({ commit, getters }, countryCode) {
      const code = countryCode.countryCode;
      console.log(getters.dataIsCurrent(code));
      console.log(getters.dataIsCached(code));


      if (getters.dataIsCurrent(code)) {
        return;
      }

      if (getters.dataIsCached(code)) {
        console.log(getters.getDataFromCache(code));
        commit('addData', getters.getDataFromCache(code));
        return;
      }

      const slimData = {
        years: [],
        data: [],
        countryCode: code,
      };
      console.log(code);
      let data = await fetch(`http://api.worldbank.org/v2/countries/${code}/indicators/NY.GDP.PCAP.KD?MRV=5&format=json`);
      console.log('data fetch');

      if (data.ok) {
        data = await data.json();
      } else {
        throw new Error('Network problem - response not ok');
      }

      // console.log(data);
      await data[1].forEach((x) => { // no data like channel islands
        slimData.years.push(x.date);
        slimData.data.push(x.indicator.id.includes('POP') ? x.value : (Math.round(x.value * 100) / 100).toFixed(2));
      });

      console.log(slimData);
      commit('cacheData');
      commit('addData', slimData);
    },
  },
});
