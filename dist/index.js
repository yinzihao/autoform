!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("autoform",[],n):"object"==typeof exports?exports.autoform=n():t.autoform=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=53)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(25)("wks"),o=e(15),i=e(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n){var e=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(6),o=e(18);t.exports=e(7)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(3),o=e(38),i=e(28),u=Object.defineProperty;n.f=e(7)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){t.exports=!e(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(64),o=e(22);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(0),o=e(2),i=e(16),u=e(5),c=function(t,n,e){var s,a,f,l=t&c.F,p=t&c.G,d=t&c.S,v=t&c.P,h=t&c.B,y=t&c.W,m=p?o:o[n]||(o[n]={}),g=m.prototype,b=p?r:d?r[n]:(r[n]||{}).prototype;p&&(e=n);for(s in e)(a=!l&&b&&void 0!==b[s])&&s in m||(f=a?b[s]:e[s],m[s]=p&&"function"!=typeof b[s]?e[s]:h&&a?i(f,r):y&&b[s]==f?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((m.virtual||(m.virtual={}))[s]=f,t&c.R&&g&&!g[s]&&u(g,s,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports={}},function(t,n,e){var r=e(36),o=e(26);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(17);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports=!0},function(t,n,e){var r=e(6).f,o=e(4),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){t.exports={default:e(62),__esModule:!0}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(25)("keys"),o=e(15);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(10),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(10);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){"use strict";function r(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=o(n),this.reject=o(e)}var o=e(17);t.exports.f=function(t){return new r(t)}},function(t,n,e){n.f=e(1)},function(t,n,e){var r=e(0),o=e(2),i=e(19),u=e(30),c=e(6).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){"use strict";function r(t,n){u.fields["form_"+t]=n}function o(){return u.fields}function i(t,n){u.validationMessages[t]=n}n.a=r,n.c=o,n.b=i;var u={fields:{},validationMessages:{}}},function(t,n){t.exports=function(t,n,e,r,o,i){var u,c=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(u=t,c=t.default);var a="function"==typeof c?c.options:c;n&&(a.render=n.render,a.staticRenderFns=n.staticRenderFns,a._compiled=!0),e&&(a.functional=!0),o&&(a._scopeId=o);var f;if(i?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},a._ssrRegister=f):r&&(f=r),f){var l=a.functional,p=l?a.render:a.beforeCreate;l?(a._injectStyles=f,a.render=function(t,n){return f.call(n),p(t,n)}):a.beforeCreate=p?[].concat(p,f):[f]}return{esModule:u,exports:c,options:a}}},function(t,n,e){var r=e(22);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(4),o=e(8),i=e(65)(!1),u=e(24)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),s=0,a=[];for(e in c)e!=u&&r(c,e)&&a.push(e);for(;n.length>s;)r(c,e=n[s++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(23),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){t.exports=!e(7)&&!e(12)(function(){return 7!=Object.defineProperty(e(27)("div"),"a",{get:function(){return 7}}).a})},function(t,n){},function(t,n,e){"use strict";var r=e(70)(!0);e(41)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){"use strict";var r=e(19),o=e(9),i=e(42),u=e(5),c=e(4),s=e(13),a=e(71),f=e(20),l=e(73),p=e(1)("iterator"),d=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,h,y,m,g){a(e,n,h);var b,_,x,w=function(t){if(!d&&t in E)return E[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},O=n+" Iterator",S="values"==y,j=!1,E=t.prototype,P=E[p]||E["@@iterator"]||y&&E[y],C=P||w(y),T=y?S?w("entries"):C:void 0,M="Array"==n?E.entries||P:P;if(M&&(x=l(M.call(new t)))!==Object.prototype&&x.next&&(f(x,O,!0),r||c(x,p)||u(x,p,v)),S&&P&&"values"!==P.name&&(j=!0,C=function(){return P.call(this)}),r&&!g||!d&&!j&&E[p]||u(E,p,C),s[n]=C,s[O]=v,y)if(b={values:S?C:w("values"),keys:m?C:w("keys"),entries:T},g)for(_ in b)_ in E||i(E,_,b[_]);else o(o.P+o.F*(d||j),n,b);return b}},function(t,n,e){t.exports=e(5)},function(t,n,e){var r=e(3),o=e(72),i=e(26),u=e(24)("IE_PROTO"),c=function(){},s=function(){var t,n=e(27)("iframe"),r=i.length;for(n.style.display="none",e(44).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=s(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(0).document;t.exports=r&&r.documentElement},function(t,n,e){e(74);for(var r=e(0),o=e(5),i=e(13),u=e(1)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<c.length;s++){var a=c[s],f=r[a],l=f&&f.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,n,e){var r=e(11),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=u(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n,e){var r=e(3),o=e(17),i=e(1)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||void 0==(e=r(u)[i])?n:o(e)}},function(t,n,e){var r,o,i,u=e(16),c=e(83),s=e(44),a=e(27),f=e(0),l=f.process,p=f.setImmediate,d=f.clearImmediate,v=f.MessageChannel,h=f.Dispatch,y=0,m={},g=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},b=function(t){g.call(t.data)};p&&d||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return m[++y]=function(){c("function"==typeof t?t:Function(t),n)},r(y),y},d=function(t){delete m[t]},"process"==e(11)(l)?r=function(t){l.nextTick(u(g,t,1))}:h&&h.now?r=function(t){h.now(u(g,t,1))}:v?(o=new v,i=o.port2,o.port1.onmessage=b,r=u(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",b,!1)):r="onreadystatechange"in a("script")?function(t){s.appendChild(a("script")).onreadystatechange=function(){s.removeChild(this),g.call(t)}}:function(t){setTimeout(u(g,t,1),0)}),t.exports={set:p,clear:d}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r=e(3),o=e(10),i=e(29);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(36),o=e(26).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(54),o=e(107),i=e(108),u=e(33),c=e(109),s=e(110),a={getTypes:u.c,addType:u.a,addValidationMessage:u.b,abstractComponent:i.a,install:function(t){Object(c.a)(t),Object(r.a)(t),Object(o.a)(t),t.$autoform={abstractComponent:i.a,getTypes:u.c,addType:u.a,addValidationMessage:u.b,Register:s.a,RegisterDir:s.b}}};"undefined"!=typeof window&&window.Vue&&(window.Vue.use(a),window.Vue.$autoform={abstractComponent:i.a,getTypes:u.c,addType:u.a,addValidationMessage:u.b,Register:s.a,RegisterDir:s.b}),n.default=a},function(t,n,e){"use strict";var r=e(55),o=e(91);n.a=function(t){t.component("auto-form",r.a),t.component("field",function(t){t(o.a.default?o.a.default:o.a)})}},function(t,n,e){"use strict";function r(t){e(56)}var o=e(61),i=e(90),u=e(34),c=r,s=u(o.a,i.a,!1,c,"data-v-53cc8a50",null);n.a=s.exports},function(t,n,e){var r=e(57);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(59)("e40aa266",r,!0)},function(t,n,e){n=t.exports=e(58)(void 0),n.push([t.i,".autoform-block[data-v-53cc8a50]{overflow:hidden}",""])},function(t,n){function e(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var i=r(o);return[e].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([i]).join("\n")}return[e].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var r=e(n,t);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var u=t[o];"number"==typeof u[0]&&r[u[0]]||(e&&!u[2]?u[2]=e:e&&(u[2]="("+u[2]+") and ("+e+")"),n.push(u))}},n}},function(t,n,e){function r(t){for(var n=0;n<t.length;n++){var e=t[n],r=f[e.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](e.parts[o]);for(;o<e.parts.length;o++)r.parts.push(i(e.parts[o]));r.parts.length>e.parts.length&&(r.parts.length=e.parts.length)}else{for(var u=[],o=0;o<e.parts.length;o++)u.push(i(e.parts[o]));f[e.id]={id:e.id,refs:1,parts:u}}}}function o(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function i(t){var n,e,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(y){var i=d++;r=p||(p=o()),n=u.bind(null,r,i,!1),e=u.bind(null,r,i,!0)}else r=o(),n=c.bind(null,r),e=function(){r.parentNode.removeChild(r)};return n(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;n(t=r)}else e()}}function u(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=m(n,o);else{var i=document.createTextNode(o),u=t.childNodes;u[n]&&t.removeChild(u[n]),u.length?t.insertBefore(i,u[n]):t.appendChild(i)}}function c(t,n){var e=n.css,r=n.media,o=n.sourceMap;if(r&&t.setAttribute("media",r),o&&(e+="\n/*# sourceURL="+o.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a=e(60),f={},l=s&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,v=!1,h=function(){},y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,n,e){v=e;var o=a(t,n);return r(o),function(n){for(var e=[],i=0;i<o.length;i++){var u=o[i],c=f[u.id];c.refs--,e.push(c)}n?(o=a(t,n),r(o)):o=[];for(var i=0;i<e.length;i++){var c=e[i];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete f[c.id]}}}};var m=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}()},function(t,n){t.exports=function(t,n){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],u=i[0],c=i[1],s=i[2],a=i[3],f={id:t+":"+o,css:c,media:s,sourceMap:a};r[u]?r[u].parts.push(f):e.push(r[u]={id:u,parts:[f]})}return e}},function(t,n,e){"use strict";var r=e(21),o=e.n(r),i=e(68),u=e.n(i);n.a={methods:{validate:function(){var t=this;return new u.a(function(n,e){t.$refs.form.validate(function(t){n(t)})})},resetForm:function(){this.$refs.form.resetFields()},getComponents:function(){var t=this;return o()(this.$refs).reduce(function(n,e){return n[e]=t.$refs[e][0],n},{})},_errorlint:function(t,n){t||console.error(n)}},props:{model:{default:{}},fields:{default:[]},layout:{default:{}}},computed:{keys:function(){var t={};return this.fields.forEach(function(n){t[n.key]=n}),t}},created:function(){var t=this;this._errorlint(this.fields,"请传入fields属性"),this._errorlint(this.layout,"请传入layout属性"),this._errorlint(this.model,"请传入layout属性"),this.fields.forEach(function(n){void 0===t.model[n.key]&&t.$set(t.model,n.key,"")})}}},function(t,n,e){e(63),t.exports=e(2).Object.keys},function(t,n,e){var r=e(35),o=e(14);e(67)("keys",function(){return function(t){return o(r(t))}})},function(t,n,e){var r=e(11);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(8),o=e(37),i=e(66);t.exports=function(t){return function(n,e,u){var c,s=r(n),a=o(s.length),f=i(u,a);if(t&&e!=e){for(;a>f;)if((c=s[f++])!=c)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(23),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(9),o=e(2),i=e(12);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},function(t,n,e){t.exports={default:e(69),__esModule:!0}},function(t,n,e){e(39),e(40),e(45),e(77),e(88),e(89),t.exports=e(2).Promise},function(t,n,e){var r=e(23),o=e(22);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),s=r(e),a=c.length;return s<0||s>=a?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===a||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):u-56320+(i-55296<<10)+65536)}}},function(t,n,e){"use strict";var r=e(43),o=e(18),i=e(20),u={};e(5)(u,e(1)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(6),o=e(3),i=e(14);t.exports=e(7)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,s=0;c>s;)r.f(t,e=u[s++],n[e]);return t}},function(t,n,e){var r=e(4),o=e(35),i=e(24)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){"use strict";var r=e(75),o=e(76),i=e(13),u=e(8);t.exports=e(41)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){"use strict";var r,o,i,u,c=e(19),s=e(0),a=e(16),f=e(46),l=e(9),p=e(10),d=e(17),v=e(78),h=e(79),y=e(47),m=e(48).set,g=e(84)(),b=e(29),_=e(49),x=e(50),w=s.TypeError,O=s.process,S=s.Promise,j="process"==f(O),E=function(){},P=o=b.f,C=!!function(){try{var t=S.resolve(1),n=(t.constructor={})[e(1)("species")]=function(t){t(E,E)};return(j||"function"==typeof PromiseRejectionEvent)&&t.then(E)instanceof n}catch(t){}}(),T=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},M=function(t,n){if(!t._n){t._n=!0;var e=t._c;g(function(){for(var r=t._v,o=1==t._s,i=0;e.length>i;)!function(n){var e,i,u=o?n.ok:n.fail,c=n.resolve,s=n.reject,a=n.domain;try{u?(o||(2==t._h&&L(t),t._h=1),!0===u?e=r:(a&&a.enter(),e=u(r),a&&a.exit()),e===n.promise?s(w("Promise-chain cycle")):(i=T(e))?i.call(e,c,s):c(e)):s(r)}catch(t){s(t)}}(e[i++]);t._c=[],t._n=!1,n&&!t._h&&k(t)})}},k=function(t){m.call(s,function(){var n,e,r,o=t._v,i=F(t);if(i&&(n=_(function(){j?O.emit("unhandledRejection",o,t):(e=s.onunhandledrejection)?e({promise:t,reason:o}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=j||F(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},F=function(t){if(1==t._h)return!1;for(var n,e=t._a||t._c,r=0;e.length>r;)if(n=e[r++],n.fail||!F(n.promise))return!1;return!0},L=function(t){m.call(s,function(){var n;j?O.emit("rejectionHandled",t):(n=s.onrejectionhandled)&&n({promise:t,reason:t._v})})},R=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),M(n,!0))},N=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw w("Promise can't be resolved itself");(n=T(t))?g(function(){var r={_w:e,_d:!1};try{n.call(t,a(N,r,1),a(R,r,1))}catch(t){R.call(r,t)}}):(e._v=t,e._s=1,M(e,!1))}catch(t){R.call({_w:e,_d:!1},t)}}};C||(S=function(t){v(this,S,"Promise","_h"),d(t),r.call(this);try{t(a(N,this,1),a(R,this,1))}catch(t){R.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e(85)(S.prototype,{then:function(t,n){var e=P(y(this,S));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=j?O.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&M(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=a(N,t,1),this.reject=a(R,t,1)},b.f=P=function(t){return t===S||t===u?new i(t):o(t)}),l(l.G+l.W+l.F*!C,{Promise:S}),e(20)(S,"Promise"),e(86)("Promise"),u=e(2).Promise,l(l.S+l.F*!C,"Promise",{reject:function(t){var n=P(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!C),"Promise",{resolve:function(t){return x(c&&this===u?S:this,t)}}),l(l.S+l.F*!(C&&e(87)(function(t){S.all(t).catch(E)})),"Promise",{all:function(t){var n=this,e=P(n),r=e.resolve,o=e.reject,i=_(function(){var e=[],i=0,u=1;h(t,!1,function(t){var c=i++,s=!1;e.push(void 0),u++,n.resolve(t).then(function(t){s||(s=!0,e[c]=t,--u||r(e))},o)}),--u||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=P(n),r=e.reject,o=_(function(){h(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(16),o=e(80),i=e(81),u=e(3),c=e(37),s=e(82),a={},f={},n=t.exports=function(t,n,e,l,p){var d,v,h,y,m=p?function(){return t}:s(t),g=r(e,l,n?2:1),b=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(d=c(t.length);d>b;b++)if((y=n?g(u(v=t[b])[0],v[1]):g(t[b]))===a||y===f)return y}else for(h=m.call(t);!(v=h.next()).done;)if((y=o(h,g,v.value,n))===a||y===f)return y};n.BREAK=a,n.RETURN=f},function(t,n,e){var r=e(3);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(13),o=e(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(46),o=e(1)("iterator"),i=e(13);t.exports=e(2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(0),o=e(48).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,c=r.Promise,s="process"==e(11)(u);t.exports=function(){var t,n,e,a=function(){var r,o;for(s&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(s)e=function(){u.nextTick(a)};else if(i){var f=!0,l=document.createTextNode("");new i(a).observe(l,{characterData:!0}),e=function(){l.data=f=!f}}else if(c&&c.resolve){var p=c.resolve();e=function(){p.then(a)}}else e=function(){o.call(r,a)};return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n,e){var r=e(5);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n,e){"use strict";var r=e(0),o=e(2),i=e(6),u=e(7),c=e(1)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];u&&n&&!n[c]&&i.f(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},function(t,n,e){"use strict";var r=e(9),o=e(2),i=e(0),u=e(47),c=e(50);r(r.P+r.R,"Promise",{finally:function(t){var n=u(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return c(n,t()).then(function(){return e})}:t,e?function(e){return c(n,t()).then(function(){throw e})}:t)}})},function(t,n,e){"use strict";var r=e(9),o=e(29),i=e(49);r(r.S,"Promise",{try:function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"autoform-block"},[e("el-form",{ref:"form",attrs:{model:t.model,"label-position":t.layout.align||"left","label-width":t.layout.labelWidth,inline:t.layout.inline}},[t.layout.inline?t._e():e("el-row",t._l(t.fields,function(n){return t.layout.custom?t._e():e("field",{key:"form_"+n.key,ref:"form_"+n.key,refInFor:!0,attrs:{model:t.model,field:n,span:t.layout.span,inline:t.layout.inline},on:{"update:model":function(n){t.model=n},"update:span":function(n){t.$set(t.layout,"span",n)}}})})),t._v(" "),t._l(t.fields,function(n){return!t.layout.custom&&t.layout.inline?e("field",{key:"form_"+n.key,ref:"form_"+n.key,refInFor:!0,attrs:{model:t.model,field:n,span:t.layout.span,inline:t.layout.inline},on:{"update:model":function(n){t.model=n},"update:span":function(n){t.$set(t.layout,"span",n)}}}):t._e()}),t._v(" "),t._t("default",null,{keys:t.keys})],2)],1)},o=[],i={render:r,staticRenderFns:o};n.a=i},function(t,n,e){"use strict";var r=e(92),o=e(106),i=e(34),u=i(r.a,o.a,!1,null,null,null);n.a=u.exports},function(t,n,e){"use strict";var r=e(93),o=e.n(r),i=e(33);n.a={props:["form","model","field","to","span","inline"],computed:{type:function(){return"form_"+this.field.type},display:function(){var t=o()(this.field.display);return"function"!==t&&"string"!==t||("function"===t?this.field.display(this.field,this.model):new Function("field","model","return "+this.field.display+";").call({},this.field,this.model))}},methods:{},components:Object(i.c)(),created:function(){},mounted:function(){if(this.field.wrapper){var t=document.createElement("DIV");t.innerHTML=this.field.wrapper;var n=this.$el.parentNode;n.insertBefore(t,this.$el),t.firstChild.appendChild(this.$el),n.insertBefore(t.firstChild,t),n.removeChild(t)}}}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e(94),i=r(o),u=e(96),c=r(u),s="function"==typeof c.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":typeof t};n.default="function"==typeof c.default&&"symbol"===s(i.default)?function(t){return void 0===t?"undefined":s(t)}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":void 0===t?"undefined":s(t)}},function(t,n,e){t.exports={default:e(95),__esModule:!0}},function(t,n,e){e(40),e(45),t.exports=e(30).f("iterator")},function(t,n,e){t.exports={default:e(97),__esModule:!0}},function(t,n,e){e(98),e(39),e(104),e(105),t.exports=e(2).Symbol},function(t,n,e){"use strict";var r=e(0),o=e(4),i=e(7),u=e(9),c=e(42),s=e(99).KEY,a=e(12),f=e(25),l=e(20),p=e(15),d=e(1),v=e(30),h=e(31),y=e(100),m=e(101),g=e(3),b=e(8),_=e(28),x=e(18),w=e(43),O=e(102),S=e(103),j=e(6),E=e(14),P=S.f,C=j.f,T=O.f,M=r.Symbol,k=r.JSON,F=k&&k.stringify,L=d("_hidden"),R=d("toPrimitive"),N={}.propertyIsEnumerable,A=f("symbol-registry"),I=f("symbols"),$=f("op-symbols"),V=Object.prototype,D="function"==typeof M,U=r.QObject,B=!U||!U.prototype||!U.prototype.findChild,G=i&&a(function(){return 7!=w(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=P(V,n);r&&delete V[n],C(t,n,e),r&&t!==V&&C(V,n,r)}:C,W=function(t){var n=I[t]=w(M.prototype);return n._k=t,n},K=D&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},H=function(t,n,e){return t===V&&H($,n,e),g(t),n=_(n,!0),g(e),o(I,n)?(e.enumerable?(o(t,L)&&t[L][n]&&(t[L][n]=!1),e=w(e,{enumerable:x(0,!1)})):(o(t,L)||C(t,L,x(1,{})),t[L][n]=!0),G(t,n,e)):C(t,n,e)},J=function(t,n){g(t);for(var e,r=y(n=b(n)),o=0,i=r.length;i>o;)H(t,e=r[o++],n[e]);return t},q=function(t,n){return void 0===n?w(t):J(w(t),n)},z=function(t){var n=N.call(this,t=_(t,!0));return!(this===V&&o(I,t)&&!o($,t))&&(!(n||!o(this,t)||!o(I,t)||o(this,L)&&this[L][t])||n)},X=function(t,n){if(t=b(t),n=_(n,!0),t!==V||!o(I,n)||o($,n)){var e=P(t,n);return!e||!o(I,n)||o(t,L)&&t[L][n]||(e.enumerable=!0),e}},Y=function(t){for(var n,e=T(b(t)),r=[],i=0;e.length>i;)o(I,n=e[i++])||n==L||n==s||r.push(n);return r},Q=function(t){for(var n,e=t===V,r=T(e?$:b(t)),i=[],u=0;r.length>u;)!o(I,n=r[u++])||e&&!o(V,n)||i.push(I[n]);return i};D||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===V&&n.call($,e),o(this,L)&&o(this[L],t)&&(this[L][t]=!1),G(this,t,x(1,e))};return i&&B&&G(V,t,{configurable:!0,set:n}),W(t)},c(M.prototype,"toString",function(){return this._k}),S.f=X,j.f=H,e(52).f=O.f=Y,e(32).f=z,e(51).f=Q,i&&!e(19)&&c(V,"propertyIsEnumerable",z,!0),v.f=function(t){return W(d(t))}),u(u.G+u.W+u.F*!D,{Symbol:M});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)d(Z[tt++]);for(var nt=E(d.store),et=0;nt.length>et;)h(nt[et++]);u(u.S+u.F*!D,"Symbol",{for:function(t){return o(A,t+="")?A[t]:A[t]=M(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var n in A)if(A[n]===t)return n},useSetter:function(){B=!0},useSimple:function(){B=!1}}),u(u.S+u.F*!D,"Object",{create:q,defineProperty:H,defineProperties:J,getOwnPropertyDescriptor:X,getOwnPropertyNames:Y,getOwnPropertySymbols:Q}),k&&u(u.S+u.F*(!D||a(function(){var t=M();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!K(t)){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return n=r[1],"function"==typeof n&&(e=n),!e&&m(n)||(n=function(t,n){if(e&&(n=e.call(this,t,n)),!K(n))return n}),r[1]=n,F.apply(k,r)}}}),M.prototype[R]||e(5)(M.prototype,R,M.prototype.valueOf),l(M,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){var r=e(15)("meta"),o=e(10),i=e(4),u=e(6).f,c=0,s=Object.isExtensible||function(){return!0},a=!e(12)(function(){return s(Object.preventExtensions({}))}),f=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!n)return"E";f(t)}return t[r].i},p=function(t,n){if(!i(t,r)){if(!s(t))return!0;if(!n)return!1;f(t)}return t[r].w},d=function(t){return a&&v.NEED&&s(t)&&!i(t,r)&&f(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},function(t,n,e){var r=e(14),o=e(51),i=e(32);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,c=e(t),s=i.f,a=0;c.length>a;)s.call(t,u=c[a++])&&n.push(u);return n}},function(t,n,e){var r=e(11);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(8),o=e(52).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?c(t):o(r(t))}},function(t,n,e){var r=e(32),o=e(18),i=e(8),u=e(28),c=e(4),s=e(38),a=Object.getOwnPropertyDescriptor;n.f=e(7)?a:function(t,n){if(t=i(t),n=u(n,!0),s)try{return a(t,n)}catch(t){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){e(31)("asyncIterator")},function(t,n,e){e(31)("observable")},function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.inline?e("el-form-item",{directives:[{name:"show",rawName:"v-show",value:t.display,expression:"display"}],attrs:{label:t.field.templateOptions.label,prop:t.field.key,rules:t.field.validators}},[e(t.type,{tag:"component",attrs:{field:t.field,model:t.model,to:t.field.templateOptions,span:t.span}})],1):e("el-col",{directives:[{name:"show",rawName:"v-show",value:t.display,expression:"display"}],attrs:{span:t.field.templateOptions.span||t.span}},[e("el-form-item",{attrs:{label:t.field.templateOptions.label,prop:t.field.key,rules:t.field.validators}},[e(t.type,{tag:"component",attrs:{field:t.field,model:t.model,to:t.field.templateOptions,span:t.span}})],1)],1)},o=[],i={render:r,staticRenderFns:o};n.a=i},function(t,n,e){"use strict";var r=e(21),o=e.n(r);n.a=function(t){t.filter("fields",function(t){var n=/^\$/;return o()(t).filter(function(t){return!n.test(t)})})}},function(t,n,e){"use strict";n.a={props:["form","field","model","to","span"],icon:"el-icon-edit",methods:{runFunction:function(t,n){"function"==typeof this.to[t]&&this.to[t].call(this,n)},onFocus:function(t){this.runFunction("onFocus",t)},onBlur:function(t){this.runFunction("onBlur",t)},onClick:function(t){this.runFunction("onClick",t)},onChange:function(t){this.runFunction("onChange",t)},onKeyup:function(t){this.runFunction("onKeyup",t)},onKeydown:function(t){this.runFunction("onKeydown",t)}}}},function(t,n,e){"use strict";var r=e(21),o=e.n(r);n.a=function(t){t.directive("form-atts",{bind:function(t,n){n.value&&o()(n.value).forEach(function(e){t.setAttribute(e,n.value[e])})}}),t.directive("form-input-type",{bind:function(t,n){n.value&&t.setAttribute("type",n.value)}})}},function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i});var r=e(33),o=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{prefix:"c"},o=new RegExp("^"+e.prefix);n.forEach(function(t){var n=t.name.replace(o,"");n=n.charAt(0).toLowerCase()+n.slice(1);var e=t;e.default&&(e=e.default),Object(r.a)(n,e)})},i=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{prefix:"c"};if("function"==typeof t){var e=(window.Vue,new RegExp("^"+n.prefix)),o=t();o.keys().forEach(function(t){var n=t.replace(/^\.\//,"").replace(/\.vue/,"").replace(e,"");n=n.charAt(0).toLowerCase()+n.slice(1);var i=o(t);o(t).default&&(i=o(t).default),Object(r.a)(n,i)})}}}])});
//# sourceMappingURL=index.js.map?7e7c8da996726cc13388