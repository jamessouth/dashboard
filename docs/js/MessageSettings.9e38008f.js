(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MessageSettings"],{"0efd":function(e,t,n){"use strict";var r=n("ec81"),s=n.n(r);s.a},"1cd6":function(e,t,n){"use strict";var r=n("9533"),s=n.n(r);s.a},"28a5":function(e,t,n){"use strict";var r=n("aae3"),s=n("cb7c"),a=n("ebd6"),i=n("0390"),o=n("9def"),l=n("5f1b"),u=n("520a"),c=n("79e5"),m=Math.min,p=[].push,d="split",f="length",h="lastIndex",g=4294967295,v=!c(function(){RegExp(g,"y")});n("214f")("split",2,function(e,t,n,c){var b;return b="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[f]||2!="ab"[d](/(?:ab)*/)[f]||4!="."[d](/(.?)(.?)/)[f]||"."[d](/()()/)[f]>1||""[d](/.?/)[f]?function(e,t){var s=String(this);if(void 0===e&&0===t)return[];if(!r(e))return n.call(s,e,t);var a,i,o,l=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),m=0,d=void 0===t?g:t>>>0,v=new RegExp(e.source,c+"g");while(a=u.call(v,s)){if(i=v[h],i>m&&(l.push(s.slice(m,a.index)),a[f]>1&&a.index<s[f]&&p.apply(l,a.slice(1)),o=a[0][f],m=i,l[f]>=d))break;v[h]===a.index&&v[h]++}return m===s[f]?!o&&v.test("")||l.push(""):l.push(s.slice(m)),l[f]>d?l.slice(0,d):l}:"0"[d](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,r){var s=e(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,s,r):b.call(String(s),n,r)},function(e,t){var r=c(b,e,this,t,b!==n);if(r.done)return r.value;var u=s(e),p=String(this),d=a(u,RegExp),f=u.unicode,h=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(v?"y":"g"),w=new d(v?u:"^(?:"+u.source+")",h),O=void 0===t?g:t>>>0;if(0===O)return[];if(0===p.length)return null===l(w,p)?[p]:[];var S=0,_=0,I=[];while(_<p.length){w.lastIndex=v?_:0;var y,k=l(w,v?p:p.slice(_));if(null===k||(y=m(o(w.lastIndex+(v?0:_)),p.length))===S)_=i(p,_,f);else{if(I.push(p.slice(S,_)),I.length===O)return I;for(var x=1;x<=k.length-1;x++)if(I.push(k[x]),I.length===O)return I;_=S=y}}return I.push(p.slice(S)),I}]})},"2f21":function(e,t,n){"use strict";var r=n("79e5");e.exports=function(e,t){return!!e&&r(function(){t?e.call(null,function(){},1):e.call(null)})}},"43e1":function(e,t,n){"use strict";var r=n("a2e3"),s=n.n(r);s.a},"55dd":function(e,t,n){"use strict";var r=n("5ca1"),s=n("d8e8"),a=n("4bf8"),i=n("79e5"),o=[].sort,l=[1,2,3];r(r.P+r.F*(i(function(){l.sort(void 0)})||!i(function(){l.sort(null)})||!n("2f21")(o)),"Array",{sort:function(e){return void 0===e?o.call(a(this)):o.call(a(this),s(e))}})},"66c5":function(e,t,n){"use strict";var r=n("fd87"),s=n.n(r);s.a},"7dc2":function(e,t,n){"use strict";var r=n("a363"),s=n.n(r);s.a},"8e73":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("MessageElement"),n("SettingsElement")],1)},s=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"messages"},[n("form",{attrs:{autocomplete:"off"}},[n("fieldset",[n("legend",[e._v("message user")]),n("label",{attrs:{for:"user_search"}},[e._v("search for user")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.nameInput,expression:"nameInput"}],attrs:{spellcheck:"false",list:"names",id:"user_search",name:"search",type:"search",placeholder:"Search for User"},domProps:{value:e.nameInput},on:{input:function(t){t.target.composing||(e.nameInput=t.target.value)}}}),n("datalist",{attrs:{id:"names"}},e._l(e.userList,function(t,r){return n("option",{key:r},[e._v(e._s(t.name))])}),0),n("label",{attrs:{for:"message"}},[e._v("message for user")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.messageInput,expression:"messageInput"}],attrs:{name:"message",placeholder:"Message for User",id:"message"},domProps:{value:e.messageInput},on:{input:function(t){t.target.composing||(e.messageInput=t.target.value)}}})]),n("transition",{attrs:{name:"sent"},on:{"after-enter":e.afterEnter,"before-leave":e.beforeLeave}},[e.sent?n("p",[e._v(e._s(e.popupMessage))]):e._e()]),n("BigButton",{attrs:{text:"Send"},nativeOn:{click:function(t){return e.handleClick(t)}}})],1)])},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{attrs:{type:"button"}},[e._v(e._s(e.text))])},l=[],u={name:"BigButton",props:{text:{type:String,required:!0}}},c=u,m=(n("7dc2"),n("2877")),p=Object(m["a"])(c,o,l,!1,null,"1dc3ff14",null),d=p.exports,f={name:"MessageElement",components:{BigButton:d},data(){return{nameInput:null,messageInput:null,sent:!1}},computed:{userList(){return this.$store.state.users},popupMessage(){return this.nameInput&&this.messageInput?"Message sent!":"Both fields required"}},methods:{handleClick(){this.sent=!0},afterEnter(){this.sent=!1},beforeLeave(){this.nameInput&&this.messageInput&&(this.nameInput="",this.messageInput="")}}},h=f,g=(n("43e1"),Object(m["a"])(h,a,i,!1,null,"5cf60063",null)),v=g.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"settings"}},[n("form",[n("fieldset",[n("legend",[e._v("settings")]),n("SwitchTwoWay",{attrs:{label:"Send Email",name:"email"},on:{"store-onOff":function(t){e.email=t}}}),n("SwitchTwoWay",{attrs:{label:"Set Profile",name:"profile"},on:{"store-onOff":function(t){e.profile=t}}}),n("DropDownMenu",{attrs:{name:"Timezone"},on:{"store-timezone":function(t){e.timezone=t}}})],1),n("transition",{attrs:{name:"saved"},on:{"after-enter":e.afterEnter}},[e.saved?n("p",[e._v(e._s(e.popupMessage))]):e._e()]),n("BigButton",{attrs:{text:"Save"},nativeOn:{click:function(t){e.timezone&&e.setSettings({timezone:e.timezone,email:e.email,profile:e.profile}),e.handleClick()}}})],1)])},w=[],O=n("be94"),S=n("2f62"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("p",[e._v(e._s(e.label))]),n("div",{style:{background:e.switchOn?"linear-gradient(to bottom right, #a6aaf2, #40448c)":"linear-gradient(to bottom right, #ea4e51, #840000)"},attrs:{tabindex:"0"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])&&e._k(t.keyCode,"right",39,t.key,["Right","ArrowRight"])?null:"button"in t&&0!==t.button?null:"button"in t&&2!==t.button?null:e.handleClick(t)},click:e.handleClick}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.switchOn,expression:"switchOn"}],attrs:{tabindex:"-1",name:e.name,id:e.onID,type:"radio"},domProps:{checked:e._q(e.switchOn,null)},on:{change:function(t){e.switchOn=null}}}),n("label",{style:{display:e.switchOn?"block":"none"},attrs:{for:e.onID},on:{click:function(e){e.preventDefault()}}},[e._v("on")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.switchOn,expression:"switchOn"}],attrs:{tabindex:"-1",name:e.name,id:e.offID,type:"radio"},domProps:{checked:e._q(e.switchOn,null)},on:{change:function(t){e.switchOn=null}}}),n("label",{style:e.offLabel,attrs:{for:e.offID},on:{click:function(e){e.preventDefault()}}},[e._v("off")])])])},I=[],y={name:"SwitchTwoWay",props:{label:{type:String,required:!0},name:{type:String,required:!0}},data(){return{switchOn:!0}},computed:{offID(){return`off-${this.name}`},onID(){return`on-${this.name}`},offLabel(){return{display:this.switchOn?"none":"block",right:"10px",left:"inherit"}}},mounted(){localStorage.getItem("settings")&&(this.switchOn=JSON.parse(localStorage.getItem("settings"))[this.name])},methods:{handleClick(){this.switchOn=!this.switchOn,this.$emit("store-onOff",this.switchOn)}}},k=y,x=(n("0efd"),Object(m["a"])(k,_,I,!1,null,"17d84306",null)),C=x.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{attrs:{for:e.forAttr}},[e._v("select "+e._s(e.name.toLowerCase()))]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],attrs:{required:"",name:e.forAttr,id:e.forAttr},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selected=t.target.multiple?n:n[0]},function(t){return e.$emit("store-timezone",e.selected)}]}},[n("option",{attrs:{disabled:"",value:""}},[e._v("Select "+e._s(e.name))]),e._l(e.tzOptions,function(t,r){return n("option",{key:r,style:{color:"#676666"},domProps:{value:t}},[e._v(e._s(t)+"\n    ")])})],2)])},z=[],D=n("1da1"),N=(n("ac6a"),n("55dd"),n("a481"),n("28a5"),{name:"DropDownMenu",props:{name:{type:String,required:!0}},data(){return{tzOptions:[],selected:"",timezoneFetch:"https://en.wikipedia.org/w/api.php?action=parse&page=Time_zone&prop=text&section=11&format=json&origin=*"}},computed:{forAttr(){return this.name.toLowerCase()}},created(){this.loadOptions()},mounted(){localStorage.getItem("settings")&&(this.selected=JSON.parse(localStorage.getItem("settings")).timezone)},methods:{cutOutTable(e){return e.substring(e.indexOf("<tr>"),e.lastIndexOf("</tr>")+5)},splitIntoRows(e){return e.split("</tr>\n<tr>")},removeColumnHeaders(e){return e.splice(1)},pipe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((e,t)=>t(e),e)}},splitIntoColumns(e){return e.split("</td>\n<td>")},removeUnneededColumns(e){return e[2].trim()?e[3].trim()?[e[0],`${e[2]},${e[3]}`]:[e[0],e[2]]:[e[0],e[3]]},removeHTMLandParens(e){return e.map(e=>e.replace(/\n*<([^>]*)>\n*/g,"").replace(/ *\(([^)]*)\)/g,""))},splitCountries(e){return[e[0],...e[1].split(/, ?/)]},trimCountryNames(e){return e.map(e=>e.trim())},finalTouches(e){return[e[0],...e.slice(1).map(e=>e.replace(/South Georgia and the South Sandwich Islands/,"S Georgia/S Sandwich Islands").replace(/British Indian Ocean Territory/,"BIOT").replace(/,/,"").replace(/Democratic Republic of the Congo/,"DR Congo").replace(/[&#\d;]/g,""))]},sortNames(e){return[e[0],...e.slice(1).sort((e,t)=>e>t?1:-1)]},removeBlanks(e){return e.filter(e=>!!e)},deDupe(e){return[...new Set(e)]},makeOptions(e){return e.slice(1).map((t,n,r)=>`${e[0]}  ${r[n]}`)},loadOptions(){var e=this;return Object(D["a"])(function*(){try{let n=yield fetch(e.timezoneFetch);if(!n.ok)throw new Error("Network problem - response not ok");n=yield n.json(),e.tzOptions=[e.cutOutTable,e.splitIntoRows,e.removeColumnHeaders].reduce((e,t)=>t(e),n.parse.text["*"]).map(e.pipe(e.splitIntoColumns,e.removeUnneededColumns,e.removeHTMLandParens,e.splitCountries,e.trimCountryNames,e.finalTouches,e.sortNames,e.removeBlanks,e.deDupe,e.makeOptions)).reduce((e,t)=>[...e,...t])}catch(t){alert(`There was a problem grabbing the data: ${t}.  Please try again.`)}})()}}}),M=N,$=(n("1cd6"),Object(m["a"])(M,E,z,!1,null,"5d829958",null)),B=$.exports,T={name:"SettingsElement",components:{BigButton:d,SwitchTwoWay:C,DropDownMenu:B},data(){return{saved:!1,timezone:JSON.parse(localStorage.getItem("settings"))?JSON.parse(localStorage.getItem("settings")).timezone:null,email:!JSON.parse(localStorage.getItem("settings"))||JSON.parse(localStorage.getItem("settings")).email,profile:!JSON.parse(localStorage.getItem("settings"))||JSON.parse(localStorage.getItem("settings")).profile}},computed:{popupMessage(){return this.timezone?"Your settings have been saved":"Please select a timezone"}},methods:Object(O["a"])({},Object(S["b"])(["setSettings"]),{handleClick(){this.saved=!0},afterEnter(){this.saved=!1}})},L=T,j=(n("66c5"),Object(m["a"])(L,b,w,!1,null,"4c938aee",null)),P=j.exports,J={name:"MessageSettings",components:{MessageElement:v,SettingsElement:P}},R=J,A=(n("a42c"),Object(m["a"])(R,r,s,!1,null,"78bcccae",null));t["default"]=A.exports},9533:function(e,t,n){},a2e3:function(e,t,n){},a363:function(e,t,n){},a42c:function(e,t,n){"use strict";var r=n("f76d"),s=n.n(r);s.a},aae3:function(e,t,n){var r=n("d3f4"),s=n("2d95"),a=n("2b4c")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==s(e))}},ebd6:function(e,t,n){var r=n("cb7c"),s=n("d8e8"),a=n("2b4c")("species");e.exports=function(e,t){var n,i=r(e).constructor;return void 0===i||void 0==(n=r(i)[a])?t:s(n)}},ec81:function(e,t,n){},f76d:function(e,t,n){},fd87:function(e,t,n){}}]);
//# sourceMappingURL=MessageSettings.9e38008f.js.map