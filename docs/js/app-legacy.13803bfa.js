(function(t){function e(e){for(var o,r,i=e[0],u=e[1],s=e[2],d=0,l=[];d<i.length;d++)r=i[d],a[r]&&l.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);y&&y(e);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},a={app:0},c=[];function i(t){return u.p+"js/"+({AlertBox:"AlertBox",BarDonut:"BarDonut",MembersActivity:"MembersActivity",MessageSettings:"MessageSettings",NavBar:"NavBar",SocialElement:"SocialElement"}[t]||t)+"-legacy."+{AlertBox:"b0a11e1a",BarDonut:"1b07cd50",MembersActivity:"a1882b1a",MessageSettings:"46356671",NavBar:"f2ab3198",SocialElement:"8f9cb7dd"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={AlertBox:1,BarDonut:1,MembersActivity:1,MessageSettings:1,NavBar:1,SocialElement:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var o="css/"+({AlertBox:"AlertBox",BarDonut:"BarDonut",MembersActivity:"MembersActivity",MessageSettings:"MessageSettings",NavBar:"NavBar",SocialElement:"SocialElement"}[t]||t)+"."+{AlertBox:"1ddecfde",BarDonut:"ecfd7436",MembersActivity:"9a38823b",MessageSettings:"ca19670b",NavBar:"7e1a82ce",SocialElement:"0651f663"}[t]+".css",a=u.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===a))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],d=s.getAttribute("data-href");if(d===o||d===a)return e()}var y=document.createElement("link");y.rel="stylesheet",y.type="text/css",y.onload=e,y.onerror=function(e){var o=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.request=o,delete r[t],y.parentNode.removeChild(y),n(c)},y.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(y)}).then(function(){r[t]=0}));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var c=new Promise(function(e,n){o=a[t]=[e,n]});e.push(o[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(t),s=function(e){d.onerror=d.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+o+": "+r+")");c.type=o,c.request=r,n[1](c)}a[t]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/Vue-Project-9/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var y=d;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"091d":function(t,e,n){},"0e64":function(t,e,n){"use strict";var o=n("091d"),r=n.n(o);r.a},"0efb":function(t,e,n){},2156:function(t,e,n){},2771:function(t,e,n){},4099:function(t,e,n){t.exports=n.p+"img/nodata.8d0aea6f.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o,r,a=n("2b0e"),c=n("2ead"),i=n.n(c),u=n("c1df"),s=n.n(u),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HeaderBar",{on:{a2hs:function(e){t.alert=!0},a2hsOffered:function(e){t.alert=!1},head:t.header}}),n("div",{attrs:{id:"hold"}},[t.showNav?n("NavBar",{attrs:{alert:t.alert,"head-shown":t.headShown}}):t._e(),n("MainElement",{on:{"show-nav":function(e){t.showNav=!0}}})],1)],1)},l=[],y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{ref:"head"},[t._m(0),o("div",[o("button",{class:{unclickable:!t.a2hsPrompt},attrs:{disabled:!t.a2hsPrompt},on:{click:function(e){t.openAlert=!t.openAlert}}},[o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"}},[o("path",{staticClass:"st0",attrs:{d:"M24 18v-8c0-5.5-4.5-10-10-10S4 4.5 4 10v8l-4 8h9.1c0.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H28L24 18zM14 28c-1.3 0-2.4-0.8-2.8-2h5.6C16.4 27.2 15.3 28 14 28zM3 24l3-6v-8c0-4.4 3.6-8 8-8s8 3.6 8 8v8l3 6H3z"}})])]),o("div",{staticClass:"triangle",style:t.alertStyles}),o("div",{staticClass:"dropdown",style:t.alertStyles},[o("button",{ref:"pbut",on:{click:t.a2hs}},[t._v("Add to Home Screen")])]),o("span",{class:{blink:t.a2hsPrompt}},[t._v(".")]),o("p",[t._v("|")]),o("img",{attrs:{src:n("753c"),alt:"user face or avatar"}}),o("p",[t._v(t._s(t.name))])])])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("MyApp"),n("span",[t._v("™")])])}],f=(n("96cf"),n("3b8d")),m=(n("7f7f"),{name:"HeaderBar",data:function(){return{name:this.$store.state.name,openAlert:!1,a2hsPrompt:null,IOoptions:{root:null,rootMargin:"0px 0px 0px 0px",threshold:.5}}},computed:{alertStyles:function(){return{display:this.openAlert&&this.a2hsPrompt?"block":"none"}}},beforeCreate:function(){var t=this;window.addEventListener("beforeinstallprompt",function(e){e.preventDefault(),t.a2hsPrompt=e,t.$emit("a2hs")})},mounted:function(){window.IntersectionObserver&&this.IOobserve()},methods:{IOcallback:function(t){this.$emit("head",t[0].isIntersecting)},IOobserve:function(){var t=new IntersectionObserver(this.IOcallback,this.IOoptions);t.observe(this.$refs.head)},a2hs:function(){var t=Object(f["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.a2hsPrompt.prompt(),t.next=3,this.a2hsPrompt.userChoice;case 3:this.a2hsPrompt=null,this.openAlert=!1,this.$emit("a2hsOffered");case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}}),p=m,g=(n("0e64"),n("2877")),b=Object(g["a"])(p,y,h,!1,null,"5d9b1247",null),v=b.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[t._m(0),t.newAlert?n("AlertBox",{attrs:{"reg-obj":t.rego}}):t._e(),n("router-view",[n("LineChartWrapper")],1),n("p",{ref:"BarDonut",staticClass:"IOsentinel",attrs:{id:"BarDonut"}}),t.IOflags.BarDonut?n("BarDonut"):t._e(),n("p",{ref:"Social",staticClass:"IOsentinel",attrs:{id:"Social"}}),t.IOflags.Social?n("SocialElement"):t._e(),n("p",{ref:"MembersActivity",staticClass:"IOsentinel",attrs:{id:"MembersActivity"}}),t.IOflags.MembersActivity?n("MembersActivity"):t._e(),n("p",{ref:"MessageSettings",staticClass:"IOsentinel",attrs:{id:"MessageSettings"}}),t.IOflags.MessageSettings?n("MessageSettings"):t._e()],1)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-title"},[n("h1",[t._v("Dashboard")]),n("div")])}],w=n("a4bb"),M=n.n(w),A=(n("ac6a"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("LineChartControls",{attrs:{country:t.country,indicator:t.indicator}}),!this.$store.state.loading&&t.isData?o("line-chart",{attrs:{"chart-data":t.chartData,options:t.chartOptions}}):this.$store.state.loading||t.isData?o("div",[t._v("Loading...")]):o("img",{attrs:{width:"300",height:"360",src:n("4099"),alt:"no data"}})],1)}),I=[],B=n("795b"),O=n.n(B),k=(n("5df3"),n("768b")),x=(n("a481"),n("6762"),n("2fdb"),n("cebc")),D=[{code:"AF",country:"Afghanistan"},{code:"AL",country:"Albania"},{code:"DZ",country:"Algeria"},{code:"AS",country:"American Samoa"},{code:"AD",country:"Andorra"},{code:"AO",country:"Angola"},{code:"AG",country:"Antigua and Barbuda"},{code:"AR",country:"Argentina"},{code:"AM",country:"Armenia"},{code:"AW",country:"Aruba"},{code:"AU",country:"Australia"},{code:"AT",country:"Austria"},{code:"AZ",country:"Azerbaijan"},{code:"BS",country:"Bahamas, The"},{code:"BH",country:"Bahrain"},{code:"BD",country:"Bangladesh"},{code:"BB",country:"Barbados"},{code:"BY",country:"Belarus"},{code:"BE",country:"Belgium"},{code:"BZ",country:"Belize"},{code:"BJ",country:"Benin"},{code:"BM",country:"Bermuda"},{code:"BT",country:"Bhutan"},{code:"BO",country:"Bolivia"},{code:"BA",country:"Bosnia and Herzegovina"},{code:"BW",country:"Botswana"},{code:"BR",country:"Brazil"},{code:"VG",country:"British Virgin Islands"},{code:"BN",country:"Brunei Darussalam"},{code:"BG",country:"Bulgaria"},{code:"BF",country:"Burkina Faso"},{code:"BI",country:"Burundi"},{code:"CV",country:"Cabo Verde"},{code:"KH",country:"Cambodia"},{code:"CM",country:"Cameroon"},{code:"CA",country:"Canada"},{code:"KY",country:"Cayman Islands"},{code:"CF",country:"Central African Republic"},{code:"TD",country:"Chad"},{code:"JG",country:"Channel Islands"},{code:"CL",country:"Chile"},{code:"CN",country:"China"},{code:"CO",country:"Colombia"},{code:"KM",country:"Comoros"},{code:"CD",country:"Congo, Dem. Rep."},{code:"CG",country:"Congo, Rep."},{code:"CR",country:"Costa Rica"},{code:"CI",country:"Cote d'Ivoire"},{code:"HR",country:"Croatia"},{code:"CU",country:"Cuba"},{code:"CW",country:"Curacao"},{code:"CY",country:"Cyprus"},{code:"CZ",country:"Czech Republic"},{code:"DK",country:"Denmark"},{code:"DJ",country:"Djibouti"},{code:"DM",country:"Dominica"},{code:"DO",country:"Dominican Republic"},{code:"EC",country:"Ecuador"},{code:"EG",country:"Egypt"},{code:"SV",country:"El Salvador"},{code:"GQ",country:"Equatorial Guinea"},{code:"ER",country:"Eritrea"},{code:"EE",country:"Estonia"},{code:"ET",country:"Ethiopia"},{code:"FO",country:"Faroe Islands"},{code:"FJ",country:"Fiji"},{code:"FI",country:"Finland"},{code:"FR",country:"France"},{code:"PF",country:"French Polynesia"},{code:"GA",country:"Gabon"},{code:"GM",country:"Gambia, The"},{code:"GE",country:"Georgia"},{code:"DE",country:"Germany"},{code:"GH",country:"Ghana"},{code:"GI",country:"Gibraltar"},{code:"GR",country:"Greece"},{code:"GL",country:"Greenland"},{code:"GD",country:"Grenada"},{code:"GU",country:"Guam"},{code:"GT",country:"Guatemala"},{code:"GN",country:"Guinea"},{code:"GW",country:"Guinea-Bissau"},{code:"GY",country:"Guyana"},{code:"HT",country:"Haiti"},{code:"HN",country:"Honduras"},{code:"HK",country:"Hong Kong"},{code:"HU",country:"Hungary"},{code:"IS",country:"Iceland"},{code:"IN",country:"India"},{code:"ID",country:"Indonesia"},{code:"IR",country:"Iran"},{code:"IQ",country:"Iraq"},{code:"IE",country:"Ireland"},{code:"IM",country:"Isle of Man"},{code:"IL",country:"Israel"},{code:"IT",country:"Italy"},{code:"JM",country:"Jamaica"},{code:"JP",country:"Japan"},{code:"JO",country:"Jordan"},{code:"KZ",country:"Kazakhstan"},{code:"KE",country:"Kenya"},{code:"KI",country:"Kiribati"},{code:"XK",country:"Kosovo"},{code:"KW",country:"Kuwait"},{code:"KG",country:"Kyrgyz Republic"},{code:"LA",country:"Laos"},{code:"LV",country:"Latvia"},{code:"LB",country:"Lebanon"},{code:"LS",country:"Lesotho"},{code:"LR",country:"Liberia"},{code:"LY",country:"Libya"},{code:"LI",country:"Liechtenstein"},{code:"LT",country:"Lithuania"},{code:"LU",country:"Luxembourg"},{code:"MO",country:"Macao"},{code:"MK",country:"Macedonia"},{code:"MG",country:"Madagascar"},{code:"MW",country:"Malawi"},{code:"MY",country:"Malaysia"},{code:"MV",country:"Maldives"},{code:"ML",country:"Mali"},{code:"MT",country:"Malta"},{code:"MH",country:"Marshall Islands"},{code:"MR",country:"Mauritania"},{code:"MU",country:"Mauritius"},{code:"MX",country:"Mexico"},{code:"FM",country:"Micronesia, Fed. Sts."},{code:"MD",country:"Moldova"},{code:"MC",country:"Monaco"},{code:"MN",country:"Mongolia"},{code:"ME",country:"Montenegro"},{code:"MA",country:"Morocco"},{code:"MZ",country:"Mozambique"},{code:"MM",country:"Myanmar"},{code:"NA",country:"Namibia"},{code:"NR",country:"Nauru"},{code:"NP",country:"Nepal"},{code:"NL",country:"Netherlands"},{code:"NC",country:"New Caledonia"},{code:"NZ",country:"New Zealand"},{code:"NI",country:"Nicaragua"},{code:"NE",country:"Niger"},{code:"NG",country:"Nigeria"},{code:"KP",country:"North Korea"},{code:"MP",country:"Northern Mariana Islands"},{code:"NO",country:"Norway"},{code:"OM",country:"Oman"},{code:"PK",country:"Pakistan"},{code:"PW",country:"Palau"},{code:"PA",country:"Panama"},{code:"PG",country:"Papua New Guinea"},{code:"PY",country:"Paraguay"},{code:"PE",country:"Peru"},{code:"PH",country:"Philippines"},{code:"PL",country:"Poland"},{code:"PT",country:"Portugal"},{code:"PR",country:"Puerto Rico"},{code:"QA",country:"Qatar"},{code:"RO",country:"Romania"},{code:"RU",country:"Russian Federation"},{code:"RW",country:"Rwanda"},{code:"WS",country:"Samoa"},{code:"SM",country:"San Marino"},{code:"ST",country:"Sao Tome and Principe"},{code:"SA",country:"Saudi Arabia"},{code:"SN",country:"Senegal"},{code:"RS",country:"Serbia"},{code:"SC",country:"Seychelles"},{code:"SL",country:"Sierra Leone"},{code:"SG",country:"Singapore"},{code:"SX",country:"Sint Maarten (Dutch part)"},{code:"SK",country:"Slovak Republic"},{code:"SI",country:"Slovenia"},{code:"SB",country:"Solomon Islands"},{code:"SO",country:"Somalia"},{code:"ZA",country:"South Africa"},{code:"KR",country:"South Korea"},{code:"SS",country:"South Sudan"},{code:"ES",country:"Spain"},{code:"LK",country:"Sri Lanka"},{code:"KN",country:"St. Kitts and Nevis"},{code:"LC",country:"St. Lucia"},{code:"MF",country:"St. Martin (French part)"},{code:"VC",country:"St. Vincent and the Grenadines"},{code:"SD",country:"Sudan"},{code:"SR",country:"Suriname"},{code:"SZ",country:"Swaziland"},{code:"SE",country:"Sweden"},{code:"CH",country:"Switzerland"},{code:"SY",country:"Syria"},{code:"TW",country:"Taiwan"},{code:"TJ",country:"Tajikistan"},{code:"TZ",country:"Tanzania"},{code:"TH",country:"Thailand"},{code:"TL",country:"Timor-Leste"},{code:"TG",country:"Togo"},{code:"TO",country:"Tonga"},{code:"TT",country:"Trinidad and Tobago"},{code:"TN",country:"Tunisia"},{code:"TR",country:"Turkey"},{code:"TM",country:"Turkmenistan"},{code:"TC",country:"Turks and Caicos Islands"},{code:"TV",country:"Tuvalu"},{code:"UG",country:"Uganda"},{code:"UA",country:"Ukraine"},{code:"AE",country:"United Arab Emirates"},{code:"GB",country:"United Kingdom"},{code:"US",country:"United States"},{code:"UY",country:"Uruguay"},{code:"UZ",country:"Uzbekistan"},{code:"VU",country:"Vanuatu"},{code:"VE",country:"Venezuela"},{code:"VN",country:"Vietnam"},{code:"VI",country:"Virgin Islands (U.S.)"},{code:"PS",country:"West Bank and Gaza"},{code:"YE",country:"Yemen"},{code:"ZM",country:"Zambia"},{code:"ZW",country:"Zimbabwe"}],E=D,P=n("1fca"),T=P["d"].reactiveProp,L={name:"LineChart",extends:P["c"],mixins:[T],props:{options:Object},watch:{chartOptions:function(t){this.renderChart(this.chartData,t)}},mounted:function(){this.renderChart(this.chartData,this.options)}},N=L,_=Object(g["a"])(N,o,r,!1,null,"faf1fb42",null),F=_.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"line-controls",attrs:{id:"charts"}},[n("div",{staticClass:"dropdown"},[n("label",{attrs:{for:"sel_country"}},[t._v("select country")]),t._m(0),n("button",{on:{click:t.changeCountry_Route}},[t._v("GO!")])]),n("div",{ref:"linebuttons",staticClass:"line-buttons",on:{click:t.changeIndicator_Subroute}},t._l(t.indicators,function(e,o){return n("button",{key:o,class:{lineSelected:e.toLowerCase()===t.indicator},attrs:{value:e.toLowerCase()}},[t._v("\n      "+t._s(e)+"\n    ")])}),0),n("p",[n("a",{staticClass:"newwindow",attrs:{rel:"noopener noreferrer",target:"_blank",href:"https://data.worldbank.org/"}},[t._v("world bank data")]),t._v("  "),n("span",{style:t.spanCols},[t._v(t._s(t.loadingOrCountry))])])])},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",{attrs:{name:"sel_country",id:"sel_country"}},[n("option",{attrs:{selected:"",disabled:"",value:""}},[t._v("Select Country")])])}],j=n("75fc"),U={name:"LineChartControls",props:{country:String,indicator:String},data:function(){return{selectedIndicatorIndex:0,indicators:["GDP","Population","Regulation","Tax"]}},computed:{spanCols:function(){return{color:this.$store.state.loading?"red":"#111775"}},loadingOrCountry:function(){return this.$store.state.loading?"Loading...":" for: ".concat(this.country.replace(/-/g," "))}},watch:{$route:function(t){var e=Object(j["a"])(this.$refs.linebuttons.children).filter(function(e){return e.value===t.params.indicator})[0];e!==document.activeElement&&e.focus()}},mounted:function(){for(var t=0;t<E.length;t+=1){var e=document.createElement("option");e.textContent="".concat(E[t].country),document.querySelector("select").appendChild(e)}},methods:{changeCountry_Route:function(){var t=document.querySelector("select").value;this.$router.push("/".concat(t).toLowerCase().replace(/ /g,"-"))},changeIndicator_Subroute:function(t){var e=t.target.innerText.toLowerCase();this.$router.push("/".concat(this.country,"/").concat(e))}}},$=U,K=(n("995e"),Object(g["a"])($,G,R,!1,null,"9346b7ba",null)),H=K.exports,V={name:"LineChartWrapper",components:{LineChart:F,LineChartControls:H},props:{country:String,indicator:String},data:function(){return{baseToolTipOpts:{backgroundColor:"#000",displayColors:!1,titleFontColor:"#d5d5ec",titleFontSize:13,bodyFontColor:"#ecd5d5",bodyFontStyle:"bold",bodyFontSize:13,titleMarginBottom:6,callbacks:{title:function(t){return"".concat(t[0].xLabel,":")}}},error:!1,indicatorDetails:{gdp:"GDP per capita (constant 2010 US$)",population:"Total population",regulation:"Time required to start a business (days)",tax:"Total tax rate (% of commercial profits)"},countryData:{},chartData:null,masterOptions:{gdp:{tooltips:{callbacks:{label:function(t){var e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return e.format(t.yLabel)}}},scales:{yAxes:[{ticks:{callback:function(t){var e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0});return e.format(t)}}}]}},population:{tooltips:{callbacks:{label:function(t){var e=new Intl.NumberFormat("en-US",{maximumFractionDigits:0});return e.format(t.yLabel)}}},scales:{yAxes:[{ticks:{callback:function(t){var e=new Intl.NumberFormat("en-US",{maximumFractionDigits:0});return e.format(t)}}}]}},regulation:{tooltips:{callbacks:{label:function(t){var e=new Intl.NumberFormat("en-US",{minimumFractionDigits:1,maximumFractionDigits:1});return e.format(t.yLabel)}}},scales:{yAxes:[{ticks:{callback:function(t){var e=new Intl.NumberFormat("en-US",{minimumFractionDigits:1,maximumFractionDigits:1});return e.format(t)}}}]}},tax:{tooltips:{callbacks:{label:function(t){var e=new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});return"".concat(e.format(t.yLabel),"%")}}},scales:{yAxes:[{ticks:{callback:function(t){var e=new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});return"".concat(e.format(t),"%")}}}]}}}}},computed:{isData:function(){return this.chartData&&this.chartData.datasets[0].data.length>0},chartOptions:function(){return{scales:this.masterOptions[this.indicator].scales,tooltips:Object(x["a"])({},this.baseToolTipOpts,{callbacks:Object(x["a"])({},this.masterOptions[this.indicator].tooltips.callbacks,this.baseToolTipOpts.callbacks)})}}},beforeRouteEnter:function(t,e,n){n(function(){var t=Object(f["a"])(regeneratorRuntime.mark(function t(e){var n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.lookupCountryCode(e.country),o=e.getIndicatorName(e.indicator),t.next=4,e.getData(n);case 4:e.setProps(o);case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())},beforeRouteUpdate:function(){var t=Object(f["a"])(regeneratorRuntime.mark(function t(e,n,o){var r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.$store.commit("toggleLoadingStatus"),r=this.lookupCountryCode(e.params.country),a=this.getIndicatorName(e.params.indicator),!(r instanceof Error||r.message||"error"===a)){t.next=9;break}this.error=!0,this.$store.commit("toggleLoadingStatus"),o(!1),t.next=21;break;case 9:if(this.error=!1,!this.$store.getters.dataIsCached(r)){t.next=17;break}return this.$store.commit("toggleLoadingStatus"),t.next=14,this.$store.getters.getDataFromCache(r);case 14:this.countryData=t.sent,t.next=19;break;case 17:return t.next=19,this.getData(r);case 19:this.setProps(a),o();case 21:case"end":return t.stop()}},t,this)}));function e(e,n,o){return t.apply(this,arguments)}return e}(),methods:{setProps:function(t){var e=this.countryData[t];this.chartData={labels:e.labels,datasets:[{label:this.indicatorDetails[t],data:e.data,backgroundColor:"rgba(115,119,191,0.3)",lineTension:0,borderColor:"#7377BF",borderWidth:1,pointRadius:4,pointBorderWidth:2,pointBorderColor:"#7377BF",pointBackgroundColor:"#fbfbfb",pointHoverRadius:4}]}},getIndicatorName:function(t){return["gdp","population","regulation","tax"].includes(t)?t:"error"},lookupCountryCode:function(t){var e=E.filter(function(e){return e.country.toLowerCase().replace(/ /g,"-")===t});try{return e[0].code.toLowerCase()}catch(n){return n}},makeAPICall:function(){var t=Object(f["a"])(regeneratorRuntime.mark(function t(e,n){var o,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return o={labels:[],data:[]},t.prev=1,t.next=4,fetch("https://api.worldbank.org/v2/countries/".concat(e,"/indicators/").concat(n,"?MRV=5&format=json"));case 4:if(r=t.sent,!r.ok){t.next=11;break}return t.next=8,r.json();case 8:r=t.sent,t.next=12;break;case 11:throw new Error("Network problem - response not ok");case 12:if(null!==r[1]){t.next=14;break}throw new Error("No data available for this location or series");case 14:return t.next=16,r[1].forEach(function(t){o.labels.unshift(t.date),o.data.unshift(t.indicator.id.includes("POP")?t.value:(Math.round(100*t.value)/100).toFixed(2))});case 16:t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](1),alert("There was a problem grabbing the data: ".concat(t.t0,".  Please try again."));case 21:return t.abrupt("return",o);case 22:case"end":return t.stop()}},t,null,[[1,18]])}));function e(e,n){return t.apply(this,arguments)}return e}(),getData:function(){var t=Object(f["a"])(regeneratorRuntime.mark(function t(e){var n,o,r,a,c,i,u;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O.a.all([this.makeAPICall(e,"NY.GDP.PCAP.KD"),this.makeAPICall(e,"SP.POP.TOTL"),this.makeAPICall(e,"IC.REG.DURS"),this.makeAPICall(e,"IC.TAX.TOTL.CP.ZS")]);case 2:n=t.sent,o=Object(k["a"])(n,4),r=o[0],a=o[1],c=o[2],i=o[3],u={gdp:r,population:a,regulation:c,tax:i,code:e},this.$store.commit("cacheData",u),this.countryData=u,this.$store.commit("toggleLoadingStatus");case 12:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},z=V,W=(n("9117"),Object(g["a"])(z,A,I,!1,null,"7ac7a232",null)),Z=W.exports,J={name:"MainElement",components:{AlertBox:function(){return n.e("AlertBox").then(n.bind(null,"d6df")).catch(function(t){return console.log(t)})},LineChartWrapper:Z,BarDonut:function(){return n.e("BarDonut").then(n.bind(null,"d716")).catch(function(t){return console.log(t)})},SocialElement:function(){return n.e("SocialElement").then(n.bind(null,"e272")).catch(function(t){return console.log(t)})},MembersActivity:function(){return n.e("MembersActivity").then(n.bind(null,"405a")).catch(function(t){return console.log(t)})},MessageSettings:function(){return n.e("MessageSettings").then(n.bind(null,"8e73")).catch(function(t){return console.log(t)})}},data:function(){return{newAlert:!1,rego:null,IOoptions:{root:null,rootMargin:"0px 0px 180px 0px",threshold:.1},IOflags:{BarDonut:!1,Social:!1,MembersActivity:!1,MessageSettings:!1}}},mounted:function(){var t=this;document.addEventListener("swUpdated",this.changeAlert),window.addEventListener("load",function(){window.IntersectionObserver?setTimeout(t.IOobserve,600):(M()(t.IOflags).forEach(function(e){t.IOflags[e]=!0}),document.querySelectorAll("p.IOsentinel").forEach(function(t){t.style.display="none"}),t.$emit("show-nav"))})},methods:{IOcallback:function(t,e){var n=this;t.filter(function(t){return t.isIntersecting}).forEach(function(t){n.IOflags[t.target.id]=!0,e.unobserve(t.target),t.target.classList.add("hide"),setTimeout(function(){return t.target.style.display="none"},920),/MessageSettings/.test(t.target.id)&&n.$emit("show-nav")})},IOobserve:function(){var t=this,e=new IntersectionObserver(this.IOcallback,this.IOoptions);M()(this.$refs).forEach(function(n){return e.observe(t.$refs[n])})},changeAlert:function(t){this.newAlert=!0,this.rego=t.detail}}},Y=J,q=(n("c1b3"),Object(g["a"])(Y,S,C,!1,null,"0a83cd2a",null)),Q=q.exports,X={components:{HeaderBar:v,NavBar:function(){return n.e("NavBar").then(n.bind(null,"d000")).catch(function(t){return console.log(t)})},MainElement:Q},data:function(){return{showNav:!1,alert:!1,headShown:null}},methods:{header:function(t){this.headShown=t}}},tt=X,et=(n("034f"),Object(g["a"])(tt,d,l,!1,null,null,null)),nt=et.exports,ot=n("8c4f");a["a"].use(ot["a"]);var rt=new ot["a"]({routes:[{path:"(/|/charts|/members|/settings)",redirect:"/united-states/gdp"},{path:"/:country",redirect:"/:country/gdp"},{path:"/:country/:indicator",name:"country",props:!0,component:Z}]}),at=n("f499"),ct=n.n(at),it=n("bd86"),ut=n("2f62");a["a"].use(ut["a"]);var st=new ut["a"].Store({state:{name:"James South",loading:!0,cache:{},settings:{},users:[]},getters:{dataIsCached:function(t){return function(e){return Object.prototype.hasOwnProperty.call(t.cache,e)}},getDataFromCache:function(t){return function(e){return t.cache[e]}},getSettings:function(t){return t.settings}},mutations:{toggleLoadingStatus:function(t){t.loading=!t.loading},cacheData:function(t,e){var n=Object(it["a"])({},e.code,e);t.cache=Object(x["a"])({},t.cache,n)},setSettings:function(t,e){t.settings=e},setUsers:function(t,e){t.users=e}},actions:{setSettings:function(t,e){var n=t.commit;n("setSettings",e),localStorage.setItem("settings",ct()(e))},setUsers:function(t,e){var n=t.commit;n("setUsers",e)}}}),dt=n("9483");Object(dt["a"])("".concat("/Vue-Project-9/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){var t;console.log("New content is downloading."),navigator.serviceWorker.addEventListener("controllerchange",function(){t||(window.location.reload(),t=!0)})},updated:function(t){console.log("New content is available; please refresh.");var e=new CustomEvent("swUpdated",{detail:t});document.dispatchEvent(e)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["a"].config.productionTip=!1,a["a"].use(i.a,{moment:s.a}),new a["a"]({router:rt,store:st,render:function(t){return t(nt)}}).$mount("#app")},"64a9":function(t,e,n){},"753c":function(t,e,n){t.exports=n.p+"img/face.69232788.jpg"},9117:function(t,e,n){"use strict";var o=n("2771"),r=n.n(o);r.a},"995e":function(t,e,n){"use strict";var o=n("2156"),r=n.n(o);r.a},c1b3:function(t,e,n){"use strict";var o=n("0efb"),r=n.n(o);r.a}});
//# sourceMappingURL=app-legacy.13803bfa.js.map