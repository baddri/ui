(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{198:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(2),l=(a(86),a(87)),i=a.n(l),c=a(9),s=a.n(c),m=a(201),u=(a(203),a(204)),p={},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).layout=u.a,a}return s()(t,e),t.prototype.render=function(){var e=this.props,t=e.components,a=i()(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},p,a),components:t},o.a.createElement(m.MDXTag,{name:"h1",components:t},"Install Based on Starter Kit"),o.a.createElement(m.MDXTag,{name:"p",components:t},"Starting OAH UI from ",o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/oahtech/oah-admin"}},"oah-admin")," starter kit is the easiest way to run your first OAH UI application."),o.a.createElement(m.MDXTag,{name:"p",components:t},"Please note, that ",o.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"oah-admin")," is just a frontend application. Backend integration can be done relatively simple, but you should be aware that all the data is mocked using JavaScript objects.\nIf you want the data to be dynamic, you should consider developing a backend integration by your own.\nThe OAH UI team doesn't consider providing generic integration layer as a part of this project because every backend API has a different structure in terms of data format and URLs."),o.a.createElement(m.MDXTag,{name:"h2",components:t},"Install tools"),o.a.createElement(m.MDXTag,{name:"p",components:t},"To install oah-admin on your machine you need to have the following tools installed:"),o.a.createElement(m.MDXTag,{name:"ul",components:t},o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Git - ",o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://git-scm.com"}},"https://git-scm.com")),o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Node.js - ",o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://nodejs.org"}},"https://nodejs.org")," Please note the ",o.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"li"},"version")," should be ",o.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"li"},">=8")),o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"Npm - Node.js package manager, comes with Node.js. Please make sure npm ",o.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"li"},"version")," is ",o.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"li"},">=5")),o.a.createElement(m.MDXTag,{name:"li",components:t,parentName:"ul"},"You might also need some specific native packages depending on your operating system like ",o.a.createElement("code",{className:"language-text"},"build-essential")," on Ubuntu")),o.a.createElement("div",{className:"note note-warning"},o.a.createElement("div",{className:"note-title"},"Warning!"),o.a.createElement("div",{className:"note-body"},"Please note that ",o.a.createElement("strong",null,"it is not possible")," to build oah-admin",o.a.createElement("strong",null," without these tools")," and it will not be possible because of the way how React is built.")),o.a.createElement(m.MDXTag,{name:"h2",components:t},"Download the code"),o.a.createElement(m.MDXTag,{name:"p",components:t},"When you completed tools setup, you need to download the code of ",o.a.createElement(m.MDXTag,{name:"strong",components:t,parentName:"p"},"oah-admin")," application. The easiest way to do that is to clone GitHub repository:"),o.a.createElement("div",{className:"gatsby-highlight","data-language":"bash"},o.a.createElement("pre",{className:"language-bash"},o.a.createElement("code",{className:"language-bash"},o.a.createElement("span",{className:"token function"},"git")," clone https://github.com/oahtech/oah-admin.git"))),o.a.createElement(m.MDXTag,{name:"p",components:t},"After clone is completed, you need to install npm modules:"),o.a.createElement("div",{className:"gatsby-highlight","data-language":"bash"},o.a.createElement("pre",{className:"language-bash"},o.a.createElement("code",{className:"language-bash"},o.a.createElement("span",{className:"token function"},"cd")," oah-admin ",o.a.createElement("span",{className:"token operator"},"&&")," ",o.a.createElement("span",{className:"token function"},"npm")," i ",o.a.createElement("span",{className:"token operator"},"||")," yarn"))),o.a.createElement("div",{className:"note note-warning"},o.a.createElement("div",{className:"note-title"},"Warning!"),o.a.createElement("div",{className:"note-body"},"Please make sure that installation process successfully completed without errors.")),o.a.createElement(m.MDXTag,{name:"h2",components:t},"Run local copy"),o.a.createElement(m.MDXTag,{name:"p",components:t},"To run a local copy in development mode, execute:"),o.a.createElement("div",{className:"gatsby-highlight","data-language":"bash"},o.a.createElement("pre",{className:"language-bash"},o.a.createElement("code",{className:"language-bash"},o.a.createElement("span",{className:"token function"},"npm")," run dev ",o.a.createElement("span",{className:"token operator"},"||")," yarn dev"))),o.a.createElement(m.MDXTag,{name:"p",components:t},"Go to ",o.a.createElement(m.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://localhost:8000"}},"http://localhost:8000")," in your browser."),o.a.createElement(m.MDXTag,{name:"h2",components:t},"Production bundle"),o.a.createElement(m.MDXTag,{name:"p",components:t},"To create a bundle in production mode, execute:"),o.a.createElement("div",{className:"gatsby-highlight","data-language":"bash"},o.a.createElement("pre",{className:"language-bash"},o.a.createElement("code",{className:"language-bash"},o.a.createElement("span",{className:"token function"},"npm")," run build ",o.a.createElement("span",{className:"token operator"},"||")," yarn build"))),o.a.createElement(m.MDXTag,{name:"p",components:t},"This will clear up your ",o.a.createElement("code",{className:"language-text"},"public")," folder (where release files are located) and generate a release build.\nNow you can copy the sources from the ",o.a.createElement("code",{className:"language-text"},"public")," folder and use it with any backend frameworks"))},t}(o.a.Component),g=a(202),h=a(212);t.default=function(){return o.a.createElement(r.Row,null,o.a.createElement(g.a,{title:"Install Based on Starter Kit",keywords:["OAH","application","react"]}),o.a.createElement(r.Col,{xs:12},o.a.createElement(h.a,null,o.a.createElement(d,null))))}},201:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(210);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return r(n).default}});var o=a(205);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},202:function(e,t,a){"use strict";var n=a(208),o=a(0),r=a.n(o),l=a(1),i=a.n(l),c=a(211),s=a.n(c),m=a(43);function u(e){var t=e.description,a=e.lang,o=e.meta,l=e.keywords,i=e.title;return r.a.createElement(m.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(o)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=u;var p="1025518380"},203:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(2),l=a(6),i=l.default.div.withConfig({displayName:"Example__Style",componentId:"srddzp-0"})(["",""],function(e){var t=e.theme;return Object(l.css)(["border:1px solid ",";border-radius:",";background-color:",";.gatsby-highlight{border-radius:0;border-bottom-left-radius:",";border-bottom-right-radius:",";margin:-1.25rem !important;}"],t.separator,t.radius,t.layoutBg,t.radius,t.radius)});t.a=function(e){var t=e.code,a=e.children;return o.a.createElement(r.Row,null,o.a.createElement(r.Col,{xs:12},o.a.createElement(i,null,o.a.createElement(r.Tabs,null,o.a.createElement(r.Tab,{title:"preview"},a),o.a.createElement(r.Tab,{title:"code"},t)))))}},204:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(201),l=a(43),i=a(2),c=a(6),s=Object(c.default)(i.Card).withConfig({displayName:"style__MdxLayoutStyle",componentId:"sc-1o1wv49-0"})(["",""],function(e){var t=e.theme;return Object(c.css)(["margin-bottom:1rem;h1,h2,h3,h4,h5,h6{line-height:1.25;margin-bottom:1.25rem;font-weight:bold;}.note{padding:1.25rem 3rem 1.5rem 1.25rem;border-radius:0.25rem;margin-bottom:3rem;.note-title{font-weight:500;text-transform:uppercase;margin-bottom:1.5rem;}.note-body{font-size:0.875rem;line-height:1.5;}&.note-info{color:",";background-color:#f0f6ff;}&.note-warning{color:",";background-color:#fffae4;}}.color-swatch{display:inline-block;border:1px solid black;width:0.875rem;height:0.875rem;margin-left:7px;margin-bottom:-2px;border-radius:2px;}p{font-size:",";line-height:1.5;}a{color:",";font-weight:",";text-decoration:none;&:hover{color:",";text-decoration:underline;}}.menu-items > .menu-item{margin-bottom:0.5rem;font-weight:bold;a:hover{font-weight:bold;text-decoration:none;}li{font-size:0.875rem;font-weight:normal;}li.menu-group{font-weight:bold;padding-top:1.25rem;padding-bottom:1rem;}}"],t.colorInfo,t.colorWarning,t.fontSize,t.tableLink,t.fontWeightBold,t.tableLink)});function m(e){var t=e.href,a=e.children;return/^\/(?!\/)/.test(t)?o.a.createElement(l.Link,{to:t},a):o.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},a)}t.a=function(e){var t=e.children;return o.a.createElement(r.MDXProvider,{components:{a:m}},o.a.createElement(s,null,o.a.createElement(i.CardBody,null,t)))}},205:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(0),l=(n=r)&&n.__esModule?n:{default:n};var i=l.default.createContext({}),c=i.Provider,s=i.Consumer;t.withMDXComponents=function(e){return function(t){var a=t.components,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["components"]);return l.default.createElement(s,null,function(t){return l.default.createElement(e,o({components:a||t},n))})}};t.default=function(e){var t=e.components,a=e.children;return l.default.createElement(c,{value:t},a)}},208:function(e){e.exports={data:{site:{siteMetadata:{title:"OAH-UI",description:"React Styled Components with bootstrap grid system.",author:"OAH Technology"}}}}},210:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),i=(n=l)&&n.__esModule?n:{default:n},c=a(205);var s={inlineCode:"code",wrapper:"div"},m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.parentName,n=e.props,r=void 0===n?{}:n,l=e.children,c=e.components,m=void 0===c?{}:c,u=e.Layout,p=e.layoutProps,d=m[a+"."+t]||m[t]||s[t]||t;return u?i.default.createElement(u,o({components:m},p),i.default.createElement(d,r,l)):i.default.createElement(d,r,l)}}]),t}();t.default=(0,c.withMDXComponents)(m)},212:function(e,t,a){"use strict";var n=a(6),o=a(2),r=n.default.div.withConfig({displayName:"GuideStyle",componentId:"sc-19ox4j6-0"})(["","{padding:2rem;& > *:last-child{margin-bottom:0;& *:last-child{margin-bottom:0;}}}ul{margin-bottom:1.5rem;ul{padding-left:2.5rem;list-style-type:none;& > li{text-indent:-5px;position:relative;margin-bottom:0;&::before{content:'-';position:absolute;left:-1.25rem;}}}li{font-size:0.9375rem;line-height:1.5;margin-bottom:1.5rem;}}"],o.CardBody);t.a=r}}]);
//# sourceMappingURL=component---src-pages-guides-install-based-on-starter-kit-js-19db816a00bee7057087.js.map