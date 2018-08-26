<template>
  <section>
    <p>{{ label }}</p>
    <div
    @click="handleClick"
    :style="{ background: switchOn ?
    'linear-gradient(to bottom right, #a6aaf2, #40448c)' :
    'linear-gradient(to bottom right, #ea4e51, #840000)' }">
      <input :id="onID" type="radio" value="true" v-model="switchOn"/>
      <label
      :style="{ display: switchOn ? 'block' : 'none' }"
      @click.prevent=""
      :for="onID">on</label>
      <input :id="offID" type="radio" value="false" v-model="switchOn"/>
      <label :style="offLabel" @click.prevent="" :for="offID">off</label>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SwitchTwoWay',
  props: ['label', 'name'],
  data() {
    return {
      switchOn: true,
    };
  },
  methods: {
    handleClick() {
      this.switchOn = !this.switchOn;
      this.$emit('store-onOff', this.switchOn);
    },
  },
  mounted() {
    if (localStorage.getItem('settings')) {
      this.switchOn = JSON.parse(localStorage.getItem('settings'))[this.name];
    }
  },
  computed: {
    offID() {
      return `off-${this.name}`;
    },
    onID() {
      return `on-${this.name}`;
    },
    offLabel() {
      return {
        display: this.switchOn ? 'none' : 'block',
        right: '10px',
        left: 'inherit',
      };
    },
  },
};
</script>

<style scoped>
  section{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  div{
    position: relative;
    background: linear-gradient(to bottom right, #a6aaf2, #40448c);
    width: 95px;
    height: 37px;
    border: 2px solid #cecece;
    border-radius: 50px;
    transition: background-color 1.25s;
  }
  input{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: absolute;
    right: 14px;
    top: 16px;
    width: 1px;
    height: 1px;
    outline: none;
    border: none;
  }
  p{
    font-family: 'Alegreya Sans', sans-serif;
  }
  label{
    position: absolute;
    left: 6px;
    top: 2px;
    color: #fff;
    font-size: 22px;
    font-family: 'Alegreya Sans SC', sans-serif;
  }
  label:last-of-type{
    display: none;
  }
</style>
