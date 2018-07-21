<template>
  <div class="activity">
    <img class="m-a-imgs" src="../assets/loading.png" alt="user face or avatar">
    <div class="act-out">
      <p></p>
      <p></p>
    </div>
    <button>></button>
    <div class="hidden">
    </div>
  </div>

</template>

<script>
export default {
  name: 'Activity',
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Josefin+Slab:400,600');
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:800i');
  .m-a-imgs{
    height: 40px;
    border-radius: 50%;
    margin-right: 0.5em;
  }
  .activity{
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
  .act-out{
    display: block;
    width: 90%;
    opacity: 1;
    transform: translateX(0%);
    transition: transform 1s ease-in-out 0.4s, opacity 0.3s ease-in-out 0.5s;
  }
  .hidden{
    font-family: 'Josefin Slab', serif;
    width: 75%;
    opacity: 0;
    margin-left: 1.15em;
    position: absolute;
    transform: translateX(500%);
    transition: transform 0.7s cubic-bezier(0.68,-0.02, 0.79, 0.75) 0.05s,
                opacity 0.3s ease-in-out 0.5s;
  }
  .leftside{
    position: absolute;
    left: 45px;
  }
  .rightside{
    position: static;
    left: auto;
  }
  button{
    margin-right: 2px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-family: 'Alegreya Sans SC', sans-serif;
    color: #7377bf;
    font-size: 33px;
    transition: position 1s ease-out 0.5s, left 1s ease-out 0.5s, color 0.25s ease;
  }
  button:hover{
    color: #ff0000;
  }
  button:focus{
    outline: 2px solid #7377bf;
  }
  .act-out > p:first-of-type{
    color: #676666;
    font-family: 'Alegreya Sans SC', sans-serif;
  }
  .act-out > p:first-of-type{
    transition: all 0.5s;
  }
  .act-out > p:last-of-type{
    color: #676666;
    font-family: 'Josefin Slab', serif;
    font-weight: 600;
    transition: all 0.5s;
  }


</style>
