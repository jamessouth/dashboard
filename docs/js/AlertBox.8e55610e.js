(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AlertBox"],{"65a8":function(e,t,s){},d6df:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"alertdiv"},[e._m(0),s("button",{ref:"alertbtn",on:{click:e.close}},[e._v("x")])])},l=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("span",[e._v("Alert")]),e._v(" Updates available! Please close this alert box to see the changes!! ")])}],n={name:"AlertBox",props:{regObj:Object},methods:{swHandle(){this.regObj.waiting&&this.regObj.waiting.postMessage("skipWaiting")},close(){this.swHandle(),this.closeStyles()},closeStyles(){this.$refs.alertdiv.style.opacity="0",setTimeout(()=>{this.$refs.alertdiv.style.lineHeight="0px",this.$refs.alertbtn.style.height="0px"},1501),setTimeout(()=>{this.$refs.alertdiv.children[0].style.display="none",this.$refs.alertbtn.style.display="none"},3005)}}},a=n,r=(s("f036"),s("2877")),o=Object(r["a"])(a,i,l,!1,null,"c9f1ef7e",null);t["default"]=o.exports},f036:function(e,t,s){"use strict";var i=s("65a8"),l=s.n(i);l.a}}]);
//# sourceMappingURL=AlertBox.8e55610e.js.map