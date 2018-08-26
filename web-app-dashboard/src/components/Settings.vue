<template>


  <div id="settings">
    <form>
      <fieldset>
        <legend>settings</legend>

        <SwitchTwoWay
        @store-onOff="email = $event"
        :label="'Send Email'"
        :name="'email'">
        </SwitchTwoWay>

        <SwitchTwoWay
        @store-onOff="profile = $event"
        :label="'Set Profile'"
        :name="'profile'">
        </SwitchTwoWay>

        <DropDownMenu
        @store-timezone="timezone = $event"
        :name="'Timezone'">
        </DropDownMenu>

      </fieldset>

      <p>Your settings have been saved</p>

      <BigButton
      @click.native="setSettings({
      timezone,
      email,
      profile,
      })"
      :text="'Save'">
      </BigButton>

    </form>
  </div>
</template>

<script>
import SwitchTwoWay from './SwitchTwoWay.vue';
import BigButton from './BigButton.vue';
import DropDownMenu from './DropDownMenu.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Settings',
  data() {
    return {
      timezone: null,
      email: true,
      profile: true,
    };
  },
  beforeCreate() {
    console.log('here');
  },
  methods: {
    ...mapActions([
      'setSettings',
    ]),
  },
  components: {
    BigButton,
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
    height: 264px;
    margin: 0 auto;
  }
  legend{
    text-transform: uppercase;
    font-family: 'Alegreya Sans', sans-serif;
    margin: auto;
    padding-bottom: 1em;
  }
  p{
    opacity: 0;
    position: absolute;
    background-color: rgba(10,10,10,0.8);
    top: -48px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 492px;
    text-align: center;
    padding: 0.4em 0;
    font-family: 'Alegreya Sans', sans-serif;
    font-size: 20px;
    color: #fff;
    border-radius: 50px;
    transition: opacity 1.5s;
  }
  form{
    width: 90%;
    margin: auto;
    position: relative;
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
    legend{
      margin-bottom: 10px;
    }
  }
  @media screen and (min-width: 1024px){
    legend{
      margin: 0 0 10px;
    }
  }
</style>
