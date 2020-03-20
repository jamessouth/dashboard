<template>
  <section>
    <p>{{ label }}</p>
    <div
      tabindex="0"
      :style="{ background: switchOn ?
        'linear-gradient(to bottom right, #a6aaf2, #40448c)' :
        'linear-gradient(to bottom right, #ea4e51, #840000)' }"
      @keyup.left.right="handleClick"
      @click="handleClick"
    >
      <input
        :id="onID"
        v-model="switchOn"
        tabindex="-1"
        :name="name"
        type="radio"
      >
      <label
        :style="{ display: switchOn ? 'block' : 'none' }"
        :for="onID"
        @click.prevent=""
      >on</label>
      <input
        :id="offID"
        v-model="switchOn"
        tabindex="-1"
        :name="name"
        type="radio"
      >
      <label
        :style="offLabel"
        :for="offID"
        @click.prevent=""
      >off</label>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SwitchTwoWay',
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      switchOn: true,
    };
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
  mounted() {
    if (localStorage.getItem('settings')) {
      this.switchOn = JSON.parse(localStorage.getItem('settings'))[this.name];
    }
  },
  methods: {
    handleClick() {
      this.switchOn = !this.switchOn;
      this.$emit('store-onOff', this.switchOn);
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
  div:focus{
    outline: 2px solid #7377bf;
  }
  input{
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
    font-weight: 300;
  }
  label{
    position: absolute;
    left: 6px;
    top: 2px;
    color: #fff;
    font-size: 22px;
    font-family: 'Alegreya Sans SC', sans-serif;
    font-weight: 800;
    font-style: italic;
  }
  label:last-of-type{
    display: none;
  }
</style>
