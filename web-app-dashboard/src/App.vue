<template>
  <div id="app">
    <Header></Header>
    <div id="hold">
      <Nav></Nav>
      <Main></Main>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Nav from './components/Nav.vue';
import Main from './components/Main.vue';

export default{
  components: {
    Header,
    Nav,
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
