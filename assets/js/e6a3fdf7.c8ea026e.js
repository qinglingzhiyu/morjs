"use strict";(self.webpackChunkmorjs_site=self.webpackChunkmorjs_site||[]).push([[4672],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(1163),o=(n(9496),n(9613));const a={},i="\u76ee\u5f55\u7ed3\u6784",s={unversionedId:"guides/basic/directory-structure",id:"guides/basic/directory-structure",title:"\u76ee\u5f55\u7ed3\u6784",description:"\u8fd9\u91cc\u7f57\u5217\u4e86 MorJS \u9879\u76ee\u4e2d\u7ea6\u5b9a(\u6216\u63a8\u8350)\u7684\u76ee\u5f55\u7ed3\u6784\uff0c\u5728\u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u8bf7\u9075\u7167\u8fd9\u4e2a\u76ee\u5f55\u7ed3\u6784\u7ec4\u7ec7\u4ee3\u7801\u3002",source:"@site/docs/guides/basic/directory-structure.md",sourceDirName:"guides/basic",slug:"/guides/basic/directory-structure",permalink:"/guides/basic/directory-structure",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"\u539f\u751f\u5c0f\u7a0b\u5e8f\u63a5\u5165",permalink:"/guides/migrate-from-original-miniprogram-to-mor"},next:{title:"\u914d\u7f6e",permalink:"/guides/basic/config"}},c={},l=[{value:"\u6839\u76ee\u5f55",id:"\u6839\u76ee\u5f55",level:2},{value:"package.json",id:"packagejson",level:3},{value:".env",id:"env",level:3},{value:"mor.config.ts",id:"morconfigts",level:3},{value:".mor \u76ee\u5f55",id:"mor-\u76ee\u5f55",level:3},{value:"dist \u76ee\u5f55",id:"dist-\u76ee\u5f55",level:3},{value:"mock \u76ee\u5f55",id:"mock-\u76ee\u5f55",level:3},{value:"<code>src</code> \u76ee\u5f55",id:"src-\u76ee\u5f55",level:3}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,o.kt)("p",null,"\u8fd9\u91cc\u7f57\u5217\u4e86 MorJS \u9879\u76ee\u4e2d\u7ea6\u5b9a(\u6216\u63a8\u8350)\u7684\u76ee\u5f55\u7ed3\u6784\uff0c\u5728\u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u8bf7\u9075\u7167\u8fd9\u4e2a\u76ee\u5f55\u7ed3\u6784\u7ec4\u7ec7\u4ee3\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 .mor                          - \u4e34\u65f6\u76ee\u5f55\n\u251c\u2500\u2500 dist                          - \u4ea7\u7269\u76ee\u5f55\n\u2502\xa0\xa0 \u251c\u2500\u2500 alipay                    - \u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u4ea7\u7269\n\u2502\xa0\xa0 \u2514\u2500\u2500 wechat                    - \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4ea7\u7269\n\u251c\u2500\u2500 mock                          - Mock \u6587\u4ef6\u76ee\u5f55\n\u251c\u2500\u2500 src                           - \u6e90\u7801\u76ee\u5f55\n\u2502\xa0\xa0 \u251c\u2500\u2500 assets                    - \u9759\u6001\u8d44\u6e90\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 logo.png              - \u56fe\u7247\n\u2502\xa0\xa0 \u251c\u2500\u2500 components                - \u5c0f\u7a0b\u5e8f\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u76ee\u5f55\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 add-button            - \u81ea\u5b9a\u4e49\u7ec4\u4ef6\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 add-button.axml   - \u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6a21\u7248\u6587\u4ef6\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 add-button.json   - \u81ea\u5b9a\u4e49\u7ec4\u4ef6\u914d\u7f6e\u6587\u4ef6\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 add-button.less   - \u81ea\u5b9a\u4e49\u7ec4\u4ef6\u6837\u5f0f\u6587\u4ef6\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 add-button.ts     - \u81ea\u5b9a\u4e49\u7ec4\u4ef6\u811a\u672c\u6587\u4ef6\n\u2502\xa0\xa0 \u251c\u2500\u2500 pages                     - \u5c0f\u7a0b\u5e8f\u9875\u9762\u76ee\u5f55\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 add-todo              - \u9875\u9762\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 add-todo.axml     - \u9875\u9762\u6a21\u7248\u6587\u4ef6\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 add-todo.json     - \u9875\u9762\u914d\u7f6e\u6587\u4ef6\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 add-todo.less     - \u9875\u9762\u6837\u5f0f\u6587\u4ef6\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 add-todo.ts       - \u9875\u9762\u811a\u672c\u6587\u4ef6\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 todos                 - \u9875\u9762\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 todos.axml        - \u9875\u9762\u6a21\u7248\u6587\u4ef6\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 todos.json        - \u9875\u9762\u914d\u7f6e\u6587\u4ef6\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 todos.less        - \u9875\u9762\u6837\u5f0f\u6587\u4ef6\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 todos.ts          - \u9875\u9762\u811a\u672c\u6587\u4ef6\n\u2502\xa0\xa0 \u251c\u2500\u2500 app.json                  - \u5c0f\u7a0b\u5e8f\u5168\u5c40\u914d\u7f6e\u6587\u4ef6\n\u2502\xa0\xa0 \u251c\u2500\u2500 app.less                  - \u5c0f\u7a0b\u5e8f\u5168\u5c40\u6837\u5f0f\u6587\u4ef6\n\u2502\xa0\xa0 \u251c\u2500\u2500 app.ts                    - \u5c0f\u7a0b\u5e8f\u5168\u5c40\u5165\u53e3\u6587\u4ef6\n\u2502\xa0\xa0 \u251c\u2500\u2500 mini.project.json         - \u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u9879\u76ee\u914d\u7f6e\u6587\u4ef6\n\u2502\xa0\xa0 \u2514\u2500\u2500 project.config.json       - \u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u9879\u76ee\u914d\u7f6e\u6587\u4ef6\n\u251c\u2500\u2500 README.md                     - \u9879\u76ee\u8bf4\u660e\u6587\u6863\n\u251c\u2500\u2500 .env                          - \u73af\u5883\u53d8\u91cf\u6587\u4ef6\n\u251c\u2500\u2500 mor.config.ts                 - MorJS \u914d\u7f6e\u6587\u4ef6\n\u251c\u2500\u2500 package.json                  - package.json \u6587\u4ef6\n\u2514\u2500\u2500 tsconfig.json                 - typescript \u914d\u7f6e\u6587\u4ef6\n")),(0,o.kt)("h2",{id:"\u6839\u76ee\u5f55"},"\u6839\u76ee\u5f55"),(0,o.kt)("h3",{id:"packagejson"},"package.json"),(0,o.kt)("p",null,"\u5305\u542b\u63d2\u4ef6\u548c\u9879\u76ee\u4f9d\u8d56\u3002"),(0,o.kt)("h3",{id:"env"},".env"),(0,o.kt)("p",null,"\u73af\u5883\u53d8\u91cf\uff0c\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"PORT=8888\nCACHE=none\n")),(0,o.kt)("h3",{id:"morconfigts"},"mor.config.ts"),(0,o.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\uff0c\u5305\u542b MorJS \u5185\u7f6e\u529f\u80fd\u548c\u63d2\u4ef6\u7684\u914d\u7f6e\u3002"),(0,o.kt)("h3",{id:"mor-\u76ee\u5f55"},".mor \u76ee\u5f55"),(0,o.kt)("p",null,"\u7f16\u8bd1\u6216\u96c6\u6210\u65f6\u7684\u4e34\u65f6\u6587\u4ef6\u76ee\u5f55\uff0c\u6bd4\u5982\u7f16\u8bd1\u4e2d\u95f4\u4ea7\u7269\u3001\u96c6\u6210\u6a21\u5757\u4ea7\u7269\u7b49\uff0c\u90fd\u4f1a\u88ab\u4e34\u65f6\u751f\u6210\u5230\u8fd9\u91cc\u3002",(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u8981\u63d0\u4ea4 .mor \u76ee\u5f55\u5230 git \u4ed3\u5e93\uff0c\u4ed6\u4eec\u53ef\u80fd\u4f1a\u5728 MorJS \u547d\u4ee4\u6267\u884c\u671f\u95f4\u88ab\u66f4\u65b0\u6216\u5220\u9664\u5e76\u91cd\u65b0\u751f\u6210\u3002")),(0,o.kt)("h3",{id:"dist-\u76ee\u5f55"},"dist \u76ee\u5f55"),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"mor compile")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"mor compose")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"mor pack")," \u7b49\u547d\u4ee4\u540e\uff0c\u4ea7\u7269\u9ed8\u8ba4\u4f1a\u5b58\u653e\u5728\u8fd9\u91cc\u3002\u53ef\u901a\u8fc7\u914d\u7f6e\u4fee\u6539\u4ea7\u7269\u8f93\u51fa\u8def\u5f84\u3002"),(0,o.kt)("h3",{id:"mock-\u76ee\u5f55"},"mock \u76ee\u5f55"),(0,o.kt)("p",null,"\u5b58\u50a8 mock \u6587\u4ef6\uff0c\u6b64\u76ee\u5f55\u4e0b\u6240\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},".ts")," ",(0,o.kt)("inlineCode",{parentName:"p"},".mjs")," ",(0,o.kt)("inlineCode",{parentName:"p"},".jsonc")," ",(0,o.kt)("inlineCode",{parentName:"p"},".json5")," ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," ",(0,o.kt)("inlineCode",{parentName:"p"},".cjs")," \u7c7b\u578b\u683c\u5f0f\u6587\u4ef6\u4f1a\u88ab\u89e3\u6790\u4e3a mock \u6587\u4ef6\uff0c\u4f18\u5148\u7ea7\u987a\u5e8f\u4f9d\u6b21\uff0c\u7528\u4e8e\u672c\u5730\u7684\u6a21\u62df\u6570\u636e\u670d\u52a1\u3002"),(0,o.kt)("h3",{id:"src-\u76ee\u5f55"},(0,o.kt)("inlineCode",{parentName:"h3"},"src")," \u76ee\u5f55"),(0,o.kt)("p",null,"\u6e90\u4ee3\u7801\u76ee\u5f55\u3002"))}u.isMDXComponent=!0}}]);