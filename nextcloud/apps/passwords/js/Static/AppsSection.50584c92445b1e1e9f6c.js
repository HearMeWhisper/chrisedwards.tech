(window.pwWpJsonP=window.pwWpJsonP||[]).push([[1],{311:function(a,t,s){var e=s(364);"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);(0,s(12).default)("4d1481a2",e,!1,{})},363:function(a,t,s){"use strict";var e=s(311);s.n(e).a},364:function(a,t,s){},424:function(a,t,s){"use strict";s.r(t);var e=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{attrs:{id:"app-content"}},[s("div",{staticClass:"app-content-left apps"},[s("breadcrumb",{attrs:{"show-add-new":!1}}),a._v(" "),s("div",{staticClass:"app-overview"},[s("translate",{attrs:{say:"Browsers",tag:"h1",icon:"globe"}}),a._v(" "),s("translate",{attrs:{say:"Android",tag:"h1",icon:"android"}}),a._v(" "),s("div",{staticClass:"app-list"},a._l(a.getBrowserExtensions,(function(t,e){return s("a",{staticClass:"app",class:e,attrs:{target:"_blank",rel:"noreferrer noopener",href:t.download}},[s("translate",{attrs:{say:t.label,tag:"h3"}}),a._v(" "),s("web",{staticClass:"author",class:{"fa fa-certificate":t.official},attrs:{target:"_blank",href:t.sources,text:t.author}}),a._v(" "),s("translate",{staticClass:"description",attrs:{say:t.description,tag:"div"}}),a._v(" "),a.passlink?s("div",{staticClass:"passlink-container"},[s("translate",{staticClass:"primary passlink-connect",attrs:{say:"Connect with PassLink",tag:"button"},on:{click:function(s){return s.preventDefault(),a.startPasslink(t.extPassLink)}}})],1):a._e()],1)})),0),a._v(" "),s("div",{staticClass:"app-list"},a._l(a.getAndroidApps,(function(t,e){return s("a",{staticClass:"app",class:[e,t.legacy?"legacy":""],attrs:{target:"_blank",rel:"noreferrer noopener",href:t.download}},[s("translate",{attrs:{say:t.label,tag:"h3"}}),a._v(" "),s("web",{staticClass:"author",attrs:{target:"_blank",href:t.web,text:t.author}}),a._v(" "),s("span",{staticClass:"dot"},[a._v("⦁")]),a._v(" "),s("web",{staticClass:"author",attrs:{target:"_blank",href:t.sources,text:"sources"}}),a._v(" "),s("translate",{staticClass:"description",attrs:{say:t.description,tag:"div"}}),a._v(" "),t.legacy?s("translate",{staticClass:"legacy",attrs:{say:"This app uses an api which is no longer supported.",tag:"div"}}):a._e()],1)})),0)],1)],1)])};e._withStripped=!0;var o=s(35),r=s(19),i=new class{async initialize(a=!0){let t=await s.e(3).then(s.bind(null,420));new(r.a.extend(t.default))({propsData:{showConnectLink:a}}).$mount("#app-popup div")}},n=s(7),l=s(28),c=s(1),d=s(46),p={components:{Web:o.a,Breadcrumb:l.a,Translate:n.a},data:()=>({passlink:!1}),mounted(){d.a.check("passlink-connect").then(a=>{this.passlink=a})},computed:{getBrowserExtensions:()=>({firefox:{label:"Official Firefox Client",author:c.a.translate("official"),description:"Access and manage all your passwords easily within Firefox thanks to our official extension from the Firefox Add-on store.",download:"https://addons.mozilla.org/firefox/addon/nextcloud-passwords?src=external-apps",sources:"https://github.com/marius-wieschollek/passwords-webextension",extPassLink:!0,official:!0},chrome:{label:"Official Chrome Client",author:c.a.translate("official"),description:"Our official Chrome extension lets you manage all your passwords from your browser and is available for many Chromium based Browsers from the Chrome Web Store.",download:"https://chrome.google.com/webstore/detail/nextcloud-passwords/mhajlicjhgoofheldnmollgbgjheenbi",sources:"https://github.com/marius-wieschollek/passwords-webextension",extPassLink:!1,official:!0}}),getAndroidApps:()=>({daper:{label:"Nextcloud Passwords",author:c.a.translate("created by {author}",{author:"daper"}),description:"Finally a modern, fast and lightweight app to access and manage your passwords from your Android device. Get it from Google Play.",download:"https://play.google.com/store/apps/details?id=com.nextcloudpasswords",sources:"https://github.com/daper/nextcloud-passwords-app",web:"https://github.com/daper",legacy:!1},intirix:{label:"Cloud Password Manager",author:c.a.translate("created by {author}",{author:"intirix"}),description:"Cloud Password Manager is a password manager that puts you in control. Access all the passwords stored on your Nextcloud from your Android Phone.",download:"https://play.google.com/store/apps/details?id=com.intirix.cloudpasswordmanager",sources:"https://github.com/intirix/cloudpasswordmanager",web:"https://github.com/intirix",legacy:!0}})},methods:{startPasslink(a){i.initialize(a)}}},u=(s(363),s(4)),h=Object(u.a)(p,e,[],!1,null,null,null);h.options.__file="src/vue/Section/Apps.vue";t.default=h.exports}}]);