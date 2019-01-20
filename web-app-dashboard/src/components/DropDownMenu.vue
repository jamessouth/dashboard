<template>
  <div>
    <label :for="forAttr">select {{ name.toLowerCase() }}</label>
    <select
    @change="$emit('store-timezone', selected)"
    v-model="selected"
    required
    :name="forAttr"
    :id="forAttr">
      <option disabled value="">Select {{ name }}</option>
      <option
      :style="{ color: '#676666' }"
      v-for="(opt, index) in tzOptions"
      :key="index"
      :value="opt">{{ opt }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'DropDownMenu',
  data() {
    return {
      tzOptions: [],
      selected: '',
      timezoneFetch: 'https://en.wikipedia.org/w/api.php?action=parse&page=Time_zone&prop=text&section=11&format=json&origin=*',
    };
  },
  props: ['name'],
  created() {
    this.loadOptions();
  },
  mounted() {
    if (localStorage.getItem('settings')) {
      this.selected = JSON.parse(localStorage.getItem('settings')).timezone;
    }
  },
  computed: {
    forAttr() {
      return this.name.toLowerCase();
    },
  },
  methods: {
    cutOutTable(str) => str.substring(str.indexOf('<tr>'), str.lastIndexOf('</tr>') + 5),
    splitIntoRows(str) => str.split('</tr>\n<tr>'),
    removeColumnHeaders(arr) => arr.splice(1),
    pipe(...fns) => start => fns.reduce((val, fn) => fn(val), start),
    splitIntoColumns(str) => str.split('</td>\n<td>'),
    removeUnneededColumns(arr) => !arr[2].trim() ? [arr[0], arr[3]]
      : !arr[3].trim() ? [arr[0], arr[2]]
      : [arr[0], `${arr[2]},${arr[3]}`],
    removeHTMLandParens(arr) => arr.map(x => x
      .replace(/\n*<([^>]*)>\n*/g, '')
      .replace(/ *\(([^)]*)\)/g, '')),
    splitCountries(arr) => [arr[0], ...arr[1].split(/, ?/)],
    trimCountryNames(arr) => arr.map(x => x.trim()),
    finalTouches(arr) => [arr[0], ...arr.slice(1).map(x => x
      .replace(/South Georgia and the South Sandwich Islands/, 'S Georgia/S Sandwich Islands')
      .replace(/British Indian Ocean Territory/, 'BIOT')
      .replace(/,/, '')
      .replace(/Democratic Republic of the Congo/, 'DR Congo')
      .replace(/[&#\d;]/g, ''))],
    sortNames(arr) => [arr[0], ...arr.slice(1).sort((a,b) => a > b ? 1 : -1)],
    removeBlanks(arr) => arr.filter(x => !!x),
    deDupe(arr) => [...new Set(arr)],


    createOption(arr) {
      for (let i = 1; i < arr.length; i += 1) {
        this.tzOptions.push(`${arr[0]}\u00A0\u00A0${arr[i]}`);
      }
    },
    // loadTZOptions(arr) {
    //   return arr.map(x => [...new Set(x)]).forEach(this.createOption);
    // },


    async loadOptions() {
      try {
        let data = await fetch(this.timezoneFetch);
        if (data.ok) {
          data = await data.json();
        } else {
          throw new Error('Network problem - response not ok');
        }
        [this.cutOutTable,
          this.splitIntoRows,
          this.removeColumnHeaders]
        .reduce((res, nextFn) => nextFn(res), data.parse.text['*'])
        .map(pipe(this.splitIntoColumns,
          this.removeUnneededColumns,
          this.removeHTMLandParens,
          this.splitCountries,
          this.trimCountryNames,
          this.finalTouches,
          this.sortNames,
          this.removeBlanks,
          this.deDupe));



        this.loadTZOptions(data);
      } catch (err) { // eslint-disable-next-line
        alert(`There was a problem grabbing the data: ${err}.  Please try again.`);
      }
    },
  },
};
</script>

<style scoped>
  div{
    margin-top: 45px;
    position: relative;
  }
  label{
    color: transparent;
    display: block;
  }
  select{
    outline: none;
    width: 100%;
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
    outline-offset: 0;
    border: 3px solid #4D4C72;
  }
  select:required:invalid{
    color: #b9b9b9;
  }
  option[value=""][disabled]{
    display: none;
  }
</style>
