<template>
  <li tabindex="-1" :data-tip="datatip" class="tooltip">
    <a :href="namehref" @click="select(ind)" :class="{ selected: ind === sel, bl2ink: alert }">
      <img :src="imgsrc" :alt="imgalt">
    </a>
  </li>
</template>

<script>
export default {
  props: ['datatip', 'namehref', 'imgsrc', 'imgalt', 'ind', 'sel', 'alert'],
  data() {
    return {
      // isSelected: null,
    };
  },
  methods: {
    select(i) {
      console.log(i, this.sel);
      // this.isSelected = i;
      this.$emit('update:sel', i);
    },
  },
  name: 'NavItem',
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:800i');
  @keyframes blink{
    0%{ opacity: 0; }
    100%{ opacity: 1; }
  }
  .tooltip{
    position: relative;
  }
  .tooltip:before,
  .tooltip:after{
    position: absolute;
    left: 50%;
    display: none;
  }
  .tooltip:hover:before,
  .tooltip:focus:before,
  .tooltip:hover:after,
  .tooltip:focus:after{
    display: block;
  }
  .tooltip:before{
    border-style: solid;
    border-width: 0 5px 10px 5px;
    border-color: transparent transparent #fff176 transparent;
    bottom: -6px;
    content: "";
  }
  .tooltip:after{
    background: #fff176;
    font-family: 'Alegreya Sans SC', sans-serif;
    border: 1px dashed #7377bf;
    border-radius: .25em;
    left: -18px;
    color: #7377bf;
    width: 87px;
    bottom: -32px;
    padding: .25em 0;
    content: attr(data-tip);
    text-align: center;
  }
  .blink{
    animation: blink 1.15s cubic-bezier(.68, -.55, .27, 1.55) infinite;
  }
  .selected{
    opacity: 1;
    border-bottom: 3px solid #85DB80;
    border-left: 3px outset transparent;
    border-right: 3px outset transparent;
  }
  img{
    height: 30px;
  }
  a{
    padding: 19px 18px 0;
    opacity: 0.5;
    border-bottom: 3px solid transparent;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
  }
  a:hover:not(.selected),
  a:focus:not(.selected){
    opacity: 0.7;
  }
  a:focus{
    outline: 2px solid #fff176;
  }
  @media screen and (max-width: 399px){
    /* .tooltip2:after{
      left: -18px;
    } */
  }
  @media screen and (min-width: 400px){
    a{
      padding: 19px 27px 0;
    }
  }
  @media screen and (min-width: 768px){
    a{
      padding: 30px 28px 12px 27px;
      border-bottom: 3px solid transparent;
      border-left: 3px solid transparent;
      border-top: 3px solid transparent;
      border-right: none;
    }
    .selected{
      border-left: 3px solid #85DB80;
      border-bottom: 3px outset transparent;
      border-top: 3px outset transparent;
      border-right: none;
    }
    img{
      height: 32px;
    }
  }


</style>
