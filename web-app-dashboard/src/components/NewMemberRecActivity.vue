<template>
  <div :style="divMrgn" class="member">
    <img class="m-a-imgs" :src="imgSrc" alt="user face or avatar">
    <div class="mem-act">
      <div>
        <p :style="nameFont">{{ name }}</p>
        <p v-if="date">{{ date | moment("M/DD/YY") }}</p>
        <p v-else>{{ time | moment("h:mm:ss a M/DD/YY") }}</p>
      </div>
      <p :style="emailActStyle" tabindex="0">{{ emailOrAction }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Member',
  props: ['name', 'email', 'photo', 'isArabic', 'action', 'date', 'time'],
  computed: {
    divMrgn() {
      return {
        margin: this.email ? '1em 0 0 0' : '1em auto 0',
        height: this.email ? '80px' : '100px',
      };
    },
    emailActStyle() {
      return {
        color: this.email ? '#7377bf' : '#676666',
        fontFamily: "'Josefin Slab', serif",
        fontWeight: '600',
      };
    },
    emailOrAction() {
      if (this.email) {
        return this.email;
      }
      if (!this.action.comment) {
        return this.action.long;
      }
      return `${this.action.long} - "${this.action.comment}"`;
    },
    nameFont() {
      return {
        fontFamily: this.isArabic ? "'Amiri', serif" : "'Alegreya Sans SC', sans-serif",
        letterSpacing: this.isArabic ? '2px' : 'normal',
        lineHeight: this.isArabic ? '21px' : 'normal',
        fontSize: this.isArabic ? '21px' : '16px',
      };
    },
    imgSrc() {
      if (!this.photo) {
        return '../assets/loading.png';
      }
      return this.photo;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Amiri:700i&subset=arabic');
@import url('https://fonts.googleapis.com/css?family=Josefin+Slab:400,600');
@import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:800i');
@import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:300');
  img{
    height: 40px;
    border-radius: 50%;
    margin-right: 0.5em;
  }
  .member{
    position: relative;
    overflow: hidden;
    display: flex;
    width: 88.8%;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #cecece;
    max-width: 492px;
  }
  .mem-act{
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
  .mem-act > div{
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
  .mem-act > div > p:first-of-type{
    color: #676666;
  }
  .mem-act > p:hover{
    text-decoration: underline;
    cursor: pointer;
  }
  .mem-act > div > p:last-of-type{
    font-family: 'Alegreya Sans', sans-serif;
  }
  .mem-act > p:focus{
    outline: 2px solid #7377bf;
  }
</style>
