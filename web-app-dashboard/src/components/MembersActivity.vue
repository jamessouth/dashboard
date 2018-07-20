<template>
  <div id="members" class="members_activity">
    <div class="new-members">
      <p>new members</p>
      <div class="member">
        <img class="m-a-imgs" src="loading.png" alt="user face or avatar">
        <div class="mem-out">
          <div>
            <p></p>
            <p></p>
          </div>
          <p tabindex="0"></p>
        </div>
      </div>
      <div class="member">
        <img class="m-a-imgs" src="loading.png" alt="user face or avatar">
        <div class="mem-out">
          <div>
            <p></p>
            <p></p>
          </div>
          <p tabindex="0"></p>
        </div>
      </div>
      <div class="member">
        <img class="m-a-imgs" src="loading.png" alt="user face or avatar">
        <div class="mem-out">
          <div>
            <p></p>
            <p></p>
          </div>
          <p tabindex="0"></p>
        </div>
      </div>
      <div class="member">
        <img class="m-a-imgs" src="loading.png" alt="user face or avatar">
        <div class="mem-out">
          <div>
            <p></p>
            <p></p>
          </div>
          <p tabindex="0"></p>
        </div>
      </div>
    </div>
    <div class="rec-activity">
      <p>recent activity</p>
      <div class="activity">
        <img class="m-a-imgs" src="loading.png" alt="user face or avatar">
        <div class="act-out">
          <p></p>
          <p></p>
        </div>
        <button>></button>
        <div class="hidden">
        </div>
      </div>
      <div class="activity">
        <img class="m-a-imgs" src="loading.png" alt="user face or avatar">
        <div class="act-out">
          <p></p>
          <p></p>
        </div>
        <button>></button>
        <div class="hidden">
        </div>
      </div>
      <div class="activity">
        <img class="m-a-imgs" src="loading.png" alt="user face or avatar">
        <div class="act-out">
          <p></p>
          <p></p>
        </div>
        <button>></button>
        <div class="hidden">
        </div>
      </div>
      <div class="activity">
        <img class="m-a-imgs" src="loading.png" alt="user face or avatar">
        <div class="act-out">
          <p></p>
          <p></p>
        </div>
        <button>></button>
        <div class="hidden">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MembersActivity',
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Josefin+Slab:400,600');
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:800i');
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:300');

  .members_activity{
    border-top: 1px solid #cecece;
    border-bottom: 1px solid #cecece;
    margin: 1em 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .new-members,
  .rec-activity{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 1em;
    padding-bottom: 1em;
    width: 100%;
  }
  .new-members{
    border-bottom: 1px solid #cecece;
  }
  .new-members > div:last-child,
  .rec-activity > div:last-child{
    border: none;
  }
  .new-members > p,
  .rec-activity > p{
    padding-top: 0.5em;
    font-family: 'Alegreya Sans', sans-serif;
    text-transform: uppercase;
  }
  .m-a-imgs{
    height: 40px;
    border-radius: 50%;
    margin-right: 0.5em;
  }
  .member,
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
  .mem-out,
  .act-out{
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    opacity: 1;
    justify-content: space-between;
    align-items: center;
    transform: translateX(0%);
    transition: transform 1s ease-in-out 0.4s, opacity 0.3s ease-in-out 0.5s;
  }
  .act-out{
    display: block;
  }
  .mem-out{
    flex-direction: column;
    align-items: flex-start;
  }
  .mem-out > div{
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
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
  .rec-activity .activity > button{
    margin-right: 2px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-family: 'Alegreya Sans SC', sans-serif;
    color: #7377bf;
    font-size: 33px;
    transition: position 1s ease-out 0.5s, left 1s ease-out 0.5s, color 0.25s ease;
  }
  .leftside{
    position: absolute;
    left: 45px;
  }
  .rightside{
    position: static;
    left: auto;
  }
  .rec-activity .activity > button:hover{
    color: #ff0000;
  }
  .mem-out > div > p:nth-of-type(1),
  .act-out > p:nth-of-type(1){
    color: #676666;
    font-family: 'Alegreya Sans SC', sans-serif;
  }
  .act-out > p:nth-of-type(1){
    transition: all 0.5s;
  }
  div.mem-out > p{
    color: #7377bf;
    font-family: 'Josefin Slab', serif;
    font-weight: 600;
  }
  .act-out > p:nth-of-type(2){
    color: #676666;
    font-family: 'Josefin Slab', serif;
    font-weight: 600;
    transition: all 0.5s;
  }
  div.mem-out > p:hover{
    text-decoration: underline;
    cursor: pointer;
  }
  .mem-out > div > p:last-of-type{
    font-family: 'Alegreya Sans', sans-serif;
  }
  div.mem-out > p:focus,
  .rec-activity .activity > button:focus{
    outline: 2px solid #7377bf;
  }


  @media screen and (max-width: 767px){
    #members:target{
      padding-top: 16px;
    }
  }


  @media screen and (min-width: 768px){

    .members_activity{
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
    }
    .rec-activity{
      border-left: 1px solid #cecece;
    }
    .new-members{
      border-bottom: none;
    }


  }


  @media screen and (min-width: 1024px){
    .new-members > p,
    .rec-activity > p{
      width: 88.8%;
      max-width: 492px;
    }


  }


</style>
