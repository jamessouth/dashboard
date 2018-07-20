<template>
  <nav>
    <ul>
      <li tabindex="0" data-tip="Dashboard" class="tooltip">
        <a class="selected" href="#">
          <img src="../assets/icon-dashboard.svg" alt="dashboard link">
        </a>
      </li>
      <li tabindex="0" data-tip="Members" class="tooltip">
        <a href="#members">
          <img src="../assets/icon-members.svg" alt="members link">
        </a>
      </li>
      <li tabindex="0" data-tip="Visits" class="tooltip">
        <a href="#visits">
          <img src="../assets/icon-visits.svg" alt="visits link">
        </a>
      </li>
      <li tabindex="0" data-tip="Settings" class="tooltip2">
        <a href="#settings">
          <img src="../assets/icon-settings.svg" alt="settings link">
        </a>
      </li>
    </ul>
  </nav>
</template>


<script>
export default {
  name: 'Nav',
};

</script>


<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:800i');
  nav{
    background-color: #4D4C72;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    z-index: 111;
  }
  .tooltip, .tooltip2{
    position: relative;
  }
  .tooltip:before,
  .tooltip:after,
  .tooltip2:before,
  .tooltip2:after{
    position: absolute;
    left: 50%;
    display: none;
  }
  .tooltip:hover:before,
  .tooltip:focus:before,
  .tooltip:hover:after,
  .tooltip:focus:after,
  .tooltip2:hover:before,
  .tooltip2:focus:before,
  .tooltip2:hover:after,
  .tooltip2:focus:after{
    display: block;
  }
  .tooltip:before,
  .tooltip2:before{
    border-style: solid;
    border-width: 0 5px 10px 5px;
    border-color: transparent transparent #fff176 transparent;
    bottom: -6px;
    content: "";
  }
  .tooltip:after,
  .tooltip2:after{
    background: #fff176;
    font-family: 'Alegreya Sans SC', sans-serif;
    border: 1px dashed #7377bf;
    border-radius: .25em;
    left: 0;
    color: #7377bf;
    width: 87px;
    bottom: -32px;
    padding: .25em 0;
    content: attr(data-tip);
    text-align: center;
  }
  ul{
    height: 39px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .selected{
    opacity: 1;
    border-bottom: 3px solid #85DB80;
    border-left: 3px outset transparent;
    border-right: 3px outset transparent;
  }
  img{
    height: 30px;
  }
  a{
    padding: 19px 18px 0;
    opacity: 0.5;
    border-bottom: 3px solid transparent;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
  }
  a:hover:not(.selected),
  a:focus:not(.selected){
    opacity: 0.7;
  }

  a:focus{
    outline: 2px solid #fff176;
  }
  @media screen and (max-width: 399px){
    .tooltip2:after{
      left: -18px;
    }

  }


  @media screen and (min-width: 400px){

    a{
      padding: 19px 27px 0;
    }
  }


  @media screen and (min-width: 768px){

    div > header{
      margin-bottom: 0;
      flex-shrink: 0;
    }
    nav{
      position: -webkit-sticky;
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
    a{
      padding: 30px 27px 12px;
      border-bottom: 3px solid transparent;
      border-left: 3px solid transparent;
      border-top: 3px solid transparent;
      border-right: none;
    }
    .selected{
      border-left: 3px solid #85DB80;
      border-bottom: 3px outset transparent;
      border-top: 3px outset transparent;
      border-right: none;
    }
    img{
      height: 32px;
    }

  }

</style>
