(this.webpackJsonpgrifone=this.webpackJsonpgrifone||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/grifone_bianco.5bcb74ff.png"},39:function(e,t,a){e.exports=a(50)},44:function(e,t,a){},45:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),i=a.n(o),l=(a(44),a(31)),c=a(29),s=a.n(c),m=a(83),u=a(84),d=a(85),f=(a(45),a(87)),g=a(86),p=a(82),E=a(80),h=a(81),v=a(79),w=[[203,202,201],[206,204,205],[209,207,208],[303,301,302],[306,304,305],["M9",307,308],[403,401,402],[406,404,405],["T3","T1","T2"],["T6","T4","T5"],["T9","T7","T8"],[103,101,102],[106,104,105],[109,107,108]],b=new Date(2023,7,31),y=new Date;var C=function(){for(var e=r.a.useState(y.getMonth()>=8||y.getMonth()<5),t=Object(l.a)(e,2),a=t[0],n=t[1],o=Math.floor(Math.floor(Math.abs((b-y)/864e5))/4)%w.length,i=new Array(w.length),c=function(){n(!1)},C=0;C<i.length;C++){var k=2*o;i[(C+o)%w.length]=[w[C][k%3],w[C][(k+1)%3],w[C][(k+2)%3]]}return r.a.createElement("div",{className:"App"},r.a.createElement(g.a,{open:a,onClose:c,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(v.a,{id:"alert-dialog-title"},"Posizione libera"),r.a.createElement(E.a,null,r.a.createElement(h.a,{id:"alert-dialog-description"},"Dal 3 settembre al 31 maggio gli ombrelloni non sono assegnati.")),r.a.createElement(p.a,null,r.a.createElement(f.a,{onClick:c,color:"primary",autoFocus:!0},"Ok"))),r.a.createElement(m.a,{position:"static",style:{background:"#2196f3"},elevation:0},r.a.createElement(u.a,null,r.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}))),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 250"},r.a.createElement("path",{fill:"#2196f3",fillOpacity:"1",d:"M0,224L30,197.3C60,171,120,117,180,96C240,75,300,85,360,117.3C420,149,480,203,540,224C600,245,660,235,720,208C780,181,840,139,900,144C960,149,1020,203,1080,208C1140,213,1200,171,1260,160C1320,149,1380,171,1410,181.3L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"})),r.a.createElement("header",{className:"App-header"},r.a.createElement(d.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},i.map((function(e,t){return r.a.createElement(d.a,{container:!0,direction:"row",justify:"center",alignItems:"center",key:t+100},r.a.createElement(d.a,{item:!0,key:t},r.a.createElement("p",{style:{color:"#fffff",margin:"1vw"},key:t},t+1)),e.map((function(e){return r.a.createElement(d.a,{item:!0,key:e},r.a.createElement("div",{className:"rectangle",key:e},r.a.createElement("span",null,e)))})))})))),r.a.createElement("footer",{style:{marginTop:"20px"}},r.a.createElement(d.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3},r.a.createElement(d.a,{item:!0},r.a.createElement("div",{className:"albero"})),r.a.createElement(d.a,{item:!0},r.a.createElement("div",{className:"albero"})),r.a.createElement(d.a,{item:!0},r.a.createElement("div",{className:"albero"})),r.a.createElement(d.a,{item:!0},r.a.createElement("div",{className:"albero"}))),r.a.createElement(d.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1},r.a.createElement(d.a,{item:!0,xs:!0},r.a.createElement("p",null,"_ _ _ _ _ _ _ _")),r.a.createElement(d.a,{item:!0,xs:!0},r.a.createElement("p",{style:{color:"#676767",fontSize:13}},"Giulio 2020 - #",o)),r.a.createElement(d.a,{item:!0,xs:!0},r.a.createElement("p",null,"_ _ _ _ _ _ _ _")))))},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):_(t,e)}))}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.8bbff47a.chunk.js.map