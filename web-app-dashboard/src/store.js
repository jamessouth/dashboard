import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: 'James South',
    loading: true,
    cache: {},
    settings: {},
  },
  getters: {
    dataIsCached: state => countryCode =>
      Object.prototype.hasOwnProperty.call(state.cache, countryCode),
    getDataFromCache: state => countryCode => state.cache[countryCode],
    getSettings: state => state.settings,
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
    setSettings(state, payload) {
      state.settings = payload;
    },
  },
  actions: {
    setSettings ({ commit }, settings) {
      commit('setSettings', settings);
      localStorage.setItem('settings', JSON.stringify(settings));
    },
  },
});
