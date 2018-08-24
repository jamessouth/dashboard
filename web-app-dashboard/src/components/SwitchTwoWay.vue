<template>

  <section>
    <p>{{ label }}</p>
    <div>
      <input checked :id="on" type="radio" value="on"/>
      <label :for="on">on</label>
      <input :id="off" type="radio" value="off"/>
      <label :for="off">off</label>
    </div>
  </section>

</template>

<script>
export default {
  // line 1488
  name: 'SwitchTwoWay',
  props: ['label', 'name'],
  computed: {
    off() {
      return `off-${this.name}`;
    },
    on() {
      return `on-${this.name}`;
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

  input:not(:checked){
    z-index: -1;
  }

  input:after{
    content: " ";
    position: absolute;
    top: -12px;
    right: -10px;
    display: inline-block;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-color: #fff;
    border: 2px solid #cecece;
  }

  input[value="off"]{
    left: 14px;
  }
  input[value="off"]:after{
    top: -12px;
    left: -10px;
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
