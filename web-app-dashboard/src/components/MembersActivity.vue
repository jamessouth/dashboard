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
      :action="item.action"
      :photo="item.photo"
      :isArabic="item.isArabic"
      :time="item.time"
      :key="index"
      v-for="(item, index) in activityData">
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
      count: 0,
      timer: null,
      lastTime: 7195,
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
  },
  methods: {
    rando(mult = 1, add = 0) {
      return Math.floor(Math.random() * mult) + add;
    },
    loadActivitiesData(timeStamp) {
      this.timer = requestAnimationFrame(this.loadActivitiesData);
      const randomInterval = this.rando(2494, 379);
      if (timeStamp > this.lastTime) {
        this.lastTime += randomInterval;
        this.count += 1;
        this.activityData.unshift({
          ...this.activities[this.rando(this.activities.length)],
          action: this.makeAction(),
          time: this.$moment(),
        });
        if (this.count > 10) {
          cancelAnimationFrame(this.timer);
        }
      }
    },
    loadActivities(data) {
      for (let i = 0; i < data.length; i += 1) {
        this.$set(this.activities, i, {
          name: this.makeName(data[i].name),
          photo: data[i].picture.thumbnail,
          isArabic: this.isArabic(data[i].name.first),
        });
      }
    },
    loadMemberData(data) {
      for (let i = 0; i < data.length; i += 1) {
        this.$set(this.memberData, i, {
          name: this.makeName(data[i].name),
          photo: data[i].picture.thumbnail,
          isArabic: this.isArabic(data[i].name.first),
          email: data[i].email,
          date: this.$moment().subtract(i, 'days'),
        });
      }
    },
    isArabic(name) {
      if (new RegExp(/[A-zÀ-ÿğŞı]+/gim).test(name)) {
        return false;
      }
      return true;
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
      const thisAct = acts[this.rando(acts.length)];
      const text = {
        long: `${thisAct}: ${posts[this.rando(acts.length)]}`,
      };
      if (text.long.includes('comment')) {
        return { ...text, comment: `${comments[this.rando(acts.length)]}` };
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
        .replace(/zine-/, 'Zine-')
        .replace(/klaus-/, 'Klaus-')
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
        if (data.ok) {
          data = await data.json();
        } else {
          throw new Error('Network problem - response not ok');
        }
        for (let i = 0; i < numUsers; i += 1) {
          this.$set(this.newMembersActivityData, i, data.results[i]);
        }
        this.loadMemberData(this.newMembersActivityData.slice(0, 5));
        this.loadActivities(this.newMembersActivityData);
        this.timer = requestAnimationFrame(this.loadActivitiesData);
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
    max-height: 523px;
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
    text-align: center;
  }
  .rec-activity > p{
    margin: auto;
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
    .new-members{
      border-bottom: none;
      border-right: 1px solid #cecece;
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
