<template>
  <div class="bar_donut">
    <p>daily traffic</p>
    <button></button>
    <div class="bar-chart">
      <canvas></canvas>
    </div>
    <div class="dough">
      <div class="donut-chart">
        <span>mobile users</span>
        <p></p>
        <canvas width="297" height="297"></canvas>
      </div>
      <div class="donut-legend"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BarDonut',
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Josefin+Slab:400,600');
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:800i');
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:300');
  .bar_donut{
    position: relative;
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #cecece;
    border-bottom: 1px solid #cecece;
  }
  .bar-chart{
    position: relative;
    width: 96%;
    margin: 3em auto;
  }
  .donut-chart{
    position: relative;
    border-top: 1px solid #cecece;
    width: 96%;
    padding-top: 1em;
    margin: 0 auto 1em;
  }
  span{
    position: absolute;
    font-family: 'Alegreya Sans', sans-serif;
    text-transform: uppercase;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
  }
  .donut-chart > p{
    position: absolute;
    font-family: 'Josefin Slab', serif;
    font-size: 22px;
    white-space: pre;
    bottom: 45%;
    left: 50%;
    transform: translateY(50%) translateX(-50%);
  }
  .donut-chart > canvas{
    width: 297px;
    height: 297px;
    margin: auto;
    margin-top: 20px;
    opacity: 0;
    background: url("../assets/shadow.jpg") no-repeat;
    transition: opacity 0.5s linear;
  }
  .donut-legend{
    margin-bottom: 1em;
    position: relative;
  }
  .donut-legend > ul{
    display: flex;
    justify-content: center;
  }
  .donut-legend > ul li{
    padding: 0 10px;
    display: flex;
    align-items: center;
    font-family: 'Alegreya Sans', sans-serif;
  }
  .donut-legend > ul li p{
    display: inline;
  }
  .donut-legend > ul li div{
    display: inline-block;
    margin-right: 5px;
  }
  .donut-legend > ul li:focus{
    padding: 0 10px;
    display: flex;
    align-items: center;
    font-family: 'Alegreya Sans', sans-serif;
  }
  .bar_donut > p{
    position: absolute;
    font-family: 'Alegreya Sans', sans-serif;
    text-transform: uppercase;
    left: 50%;
    top: 15px;
    transform: translateX(-50%);
  }
  button{
    font-family: 'Alegreya Sans SC', sans-serif;
    font-size: 16px;
    position: absolute;
    width: 40px;
    top: 15px;
    right: 3%;
    border: none;
    background-color: transparent;
    color: #7377bf;
    cursor: pointer;
  }
  button:focus,
  .donut-legend > ul li:focus{
    outline: 2px solid #7377bf;
  }

  @media screen and (min-width: 1024px){
    .bar-chart,
    .donut-chart{
      margin-bottom: 0;
      padding-bottom: 1em;
    }
    .bar_donut{
      flex-direction: row;
    }
    button{
      left: 45%;
    }
    .bar_donut > p{
      left: 8%;
    }
    span{
      left: 25%;
    }
    .donut-chart > p{
      bottom: 50%;
    }
    .donut-chart{
      border-left: 1px solid #cecece;
      border-top: none;
    }
    .dough{
      display: flex;
      flex-direction: row;
    }
    .dough,
    .bar-chart{
      width: 50%;
    }
    .donut-legend > ul{
      flex-direction: column;
      justify-content: space-evenly;
      height: 100%;
      margin-right: 50px;
    }
    .bar-chart{
      margin-left: 5px;
      margin-right: -5px;
    }

  }
</style>
