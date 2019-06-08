(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c});var n=a(0),r=a.n(n),o=a(170),i=a(166),c="31667349";t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"About",keywords:["gatsby","application","react","portfolio","personal website","blog"]}),r.a.createElement("div",{className:"about sml-wrapper"},r.a.createElement("div",{className:"about__sec"},r.a.createElement("div",{className:"about__head-sec"},r.a.createElement("h2",{className:"about__head"},"About Me"),r.a.createElement("p",{className:"about__time"}," 2 minutes read ")),r.a.createElement("img",{src:t.imageOne.childImageSharp.fluid.src,alt:"Praveen Kumar Saini",className:"about__author-img"})),r.a.createElement("p",{className:"about__content content"},r.a.createElement("p",null,"I am a life long learner and currently working as a React Developer at ",r.a.createElement("a",{href:"https://rtcamp.com"},"rtCamp")," . Most of the time I totally evolved in JavaScript stuff like React, Redux, Node, Express, etc."),r.a.createElement("p",null,"As we know the web is continuously changing so I always try to be updated and always be evolved around the new technologies and always have my keen eye on them for making something good out of them."),r.a.createElement("p",null,"I am a college dropout and also Google Udacity Scholar and got a Front End Nanodegree."),r.a.createElement("p",null,"In this blog, I like to write about JavaScript stuff i.e what I explored and find interesting to write about."),r.a.createElement("p",null,"In my free time, i.e when I am not coding I like to sleep😬, read philosophies, watch documentaries and Netflix."))))}},159:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(38),s=a.n(c);a.d(t,"a",function(){return s.a});a(160),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},160:function(e,t,a){var n;e.exports=(n=a(161))&&n.default||n},161:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),o=a(0),i=a.n(o),c=a(4),s=a.n(c),l=a(57),m=a(2),u=function(e){var t=e.location,a=m.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(l.a,r()({location:t,pageResources:a},a.json)):null};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},163:function(e,t,a){"use strict";a(79);var n=a(7),r=a.n(n),o=a(0),i=a.n(o),c=a(4),s=a.n(c),l=a(159),m=[{linkType:"twitter",username:"am_pra_veen",socialLink:"https://twitter.com/"},{linkType:"github",username:"praveen-me",socialLink:"https://github.com/"},{linkType:"linkedin",username:"praveen-me",socialLink:"https://linkedin.com/in/"}],u=function(){return i.a.createElement("header",{className:"header",id:"top"},i.a.createElement("a",{href:"#top",className:"header__topbar"}),i.a.createElement("div",{className:"header__content-block"},i.a.createElement("div",{className:"header__logo-sec"},i.a.createElement(l.a,{to:"/",className:"header__logo"},"JS")),i.a.createElement("div",{className:"header__social-pack"},m.map(function(e,t){return i.a.createElement("div",{className:"header__social-sec",key:e.linkType},i.a.createElement("span",null," ",e.linkType," "),i.a.createElement("a",{href:e.socialLink+e.username,rel:"noopener noreferrer",target:"_blank"}," @",e.username))}))))},p=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("p",{className:"footer__text center"},"Made with ",i.a.createElement("span",{role:"img"},"❤️")," JavaScript and SASS with React and Gatsby ",i.a.createElement("span",{role:"img"},"💻")))},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isHome:!1},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({isHome:!("/"!==this.props.location.pathname&&!this.props.location.pathname.match(/page/,"i"))})},a.render=function(){var e=this.props.children,t=this.state.isHome;return i.a.createElement("div",{className:t?"home":"show-content"},i.a.createElement(u,null),i.a.createElement("main",{className:"wrapper main"},e),i.a.createElement(p,null))},t}(i.a.PureComponent);d.propTypes={children:s.a.node.isRequired};t.a=d},166:function(e,t,a){"use strict";a(39);var n=a(0),r=a.n(n),o=a(16),i=a(163);t.a=function(e){return r.a.createElement(o.Location,null,function(t){return r.a.createElement(i.a,Object.assign({},t,e),e.children)})}},170:function(e,t,a){"use strict";var n=a(171),r=a(0),o=a.n(r),i=a(4),c=a.n(i),s=a(178),l=a.n(s);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title,s=n.data.site,m=t||s.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m},171:function(e){e.exports={data:{site:{siteMetadata:{title:"Praveen Kumar Saini",description:"Nerd/ JavaScript Lover/ React Developer",author:"am_pra_veen"}}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-81f79e1758ad8cf2142c.js.map