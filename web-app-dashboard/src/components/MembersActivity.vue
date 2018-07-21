<template>
  <div id="members" class="members_activity">
    <div class="new-members">
      <p>new members</p>
      <Member></Member>


    </div>
    <div class="rec-activity">
      <p>recent activity</p>
      <Activity></Activity>

    </div>
  </div>

</template>

<script>
import Member from './Member.vue';
import Activity from './Activity.vue';

export default {
  name: 'MembersActivity',
  components: {
    Member,
    Activity,
  },
};
</script>

<style scoped>
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
