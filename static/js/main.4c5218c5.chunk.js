(this["webpackJsonpra-homeworks-hoc"]=this["webpackJsonpra-homeworks-hoc"]||[]).push([[0],{11:function(e,t,a){e.exports=a(26)},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(4),c=a.n(o),u=a(8);function l(e){var t=e.header;return n.a.createElement("h1",{className:"header"},t)}l.defaultProps={header:"Formating the publication data"};var s=a(5),m=a.n(s),i=a(6),d=a(7),p=a(9),f=a(10),h=a(1),w=a.n(h);var b=function(e){return n.a.createElement("p",{className:"date"},e.date)};var v=function(e){return function(t){return function(a){Object(f.a)(o,a);var r=Object(p.a)(o);function o(){return Object(i.a)(this,o),r.apply(this,arguments)}return Object(d.a)(o,[{key:"render",value:function(){var a="function"===typeof e?e(this.props.date):e;return n.a.createElement(t,Object.assign({},this.props,{date:a}))}}]),o}(n.a.Component)}}((function(e){var t=w()(e,"YYYY-MM-DD hh:mm:ss"),a=w()().diff(t);return a<36e5?"".concat(w()().diff(t,"minutes")," \u043c\u0438\u043d\u0443\u0442 \u043d\u0430\u0437\u0430\u0434"):a<864e5?"".concat(w()().diff(t,"hours")," \u0447\u0430\u0441\u043e\u0432 \u043d\u0430\u0437\u0430\u0434"):"".concat(w()().diff(t,"days")," \u0434\u043d\u0435\u0439 \u043d\u0430\u0437\u0430\u0434")}))(b);var y=function(e){return n.a.createElement("div",{className:"video"},n.a.createElement("iframe",{src:e.url,title:"title",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),n.a.createElement(v,{date:e.date}))};var E=function(e){return e.list.map((function(e){return n.a.createElement(y,{url:e.url,date:e.date,key:m.a.generate()})}))};function O(){var e=Object(r.useState)([{url:"https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",date:"2017-07-31 13:24:00"},{url:"https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",date:"2020-03-03 12:10:00"},{url:"https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",date:"2020-04-14 23:16:00"},{url:"https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",date:"2018-01-03 12:10:00"},{url:"https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",date:"2020-04-10 16:17:00"},{url:"https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",date:"2017-12-02 05:24:00"}]),t=Object(u.a)(e,1)[0];return n.a.createElement(n.a.Fragment,null,n.a.createElement(l,null),n.a.createElement("div",{class:"video-list"},n.a.createElement(E,{list:t})))}a(25);c.a.render(n.a.createElement(O,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.4c5218c5.chunk.js.map