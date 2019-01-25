<template>
  <div id="app">
    <Header></Header>
    <div id="hold">
      <Nav v-if="showNav"></Nav>
      <Main @show-nav="showNav = true"></Main>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default{
  data() {
    return {
      showNav: false,
    };
  },
  components: {
    Header,
    Nav: () => import(/* webpackChunkName: "Nav" */ './components/Nav.vue').catch(err => console.log(err)),
    Main,
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
  @media screen and (min-width: 768px){
    #hold{
      display: flex;
    }
  }
</style>
