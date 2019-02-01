<template>
  <div ref="alertdiv">
    <p>
      <span>Alert</span>
      &nbsp;&nbsp;Updates available! Please close this alert box to see the changes!!
    </p>
    <button @click="close" ref="alertbtn">x</button>
  </div>
</template>

<script>
export default {
  props: {
    regObj: Object,
  },
  name: 'AlertBox',
  methods: {
    swHandle() {
      if (!this.regObj.waiting) {
        return;
      }
      this.regObj.waiting.postMessage('skipWaiting');
    },
    close() {
      this.swHandle();
      this.closeStyles();
    },
    closeStyles() {
      this.$refs.alertdiv.style.opacity = '0';
      setTimeout(() => {
        this.$refs.alertdiv.style.lineHeight = '0px';
        this.$refs.alertbtn.style.height = '0px';
      }, 1501);
      setTimeout(() => {
        this.$refs.alertdiv.children[0].style.display = 'none';
        this.$refs.alertbtn.style.display = 'none';
      }, 3005);
    },
  },
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:300');
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:800i');
  div{
    display: flex;
    justify-content: flex-start;
    width: 90%;
    margin: 0 auto;
    background-color: #7377BF;
    line-height: 42px;
    border-radius: 3px;
    position: relative;
    transition: opacity 1.5s cubic-bezier(.36, .33, 1, .68), line-height 1.5s;
  }
  button{
    position: absolute;
    font-family: 'Alegreya Sans SC', sans-serif;
    width: 18px;
    height: 30px;
    font-size: 18px;
    background-color: #7377BF;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    border: none;
    transition: font-size 1.5s;
  }
  p{
    font-family: 'Alegreya Sans', sans-serif;
    color: #fff;
    padding: 0 23px 0 18px;
    font-size: 17px;
    transition: font-size 2s;
  }
  p span{
    font-family: 'Alegreya Sans SC', sans-serif;
    letter-spacing: 0.1em;
  }
  a:link, a:visited{
    color: #fff176;
  }
  a:hover{
    color: yellow;
    text-decoration: underline;
  }
  a:active{
    color: transparent;
  }
  button:focus,
  a:focus{
    outline: 2px solid #fff176;
  }
  @media screen and (min-width: 768px){
    div{
      width: 96%;
    }
  }
</style>
