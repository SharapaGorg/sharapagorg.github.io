(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(n,t,e){var content=e(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(58).default)("1239d49d",content,!0,{sourceMap:!1})},172:function(n,t,e){"use strict";e(59);var o={data:function(){return{nightTheme:this.$store.state.turner.themeIsLight,isRussian:this.$store.state.turner.langIsRussian,rotateStep:0}},methods:{changeLang:function(){var content=this.$refs.root.querySelector(".content");this.$refs.root.querySelector(".main-logo").style.transform="rotate(".concat(this.rotateStep+360,"deg)"),content.style.width="0px",this.rotateStep+=360,setTimeout((function(){content.style.width="100%"}),800),this.$store.commit("turner/changeLang"),this.isRussian=this.$store.state.turner.langIsRussian},changeTheme:function(){var html=document.querySelector("html");this.nightTheme?html.style.backgroundColor="#3A424B":(console.log(1),html.style.backgroundColor="rgb(238, 240, 244)")}}},r=(e(228),e(42)),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticStyle:{overflow:"hidden"}},[o("div",{staticClass:"flag-container",on:{click:n.changeLang}},[o("div",{directives:[{name:"show",rawName:"v-show",value:n.isRussian,expression:"isRussian"}],staticClass:"flag"},[o("img",{attrs:{src:e(173)}})]),n._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!n.isRussian,expression:"!isRussian"}],staticClass:"flag"},[o("img",{attrs:{src:e(174)}})])]),n._v(" "),o("div",{ref:"root"},[o("nuxt")],1),n._v(" "),n._m(0)])}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("footer",{staticClass:"md:hidden"},[e("span",{staticClass:"block mx-auto text-xl pt-2 mb-4",staticStyle:{width:"fit-content"}},[n._v("Social")]),n._v(" "),e("span",{staticClass:"ml-6"},[e("span",{staticClass:"inline-block",staticStyle:{width:"80px"}},[n._v("Telegram")]),n._v(":\n      "),e("span",{staticClass:"font-bold"},[n._v("@sharapagorg")])]),n._v(" "),e("br"),n._v(" "),e("span",{staticClass:"ml-6"},[e("span",{staticClass:"inline-block",staticStyle:{width:"80px"}},[n._v("Discord")]),n._v(":\n      "),e("span",{staticClass:"font-bold"},[n._v("SharapaGorg#0049")])]),n._v(" "),e("br"),n._v(" "),e("span",{staticClass:"ml-6"},[e("span",{staticClass:"inline-block",staticStyle:{width:"80px"}},[n._v("Github")]),n._v(":\n      "),e("span",{staticClass:"font-bold"},[n._v("SharapaGorg")])])])}],!1,null,null,null);t.a=component.exports},173:function(n,t){n.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGNUY1RjU7IiBkPSJNNDczLjY1NSw4OC4yNzZIMzguMzQ1QzE3LjE2Nyw4OC4yNzYsMCwxMDUuNDQzLDAsMTI2LjYyMXY3My40NzFoNTEydi03My40NzENCglDNTEyLDEwNS40NDMsNDk0LjgzMyw4OC4yNzYsNDczLjY1NSw4OC4yNzZ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkY0QjU1OyIgZD0iTTAsMzg1LjM3OWMwLDIxLjE3NywxNy4xNjcsMzguMzQ1LDM4LjM0NSwzOC4zNDVoNDM1LjMxYzIxLjE3NywwLDM4LjM0NS0xNy4xNjcsMzguMzQ1LTM4LjM0NQ0KCXYtNzMuNDcxSDBWMzg1LjM3OXoiLz4NCjxyZWN0IHk9IjIwMC4wOSIgc3R5bGU9ImZpbGw6IzQxNDc5QjsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTExLjgxIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="},174:function(n,t,e){n.exports=e.p+"img/UK.2f75f38.svg"},177:function(n,t,e){e(178),n.exports=e(179)},226:function(n,t,e){var content=e(227);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(58).default)("9d54a558",content,!0,{sourceMap:!1})},227:function(n,t,e){var o=e(57)((function(i){return i[1]}));o.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Comfortaa&family=Open+Sans:wght@500;600&family=Yuji+Hentaigana+Akebono&display=swap);"]),o.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Comfortaa&family=Open+Sans:wght@500;600&family=Ubuntu:wght@500&family=Yuji+Hentaigana+Akebono&display=swap);"]),o.push([n.i,'/*purgecss start ignore*/\n\nhtml{\n  background-color:#eef0f4\n}\n\n.content{\n  overflow-x:hidden\n}\n\n.theme-turner{\n  height:70px;\n  width:70px;\n  float:right;\n  display:inline-block;\n  margin-right:25px\n}\n\n.flag-container{\n  cursor:pointer;\n  height:70px;\n  width:70px;\n  margin-left:25px;\n  margin-top:25px;\n  border-radius:100%;\n  box-shadow:9.91px 9.91px 15px #d9dade,-9.91px -9.91px 15px #fff;\n  border:2px solid #eef0f4\n}\n\n.flag{\n  top:3px;\n  height:60px;\n  width:60px;\n  border-radius:100%;\n  box-shadow:inset 9.91px 9.91px 15px #d9dade,inset -9.91px -9.91px 15px #fff;\n  margin-left:auto;\n  margin-right:auto\n}\n\n.flag,.flag img{\n  position:relative\n}\n\n.flag img{\n  top:10px;\n  height:40px;\n  width:40px;\n  margin-left:auto;\n  margin-right:auto\n}\n\n.unselectable{\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none\n}\n\n.logo-container{\n  cursor:pointer;\n  width:250px;\n  height:250px;\n  border-radius:100%;\n  overflow:hidden;\n  box-shadow:inset 9.91px 9.91px 15px #d9dade,inset -9.91px -9.91px 15px #fff\n}\n\n.small-logo{\n  margin-top:62px;\n  height:128px;\n  width:128px;\n  margin-left:auto;\n  margin-right:auto\n}\n\n.main-logo{\n  width:256px;\n  height:256px;\n  z-index:105;\n  border-radius:100%;\n  transition:all .8s linear;\n  background-color:#eef0f4;\n  position:relative;\n  cursor:pointer\n}\n\n.navigator-item{\n  cursor:pointer;\n  height:100px;\n  width:100px;\n  background-color:#eef0f4;\n  border-radius:50%\n}\n\n.contacts{\n  bottom:105px\n}\n\n.contact{\n  box-shadow:9.91px 9.91px 15px #d9dade,-9.91px -9.91px 15px #fff;\n  border-radius:100%;\n  position:relative;\n  bottom:160px;\n  z-index:2\n}\n\n.contact,.contact div{\n  transition:all .75s linear\n}\n\n.test{\n  margin-bottom:50px\n}\n\n.logo-text{\n  cursor:pointer;\n  position:relative;\n  top:45px;\n  display:block;\n  font-size:120px;\n  width:256px;\n  font-family:"Comfortaa",cursive;\n  text-align:center;\n  -webkit-touch-callout:none;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none\n}\n\n.tech-title{\n  font-size:40px;\n  border-radius:20px;\n  display:block;\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  text-align:center\n}\n\n.bio-header,.tech-title{\n  font-family:"Ubuntu",sans-serif;\n  color:#3a424b\n}\n\n.bio-header{\n  font-size:25px;\n  margin-left:auto;\n  margin-right:auto;\n  display:block\n}\n\n.bio-description{\n  font-family:"Ubuntu",sans-serif;\n  font-size:16px;\n  color:#3a424b;\n  display:inline-block;\n  text-indent:1rem;\n  text-align:justify\n}\n\n.bio{\n  margin-top:30px;\n  width:80%;\n  border-radius:10px;\n  padding-left:2rem;\n  padding-right:2rem;\n  padding-top:1rem;\n  padding-bottom:1rem;\n  text-align:center\n}\n\n.bio,.SharapaLogo{\n  box-shadow:9.91px 9.91px 15px #d9dade,-9.91px -9.91px 15px #fff\n}\n\n.SharapaLogo{\n  position:relative;\n  height:256px;\n  z-index:100;\n  border-radius:100%\n}\n\n.line{\n  height:3px;\n  min-width:40vw;\n  border-radius:100px;\n  background-color:#3a424b\n}\n\n/*purgecss end ignore*/',""]),o.locals={},n.exports=o},228:function(n,t,e){"use strict";e(165)},229:function(n,t,e){var o=e(57)((function(i){return i[1]}));o.push([n.i,'/*purgecss start ignore*/\nfooter{\n  font-family:"Comfortaa",cursive;\n  background:#3a424b;\n  color:#fff;\n  margin-top:20px;\n  height:150px;\n  width:100%\n}\n\n/*purgecss end ignore*/',""]),o.locals={},n.exports=o},230:function(n,t,e){"use strict";e.r(t),e.d(t,"state",(function(){return o})),e.d(t,"mutations",(function(){return r})),e.d(t,"actions",(function(){return l})),e.d(t,"getters",(function(){return c}));var o=function(){},r={},l={},c={}},231:function(n,t,e){"use strict";e.r(t),e.d(t,"state",(function(){return o})),e.d(t,"mutations",(function(){return r})),e.d(t,"actions",(function(){return l})),e.d(t,"getters",(function(){return c}));var o=function(){return{langIsRussian:!1,themeIsLight:!0}},r={changeLang:function(n){n.langIsRussian=!n.langIsRussian},changeTheme:function(n){n.themeIsLight=!n.themeIsLight}},l={},c={getLang:function(n){return n.langIsRussian},getTheme:function(n){return n.themeIsLight}}}},[[177,7,1,8]]]);