"use strict";(self.webpackChunkhl_810_pro=self.webpackChunkhl_810_pro||[]).push([[5156],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8469:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},i="\u914d\u7f6eMQTT",p={unversionedId:"guides/usage/mqtt",id:"guides/usage/mqtt",title:"\u914d\u7f6eMQTT",description:"\u670d\u52a1\u5668\u8bbe\u7f6e",source:"@site/docs/guides/03-usage/04-mqtt.md",sourceDirName:"guides/03-usage",slug:"/guides/usage/mqtt",permalink:"/docs/guides/usage/mqtt",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/03-usage/04-mqtt.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"guides",previous:{title:"\u754c\u9762\u4ecb\u7ecd",permalink:"/docs/guides/usage/Interface"},next:{title:"\u56fa\u4ef6\u66f4\u65b0",permalink:"/docs/guides/usage/firmware-update"}},l={},u=[{value:"\u670d\u52a1\u5668\u8bbe\u7f6e",id:"\u670d\u52a1\u5668\u8bbe\u7f6e",level:2},{value:"MQTT\u4e3b\u9898",id:"mqtt\u4e3b\u9898",level:2}],c={toc:u},s="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(s,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u914d\u7f6emqtt"},"\u914d\u7f6eMQTT"),(0,a.kt)("h2",{id:"\u670d\u52a1\u5668\u8bbe\u7f6e"},"\u670d\u52a1\u5668\u8bbe\u7f6e"),(0,a.kt)("p",null,"\u8fdb\u5165\u7f51\u5173\u540e\u53f0\u7ba1\u7406\u4e3b\u754c\u9762\uff0c\u4f9d\u6b21\u8fdb\u5165\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"\u8bbe\u7f6e"),"--\x3e",(0,a.kt)("inlineCode",{parentName:"p"},"MQTT\u8bbe\u7f6e"),"\uff0c\u7136\u540e\u586b\u5199mqtt\u7684\u5730\u5740\u3001\u7528\u6237\u540d\u3001\u5bc6\u7801\u7b49\u4fe1\u606f\uff0c\u5176\u4ed6\u4fe1\u606f\u65e0\u9700\u4fee\u6539\uff0c\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u4fdd\u5b58"),"\u3002- > \u5982\u4e0b\u56fe\u6240\u793a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5079).Z,width:"1103",height:"974"})),(0,a.kt)("h2",{id:"mqtt\u4e3b\u9898"},"MQTT\u4e3b\u9898"),(0,a.kt)("p",null,"\u9ed8\u8ba4mqtt\u7684\u4e3b\u9898\u4e3a  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tele/HL810PRO_[\u7f51\u5173MAC\u540e\u516d\u4f4d]/*"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"stat/HL810PRO_[\u7f51\u5173MAC\u540e\u516d\u4f4d]/*"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"cmnd/HL810PRO_[\u7f51\u5173MAC\u540e\u516d\u4f4d]/*"),"  "),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tele/HL810PRO_460560/SENSOR")))}d.isMDXComponent=!0},5079:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mqtt-9a76a46f5b5dcaa4c654f363babb57c3.jpg"}}]);