webpackJsonp([150,366],{737:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(22),s(21)),o=t(p),e=s(1),c=t(e),l=s(2);t(l);n.exports={content:[["p","\u5c55\u5f00\u540e\u53ef\u5bf9\u9009\u9879\u8fdb\u884c\u641c\u7d22\u3002"]],meta:{order:1,title:"\u5e26\u641c\u7d22\u6846",filename:"components/select/demo/search.md",id:"components-select-demo-search"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Select <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> Option <span class="token operator" >=</span> Select<span class="token punctuation" >.</span>Option<span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >handleChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token template-string" ><span class="token string" >`selected </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>value<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Select</span> <span class="token attr-name" >showSearch</span>\n    <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >200</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n    <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8bf7\u9009\u62e9\u4eba\u5458<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >optionFilterProp</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>children<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >notFoundContent</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u65e0\u6cd5\u627e\u5230<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>handleChange<span class="token punctuation" >}</span></span>\n  <span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>jack<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u6770\u514b<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lucy<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9732\u897f<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>tom<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u6c64\u59c6<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Option</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Select</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log("selected "+n)}var a=o["default"].Option;return c["default"].createElement(o["default"],{showSearch:!0,style:{width:200},placeholder:"\u8bf7\u9009\u62e9\u4eba\u5458",optionFilterProp:"children",notFoundContent:"\u65e0\u6cd5\u627e\u5230",onChange:n},c["default"].createElement(a,{value:"jack"},"\u6770\u514b"),c["default"].createElement(a,{value:"lucy"},"\u9732\u897f"),c["default"].createElement(a,{value:"tom"},"\u6c64\u59c6"))}}}});