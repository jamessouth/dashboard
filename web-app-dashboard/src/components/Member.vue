<template>
  <div class="member">
    <img class="m-a-imgs" :src="imgSrc" alt="user face or avatar">
    <div class="mem-out">
      <div>
        <p :style="nameFont">{{ name }}</p>
        <p>{{ date }}</p>
      </div>
      <p tabindex="0">{{ email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Member',
  props: ['name', 'email', 'photo', 'date'],
  computed: {
    nameFont() {
      let fnt;
      let letSp;
      let lnHt;
      let fntSz;
      if (new RegExp(/[A-zÀ-ÿğŞı]+/gim).test(this.name)) {
        fnt = "'Alegreya Sans SC', sans-serif";
        letSp = 'normal';
        lnHt = 'normal';
        fntSz = '16px';
      } else {
        fnt = "'Amiri', serif";
        letSp = '2px';
        lnHt = '21px';
        fntSz = '21px';
      }
      return {
        fontFamily: fnt,
        letterSpacing: letSp,
        lineHeight: lnHt,
        fontSize: fntSz,
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
    margin: 1em 0 0 0;
    height: 75px;
    position: relative;
    overflow: hidden;
    display: flex;
    width: 88.8%;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #cecece;
    max-width: 492px;
  }
  .mem-out{
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
  .mem-out > div{
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
  .mem-out > div > p:first-of-type{
    color: #676666;
  }
  .mem-out > p{
    color: #7377bf;
    font-family: 'Josefin Slab', serif;
    font-weight: 600;
  }
  .mem-out > p:hover{
    text-decoration: underline;
    cursor: pointer;
  }
  .mem-out > div > p:last-of-type{
    font-family: 'Alegreya Sans', sans-serif;
  }
  .mem-out > p:focus{
    outline: 2px solid #7377bf;
  }
</style>
