<template>
  <header>
    <h1>MyApp<span>&trade;</span></h1>
    <div>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path class="st0" d="M24 18v-8c0-5.5-4.5-10-10-10S4 4.5 4 10v8l-4 8h9.1c0.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H28L24 18zM14 28c-1.3 0-2.4-0.8-2.8-2h5.6C16.4 27.2 15.3 28 14 28zM3 24l3-6v-8c0-4.4 3.6-8 8-8s8 3.6 8 8v8l3 6H3z"></path></svg>
      </button>
      <div class="triangle"></div>
      <div class="dropdown">
        <ul>
          <li><span>alert </span> MyApp has loaded!</li>
          <li><span>alert </span> Click everything!</li>
          <li><span>alert </span> It all works!</li>
          <li><span>alert </span> Check it out! </li>
        </ul>
      </div>
      <span>.</span>
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
    };
  },
};
</script>

<style scoped>
  @keyframes blink{
    0%{ color: #85db81; }
    100%{ color: #ff005c; }
  }
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:800i');
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:300');
  @font-face {
    font-family: 'uppereastsideregular';
    src: url('../assets/UpperEastSide-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
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
    padding-bottom: 8px;
  }
  header > div > p:last-of-type{
    color: #fff;
    font-family: 'Alegreya Sans', sans-serif;
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
    color: #85DB81;
    font-size: 55px;
    left: 15px;
    bottom: 28px;
    cursor: default;
    /* animation: blink 0.75s linear infinite; */
  }
  .dropdown{
    display: none;
    position: absolute;
    background-color: #822c23;
    width: 250px;
    top: 55px;
    left: -136px;
    z-index: 200;
    border-radius: 4px;
    box-shadow: 12px 14px 15px 3px #1c0000;
  }
  ul{
    padding: 1em;
  }
  li{
    font-family: 'Alegreya Sans', sans-serif;
    font-size: 20px;
    color: #fffde7;
    border-bottom: 1px solid #fffde7;
    margin-bottom: 0.25em;
    text-align: left;
  }
  li span{
    font-family: 'Alegreya Sans SC', sans-serif;
    font-size: 28px;
    color: #81c98f;
  }
  .triangle{
    display: none;
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
