<template>
  <div>
    <Message></Message>
    <Settings></Settings>
  </div>
</template>

<script>
import Message from './Message.vue';
import Settings from './Settings.vue';

export default {
  name: 'MessageSettings',
  components: {
    Message,
    Settings,
  },
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:800i');
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:300');
  @font-face {
    font-family: 'uppereastsideregular';
    src: url('../assets/UpperEastSide-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2em;
  }
  @media screen and (min-width: 768px){
    div{
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
    }
  }
</style>
