<template>
  <main>
    <div class="main-title">
      <h1>Dashboard</h1>
      <div></div>
    </div>
    <AlertBox :reg-obj="rego" v-if="newAlert"/>
    <router-view>
      <LineChartWrapper/>
    </router-view>
    <p id="BarDonut" ref="BarDonut"></p>
    <BarDonut v-if="IOflags.BarDonut"/>
    <p id="Social" ref="Social"></p>
    <SocialElement v-if="IOflags.Social"/>
    <p id="MembersActivity" ref="MembersActivity"></p>
    <MembersActivity v-if="IOflags.MembersActivity"/>
    <p id="MessageSettings" ref="MessageSettings"></p>
    <MessageSettings v-if="IOflags.MessageSettings"/>
  </main>
</template>

<script>
/* eslint-disable no-console */

import LineChartWrapper from './LineChartWrapper.vue';

export default {
  name: 'MainElement',
  components: {
    AlertBox: () => import(/* webpackChunkName: "AlertBox" */ './AlertBox.vue').catch(err => console.log(err)),
    LineChartWrapper,
    BarDonut: () => import(/* webpackChunkName: "BarDonut" */ './BarDonut.vue').catch(err => console.log(err)),
    SocialElement: () => import(/* webpackChunkName: "SocialElement" */ './SocialElement.vue').catch(err => console.log(err)),
    MembersActivity: () => import(/* webpackChunkName: "MembersActivity" */ './MembersActivity.vue').catch(err => console.log(err)),
    MessageSettings: () => import(/* webpackChunkName: "MessageSettings" */ './MessageSettings.vue').catch(err => console.log(err)),
  },
  data() {
    return {
      newAlert: false,
      rego: null,
      IOoptions: {
        root: null,
        rootMargin: '0px 0px 180px 0px',
        threshold: 0.1,
      },
      IOflags: {
        BarDonut: false,
        Social: false,
        MembersActivity: false,
        MessageSettings: false,
      },
    };
  },
  mounted() {
    document.addEventListener('swUpdated', this.changeAlert);
    window.addEventListener('load', () => {
      if (!window.IntersectionObserver) {
        Object.keys(this.IOflags).forEach(x => this.IOflags[x] = true);
        this.$emit('show-nav');
      } else {
        setTimeout(this.IOobserve, 600);
      }
    });
  },
  methods: {
    IOcallback(entries, observer) {
      entries.filter(entry => entry.isIntersecting).forEach((x) => {
        this.IOflags[x.target.id] = true;
        observer.unobserve(x.target);
        x.target.classList.add('hide'); // eslint-disable-next-line
        setTimeout(() => x.target.style.display = 'none', 920);
        if (/MessageSettings/.test(x.target.id)) this.$emit('show-nav');
      });
    },
    IOobserve() {
      const observer = new IntersectionObserver(this.IOcallback, this.IOoptions);
      Object.keys(this.$refs).forEach(x => observer.observe(this.$refs[x]));
    },
    changeAlert(e) {
      this.newAlert = true;
      this.rego = e.detail;
    },
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
  p{
    margin-top: 80px;
    height: 20px;
    transition: margin-top .4s linear .5s;
  }
  .hide{
    margin-top: 0;
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
