"use strict";function e(e,r,n,t){return new(n||(n=Promise))((function(o,a){function i(e){try{u(t.next(e))}catch(e){a(e)}}function c(e){try{u(t.throw(e))}catch(e){a(e)}}function u(e){var r;e.done?o(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,c)}u((t=t.apply(e,r||[])).next())}))}function r(e,r){var n,t,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(n=1,t&&(o=2&c[0]?t.return:c[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,c[1])).done)return o;switch(t=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,t=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=r.call(e,i)}catch(e){c=[6,e],t=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}"function"==typeof SuppressedError&&SuppressedError;var n={exclude:[]};var t={},o={timeout:"true"},a=function(e,r){"undefined"!=typeof window&&(t[e]=r)},i=function(){return Object.fromEntries(Object.entries(t).filter((function(e){var r,t=e[0];return!(null===(r=null==n?void 0:n.exclude)||void 0===r?void 0:r.includes(t))})).map((function(e){return[e[0],(0,e[1])()]})))},c=3432918353,u=461845907,s=3864292196,l=2246822507,d=3266489909;function f(e,r){return e<<r|e>>>32-r}function h(e,r){void 0===r&&(r=0);for(var n=r,t=0,o=3&e.length,a=e.length-o,i=0;i<a;)t=255&e.charCodeAt(i)|(255&e.charCodeAt(++i))<<8|(255&e.charCodeAt(++i))<<16|(255&e.charCodeAt(++i))<<24,++i,t=f(t=Math.imul(t,c),15),n=f(n^=t=Math.imul(t,u),13),n=Math.imul(n,5)+s;switch(t=0,o){case 3:t^=(255&e.charCodeAt(i+2))<<16;case 2:t^=(255&e.charCodeAt(i+1))<<8;case 1:t^=255&e.charCodeAt(i),t=f(t=Math.imul(t,c),15),n^=t=Math.imul(t,u)}return((n=function(e){return e^=e>>>16,e=Math.imul(e,l),e^=e>>>13,e=Math.imul(e,d),e^e>>>16}(n^=e.length))>>>0).toString(36)}function m(e,r){return new Promise((function(n){setTimeout((function(){return n(r)}),e)}))}function v(e,r,n){return Promise.all(e.map((function(e){var t=performance.now();return Promise.race([e.then((function(e){return{value:e,elapsed:performance.now()-t}})),m(r,n).then((function(e){return{value:e,elapsed:performance.now()-t}}))])})))}function p(e,r,n){return Promise.all(e.map((function(e){return Promise.race([e,m(r,n)])})))}var g=3e3;function w(){return e(this,void 0,void 0,(function(){var e,t,a,c,u;return r(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),e=i(),t=Object.keys(e),[4,p(Object.values(e),g,o)];case 1:return a=r.sent(),c=a.filter((function(e){return void 0!==e})),u={},c.forEach((function(e,r){u[t[r]]=e})),[2,S(u,n.exclude||[])];case 2:throw r.sent();case 3:return[2]}}))}))}function S(e,r){var n={},t=function(t){if(e.hasOwnProperty(t)){var o=e[t];if("object"!=typeof o||Array.isArray(o))r.includes(t)||(n[t]=o);else{var a=S(o,r.map((function(e){return e.startsWith(t+".")?e.slice(t.length+1):e})));Object.keys(a).length>0&&(n[t]=a)}}};for(var o in e)t(o);return n}function y(e){for(var r=0,n=0;n<e.length;++n)r+=Math.abs(e[n]);return r}function b(e,r,n){for(var t=[],o=0;o<e[0].data.length;o++){for(var a=[],i=0;i<e.length;i++)a.push(e[i].data[o]);t.push(P(a))}var c=new Uint8ClampedArray(t);return new ImageData(c,r,n)}function P(e){if(0===e.length)return 0;for(var r={},n=0,t=e;n<t.length;n++){r[a=t[n]]=(r[a]||0)+1}var o=e[0];for(var a in r)r[a]>r[o]&&(o=parseInt(a,10));return o}function E(){if("undefined"==typeof navigator)return{name:"unknown",version:"unknown"};for(var e=navigator.userAgent,r={Edg:"Edge",OPR:"Opera"},n=0,t=[/(?<name>Edge|Edg)\/(?<version>\d+(?:\.\d+)?)/,/(?<name>(?:Chrome|Chromium|OPR|Opera|Vivaldi|Brave))\/(?<version>\d+(?:\.\d+)?)/,/(?<name>(?:Firefox|Waterfox|Iceweasel|IceCat))\/(?<version>\d+(?:\.\d+)?)/,/(?<name>Safari)\/(?<version>\d+(?:\.\d+)?)/,/(?<name>MSIE|Trident|IEMobile).+?(?<version>\d+(?:\.\d+)?)/,/(?<name>[A-Za-z]+)\/(?<version>\d+(?:\.\d+)?)/,/(?<name>SamsungBrowser)\/(?<version>\d+(?:\.\d+)?)/];n<t.length;n++){var o=t[n],a=e.match(o);if(a&&a.groups)return{name:r[a.groups.name]||a.groups.name,version:a.groups.version}}return{name:"unknown",version:"unknown"}}a("audio",(function(){return e(this,void 0,void 0,(function(){return r(this,(function(e){return[2,new Promise((function(e,r){try{var n=new(window.OfflineAudioContext||window.webkitOfflineAudioContext)(1,5e3,44100),t=n.createBufferSource(),o=n.createOscillator();o.frequency.value=1e3;var a,i=n.createDynamicsCompressor();i.threshold.value=-50,i.knee.value=40,i.ratio.value=12,i.attack.value=0,i.release.value=.2,o.connect(i),i.connect(n.destination),o.start(),n.oncomplete=function(r){a=r.renderedBuffer.getChannelData(0),e({sampleHash:y(a),oscillator:o.type,maxChannels:n.destination.maxChannelCount,channelCountMode:t.channelCountMode})},n.startRendering()}catch(e){console.error("Error creating audio fingerprint:",e),r(e)}}))]}))}))}));var M="SamsungBrowser"!==E().name?1:3,C=280,A=20;"Firefox"!=E().name&&a("canvas",(function(){return document.createElement("canvas").getContext("2d"),new Promise((function(e){var r=Array.from({length:M},(function(){return function(){var e=document.createElement("canvas"),r=e.getContext("2d");if(!r)return new ImageData(1,1);e.width=C,e.height=A;var n=r.createLinearGradient(0,0,e.width,e.height);n.addColorStop(0,"red"),n.addColorStop(1/6,"orange"),n.addColorStop(2/6,"yellow"),n.addColorStop(.5,"green"),n.addColorStop(4/6,"blue"),n.addColorStop(5/6,"indigo"),n.addColorStop(1,"violet"),r.fillStyle=n,r.fillRect(0,0,e.width,e.height);var t="Random Text WMwmil10Oo";r.font="23.123px Arial",r.fillStyle="black",r.fillText(t,-5,15),r.fillStyle="rgba(0, 0, 255, 0.5)",r.fillText(t,-3.3,17.7),r.beginPath(),r.moveTo(0,0),r.lineTo(2*e.width/7,e.height),r.strokeStyle="white",r.lineWidth=2,r.stroke();var o=r.getImageData(0,0,e.width,e.height);return o}()}));e({commonImageDataHash:h(b(r,C,A).data.toString()).toString()})}))}));var x=["Arial","Arial Black","Arial Narrow","Arial Rounded MT","Arimo","Archivo","Barlow","Bebas Neue","Bitter","Bookman","Calibri","Cabin","Candara","Century","Century Gothic","Comic Sans MS","Constantia","Courier","Courier New","Crimson Text","DM Mono","DM Sans","DM Serif Display","DM Serif Text","Dosis","Droid Sans","Exo","Fira Code","Fira Sans","Franklin Gothic Medium","Garamond","Geneva","Georgia","Gill Sans","Helvetica","Impact","Inconsolata","Indie Flower","Inter","Josefin Sans","Karla","Lato","Lexend","Lucida Bright","Lucida Console","Lucida Sans Unicode","Manrope","Merriweather","Merriweather Sans","Montserrat","Myriad","Noto Sans","Nunito","Nunito Sans","Open Sans","Optima","Orbitron","Oswald","Pacifico","Palatino","Perpetua","PT Sans","PT Serif","Poppins","Prompt","Public Sans","Quicksand","Rajdhani","Recursive","Roboto","Roboto Condensed","Rockwell","Rubik","Segoe Print","Segoe Script","Segoe UI","Sora","Source Sans Pro","Space Mono","Tahoma","Taviraj","Times","Times New Roman","Titillium Web","Trebuchet MS","Ubuntu","Varela Round","Verdana","Work Sans"],T=["monospace","sans-serif","serif"];function k(e,r){if(!e)throw new Error("Canvas context not supported");return e.font,e.font="72px ".concat(r),e.measureText("WwMmLli0Oo").width}function I(){var e,r=document.createElement("canvas"),n=null!==(e=r.getContext("webgl"))&&void 0!==e?e:r.getContext("experimental-webgl");return n&&"getParameter"in n?{vendor:(n.getParameter(n.VENDOR)||"").toString(),renderer:(n.getParameter(n.RENDERER)||"").toString(),version:(n.getParameter(n.VERSION)||"").toString(),shadingLanguageVersion:(n.getParameter(n.SHADING_LANGUAGE_VERSION)||"").toString()}:"undefined"}function R(){var e=new Float32Array(1),r=new Uint8Array(e.buffer);return e[0]=1/0,e[0]=e[0]-e[0],r[3]}function O(e,r){var n={};return r.forEach((function(r){var t=function(e){if(0===e.length)return null;var r={};e.forEach((function(e){var n=String(e);r[n]=(r[n]||0)+1}));var n=e[0],t=1;return Object.keys(r).forEach((function(e){r[e]>t&&(n=e,t=r[e])})),n}(e.map((function(e){return r in e?e[r]:void 0})).filter((function(e){return void 0!==e})));t&&(n[r]=t)})),n}"Firefox"!=E().name&&a("fonts",(function(){var n=this;return new Promise((function(t,o){try{!function(n){var t;e(this,void 0,void 0,(function(){var e,o,a;return r(this,(function(r){switch(r.label){case 0:return document.body?[3,2]:[4,(i=50,new Promise((function(e){return setTimeout(e,i,c)})))];case 1:return r.sent(),[3,0];case 2:if(e=document.createElement("iframe"),(o=e.style).setProperty("display","block","important"),o.setProperty("visibility","visible"),e.src="about:blank",document.body.appendChild(e),!(a=e.contentDocument||(null===(t=e.contentWindow)||void 0===t?void 0:t.document)))throw new Error("Iframe document is not accessible");return n({iframe:a}),setTimeout((function(){document.body.removeChild(e)}),0),[2]}var i,c}))}))}((function(o){var a=o.iframe;return e(n,void 0,void 0,(function(){var e,n,o,i;return r(this,(function(r){return"Hello, world!",e=a.createElement("canvas"),n=e.getContext("2d"),o=T.map((function(e){return k(n,e)})),i={},x.forEach((function(e){var r=k(n,e);o.includes(r)||(i[e]=r)})),t(i),[2]}))}))}))}catch(e){o({error:"unsupported"})}}))})),a("hardware",(function(){return new Promise((function(e,r){var n=void 0!==navigator.deviceMemory?navigator.deviceMemory:0,t=window.performance&&window.performance.memory?window.performance.memory:0;e({videocard:I(),architecture:R(),deviceMemory:n.toString()||"undefined",jsHeapSizeLimit:t.jsHeapSizeLimit||"undefined"})}))})),a("locales",(function(){return new Promise((function(e){e({languages:navigator.language,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone})}))}));var D=n.retries||3,F=n.permissions_to_check||["accelerometer","accessibility","accessibility-events","ambient-light-sensor","background-fetch","background-sync","bluetooth","camera","clipboard-read","clipboard-write","device-info","display-capture","gyroscope","geolocation","local-fonts","magnetometer","microphone","midi","nfc","notifications","payment-handler","persistent-storage","push","speaker","storage-access","top-level-storage-access","window-management","query"];function _(){var e=[],r={"prefers-contrast":["high","more","low","less","forced","no-preference"],"any-hover":["hover","none"],"any-pointer":["none","coarse","fine"],pointer:["none","coarse","fine"],hover:["hover","none"],update:["fast","slow"],color:["8","16","256"],"inverted-colors":["inverted","none"],"prefers-reduced-motion":["reduce","no-preference"],"prefers-reduced-transparency":["reduce","no-preference"],scripting:["none","initial-only","enabled"],"forced-colors":["active","none"],"prefers-color-scheme":["dark","light","no-preference"]};return Object.keys(r).forEach((function(n){r[n].forEach((function(r){matchMedia("(".concat(n,": ").concat(r,")")).matches&&e.push("".concat(n,": ").concat(r))}))})),e}function B(){if("https:"===window.location.protocol&&"function"==typeof window.ApplePaySession)try{for(var e=window.ApplePaySession.supportsVersion,r=15;r>0;r--)if(e(r))return r}catch(e){return 0}return 0}a("permissions",(function(){return e(this,void 0,void 0,(function(){var n;return r(this,(function(t){return n=Array.from({length:D},(function(){return function(){return e(this,void 0,void 0,(function(){var e,n,t,o,a;return r(this,(function(r){switch(r.label){case 0:e={},n=0,t=F,r.label=1;case 1:if(!(n<t.length))return[3,6];o=t[n],r.label=2;case 2:return r.trys.push([2,4,,5]),[4,navigator.permissions.query({name:o})];case 3:return a=r.sent(),e[o]=a.state.toString(),[3,5];case 4:return r.sent(),[3,5];case 5:return n++,[3,1];case 6:return[2,e]}}))}))}()})),[2,Promise.all(n).then((function(e){return O(e,F)}))]}))}))})),a("plugins",(function(){var e=[];if(navigator.plugins)for(var r=0;r<navigator.plugins.length;r++){var n=navigator.plugins[r];e.push([n.name,n.filename,n.description].join("|"))}return new Promise((function(r){r({plugins:e})}))})),a("screen",(function(){return new Promise((function(e){e({is_touchscreen:navigator.maxTouchPoints>0,maxTouchPoints:navigator.maxTouchPoints,colorDepth:screen.colorDepth,mediaMatches:_()})}))})),a("system",(function(){return new Promise((function(e){var r=E();e({platform:window.navigator.platform,cookieEnabled:window.navigator.cookieEnabled,productSub:navigator.productSub,product:navigator.product,useragent:navigator.userAgent,browser:{name:r.name,version:r.version},applePayVersion:B()})}))}));var L,N="SamsungBrowser"!==E().name?1:3,G=null;"undefined"!=typeof document&&((L=document.createElement("canvas")).width=200,L.height=100,G=L.getContext("webgl")),a("webgl",(function(){return e(this,void 0,void 0,(function(){var e;return r(this,(function(r){try{if(!G)throw new Error("WebGL not supported");return e=Array.from({length:N},(function(){return function(){try{if(!G)throw new Error("WebGL not supported");var e="\n          attribute vec2 position;\n          void main() {\n              gl_Position = vec4(position, 0.0, 1.0);\n          }\n      ",r="\n          precision mediump float;\n          void main() {\n              gl_FragColor = vec4(0.812, 0.195, 0.553, 0.921); // Set line color\n          }\n      ",n=G.createShader(G.VERTEX_SHADER),t=G.createShader(G.FRAGMENT_SHADER);if(!n||!t)throw new Error("Failed to create shaders");if(G.shaderSource(n,e),G.shaderSource(t,r),G.compileShader(n),!G.getShaderParameter(n,G.COMPILE_STATUS))throw new Error("Vertex shader compilation failed: "+G.getShaderInfoLog(n));if(G.compileShader(t),!G.getShaderParameter(t,G.COMPILE_STATUS))throw new Error("Fragment shader compilation failed: "+G.getShaderInfoLog(t));var o=G.createProgram();if(!o)throw new Error("Failed to create shader program");if(G.attachShader(o,n),G.attachShader(o,t),G.linkProgram(o),!G.getProgramParameter(o,G.LINK_STATUS))throw new Error("Shader program linking failed: "+G.getProgramInfoLog(o));G.useProgram(o);for(var a=137,i=new Float32Array(4*a),c=2*Math.PI/a,u=0;u<a;u++){var s=u*c;i[4*u]=0,i[4*u+1]=0,i[4*u+2]=Math.cos(s)*(L.width/2),i[4*u+3]=Math.sin(s)*(L.height/2)}var l=G.createBuffer();G.bindBuffer(G.ARRAY_BUFFER,l),G.bufferData(G.ARRAY_BUFFER,i,G.STATIC_DRAW);var d=G.getAttribLocation(o,"position");G.enableVertexAttribArray(d),G.vertexAttribPointer(d,2,G.FLOAT,!1,0,0),G.viewport(0,0,L.width,L.height),G.clearColor(0,0,0,1),G.clear(G.COLOR_BUFFER_BIT),G.drawArrays(G.LINES,0,2*a);var f=new Uint8ClampedArray(L.width*L.height*4);return G.readPixels(0,0,L.width,L.height,G.RGBA,G.UNSIGNED_BYTE,f),new ImageData(f,L.width,L.height)}catch(e){return new ImageData(1,1)}finally{G&&(G.bindBuffer(G.ARRAY_BUFFER,null),G.useProgram(null),G.viewport(0,0,G.drawingBufferWidth,G.drawingBufferHeight),G.clearColor(0,0,0,0))}}()})),[2,{commonImageHash:h(b(e,L.width,L.height).data.toString()).toString()}]}catch(e){return[2,{webgl:"unsupported"}]}return[2]}))}))}));var U=function(e,r,n,t){for(var o=(n-r)/t,a=0,i=0;i<t;i++){a+=e(r+(i+.5)*o)}return a*o};a("math",(function(){return e(void 0,void 0,void 0,(function(){return r(this,(function(e){return[2,{acos:Math.acos(.5),asin:U(Math.asin,-1,1,97),atan:U(Math.atan,-1,1,97),cos:U(Math.cos,0,Math.PI,97),cosh:Math.cosh(9/7),e:Math.E,largeCos:Math.cos(1e20),largeSin:Math.sin(1e20),largeTan:Math.tan(1e20),log:Math.log(1e3),pi:Math.PI,sin:U(Math.sin,-Math.PI,Math.PI,97),sinh:U(Math.sinh,-9/7,7/9,97),sqrt:Math.sqrt(2),tan:U(Math.tan,0,2*Math.PI,97),tanh:U(Math.tanh,-9/7,7/9,97)}]}))}))})),exports.getFingerprint=function(n){return e(this,void 0,void 0,(function(){var e,t;return r(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,w()];case 1:return e=r.sent(),t=h(JSON.stringify(e)),n?[2,{hash:t.toString(),data:e}]:[2,t.toString()];case 2:throw r.sent();case 3:return[2]}}))}))},exports.getFingerprintData=w,exports.getFingerprintPerformance=function(){return e(this,void 0,void 0,(function(){var e,n,t,a;return r(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),e=i(),n=Object.keys(e),[4,v(Object.values(e),g,o)];case 1:return t=r.sent(),a={elapsed:{}},t.forEach((function(e,r){a[n[r]]=e.value,a.elapsed[n[r]]=e.elapsed})),[2,a];case 2:throw r.sent();case 3:return[2]}}))}))},exports.getVersion=function(){return"0.14.8.1"},exports.setOption=function(e,r){if(!["exclude","permissions_to_check","retries"].includes(e))throw new Error("Unknown option "+e);if(["exclude","permissions_to_check"].includes(e)&&(!Array.isArray(r)||!r.every((function(e){return"string"==typeof e}))))throw new Error("The value of the exclude and permissions_to_check must be an array of strings");if("retries"===e&&"number"!=typeof r)throw new Error("The value of retries must be a number");n[e]=r};
//# sourceMappingURL=thumbmark.cjs.js.map
