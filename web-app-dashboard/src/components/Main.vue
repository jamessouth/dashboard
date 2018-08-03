<template>
  <main>
    <div class="main-title">
      <h1>Dashboard</h1>
      <div></div>
    </div>

    <AlertBox></AlertBox>


    <router-view>
      <LineChartWrapper></LineChartWrapper>
    </router-view>

    <BarDonut></BarDonut>
    <Social></Social>
    <MembersActivity></MembersActivity>
    <MessageSettings></MessageSettings>
  </main>

</template>


<script>
import AlertBox from './AlertBox.vue';
import LineChartWrapper from './LineChartWrapper.vue';
import BarDonut from './BarDonut.vue';
import Social from './Social.vue';
import MembersActivity from './MembersActivity.vue';
import MessageSettings from './MessageSettings.vue';


export default {
  name: 'Main',
  components: {
    AlertBox,
    LineChartWrapper,
    BarDonut,
    Social,
    MembersActivity,
    MessageSettings,
  },
};

</script>


<style scoped>
  @font-face {
    font-family: 'uppereastsideregular';
    src: url('../assets/UpperEastSide-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  .main-title{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    margin-bottom: 1em;
    border-bottom: 1px solid #dbdbdb;
  }
  .main-title > h1{
    font-family: 'uppereastsideregular';
    color: #676666;
    font-size: 30px;
    letter-spacing: 0.15em;
  }
  .main-title > div{
    width: 40%;
    position: relative;
  }

  @media screen and (min-width: 768px){

    .main-title{
      padding-bottom: 0;
      height: 63px;
      justify-content: space-between;
      border-bottom: none;
    }
    h1{
      padding-left: 0.65em;
      padding-right: 0.55em;
    }
    .main-title > div{
      flex-grow: 1;
      height: 100%;
      background-color: #fbfbfb;
      border-bottom: 1px solid #dfdfdf;
      border-left: 1px solid #dfdfdf;
    }
    main{
      flex-grow: 1;
    }

  }
</style>
