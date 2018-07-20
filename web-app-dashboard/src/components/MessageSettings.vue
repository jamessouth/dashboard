<template>
  <div class="message_settings">
    <div class="messages">
      <form autocomplete="off">
        <fieldset>
          <legend>message user</legend>
          <label for="user_search">search for user</label>
          <input spellcheck=false id="user_search" name="search"
                 type="search" placeholder="Search for User"/>
          <ul tabindex=0></ul>
          <label for="message">message for user</label>
          <textarea name="message" placeholder="Message for User" id="message"></textarea>
        </fieldset>
        <p></p>
        <button type="button">Send</button>
      </form>
    </div>
    <div id="settings" class="settings">
      <form>
        <fieldset>
          <legend>settings</legend>
          <div class="email_notify">
            <p>Send Email Notifications</p>
            <div data-setting="email">
              <input checked id="on-email" name="email_notify" type="radio" value="on"/>
              <label for="on-email">on</label>
              <input id="off-email" name="email_notify" type="radio" value="off"/>
              <label for="off-email">off</label>
            </div>
          </div>
          <div class="public_profile">
            <p>Set Profile to Public</p>
            <div data-setting="profile">
              <input checked id="on-profile" name="public_profile" type="radio" value="on"/>
              <label for="on-profile">on</label>
              <input id="off-profile" name="public_profile" type="radio" value="off"/>
              <label for="off-profile">off</label>
            </div>
          </div>
          <div class="barchart_autoplay">
            <p>Bar Chart Autoplay</p>
            <div data-setting="autoplay">
              <input checked id="on-autoplay" name="barchart_autoplay" type="radio" value="on"/>
              <label for="on-autoplay">on</label>
              <input id="off-autoplay" name="barchart_autoplay" type="radio" value="off"/>
              <label for="off-autoplay">off</label>
            </div>
          </div>
          <div class="linechart_default">
            <p>Line Chart Default Time Period</p>
            <div data-setting="timeperiod">
              <div class="dial"></div>
              <div class="pointer"></div>
              <input checked id="hourly" name="linechart_default" type="radio" value="hourly"/>
              <label for="hourly">hourly</label>
              <input id="daily" name="linechart_default" type="radio" value="daily"/>
              <label for="daily">daily</label>
              <input id="weekly" name="linechart_default" type="radio" value="weekly"/>
              <label for="weekly">weekly</label>
              <input id="monthly" name="linechart_default" type="radio" value="monthly"/>
              <label for="monthly">monthly</label>
            </div>
          </div>
          <div class="timezone">
            <label for="timezone">select timezone</label>
            <select required name="timezone" id="timezone">
              <option selected disabled value="">Select Timezone</option>
            </select>
          </div>
        </fieldset>
        <div>
          <p>Your settings have been saved</p>
          <button type="button">Save</button>
          <button disabled type="button">Cancel</button>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MessageSettings',
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:800i');
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans:300');
  @font-face {
    font-family: 'uppereastsideregular';
    src: url('../assets/UpperEastSide-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  .message_settings{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2em;
  }
  .messages{
    border-bottom: 1px solid #cecece;
    margin-bottom: 1em;
    position: relative;
  }
  .messages,
  .settings{
    width: 100%;
    padding: 1.5em 0 3em;
  }
  .messages form > p{
    position: absolute;
    display: none;
    background-color: transparent;
    margin: auto;
    opacity: 1;
    top: 70px;
    left: 50%;
    letter-spacing: 4px;
    transform-origin: center center;
    transform: translateX(-50%) rotateX(4deg) rotateY(-50deg) rotate(-8deg);
    width: 97%;
    text-align: center;
    font-family: 'uppereastsideregular';
    font-size: 90px;
    color: #fff;
    z-index: 56;
    transition: all 1.5s;
  }
  .messages fieldset,
  .settings fieldset{
    border: none;
    max-width: 492px;
    margin: 0 auto 5em;
  }
  .messages fieldset{
    margin: 0 auto 1em;
    position: relative;
  }
  .messages fieldset ul{
    max-height: 250px;
    overflow: auto;
    z-index: 55;
    display: none;
    background: radial-gradient(circle at right center, #7377bf -115%, #fbfbfb 100%);
    border: 2px solid #676666;
    position: absolute;
    border-radius: 4px;
    width: 100%;
    font-family: 'Alegreya Sans', sans-serif;
    left: 50%;
    transform: translateX(-50%);
  }
  .messages fieldset ul li{
    padding: 2px 4px;
    color: #000;
    font-size: 20px;
  }
  #userselect{
    color: #fffed7;
    box-shadow: inset -35px 0px 35px -5px #7377bf;
  }
  #userselect:not(span){
    color: #000;
  }
  .messages legend,
  .settings legend{
    text-transform: uppercase;
    font-family: 'Alegreya Sans', sans-serif;
    margin: auto;
    padding-bottom: 1em;
  }
  .messages form,
  .settings form{
    width: 90%;
    margin: auto;
  }
  .messages input[name="search"]{
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
  .messages input[name="search"]::-webkit-input-placeholder{
    color: #b9b9b9;
    font-size: 17px;
    font-family: 'Alegreya Sans', sans-serif;
  }
  .messages input[name="search"]::-moz-placeholder{
    color: #b9b9b9;
    font-size: 17px;
    font-family: 'Alegreya Sans', sans-serif;
  }
  .messages label{
    color: transparent;
    display: block;
  }
  .messages textarea{
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
  .messages textarea::-webkit-input-placeholder{
    color: #b9b9b9;
    font-size: 17px;
    font-family: 'Alegreya Sans', sans-serif;
  }
  .messages textarea::-moz-placeholder{
    color: #b9b9b9;
    font-size: 17px;
    font-family: 'Alegreya Sans', sans-serif;
  }
  .messages button,
  .settings form button{
    width: 100%;
    color: #fff;
    font-family: 'uppereastsideregular';
    letter-spacing: 4px;
    font-size: 50px;
    height: 2em;
    background-color: #7377bf;
    border: none;
    border-radius: 5px;
    border: 3px solid transparent;
    outline: none;
    transition: all 0.7s ease-out;
  }
  .messages button{
    margin: 2em auto 0;
    display: block;
    max-width: 492px;
  }
  .messages input[name="search"]:focus,
  .messages textarea:focus,
  .timezone select:focus{
    outline-offset: 0;
    border: 3px solid #4D4C72;
  }
  .messages button:focus,
  .settings form button:focus{
    outline-offset: 0;
    border: 3px solid #221122;
  }
  .email_notify,
  .public_profile,
  .barchart_autoplay,
  .linechart_default{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .linechart_default{
    height: 100px;
  }
  .email_notify > div,
  .public_profile > div,
  .barchart_autoplay > div,
  .linechart_default > div{
    position: relative;
    background: linear-gradient(to bottom right, #a6aaf2, #40448c);
    width: 95px;
    height: 37px;
    border: 2px solid #cecece;
    border-radius: 50px;
    transition: background-color 1.25s;
  }
  .linechart_default > div{
    height: 95px;
    width: 95px;
    border-radius: 50%;
    border: 1px solid #969ae2;
  }
  .email_notify input[name="email_notify"],
  .public_profile input[name="public_profile"],
  .barchart_autoplay input[name="barchart_autoplay"],
  .linechart_default input[name="linechart_default"]{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: absolute;
    right: 14px;
    top: 16px;
    width: 1px;
    height: 1px;
    outline: none;
    border: none;
  }
  .linechart_default input[name="linechart_default"]:after{
    font-family: 'Alegreya Sans SC', sans-serif;
    position: absolute;
    font-size: 22px;
    color: #221122;
  }
  .linechart_default input[name="linechart_default"]:nth-of-type(1){
    left: 5px;
    top: 25px;
  }
  .linechart_default input[name="linechart_default"]:nth-of-type(1):after{
    content: "h";
    transform: rotate(-71deg);
    right: -9px;
    top: -6px;
  }
  .linechart_default input[name="linechart_default"]:nth-of-type(2){
    left: 25px;
    top: 5px;
  }
  .linechart_default input[name="linechart_default"]:nth-of-type(2):after{
    content: "d";
    transform: rotate(-28deg);
    right: -9px;
    top: -9px;
  }
  .linechart_default input[name="linechart_default"]:nth-of-type(3){
    top: 5px;
    right: 25px;
  }
  .linechart_default input[name="linechart_default"]:nth-of-type(3):after{
    content: "w";
    transform: rotate(28deg);
    right: -5px;
    bottom: -18px;
  }
  .linechart_default input[name="linechart_default"]:nth-of-type(4){
    right: 5px;
    top: 25px;
  }
  .linechart_default input[name="linechart_default"]:nth-of-type(4):after{
    content: "m";
    transform: rotate(71deg);
    right: inherit;
    top: -10px;
    left: -5px;
  }
  .linechart_default input[name="linechart_default"]:checked:after{
    color: #fff;
  }
  .email_notify input[name="email_notify"]:not(:checked),
  .public_profile input[name="public_profile"]:not(:checked),
  .barchart_autoplay input[name="barchart_autoplay"]:not(:checked){
    z-index: -1;
  }
  .email_notify input[name="email_notify"]:after,
  .public_profile input[name="public_profile"]:after,
  .barchart_autoplay input[name="barchart_autoplay"]:after{
    content: " ";
    position: absolute;
    top: -12px;
    right: -10px;
    display: inline-block;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-color: #fff;
    border: 2px solid #cecece;
  }
  .email_notify input[value="off"],
  .public_profile input[value="off"],
  .barchart_autoplay input[value="off"]{
    left: 14px;
  }
  .email_notify input[value="off"]:after,
  .public_profile input[value="off"]:after,
  .barchart_autoplay input[value="off"]:after{
    top: -12px;
    left: -10px;
  }
  .email_notify > p,
  .public_profile > p,
  .barchart_autoplay > p,
  .linechart_default > p{
    font-family: 'Alegreya Sans', sans-serif;
  }
  .linechart_default > p{
    width: 125px;
  }
  .email_notify label,
  .public_profile label,
  .barchart_autoplay label,
  .linechart_default label{
    position: absolute;
    left: 6px;
    top: 2px;
    color: #fff;
    font-size: 22px;
    font-family: 'Alegreya Sans SC', sans-serif;
  }
  .linechart_default > div > div.dial{
    width: 40px;
    height: 40px;
    position: absolute;
    background: linear-gradient(to bottom right, #a6aaf2, #40448c);
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
    left: 50%;
    top: 50%;
    box-shadow: 5px 6px 13px black, -1px -1px 12px white;
  }
  .linechart_default > div > div.pointer{
    position: absolute;
    width: 0;
    height: 14px;
    top: 28px;
    transform: translateX(-50%) rotate(-71deg);
    transform-origin: 2px 18px;
    left: 50%;
    border-radius: 2px;
    border: 2px solid #fff;
  }
  .linechart_default label{
    color: #221122;
    top: inherit;
    left: 50%;
    transform: translateX(-50%);
    bottom: -25px;
  }
  .linechart_default input:not(:checked) + label{
    color: transparent;
  }
  .email_notify label:last-of-type,
  .public_profile label:last-of-type,
  .barchart_autoplay label:last-of-type{
    display: none;
  }
  .settings form > div{
    position: relative;
    display: flex;
    max-width: 492px;
    margin: auto;
    justify-content: space-between;
  }
  .settings form > div > p{
    opacity: 0;
    position: absolute;
    background-color: rgba(10,10,10,0.8);
    top: -48px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    text-align: center;
    padding: 0.4em 0;
    font-family: 'Alegreya Sans', sans-serif;
    font-size: 20px;
    color: #fff;
    border-radius: 50px;
    transition: opacity 1.5s;
  }
  .settings form button{
    width: 45%;
    max-width: 233px;
  }
  .settings form button:last-of-type{
    background-color: #B2B2B2;
  }
  .timezone{
    margin-top: 2.5em;
    position: relative;
  }
  .timezone label{
    color: transparent;
    display: block;
  }
  .timezone select{
    outline: none;
    width: 100%;
    background: url(../assets/downArrow.jpg) no-repeat 100%;
    font-size: 17px;
    font-family: 'Alegreya Sans', sans-serif;
    background-color: #fbfbfb;
    box-shadow: 0 0 0 1px #cecece;
    border: 3px solid transparent;
    border-radius: 5px;
    padding: 0.75em 0.5em;
    -webkit-appearance: none;
      -moz-appearance: none;
    transition: border 0.7s ease-out;
  }
  .timezone select:required:invalid{
    color: #b9b9b9;
  }
  .timezone select option[value=""][disabled]{
    display: none;
  }
  .timezone select option{
    color: #676666;
  }


  @media screen and (max-width: 767px){

    #settings:target{
      padding-top: 41px;
    }
  }

  @media screen and (min-width: 768px){

    .message_settings{
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
    }

    .settings{
      border-left: 1px solid #cecece;
    }
    .messages button{
      margin-top: 4.22em;
    }
    @-moz-document url-prefix(){
      .messages button{
        margin-top: 4.33em;
      }
    }

    .messages{
      border-bottom: none;
    }


  }

  @media screen and (min-width: 1024px){
    .messages legend,
    .settings legend{
      margin: 0;
    }

  }

</style>
