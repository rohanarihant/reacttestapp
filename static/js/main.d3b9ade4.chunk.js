(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),i=n(3),l=n(4),d=n(6),u=n(5),m=n(7),s=(n(14),Object(a.forwardRef)(function(e,t){Object(a.useImperativeHandle)(t,function(){return{editHandler:function(){alert("Edit from ThirdComponent")},deleteHandler:function(){alert("Delete from ThirdComponent")}}})})),p=function(e){var t=Object(a.useRef)(),n=function(e){"Edit"===e?t.current.editHandler():t.current.deleteHandler()};return r.a.createElement("div",{id:"myDropdown",className:"dropdown-content"},e.menuItem.map(function(e,t){return r.a.createElement("a",{key:t,onClick:n.bind(void 0,e)},e)}),r.a.createElement(s,{ref:t}))},f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={menuItem:["Edit","Delete"],displayCog:!1},n.toggleCog=function(e){var t=n.state.displayCog;n.setState({displayCog:!t})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.menuItem,n=e.displayCog;return r.a.createElement("div",{className:"App"},r.a.createElement("img",{src:"Black_Settings.png",onClick:this.toggleCog}),n&&r.a.createElement(p,{menuItem:t}))}}]),t}(a.Component);c.a.render(r.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.d3b9ade4.chunk.js.map