!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("autoform",[],n):"object"==typeof exports?exports.autoform=n():t.autoform=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=53)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(25)("wks"),o=e(15),i=e(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n){var e=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(6),o=e(18);t.exports=e(7)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(3),o=e(38),i=e(28),u=Object.defineProperty;n.f=e(7)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){t.exports=!e(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(59),o=e(22);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(0),o=e(2),i=e(16),u=e(5),c=function(t,n,e){var f,s,a,l=t&c.F,p=t&c.G,d=t&c.S,v=t&c.P,h=t&c.B,y=t&c.W,m=p?o:o[n]||(o[n]={}),_=m.prototype,b=p?r:d?r[n]:(r[n]||{}).prototype;p&&(e=n);for(f in e)(s=!l&&b&&void 0!==b[f])&&f in m||(a=s?b[f]:e[f],m[f]=p&&"function"!=typeof b[f]?e[f]:h&&s?i(a,r):y&&b[f]==a?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(a):v&&"function"==typeof a?i(Function.call,a):a,v&&((m.virtual||(m.virtual={}))[f]=a,t&c.R&&_&&!_[f]&&u(_,f,a)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports={}},function(t,n,e){var r=e(36),o=e(26);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(17);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports=!0},function(t,n,e){var r=e(6).f,o=e(4),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){t.exports={default:e(57),__esModule:!0}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(25)("keys"),o=e(15);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(10),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(10);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){"use strict";function r(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=o(n),this.reject=o(e)}var o=e(17);t.exports.f=function(t){return new r(t)}},function(t,n,e){n.f=e(1)},function(t,n,e){var r=e(0),o=e(2),i=e(19),u=e(30),c=e(6).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){"use strict";function r(t,n){u.fields["form_"+t]=n}function o(){return u.fields}function i(t,n){u.validationMessages[t]=n}n.a=r,n.c=o,n.b=i;var u={fields:{},validationMessages:{}}},function(t,n){t.exports=function(t,n,e,r,o,i){var u,c=t=t||{},f=typeof t.default;"object"!==f&&"function"!==f||(u=t,c=t.default);var s="function"==typeof c?c.options:c;n&&(s.render=n.render,s.staticRenderFns=n.staticRenderFns,s._compiled=!0),e&&(s.functional=!0),o&&(s._scopeId=o);var a;if(i?(a=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},s._ssrRegister=a):r&&(a=r),a){var l=s.functional,p=l?s.render:s.beforeCreate;l?(s._injectStyles=a,s.render=function(t,n){return a.call(n),p(t,n)}):s.beforeCreate=p?[].concat(p,a):[a]}return{esModule:u,exports:c,options:s}}},function(t,n,e){var r=e(22);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(4),o=e(8),i=e(60)(!1),u=e(24)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,s=[];for(e in c)e!=u&&r(c,e)&&s.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){var r=e(23),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){t.exports=!e(7)&&!e(12)(function(){return 7!=Object.defineProperty(e(27)("div"),"a",{get:function(){return 7}}).a})},function(t,n){},function(t,n,e){"use strict";var r=e(65)(!0);e(41)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){"use strict";var r=e(19),o=e(9),i=e(42),u=e(5),c=e(4),f=e(13),s=e(66),a=e(20),l=e(68),p=e(1)("iterator"),d=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,h,y,m,_){s(e,n,h);var b,g,x,w=function(t){if(!d&&t in P)return P[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},O=n+" Iterator",S="values"==y,j=!1,P=t.prototype,E=P[p]||P["@@iterator"]||y&&P[y],T=E||w(y),M=y?S?w("entries"):T:void 0,F="Array"==n?P.entries||E:E;if(F&&(x=l(F.call(new t)))!==Object.prototype&&x.next&&(a(x,O,!0),r||c(x,p)||u(x,p,v)),S&&E&&"values"!==E.name&&(j=!0,T=function(){return E.call(this)}),r&&!_||!d&&!j&&P[p]||u(P,p,T),f[n]=T,f[O]=v,y)if(b={values:S?T:w("values"),keys:m?T:w("keys"),entries:M},_)for(g in b)g in P||i(P,g,b[g]);else o(o.P+o.F*(d||j),n,b);return b}},function(t,n,e){t.exports=e(5)},function(t,n,e){var r=e(3),o=e(67),i=e(26),u=e(24)("IE_PROTO"),c=function(){},f=function(){var t,n=e(27)("iframe"),r=i.length;for(n.style.display="none",e(44).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=f(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(0).document;t.exports=r&&r.documentElement},function(t,n,e){e(69);for(var r=e(0),o=e(5),i=e(13),u=e(1)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),f=0;f<c.length;f++){var s=c[f],a=r[s],l=a&&a.prototype;l&&!l[u]&&o(l,u,s),i[s]=i.Array}},function(t,n,e){var r=e(11),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=u(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n,e){var r=e(3),o=e(17),i=e(1)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||void 0==(e=r(u)[i])?n:o(e)}},function(t,n,e){var r,o,i,u=e(16),c=e(78),f=e(44),s=e(27),a=e(0),l=a.process,p=a.setImmediate,d=a.clearImmediate,v=a.MessageChannel,h=a.Dispatch,y=0,m={},_=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},b=function(t){_.call(t.data)};p&&d||(p=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return m[++y]=function(){c("function"==typeof t?t:Function(t),n)},r(y),y},d=function(t){delete m[t]},"process"==e(11)(l)?r=function(t){l.nextTick(u(_,t,1))}:h&&h.now?r=function(t){h.now(u(_,t,1))}:v?(o=new v,i=o.port2,o.port1.onmessage=b,r=u(i.postMessage,i,1)):a.addEventListener&&"function"==typeof postMessage&&!a.importScripts?(r=function(t){a.postMessage(t+"","*")},a.addEventListener("message",b,!1)):r="onreadystatechange"in s("script")?function(t){f.appendChild(s("script")).onreadystatechange=function(){f.removeChild(this),_.call(t)}}:function(t){setTimeout(u(_,t,1),0)}),t.exports={set:p,clear:d}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r=e(3),o=e(10),i=e(29);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(36),o=e(26).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(54),o=e(102),i=e(103),u=e(33),c=e(104),f=e(105),s={getTypes:u.c,addType:u.a,addValidationMessage:u.b,basicComponent:i.a,install:function(t){Object(c.a)(t),Object(r.a)(t),Object(o.a)(t),t.$autoform={getTypes:u.c,addType:u.a,addValidationMessage:u.b,Register:f.a,RegisterDir:f.b}}};"undefined"!=typeof window&&window.Vue&&(window.Vue.use(s),window.Vue.$autoform={getTypes:u.c,addType:u.a,addValidationMessage:u.b,Register:f.a,RegisterDir:f.b}),n.default=s},function(t,n,e){"use strict";var r=e(55),o=e(86);n.a=function(t){t.component("auto-form",r.a),t.component("field",function(t){t(o.a.default?o.a.default:o.a)})}},function(t,n,e){"use strict";var r=e(56),o=e(85),i=e(34),u=i(r.a,o.a,!1,null,null,null);n.a=u.exports},function(t,n,e){"use strict";var r=e(21),o=e.n(r),i=e(63),u=e.n(i);n.a={methods:{validate:function(){var t=this;return new u.a(function(n,e){t.$refs.form.validate(function(t){t?n():e()})})},resetForm:function(){this.$refs.form.resetFields()},getComponents:function(){var t=this;return o()(this.$refs).reduce(function(n,e){return n[e]=t.$refs[e][0],n},{})},_errorlint:function(t,n){t||console.error(n)}},props:{model:{default:{}},fields:{default:[]},layout:{default:{}}},computed:{keys:function(){var t={};return this.fields.forEach(function(n){t[n.key]=n}),t}},created:function(){var t=this;this._errorlint(this.fields,"请传入fields属性"),this._errorlint(this.layout,"请传入layout属性"),this._errorlint(this.model,"请传入layout属性"),this.fields.forEach(function(n){void 0===t.model[n.key]&&t.$set(t.model,n.key,"")})}}},function(t,n,e){e(58),t.exports=e(2).Object.keys},function(t,n,e){var r=e(35),o=e(14);e(62)("keys",function(){return function(t){return o(r(t))}})},function(t,n,e){var r=e(11);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(8),o=e(37),i=e(61);t.exports=function(t){return function(n,e,u){var c,f=r(n),s=o(f.length),a=i(u,s);if(t&&e!=e){for(;s>a;)if((c=f[a++])!=c)return!0}else for(;s>a;a++)if((t||a in f)&&f[a]===e)return t||a||0;return!t&&-1}}},function(t,n,e){var r=e(23),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(9),o=e(2),i=e(12);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},function(t,n,e){t.exports={default:e(64),__esModule:!0}},function(t,n,e){e(39),e(40),e(45),e(72),e(83),e(84),t.exports=e(2).Promise},function(t,n,e){var r=e(23),o=e(22);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),f=r(e),s=c.length;return f<0||f>=s?t?"":void 0:(i=c.charCodeAt(f),i<55296||i>56319||f+1===s||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536)}}},function(t,n,e){"use strict";var r=e(43),o=e(18),i=e(20),u={};e(5)(u,e(1)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(6),o=e(3),i=e(14);t.exports=e(7)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,f=0;c>f;)r.f(t,e=u[f++],n[e]);return t}},function(t,n,e){var r=e(4),o=e(35),i=e(24)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){"use strict";var r=e(70),o=e(71),i=e(13),u=e(8);t.exports=e(41)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){"use strict";var r,o,i,u,c=e(19),f=e(0),s=e(16),a=e(46),l=e(9),p=e(10),d=e(17),v=e(73),h=e(74),y=e(47),m=e(48).set,_=e(79)(),b=e(29),g=e(49),x=e(50),w=f.TypeError,O=f.process,S=f.Promise,j="process"==a(O),P=function(){},E=o=b.f,T=!!function(){try{var t=S.resolve(1),n=(t.constructor={})[e(1)("species")]=function(t){t(P,P)};return(j||"function"==typeof PromiseRejectionEvent)&&t.then(P)instanceof n}catch(t){}}(),M=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},F=function(t,n){if(!t._n){t._n=!0;var e=t._c;_(function(){for(var r=t._v,o=1==t._s,i=0;e.length>i;)!function(n){var e,i,u=o?n.ok:n.fail,c=n.resolve,f=n.reject,s=n.domain;try{u?(o||(2==t._h&&L(t),t._h=1),!0===u?e=r:(s&&s.enter(),e=u(r),s&&s.exit()),e===n.promise?f(w("Promise-chain cycle")):(i=M(e))?i.call(e,c,f):c(e)):f(r)}catch(t){f(t)}}(e[i++]);t._c=[],t._n=!1,n&&!t._h&&k(t)})}},k=function(t){m.call(f,function(){var n,e,r,o=t._v,i=C(t);if(i&&(n=g(function(){j?O.emit("unhandledRejection",o,t):(e=f.onunhandledrejection)?e({promise:t,reason:o}):(r=f.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=j||C(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},C=function(t){if(1==t._h)return!1;for(var n,e=t._a||t._c,r=0;e.length>r;)if(n=e[r++],n.fail||!C(n.promise))return!1;return!0},L=function(t){m.call(f,function(){var n;j?O.emit("rejectionHandled",t):(n=f.onrejectionhandled)&&n({promise:t,reason:t._v})})},R=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),F(n,!0))},A=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw w("Promise can't be resolved itself");(n=M(t))?_(function(){var r={_w:e,_d:!1};try{n.call(t,s(A,r,1),s(R,r,1))}catch(t){R.call(r,t)}}):(e._v=t,e._s=1,F(e,!1))}catch(t){R.call({_w:e,_d:!1},t)}}};T||(S=function(t){v(this,S,"Promise","_h"),d(t),r.call(this);try{t(s(A,this,1),s(R,this,1))}catch(t){R.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e(80)(S.prototype,{then:function(t,n){var e=E(y(this,S));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=j?O.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&F(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=s(A,t,1),this.reject=s(R,t,1)},b.f=E=function(t){return t===S||t===u?new i(t):o(t)}),l(l.G+l.W+l.F*!T,{Promise:S}),e(20)(S,"Promise"),e(81)("Promise"),u=e(2).Promise,l(l.S+l.F*!T,"Promise",{reject:function(t){var n=E(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!T),"Promise",{resolve:function(t){return x(c&&this===u?S:this,t)}}),l(l.S+l.F*!(T&&e(82)(function(t){S.all(t).catch(P)})),"Promise",{all:function(t){var n=this,e=E(n),r=e.resolve,o=e.reject,i=g(function(){var e=[],i=0,u=1;h(t,!1,function(t){var c=i++,f=!1;e.push(void 0),u++,n.resolve(t).then(function(t){f||(f=!0,e[c]=t,--u||r(e))},o)}),--u||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=E(n),r=e.reject,o=g(function(){h(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(16),o=e(75),i=e(76),u=e(3),c=e(37),f=e(77),s={},a={},n=t.exports=function(t,n,e,l,p){var d,v,h,y,m=p?function(){return t}:f(t),_=r(e,l,n?2:1),b=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(d=c(t.length);d>b;b++)if((y=n?_(u(v=t[b])[0],v[1]):_(t[b]))===s||y===a)return y}else for(h=m.call(t);!(v=h.next()).done;)if((y=o(h,_,v.value,n))===s||y===a)return y};n.BREAK=s,n.RETURN=a},function(t,n,e){var r=e(3);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(13),o=e(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(46),o=e(1)("iterator"),i=e(13);t.exports=e(2).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(0),o=e(48).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,c=r.Promise,f="process"==e(11)(u);t.exports=function(){var t,n,e,s=function(){var r,o;for(f&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(f)e=function(){u.nextTick(s)};else if(i){var a=!0,l=document.createTextNode("");new i(s).observe(l,{characterData:!0}),e=function(){l.data=a=!a}}else if(c&&c.resolve){var p=c.resolve();e=function(){p.then(s)}}else e=function(){o.call(r,s)};return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n,e){var r=e(5);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n,e){"use strict";var r=e(0),o=e(2),i=e(6),u=e(7),c=e(1)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];u&&n&&!n[c]&&i.f(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},function(t,n,e){"use strict";var r=e(9),o=e(2),i=e(0),u=e(47),c=e(50);r(r.P+r.R,"Promise",{finally:function(t){var n=u(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return c(n,t()).then(function(){return e})}:t,e?function(e){return c(n,t()).then(function(){throw e})}:t)}})},function(t,n,e){"use strict";var r=e(9),o=e(29),i=e(49);r(r.S,"Promise",{try:function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("el-form",{ref:"form",attrs:{model:t.model,"label-position":t.layout.align||"left","label-width":t.layout.labelWidth,inline:t.layout.inline}},[t._l(t.fields,function(n){return t.layout.custom?t._e():e("field",{key:"form_"+n.key,ref:"form_"+n.key,refInFor:!0,attrs:{model:t.model,field:n,span:t.layout.span},on:{"update:model":function(n){t.model=n},"update:span":function(n){t.$set(t.layout,"span",n)}}})}),t._v(" "),t._t("default",null,{keys:t.keys})],2)],1)},o=[],i={render:r,staticRenderFns:o};n.a=i},function(t,n,e){"use strict";var r=e(87),o=e(101),i=e(34),u=i(r.a,o.a,!1,null,null,null);n.a=u.exports},function(t,n,e){"use strict";var r=e(88),o=e.n(r),i=e(33);n.a={props:["form","model","field","to","span"],computed:{type:function(){return"form_"+this.field.type},display:function(){var t=o()(this.field.display);return"function"!==t&&"string"!==t||("function"===t?this.field.display(this.field,this.model):new Function("field","model","return "+this.field.display+";").call({},this.field,this.model))}},methods:{},components:Object(i.c)(),created:function(){},mounted:function(){if(this.field.wrapper){var t=document.createElement("DIV");t.innerHTML=this.field.wrapper;var n=this.$el.parentNode;n.insertBefore(t,this.$el),t.firstChild.appendChild(this.$el),n.insertBefore(t.firstChild,t),n.removeChild(t)}}}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e(89),i=r(o),u=e(91),c=r(u),f="function"==typeof c.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":typeof t};n.default="function"==typeof c.default&&"symbol"===f(i.default)?function(t){return void 0===t?"undefined":f(t)}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":void 0===t?"undefined":f(t)}},function(t,n,e){t.exports={default:e(90),__esModule:!0}},function(t,n,e){e(40),e(45),t.exports=e(30).f("iterator")},function(t,n,e){t.exports={default:e(92),__esModule:!0}},function(t,n,e){e(93),e(39),e(99),e(100),t.exports=e(2).Symbol},function(t,n,e){"use strict";var r=e(0),o=e(4),i=e(7),u=e(9),c=e(42),f=e(94).KEY,s=e(12),a=e(25),l=e(20),p=e(15),d=e(1),v=e(30),h=e(31),y=e(95),m=e(96),_=e(3),b=e(8),g=e(28),x=e(18),w=e(43),O=e(97),S=e(98),j=e(6),P=e(14),E=S.f,T=j.f,M=O.f,F=r.Symbol,k=r.JSON,C=k&&k.stringify,L=d("_hidden"),R=d("toPrimitive"),A={}.propertyIsEnumerable,N=a("symbol-registry"),I=a("symbols"),$=a("op-symbols"),V=Object.prototype,D="function"==typeof F,G=r.QObject,B=!G||!G.prototype||!G.prototype.findChild,K=i&&s(function(){return 7!=w(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=E(V,n);r&&delete V[n],T(t,n,e),r&&t!==V&&T(V,n,r)}:T,W=function(t){var n=I[t]=w(F.prototype);return n._k=t,n},H=D&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},U=function(t,n,e){return t===V&&U($,n,e),_(t),n=g(n,!0),_(e),o(I,n)?(e.enumerable?(o(t,L)&&t[L][n]&&(t[L][n]=!1),e=w(e,{enumerable:x(0,!1)})):(o(t,L)||T(t,L,x(1,{})),t[L][n]=!0),K(t,n,e)):T(t,n,e)},J=function(t,n){_(t);for(var e,r=y(n=b(n)),o=0,i=r.length;i>o;)U(t,e=r[o++],n[e]);return t},z=function(t,n){return void 0===n?w(t):J(w(t),n)},X=function(t){var n=A.call(this,t=g(t,!0));return!(this===V&&o(I,t)&&!o($,t))&&(!(n||!o(this,t)||!o(I,t)||o(this,L)&&this[L][t])||n)},Y=function(t,n){if(t=b(t),n=g(n,!0),t!==V||!o(I,n)||o($,n)){var e=E(t,n);return!e||!o(I,n)||o(t,L)&&t[L][n]||(e.enumerable=!0),e}},q=function(t){for(var n,e=M(b(t)),r=[],i=0;e.length>i;)o(I,n=e[i++])||n==L||n==f||r.push(n);return r},Q=function(t){for(var n,e=t===V,r=M(e?$:b(t)),i=[],u=0;r.length>u;)!o(I,n=r[u++])||e&&!o(V,n)||i.push(I[n]);return i};D||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===V&&n.call($,e),o(this,L)&&o(this[L],t)&&(this[L][t]=!1),K(this,t,x(1,e))};return i&&B&&K(V,t,{configurable:!0,set:n}),W(t)},c(F.prototype,"toString",function(){return this._k}),S.f=Y,j.f=U,e(52).f=O.f=q,e(32).f=X,e(51).f=Q,i&&!e(19)&&c(V,"propertyIsEnumerable",X,!0),v.f=function(t){return W(d(t))}),u(u.G+u.W+u.F*!D,{Symbol:F});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)d(Z[tt++]);for(var nt=P(d.store),et=0;nt.length>et;)h(nt[et++]);u(u.S+u.F*!D,"Symbol",{for:function(t){return o(N,t+="")?N[t]:N[t]=F(t)},keyFor:function(t){if(!H(t))throw TypeError(t+" is not a symbol!");for(var n in N)if(N[n]===t)return n},useSetter:function(){B=!0},useSimple:function(){B=!1}}),u(u.S+u.F*!D,"Object",{create:z,defineProperty:U,defineProperties:J,getOwnPropertyDescriptor:Y,getOwnPropertyNames:q,getOwnPropertySymbols:Q}),k&&u(u.S+u.F*(!D||s(function(){var t=F();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!H(t)){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return n=r[1],"function"==typeof n&&(e=n),!e&&m(n)||(n=function(t,n){if(e&&(n=e.call(this,t,n)),!H(n))return n}),r[1]=n,C.apply(k,r)}}}),F.prototype[R]||e(5)(F.prototype,R,F.prototype.valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){var r=e(15)("meta"),o=e(10),i=e(4),u=e(6).f,c=0,f=Object.isExtensible||function(){return!0},s=!e(12)(function(){return f(Object.preventExtensions({}))}),a=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!n)return"E";a(t)}return t[r].i},p=function(t,n){if(!i(t,r)){if(!f(t))return!0;if(!n)return!1;a(t)}return t[r].w},d=function(t){return s&&v.NEED&&f(t)&&!i(t,r)&&a(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},function(t,n,e){var r=e(14),o=e(51),i=e(32);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,c=e(t),f=i.f,s=0;c.length>s;)f.call(t,u=c[s++])&&n.push(u);return n}},function(t,n,e){var r=e(11);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(8),o=e(52).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?c(t):o(r(t))}},function(t,n,e){var r=e(32),o=e(18),i=e(8),u=e(28),c=e(4),f=e(38),s=Object.getOwnPropertyDescriptor;n.f=e(7)?s:function(t,n){if(t=i(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){e(31)("asyncIterator")},function(t,n,e){e(31)("observable")},function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-form-item",{attrs:{label:t.field.templateOptions.label,prop:t.field.key,rules:t.field.validators}},[e("el-col",{attrs:{span:t.field.templateOptions.span||t.span}},[e(t.type,{directives:[{name:"show",rawName:"v-show",value:t.display,expression:"display"}],tag:"component",attrs:{field:t.field,model:t.model,to:t.field.templateOptions,span:t.span}})],1)],1)},o=[],i={render:r,staticRenderFns:o};n.a=i},function(t,n,e){"use strict";var r=e(21),o=e.n(r);n.a=function(t){t.filter("fields",function(t){var n=/^\$/;return o()(t).filter(function(t){return!n.test(t)})})}},function(t,n,e){"use strict";n.a={props:["form","field","model","to","span"],icon:"el-icon-edit",methods:{runFunction:function(t,n){"function"==typeof this.to[t]&&this.to[t].call(this,n)},onFocus:function(t){this.runFunction("onFocus",t)},onBlur:function(t){this.runFunction("onBlur",t)},onClick:function(t){this.runFunction("onClick",t)},onChange:function(t){this.runFunction("onChange",t)},onKeyup:function(t){this.runFunction("onKeyup",t)},onKeydown:function(t){this.runFunction("onKeydown",t)}}}},function(t,n,e){"use strict";var r=e(21),o=e.n(r);n.a=function(t){t.directive("form-atts",{bind:function(t,n){n.value&&o()(n.value).forEach(function(e){t.setAttribute(e,n.value[e])})}}),t.directive("form-input-type",{bind:function(t,n){n.value&&t.setAttribute("type",n.value)}})}},function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i});var r=e(33),o=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{prefix:"c"},o=new RegExp("^"+e.prefix);n.forEach(function(t){var n=t.name.replace(o,"");n=n.charAt(0).toLowerCase()+n.slice(1);var e=t;e.default&&(e=e.default),Object(r.a)(n,e)})},i=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{prefix:"c"};if("function"==typeof t){var e=(window.Vue,new RegExp("^"+n.prefix)),o=t();o.keys().forEach(function(t){var n=t.replace(/^\.\//,"").replace(/\.vue/,"").replace(e,"");n=n.charAt(0).toLowerCase()+n.slice(1);var i=o(t);o(t).default&&(i=o(t).default),Object(r.a)(n,i)})}}}])});
//# sourceMappingURL=index.js.map?24ab37e6dff36036f861