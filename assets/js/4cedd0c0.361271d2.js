"use strict";(self.webpackChunkhl_810_pro=self.webpackChunkhl_810_pro||[]).push([[2390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),u=n(6550),i=n(1980),s=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,s]=f({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=i??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),b(e)}),[s,b,o]),tabValues:o}}var g=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==u&&(p(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":u===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},3516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),l=n(5162);const u={},i="USB",s={unversionedId:"guides/function/zigbee/nsa/USB",id:"guides/function/zigbee/nsa/USB",title:"USB",description:"\u62e8\u52a8\u5f00\u5173",source:"@site/docs/guides/04-function/02-zigbee/03-nsa/02-USB.md",sourceDirName:"guides/04-function/02-zigbee/03-nsa",slug:"/guides/function/zigbee/nsa/USB",permalink:"/docs/guides/function/zigbee/nsa/USB",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/04-function/02-zigbee/03-nsa/02-USB.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"guides",previous:{title:"TCP",permalink:"/docs/guides/function/zigbee/nsa/TCP"},next:{title:"\u6811\u8393\u6d3e",permalink:"/docs/guides/function/zigbee/nsa/\u6811\u8393\u6d3e"}},c={},p=[{value:"\u62e8\u52a8\u5f00\u5173",id:"\u62e8\u52a8\u5f00\u5173",level:2},{value:"\u4e0a\u4f4d\u673a\u914d\u7f6e",id:"\u4e0a\u4f4d\u673a\u914d\u7f6e",level:2}],d={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usb"},"USB"),(0,a.kt)("h2",{id:"\u62e8\u52a8\u5f00\u5173"},"\u62e8\u52a8\u5f00\u5173"),(0,a.kt)("p",null,"\u62e8\u52a8\u5f00\u5173\u5207\u6362\u5230\u5982\u4e0b\u72b6\u6001\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"1"),(0,a.kt)("th",{parentName:"tr",align:"center"},"OFF"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"OFF")))),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u8fdb\u884c\u4e0b\u4e00\u6b65\u4e4b\u524d\uff0c\u8bf7\u52a1\u5fc5\u786e\u8ba4\u62e8\u52a8\u5f00\u5173\u662f\u5426\u5df2\u8bbe\u7f6e\u6b63\u786e\uff0c\u5426\u5219zigbee\u529f\u80fd\u5728\u6b64\u6a21\u5f0f\u4e0b\u5c06\u4e0d\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002")),(0,a.kt)("h2",{id:"\u4e0a\u4f4d\u673a\u914d\u7f6e"},"\u4e0a\u4f4d\u673a\u914d\u7f6e"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"Z2M",label:"Z2M",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"\u6253\u5f00z2m\u7684\u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.yaml")," ,\u4fee\u6539\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u5f00\u542fha\u81ea\u52a8\u53d1\u73b0\nhomeassistant: true\n\n# \u5f00\u542f\u914d\u5bf9\u6a21\u5f0f\npermit_join: true\n\n# \u5f00\u542f\u524d\u7aef\u7f51\u9875\u7ba1\u7406(\u9ed8\u8ba4\u7aef\u53e3\u53f7\u4e3a8080)\nfrontend: true\n\n# MQTT\u914d\u7f6e\nmqtt:\n  # mqtt\u53d1\u5e03\u4e3b\u9898\u524d\u7f00\n  base_topic: zigbee2mqtt\n  # mqtt\u670d\u52a1\u5668\u5730\u5740(\u8bf7\u52a1\u5fc5\u6539\u6210\u81ea\u5df1\u7684\u670d\u52a1\u5668\u5730\u5740)\n  server: 'mqtt://192.168.100.1:1883'\n  # mqtt\u8d26\u53f7\u5bc6\u7801\uff0c\u5982\u679c\u6709\u8d26\u53f7\u5bc6\u7801\u8bf7\u53bb\u6389\u524d\u9762\u7684\u6ce8\u91ca\uff0c\u5982\u679c\u6ca1\u6709\u65e0\u9700\u4fee\u6539\u3002\n  # user: my_user\n  # password: my_password\n\n# \u4e32\u53e3\u8bbe\u7f6e(\u52a1\u5fc5\u8ddf\u6b64\u5904\u914d\u7f6e\u4e00\u81f4\uff0c\u8bf7\u52ff\u4fee\u6539)\nserial:\n  port: /dev/ttyUSB0\n"))),(0,a.kt)(l.Z,{value:"ZHA",label:"ZHA",mdxType:"TabItem"},(0,a.kt)("p",null,"homeassistant\u641c\u7d22\u96c6\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"zha")," \u5e76\u6dfb\u52a0 ---\x3e \u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/ttyUSB0 - USB Serial, s/n: n/a"),"\u63d0\u4ea4(\u5982\u679c\u6ca1\u51fa\u73b0\u6b64\u4e32\u53e3\u5730\u5740\uff0c\u90a3\u4e48\u8bc1\u660e\u6ca1\u6709\u6210\u529f\u5c06\u4e32\u53e3\u5f15\u5165\u5230hass\u5bb9\u5668\u5185\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u8bbe\u7f6e)"))),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679cdocker\u90e8\u7f72\u7684zigbee2mqtt\u6216\u8005homeassistant\uff0c\u8bf7\u5728docker\u90e8\u7f72\u547d\u4ee4\u4e2d\u52a0\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"--device=/dev/ttyUSB0"),"\u53c2\u6570\uff0c\u5c06\u4e32\u53e3\u5f15\u5165\u5230docker\u5bb9\u5668\u4e2d\uff0c\u5426\u5219\u5bb9\u5668\u65e0\u6cd5\u4f7f\u7528\u4e32\u53e3\u3002")))}f.isMDXComponent=!0}}]);