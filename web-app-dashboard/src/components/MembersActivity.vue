<template>
  <div id="members" class="members_activity">
    <div class="new-members">
      <p>new members</p>
      <NewMemberRecActivity
      :name="item.name"
      :email="item.email"
      :photo="item.photo"
      :date="item.date"
      :isArabic="item.isArabic"
      :key="index"
      v-for="(item, index) in memberData">
      </NewMemberRecActivity>
    </div>
    <div class="rec-activity">
      <p>recent activity</p>
      <NewMemberRecActivity
      :name="item.name"
      :action="item.action.short"
      :photo="item.photo"
      :isArabic="item.isArabic"
      :date="item.date"
      :key="index"
      v-for="(item, index) in activities">
      </NewMemberRecActivity>
    </div>
  </div>

</template>

<script>
import NewMemberRecActivity from './NewMemberRecActivity.vue';

export default {
  name: 'MembersActivity',
  data() {
    return {
      newMembersActivityData: [],
      memberData: [],
      activityData: [],
      activities: [],
    };
  },
  components: {
    NewMemberRecActivity,
  },
  created() {
    this.getUserData();
          // :time="item.time"
  },
  computed: {

  },
  methods: {
    loadActivitiesData() {

    },
    loadActivities(data) {
      // console.log(data);
      const dt = new Date();
      for (let i = 0; i < data.length; i += 1) {
        this.$set(this.activities, i, {
          name: this.makeName(data[i].name),
          photo: data[i].picture.thumbnail,
          isArabic: this.isArabic(data[i].name.first),
          action: this.makeAction(),
          date: `${dt.getMonth() + 1}/${dt.getDate()}/${dt.getFullYear()}`,
        });
      }
    },
    loadMemberData(data) {
      // console.log(data);
      const dt = new Date();
      for (let i = 0; i < data.length; i += 1) {
        this.$set(this.memberData, i, {
          name: this.makeName(data[i].name),
          photo: data[i].picture.thumbnail,
          isArabic: this.isArabic(data[i].name.first),
          email: data[i].email,
          date: `${dt.getMonth() + 1}/${dt.getDate() - i}/${dt.getFullYear()}`,
        });
      }
    },
    isArabic(name) {
      if (new RegExp(/[A-zÀ-ÿğŞı]+/gim).test(name)) {
        return false;
      }
      return true;
    },
    rando(acts) {
      return Math.floor(Math.random() * acts.length);
    },
    makeAction() {
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
      const thisAct = acts[this.rando(acts)];
      const text = {
        short: `${thisAct}`,
        long: `${thisAct}: ${posts[this.rando(acts)]}`,
      };
      if (text.short.includes('comment')) {
        return { ...text, comment: `${comments[this.rando(acts)]}` };
      }
      return text;
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
        .replace(/aart-/, 'Aart-')
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

        // let name;
        // let photo;
        // let isArabic;
        for (let i = 0; i < numUsers; i += 1) {

          // name: this.makeName(data.results[i].name),
          // photo: data.results[i].picture.thumbnail,
          // isArabic: this.isArabic(data.results[i].name.first),
          // email: data.results[i].email,
          // action: this.makeAction(),

          this.$set(this.newMembersActivityData, i, data.results[i]);
        }
        this.loadMemberData(this.newMembersActivityData.slice(0, 4));
        this.loadActivities(this.newMembersActivityData);

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
  .new-members{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 1em;
    padding-bottom: 1em;
    width: 100%;
  }
  .rec-activity{
    display: block;
    max-height: 423px;
    overflow-y: scroll;
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
  .rec-activity > p{
    text-align: center;
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
