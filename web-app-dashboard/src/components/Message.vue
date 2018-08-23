<template>
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
</template>

<script>
export default {
  name: 'Message',
};
</script>

<style scoped>
  @font-face {
    font-family: 'uppereastsideregular';
    src: url('../assets/UpperEastSide-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  .messages{
    border-bottom: 1px solid #cecece;
    margin-bottom: 1em;
    position: relative;
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
  .messages fieldset{
    border: none;
    max-width: 492px;
    margin: 0 auto 5em;
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
  .messages legend{
    text-transform: uppercase;
    font-family: 'Alegreya Sans', sans-serif;
    margin: auto;
    padding-bottom: 1em;
  }
  .messages form{
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
  .messages button{
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
    margin: 2em auto 0;
    display: block;
    max-width: 492px;
  }
  .messages input[name="search"]:focus,
  .messages textarea:focus{
    outline-offset: 0;
    border: 3px solid #4D4C72;
  }
  .messages button:focus{
    outline-offset: 0;
    border: 3px solid #221122;
  }
  @media screen and (min-width: 768px){
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
    .messages legend{
      margin: 0;
    }
  }



</style>
