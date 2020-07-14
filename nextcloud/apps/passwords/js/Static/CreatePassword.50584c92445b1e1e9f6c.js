(window.pwWpJsonP=window.pwWpJsonP||[]).push([[4],{104:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"background",attrs:{id:"passwords-create-new"}},[s("div",{staticClass:"window"},[s("div",{staticClass:"title"},[s("translate",{attrs:{say:e.title}}),e._v(" "),s("i",{staticClass:"fa fa-times close",on:{click:function(t){return e.closeWindow()}}})],1),e._v(" "),s("form",{staticClass:"content",on:{submit:function(t){return t.preventDefault(),e.submitAction()}}},[s("div",{staticClass:"form left"},[s("translate",{staticClass:"section-title",attrs:{tag:"div",say:"Properties"}}),e._v(" "),s("div",{staticClass:"form-grid"},[s("translate",{attrs:{tag:"label",for:"password-username",say:"Username"}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password.username,expression:"password.username"}],attrs:{id:"password-username",type:"text",name:"username",maxlength:"64",autocomplete:"off"},domProps:{value:e.password.username},on:{input:function(t){t.target.composing||e.$set(e.password,"username",t.target.value)}}}),e._v(" "),s("translate",{attrs:{tag:"label",for:"password-password",say:"Password"}}),e._v(" "),s("div",{staticClass:"password-field"},[s("div",{staticClass:"icons"},[s("translate",{staticClass:"fa",class:{"fa-eye":e.showPassword,"fa-eye-slash":!e.showPassword},attrs:{tag:"i",title:"Toggle visibility"},on:{click:function(t){return e.togglePasswordVisibility()}}}),e._v(" "),s("translate",{staticClass:"fa fa-refresh",class:{"fa-spin":e.showLoader},attrs:{tag:"i",title:"Generate password"},on:{click:function(t){return e.generateRandomPassword()}}})],1),e._v(" "),"checkbox"==(e.showPassword?"text":"password")?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password.password,expression:"password.password"}],attrs:{id:"password-password",name:"password",pattern:".{0,256}",autocomplete:"new-password",required:"",readonly:"",type:"checkbox"},domProps:{checked:Array.isArray(e.password.password)?e._i(e.password.password,null)>-1:e.password.password},on:{change:function(t){var s=e.password.password,a=t.target,r=!!a.checked;if(Array.isArray(s)){var l=e._i(s,null);a.checked?l<0&&e.$set(e.password,"password",s.concat([null])):l>-1&&e.$set(e.password,"password",s.slice(0,l).concat(s.slice(l+1)))}else e.$set(e.password,"password",r)}}}):"radio"==(e.showPassword?"text":"password")?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password.password,expression:"password.password"}],attrs:{id:"password-password",name:"password",pattern:".{0,256}",autocomplete:"new-password",required:"",readonly:"",type:"radio"},domProps:{checked:e._q(e.password.password,null)},on:{change:function(t){return e.$set(e.password,"password",null)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.password.password,expression:"password.password"}],attrs:{id:"password-password",name:"password",pattern:".{0,256}",autocomplete:"new-password",required:"",readonly:"",type:e.showPassword?"text":"password"},domProps:{value:e.password.password},on:{input:function(t){t.target.composing||e.$set(e.password,"password",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"settings",class:{active:e.generator.active}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.generator.numbers,expression:"generator.numbers"}],attrs:{id:"password-password-numbers",type:"checkbox",disabled:!e.generator.active},domProps:{checked:Array.isArray(e.generator.numbers)?e._i(e.generator.numbers,null)>-1:e.generator.numbers},on:{change:function(t){var s=e.generator.numbers,a=t.target,r=!!a.checked;if(Array.isArray(s)){var l=e._i(s,null);a.checked?l<0&&e.$set(e.generator,"numbers",s.concat([null])):l>-1&&e.$set(e.generator,"numbers",s.slice(0,l).concat(s.slice(l+1)))}else e.$set(e.generator,"numbers",r)}}}),e._v(" "),s("translate",{attrs:{tag:"label",for:"password-password-numbers",say:"Numbers"}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.generator.special,expression:"generator.special"}],attrs:{id:"password-password-special",type:"checkbox",disabled:!e.generator.active},domProps:{checked:Array.isArray(e.generator.special)?e._i(e.generator.special,null)>-1:e.generator.special},on:{change:function(t){var s=e.generator.special,a=t.target,r=!!a.checked;if(Array.isArray(s)){var l=e._i(s,null);a.checked?l<0&&e.$set(e.generator,"special",s.concat([null])):l>-1&&e.$set(e.generator,"special",s.slice(0,l).concat(s.slice(l+1)))}else e.$set(e.generator,"special",r)}}}),e._v(" "),s("translate",{attrs:{tag:"label",for:"password-password-special",say:"Special Characters"}})],1),e._v(" "),s("translate",{attrs:{tag:"label",for:"password-label",say:"Name"}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password.label,expression:"password.label"}],attrs:{id:"password-label",type:"text",name:"label",maxlength:"64"},domProps:{value:e.password.label},on:{input:function(t){t.target.composing||e.$set(e.password,"label",t.target.value)}}}),e._v(" "),s("translate",{attrs:{tag:"label",for:"password-url",say:"Website"}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password.url,expression:"password.url"}],attrs:{id:"password-url",type:"url",name:"url",maxlength:"2048"},domProps:{value:e.password.url},on:{input:function(t){t.target.composing||e.$set(e.password,"url",t.target.value)}}})],1)],1),e._v(" "),s("div",{staticClass:"form right"},[s("foldout",{attrs:{title:"Notes","initially-open":e.notesOpen}},[s("div",{staticClass:"notes-container"},[e.password.notes.length>4095?s("translate",{staticClass:"warning",attrs:{tag:"div",say:"You have reached the maximum length of 4096 characters"}}):e._e(),e._v(" "),s("textarea",{attrs:{id:"password-notes",name:"notes",maxlength:"4096"}})],1)]),e._v(" "),s("foldout",{attrs:{title:"Custom Fields","initially-open":e.customFieldsOpen}},[s("custom-fields",{attrs:{fields:e.password.customFields},on:{updated:e.updateCustomFields}})],1),e._v(" "),s("foldout",{attrs:{title:"More Options"}},[s("div",{staticClass:"form-grid"},[s("translate",{attrs:{tag:"label",for:"password-favorite",say:"Favorite"}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password.favorite,expression:"password.favorite"}],attrs:{id:"password-favorite",name:"favorite",type:"checkbox"},domProps:{checked:Array.isArray(e.password.favorite)?e._i(e.password.favorite,null)>-1:e.password.favorite},on:{change:function(t){var s=e.password.favorite,a=t.target,r=!!a.checked;if(Array.isArray(s)){var l=e._i(s,null);a.checked?l<0&&e.$set(e.password,"favorite",s.concat([null])):l>-1&&e.$set(e.password,"favorite",s.slice(0,l).concat(s.slice(l+1)))}else e.$set(e.password,"favorite",r)}}}),e._v(" "),s("translate",{attrs:{tag:"label",for:"password-cse",say:"Encryption"}}),e._v(" "),s("select",{directives:[{name:"model",rawName:"v-model.number",value:e.password.cseType,expression:"password.cseType",modifiers:{number:!0}}],attrs:{id:"password-cse",name:"cseType",title:"Choose the encryption type for this password",disabled:!e.hasEncryption},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(t){var s="_value"in t?t._value:t.value;return e._n(s)}));e.$set(e.password,"cseType",t.target.multiple?s:s[0])}}},[s("translate",{attrs:{tag:"option",value:"none",say:"On the server"}}),e._v(" "),s("translate",{attrs:{tag:"option",value:"CSEv1r1",say:"Libsodium"}})],1)],1)])],1),e._v(" "),s("div",{staticClass:"controls"},[s("translate",{attrs:{tag:"input",type:"submit","localized-value":"Save"}})],1)])])])};a._withStripped=!0;var r=s(0),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"foldout-container",class:{open:e.open,"first-open":e.firstOpen}},[s("translate",{staticClass:"foldout-title",attrs:{tag:"div",icon:"chevron-right",say:e.title},on:{click:function(t){return e.toggleContent()}}}),e._v(" "),s("div",{staticClass:"foldout-content",style:e.contentStyle},[e._t("default")],2)],1)};l._withStripped=!0;var o=s(7),i={components:{Translate:o.a},props:{title:{type:String,default:"More Options"},initiallyOpen:{type:Boolean,default:!1}},data:()=>({observer:null,maxHeight:0,open:!1,firstOpen:!0}),mounted(){this.initiallyOpen&&(this.open=!0),this.observer=new MutationObserver(()=>{this.maxHeight=this.$slots.default[0].elm.offsetHeight}),this.observer.observe(this.$el.querySelector(".foldout-content"),{childList:!0,subtree:!0})},beforeDestroy:function(){this.observer.disconnect()},computed:{contentStyle(){if(this.maxHeight=0,this.open){let e=this.$slots.default[0].elm;e&&(this.maxHeight=e.offsetHeight)}return{maxHeight:this.maxHeight.toString()+"px"}}},methods:{toggleContent(){this.open=!this.open,this.firstOpen=!1}}},n=(s(367),s(4)),d=Object(n.a)(i,l,[],!1,null,null,null);d.options.__file="src/vue/Components/Foldout.vue";var p=d.exports,c=s(6),u=s(2),m=s(1),v=s(5),h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"custom-fields",attrs:{id:"custom-fields"}},e._l(e.getFields,(function(t,a){return s("custom-field-form",{key:a,attrs:{field:t},on:{deleted:e.deleteField,updated:e.updateField}},[a!==e.fields.length?s("hr"):e._e()])})),1)};h._withStripped=!0;var w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"custom-field-form"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.label,expression:"label"}],staticClass:"field-label",class:{error:e.showNameError},attrs:{type:"text",placeholder:e.namePlaceholder,maxlength:"48"},domProps:{value:e.label},on:{input:function(t){t.target.composing||(e.label=t.target.value)}}}),e._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],staticClass:"field-type",attrs:{disabled:!e.isValidName},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.type=t.target.multiple?s:s[0]}}},[s("translate",{attrs:{tag:"option",value:"text"}},[e._v("Text")]),e._v(" "),s("translate",{attrs:{tag:"option",value:"secret"}},[e._v("Secret")]),e._v(" "),s("translate",{attrs:{tag:"option",value:"email"}},[e._v("Email")]),e._v(" "),s("translate",{attrs:{tag:"option",value:"url"}},[e._v("Link")]),e._v(" "),s("translate",{attrs:{tag:"option",value:"file"}},[e._v("File")])],1),e._v(" "),"file"===e.type?s("input",{staticClass:"file-picker",style:e.getFileButtonStyle,attrs:{type:"button",disabled:!e.isValidName,value:e.value},on:{click:e.openNextcloudFile}}):e._e(),e._v(" "),"checkbox"===e.getFieldType&&"file"!==e.type?s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"field-value",attrs:{placeholder:e.valuePlaceholder,maxlength:"320",autocomplete:e.getAutoComplete,disabled:!e.isValidName,pattern:e.getPattern,required:"",type:"checkbox"},domProps:{checked:Array.isArray(e.value)?e._i(e.value,null)>-1:e.value},on:{change:function(t){var s=e.value,a=t.target,r=!!a.checked;if(Array.isArray(s)){var l=e._i(s,null);a.checked?l<0&&(e.value=s.concat([null])):l>-1&&(e.value=s.slice(0,l).concat(s.slice(l+1)))}else e.value=r}}}):"radio"===e.getFieldType&&"file"!==e.type?s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"field-value",attrs:{placeholder:e.valuePlaceholder,maxlength:"320",autocomplete:e.getAutoComplete,disabled:!e.isValidName,pattern:e.getPattern,required:"",type:"radio"},domProps:{checked:e._q(e.value,null)},on:{change:function(t){e.value=null}}}):"file"!==e.type?s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"field-value",attrs:{placeholder:e.valuePlaceholder,maxlength:"320",autocomplete:e.getAutoComplete,disabled:!e.isValidName,pattern:e.getPattern,required:"",type:e.getFieldType},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}):e._e(),e._v(" "),s("input",{staticClass:"fa fa-trash field-button",attrs:{type:"button",disabled:!e.isValidName,value:""},on:{click:e.deleteField}}),e._v(" "),e._t("default")],2)};w._withStripped=!0;var f={components:{Translate:o.a},props:{field:{type:Object,default:()=>({label:"",type:"text",id:0,blank:!1,value:null})}},data(){return{label:this.field.label,type:this.field.type,value:this.field.value,isBlank:this.field.blank}},computed:{showNameError(){return!this.isValidName&&!this.isBlank},isValidName(){return this.label.length},getFieldType(){return"secret"===this.type?"password":"email"===this.type?"email":"url"===this.type?"url":"text"},getFileButtonStyle:()=>({backgroundImage:`url(${v.a.get("server.theme.folder.icon")})`}),getPattern(){return"url"===this.type?"\\w+://.+":"email"===this.type&&"^.{1,}@[^@]{1,}$"},getAutoComplete(){return"secret"===this.type?"new-password":"on"},namePlaceholder:()=>m.a.translate("Name"),valuePlaceholder:()=>m.a.translate("Value")},methods:{async openNextcloudFile(){this.value=await u.a.filePicker()},deleteField(){this.$emit("deleted",this.field)},updateField(){this.value&&this.$emit("updated",{label:this.label,type:this.type,value:this.value,id:this.field.id})}},watch:{label(){this.isValidName&&this.updateField()},type(e){"file"===e&&(this.value=null),this.isValidName&&this.updateField()},value(){this.isValidName&&this.updateField()},field(e){this.label=e.label,this.type=e.type,this.value=e.value,this.isBlank=this.field.blank}}},g=(s(369),Object(n.a)(f,w,[],!1,null,null,null));g.options.__file="src/vue/Dialog/CreatePassword/CustomFieldForm.vue";var y={components:{CustomFieldForm:g.exports},props:{fields:{type:Array}},data:()=>({showHidden:v.a.get("client.ui.custom.fields.show.hidden")}),computed:{getFields(){let e=[];for(let t=0;t<this.fields.length;t++){let s=c.a.cloneObject(this.fields[t]);("data"!==s.type||this.showHidden)&&(s.id=t,s.blank=!1,e.push(s))}return e.length<20&&e.push({label:"",type:"text",value:"",id:e.length,blank:!0}),e}},methods:{updateField(e){let t=c.a.cloneObject(this.fields);t[e.id]={label:e.label,type:e.type,value:e.value},this.$emit("updated",t)},deleteField(e){let t=c.a.cloneObject(this.fields);t.splice(e.id,1),this.$emit("updated",t)},cloneFields(){}}},b=(s(371),Object(n.a)(y,h,[],!1,null,null,null));b.options.__file="src/vue/Dialog/CreatePassword/CustomFields.vue";var _=b.exports,x={components:{Foldout:p,Translate:o.a,CustomFields:_},props:{title:{type:String,default:"Create password"},properties:{type:Object},_success:{type:Function}},data(){let e=1===v.a.get("user.encryption.cse")?"CSEv1r1":"none",t=Object.assign({cseType:e,notes:"",customFields:[]},this.properties);return{notesOpen:window.innerWidth>641,customFieldsOpen:window.innerWidth>641&&0!==t.customFields.length,showPassword:!1,showLoader:!1,simplemde:null,generator:{numbers:void 0,special:void 0,active:!1},hasEncryption:r.a.hasEncryption,password:t}},mounted(){this.loadSimpleMde(),document.getElementById("password-username").focus(),setTimeout(()=>{document.getElementById("password-password").removeAttribute("readonly")},250)},methods:{closeWindow(){this.$destroy();let e=document.getElementById("app-popup"),t=document.createElement("div");e.replaceChild(t,e.childNodes[0])},togglePasswordVisibility(){this.showPassword=!this.showPassword},generateRandomPassword(){if(this.showLoader)return;this.showLoader=!0;let e=void 0,t=void 0;this.generator.active&&(e=this.generator.numbers,t=this.generator.special),r.a.generatePassword(void 0,e,t).then(e=>{this.password.password=e.password,!1===this.generator.active&&(this.generator={numbers:e.numbers,special:e.special,active:!0}),this.showPassword=!0,this.showLoader=!1}).catch(()=>{this.showLoader=!1})},updateCustomFields(e){this.password.customFields=c.a.arrayValues(e)},submitAction(){let e=c.a.cloneObject(this.password);if(e=r.a.flattenPassword(e),e=r.a.validatePassword(e),this._success)try{this._success(e),this.closeWindow()}catch(e){console.error(e)}},async loadSimpleMde(){try{let e=await Promise.all([s.e(0),s.e(19),s.e(16)]).then(s.t.bind(null,418,7));this.simplemde=new e.default({element:document.getElementById("password-notes"),hideIcons:["fullscreen","side-by-side","image"],autoDownloadFontAwesome:!1,spellChecker:!1,placeholder:m.a.translate("Take some notes"),forceSync:!0,initialValue:this.password.notes,status:[{defaultValue:e=>{e.innerHTML=this.password.notes.length+"/4096"},onUpdate:e=>{e.innerHTML=this.password.notes.length+"/4096"}}]}),this.simplemde.codemirror.on("change",()=>{let e=this.simplemde.value();e.length>4096&&(e=e.substring(0,4096),this.simplemde.value(e)),this.password.notes=e})}catch(e){console.error(e),u.a.alert(["Unable to load {module}",{module:"SimpleMde"}],"Network error")}}},watch:{password(e){"string"==typeof e.customFields&&(e.customFields=JSON.parse(e.customFields)),null===e.customFields&&(e.customFields=[]),this.simplemde&&this.simplemde.value(e.notes)},"generator.numbers"(e,t){void 0!==t&&this.generateRandomPassword()},"generator.special"(e,t){void 0!==t&&this.generateRandomPassword()}}},C=(s(373),Object(n.a)(x,a,[],!1,null,null,null));C.options.__file="src/vue/Dialog/CreatePassword.vue";t.default=C.exports},313:function(e,t,s){var a=s(368);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,s(12).default)("4b007979",a,!1,{})},314:function(e,t,s){var a=s(370);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,s(12).default)("2bfa2dab",a,!1,{})},315:function(e,t,s){var a=s(372);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,s(12).default)("7f66f2ad",a,!1,{})},316:function(e,t,s){var a=s(374);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,s(12).default)("3c03d58d",a,!1,{})},367:function(e,t,s){"use strict";var a=s(313);s.n(a).a},368:function(e,t,s){},369:function(e,t,s){"use strict";var a=s(314);s.n(a).a},370:function(e,t,s){},371:function(e,t,s){"use strict";var a=s(315);s.n(a).a},372:function(e,t,s){},373:function(e,t,s){"use strict";var a=s(316);s.n(a).a},374:function(e,t,s){}}]);