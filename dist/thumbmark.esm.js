function e(e,n,r,t){return new(r||(r=Promise))((function(o,a){function i(e){try{u(t.next(e))}catch(e){a(e)}}function c(e){try{u(t.throw(e))}catch(e){a(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,c)}u((t=t.apply(e,n||[])).next())}))}function n(e,n){var r,t,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(u){return function(c){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(r=1,t&&(o=2&c[0]?t.return:c[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,c[1])).done)return o;switch(t=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,t=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=n.call(e,i)}catch(e){c=[6,e],t=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}"function"==typeof SuppressedError&&SuppressedError;var r={exclude:[]};function t(e,n){if(!["exclude","permissions_to_check","retries","timeout"].includes(e))throw new Error("Unknown option "+e);if(["exclude","permissions_to_check"].includes(e)&&(!Array.isArray(n)||!n.every((function(e){return"string"==typeof e}))))throw new Error("The value of the exclude and permissions_to_check must be an array of strings");if(["retries","timeout"].includes(e)&&"number"!=typeof n)throw new Error("The value of retries must be a number");r[e]=n,console.log("Option ".concat(e," set to ").concat(n)),console.log(r)}var o={},a={timeout:"true"},i=function(e,n){"undefined"!=typeof window&&(o[e]=n)},c=function(){return Object.fromEntries(Object.entries(o).filter((function(e){var n,t=e[0];return!(null===(n=null==r?void 0:r.exclude)||void 0===n?void 0:n.includes(t))})).map((function(e){return[e[0],(0,e[1])()]})))},u=3432918353,s=461845907,l=3864292196,d=2246822507,f=3266489909;function h(e,n){return e<<n|e>>>32-n}function m(e,n){void 0===n&&(n=0);for(var r=n,t=0,o=3&e.length,a=e.length-o,i=0;i<a;)t=255&e.charCodeAt(i)|(255&e.charCodeAt(++i))<<8|(255&e.charCodeAt(++i))<<16|(255&e.charCodeAt(++i))<<24,++i,t=h(t=Math.imul(t,u),15),r=h(r^=t=Math.imul(t,s),13),r=Math.imul(r,5)+l;switch(t=0,o){case 3:t^=(255&e.charCodeAt(i+2))<<16;case 2:t^=(255&e.charCodeAt(i+1))<<8;case 1:t^=255&e.charCodeAt(i),t=h(t=Math.imul(t,u),15),r^=t=Math.imul(t,s)}return((r=function(e){return e^=e>>>16,e=Math.imul(e,d),e^=e>>>13,e=Math.imul(e,f),e^e>>>16}(r^=e.length))>>>0).toString(36)}function v(e,n){return new Promise((function(r){setTimeout((function(){return r(n)}),e)}))}function p(e,n,r){return Promise.all(e.map((function(e){var t=performance.now();return Promise.race([e.then((function(e){return{value:e,elapsed:performance.now()-t}})),v(n,r).then((function(e){return{value:e,elapsed:performance.now()-t}}))])})))}function g(e,n,r){return Promise.all(e.map((function(e){return Promise.race([e,v(n,r)])})))}function w(){return e(this,void 0,void 0,(function(){var e,t,o,i,u;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=c(),t=Object.keys(e),[4,g(Object.values(e),(null==r?void 0:r.timeout)||1e3,a)];case 1:return o=n.sent(),console.log(null==r?void 0:r.timeout),i=o.filter((function(e){return void 0!==e})),u={},i.forEach((function(e,n){u[t[n]]=e})),[2,S(u,r.exclude||[])];case 2:throw n.sent();case 3:return[2]}}))}))}function S(e,n){var r={},t=function(t){if(e.hasOwnProperty(t)){var o=e[t];if("object"!=typeof o||Array.isArray(o))n.includes(t)||(r[t]=o);else{var a=S(o,n.map((function(e){return e.startsWith(t+".")?e.slice(t.length+1):e})));Object.keys(a).length>0&&(r[t]=a)}}};for(var o in e)t(o);return r}function y(r){return e(this,void 0,void 0,(function(){var e,t;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,w()];case 1:return e=n.sent(),t=m(JSON.stringify(e)),r?[2,{hash:t.toString(),data:e}]:[2,t.toString()];case 2:throw n.sent();case 3:return[2]}}))}))}function b(){return e(this,void 0,void 0,(function(){var e,t,o,i;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=c(),t=Object.keys(e),[4,p(Object.values(e),(null==r?void 0:r.timeout)||1e3,a)];case 1:return o=n.sent(),i={elapsed:{}},o.forEach((function(e,n){i[t[n]]=e.value,i.elapsed[t[n]]=e.elapsed})),[2,i];case 2:throw n.sent();case 3:return[2]}}))}))}function P(e){for(var n=0,r=0;r<e.length;++r)n+=Math.abs(e[r]);return n}function E(e,n,r){for(var t=[],o=0;o<e[0].data.length;o++){for(var a=[],i=0;i<e.length;i++)a.push(e[i].data[o]);t.push(M(a))}var c=new Uint8ClampedArray(t);return new ImageData(c,n,r)}function M(e){if(0===e.length)return 0;for(var n={},r=0,t=e;r<t.length;r++){n[a=t[r]]=(n[a]||0)+1}var o=e[0];for(var a in n)n[a]>n[o]&&(o=parseInt(a,10));return o}function C(){if("undefined"==typeof navigator)return{name:"unknown",version:"unknown"};for(var e=navigator.userAgent,n={Edg:"Edge",OPR:"Opera"},r=0,t=[/(?<name>Edge|Edg)\/(?<version>\d+(?:\.\d+)?)/,/(?<name>(?:Chrome|Chromium|OPR|Opera|Vivaldi|Brave))\/(?<version>\d+(?:\.\d+)?)/,/(?<name>(?:Firefox|Waterfox|Iceweasel|IceCat))\/(?<version>\d+(?:\.\d+)?)/,/(?<name>Safari)\/(?<version>\d+(?:\.\d+)?)/,/(?<name>MSIE|Trident|IEMobile).+?(?<version>\d+(?:\.\d+)?)/,/(?<name>[A-Za-z]+)\/(?<version>\d+(?:\.\d+)?)/,/(?<name>SamsungBrowser)\/(?<version>\d+(?:\.\d+)?)/];r<t.length;r++){var o=t[r],a=e.match(o);if(a&&a.groups)return{name:n[a.groups.name]||a.groups.name,version:a.groups.version}}return{name:"unknown",version:"unknown"}}i("audio",(function(){return e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,new Promise((function(e,n){try{var r=new(window.OfflineAudioContext||window.webkitOfflineAudioContext)(1,5e3,44100),t=r.createBufferSource(),o=r.createOscillator();o.frequency.value=1e3;var a,i=r.createDynamicsCompressor();i.threshold.value=-50,i.knee.value=40,i.ratio.value=12,i.attack.value=0,i.release.value=.2,o.connect(i),i.connect(r.destination),o.start(),r.oncomplete=function(n){a=n.renderedBuffer.getChannelData(0),e({sampleHash:P(a),oscillator:o.type,maxChannels:r.destination.maxChannelCount,channelCountMode:t.channelCountMode})},r.startRendering()}catch(e){console.error("Error creating audio fingerprint:",e),n(e)}}))]}))}))}));var A="SamsungBrowser"!==C().name?1:3,x=280,T=20;"Firefox"!=C().name&&i("canvas",(function(){return document.createElement("canvas").getContext("2d"),new Promise((function(e){var n=Array.from({length:A},(function(){return function(){var e=document.createElement("canvas"),n=e.getContext("2d");if(!n)return new ImageData(1,1);e.width=x,e.height=T;var r=n.createLinearGradient(0,0,e.width,e.height);r.addColorStop(0,"red"),r.addColorStop(1/6,"orange"),r.addColorStop(2/6,"yellow"),r.addColorStop(.5,"green"),r.addColorStop(4/6,"blue"),r.addColorStop(5/6,"indigo"),r.addColorStop(1,"violet"),n.fillStyle=r,n.fillRect(0,0,e.width,e.height);var t="Random Text WMwmil10Oo";n.font="23.123px Arial",n.fillStyle="black",n.fillText(t,-5,15),n.fillStyle="rgba(0, 0, 255, 0.5)",n.fillText(t,-3.3,17.7),n.beginPath(),n.moveTo(0,0),n.lineTo(2*e.width/7,e.height),n.strokeStyle="white",n.lineWidth=2,n.stroke();var o=n.getImageData(0,0,e.width,e.height);return o}()}));e({commonImageDataHash:m(E(n,x,T).data.toString()).toString()})}))}));var k=["Arial","Arial Black","Arial Narrow","Arial Rounded MT","Arimo","Archivo","Barlow","Bebas Neue","Bitter","Bookman","Calibri","Cabin","Candara","Century","Century Gothic","Comic Sans MS","Constantia","Courier","Courier New","Crimson Text","DM Mono","DM Sans","DM Serif Display","DM Serif Text","Dosis","Droid Sans","Exo","Fira Code","Fira Sans","Franklin Gothic Medium","Garamond","Geneva","Georgia","Gill Sans","Helvetica","Impact","Inconsolata","Indie Flower","Inter","Josefin Sans","Karla","Lato","Lexend","Lucida Bright","Lucida Console","Lucida Sans Unicode","Manrope","Merriweather","Merriweather Sans","Montserrat","Myriad","Noto Sans","Nunito","Nunito Sans","Open Sans","Optima","Orbitron","Oswald","Pacifico","Palatino","Perpetua","PT Sans","PT Serif","Poppins","Prompt","Public Sans","Quicksand","Rajdhani","Recursive","Roboto","Roboto Condensed","Rockwell","Rubik","Segoe Print","Segoe Script","Segoe UI","Sora","Source Sans Pro","Space Mono","Tahoma","Taviraj","Times","Times New Roman","Titillium Web","Trebuchet MS","Ubuntu","Varela Round","Verdana","Work Sans"],I=["monospace","sans-serif","serif"];function R(e,n){if(!e)throw new Error("Canvas context not supported");return e.font,e.font="72px ".concat(n),e.measureText("WwMmLli0Oo").width}function O(){var e,n=document.createElement("canvas"),r=null!==(e=n.getContext("webgl"))&&void 0!==e?e:n.getContext("experimental-webgl");return r&&"getParameter"in r?{vendor:(r.getParameter(r.VENDOR)||"").toString(),renderer:(r.getParameter(r.RENDERER)||"").toString(),version:(r.getParameter(r.VERSION)||"").toString(),shadingLanguageVersion:(r.getParameter(r.SHADING_LANGUAGE_VERSION)||"").toString()}:"undefined"}function D(){var e=new Float32Array(1),n=new Uint8Array(e.buffer);return e[0]=1/0,e[0]=e[0]-e[0],n[3]}function _(e,n){var r={};return n.forEach((function(n){var t=function(e){if(0===e.length)return null;var n={};e.forEach((function(e){var r=String(e);n[r]=(n[r]||0)+1}));var r=e[0],t=1;return Object.keys(n).forEach((function(e){n[e]>t&&(r=e,t=n[e])})),r}(e.map((function(e){return n in e?e[n]:void 0})).filter((function(e){return void 0!==e})));t&&(r[n]=t)})),r}"Firefox"!=C().name&&i("fonts",(function(){var r=this;return new Promise((function(t,o){try{!function(r){var t;e(this,void 0,void 0,(function(){var e,o,a;return n(this,(function(n){switch(n.label){case 0:return document.body?[3,2]:[4,(i=50,new Promise((function(e){return setTimeout(e,i,c)})))];case 1:return n.sent(),[3,0];case 2:if(e=document.createElement("iframe"),(o=e.style).setProperty("display","block","important"),o.setProperty("visibility","visible"),e.src="about:blank",document.body.appendChild(e),!(a=e.contentDocument||(null===(t=e.contentWindow)||void 0===t?void 0:t.document)))throw new Error("Iframe document is not accessible");return r({iframe:a}),setTimeout((function(){document.body.removeChild(e)}),0),[2]}var i,c}))}))}((function(o){var a=o.iframe;return e(r,void 0,void 0,(function(){var e,r,o,i;return n(this,(function(n){return"Hello, world!",e=a.createElement("canvas"),r=e.getContext("2d"),o=I.map((function(e){return R(r,e)})),i={},k.forEach((function(e){var n=R(r,e);o.includes(n)||(i[e]=n)})),t(i),[2]}))}))}))}catch(e){o({error:"unsupported"})}}))})),i("hardware",(function(){return new Promise((function(e,n){var r=void 0!==navigator.deviceMemory?navigator.deviceMemory:0,t=window.performance&&window.performance.memory?window.performance.memory:0;e({videocard:O(),architecture:D(),deviceMemory:r.toString()||"undefined",jsHeapSizeLimit:t.jsHeapSizeLimit||"undefined"})}))})),i("locales",(function(){return new Promise((function(e){e({languages:navigator.language,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone})}))}));var B=(null==r?void 0:r.permissions_to_check)||["accelerometer","accessibility","accessibility-events","ambient-light-sensor","background-fetch","background-sync","bluetooth","camera","clipboard-read","clipboard-write","device-info","display-capture","gyroscope","geolocation","local-fonts","magnetometer","microphone","midi","nfc","notifications","payment-handler","persistent-storage","push","speaker","storage-access","top-level-storage-access","window-management","query"];function F(){var e=[],n={"prefers-contrast":["high","more","low","less","forced","no-preference"],"any-hover":["hover","none"],"any-pointer":["none","coarse","fine"],pointer:["none","coarse","fine"],hover:["hover","none"],update:["fast","slow"],color:["8","16","256"],"inverted-colors":["inverted","none"],"prefers-reduced-motion":["reduce","no-preference"],"prefers-reduced-transparency":["reduce","no-preference"],scripting:["none","initial-only","enabled"],"forced-colors":["active","none"],"prefers-color-scheme":["dark","light","no-preference"]};return Object.keys(n).forEach((function(r){n[r].forEach((function(n){matchMedia("(".concat(r,": ").concat(n,")")).matches&&e.push("".concat(r,": ").concat(n))}))})),e}function L(){if("https:"===window.location.protocol&&"function"==typeof window.ApplePaySession)try{for(var e=window.ApplePaySession.supportsVersion,n=15;n>0;n--)if(e(n))return n}catch(e){return 0}return 0}i("permissions",(function(){return e(this,void 0,void 0,(function(){var t;return n(this,(function(o){return t=Array.from({length:(null==r?void 0:r.retries)||3},(function(){return function(){return e(this,void 0,void 0,(function(){var e,r,t,o,a;return n(this,(function(n){switch(n.label){case 0:e={},r=0,t=B,n.label=1;case 1:if(!(r<t.length))return[3,6];o=t[r],n.label=2;case 2:return n.trys.push([2,4,,5]),[4,navigator.permissions.query({name:o})];case 3:return a=n.sent(),e[o]=a.state.toString(),[3,5];case 4:return n.sent(),[3,5];case 5:return r++,[3,1];case 6:return[2,e]}}))}))}()})),[2,Promise.all(t).then((function(e){return _(e,B)}))]}))}))})),i("plugins",(function(){var e=[];if(navigator.plugins)for(var n=0;n<navigator.plugins.length;n++){var r=navigator.plugins[n];e.push([r.name,r.filename,r.description].join("|"))}return new Promise((function(n){n({plugins:e})}))})),i("screen",(function(){return new Promise((function(e){e({is_touchscreen:navigator.maxTouchPoints>0,maxTouchPoints:navigator.maxTouchPoints,colorDepth:screen.colorDepth,mediaMatches:F()})}))})),i("system",(function(){return new Promise((function(e){var n=C();e({platform:window.navigator.platform,cookieEnabled:window.navigator.cookieEnabled,productSub:navigator.productSub,product:navigator.product,useragent:navigator.userAgent,browser:{name:n.name,version:n.version},applePayVersion:L()})}))}));var N,G="SamsungBrowser"!==C().name?1:3,U=null;"undefined"!=typeof document&&((N=document.createElement("canvas")).width=200,N.height=100,U=N.getContext("webgl")),i("webgl",(function(){return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){try{if(!U)throw new Error("WebGL not supported");return e=Array.from({length:G},(function(){return function(){try{if(!U)throw new Error("WebGL not supported");var e="\n          attribute vec2 position;\n          void main() {\n              gl_Position = vec4(position, 0.0, 1.0);\n          }\n      ",n="\n          precision mediump float;\n          void main() {\n              gl_FragColor = vec4(0.812, 0.195, 0.553, 0.921); // Set line color\n          }\n      ",r=U.createShader(U.VERTEX_SHADER),t=U.createShader(U.FRAGMENT_SHADER);if(!r||!t)throw new Error("Failed to create shaders");if(U.shaderSource(r,e),U.shaderSource(t,n),U.compileShader(r),!U.getShaderParameter(r,U.COMPILE_STATUS))throw new Error("Vertex shader compilation failed: "+U.getShaderInfoLog(r));if(U.compileShader(t),!U.getShaderParameter(t,U.COMPILE_STATUS))throw new Error("Fragment shader compilation failed: "+U.getShaderInfoLog(t));var o=U.createProgram();if(!o)throw new Error("Failed to create shader program");if(U.attachShader(o,r),U.attachShader(o,t),U.linkProgram(o),!U.getProgramParameter(o,U.LINK_STATUS))throw new Error("Shader program linking failed: "+U.getProgramInfoLog(o));U.useProgram(o);for(var a=137,i=new Float32Array(4*a),c=2*Math.PI/a,u=0;u<a;u++){var s=u*c;i[4*u]=0,i[4*u+1]=0,i[4*u+2]=Math.cos(s)*(N.width/2),i[4*u+3]=Math.sin(s)*(N.height/2)}var l=U.createBuffer();U.bindBuffer(U.ARRAY_BUFFER,l),U.bufferData(U.ARRAY_BUFFER,i,U.STATIC_DRAW);var d=U.getAttribLocation(o,"position");U.enableVertexAttribArray(d),U.vertexAttribPointer(d,2,U.FLOAT,!1,0,0),U.viewport(0,0,N.width,N.height),U.clearColor(0,0,0,1),U.clear(U.COLOR_BUFFER_BIT),U.drawArrays(U.LINES,0,2*a);var f=new Uint8ClampedArray(N.width*N.height*4);return U.readPixels(0,0,N.width,N.height,U.RGBA,U.UNSIGNED_BYTE,f),new ImageData(f,N.width,N.height)}catch(e){return new ImageData(1,1)}finally{U&&(U.bindBuffer(U.ARRAY_BUFFER,null),U.useProgram(null),U.viewport(0,0,U.drawingBufferWidth,U.drawingBufferHeight),U.clearColor(0,0,0,0))}}()})),[2,{commonImageHash:m(E(e,N.width,N.height).data.toString()).toString()}]}catch(e){return[2,{webgl:"unsupported"}]}return[2]}))}))}));var j=function(e,n,r,t){for(var o=(r-n)/t,a=0,i=0;i<t;i++){a+=e(n+(i+.5)*o)}return a*o};function V(){return"0.14.9.1"}i("math",(function(){return e(void 0,void 0,void 0,(function(){return n(this,(function(e){return[2,{acos:Math.acos(.5),asin:j(Math.asin,-1,1,97),atan:j(Math.atan,-1,1,97),cos:j(Math.cos,0,Math.PI,97),cosh:Math.cosh(9/7),e:Math.E,largeCos:Math.cos(1e20),largeSin:Math.sin(1e20),largeTan:Math.tan(1e20),log:Math.log(1e3),pi:Math.PI,sin:j(Math.sin,-Math.PI,Math.PI,97),sinh:j(Math.sinh,-9/7,7/9,97),sqrt:Math.sqrt(2),tan:j(Math.tan,0,2*Math.PI,97),tanh:j(Math.tanh,-9/7,7/9,97)}]}))}))}));export{y as getFingerprint,w as getFingerprintData,b as getFingerprintPerformance,V as getVersion,t as setOption};
//# sourceMappingURL=thumbmark.esm.js.map
