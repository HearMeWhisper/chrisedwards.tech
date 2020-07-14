(window.pwWpJsonP=window.pwWpJsonP||[]).push([[9],{423:function(e,s,t){"use strict";t.r(s),t.d(s,"ImportManager",(function(){return c}));var r=t(0),a=t(1),o=t(5),l=t(44);class i{static async processGenericCsv(e,s){let t="custom"===s.profile?s:this._getProfile(s.profile),{db:r,errors:a}=this._processCsv(e,t);return{data:await this._convertCsv(r,t),errors:a}}static async processPassmanCsv(e){let s=[];for(let t=1;t<e.length;t++){let r=e[t],a=!0;e[t][8].length>2&&(this._logConversionError('"{label}" has files attached which can not be imported.',{label:r[0]},s),a=!0),e[t][5]=r[5].substr(1,r[5].length-2),e[t][7]=this._processPassmanCustomFields(r,s,a)}let t=await this.processGenericCsv(e,{profile:"passman"});return t.errors=s.concat(t.errors),t}static _processPassmanCustomFields(e,s,t=!1){let r=JSON.parse(e[7]),o=[];""!==e[3]&&o.push(a.a.translate("Email")+",email:"+e[3]);for(let a=0;a<r.length;a++){let l=r[a],i="password"===l.field_type?"secret":"text";"file"!==l.field_type?o.push(`${l.label},${i}:${l.value}`):(t||this._logConversionError('"{label}" has files attached which can not be imported.',{label:e[0]},s),t=!0)}return o.join("\n")}static _processCsv(e,s){let t=s.mapping,r={tagIds:"tags",folderId:"folder",parentId:"parent"},a=[],o=[],l=Number.parseInt(0+s.firstLine);if(!Array.isArray(e)||e.length<l+1)throw new Error("Import file is empty");if(!t||e[l].length<t.length)throw new Error("CSV file can not be mapped");for(let i=l;i<e.length;i++){let l=e[i],n={};for(let e=0;e<t.length;e++){let s=t[e];if(s&&0!==s.length){let t=l[e];if(void 0===t)continue;n[r.hasOwnProperty(s)?r[s]:s]=this._processCsvValue(t,s,a)}}s.repair&&this._repairObject(n),o.push(n)}return{db:o,errors:a}}static _processCsvValue(e,s,t){let r=a.a.translate("true"),o=a.a.translate("false");return-1!==[r,"yes","true","1"].indexOf(e)||-1===[o,"no","false","0"].indexOf(e)&&("edited"===s?new Date(e):"tags"!==s&&"tagLabels"!==s||0===e.length||Array.isArray(e)?"customFields"===s?this._processCustomFields(e,t):e:e.split(","))}static _processCustomFields(e,s){let t=e.split("\n"),r=[];for(let e=0;e<t.length;e++){if(""===t[e].trim())continue;let[a,o]=t[e].split(":",2),l="text";o=o.trim(),a=a.trim(),-1!==a.indexOf(",")&&([a,l]=a.split(",",2),l=l.trim(),"password"===l&&(l="secret"),("url"!==l||o.match(/^\w+:\/\/.+$/)&&"javascript:"!==o.substr(0,11))&&-1!==["text","email","url","file","secret","data"].indexOf(l)&&("email"!==l||o.match(/^[\w._-]+@.+$/))||(this._logConversionError('The value of "{field}" did not have the type {type} and was changed to text.',{field:a,type:l,value:o},s),l="text")),a.length<1&&(a=l.capitalize()),a.length>48&&(this._logConversionError('The label of "{field}" exceeds 48 characters and was cut.',{field:a},s),a=a.substr(0,48)),o.length>320&&(this._logConversionError('The value of "{field}" exceeds 320 characters and was cut.',{field:a},s),o=o.substr(0,320)),o.match(/^[\w._-]+@.+$/)?l="email":o.match(/^\w+:\/\/.+$/)&&"javascript:"!==o.substr(0,11)&&(l="url"),r.push({label:a,type:l,value:o.trim()})}return r}static async _convertCsv(e,s){let[t,a,o]=await this._generateTags(e,s),[l,i,n]=await this._generateFolders(e,s),p={tags:t,folders:l,passwords:[]};if("passwords"===s.db){let s=this._createLabelMapping(await r.a.listPasswords());this._setIds(e,p.passwords,s)}else"folders"===s.db?this._setIds(e,p.folders,i,n):"tags"===s.db&&this._setIds(e,p.tags,a,o);return p}static _setIds(e,s=[],t={},r={}){for(let a=0;a<e.length;a++){let o=e[a],l=o.label;t.hasOwnProperty(l)&&(o.id=t[l]),r.hasOwnProperty(l)?s[r[l]]=o:s.push(o)}}static async _generateTags(e,s){if(-1===s.mapping.indexOf("tagLabels"))return[[],{},{}];let t=[],a={},o=this._createLabelMapping(await r.a.listTags());for(let s=0;s<e.length;s++){let r=e[s];if(r.hasOwnProperty("tagLabels")){r.hasOwnProperty("tags")||(r.tags=[]);for(let e=0;e<r.tagLabels.length;e++){let s=r.tagLabels[e];o.hasOwnProperty(s)?r.tags[e]=o[s]:(a[s]=t.length,t.push({id:s,label:s,color:l.getColor()}),r.tags[e]=s,o[s]=s)}}}return[t,o,a]}static async _generateFolders(e,s){if(-1===s.mapping.indexOf("folderLabel")&&-1===s.mapping.indexOf("parentLabel"))return[[],{},{}];let t=[],a={},o={folder:"folderLabel",parent:"parentLabel"},l=this._createLabelMapping(await r.a.listFolders());l[""]="00000000-0000-0000-0000-000000000000";for(let s=0;s<e.length;s++){let r=e[s];if(!(r.hasOwnProperty("folder")&&l.hasOwnProperty(r.folder)&&r.hasOwnProperty("parent")&&l.hasOwnProperty(r.parent)||!r.hasOwnProperty("folderLabel")&&!r.hasOwnProperty("parentLabel")))for(let e in o)if(o.hasOwnProperty(e)&&r.hasOwnProperty(o[e])){let s=r[o[e]];l.hasOwnProperty(s)?r[e]=l[s]:(a[s]=t.length,t.push({id:s,label:s}),r[e]=s,l[s]=s)}}return[t,l,a]}static _createLabelMapping(e){let s={};for(let t in e){if(!e.hasOwnProperty(t))continue;let r=e[t].id;s[e[t].label]=r,s[r]=r}return s}static _repairObject(e){let s=new RegExp("^([a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\\.){1,}[a-zA-Z]{2,}$");e.url&&0!==e.url.length&&-1===e.url.indexOf("://")?e.url="https://"+e.url:e.url&&0!==e.url.length||e.label&&s.test(e.label)&&(e.url=r.a.parseUrl(e.label,"href")),(!e.hasOwnProperty("password")||"string"!=typeof e.password||e.password.length<1)&&(e.password="password-missing-during-import")}static _getProfile(e){return{passwords:{firstLine:1,db:"passwords",mapping:["label","username","password","notes","url","customFields","folderLabel","tagLabels","favorite","edited","id","revision","folderId"]},folders:{firstLine:1,db:"folders",mapping:["label","parentLabel","favorite","edited","id","revision","parentId"]},tags:{firstLine:1,db:"tags",mapping:["label","color","favorite","edited","id","revision"]},legacy:{firstLine:1,db:"passwords",mapping:["label","username","password","url","notes"],repair:!0},keepass:{firstLine:1,db:"passwords",mapping:["label","username","password","url","notes"]},bitwardenCsv:{firstLine:1,db:"passwords",mapping:["tagLabels","favorite","folderLabel","label","notes","customFields","url","username","password"],repair:!0},lastpass:{firstLine:1,db:"passwords",mapping:["url","username","password","notes","label","folderLabel","favorite"]},passman:{firstLine:1,db:"passwords",mapping:["label","username","password","","notes","tagLabels","url","customFields"],repair:!0},dashlane:{firstLine:1,db:"passwords",mapping:["label","url","username","password","notes"],repair:!0},roboform:{firstLine:1,db:"passwords",mapping:["label","url","","username","password","notes"]},safeincloud:{firstLine:1,db:"passwords",mapping:["label","username","password","url","notes"]},chrome:{firstLine:1,db:"passwords",mapping:["label","url","username","password"]}}[e]}static _logConversionError(e,s,t){let r=a.a.translate(e,s);t.push(r),console.error(r,s)}}class n{static createCustomField(e,s,t,r="",a=text){"totp"===a&&(r="otp"),-1!==["password","totp"].indexOf(a)&&(a="secret"),-1===["text","secret","email","url","file","data"].indexOf(a)&&(a="text"),r.length<1&&(r=a.capitalize()),r.length>48&&(this._logConversionError('The label of "{field}" in "{label}" exceeds 48 characters and was cut.',{label:e.label,field:r},s),r=r.substr(0,48)),t.length>320&&(this._logConversionError('The value of "{field}" in "{label}" exceeds 320 characters and was cut.',{label:e.label,field:r},s),t=t.substr(0,320)),e.customFields.push({label:r,type:a,value:t})}static _logConversionError(e,s,t){let r=a.a.translate(e,s);t.push(r),console.error(r,s)}}class p{static async getTagLabelMapping(){let e=await r.a.listTags(),s={};for(let t in e)e.hasOwnProperty(t)&&(s[e[t].label.toLowerCase()]=e[t].id);return s}static async getFolderLabelMapping(){let e=await r.a.findFolders({parent:"00000000-0000-0000-0000-000000000000"}),s={};for(let t in e)e.hasOwnProperty(t)&&(s[e[t].label.toLowerCase()]=e[t].id);return s}static async getPasswordLabelMapping(){let e=await r.a.listPasswords(),s={};for(let t in e)e.hasOwnProperty(t)&&(s[e[t].label.toLowerCase()]={id:e[t].id,folder:e[t].folder});return s}static checkPasswordDuplicate(e,s){let t=s.label.toLowerCase();if(e.hasOwnProperty(t)){let r=e[t];r.folder===s.folder&&(s.id=r.id)}}}var d=t(47);class c{constructor(){this.defaultFolder="00000000-0000-0000-0000-000000000000",this.progress=()=>{},this.processed=0,this.total=0,this.errors=[]}async importDatabase(e,s="json",t={},r=(()=>{})){t.mode=Number.parseInt(t.mode),t.cseType=1===o.a.get("user.encryption.cse")?"CSEv1r1":"none",this.errors=[],this.total=1,this.processed=0,this.progress=r,this._countProgress("Parsing input file");let a=await c._convertInputData(s,e,t);this.errors=a.errors,e=a.data,this.total=0;for(let s in e)e.hasOwnProperty(s)&&Array.isArray(e[s])&&(this.total+=e[s].length);let l={},i={};return l=await this._runTagImport(e,l,t),i=await this._runFolderImport(e,i,t),await this._runPasswordImport(e,l,i,t),this.errors}static async _convertInputData(e,s,t){switch(e){case"json":return await class{static async processBackupJson(e,s){let t=JSON.parse(e);if(t.encrypted&&await this._decryptJsonBackup(s,t),!t.passwords&&!t.tags&&!t.folders||t.items)throw new Error("Invalid backup file.");if(t.version<2&&this._convertCustomFields(t),t.version<3&&this._cleanCustomFields(t),t.version>3){if(t.version>99)throw new Error("This seems to be a server backup. It can only be restored using the command line.");throw new Error("Unsupported database version")}return{data:t,errors:[]}}static _convertCustomFields(e){if(e.hasOwnProperty("passwords"))for(let s=0;s<e.passwords.length;s++){let t=e.passwords[s].customFields,r=[];for(let e in t){if(!t.hasOwnProperty(e))continue;let s="_"===e.substr(0,1)?"data":t[e].type;r.push({label:e,type:s,value:t[e].value})}e.passwords[s].customFields=r}}static _cleanCustomFields(e){if(e.hasOwnProperty("passwords"))for(let s=0;s<e.passwords.length;s++){let t=e.passwords[s].customFields,r=[];for(let e=0;e<t.length;e++)r.push({label:t[e].label,type:t[e].type,value:t[e].value});e.passwords[s].customFields=r}}static async _decryptJsonBackup(e,s){if(!e.password)throw new Error("Password required");let t=new d.a;try{t.decryptWithPassword(s.challenge,e.password+"challenge")}catch(e){throw console.error(e),new Error("Password invalid")}for(let r in s)if(s.hasOwnProperty(r)&&-1===["version","encrypted","challenge"].indexOf(r))try{s[r]=JSON.parse(t.decryptWithPassword(s[r],e.password+r))}catch(e){throw console.error(e),new Error("Failed to decrypt "+r)}}}.processBackupJson(s,t);case"pmanJson":return await class{static async processJson(e){let s=JSON.parse(e),t=await this._processTags(s),{passwords:r,errors:a}=this._processPasswords(s);return{data:{tags:t,passwords:r},errors:a}}static async _processTags(e){let s=[],t=await p.getTagLabelMapping();for(let r=0;r<e.length;r++){let a=e[r];if(a.tags)for(let e=0;e<a.tags.length;e++){let r=a.tags[e].text,o=r.toLowerCase();t.hasOwnProperty(o)?a.tags[e]=t[o]:(t[o]=o,a.tags[e]=o,s.push({id:o,label:r,color:l.getColor()}))}}return s}static _processPasswords(e){let s=[],t=[];for(let r=0;r<e.length;r++){let a=e[r],o={id:a.guid,label:a.label,username:a.username,password:a.password,url:a.url,notes:a.description,edited:a.changed,tags:a.tags,customFields:[]};this._processEmail(a,o),this._processCustomFields(a,o,t),this._processOtpValue(a,o),this._checkPassword(o),s.push(o)}return{passwords:s,errors:t}}static _checkPassword(e){if(!("string"==typeof e.password&&e.password.length>0)){for(let s=0;s<e.customFields.length;s++)if("secret"===e.customFields[s].type)return void(e.password=e.customFields[s].value);e.password="password-missing-during-import"}}static _processEmail(e,s){if(e.email)if(s.username&&0!==s.username.length){let t=a.a.translate("Email"),r=e.email,o=r.match(/^[\w._-]+@.+$/)?"email":"text";s.customFields.push({label:t,type:o,value:r})}else s.username=e.email}static _processCustomFields(e,s,t){let r=!1;if(e.hasOwnProperty("files")&&0!==e.custom_fields.length&&(r||this._logConversionError('"{label}" has files attached which can not be imported.',e,"files",t),r=!0),e.hasOwnProperty("custom_fields")&&0!==e.custom_fields.length)for(let a=0;a<e.custom_fields.length;a++){let o=e.custom_fields[a];"file"===o.field_type?(r||this._logConversionError('"{label}" has files attached which can not be imported.',e,o,t),r=!0):-1!==["text","password"].indexOf(o.field_type)?this._processCustomField(o,e,t,s):this._logConversionError('The type of "{field}" in "{label}" is unknown and can not be imported.',e,o,t)}}static _processCustomField(e,s,t,r){let a=e.label,o=e.field_type,l=e.value;l.length<1||(a.length<1&&(a=o.capitalize()),a.length>48&&(this._logConversionError('The label of "{field}" in "{label}" exceeds 48 characters and was cut.',s,e,t),a=a.substr(0,48)),l.length>320&&(this._logConversionError('The value of "{field}" in "{label}" exceeds 320 characters and was cut.',s,e,t),l=l.substr(0,320)),"password"===o?o="secret":l.match(/^[\w._-]+@.+$/)?o="email":l.match(/^\w+:\/\/.+$/)&&"javascript:"!==l.substr(0,11)&&(o="url"),r.customFields.push({label:a,type:o,value:l}))}static _processOtpValue(e,s){e.hasOwnProperty("otp")&&e.otp.hasOwnProperty("secret")&&s.customFields.push({label:"otp",type:"secret",value:e.otp.secret})}static _logConversionError(e,s,t,r){let o=a.a.translate(e,{label:s.label,field:t.label});r.push(o),console.error(o,s,t)}}.processJson(s);case"pmanCsv":return await i.processPassmanCsv(s);case"csv":return await i.processGenericCsv(s,t);case"enpass":return await class{static async processJson(e,s){let t=JSON.parse(e);if(!t.items)throw new Error("File does not implement Enpass 6 format");Array.isArray(t.folders)||(t.folders=[]);let{tags:r,tagMap:a}=await this._processTags(t.folders),o=await this._processFolders(t.items),{passwords:l,errors:i}=await this._processPasswords(t.items,a,s);return{data:{tags:r,folders:o,passwords:l},errors:i}}static async _processTags(e){let s=[],t={},r=await p.getTagLabelMapping();for(let a=0;a<e.length;a++){let o=e[a],i=o.title.toLowerCase();""!==i&&(r.hasOwnProperty(i)?t[o.uuid]=r[i]:(r[i]=o.uuid,t[o.uuid]=o.uuid,s.push({id:o.uuid,label:o.title,color:l.getColor()})))}return{tags:s,tagMap:t}}static async _processFolders(e){let s=[],t=this._getCategoryLabels(),r=await p.getFolderLabelMapping();for(let a=0;a<e.length;a++){let o=e[a].category,l=o.capitalize();t.hasOwnProperty(o)&&(l=t[o]);let i=l.toLowerCase();r.hasOwnProperty(i)||(r[i]=i,s.push({id:i,label:l})),e[a].category=r[i]}return s}static async _processPasswords(e,s,t){let r=[],a=[],o=await p.getPasswordLabelMapping();for(let l=0;l<e.length;l++){let i=this._processPassword(e[l],o,s,t.skipEmpty,a);r.push(i)}return{passwords:r,errors:a}}static _processPassword(e,s,t,r,a){let o=e.title;!e.hasOwnProperty("subtitle")||0===e.subtitle.length||e.subtitle===o||e.hasOwnProperty("template_type")&&"login.default"===e.template_type||(o=`${o} – ${e.subtitle}`);let l={customFields:[],password:"password-missing-during-import",favorite:1===e.favorite,folder:e.category,notes:e.note,label:o,tags:[]};return p.checkPasswordDuplicate(s,l),this._processPasswordTags(e,l,t),e.hasOwnProperty("fields")&&this._processPasswordFields(e,l,r,a),e.hasOwnProperty("attachments")&&this._logConversionError('"{label}" has files attached which can not be imported.',l,a),l}static _processPasswordFields(e,s,t,r){let a={password:!1,username:!1,url:!1};for(let o=0;o<e.fields.length;o++){let l=e.fields[o];"section"!==l.type&&(t&&""===l.value||""!==l.value&&this._processIfCommonField(a,l,s)||this._processCustomField(l,s,r))}0===s.customFields.length&&delete s.customFields}static _processCustomField(e,s,t){let r=e.sensitive?"secret":e.type;n.createCustomField(s,t,e.value,e.label,r)}static _processIfCommonField(e,s,t){return e.password||"password"!==s.type?e.username||"username"!==s.type?!e.url&&"url"===s.type&&(e.url=!0,t.url=s.value,!0):(e.username=!0,t.username=s.value,!0):(e.password=!0,t.password=s.value,t.edited=s.value_updated_at,!0)}static _processPasswordTags(e,s,t){if(e.hasOwnProperty("folders"))for(let r=0;r<e.folders.length;r++){let a=e.folders[r].toLowerCase();t.hasOwnProperty(a)&&s.tags.push(t[a])}}static _getCategoryLabels(){return{login:a.a.translate("Logins"),creditcard:a.a.translate("Credit Cards"),identity:a.a.translate("Identities"),note:a.a.translate("Notes"),password:a.a.translate("Passwords"),finance:a.a.translate("Finances"),license:a.a.translate("Licenses"),travel:a.a.translate("Travel"),computer:a.a.translate("Computers"),misc:a.a.translate("Miscellaneous")}}static _logConversionError(e,s,t){let r=a.a.translate(e,s);t.push(r),console.error(r,s)}}.processJson(s,t);case"bitwarden":return await class{static async processJson(e,s){let t=JSON.parse(e),{folders:r,folderMap:a}=await this._processFolders(t.items),{tags:o,tagMap:l}=await this._processTags(t.folders),{passwords:i,errors:n}=await this._processPasswords(t.items,l,a);return{data:{tags:o,folders:r,passwords:i},errors:n}}static async _processTags(e){let s=[],t={},r=await p.getTagLabelMapping();for(let a of e){let e=a.name.toLowerCase(),o=a.id;r.hasOwnProperty(e)?t[a.id]=r[e]:(t[a.id]=o,s.push({id:o,label:a.name,color:l.getColor()}))}return{tags:s,tagMap:t}}static async _processFolders(e){let s=[],t={},r=await p.getFolderLabelMapping(),o=[null,!1,!1,!1,!1];for(let s of e)s.hasOwnProperty("type")&&(o[s.type]=!0);let l=[null,"Logins","Notes","Credit Cards","Identities"];for(let e=0;e<l.length;e++){if(!o[e])continue;let i=a.a.translate(l[e]),n=i.toLowerCase();r.hasOwnProperty(n)?t[e]=r[n]:(t[e]=e,s.push({id:e,label:i}))}return{folders:s,folderMap:t}}static async _processPasswords(e,s,t){let r=[],a=await p.getPasswordLabelMapping();for(let o of e){let e="00000000-0000-0000-0000-000000000000",l=[];t.hasOwnProperty(o.type)&&(e=t[o.type]),s.hasOwnProperty(o.folderId)&&(l=[s[o.folderId]]);let i=null,n="password-missing-during-import";o.hasOwnProperty("login")&&(i=o.login.username,n=o.login.password);let d={label:o.name,favorite:o.favorite,notes:o.notes,username:i,password:n,folder:e,tags:l};p.checkPasswordDuplicate(a,d),this._processPasswordCustomFields(d,o),r.push(d)}return{passwords:r,errors:[]}}static _processPasswordCustomFields(e,s,t){e.customFields=[],s.hasOwnProperty("login")&&this._processLoginFields(s,e,t),s.hasOwnProperty("card")&&this._processCreditCartFields(s,e,t),s.hasOwnProperty("identity")&&this._processIdentityFields(s,e,t),s.hasOwnProperty("fields")&&this._processCustomFields(s,e,t),0===e.customFields.length&&delete e.customFields}static _processLoginFields(e,s,t){if(e.login.hasOwnProperty("uris")){let r=a.a.translate("Url"),o=e.login.uris;for(let e=0;e<o.length;e++)o[e].hasOwnProperty("uri")&&(0!==e?n.createCustomField(s,t,o[e].uri,r,"url"):s.url=o[e].uri)}e.login.hasOwnProperty("totp")&&null!==e.login.totp&&n.createCustomField(s,t,e.login.totp,"otp","secret")}static _processCreditCartFields(e,s,t){let r=e.card;s.username=r.cardholderName,n.createCustomField(s,t,r.brand,a.a.translate("Brand"),"text"),n.createCustomField(s,t,r.number,a.a.translate("Number"),"text"),n.createCustomField(s,t,r.code,a.a.translate("Code"),"secret"),n.createCustomField(s,t,`${r.expMonth}/${r.expYear}`,a.a.translate("Expires"),"text")}static _processIdentityFields(e,s,t){let r=e.identity;s.username=r.username;for(let e in r){if(!r.hasOwnProperty(e)||"username"===e)continue;let a="email"===e?"email":"text";n.createCustomField(s,t,r[e],e.capitalize(),a)}}static _processCustomFields(e,s,t){for(let r of e.fields){let e="text",o=r.value;1===r.type&&(e="secret"),2===r.type&&(o=a.a.translate("true"===o?"yes":"no")),n.createCustomField(s,t,o,r.name,e)}}}.processJson(s,t);default:throw new Error("Invalid import type: "+e)}}async _runTagImport(e,s,t){try{e.tags&&(s=await this._importTags(e.tags,t.mode,t.cseType))}catch(e){throw console.error(e),new Error("Unable to create tags")}return s}async _runFolderImport(e,s,t){try{e.folders&&(s=await this._importFolders(e.folders,t.mode,t.cseType))}catch(e){throw console.error(e),new Error("Unable to create folders")}return s}async _runPasswordImport(e,s,t,r){if(e.passwords){e.hasOwnProperty("tags")||(s=await this._getTagMapping()),e.hasOwnProperty("folders")||(t=await this._getFolderMapping());try{await this._importPasswords(e.passwords,r.mode,r.skipShared,r.cseType,s,t)}catch(e){throw console.error(e),new Error("Unable to create passwords")}}}async _getTagMapping(){this._countProgress("Analyzing tags");let e=await r.a.listTags(),s={};for(let t in e)e.hasOwnProperty(t)&&(s[t]=t);return s}async _getFolderMapping(){this._countProgress("Analyzing folders");let e=await r.a.listFolders(),s={};s[this.defaultFolder]=this.defaultFolder;for(let t in e)e.hasOwnProperty(t)&&(s[t]=t);return s}async _importTags(e,s=0,t="none"){this._countProgress("Reading tags");let a=await r.a.listTags(),o=[],l={};for(let e in a)a.hasOwnProperty(e)&&(l[e]=e);this._countProgress("Importing tags");for(let r=0;r<e.length;r++)o.push(this._importTag(e[r],s,t,a,l)),o.length>15&&(await Promise.all(o),o=[]);return 0!==o.length&&await Promise.all(o),l}async _importTag(e,s,t,o,l){try{if(4!==s&&e.hasOwnProperty("id")&&o.hasOwnProperty(e.id)){let a=this._processGenericObject(e,o[e.id],s,t,l);!1!==a&&await r.a.updateTag(a)}else{let s=await r.a.createTag(e);l[e.id]=s.id}}catch(s){console.error(s,e),this.errors.push(a.a.translate('"{error}" in tag "{label}".',{label:e.label,error:s.message}))}this._countProgress()}async _importFolders(e,s=0,t="none"){this._countProgress("Reading folders");let a=await r.a.listFolders(),o=[],l={};l[this.defaultFolder]=this.defaultFolder;for(let e in a)a.hasOwnProperty(e)&&(l[e]=e);let i=c._sortFoldersForImport(e,l);this._countProgress("Importing folders");for(let e=0;e<i.length;e++){let r=i[e];r.id!==this.defaultFolder?((!l.hasOwnProperty(r.parent)||o.length>15)&&(await Promise.all(o),o=[]),o.push(this._importFolder(r,s,t,a,l))):this._countProgress()}return 0!==o.length&&await Promise.all(o),l}async _importFolder(e,s,t,o,l){l.hasOwnProperty(e.parent)&&e.parent!==e.id?e.parent=l[e.parent]:e.parent=this.defaultFolder;try{if(4!==s&&e.hasOwnProperty("id")&&o.hasOwnProperty(e.id)){let a=this._processGenericObject(e,o[e.id],s,t,l);!1!==a&&await r.a.updateFolder(a)}else{let s=await r.a.createFolder(e);l[e.id]=s.id}}catch(s){console.error(s,e),this.errors.push(a.a.translate('"{error}" in folder "{label}".',{label:e.label,error:s.message}))}this._countProgress()}static _sortFoldersForImport(e,s){let t=e.length,r=[],a=[];for(;0!==e.length;){for(let t=0;t<e.length;t++){let o=e[t];!s.hasOwnProperty(o.parent)&&-1===a.indexOf(o.parent)&&o.hasOwnProperty("parent")&&null!==o.parent||(a.push(o.id),r.push(o),e.splice(t,1),t--)}if(t===e.length){r.concat(e);break}t=e.length}return r}async _importPasswords(e,s=0,t=!0,a="none",o={},l={}){this._countProgress("Reading passwords");let i=await r.a.listPasswords(),n=[],p={};for(let e in i)i.hasOwnProperty(e)&&(p[e]=e);this._countProgress("Importing passwords");for(let r=0;r<e.length;r++)n.push(this._importPassword(s,e[r],i,t,a,p,l,o)),n.length>15&&(await Promise.all(n),n=[]);return 0!==n.length&&await Promise.all(n),p}async _importPassword(e,s,t,o,l,i,n,p){if(s.tags){let e=[];for(let t=0;t<s.tags.length;t++){let r=s.tags[t];p.hasOwnProperty(r)&&e.push(p[r])}s.tags=e}n.hasOwnProperty(s.folder)?s.folder=n[s.folder]:s.folder=this.defaultFolder;try{if(4!==e&&s.hasOwnProperty("id")&&t.hasOwnProperty(s.id)){let a=t[s.id];if(1===e||0===e&&a.revision===s.revision||o&&null!==a.share||!a.editable)return void this._countProgress();3===e?s=Object.assign(t[s.id],s):a.shared||null!==a.share?s.cseType="none":(console.log(a.shared,a.share),s.cseType=l),i[s.id]=s.id,await r.a.updatePassword(s)}else{s.cseType=l;let e=await r.a.createPassword(s);i[e.id]=e.id}}catch(e){let t=e.hasOwnProperty("message")?e.message:e.statusText;console.error(e,s),this.errors.push(a.a.translate('"{error}" in password "{label}".',{label:s.label,error:t}))}this._countProgress()}_processGenericObject(e,s,t,r,a){return 1===t||0===t&&s.revision===e.revision?(this._countProgress(),!1):(3===t?e=Object.assign(s,e):e.cseType=r,a[e.id]=e.id,e)}_countProgress(e=null){null===e?this.processed++:console.info("Passwords Import: "+e),this.progress(this.processed,this.total,e)}}}}]);