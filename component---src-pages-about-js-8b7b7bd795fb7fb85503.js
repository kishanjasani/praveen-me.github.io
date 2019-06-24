(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{172:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return l});var n=a(0),r=a.n(n),o=a(188),i=a(182),l="31667349";t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"About",keywords:["gatsby","application","react","portfolio","personal website","blog"]}),r.a.createElement("div",{className:"about sml-wrapper"},r.a.createElement("div",{className:"about__sec"},r.a.createElement("div",{className:"about__head-sec"},r.a.createElement("h2",{className:"about__head"},"About Me"),r.a.createElement("p",{className:"about__time"}," 2 minutes read ")),r.a.createElement("img",{src:t.imageOne.childImageSharp.fluid.src,alt:"Praveen Kumar Saini",className:"about__author-img"})),r.a.createElement("p",{className:"about__content content"},r.a.createElement("p",null,"I am a life long learner and currently working as a React Developer at ",r.a.createElement("a",{href:"https://rtcamp.com"},"rtCamp")," . Most of the time I am totally involved in JavaScript stuff like React, Redux, Node, Express, MongoDB etc."),r.a.createElement("p",null,"As we know the web is continuously changing so I always try to be updated and always be evolved around the new technologies and always have my keen eye on them for making something good out of them."),r.a.createElement("p",null,"I am a college dropout, Google Udacity Scholar and got a Front End Nanodegree. I also did a Full Stack Development Program from ",r.a.createElement("a",{href:"https://altcampus.io"},"AltCampus")," and always grateful of their program that helps me to be quality developer."),r.a.createElement("p",null,"In this blog, I like to write about JavaScript stuff i.e what I explored and find interesting to write about."),r.a.createElement("p",null,"In my free time, i.e when I am not coding I like to sleep ",r.a.createElement("span",{"aria-label":"Grin Image",role:"img",alt:"image of grin"},"😬"),", read philosophies, watch documentaries and Netflix."))))}},177:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(5),i=a.n(o),l=a(43),c=a.n(l);a.d(t,"a",function(){return c.a});a(178),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},178:function(e,t,a){var n;e.exports=(n=a(179))&&n.default||n},179:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a.n(n),o=a(0),i=a.n(o),l=a(5),c=a.n(l),s=a(68),m=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(s.a,r()({location:t,pageResources:a},a.json)):null};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=m},181:function(e,t,a){"use strict";a(99);var n=a(9),r=a.n(n),o=a(0),i=a.n(o),l=a(5),c=a.n(l),s=a(177),m=[{linkType:"twitter",username:"am_pra_veen",socialLink:"https://twitter.com/"},{linkType:"github",username:"praveen-me",socialLink:"https://github.com/"},{linkType:"linkedin",username:"praveen-me",socialLink:"https://linkedin.com/in/"}],u=function(){return i.a.createElement("header",{className:"header",id:"top"},i.a.createElement("a",{href:"#top",className:"header__topbar"},'"'),i.a.createElement("div",{className:"header__content-block"},i.a.createElement("div",{className:"header__logo-sec"},i.a.createElement(s.a,{to:"/",className:"header__logo"},"JS")),i.a.createElement("div",{className:"header__social-pack"},m.map(function(e,t){return i.a.createElement("div",{className:"header__social-sec",key:e.linkType},i.a.createElement("span",null," ",e.linkType," "),i.a.createElement("a",{href:e.socialLink+e.username,rel:"noopener noreferrer",target:"_blank"}," @",e.username))}))))},p=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("p",{className:"footer__text center"},"Made with ",i.a.createElement("span",{"aria-label":"Heart Image",role:"img",alt:"image of heart"},"❤️")," JavaScript and SASS with React and Gatsby ",i.a.createElement("span",{"aria-label":"Computer Image",role:"img",alt:"image of computer"},"💻")))},d=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isHome:!1},a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.setState({isHome:!("/"!==this.props.location.pathname&&!this.props.location.pathname.match(/page/,"i"))})},a.render=function(){var e=this.props.children,t=this.state.isHome;return i.a.createElement("div",{className:t?"home":"show-content"},i.a.createElement(u,null),i.a.createElement("main",{className:"wrapper main"},e),i.a.createElement(p,null))},t}(i.a.PureComponent);d.propTypes={children:c.a.node.isRequired};t.a=d},182:function(e,t,a){"use strict";a(44);var n=a(0),r=a.n(n),o=a(22),i=a(181);t.a=function(e){return r.a.createElement(o.Location,null,function(t){return r.a.createElement(i.a,Object.assign({},t,e),e.children)})}},188:function(e,t,a){"use strict";var n=a(189),r=a(0),o=a.n(r),i=a(5),l=a.n(i),c=a(196),s=a.n(c);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title,c=n.data.site,m=t||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:l},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:m}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m},189:function(e){e.exports={data:{site:{siteMetadata:{title:"Praveen Kumar Saini",description:"Nerd/ JavaScript Enthusiast/ React Developer 😎",author:"am_pra_veen"}}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-8b7b7bd795fb7fb85503.js.map