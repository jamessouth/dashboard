import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: 'James South',
    loading: true,
    cache: {},
  },
  getters: {
    // dataIsCurrent: state => countryCode =>
    //   Object.prototype.hasOwnProperty.call(state.currentData, countryCode),
    dataIsCached: state => countryCode =>
      Object.prototype.hasOwnProperty.call(state.cache, countryCode),
    getDataFromCache: state => countryCode => state.cache[countryCode],
  },
  mutations: {
    toggleLoadingStatus(state) {
      state.loading = !state.loading;
    },
    cacheData(state, payload) {
      const dataToAdd = {
        [payload.code]: payload,
      };
      state.cache = { ...state.cache, ...dataToAdd };
    },
  },
  actions: {
    // async getData({ commit, getters }, countryCode) {
    //   const code = countryCode.countryCode;
    //
    //   if (getters.dataIsCurrent(code)) {
    //     console.log(getters.dataIsCurrent(code));
    //     return;
    //   }
    //
    //   if (getters.dataIsCached(code)) {
    //     console.log(getters.dataIsCached(code));
    //     console.log(getters.getDataFromCache(code));
    //     commit('setCurrentData', getters.getDataFromCache(code));
    //     return;
    //   }
    // },
  },
});
