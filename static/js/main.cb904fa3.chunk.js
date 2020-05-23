(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{122:function(e,t,a){},167:function(e,t,a){e.exports=a(396)},172:function(e,t,a){},396:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(120),c=a.n(r),o=(a(172),a(122),a(16)),i=a(5),m=a(28),s=a(22),u=a(40),d=a(41),E=a(42),p=Object(n.createContext)(),g=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={page:0},a.setPage=function(e){a.setState((function(t){return{page:e}}))},a}return Object(E.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.children,t=this.state.page,a=this.setPage;return l.a.createElement(p.Provider,{value:{page:t,setPage:a}},e)}}]),t}(n.Component),f=function(){var e=Object(n.useContext)(p).setPage,t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],c=a[1],m=function(t){e(t),c(!1)};return l.a.createElement("div",{id:"navbar"},l.a.createElement("div",{className:"left"},l.a.createElement(i.Zoom,{delay:5e3},l.a.createElement("div",{className:"circle",onClick:function(){return e(0)}},"RF"))),l.a.createElement("div",{className:"right"},l.a.createElement(i.Fade,{down:!0,delay:5e3},l.a.createElement("p",{onClick:function(){return e(1)}},"About")),l.a.createElement(i.Fade,{down:!0,delay:5100},l.a.createElement("p",{onClick:function(){return e(2)}},"Experience")),l.a.createElement(i.Fade,{down:!0,delay:5200},l.a.createElement("p",{onClick:function(){return e(3)}},"Work")),l.a.createElement(i.Fade,{down:!0,delay:5300},l.a.createElement("p",{onClick:function(){return e(6)}},"Contact"))),l.a.createElement("div",{className:"hamburger"},l.a.createElement(i.Zoom,{delay:5e3},l.a.createElement("img",{src:"icons/hamburger.png",alt:"menu",className:"hamburger",onClick:function(){return c(!r)}}))),r&&l.a.createElement("div",{id:"hamburger-drop"},l.a.createElement("div",{className:"hamburger-list"},l.a.createElement(i.Fade,{down:!0,delay:100},l.a.createElement("p",{onClick:function(){return m(1)}},"About")),l.a.createElement(i.Fade,{down:!0,delay:200},l.a.createElement("p",{onClick:function(){return m(2)}},"Experience")),l.a.createElement(i.Fade,{down:!0,delay:300},l.a.createElement("p",{onClick:function(){return m(3)}},"Work")),l.a.createElement(i.Fade,{down:!0,delay:400},l.a.createElement("p",{onClick:function(){return m(6)}},"Contact")))))},b=function(){return l.a.createElement("div",{id:"sidebar"},l.a.createElement("div",{className:"top"}),l.a.createElement("div",{className:"bottom"},l.a.createElement(i.Fade,{left:!0,delay:7500},l.a.createElement("a",{href:"mailto:".concat("robertjfox94@gmail.com"),target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"social/contact.png",alt:"contact"}))),l.a.createElement(i.Fade,{left:!0,delay:7600},l.a.createElement("a",{href:"https://github.com/robertjfox",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"social/github.png",alt:"github"}))),l.a.createElement(i.Fade,{left:!0,delay:7700},l.a.createElement("a",{href:"https://www.linkedin.com/in/robert-fox-1b341996/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"social/linkedin.png",alt:"linkedin"}))),l.a.createElement(i.Fade,{left:!0,delay:7800},l.a.createElement("a",{href:"https://twitter.com/rfoxjr",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"social/twitter.png",alt:"twitter"}))),l.a.createElement(i.Fade,{up:!0,delay:7500},l.a.createElement("div",{className:"line"}))))},h=a(409),v=a(407),N=Object(v.a)((function(e){return{root:{display:"flex",transform:"scale(3)","& > * + *":{marginLeft:e.spacing(3)}}}})),w=function(){var e=N(),t=Object(n.useState)(0),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.useEffect((function(){var e=setInterval((function(){c((function(e){return e>=100?100:e+1}))}),20);return function(){clearInterval(e)}}),[]),l.a.createElement("div",{id:"loading"},l.a.createElement("div",{className:e.root,id:"loading-circle"},l.a.createElement(h.a,{variant:"determinate",value:r,color:"inherit"})),l.a.createElement("h1",null,"RF"))},y=function(){var e,t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],c=a[1],m=Object(n.useContext)(p).setPage;return l.a.createElement("div",{id:"landing"},l.a.createElement(i.Fade,{up:!0,delay:6e3},l.a.createElement("p",{className:"line-1"},"Hi, I'm ",l.a.createElement("i",null,"Robert Fox"))),l.a.createElement(i.Fade,{up:!0,delay:7e3},l.a.createElement("p",{className:"line-2"},"and I'm a software developer and designer.")),l.a.createElement("div",{wait:(e=8e3,void setTimeout((function(){c(!0)}),e))},r?l.a.createElement("img",{src:"media/down-arrow.png",alt:"down",onClick:function(){return m(1)}}):l.a.createElement("div",{className:"arrow-placeholder"})))},k=function(){return l.a.createElement("div",{id:"about"},l.a.createElement("div",{className:"left"},l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,l.a.createElement("i",null,"About Me")),l.a.createElement("div",{className:"line"})),l.a.createElement("div",{className:"description"},l.a.createElement(i.Fade,{up:!0},l.a.createElement("p",null,"I have a passion for designing and developing seamless experiences and elegant interfaces. From web designs, to full-stack mobile applications, I will be a valuable addition to your next project.")),l.a.createElement(i.Fade,{up:!0},l.a.createElement("p",null,"I have just completed"," ",l.a.createElement("a",{href:"https://www.fullstackacademy.com/"},l.a.createElement("i",null,"FullStack Academy of Code")),". FullStack is a 17-week full-time software development bootcamp. Its curriculum covers NodeJS, Express, Relational Databases such as PostgreSQL, React and Redux.")))),l.a.createElement(i.Fade,{up:!0},l.a.createElement("div",{className:"headshot"},l.a.createElement("img",{src:"aboutMe/pic5.png",alt:"robert"}),l.a.createElement("div",{className:"headshot-border"}))))},j=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2);t[0],t[1];return l.a.createElement("div",{id:"experience-cont"},l.a.createElement("div",{id:"experience"},l.a.createElement(i.Fade,{up:!0},l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,l.a.createElement("i",null,"Experience")),l.a.createElement("div",{className:"line"})),l.a.createElement("div",{className:"job"},l.a.createElement("h3",null,"Recruiter & Buyer",l.a.createElement("a",{href:"http://www.foxs.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",null," @ Fox's Clothing Stores"))),l.a.createElement("p",{className:"work-date"},"May 2017 - November 2019"),l.a.createElement("ul",null,l.a.createElement("li",null,"Worked with software team to implement an RFID inventory management system"),l.a.createElement("li",null,"Helped facilitate improvements to software systems by communicating with in-house developers on behalf of retail, warehouse and buying teams"),l.a.createElement("li",null,"Recruited employees for 17 retail stores, a distribution center, and a corporate office"))),l.a.createElement("div",{className:"job"},l.a.createElement("h3",null,"Design Support",l.a.createElement("a",{href:"https://www.mpfp.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",null," @ M Paul Friedberg & Partners"))),l.a.createElement("p",{className:"work-date"},"Summer 2016"),l.a.createElement("ul",null,l.a.createElement("li",null,"Produced and edited construction documents using AutoCAD"),l.a.createElement("li",null,"Created renderings to communicate design concepts using Adobe Suite/SketchUp"))),l.a.createElement("div",{className:"job-mobile"},l.a.createElement("h3",null,"Recruiter & Buyer",l.a.createElement("a",{href:"http://www.foxs.com",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("br",null),l.a.createElement("i",null," @ Fox's Clothing Stores"))),l.a.createElement("p",{className:"work-date"},"May 2017 - November 2019")),l.a.createElement("div",{className:"job-mobile"},l.a.createElement("h3",null,"Design Support",l.a.createElement("a",{href:"https://www.mpfp.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("br",null),l.a.createElement("i",null," @ M Paul Friedberg & Partners"))),l.a.createElement("p",{className:"work-date"},"Summer 2016")))))},F=a(88),x=a(89),O=a.n(x),C=a(90),S=a.n(C),R=a(91),I=(a(125),function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),m=Object(o.a)(c,2),s=m[0],u=m[1],d=[{key:1,content:l.a.createElement("img",{src:"FitMinded/mobile01.png",alt:"1"})},{key:2,content:l.a.createElement("img",{src:"FitMinded/mobile02.png",alt:"2"})},{key:3,content:l.a.createElement("img",{src:"FitMinded/mobile03.png",alt:"3"})}].map((function(e,t){return Object(F.a)({},e,{onClick:function(){return r(t)}})}));return l.a.createElement("div",{id:"project-container",className:"fit-minded"},l.a.createElement(i.Fade,{up:!0},l.a.createElement("div",{id:"project",className:"fit-minded"},l.a.createElement("div",{className:"left"},l.a.createElement(O.a,{goToSlide:a,slides:d,config:R.a.gentle,showNavigation:!1,offsetRadius:1})),l.a.createElement("div",{className:"right"},l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,l.a.createElement("i",null,"FitMinded")),l.a.createElement("div",{className:"line"}),l.a.createElement("div",{className:"link-cont"},l.a.createElement("a",{href:"https://github.com/robertjfox/fit-minded",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"icons/github.png",alt:"github"})),l.a.createElement("div",null,l.a.createElement(S.a,{channel:"youtube",isOpen:s,videoId:"7fnAdXZ0UAQ",onClose:function(){return u(!1)}}),l.a.createElement("img",{src:"icons/youtube.png",alt:"youtube",onClick:function(){return u(!0)}})))),l.a.createElement("p",{className:"description"},"FitMinded is a platform that connects people with similar athletic interests. It takes advantage of a non-relational database to efficiently analyze user relationships. I was responsible for developing the database schema, the matching algorithm, the recommendation map, and the UX/UI."),l.a.createElement("div",{className:"technologies"},l.a.createElement("p",null,"React"),l.a.createElement("p",null,"Redux"),l.a.createElement("p",null,"Express"),l.a.createElement("p",null,"Node.js"),l.a.createElement("p",null,"MongoDB"),l.a.createElement("p",null,"Firebase"),l.a.createElement("p",null,"Google Places API"))))))}),P=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),m=Object(o.a)(c,2),s=m[0],u=m[1],d=[{key:1,content:l.a.createElement("img",{src:"RevYou/mobile03.png",alt:"1"})},{key:2,content:l.a.createElement("img",{src:"RevYou/mobile01.png",alt:"2"})},{key:3,content:l.a.createElement("img",{src:"RevYou/mobile02.png",alt:"3"})},{key:4,content:l.a.createElement("img",{src:"RevYou/mobile04.png",alt:"4"})}].map((function(e,t){return Object(F.a)({},e,{onClick:function(){return r(t)}})}));return l.a.createElement("div",{id:"project-container",className:"rev-you"},l.a.createElement(i.Fade,{up:!0},l.a.createElement("div",{id:"project",className:"rev-you"},l.a.createElement("div",{className:"left"},l.a.createElement(O.a,{goToSlide:a,slides:d,config:R.a.gentle,showNavigation:!1,offsetRadius:1})),l.a.createElement("div",{className:"right"},l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,l.a.createElement("i",null,"RevYou")),l.a.createElement("div",{className:"line"}),l.a.createElement("div",{className:"link-cont"},l.a.createElement("a",{href:"https://github.com/robertjfox/RevYou",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"icons/github.png",alt:"github"})),l.a.createElement("div",null,l.a.createElement(S.a,{channel:"youtube",isOpen:s,videoId:"nYFfBlUGRO0",onClose:function(){return u(!1)}}),l.a.createElement("img",{src:"icons/youtube.png",alt:"youtube",onClick:function(){return u(!0)}})))),l.a.createElement("p",{className:"description"},"RevYou is a productivity app for creating and maintaining habits. It takes daily input for a set of custom habits and parses that data to render D3 components which allow users to visualize their progress. This project was built independently over a few days for a hackathon event."),l.a.createElement("div",{className:"technologies"},l.a.createElement("p",null,"React"),l.a.createElement("p",null,"Redux"),l.a.createElement("p",null,"Express"),l.a.createElement("p",null,"Node.js"),l.a.createElement("p",null,"PostgreSQL"),l.a.createElement("p",null,"D3JS"))))))},M=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],r=t[1],c=function(){r(!a)};return l.a.createElement("div",{id:"project-container",className:"you-tuba"},l.a.createElement(i.Fade,{up:!0},l.a.createElement("div",{id:"project",className:"you-tuba"},l.a.createElement("div",{className:"left"},a?l.a.createElement("img",{src:"YouTuba/desktop01.png",alt:"youTuba",className:"you-tuba-images",onMouseEnter:c}):l.a.createElement("img",{src:"YouTuba/desktop02.png",alt:"youTuba",className:"you-tuba-images",onMouseLeave:c})),l.a.createElement("div",{className:"right"},l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,l.a.createElement("i",null,"YouTuba")),l.a.createElement("div",{className:"line"}),l.a.createElement("div",{className:"link-cont"},l.a.createElement("a",{href:"https://github.com/Donuts-Org/donuts-grace-shopper",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"icons/github.png",alt:"github"})),l.a.createElement("a",{href:"https://www.you2ba.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"icons/heroku.png",alt:"heroku"})))),l.a.createElement("p",{className:"description"},"YouTuba is an ecommerce platform for selling musical instruments. It leverages user sessions to allow for both guest and logged-in experiences, as well as the Stripe API for payments. My contribution to this project was the cart and checkout features as well as all of the styling."),l.a.createElement("div",{className:"technologies"},l.a.createElement("p",null,"React"),l.a.createElement("p",null,"Redux"),l.a.createElement("p",null,"Express"),l.a.createElement("p",null,"Node.js"),l.a.createElement("p",null,"PostgreSQL"),l.a.createElement("p",null,"Stripe API"))))))},A=function(){return l.a.createElement("div",{id:"contact"},l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,l.a.createElement("i",null,"Contact Me")),l.a.createElement("div",{className:"line"})),l.a.createElement("div",{className:"description"},l.a.createElement("p",null,"I am currently open to job opportunities, as well as freelance and contract work. Please feel free to reach out with any opportunities or inquiries.")),l.a.createElement("div",null,l.a.createElement("h2",null,l.a.createElement("a",{href:"mailto:".concat("robertjfox94@gmail.com"),target:"_blank",rel:"noopener noreferrer"},"Get in touch - ",l.a.createElement("i",null,"robertjfox94@gmail.com")))))},_=a(163);var Y=function(){var e=Object(n.useContext)(p),t=e.page,a=e.setPage;return l.a.createElement("div",{id:"main"},l.a.createElement(_.a,{customPageNumber:t,pageOnChange:function(e){return(n=e)!=t&&a(n),void console.log(n);var n}},l.a.createElement(y,null),l.a.createElement(k,null),l.a.createElement(j,null),l.a.createElement(I,null),l.a.createElement(P,null),l.a.createElement(M,null),l.a.createElement(A,null)))};var T=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(g,null,l.a.createElement("header",{className:"App-header"}),l.a.createElement(w,null),l.a.createElement(f,null),l.a.createElement(b,null),l.a.createElement(Y,null)))};c.a.render(l.a.createElement(T,null),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.cb904fa3.chunk.js.map