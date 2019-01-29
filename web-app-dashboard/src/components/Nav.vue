<template>
  <div>
    <nav>
      <ul>
        <NavItem
        :datatip="item.datatip"

        :namehref="index === 0 ? '#' : `#${item.datatip.toLowerCase()}`"
        :imgsrc="item.src"
        :ind="index"
        :imgalt="`${item.datatip.toLowerCase()} link`"
        :key="index"
        v-for="(item, index) in navItems"
        ></NavItem>
      </ul>
    </nav>
  </div>
</template>

<script>
// :alert="index === 0 ? passedAlert : null"

import NavItem from './NavItem.vue';

export default {
  props: ['alert'],
  data() {
    return {
      // passedAlert: alert,
      navItems: [
        {
          datatip: 'Dashboard',
          src: '../assets/icon-dashboard.svg',
        },
        {
          datatip: 'Members',
          src: '../assets/icon-members.svg',
        },
        {
          datatip: 'Charts',
          src: '../assets/icon-visits.svg',
        },
        {
          datatip: 'Settings',
          src: '../assets/icon-settings.svg',
        },
      ],
    };
  },
  name: 'Nav',
  components: {
    NavItem,
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
  @media screen and (min-width: 768px){
    div{
      margin-bottom: 0;
      flex-shrink: 0;
    }
    nav{
      position: sticky;
      top: 0;
      right: 0;
      left: 0;
      z-index: 111;
    }
    ul{
      height: 322px;
      flex-direction: column;
      justify-content: space-around;
      padding-top: 0.6em;
    }
  }
</style>
