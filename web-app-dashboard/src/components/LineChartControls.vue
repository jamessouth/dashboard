<template>
  <div id="charts" class="line-controls">
    <div class="dropdown">
      <select>
        <option selected disabled value="">Select Country</option>
      </select>
      <button @click="changeCountry_Route">GO!</button>
    </div>
    <div
    ref="linebuttons"
    @click="changeIndicator_Subroute"
    class="line-buttons">
      <button
      :value="item.toLowerCase()"
      :key="index"
      :class="{ lineSelected: item.toLowerCase() === indicator }"
      v-for="(item, index) in indicators">
        {{ item }}
      </button>
    </div>
    <p>
      <a class="newwindow" rel="noopener noreferrer" target="_blank" href="https://data.worldbank.org/">world bank data</a>&nbsp;&nbsp;<span :style="spanCols">{{ loadingOrCountry }}</span>
    </p>
  </div>
</template>

<script>
import countries from '@/assets/iso2countries';

export default {
  name: 'LineChartControls',
  props: {
    country: String,
    indicator: String,
  },
  watch: {
    $route(to) {
      const buttonToFocus = [...this.$refs.linebuttons.children].filter(x =>
        x.value === to.params.indicator)[0];
      if (buttonToFocus !== document.activeElement) {
        buttonToFocus.focus();
      }
    },
  },
  computed: {
    spanCols() {
      return {
        color: this.$store.state.loading ? 'red' : '#7377bf',
      };
    },
    loadingOrCountry() {
      if (this.$store.state.loading) {
        return 'Loading...';
      }
      return ` for: ${this.country.replace(/-/g, ' ')}`;
    },
  },
  data() {
    return {
      selectedIndicatorIndex: 0,
      indicators: [
        'GDP',
        'Population',
        'Regulation',
        'Tax',
      ],
    };
  },
  methods: {
    changeCountry_Route() {
      const country = document.querySelector('select').value;
      this.$router.push(`/${country}`.toLowerCase().replace(/ /g, '-'));
    },
    changeIndicator_Subroute(e) {
      const subroute = e.target.innerText.toLowerCase();
      this.$router.push(`/${this.country}/${subroute}`);
    },
  },
  mounted() {
    for (let i = 0; i < countries.length; i += 1) {
      const opt = document.createElement('option');
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
    grid-template-columns: 1fr;
    grid-template-rows: 100px 70px 34px;
    grid-template-areas: "drop" "line" "para";
  }
  .dropdown{
    grid-area: drop;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .line-buttons{
    display: flex;
    align-self: center;
    grid-area: line;
  }
  p{
    grid-area: para;
    font-family: 'Alegreya Sans', sans-serif;
    text-transform: uppercase;
  }
  span{
    font-family: 'Alegreya Sans SC', sans-serif;
    text-transform: none;
  }
  a{
    text-decoration: underline;
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
  button:not(.lineSelected){
    color: #676666;
    background-color: transparent;
  }
  button:focus{
    outline: 2px solid #7377bf;
  }
  select + button{
    border-style: outset;
    border-radius: 20px;
    border-color: #d81420;
  }
  .newwindow::after{
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url('../assets/newwindow.png') 0 0 no-repeat;
  }
  .lineSelected{
    color: #fff;
    background-color: #81C98F;
    padding: 2px 10px;
    border-radius: 50px;
  }
  select{
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
    appearance: none;
    transition: border 0.7s ease-out;
  }
  select:focus{
    outline: 2px solid #7377bf;
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
  #charts:target{
    padding-top: 41px;
  }
  @media screen and (max-width: 399px){
    /* #charts:target > p{
      top: 67px;
    } */
  }
  @media screen and (min-width: 400px){
    .dropdown{
      flex-direction: row;
      align-items: center;
      width: 310px;
    }
    .line-controls{
      grid-template-rows: 60px 54px 50px;
    }
    p{
      align-self: center;
    }
  }
  @media screen and (min-width: 400px) and (max-width: 767px){
    /* #charts:target > p{
      top: 54px;
    } */
  }
  @media screen and (max-width: 767px){

  }
  @media screen and (min-width: 768px){
    .line-controls{
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 70px 40px;
      grid-template-areas: "drop line" "para para";
    }
    p{
      justify-self: auto;
    }
  }
</style>
