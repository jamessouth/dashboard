<template>
  <div id="members" class="members_activity">
    <div class="new-members">
      <p>new members</p>
      <Member
      :name="item.name"
      :email="item.email"
      :photo="item.photo"
      :date="item.date"
      :key="index"
      v-for="(item, index) in newMembersData">
      </Member>
    </div>
    <div class="rec-activity">
      <p>recent activity</p>
      <Activity
      :name="item.name"
      :action="item.action"
      :photo="item.photo"
      :time="item.time"
      :date="item.date"
      :key="index"
      v-for="(item, index) in recActivityData">
      </Activity>
    </div>
  </div>

</template>

<script>
import Member from './Member.vue';
import Activity from './Activity.vue';

export default {
  name: 'MembersActivity',
  data() {
    return {
      newMembersData: [],
      recActivityData: [],
      activities: [],
    };
  },
  components: {
    Member,
    Activity,
  },
  created() {
    this.getUserData();
  },
  methods: {
    makeAction() {
      const rando = Math.floor(Math.random() * acts.length);
      const acts = [
        'commented on a post',
        'posted',
        'liked a post',
        'shared a post',
        'tweeted a post',
        'retweeted a post',
      ];
      const posts = [
        'Is Vue the awesomest framework? Prolly',
        'Linting for Fun and Profit',
        'SEO Tips',
        'Facebook\'s Changes for 2018',
        'Moving to AWS',
        'Mobile Web Update',
      ];
      const comments = [
        'Amazing!',
        'Awesome!',
        'Excellent!',
        'Wow! This is great!',
        'Nice work!',
        'Sweet!',
      ];


    },
    caps(match) {
      return `${match[0].toUpperCase()}${match.substring(1)}`;
    },
    makeName(nameObj) {
      let firstName = nameObj.first.trim();
      let lastName = nameObj.last.trim();
      firstName = firstName
        .replace(/([A-zÀ-ÿğŞı]+|\w+[A-zÀ-ÿğŞı]*)\w*$/gi, this.caps)
        .replace(/jean-/, 'Jean-')
        .replace(/hans-/, 'Hans-')
        .replace(/anne-/, 'Anne-')
        .replace(/franz-/, 'Franz-');
      lastName = lastName
        .replace(/([A-zÀ-ÿğŞı]+|\w+[A-zÀ-ÿğŞı]*)\w*$/gi, this.caps)
        .replace(/cdonal/, 'cDonal')
        .replace(/toole/, "'Toole")
        .replace(/brien/, "'Brien")
        .replace(/donoghue/, "'Donoghue")
        .replace(/mahony/, "'Mahony")
        .replace(/(\w)\1{2}/g, '$1$1')
        .replace(/jean-/, 'Jean-')
        .replace(/^mccoy/i, 'McCoy')
        .replace(/^mckinney/i, 'McKinney');
      return `${firstName} ${lastName}`;
    },
    async getUserData() {
      const numUsers = 40; // 5000 max
      try {
        let data = await fetch(`https://randomuser.me/api/?results=${numUsers}&inc=name,email,picture&noinfo`);
        console.log(data);
        if (data.ok) {
          data = await data.json();
          console.log(data);
        } else {
          throw new Error('Network problem - response not ok');
        }
        const dt = new Date();
        let name;
        let photo;
        for (let i = 0; i < numUsers; i += 1) {
          name = this.makeName(data.results[i].name);
          photo = data.results[i].picture.thumbnail;

          if (i < 4) {
            this.$set(this.newMembersData, i, {
              name,
              email: data.results[i].email,
              photo,
              date: `${dt.getMonth() + 1}/${dt.getDate() - i}/${dt.getFullYear()}`,
            });
          }
          this.$set(this.activities, i, {
            name,
            photo,
            date: `${dt.getMonth() + 1}/${dt.getDate()}/${dt.getFullYear()}`,
          });
        }
      } catch (err) {
        alert(`There was a problem grabbing the data: ${err}.  Please try again.`);
      }
    },
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
