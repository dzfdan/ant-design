webpackJsonp([82,366],{806:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(55),a(65)),o=t(p),e=a(1),c=t(e),u=a(2);t(u);n.exports={content:[["p","\u901a\u8fc7 ",["code","hideDisabledOptions"]," \u5c06\u4e0d\u53ef\u9009\u7684\u9009\u9879\u9690\u85cf\u3002"]],meta:{order:6,title:"\u53ea\u663e\u793a\u90e8\u5206\u9009\u9879",filename:"components/time-picker/demo/hide-options.md",id:"components-time-picker-demo-hide-options"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> TimePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >newArray</span><span class="token punctuation" >(</span>start<span class="token punctuation" >,</span> end<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >let</span> result <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n  <span class="token keyword" >for</span> <span class="token punctuation" >(</span><span class="token keyword" >let</span> i <span class="token operator" >=</span> start<span class="token punctuation" >;</span> i <span class="token operator" >&lt;</span> end<span class="token punctuation" >;</span> i<span class="token operator" >++</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    result<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span>i<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n  <span class="token keyword" >return</span> result<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >disabledMinutes</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token function" >newArray</span><span class="token punctuation" >(</span><span class="token number" >0</span><span class="token punctuation" >,</span> <span class="token number" >60</span><span class="token punctuation" >)</span><span class="token punctuation" >.</span><span class="token function" >filter</span><span class="token punctuation" >(</span>value <span class="token operator" >=</span><span class="token operator" >></span> value <span class="token operator" >%</span> <span class="token number" >10</span> <span class="token operator" >!==</span> <span class="token number" >0</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >disabledSeconds</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token function" >newArray</span><span class="token punctuation" >(</span><span class="token number" >0</span><span class="token punctuation" >,</span> <span class="token number" >60</span><span class="token punctuation" >)</span><span class="token punctuation" >.</span><span class="token function" >filter</span><span class="token punctuation" >(</span>value <span class="token operator" >=</span><span class="token operator" >></span> value <span class="token operator" >%</span> <span class="token number" >30</span> <span class="token operator" >!==</span> <span class="token number" >0</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span> <span class="token attr-name" >disabledMinutes</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>disabledMinutes<span class="token punctuation" >}</span></span> <span class="token attr-name" >disabledSeconds</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>disabledSeconds<span class="token punctuation" >}</span></span> <span class="token attr-name" >hideDisabledOptions</span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n,s){for(var a=[],t=n;t<s;t++)a.push(t);return a}function s(){return n(0,60).filter(function(n){return n%10!==0})}function a(){return n(0,60).filter(function(n){return n%30!==0})}return c["default"].createElement(o["default"],{disabledMinutes:s,disabledSeconds:a,hideDisabledOptions:!0})}}}});