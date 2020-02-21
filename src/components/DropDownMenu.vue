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
const parse5 = require('parse5');
const treeAdapters = require('parse5/lib/tree-adapters/default.js');

export default {
  name: 'DropDownMenu',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      tzOptions: [],
      selected: '',
      timezoneFetch: 'https://en.wikipedia.org/w/api.php?action=parse&page=Time_zone&prop=text&section=11&format=json&origin=*',
    };
  },
  computed: {
    forAttr() {
      return this.name.toLowerCase();
    },
  },
  created() {
    this.loadOptions();
  },
  mounted() {
    if (localStorage.getItem('settings')) {
      this.selected = JSON.parse(localStorage.getItem('settings')).timezone;
    }
  },
  methods: {
    getNames(node) {
      if (node.nodeName === 'a') {
        return treeAdapters.getTextNodeContent(node.childNodes[0]);
      }
      const anchor = node.childNodes.filter((n) => n.nodeName === 'a')[0];
      return this.getNames(anchor);
    },
    pipe(...fns) {
      return function inner(start) {
        return fns.reduce((val, fn) => fn(val), start);
      };
    },
    cutOutTable(str) { return str.substring(str.indexOf('<tr>'), str.lastIndexOf('</tr>') + 5); },
    splitIntoRows(str) { return str.split('</tr>\n<tr>'); },
    removeColumnHeaders(arr) { return arr.splice(1); },
    splitIntoColumns(str) { return str.split('</td>\n<td>'); },
    removeUnneededColumns(arr) {
      if (!arr[2].trim()) {
        return [arr[0], arr[3]];
      }
      if (!arr[3].trim()) {
        return [arr[0], arr[2]];
      }
      return [arr[0], `${arr[2]},${arr[3]}`];
    },
    getOffset(arr) {
      const parsedHTML = parse5.parseFragment(arr[0]).childNodes[1].childNodes[0].childNodes[0];
      return [treeAdapters.getTextNodeContent(parsedHTML), arr[1]];
    },
    filterPlaceNames(arr) {
      const parsedHTML = parse5.parseFragment(arr[1]);
      return [arr[0], treeAdapters.getChildNodes(parsedHTML).filter((x) => ['a', 'p'].includes(x.nodeName))];
    },
    extractPlaceNames(arr) {
      const names = arr[1].map(this.getNames);
      return [arr[0], ...names];
    },
    removeErrantEntries(arr) {
      if (arr[0] === 'UTC+01:00') {
        const ind = arr.indexOf('metropolitan');
        arr.splice(ind, 1);
      }
      return [...arr];
    },
    finalTouches(arr) {
      return [arr[0], ...arr.slice(1).map((x) => x
        .replace(/South Georgia and the South Sandwich Islands/, 'S Georgia/S Sandwich Islands')
        .replace(/British Indian Ocean Territory/, 'BIOT')
        .replace(/,/, '')
        .replace(/ *time/i, '')
        .replace(/Democratic Republic of the Congo/, 'DR Congo')
        .replace(/[&#\d;]/g, ''))];
    },
    sortNames(arr) { return [arr[0], ...arr.slice(1).sort((a, b) => (a > b ? 1 : -1))]; },
    deDupe(arr) { return [...new Set(arr)]; },
    makeOptions(arr) { return arr.slice(1).map((x, i, a) => `${arr[0]}\u00A0\u00A0${a[i]}`); },
    async loadOptions() {
      try {
        let data = await fetch(this.timezoneFetch);
        if (data.ok) {
          data = await data.json();
        } else {
          throw new Error('Network problem - response not ok');
        }
        this.tzOptions = [
          this.cutOutTable,
          this.splitIntoRows,
          this.removeColumnHeaders,
        ]
          .reduce((res, nextFn) => nextFn(res), data.parse.text['*'])
          .map(this.pipe(
            this.splitIntoColumns,
            this.removeUnneededColumns,
            this.getOffset,
            this.filterPlaceNames,
            this.extractPlaceNames,
            this.removeErrantEntries,
            this.finalTouches,
            this.sortNames,
            this.deDupe,
            this.makeOptions,
          ))
          .reduce((acc, nextArr) => [...acc, ...nextArr]);
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
    height: 51.5px;
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
