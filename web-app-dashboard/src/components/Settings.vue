<template>


  <div id="settings">
    <form>
      <fieldset>
        <legend>settings</legend>

        <SwitchTwoWay
        :label="'Send Email'"
        :name="'email'">
        </SwitchTwoWay>

        <SwitchTwoWay
        :label="'Set Profile'"
        :name="'profile'">
        </SwitchTwoWay>

        <DropDownMenu
        :name="'Timezone'">
        </DropDownMenu>

      </fieldset>
      <div>
        <p>Your settings have been saved</p>
        <button type="button">Save</button>
        <button disabled type="button">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
import SwitchTwoWay from './SwitchTwoWay.vue';
import DropDownMenu from './DropDownMenu.vue';

export default {
  name: 'Settings',
  components: {
    SwitchTwoWay,
    DropDownMenu,
  },
};
</script>

<style scoped>
  #settings{
    width: 100%;
    padding: 1.5em 0 3em;
  }
  fieldset{
    border: none;
    max-width: 492px;
    margin: 0 auto 5em;
  }
  legend{
    text-transform: uppercase;
    font-family: 'Alegreya Sans', sans-serif;
    margin: auto;
    padding-bottom: 1em;
  }
  form{
    width: 90%;
    margin: auto;
  }
  button{
    width: 45%;
    max-width: 233px;
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
  }
  button:focus{
    outline-offset: 0;
    border: 3px solid #221122;
  }
  form > div{
    position: relative;
    display: flex;
    max-width: 492px;
    margin: auto;
    justify-content: space-between;
  }
  div > p{
    opacity: 0;
    position: absolute;
    background-color: rgba(10,10,10,0.8);
    top: -48px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    text-align: center;
    padding: 0.4em 0;
    font-family: 'Alegreya Sans', sans-serif;
    font-size: 20px;
    color: #fff;
    border-radius: 50px;
    transition: opacity 1.5s;
  }
  button:last-of-type{
    background-color: #B2B2B2;
  }
  @media screen and (max-width: 767px){
    #settings:target{
      padding-top: 41px;
    }
  }
  @media screen and (min-width: 768px){
    #settings{
      border-left: 1px solid #cecece;
    }
  }
  @media screen and (min-width: 1024px){
    legend{
      margin: 0;
    }
  }
</style>
