<template>
  <div id="settings">
    <form>
      <fieldset>
        <legend>settings</legend>
        <SwitchTwoWay
        @store-onOff="email = $event"
        :label="'Send Email'"
        :name="'email'"/>
        <SwitchTwoWay
        @store-onOff="profile = $event"
        :label="'Set Profile'"
        :name="'profile'"/>
        <DropDownMenu
        @store-timezone="timezone = $event"
        :name="'Timezone'"/>
      </fieldset>
      <transition
      @after-enter="afterEnter"
      name="saved">
        <p v-if="saved">{{ popupMessage }}</p>
      </transition>
      <BigButton
      @click.native="timezone && setSettings({
      timezone,
      email,
      profile,
      }); handleClick();"
      :text="'Save'"/>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import SwitchTwoWay from './SwitchTwoWay.vue';
import BigButton from './BigButton.vue';
import DropDownMenu from './DropDownMenu.vue';

export default {
  name: 'SettingsElement',
  components: {
    BigButton,
    SwitchTwoWay,
    DropDownMenu,
  },
  data() {
    return {
      saved: false,
      timezone: JSON.parse(localStorage.getItem('settings')) ?
        JSON.parse(localStorage.getItem('settings')).timezone : null,
      email: JSON.parse(localStorage.getItem('settings')) ?
        JSON.parse(localStorage.getItem('settings')).email : true,
      profile: JSON.parse(localStorage.getItem('settings')) ?
        JSON.parse(localStorage.getItem('settings')).profile : true,
    };
  },
  computed: {
    popupMessage() {
      if (!this.timezone) {
        return 'Please select a timezone';
      }
      return 'Your settings have been saved';
    },
  },
  methods: {
    ...mapActions([
      'setSettings',
    ]),
    handleClick() {
      this.saved = true;
    },
    afterEnter() {
      this.saved = false;
    },
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
    position: absolute;
    background-color: rgba(10,10,10,0.8);
    bottom: 150px;
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
  }
  form{
    width: 90%;
    margin: auto;
    position: relative;
  }
  .saved-enter-active, .saved-leave-active{
    transition: opacity 2.3s cubic-bezier(.06,.89,.25,.9);
  }
  .saved-enter, .saved-leave-to{
    opacity: 0;
  }
  #settings:target{
    padding-top: 41px;
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
