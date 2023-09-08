"use strict";(self.webpackChunkhl_810_pro=self.webpackChunkhl_810_pro||[]).push([[6848],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),d=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=d(n),s=r,k=c["".concat(o,".").concat(s)]||c[s]||m[s]||a;return n?i.createElement(k,l(l({ref:t},u),{},{components:n})):i.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var d=2;d<a;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var i=n(7462),r=(n(7294),n(3905));const a={},l="MQTT\u8bf4\u660e",p={unversionedId:"guides/function/zigbee/sa/mqtt",id:"guides/function/zigbee/sa/mqtt",title:"MQTT\u8bf4\u660e",description:"\u7f51\u5173\u7684\u4e3b\u9898\u683c\u5f0f\u5747\u4e3a\u4e00\u4e0b\u4e09\u79cd\uff1a",source:"@site/docs/guides/04-function/02-zigbee/02-sa/03-mqtt.md",sourceDirName:"guides/04-function/02-zigbee/02-sa",slug:"/guides/function/zigbee/sa/mqtt",permalink:"/docs/guides/function/zigbee/sa/mqtt",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/04-function/02-zigbee/02-sa/03-mqtt.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"guides",previous:{title:"\u4f7f\u7528\u4e0e\u8bbe\u7f6e",permalink:"/docs/guides/function/zigbee/sa/usage-settings"},next:{title:"\u591a\u7f51\u5173\u90e8\u7f72",permalink:"/docs/guides/function/zigbee/sa/multi-gateway"}},o={},d=[{value:"zigbee\u4f20\u611f\u5668",id:"zigbee\u4f20\u611f\u5668",level:3},{value:"zigbee\u4e3b\u52a8\u63a7\u5236\u8bbe\u5907",id:"zigbee\u4e3b\u52a8\u63a7\u5236\u8bbe\u5907",level:3},{value:"\u4e3e\u4f8b",id:"\u4e3e\u4f8b",level:4},{value:"\u63d2\u5ea7\u6216\u8005\u5899\u58c1\u5f00\u5173",id:"\u63d2\u5ea7\u6216\u8005\u5899\u58c1\u5f00\u5173",level:5},{value:"\u8c03\u5149\u8c03\u8272\u706f",id:"\u8c03\u5149\u8c03\u8272\u706f",level:5},{value:"\u5f00\u542f\u914d\u5bf9\u6a21\u5f0f",id:"\u5f00\u542f\u914d\u5bf9\u6a21\u5f0f",level:3},{value:"\u5173\u95ed\u914d\u5bf9\u6a21\u5f0f",id:"\u5173\u95ed\u914d\u5bf9\u6a21\u5f0f",level:3},{value:"\u81ea\u5b9a\u4e49\u8bbe\u5907\u540d\u79f0",id:"\u81ea\u5b9a\u4e49\u8bbe\u5907\u540d\u79f0",level:3},{value:"\u4ece\u7f51\u7edc\u4e2d\u79fb\u9664\u8bbe\u5907",id:"\u4ece\u7f51\u7edc\u4e2d\u79fb\u9664\u8bbe\u5907",level:3},{value:"\u4eceUI\u5217\u8868\u4e2d\u79fb\u9664\u8bbe\u5907",id:"\u4eceui\u5217\u8868\u4e2d\u79fb\u9664\u8bbe\u5907",level:3}],u={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mqtt\u8bf4\u660e"},"MQTT\u8bf4\u660e"),(0,r.kt)("p",null,"\u7f51\u5173\u7684\u4e3b\u9898\u683c\u5f0f\u5747\u4e3a\u4e00\u4e0b\u4e09\u79cd\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tele/HL810PRO_[\u7f51\u5173MAC\u540e\u516d\u4f4d]/*"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"stat/HL810PRO_[\u7f51\u5173MAC\u540e\u516d\u4f4d]/*"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"cmnd/HL810PRO_[\u7f51\u5173MAC\u540e\u516d\u4f4d]/*")," "),(0,r.kt)("p",null,"\u540e\u9762\u7684\u8bf4\u660e\u5747\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"HL810PRO_460560"),"\u4e3a\u4f8b"),(0,r.kt)("h3",{id:"zigbee\u4f20\u611f\u5668"},"zigbee\u4f20\u611f\u5668"),(0,r.kt)("p",null,"\u9ed8\u8ba4MQTT\u4e3b\u9898\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tele/HL810PRO_460560/SENSOR\n")),(0,r.kt)("p",null,"\u6b64\u4e3a\u4f20\u611f\u5668\u72b6\u6001\u4e3b\u9898\uff0c\u88ab\u52a8\u63a5\u6536\u3002"),(0,r.kt)("h3",{id:"zigbee\u4e3b\u52a8\u63a7\u5236\u8bbe\u5907"},"zigbee\u4e3b\u52a8\u63a7\u5236\u8bbe\u5907"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8fd9\u7c7b\u662f\u6307\u53ef\u4ee5\u53d1\u9001\u547d\u4ee4\u6539\u53d8\u8be5\u8bbe\u5907\u7684\u901a\u65ad\u3001\u5f62\u6001\u3001\u989c\u8272\u7b49\u8bbe\u5907\u3002"),(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"\u4f8b\u5982\u5c0f\u7c73\u7684\u5899\u58c1\u5f00\u5173\uff0c\u6d82\u9e26\u8c03\u5149\u706f\u7b49\u3002"))),(0,r.kt)("p",null,"\u9ed8\u8ba4MQTT\u63a7\u5236\u547d\u4ee4\u6d88\u606f\u683c\u5f0f\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"Device":"<device_id>","Send":{"<\u547d\u4ee4>":<\u503c>}}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tasmota.github.io/docs/Zigbee/#sending-device-commands"},"\u547d\u4ee4\u5217\u8868\uff0c\u8bf7\u67e5\u770b\u6b64\u94fe\u63a5")),(0,r.kt)("h4",{id:"\u4e3e\u4f8b"},"\u4e3e\u4f8b"),(0,r.kt)("h5",{id:"\u63d2\u5ea7\u6216\u8005\u5899\u58c1\u5f00\u5173"},"\u63d2\u5ea7\u6216\u8005\u5899\u58c1\u5f00\u5173"),(0,r.kt)("p",null,"MQTT\u4e3b\u9898\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"cmnd/HL810PRO_460560/ZbSend")),(0,r.kt)("p",null,"MQTT\u6d88\u606f\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'{ "device":"0x4773", "send":{"Power":"On"} }'),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'{ "device":"0x4773", "send":{"Power":1} }'),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'{ "device":"0x4773", "send":{"Power":false} }'),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'{ "device":"0x4773", "send":{"Power":"Toggle"} }'),"  "),(0,r.kt)("h5",{id:"\u8c03\u5149\u8c03\u8272\u706f"},"\u8c03\u5149\u8c03\u8272\u706f"),(0,r.kt)("p",null,"MQTT\u4e3b\u9898\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"cmnd/HL810PRO_460560/ZbSend")),(0,r.kt)("p",null,"MQTT\u6d88\u606f\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'{ "device":"0x3D82", "send":{"Power":"Off"} }'),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'{ "device":"0x3D82", "send":{"Dimmer":128} }'),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'{ "device":"0x3D82", "endpoint":"0x0B", "send":{"Dimmer":0} }'),"  "),(0,r.kt)("h3",{id:"\u5f00\u542f\u914d\u5bf9\u6a21\u5f0f"},"\u5f00\u542f\u914d\u5bf9\u6a21\u5f0f"),(0,r.kt)("p",null,"MQTT\u4e3b\u9898\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"cmnd/HL810PRO_460560/ZbPermitJoin")),(0,r.kt)("p",null,"MQTT\u6d88\u606f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"1")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"60\u79d2\u6709\u6548\uff0c\u8fc7\u671f\u81ea\u52a8\u5173\u95ed\u914d\u5bf9\u6a21\u5f0f")),(0,r.kt)("h3",{id:"\u5173\u95ed\u914d\u5bf9\u6a21\u5f0f"},"\u5173\u95ed\u914d\u5bf9\u6a21\u5f0f"),(0,r.kt)("p",null,"MQTT\u4e3b\u9898\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"cmnd/HL810PRO_460560/ZbPermitJoin")),(0,r.kt)("p",null,"MQTT\u6d88\u606f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"0")),(0,r.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u8bbe\u5907\u540d\u79f0"},"\u81ea\u5b9a\u4e49\u8bbe\u5907\u540d\u79f0"),(0,r.kt)("p",null,"MQTT\u4e3b\u9898\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"cmnd/HL810PRO_460560/ZbName")),(0,r.kt)("p",null,"MQTT\u6d88\u606f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"<device_ID>,<\u81ea\u5b9a\u4e49\u7684\u540d\u79f0>"),"  \u4f8b ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1234,\u5ba2\u5385\u5c0f\u7c73\u65e0\u7ebf\u5f00\u5173")),(0,r.kt)("h3",{id:"\u4ece\u7f51\u7edc\u4e2d\u79fb\u9664\u8bbe\u5907"},"\u4ece\u7f51\u7edc\u4e2d\u79fb\u9664\u8bbe\u5907"),(0,r.kt)("p",null,"MQTT\u4e3b\u9898\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"cmnd/HL810PRO_460560/ZbLeave")),(0,r.kt)("p",null,"MQTT\u6d88\u606f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"<device_id>"),"  \u4f8b ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1234")),(0,r.kt)("h3",{id:"\u4eceui\u5217\u8868\u4e2d\u79fb\u9664\u8bbe\u5907"},"\u4eceUI\u5217\u8868\u4e2d\u79fb\u9664\u8bbe\u5907"),(0,r.kt)("p",null,"MQTT\u4e3b\u9898\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"cmnd/HL810PRO_460560/ZbForget")),(0,r.kt)("p",null,"MQTT\u6d88\u606f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"<device_id>"),"  \u4f8b ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1234")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tasmota.github.io/docs/Zigbee/"},"\u66f4\u591a\u8bbe\u7f6e\u8bf7\u67e5\u770b\u6b64\u94fe\u63a5")))}m.isMDXComponent=!0}}]);