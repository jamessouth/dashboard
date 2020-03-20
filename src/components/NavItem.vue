<template>
  <li
    tabindex="-1"
    :data-tip="datatip"
    class="tooltip"
  >
    <a
      :href="namehref"
      :class="{ selected: ind === sel, blink: alert && !head }"
      @click="select(ind)"
    >
      <img
        :src="imgsrc"
        :alt="imgalt"
      >
    </a>
  </li>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    datatip: {
      type: String,
      required: true,
    },
    namehref: {
      type: String,
      required: true,
    },
    imgsrc: {
      type: String,
      required: true,
    },
    imgalt: {
      type: String,
      required: true,
    },
    ind: {
      type: Number,
      required: true,
    },
    sel: {
      type: Boolean,
    },
    alert: {
      type: Boolean,
    },
    head: {
      type: Boolean,
    },
  },
  methods: {
    select(i) {
      this.$emit('update:sel', i);
    },
  },
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
    font-weight: 800;
    font-style: italic;
    border: 1px dashed #7377bf;
    border-radius: .25em;
    left: -6px;
    color: #7377bf;
    width: 82px;
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
  @media screen and (min-width: 400px){
    a{
      padding: 19px 27px 0;
    }
  }
  @media screen and (min-width: 768px){
    img{
      height: 32px;
    }
    .tooltip:after{
      left: 0px;
    }
  }
</style>
