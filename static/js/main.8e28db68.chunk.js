(this["webpackJsonpreact-redux-demo"]=this["webpackJsonpreact-redux-demo"]||[]).push([[0],{14:function(e,t,n){e.exports=n(29)},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(2),o=n.n(a),u=(n(19),n(20),n(9)),l=n(10),s=n(13),i=n(12),E=(n(21),function(e){return c.a.createElement("div",{className:"CounterControl",onClick:e.clicked},e.label)}),d=(n(22),function(e){return c.a.createElement("div",{className:"CounterOutput"},"Current Counter: ",e.value)}),m=n(4),p=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={counter:0},e.counterChangedHandler=function(t,n){switch(t){case"inc":e.setState((function(e){return{counter:e.counter+1}}));break;case"dec":e.setState((function(e){return{counter:e.counter-1}}));break;case"add":e.setState((function(e){return{counter:e.counter+n}}));break;case"sub":e.setState((function(e){return{counter:e.counter-n}}))}},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(d,{value:this.props.ctr}),c.a.createElement(E,{label:"Increment",clicked:this.props.onIncrementCounter}),c.a.createElement(E,{label:"Decrement",clicked:this.props.onDecrementCounter}),c.a.createElement(E,{label:"Add 5",clicked:this.props.onAdd}),c.a.createElement(E,{label:"Subtract 5",clicked:this.props.onSubstract}),c.a.createElement("hr",null),c.a.createElement("button",{onClick:this.props.onStoreResult},"Store Result"),c.a.createElement("ul",null,this.props.storedResults.map((function(t){return c.a.createElement("li",{key:t.id,onClick:e.props.onDeleteResult}," ",t.value," ")}))))}}]),n}(r.Component),b=Object(m.b)((function(e){return{ctr:e.counter,storedResults:e.results}}),(function(e){return{onIncrementCounter:function(){e({type:"INCREMENT"})},onDecrementCounter:function(){e({type:"DECREMENT"})},onAdd:function(){e({type:"ADD",value:5})},onSubstract:function(){e({type:"SUB",value:5})},onStoreResult:function(){e({type:"STORE_RESULT"})},onDeleteResult:function(){e({type:"DELETE_RESULT"})}}}))(p);var f=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=n(3),h=n(1),O={counter:0,results:[]};var S=Object(v.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return Object(h.a)(Object(h.a)({},e),{},{counter:e.counter+1});case"DECREMENT":return Object(h.a)(Object(h.a)({},e),{},{counter:e.counter-1});case"ADD":return Object(h.a)(Object(h.a)({},e),{},{counter:e.counter+t.value});case"SUB":return Object(h.a)(Object(h.a)({},e),{},{counter:e.counter-t.value});case"STORE_RESULT":return Object(h.a)(Object(h.a)({},e),{},{results:e.results.concat({id:new Date,value:e.counter})});case"DELETE_RESULT":return{}}return e}));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m.a,{store:S},c.a.createElement(f,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.8e28db68.chunk.js.map