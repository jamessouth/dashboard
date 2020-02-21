(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MembersActivity"],{"25f0":function(t,e,a){"use strict";var i=a("6eeb"),n=a("825a"),r=a("d039"),s=a("ad6d"),c="toString",o=RegExp.prototype,l=o[c],m=r((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),p=l.name!=c;(m||p)&&i(RegExp.prototype,c,(function(){var t=n(this),e=String(t.source),a=t.flags,i=String(void 0===a&&t instanceof RegExp&&!("flags"in o)?s.call(t):a);return"/"+e+"/"+i}),{unsafe:!0})},"3fce":function(t,e,a){"use strict";var i=a("7a3b"),n=a.n(i);n.a},"405a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"members_activity",attrs:{id:"members"}},[a("div",{staticClass:"new-members both"},[a("p",[t._v("new members")]),t._l(t.newMembersActivityData.slice(0,5),(function(t,e){return a("NewMemberRecActivity",{key:e,attrs:{name:t.name,email:t.email,photo:t.photo,date:t.date,"is-arabic":t.isArabic}})}))],2),a("div",{staticClass:"rec-activity both"},[a("p",[t._v("recent activity")]),t._l(t.activityData,(function(t,e){return a("NewMemberRecActivity",{key:e,attrs:{name:t.name,action:t.action,photo:t.photo,"is-arabic":t.isArabic,time:t.time}})}))],2)])},n=[],r=(a("e6cf"),a("4d63"),a("25f0"),a("2532"),a("5319"),a("498a"),a("1da1")),s=a("5530"),c=a("2f62"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"member",style:t.divMrgn},[a("img",{staticClass:"m-a-imgs",attrs:{src:t.imgSrc,alt:"user face or avatar"}}),a("div",{staticClass:"mem-act"},[a("div",[a("p",{style:t.nameFont},[t._v(t._s(t.name))]),t.date?a("p",[t._v(t._s(t._f("moment")(t.date,"M/DD/YY")))]):a("p",[t._v(t._s(t._f("moment")(t.time,"h:mm:ss a M/DD/YY")))])]),a("p",{style:t.emailActStyle,attrs:{tabindex:"0"}},[t._v(t._s(t.emailOrAction))])])])},l=[],m={name:"NewMemberRecActivity",props:{name:{type:String,required:!0},email:{type:String,required:!1},photo:{type:String,required:!0},isArabic:{type:Boolean,required:!0},action:Object,date:Object,time:Object},computed:{divMrgn(){return{margin:this.email?"1em 0 0 0":"1em auto 0",height:this.email?"80px":"100px"}},emailActStyle(){return{color:this.email?"#7377bf":"#676666",fontFamily:"'Josefin Slab', serif",fontWeight:"600"}},emailOrAction(){return this.email?this.email:this.action.comment?"".concat(this.action.long,' - "').concat(this.action.comment,'"'):this.action.long},nameFont(){return{fontFamily:this.isArabic?"'Amiri', serif":"'Alegreya Sans SC', sans-serif",letterSpacing:this.isArabic?"2px":"normal",lineHeight:this.isArabic?"21px":"normal",fontSize:this.isArabic?"21px":"16px",fontWeight:this.isArabic?"700":"800",fontStyle:"italic"}},imgSrc(){return this.photo?this.photo:"../assets/loading.png"}}},p=m,u=(a("56b5"),a("2877")),h=Object(u["a"])(p,o,l,!1,null,"25c475c5",null),f=h.exports,b={name:"MembersActivity",components:{NewMemberRecActivity:f},data(){return{count:0,act:null,timer:null,lastTime:7195,newMembersActivityData:[],activityData:[]}},created(){this.getUserData()},methods:Object(s["a"])({},Object(c["b"])(["setUsers"]),{rando(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(Math.random()*t)+e},loadActivitiesData(t){this.timer=requestAnimationFrame(this.loadActivitiesData);var e=this.rando(2494,379);t>this.lastTime&&(this.lastTime+=e,this.count+=1,this.act=Object(s["a"])({},this.newMembersActivityData[this.rando(this.newMembersActivityData.length)],{action:this.makeAction(),time:this.$moment()}),this.activityData.unshift(this.act),this.count>10&&cancelAnimationFrame(this.timer))},isArabic(t){return!new RegExp(/[A-zÀ-ÿğŞı]+/gim).test(t)},makeAction(){var t=["commented on a post","posted","liked a post","shared a post","tweeted a post","retweeted a post"],e=["Is Vue the awesomest framework? Prolly","Linting for Fun and Profit","SEO Tips","Facebook's Changes for 2018","Moving to AWS","Mobile Web Update"],a=["Amazing!","Awesome!","Excellent!","Wow! This is great!","Nice work!","Sweet!"],i=t[this.rando(t.length)],n={long:"".concat(i,": ").concat(e[this.rando(t.length)])};return n.long.includes("comment")?Object(s["a"])({},n,{comment:"".concat(a[this.rando(t.length)])}):n},caps(t){return"".concat(t[0].toUpperCase()).concat(t.substring(1))},makeName(t){var e=t.first.trim(),a=t.last.trim();return e=e.replace(/([A-zÀ-ÿğŞı]+|\w+[A-zÀ-ÿğŞı]*)\w*$/gi,this.caps).replace(/jean-/,"Jean-").replace(/filipe/,"Filipe").replace(/hans-/,"Hans-").replace(/zine-/,"Zine-").replace(/sue-/,"Sue-").replace(/ernst-/,"Ernst-").replace(/klaus-/,"Klaus-").replace(/aart-/,"Aart-").replace(/anne-/,"Anne-").replace(/franz-/,"Franz-"),a=a.replace(/([A-zÀ-ÿğŞı]+|\w+[A-zÀ-ÿğŞı]*)\w*$/gi,this.caps).replace(/cdonal/,"cDonal").replace(/toole/,"'Toole").replace(/brien/,"'Brien").replace(/donoghue/,"'Donoghue").replace(/mahony/,"'Mahony").replace(/(\w)\1{2}/g,"$1$1").replace(/jean-/,"Jean-").replace(/^mccoy/i,"McCoy").replace(/^mckinney/i,"McKinney"),"".concat(e," ").concat(a)},processData(t,e){var a={name:this.makeName(t.name),photo:t.picture.thumbnail,isArabic:this.isArabic(t.name.first)};return e<5?Object(s["a"])({},a,{email:t.email,date:this.$moment().subtract(e,"days")}):a},getUserData(){var t=this;return Object(r["a"])((function*(){var e=10;try{var a=yield fetch("https://randomuser.me/api/?results=".concat(e,"&inc=name,email,picture&noinfo"));if(!a.ok)throw new Error("Network problem - response not ok");a=yield a.json();for(var i=0;i<e;i+=1)t.$set(t.newMembersActivityData,i,t.processData(a.results[i],i));t.setUsers(t.newMembersActivityData),t.timer=requestAnimationFrame(t.loadActivitiesData)}catch(n){alert("There was a problem grabbing the data: ".concat(n,".  Please try again."))}}))()}})},d=b,g=(a("3fce"),Object(u["a"])(d,i,n,!1,null,"5eb17a18",null));e["default"]=g.exports},"4d63":function(t,e,a){var i=a("83ab"),n=a("da84"),r=a("94ca"),s=a("7156"),c=a("9bf2").f,o=a("241c").f,l=a("44e7"),m=a("ad6d"),p=a("9f7f"),u=a("6eeb"),h=a("d039"),f=a("69f3").set,b=a("2626"),d=a("b622"),g=d("match"),v=n.RegExp,y=v.prototype,A=/a/g,w=/a/g,D=new v(A)!==A,M=p.UNSUPPORTED_Y,S=i&&r("RegExp",!D||M||h((function(){return w[g]=!1,v(A)!=A||v(w)==w||"/a/i"!=v(A,"i")})));if(S){var x=function(t,e){var a,i=this instanceof x,n=l(t),r=void 0===e;if(!i&&n&&t.constructor===x&&r)return t;D?n&&!r&&(t=t.source):t instanceof x&&(r&&(e=m.call(t)),t=t.source),M&&(a=!!e&&e.indexOf("y")>-1,a&&(e=e.replace(/y/g,"")));var c=s(D?new v(t,e):v(t,e),i?this:y,x);return M&&a&&f(c,{sticky:a}),c},_=function(t){t in x||c(x,t,{configurable:!0,get:function(){return v[t]},set:function(e){v[t]=e}})},k=o(v),O=0;while(k.length>O)_(k[O++]);y.constructor=x,x.prototype=y,u(n,"RegExp",x)}b("RegExp")},"56b5":function(t,e,a){"use strict";var i=a("9601"),n=a.n(i);n.a},7156:function(t,e,a){var i=a("861d"),n=a("d2bb");t.exports=function(t,e,a){var r,s;return n&&"function"==typeof(r=e.constructor)&&r!==a&&i(s=r.prototype)&&s!==a.prototype&&n(t,s),t}},"7a3b":function(t,e,a){},9601:function(t,e,a){}}]);
//# sourceMappingURL=MembersActivity.44db5342.js.map