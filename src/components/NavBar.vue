<template>
  <div>
    <nav>
      <ul>
        <NavItem
          v-for="(item, index) in navItems"
          :key="index"
          :datatip="item.datatip"
          :sel.sync="selInd"
          :namehref="index === 0 ? '#' : `#${item.datatip.toLowerCase()}`"
          :imgsrc="item.src"
          :alert="index === 0 ? passedAlert : null"
          :head="index === 0 ? headProp : null"
          :ind="index"
          :imgalt="`${item.datatip.toLowerCase()} link`"
        />
      </ul>
    </nav>
  </div>
</template>

<script>
import NavItem from './NavItem.vue';
import DB from '../assets/icon-dashboard.svg';
import ME from '../assets/icon-members.svg';
import CH from '../assets/icon-visits.svg';
import SE from '../assets/icon-settings.svg';

export default {
  name: 'NavBar',
  components: {
    NavItem,
  },
  props: {
    alert: Boolean,
    headShown: Boolean,
  },
  data() {
    return {
      selInd: null,
      navItems: [
        {
          datatip: 'Dashboard',
          src: DB,
        },
        {
          datatip: 'Members',
          src: ME,
        },
        {
          datatip: 'Charts',
          src: CH,
        },
        {
          datatip: 'Settings',
          src: SE,
        },
      ],
    };
  },
  computed: {
    passedAlert() {
      return this.alert;
    },
    headProp() {
      return this.headShown;
    },
  },
};
</script>

<style scoped>
  div{
    background-color: #4D4C72;
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    z-index: 111;
  }
  ul{
    height: 39px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>
