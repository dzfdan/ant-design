webpackJsonp([272,366],{612:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(95),s(94)),e=t(p),o=(s(10),s(8)),c=t(o),u=(s(27),s(26)),l=t(u),k=s(1),i=t(k),r=s(2);t(r);n.exports={content:[["p","\u4f20\u5165\u7684\u83dc\u5355\u91cc\u6709\u591a\u4e2a\u5c42\u7ea7\u3002"]],meta:{order:5,title:"\u591a\u7ea7\u83dc\u5355",filename:"components/dropdown/demo/sub-menu.md",id:"components-dropdown-demo-sub-menu"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Menu<span class="token punctuation" >,</span> Dropdown<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> SubMenu <span class="token operator" >=</span> Menu<span class="token punctuation" >.</span>SubMenu<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> menu <span class="token operator" >=</span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span><span class="token punctuation" >></span></span>\u7b2c\u4e00\u4e2a\u83dc\u5355\u9879<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span><span class="token punctuation" >></span></span>\u7b2c\u4e8c\u4e2a\u83dc\u5355\u9879<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SubMenu</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5b50\u83dc\u5355<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span><span class="token punctuation" >></span></span>\u7b2c\u4e09\u4e2a\u83dc\u5355\u9879<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span><span class="token punctuation" >></span></span>\u7b2c\u56db\u4e2a\u83dc\u5355\u9879<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>SubMenu</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Dropdown</span> <span class="token attr-name" >overlay</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>menu<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-dropdown-link<span class="token punctuation" >"</span></span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      \u591a\u7ea7\u83dc\u5355 <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>down<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Dropdown</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=l["default"].SubMenu,a=i["default"].createElement(l["default"],null,i["default"].createElement(l["default"].Item,null,"\u7b2c\u4e00\u4e2a\u83dc\u5355\u9879"),i["default"].createElement(l["default"].Item,null,"\u7b2c\u4e8c\u4e2a\u83dc\u5355\u9879"),i["default"].createElement(n,{title:"\u5b50\u83dc\u5355"},i["default"].createElement(l["default"].Item,null,"\u7b2c\u4e09\u4e2a\u83dc\u5355\u9879"),i["default"].createElement(l["default"].Item,null,"\u7b2c\u56db\u4e2a\u83dc\u5355\u9879")));return i["default"].createElement(e["default"],{overlay:a},i["default"].createElement("a",{className:"ant-dropdown-link",href:"#"},"\u591a\u7ea7\u83dc\u5355 ",i["default"].createElement(c["default"],{type:"down"})))}}}});