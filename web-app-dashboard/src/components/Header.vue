<template>
  <header>
    <h1>MyApp<span>&trade;</span></h1>
    <div>
      <button
      :disabled="!a2hsPrompt"
      :class="{ unclickable: !a2hsPrompt }"
      @click="openAlert = !openAlert">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path class="st0" d="M24 18v-8c0-5.5-4.5-10-10-10S4 4.5 4 10v8l-4 8h9.1c0.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H28L24 18zM14 28c-1.3 0-2.4-0.8-2.8-2h5.6C16.4 27.2 15.3 28 14 28zM3 24l3-6v-8c0-4.4 3.6-8 8-8s8 3.6 8 8v8l3 6H3z"></path></svg>
      </button>
      <div :style="alertStyles" class="triangle"></div>
      <div :style="alertStyles" class="dropdown">
        <button ref="pbut" @click="a2hs">Add to Home Screen</button>
      </div>
      <span :class="{ blink: a2hsPrompt }">.</span>
      <p>|</p>
      <img src="../assets/face.jpg" alt="user face or avatar">
      <p>{{ name }}</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      name: this.$store.state.name,
      openAlert: false,
      a2hsPrompt: null,
    };
  },
  beforeCreate() {
    setTimeout(() => this.$emit('a2hs'), 10132);

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.a2hsPrompt = e;
      // this.$emit('a2hs');
    });
  },
  methods: {
    async a2hs() {
      this.a2hsPrompt.prompt();
      const choice = await this.a2hsPrompt.userChoice;
      console.log(choice);
      this.a2hsPrompt = null;
      this.openAlert = false;
    },
  },
  computed: {
    alertStyles() {
      return {
        display: this.openAlert && this.a2hsPrompt ? 'block' : 'none',
      };
    },
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
  @keyframes blink{
    0%{ opacity: 0; }
    65%{ color: #81c98f; }
    90%{ color: #822c23; }
    100%{ color: #ff005c; opacity: 1; }
  }
  header{
    height: 70px;
    background-color: #7377BF;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1{
    color: #fff;
    font-family: 'uppereastsideregular';
    font-size: 50px;
    letter-spacing: 0.05em;
    padding-left: 0.125em;
  }
  h1 > span{
    font-size: 25px;
  }
  header > div{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 48%;
    text-align: center;
  }
  header > div > p:first-of-type{
    font-size: 45px;
    color: #5E62BF;
    pointer-events: none;
    padding-bottom: 8px;
  }
  header > div > p:last-of-type{
    color: #fff;
    font-family: 'Alegreya Sans', sans-serif;
  }
  .unclickable{
    pointer-events: none;
  }
  button{
    cursor: pointer;
    opacity: 0.7;
    background-color: transparent;
    border: none;
    width: 22px;
    height: 22px;
  }
  .st0{
    fill: #fbfbfb;
  }
  button:hover{
    opacity: 1;
  }
  button:focus{
    outline: 2px solid #fff176;
  }
  header > div > span{
    position: absolute;
    color: #ff005c;
    font-size: 55px;
    left: 15px;
    bottom: 28px;
    cursor: default;
    opacity: 0;
  }
  .blink{
    animation: blink .75s cubic-bezier(.68, -.55, .27, 1.55) infinite;
  }
  .dropdown{
    position: absolute;
    background-color: #822c23;
    width: 230px;
    top: 55px;
    left: -136px;
    z-index: 200;
    border-radius: 10px;
    box-shadow: 12px 14px 15px 3px #1c0000;
  }
  .dropdown button{
    opacity: 1;
    font-size: 16px;
    width: 190px;
    height: 35px;
    margin: 1.5em 0 1.5em 0;
    color: #fff;
    background-color: #81C98F;
    font-family: 'Alegreya Sans SC', sans-serif;
    border-radius: 50px;
    box-shadow: 0px 0px 9px 0px #fff;
  }
  /* ul{
    padding: 1em;
  } */
  /* .dropdown p{
    font-family: 'Alegreya Sans', sans-serif;
    font-size: 20px;
    color: #fffde7;
    border-bottom: 1px solid #fffde7;
    margin-bottom: 0.25em;
    text-align: left;
  } */
  /* li span{
    font-family: 'Alegreya Sans SC', sans-serif;
    font-size: 28px;
    color: #81c98f;
  } */
  .triangle{
    position: absolute;
    width: 0;
    height: 0;
    top: 36px;
    left: -3px;
    border-left: 17px solid transparent;
    border-right: 17px solid transparent;
    border-bottom: 19px solid #822c23;
  }
  img{
    height: 30px;
    border-radius: 50%;
  }
  @media screen and (min-width: 400px){
    header > h1{
      padding-left: 0.4em;
    }
    header > div{
      width: 185px;
      padding-right: 1em;
    }
  }
</style>
