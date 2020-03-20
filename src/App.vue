<template>
  <div id="app">
    <HeaderBar
      @a2hs="alert = true"
      @a2hsOffered="alert = false"
      @head="header"
    />
    <div id="hold">
      <NavBar
        v-if="showNav"
        :alert="alert"
        :head-shown="headShown"
      />
      <MainElement @show-nav="showNav = true" />
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue';
import MainElement from './components/MainElement.vue';

export default {
  components: {
    HeaderBar, // eslint-disable-next-line
    NavBar: () => import(/* webpackChunkName: "NavBar" */ './components/NavBar.vue').catch(err => console.log(err)),
    MainElement,
  },
  data() {
    return {
      showNav: false,
      alert: false,
      headShown: null,
    };
  },
  methods: {
    header(b) {
      this.headShown = b;
    },
  },
};
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
  }
</style>
