<template>

  <div id="visits" class="line-controls">

    <!-- <div class="dropdown"> -->
      <select @change="changeCountry">
        <option selected disabled value="">Select Country</option>
      </select>
      <button>GO!</button>
    <!-- </div> -->

    <div class="line-buttons">
      <button class="line-selected">GDP</button>
      <button>Population</button>
      <button>Business</button>
      <button>Interest Rate</button>
    </div>

    <p>
      <a class="newwindow" rel="noopener noreferrer" target="_blank" href="https://data.worldbank.org/">world bank data</a> - <span id="wbdata"></span>
    </p>

  </div>

</template>

<script>
import countries from '@/assets/iso2countries';

export default {
  name: 'LineChartControls',
  methods: {
    changeCountry(e) {
      console.log(e);
    },
  },
  mounted() {
    for (let i = 0; i < countries.length; i += 1) {
      const opt = document.createElement('option');
      opt.value = `${countries[i].code}`;
      opt.textContent = `${countries[i].country}`;
      document.querySelector('select').appendChild(opt);
    }
  },
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:800i');
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:300');
  .line-controls{
    margin-top: 2em;

    display: grid;
    justify-items: center;
    /* align-items: center; */
    grid-template-columns: 1fr;
    grid-template-rows: 66px 30px 60px 20px;
    grid-template-areas: "select"
    "go"
    "line"
    "para";
    /* align-items: center; */
  }

  .line-buttons{
    display: flex;
    justify-content: center;
    align-self: center;
    grid-area: line;
  }
  p{
    grid-area: para;
    justify-self: start;
    font-family: 'Alegreya Sans', sans-serif;
    text-transform: uppercase;
    margin-left: 6px;
  }
  a{
    text-decoration: underline;
  }
  select + button{
    grid-area: go;
    align-self: end;
  }
  button{
    font-family: 'Alegreya Sans SC', sans-serif;
    padding: 4px 10px;
    font-size: 16px;
    border: none;
  }
  button:hover{
    cursor: pointer;
  }
  button:not(.line-selected){
    color: #676666;
    background-color: transparent;
  }
  button:focus{
    outline: 2px solid #7377bf;
  }
  .newwindow::after{
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url('../assets/newwindow.png') 0 0 no-repeat;
  }
  .line-selected{
    color: #fff;
    background-color: #81C98F;
    padding: 2px 10px;
    border-radius: 50px;
  }
  select{
    grid-area: select;
    outline: none;
    width: 250px;
    height: 50px;
    background: url(../assets/downArrow.jpg) no-repeat 100%;
    font-size: 17px;
    font-family: 'Alegreya Sans', sans-serif;
    background-color: #fbfbfb;
    box-shadow: 0 0 0 1px #cecece;
    border: 3px solid transparent;
    border-radius: 5px;
    padding: 0.75em 0.5em;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    transition: border 0.7s ease-out;
  }
  select:required:invalid{
    color: #b9b9b9;
  }
  option[value=""][disabled]{
    display: none;
  }
  option{
    color: #676666;
  }

  @media screen and (max-width: 399px){

    #visits:target > p{
      top: 67px;
    }
  }

  @media screen and (min-width: 342px){

    .line-controls{
      /* margin-top: 2em;
      display: grid;
      justify-items: center;
      align-items: start;
      grid-template-columns: 1fr; */
      grid-template-rows: 66px 30px 50px 20px;
      /* grid-template-areas: "select" "go" "line" "para"; */
    }


  }

  @media screen and (min-width: 400px){

    .line-controls{
      /* margin-top: 2em;
      display: grid; */
      /* justify-items: center; */
      /* align-items: start; */
      grid-template-columns: 1fr 100px;
      grid-template-rows: 60px 50px 30px;
      grid-template-areas: "select go" "line line" "para .";
    }
    select + button{
      align-self: center;
      justify-self: start;
    }


  }

  @media screen and (min-width: 400px) and (max-width: 767px){
    #visits:target > p{
      top: 54px;
    }
  }

  @media screen and (max-width: 767px){

    #visits:target{
      padding-top: 41px;
    }
  }

  @media screen and (min-width: 1024px){
    p{
      /* left: 14px;
      top: 50%;
      transform: translateY(-50%); */
    }
    .line-buttons{
      justify-content: flex-end;
      padding-right: 3%;
    }
  }

</style>
