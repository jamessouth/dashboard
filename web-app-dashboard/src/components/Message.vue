<template>
  <div class="messages">
    <form autocomplete="off">
      <fieldset>
        <legend>message user</legend>
        <label for="user_search">search for user</label>
        <input v-model="nameInput" spellcheck=false list="names" id="user_search" name="search"
        type="search" placeholder="Search for User"/>
        <datalist id="names">
          <option :key="index" v-for="(user, index) in userList">{{ user.name }}</option>
        </datalist>

        <button type="button" @click="conn(nameInput)">connect</button>

        <label for="message">message for user</label>
        <textarea v-model="messageInput" name="message"
        placeholder="Message for User" id="message"></textarea>
      </fieldset>
      <transition
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      name="sent">
        <p v-if="sent">{{ popupMessage }}</p>
      </transition>
      <BigButton
      @click.native="handleClick"
      :text="'Send'">
      </BigButton>
    </form>
  </div>
</template>

<script>
import BigButton from './BigButton.vue';

export default {
  name: 'Message',
  data() {
    return {
      nameInput: null,
      messageInput: null,
      sent: false,
    };
  },
  computed: {
    userList() {
      return this.$store.state.users;
    },
    popupMessage() {
      if (this.nameInput && this.messageInput) {
        return 'Message sent!';
      }
      return 'Both fields required';
    },
  },
  methods: {
    conn(userName) {
      // console.log(userName);
      const socket = new WebSocket('ws://localhost:3000');

      socket.addEventListener('open', function (event) {
        // console.log(userName);
        socket.send(userName);
      });

      socket.addEventListener('message', function (e) {
        console.log(e);
      });

      // setTimeout(() => {
      //   socket.send('more info');
      // }, 2000);

      // setTimeout(() => {
      //   socket.close(1000, 'closing...');
      // }, 3000);


    },
    handleClick() {
      this.sent = true;
    },
    afterEnter() {
      this.sent = false;
    },
    beforeLeave() {
      if (this.nameInput && this.messageInput) {
        this.nameInput = '';
        this.messageInput = '';
      }
    },
  },
  components: {
    BigButton,
  },
};
</script>

<style scoped>
  .messages{
    border-bottom: 1px solid #cecece;
    width: 100%;
    padding: 1.5em 0 3em;
  }
  fieldset{
    border: none;
    max-width: 492px;
    margin: 0 auto;
  }
  legend{
    text-transform: uppercase;
    font-family: 'Alegreya Sans', sans-serif;
    margin: auto;
    padding-bottom: 1em;
  }
  p{
    position: absolute;
    background-color: rgba(10,10,10,0.8);
    bottom: 150px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 492px;
    text-align: center;
    padding: 0.4em 0;
    font-family: 'Alegreya Sans', sans-serif;
    font-size: 20px;
    color: #fff;
    border-radius: 50px;
  }
  .sent-enter-active, .sent-leave-active{
    transition: opacity 2.3s cubic-bezier(.06,.89,.25,.9);
  }
  .sent-enter, .sent-leave-to{
    opacity: 0;
  }
  form{
    width: 90%;
    margin: auto;
    position: relative;
  }
  input{
    outline: none;
    color: #676666;
    font-size: 18px;
    font-family: 'Alegreya Sans', sans-serif;
    height: 45px;
    width: 100%;
    box-shadow: 0 0 0 1px #cecece;
    background-color: #fbfbfb;
    border: 3px solid transparent;
    padding-left: 1em;
    border-radius: 5px;
    transition: border 0.7s ease-out;
  }
  input::-webkit-input-placeholder{
    color: #b9b9b9;
    font-size: 17px;
    font-family: 'Alegreya Sans', sans-serif;
  }
  input::-moz-placeholder{
    color: #b9b9b9;
    font-size: 17px;
    font-family: 'Alegreya Sans', sans-serif;
  }
  label{
    color: transparent;
    display: block;
  }
  textarea{
    outline: none;
    resize: none;
    width: 100%;
    color: #676666;
    font-size: 18px;
    font-family: 'Alegreya Sans', sans-serif;
    height: 8em;
    box-shadow: 0 0 0 1px #cecece;
    border-radius: 5px;
    background-color: #fbfbfb;
    border: 3px solid transparent;
    padding: 0.75em 1em 1em;
    transition: all 0.7s ease-out;
  }
  textarea::-webkit-input-placeholder{
    color: #b9b9b9;
    font-size: 17px;
    font-family: 'Alegreya Sans', sans-serif;
  }
  textarea::-moz-placeholder{
    color: #b9b9b9;
    font-size: 17px;
    font-family: 'Alegreya Sans', sans-serif;
  }
  input:focus,
  textarea:focus{
    outline-offset: 0;
    border: 3px solid #4D4C72;
  }
  @media screen and (min-width: 768px){
    .messages{
      border-bottom: none;
    }
  }
  @media screen and (min-width: 1024px){
    legend{
      margin: 0;
    }
  }
</style>
