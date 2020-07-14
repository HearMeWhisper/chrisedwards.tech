!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=289)}({103:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(6);class a{getAll(){return this._createRequest("settings")}get(e){return this._createRequest("settings/"+e)}set(e,t){return this._createRequest("settings/"+e,{value:t},"PUT")}reset(e){return this._createRequest("settings/"+e,null,"DELETE")}listCaches(){return this._createRequest("caches")}clearCache(e){return this._createRequest("caches/"+e,null,"DELETE")}async _createRequest(e,t=null,r="GET"){let s={method:r,credentials:"include"};s.headers=new Headers,s.headers.append("Accept","application/json, text/plain, */*"),s.headers.append("requesttoken",OC.requestToken),t&&("GET"===r&&(s.method="POST"),s.headers.append("Content-Type","application/json"),s.body=JSON.stringify(t));try{let t=n.a.generateUrl("/apps/passwords/admin/"+e),r=await fetch(new Request(t,s));return await a._processResponse(r)}catch(e){throw console.error("Request failed",e),e}}static async _processResponse(e){if(!e.ok)throw console.error(e),new Error("Api request failed");let t=e.headers.get("content-type");if(t&&-1!==t.indexOf("application/json"))return await e.json();throw console.error("Invalid response format",e),new Error("Invalid response format")}}},12:function(e,t,r){"use strict";function n(e,t){for(var r=[],n={},a=0;a<t.length;a++){var s=t[a],i=s[0],o={id:e+":"+a,css:s[1],media:s[2],sourceMap:s[3]};n[i]?n[i].parts.push(o):r.push(n[i]={id:i,parts:[o]})}return r}r.r(t),r.d(t,"default",(function(){return f}));var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},i=a&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,c=!1,u=function(){},d=null,p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,r,a){c=r,d=a||{};var i=n(e,t);return h(i),function(t){for(var r=[],a=0;a<i.length;a++){var o=i[a];(l=s[o.id]).refs--,r.push(l)}t?h(i=n(e,t)):i=[];for(a=0;a<r.length;a++){var l;if(0===(l=r[a]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete s[l.id]}}}}function h(e){for(var t=0;t<e.length;t++){var r=e[t],n=s[r.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](r.parts[a]);for(;a<r.parts.length;a++)n.parts.push(v(r.parts[a]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var i=[];for(a=0;a<r.parts.length;a++)i.push(v(r.parts[a]));s[r.id]={id:r.id,refs:1,parts:i}}}}function g(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function v(e){var t,r,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(c)return u;n.parentNode.removeChild(n)}if(p){var a=l++;n=o||(o=g()),t=w.bind(null,n,a,!1),r=w.bind(null,n,a,!0)}else n=g(),t=b.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}var m,y=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function w(e,t,r,n){var a=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,a);else{var s=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function b(e,t){var r=t.css,n=t.media,a=t.sourceMap;if(n&&e.setAttribute("media",n),d.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),a&&(r+="\n/*# sourceURL="+a.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},289:function(e,t,r){"use strict";r.r(t);r(290);var n=r(103);class a{constructor(){this._timer={success:null,error:null},this.api=new n.a}initialize(){$("[data-setting]").on("change",e=>{let t=$(e.target),r=t.data("setting"),n=t.val();"checkbox"===t.attr("type")&&(n=t[0].checked?"true":"false"),this.api.set(r,n).then(e=>{this._showMessage("saved",`[data-setting="${r}"]`)}).catch(e=>{this._showMessage("error",`[data-setting="${r}"]`),e.message&&OC.Notification.show(a._translate(e.message))})}),$("[data-clear-cache]").click(e=>{let t=$(e.target),r=t.data("clear-cache"),n=a._translate(r.capitalize()+" Cache (0 files, 0 B)");t.parent().find("label").text(n),this.api.clearCache(r).then(e=>{this._showMessage("cleared",".area.cache")}).catch(e=>{this._showMessage("error",".area.cache"),e.message&&OC.Notification.show(a._translate(e.message))})}),$("#passwords-favicon").on("change",()=>{a._updateApiField("favicon")}),$("#passwords-preview").on("change",()=>{a._updateApiField("preview")}),a._updateApiField("favicon"),a._updateApiField("preview")}_sendRequest(e,t,r,n="saved"){$.post(e,t).success(e=>{"ok"===e.status?this._showMessage(n,r):(this._showMessage("error",r),OC.Notification.show(a._translate(e.message)))}).fail(()=>{this._showMessage("error",r)})}_showMessage(e,t){let r=$("section.passwords").find(t).parents("form").eq(0).find("h3 .response."+e);r.removeClass("active").addClass("active"),clearTimeout(this._timer[e]),this._timer[e]=setTimeout(()=>{r.removeClass("active"),"error"===e&&location.reload(!0)},1e3)}static _translate(e){return OC.L10N.translate("passwords",e)}static _updateApiField(e){let t=$("#passwords-"+e),r=t.val(),n=t.find(`[value=${r}]`).data("api"),a=$(`#passwords-${e}-api`);null===n?a.parent().hide():(a.parent().show(),a.data("setting",n.key),a.attr("data-setting",n.key),a.val(n.value))}}$(window).load(()=>{(new a).initialize()})},290:function(e,t,r){var n=r(291);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(12).default)("316b9a0e",n,!1,{})},291:function(e,t,r){},6:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));class n{static copyToClipboard(e){let t=document.createElement("textarea"),r=document.createRange(),n=window.getSelection();t.value=e,t.readOnly=!0,document.body.appendChild(t),r.selectNodeContents(t),n.removeAllRanges(),n.addRange(r),t.select(),t.setSelectionRange(0,999999);let a=document.execCommand("copy");return document.body.removeChild(t),a}static createDownload(e,t=null,r="text/plain"){null===t&&(t=(new Date).toISOString()+".txt");let n=e instanceof Blob?e:new Blob([e],{type:r}),a=document.createElement("a"),s=window.URL.createObjectURL(n);a.setAttribute("href",s),a.setAttribute("download",t),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)}static openLink(e,t="_blank"){let r=document.createElement("a");r.setAttribute("href",e),r.setAttribute("target",t),"_blank"!==t&&r.host===location.host||r.setAttribute("rel","noreferrer noopener"),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)}static scrollTo(e=0,t=0,r="smooth"){-1===navigator.userAgent.indexOf("MSIE")&&-1===navigator.userAgent.indexOf("Edge")&&-1===navigator.userAgent.indexOf("Safari")?window.scrollTo({left:t,top:e,behavior:r}):window.scrollTo(t,e)}static getTimestamp(){return Math.floor((new Date).getTime()/1e3)}static sortApiObjectArray(e,t="uuid",r=!0,n=!0,a){let s=[],i={};void 0===a&&(a=(e,n)=>{let a=e[t],s=n[t];return a===s?0:"string"==typeof a?r?a.localeCompare(s,void 0,{numeric:!0,sensitivity:"base"}):s.localeCompare(a,void 0,{numeric:!0,sensitivity:"base"}):r?a<s?-1:1:a>s?-1:1});for(let t in e)e.hasOwnProperty(t)&&s.push(e[t]);if(s.sort(a),n)return s;for(let e=0;e<s.length;e++){let t=s[e];i[t.uuid]=t}return i}static objectToArray(e){let t=[];for(let r in e)e.hasOwnProperty(r)&&t.push(e[r]);return t}static replaceOrAppendApiObject(e,t){for(let r=0;r<e.length;r++){if(e[r].id===t.id)return e[r]=t,e}return e.push(t),e}static removeApiObjectFromArray(e,t){for(let r=0;r<e.length;r++){if(e[r].id===t.id)return e.remove(r)}return e}static searchApiObjectInArray(e,t){for(let r=0;r<e.length;r++){if(e[r].id===t.id)return r}return-1}static mergeObject(e,t){let r=n.cloneObject(e);for(let e in t)t.hasOwnProperty(e)&&(r[e]=t[e]);return r}static cloneObject(e){let t=new e.constructor;for(let r in e){if(!e.hasOwnProperty(r))continue;let a=e[r];Array.isArray(a)?t[r]=a.slice(0):a instanceof Date?t[r]=new Date(a.getTime()):t[r]=null===a?null:"object"==typeof a?n.cloneObject(a):a}return t}static arrayValues(e){let t=[],r=e.values();for(let e of r)void 0!==e&&t.push(e);return t}static generateUrl(e="",t=[],r={}){let n=OC.generateUrl(e,t,r);return-1===n.indexOf(location.origin)?new URL(location.origin+n).href:n}}}});