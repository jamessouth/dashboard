<template>
  <div class="alert-div">
    <p>
      <span>Alert</span>&nbsp;&nbsp;&nbsp;Featuring: <a href="http://www.chartjs.org/">Chart.js</a>, <a href="http://momentjs.com/">Moment.js</a>, two API calls (<a href="https://www.mediawiki.org/wiki/API:Main_page">Wikipedia</a> and <a href="https://randomuser.me/">randomuser.me</a>), a homemade dropdown menu and homemade switches! You can use the keyboard as well, no mouse required!
    </p>
    <button>x</button>
  </div>
</template>

<script>
export default {
  name: 'AlertBox',
};
</script>


<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:300');
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:800i');
  .alert-div{
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
    .alert-div{
      width: 96%;
    }

  }

</style>
