(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{741:function(t,e,i){var o=i(765);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i(45).default)("64529e8b",o,!0,{})},742:function(t,e,i){var o=i(767);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i(45).default)("7082939a",o,!0,{})},764:function(t,e,i){"use strict";var o=i(741);i.n(o).a},765:function(t,e,i){(e=i(44)(!1)).push([t.i,".icon-more[data-v-c879b428]{right:14px;opacity:0.3;cursor:pointer;height:44px;width:44px}.pollListItem[data-v-c879b428]{display:flex;flex:1;border-bottom:1px solid var(--color-border-dark);padding:4px 8px}.pollListItem>div[data-v-c879b428]{padding-right:8px}.pollListItem.header[data-v-c879b428]{opacity:0.5;flex:auto;height:4em;align-items:center;padding-left:44px}.pollListItem.header>div[data-v-c879b428]{cursor:pointer;display:flex}.pollListItem.header>div:hover .sort-indicator.hidden[data-v-c879b428]{visibility:visible;display:block}.pollListItem.poll .title[data-v-c879b428]{flex-direction:column}.pollListItem.poll .title>*[data-v-c879b428]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pollListItem .title[data-v-c879b428]{display:flex;align-items:stretch;width:210px;flex:1 0 auto}.pollListItem .title .description[data-v-c879b428]{opacity:0.5}.pollListItem .owner[data-v-c879b428]{flex:0 0 auto;width:230px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.pollListItem .actions[data-v-c879b428]{width:44px;align-items:center;position:relative}.pollListItem .created[data-v-c879b428],.pollListItem .expiry[data-v-c879b428]{display:flex;flex-wrap:wrap;align-items:center;width:110px;flex:0 1 auto;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.thumbnail[data-v-c879b428]{flex:0 0 auto;width:44px;height:44px;padding-right:4px;font-size:0;background-color:var(--color-text-light)}.thumbnail.datePoll[data-v-c879b428]{mask-image:var(--icon-calendar-000) no-repeat 50% 50%;-webkit-mask:var(--icon-calendar-000) no-repeat 50% 50%;mask-size:16px}.thumbnail.textPoll[data-v-c879b428]{mask-image:var(--icon-organization-000) no-repeat 50% 50%;-webkit-mask:var(--icon-organization-000) no-repeat 50% 50%;mask-size:16px}.thumbnail.expired[data-v-c879b428]{background-color:var(--color-background-darker)}.thumbnail.access[data-v-c879b428]{display:inherit}.thumbnail.access.hidden[data-v-c879b428]{mask-image:var(--icon-password-000) no-repeat 50% 50%;-webkit-mask:var(--icon-password-000) no-repeat 50% 50%;mask-size:16px}.thumbnail.access.public[data-v-c879b428]{mask-image:var(--icon-link-000) no-repeat 50% 50%;-webkit-mask:var(--icon-link-000) no-repeat 50% 50%;mask-size:16px}\n",""]),t.exports=e},766:function(t,e,i){"use strict";var o=i(742);i.n(o).a},767:function(t,e,i){var o=i(44),s=i(768),l=i(769);e=o(!1);var n=s(l);e.push([t.i,".main-container[data-v-b4130878]{flex:1}.table[data-v-b4130878]{width:100%;display:flex;flex-direction:column;flex:1;flex-wrap:nowrap}#emptycontent .icon-polls[data-v-b4130878]{background-color:black;-webkit-mask:url("+n+") no-repeat 50% 50%;mask:url("+n+") no-repeat 50% 50%}\n",""]),t.exports=e},768:function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},769:function(t,e,i){"use strict";i.r(e),e.default=i.p+"app.svg?acc601d7eb0da0d52a9655926468f275"},815:function(e,i,o){"use strict";o.r(i);var s=o(19),l={name:"PollListItem",components:{Actions:s.Actions,ActionButton:s.ActionButton},props:{header:{type:Boolean,default:!1},poll:{type:Object,default:void 0},sort:{type:String,default:"created"},reverse:{type:Boolean,default:!0}},data:function(){return{openedMenu:!1,hostName:this.$route.query.page}},computed:{expired:function(){return this.poll.expire>0&&moment.unix(this.poll.expire).diff()<0},accessType:function(){return"public"===this.poll.access?t("polls","Visible to other users"):t("polls","Hidden to other users")},pollType:function(){return"textPoll"===this.poll.type?t("polls","Poll type"):t("polls","Poll schedule")},timeSpanExpiration:function(){return this.poll.expire?moment.unix(this.poll.expire).fromNow():t("polls","never")}},methods:{toggleMenu:function(){this.openedMenu=!this.openedMenu},refreshPolls:function(){this.$store.dispatch("loadPolls")},hideMenu:function(){this.openedMenu=!1},switchDeleted:function(){var t=this;this.$store.dispatch("switchDeleted",{pollId:this.poll.id}).then((function(e){t.refreshPolls()})),this.hideMenu()},clonePoll:function(){var t=this;this.$store.dispatch("clonePoll",{pollId:this.poll.id}).then((function(e){t.refreshPolls()})),this.hideMenu()}}},n=(o(764),o(15)),r=Object(n.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.header?i("div",{staticClass:"pollListItem header"},[i("div",{staticClass:"title",on:{click:function(e){return t.$emit("sortList",{sort:"title"})}}},[t._v("\n\t\t"+t._s(t.t("polls","Title"))+"\n\t\t"),i("span",{class:["sort-indicator",{hidden:"title"!==t.sort},t.reverse?"icon-triangle-s":"icon-triangle-n"]})]),t._v(" "),i("div",{staticClass:"access",on:{click:function(e){return t.$emit("sortList",{sort:"access"})}}},[t._v("\n\t\t"+t._s(t.t("polls","Access"))+"\n\t\t"),i("span",{class:["sort-indicator",{hidden:"access"!==t.sort},t.reverse?"icon-triangle-s":"icon-triangle-n"]})]),t._v(" "),i("div",{staticClass:"owner",on:{click:function(e){return t.$emit("sortList",{sort:"owner"})}}},[t._v("\n\t\t"+t._s(t.t("polls","Owner"))+"\n\t\t"),i("span",{class:["sort-indicator",{hidden:"owner"!==t.sort},t.reverse?"icon-triangle-s":"icon-triangle-n"]})]),t._v(" "),i("div",{staticClass:"created",on:{click:function(e){return t.$emit("sortList",{sort:"created"})}}},[t._v("\n\t\t"+t._s(t.t("polls","Created"))+"\n\t\t"),i("span",{class:["sort-indicator",{hidden:"created"!==t.sort},t.reverse?"icon-triangle-s":"icon-triangle-n"]})]),t._v(" "),i("div",{staticClass:"expiry",on:{click:function(e){return t.$emit("sortList",{sort:"expire"})}}},[t._v("\n\t\t"+t._s(t.t("polls","Expires"))+"\n\t\t"),i("span",{class:["sort-indicator",{hidden:"expire"!==t.sort},t.reverse?"icon-triangle-s":"icon-triangle-n"]})])]):i("div",{staticClass:"pollListItem poll"},[i("div",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.pollType,expression:"pollType",modifiers:{auto:!0}}],staticClass:"thumbnail",class:[t.poll.type,{expired:t.expired}]},[t._v("\n\t\t"+t._s(t.pollType)+"\n\t")]),t._v(" "),i("router-link",{staticClass:"title",attrs:{to:{name:"vote",params:{id:t.poll.id}}}},[i("div",{staticClass:"name"},[t._v("\n\t\t\t"+t._s(t.poll.title)+"\n\t\t")]),t._v(" "),i("div",{staticClass:"description"},[t._v("\n\t\t\t"+t._s(t.poll.description)+"\n\t\t")])]),t._v(" "),i("Actions",[i("ActionButton",{attrs:{icon:"icon-add"},on:{click:function(e){return t.clonePoll()}}},[t._v("\n\t\t\t"+t._s(t.t("polls","Clone poll"))+"\n\t\t")]),t._v(" "),t.poll.allowEdit&&!t.poll.deleted?i("ActionButton",{attrs:{icon:"icon-delete"},on:{click:function(e){return t.switchDeleted()}}},[t._v("\n\t\t\t"+t._s(t.poll.isAdmin?t.t("polls","Delete poll as admin"):t.t("polls","Delete poll"))+"\n\t\t")]):t._e(),t._v(" "),t.poll.allowEdit&&t.poll.deleted?i("ActionButton",{attrs:{icon:"icon-history"},on:{click:function(e){return t.switchDeleted()}}},[t._v("\n\t\t\t"+t._s(t.poll.isAdmin?t.t("polls","Restore poll as admin"):t.t("polls","Restore poll"))+"\n\t\t")]):t._e()],1),t._v(" "),i("div",{directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:t.accessType,expression:"accessType",modifiers:{auto:!0}}],staticClass:"thumbnail access",class:t.poll.access},[t._v("\n\t\t"+t._s(t.accessType)+"\n\t")]),t._v(" "),i("div",{staticClass:"owner"},[i("user-div",{attrs:{"user-id":t.poll.owner,"display-name":t.poll.ownerDisplayName}})],1),t._v(" "),i("div",{staticClass:"created "},[t._v("\n\t\t"+t._s(t.moment.unix(t.poll.created).fromNow())+"\n\t")]),t._v(" "),i("div",{staticClass:"expiry",class:{expired:t.poll.expired}},[t._v("\n\t\t"+t._s(t.timeSpanExpiration)+"\n\t")])],1)}),[],!1,null,"c879b428",null).exports,a=o(33),c=o(165),p=o.n(c);function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var v={name:"PollList",components:{AppContent:s.AppContent,PollListItem:r},data:function(){return{noPolls:!1,isLoading:!0,sort:"created",reverse:!0}},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(Object(i),!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},Object(a.c)(["allPolls","myPolls","publicPolls","hiddenPolls","participatedPolls","deletedPolls"]),{filteredList:function(){return"my"===this.$route.params.type?this.myPolls:"public"===this.$route.params.type?this.publicPolls:"hidden"===this.$route.params.type?this.hiddenPolls:"deleted"===this.$route.params.type?this.deletedPolls:"participated"===this.$route.params.type?this.participatedPolls:this.allPolls},sortedList:function(){return this.reverse?p()(this.filteredList,this.sort).reverse():p()(this.filteredList,this.sort)}}),mounted:function(){this.refreshPolls()},methods:{setSort:function(t){this.sort===t.sort?this.reverse=!this.reverse:(this.sort=t.sort,this.reverse=!0)},callPoll:function(t,e,i){this.$router.push({name:i,params:{id:e.id}})},refreshPolls:function(){var e=this;this.isLoading=!0,this.$store.dispatch("loadPolls").then((function(){e.isLoading=!1})).catch((function(i){e.isLoading=!1,console.error("refresh poll: ",i.response),OC.Notification.showTemporary(t("polls","Error loading polls",1,e.poll.title),{type:"error"})}))}}},h=(o(766),Object(n.a)(v,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("AppContent",[i("div",{staticClass:"main-container"},[t.noPolls?i("div",{},[i("div",{staticClass:"icon-polls"}),t._v(" "),i("h2",[t._v(" "+t._s(t.t("No existing polls."))+" ")])]):t._e(),t._v(" "),t.noPolls?t._e():i("transition-group",{staticClass:"table",attrs:{name:"list",tag:"div"}},[i("PollListItem",{key:"0",attrs:{header:!0,sort:t.sort,reverse:t.reverse},on:{sortList:function(e){return t.setSort(e)}}}),t._v(" "),t._l(t.sortedList,(function(e,o){return i("PollListItem",{key:e.id,tag:"li",attrs:{poll:e},on:{deletePoll:function(i){return t.removePoll(o,e)},editPoll:function(i){return t.callPoll(o,e,"edit")},clonePoll:function(i){return t.callPoll(o,e,"clone")}}})}))],2)],1),t._v(" "),t.isLoading?i("LoadingOverlay"):t._e()],1)}),[],!1,null,"b4130878",null));i.default=h.exports}}]);
//# sourceMappingURL=polls.2.1df173bf7cdc6ab90339.js.map