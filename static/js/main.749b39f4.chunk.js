(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var o=e(7),r=e.n(o),c=e(2),s=e(3),i=e(5),a=e(4),u=e(1),d=e.n(u),l=(e(12),e(13),e(0)),j=function(t){Object(i.a)(e,t);var n=Object(a.a)(e);function e(){var t;Object(c.a)(this,e);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(t=n.call.apply(n,[this].concat(r))).state={},t}return Object(s.a)(e,[{key:"render",value:function(){var t=this.props.goods;return Object(l.jsx)("ul",{children:t.map((function(t){return Object(l.jsx)("li",{style:{color:t.color},children:t.name},t.id)}))})}}]),e}(d.a.Component),h="https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json";function f(){return fetch(h).then((function(t){return t.json()}))}var b=function(t){Object(i.a)(e,t);var n=Object(a.a)(e);function e(){var t;Object(c.a)(this,e);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(t=n.call.apply(n,[this].concat(r))).state={goods:[]},t}return Object(s.a)(e,[{key:"render",value:function(){var t=this;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"Dynamic list of Goods"}),Object(l.jsxs)("div",{className:"Buttons",children:[Object(l.jsx)("button",{type:"button",onClick:function(){return f().then((function(n){return t.setState({goods:n})}))},children:"Load All Goods"}),Object(l.jsx)("button",{type:"button",onClick:function(){return f().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})).then((function(n){return t.setState({goods:n})}))},children:"Load 5 First Goods"}),Object(l.jsx)("button",{type:"button",onClick:function(){return fetch(h).then((function(t){return t.json()})).then((function(t){return t.filter((function(t){return"red"===t.color}))})).then((function(n){return t.setState({goods:n})}))},children:"Load Red Goods"})]}),Object(l.jsx)("div",{className:"Goods__List",children:Object(l.jsx)(j,{goods:this.state.goods})}),Object(l.jsx)("button",{type:"button",onClick:function(){return window.location.reload()},children:"Refresh"})]})})}}]),e}(d.a.Component);r.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.749b39f4.chunk.js.map