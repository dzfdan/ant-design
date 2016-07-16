webpackJsonp([17,366],{872:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(92),s(91)),e=t(p),o=(s(27),s(26)),c=t(o),l=s(1),u=t(l),k=s(2),i=(t(k),s(131)),r=t(i);n.exports={content:[["p","\u4e00\u4e8c\u7ea7\u5bfc\u822a\u90fd\u5728\u9876\u90e8\u3002"],["p","\u9876\u90e8\u5bfc\u822a\u5728\u9875\u9762\u5e03\u5c40\u4e0a\u91c7\u7528\u7684\u662f\u4e0a\u4e0b\u7684\u7ed3\u6784\uff0c\u4e00\u822c\u4e3b\u5bfc\u822a\u653e\u7f6e\u4e8e\u9875\u9762\u7684\u9876\u7aef\uff0c\u4ece\u5de6\u81ea\u53f3\u4f9d\u6b21\u4e3a\uff1alogo\u3001\u4e00\u7ea7\u5bfc\u822a\u9879\u3001\u8f85\u52a9\u83dc\u5355\uff08\u7528\u6237\u3001\u8bbe\u7f6e\u3001\u901a\u77e5\u7b49\uff09\u3002\u901a\u5e38\u5c06\u5185\u5bb9\u653e\u5728\u56fa\u5b9a\u5c3a\u5bf8\uff08\u4f8b\u5982\uff1a1200px\uff09\u5185\uff0c\u6574\u4e2a\u9875\u9762\u6392\u7248\u7a33\u5b9a\uff0c\u4e0d\u53d7\u7528\u6237\u7ec8\u7aef\u663e\u793a\u5668\u5f71\u54cd\uff1b\u4e0a\u4e0b\u7ea7\u7684\u7ed3\u6784\u7b26\u5408\u7528\u6237\u4e0a\u4e0b\u6d4f\u89c8\u7684\u4e60\u60ef\uff0c\u4e5f\u662f\u8f83\u4e3a\u7ecf\u5178\u7684\u7f51\u7ad9\u5bfc\u822a\u6a21\u5f0f\u3002\u9875\u9762\u4e0a\u4e0b\u5207\u5206\u7684\u65b9\u5f0f\u63d0\u9ad8\u4e86\u4e3b\u5de5\u4f5c\u533a\u57df\u7684\u4fe1\u606f\u5c55\u793a\u6548\u7387\uff0c\u4f46\u5728\u7eb5\u5411\u7a7a\u95f4\u4e0a\u4f1a\u6709\u4e00\u4e9b\u727a\u7272\u3002\u6b64\u5916\uff0c\u7531\u4e8e\u5bfc\u822a\u680f\u6c34\u5e73\u7a7a\u95f4\u7684\u9650\u5236\uff0c\u4e0d\u9002\u5408\u90a3\u4e9b\u4e00\u7ea7\u5bfc\u822a\u9879\u5f88\u591a\u7684\u4fe1\u606f\u7ed3\u6784\u3002"],["blockquote",["p",["code","<BrowserDemo />"]," \u505a\u6f14\u793a\u7528\uff0c\u65e0\u987b\u590d\u5236\u3002"]]],meta:{order:0,title:"\u9876\u90e8\u5bfc\u822a",filename:"docs/spec/layout/demo/top.md",id:"docs-spec-layout-demo-top"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Menu<span class="token punctuation" >,</span> Breadcrumb <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> BrowserDemo <span class="token keyword" >from</span> <span class="token string" >\'site/theme/template/BrowserDemo\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>BrowserDemo</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-layout-top<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-layout-header<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-layout-wrapper<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-layout-logo<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu</span> <span class="token attr-name" >theme</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>dark<span class="token punctuation" >"</span></span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>horizontal<span class="token punctuation" >"</span></span>\n            <span class="token attr-name" >defaultSelectedKeys</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'2\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span>lineHeight<span class="token punctuation" >:</span> <span class="token string" >\'64px\'</span><span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5bfc\u822a\u4e00<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5bfc\u822a\u4e8c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>3<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5bfc\u822a\u4e09<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-layout-subheader<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-layout-wrapper<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu</span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>horizontal<span class="token punctuation" >"</span></span>\n            <span class="token attr-name" >defaultSelectedKeys</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'1\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span>marginLeft<span class="token punctuation" >:</span> <span class="token number" >124</span><span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e8c\u7ea7\u5bfc\u822a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e8c\u7ea7\u5bfc\u822a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>3<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e8c\u7ea7\u5bfc\u822a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-layout-wrapper<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-layout-breadcrumb<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Breadcrumb</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>\u9996\u9875<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>\u5e94\u7528\u5217\u8868<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>\u67d0\u5e94\u7528<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Breadcrumb.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Breadcrumb</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-layout-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >210</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-layout-footer<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      Ant Design \u7248\u6743\u6240\u6709 \xa9 <span class="token number" >2015</span> \u7531\u8682\u8681\u91d1\u670d\u4f53\u9a8c\u6280\u672f\u90e8\u652f\u6301\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>BrowserDemo</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return u["default"].createElement(r["default"],null,u["default"].createElement("div",{className:"ant-layout-top"},u["default"].createElement("div",{className:"ant-layout-header"},u["default"].createElement("div",{className:"ant-layout-wrapper"},u["default"].createElement("div",{className:"ant-layout-logo"}),u["default"].createElement(c["default"],{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],style:{lineHeight:"64px"}},u["default"].createElement(c["default"].Item,{key:"1"},"\u5bfc\u822a\u4e00"),u["default"].createElement(c["default"].Item,{key:"2"},"\u5bfc\u822a\u4e8c"),u["default"].createElement(c["default"].Item,{key:"3"},"\u5bfc\u822a\u4e09")))),u["default"].createElement("div",{className:"ant-layout-subheader"},u["default"].createElement("div",{className:"ant-layout-wrapper"},u["default"].createElement(c["default"],{mode:"horizontal",defaultSelectedKeys:["1"],style:{marginLeft:124}},u["default"].createElement(c["default"].Item,{key:"1"},"\u4e8c\u7ea7\u5bfc\u822a"),u["default"].createElement(c["default"].Item,{key:"2"},"\u4e8c\u7ea7\u5bfc\u822a"),u["default"].createElement(c["default"].Item,{key:"3"},"\u4e8c\u7ea7\u5bfc\u822a")))),u["default"].createElement("div",{className:"ant-layout-wrapper"},u["default"].createElement("div",{className:"ant-layout-breadcrumb"},u["default"].createElement(e["default"],null,u["default"].createElement(e["default"].Item,null,"\u9996\u9875"),u["default"].createElement(e["default"].Item,null,"\u5e94\u7528\u5217\u8868"),u["default"].createElement(e["default"].Item,null,"\u67d0\u5e94\u7528"))),u["default"].createElement("div",{className:"ant-layout-container"},u["default"].createElement("div",{style:{height:210}}))),u["default"].createElement("div",{className:"ant-layout-footer"},"Ant Design \u7248\u6743\u6240\u6709 \xa9 2015 \u7531\u8682\u8681\u91d1\u670d\u4f53\u9a8c\u6280\u672f\u90e8\u652f\u6301")))},style:".ant-layout-top {\n  height: 100%;\n}\n\n.ant-layout-top .ant-layout-wrapper {\n  padding: 0 50px;\n}\n\n.ant-layout-top .ant-layout-header {\n  background: #404040;\n  height: 64px;\n}\n\n.ant-layout-top .ant-layout-logo {\n  width: 120px;\n  height: 32px;\n  background: #333;\n  border-radius: 6px;\n  margin: 16px 28px 16px 0;\n  float: left;\n}\n\n.ant-layout-top .ant-layout-subheader {\n  height: 48px;\n  border-bottom: 1px solid #e9e9e9;\n  background: #fff;\n}\n\n.ant-layout-top .ant-layout-breadcrumb {\n  margin: 7px 0 -17px 24px;\n}\n\n.ant-layout-top .ant-layout-container {\n  background: #fff;\n  margin: 24px 0 0;\n  position: relative;\n  padding-top: 24px;\n  overflow: hidden;\n}\n\n.ant-layout-top .ant-layout-footer {\n  height: 64px;\n  line-height: 64px;\n  text-align: center;\n  font-size: 12px;\n  color: #999;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.ant-layout-top</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >100%</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.ant-layout-top</span> <span class="token class" >.ant-layout-wrapper</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >0</span> <span class="token number" >50</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.ant-layout-top</span> <span class="token class" >.ant-layout-header</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >background</span><span class="token punctuation" >:</span> <span class="token hexcode" >#404040</span><span class="token punctuation" >;</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >64</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.ant-layout-top</span> <span class="token class" >.ant-layout-logo</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >width</span><span class="token punctuation" >:</span> <span class="token number" >120</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >32</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >background</span><span class="token punctuation" >:</span> <span class="token hexcode" >#333</span><span class="token punctuation" >;</span>\n  <span class="token property" >border-radius</span><span class="token punctuation" >:</span> <span class="token number" >6</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >margin</span><span class="token punctuation" >:</span> <span class="token number" >16</span>px <span class="token number" >28</span>px <span class="token number" >16</span>px <span class="token number" >0</span><span class="token punctuation" >;</span>\n  <span class="token property" >float</span><span class="token punctuation" >:</span> left<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.ant-layout-top</span> <span class="token class" >.ant-layout-subheader</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >48</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >border-bottom</span><span class="token punctuation" >:</span> <span class="token number" >1</span>px solid <span class="token hexcode" >#e9e9e9</span><span class="token punctuation" >;</span>\n  <span class="token property" >background</span><span class="token punctuation" >:</span> <span class="token hexcode" >#fff</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.ant-layout-top</span> <span class="token class" >.ant-layout-breadcrumb</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin</span><span class="token punctuation" >:</span> <span class="token number" >7</span>px <span class="token number" >0</span> -<span class="token number" >17</span>px <span class="token number" >24</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.ant-layout-top</span> <span class="token class" >.ant-layout-container</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >background</span><span class="token punctuation" >:</span> <span class="token hexcode" >#fff</span><span class="token punctuation" >;</span>\n  <span class="token property" >margin</span><span class="token punctuation" >:</span> <span class="token number" >24</span>px <span class="token number" >0</span> <span class="token number" >0</span><span class="token punctuation" >;</span>\n  <span class="token property" >position</span><span class="token punctuation" >:</span> relative<span class="token punctuation" >;</span>\n  <span class="token property" >padding-top</span><span class="token punctuation" >:</span> <span class="token number" >24</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >overflow</span><span class="token punctuation" >:</span> hidden<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.ant-layout-top</span> <span class="token class" >.ant-layout-footer</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >64</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >line-height</span><span class="token punctuation" >:</span> <span class="token number" >64</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >text-align</span><span class="token punctuation" >:</span> center<span class="token punctuation" >;</span>\n  <span class="token property" >font-size</span><span class="token punctuation" >:</span> <span class="token number" >12</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#999</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}}});