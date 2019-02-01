<template>
  <button type="button">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  name: 'BigButton',
};
</script>

<style scoped>
  button{
    width: 100%;
    color: #fff;
    font-family: 'uppereastsideregular';
    letter-spacing: 4px;
    font-size: 50px;
    height: 2em;
    background-color: #7377bf;
    border: none;
    border-radius: 5px;
    border: 3px solid transparent;
    outline: none;
    transition: all 0.7s ease-out;
    margin: 2em auto 0;
    display: block;
    max-width: 492px;
  }
  button:focus{
    outline-offset: 0;
    border: 3px solid #221122;
  }
  @media screen and (min-width: 768px){
    button{
      margin-top: 4.22em;
    }
    @-moz-document url-prefix(){
      button{
        margin-top: 4.33em;
      }
    }
  }
</style>
