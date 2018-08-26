<template>
  <div>
    <label :for="forAttr">select {{ name.toLowerCase() }}</label>
    <select @change="$emit('store-timezone', selected)" v-model="selected" required :name="forAttr" :id="forAttr">
      <option disabled value="">Select {{ name }}</option>
      <option :style="{ color: '#676666' }" v-for="(opt, index) in tzOptions" :key="index" :value="opt">{{ opt }}</option>
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
      this.selected = JSON.parse(localStorage.getItem('settings'))[timezone];
    }
  },
  computed: {
    forAttr() {
      return this.name.toLowerCase();
    },
  },
  methods: {
    createOption(arr) {
      for (let i = 1; i < arr.length; i += 1) {
        this.tzOptions.push(`${arr[0]}\u00A0\u00A0${arr[i]}`);
      }
    },
    loadTZOptions(arr) {
      return arr.map((x) => [...new Set(x)]).forEach(this.createOption);
    },
    processTZData(data) {
      const reg = new RegExp(/\n*<([^>]*)>\n*/g);
      let res = data.substring(data.indexOf('<tr>'), data.lastIndexOf('</tr>') + 5);
      res = res.split('</tr>\n<tr>');
      res.shift();
      for (let i = 0; i < res.length; i += 1) {
        res[i] = res[i].split('</td>\n<td>');
        res[i].splice(1, 1);
        [res[i][0], res[i][1], res[i][2]] = [res[i][0].replace(reg, ''), res[i][1].replace(reg, ''), res[i][2].replace(reg, '')];
        if (!res[i][1] || !res[i][1].trim()) {
          res[i].splice(1, 1);
        }
        if (!res[i][2] || !res[i][2].trim()) {
          res[i].splice(2);
        }
        res[i][1] = res[i][1].replace(/ *\(([^\)]*)\)/g, '');
        res[i][1] = res[i][1].split(', ').map(x => x.trim().replace(/[&#\d;]/g, ''));
        if (res[i][2]) {
          res[i][2] = res[i][2].replace(/ *\(([^\)]*)\)/g, '');
          res[i][2] = res[i][2].split(', ').map(x => x.trim().replace(/[&#\d;]/g, ''));
          res[i] = [res[i][0], ...res[i][1], ...res[i][2]];
        } else {
          res[i] = [res[i][0], ...res[i][1]];
        }
        if (/(south )(?!(africa|korea|sudan))/gi.test(res[i][2])) {
          res[i][3] = res[i][2].slice(22).replace(/south/i, 'S');
          res[i][2] = res[i][2].slice(0, 13);
        }
        if (/british/i.test(res[i][3])) {
          res[i][3] = res[i][3].replace(/\w+ */gi, this.abbrev);
        }
        if (/demo/i.test(res[i][5])) {
          res[i][5] = res[i][5].replace(/(\w+)\s(\w+)\s(\w+)\s(\w+)\s(\w+)/gi, this.abbrev2);
        }
      }
      return res;
    },
    abbrev(match) {
      return match[0].toUpperCase();
    },
    abbrev2(match, p1, p2, p3, p4, p5, string) {
      return `${p1[0].toUpperCase() + p2[0].toUpperCase()} ${p5}`;
    },
    async loadOptions() {
      try {
        let data = await fetch(this.timezoneFetch);
        if (data.ok) {
          data = await data.json();
        } else {
          throw new Error('Network problem - response not ok');
        }
        data = this.processTZData(data.parse.text['*']);
        this.loadTZOptions(data);
      } catch (err) {
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
    -webkit-appearance: none;
    -moz-appearance: none;
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
