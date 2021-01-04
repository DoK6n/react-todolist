(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{20:function(n,t,e){},23:function(n,t,e){"use strict";e.r(t);var r=e(1),o=e(0),i=e.n(o),c=e(11),a=e.n(c),d=(e(20),e(2)),u=e(3);function b(){var n=Object(d.a)(["\n  width: 512px;\n  height: 768px;\n\n  position: relative;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);\n\n  margin: 0 auto;\n\n  margin-top: 95px;\n  margin-bottom: 32px;\n  display: flex;\n  flex-direction: column;\n\n"]);return b=function(){return n},n}var s=u.c.div(b());var f=function(n){var t=n.children;return Object(r.jsx)(s,{children:t})},l=e(4),x=e(10),j=[{id:1,text:"\uc544\uce68\uc5d0 \uc77c\ucc0d \uc77c\uc5b4\ub098\uae30",done:!0},{id:2,text:"\ub9ac\uc561\ud2b8 \uacf5\ubd80\ud558\uae30",done:!0},{id:3,text:"\uc810\uc2ec\uc2dd\uc0ac \ud558\uae30",done:!1},{id:4,text:"\ub9ac\uc561\ud2b8 \ubcf5\uc2b5\ud558\uae30",done:!1},{id:5,text:"\uc9d1\ubc16\uc5d0 \ub098\uac00\uc9c0 \ub9d0\uae30",done:!1}];function p(n,t){switch(t.type){case"CREATE":return n.concat(t.todo);case"TOGGLE":return n.map((function(n){return n.id===t.id?Object(x.a)(Object(x.a)({},n),{},{done:!n.done}):n}));case"REMOVE":return n.filter((function(n){return n.id!==t.id}));default:throw new Error("Error !! : ".concat(t.type))}}var v=Object(o.createContext)(),O=Object(o.createContext)(),h=Object(o.createContext)();function g(n){var t=n.children,e=Object(o.useReducer)(p,j),i=Object(l.a)(e,2),c=i[0],a=i[1],d=Object(o.useRef)(6);return Object(r.jsx)(v.Provider,{value:c,children:Object(r.jsx)(O.Provider,{value:a,children:Object(r.jsx)(h.Provider,{value:d,children:t})})})}function m(){var n=Object(o.useContext)(v);if(!n)throw new Error("Cannot find TodoProvider");return n}function w(){var n=Object(o.useContext)(O);if(!n)throw new Error("Cannot find TodoProvider");return n}function y(){var n=Object(d.a)(["\n  padding-top: 48px;\n  padding-left: 32px;\n  padding-right: 32px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #e9ecef;\n  h1 {\n    margin: 0;\n    font-size: 36px;\n    color: #343a40;\n  }\n  .day {\n    margin-top: 4px;\n    color: #868e96;\n    font-size: 21px;\n  }\n  .tasks-left {\n    color: #20c997;\n    font-size: 18px;\n    margin-top: 40px;\n    font-weight: bold;\n  }\n"]);return y=function(){return n},n}var k=u.c.div(y());var C=function(){var n=m().filter((function(n){return!n.done})),t=new Date,e=t.toLocaleDateString("ko-KR",{year:"numeric",month:"numeric",day:"numeric"}),o=t.toLocaleDateString("ko-KR",{weekday:"long"});return Object(r.jsxs)(k,{children:[Object(r.jsx)("h1",{children:e}),Object(r.jsx)("div",{className:"day",children:o}),Object(r.jsxs)("div",{className:"tasks-left",children:["\ud560 \uc77c ",n.length,"\uac1c \ub0a8\uc74c"]})]})},E=e(5);function z(){var n=Object(d.a)(["\n      color: #ced4da;\n    "]);return z=function(){return n},n}function T(){var n=Object(d.a)(["\n  flex: 1;\n  font-size: 21px;\n  color #495057;\n  ","\n"]);return T=function(){return n},n}function P(){var n=Object(d.a)(["\n      border: 1px solid #38d9a9;\n      color: #38d9a9;\n    "]);return P=function(){return n},n}function R(){var n=Object(d.a)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 16px;\n  border: 1px solid #ced4da;\n  font-size: 24px;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n  cursor: pointer;\n  ","\n  svg {\n    padding-left: 4px;\n  } \n"]);return R=function(){return n},n}function S(){var n=Object(d.a)(["\n  display: flex;\n  aligin-items: center;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  &:hover {\n    ","{\n      display: initial;\n    }\n  }\n"]);return S=function(){return n},n}function F(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #dee2e6;\n  font-size: 24px;\n  cursor: pointer;\n  &:hover {\n    color: #ff6b6b;\n  }\n  display: none;\n"]);return F=function(){return n},n}var L=u.c.div(F()),D=u.c.div(S(),L),G=u.c.div(R(),(function(n){return n.done&&Object(u.b)(P())})),M=u.c.div(T(),(function(n){return n.done&&Object(u.b)(z())}));function A(n){var t=n.id,e=n.done,o=n.text,i=w();return Object(r.jsxs)(D,{children:[Object(r.jsx)(G,{done:e,onClick:function(){return i({type:"TOGGLE",id:t})},children:e&&Object(r.jsx)(E.c,{})}),Object(r.jsx)(M,{done:e,children:o}),Object(r.jsx)(L,{onClick:function(){return i({type:"REMOVE",id:t})},children:Object(r.jsx)(E.b,{})})]})}var B=i.a.memo(A);function I(){var n=Object(d.a)(["\n  flex: 1;\n  padding: 20px 32px;\n  padding-bottom: 48px;\n  over-flow-y: auto;\n  \n  overflow: auto;\n\n  &::-webkit-scrollbar {\n    display:none;\n  }\n\n"]);return I=function(){return n},n}var J=u.c.div(I());var K=function(){var n=m();return Object(r.jsx)(J,{children:n.map((function(n){return Object(r.jsx)(B,{id:n.id,text:n.text,done:n.done},n.id)}))})};function N(){var n=Object(d.a)(["\n  padding: 12px;\n  border-radius: 4px;\n  border: 1px solid #dee2e6;\n  width: 100%;\n  outline: none;\n  font-size: 18px;\n  box-sizing: border-box;\n"]);return N=function(){return n},n}function V(){var n=Object(d.a)(["\n  background: #f8f9fa;\n  padding: 32px 32px 72px 32px;\n\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n  border-top: 1px solid #e9ecef;\n"]);return V=function(){return n},n}function q(){var n=Object(d.a)(["\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n"]);return q=function(){return n},n}function H(){var n=Object(d.a)(["\n      background: #ff6b6b;\n      &:hover {\n          background: #ff8787;\n      }\n      &:active {\n          background: #fa5252;\n      }\n      transform: translate(-50%, 50%) rotate(45deg);\n    "]);return H=function(){return n},n}function Q(){var n=Object(d.a)(["\n  background: #38d9a9;\n  &:hover {\n    background: #63e6be;\n  }\n  &:active {\n    background: #20c997;\n  }\n\n  z-index: 5;\n  cursor: pointer;\n  width: 80px;\n  height: 80px;\n  display: block;\n  align-items: center;\n  justify-content: center;\n  font-size: 60px;\n  position: absolute;\n  left: 50%;\n  bottom: 0px;\n  transform: translate(-50%, 50%);\n  color: white;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  display: flex;\n\n  transition: 0.125s all ease-in;\n\n  ","\n"]);return Q=function(){return n},n}var U=u.c.button(Q(),(function(n){return n.open&&Object(u.b)(H())})),W=u.c.div(q()),X=u.c.form(V()),Y=u.c.input(N());function Z(){var n=Object(o.useState)(!1),t=Object(l.a)(n,2),e=t[0],i=t[1],c=Object(o.useState)(""),a=Object(l.a)(c,2),d=a[0],u=a[1],b=w(),s=function(){var n=Object(o.useContext)(h);if(!n)throw new Error("Cannot find TodoProvider");return n}();return Object(r.jsxs)(r.Fragment,{children:[e&&Object(r.jsx)(W,{children:Object(r.jsx)(X,{onSubmit:function(n){n.preventDefault(),b({type:"CREATE",todo:{id:s.current,text:d,done:!1}}),u(""),i(!1),s.current+=1},children:Object(r.jsx)(Y,{autoFocus:!0,placeholder:"\ud560 \uc77c\uc744 \uc785\ub825 \ud6c4, Enter\ub97c \ub204\ub974\uc138\uc694.",onChange:function(n){return u(n.target.value)},value:d})})}),Object(r.jsx)(U,{onClick:function(){return i(!e)},open:e,children:Object(r.jsx)(E.a,{})})]})}var $=i.a.memo(Z);function _(){var n=Object(d.a)(["\n  body {\n    background: #e9ecef;\n    &::-webkit-scrollbar {\n      display:none;\n    }\n  }\n"]);return _=function(){return n},n}var nn=Object(u.a)(_());var tn=function(){return Object(r.jsxs)(g,{children:[Object(r.jsx)(nn,{}),Object(r.jsxs)(f,{children:[Object(r.jsx)(C,{}),Object(r.jsx)(K,{}),Object(r.jsx)($,{})]})]})},en=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,24)).then((function(t){var e=t.getCLS,r=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;e(n),r(n),o(n),i(n),c(n)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(tn,{})}),document.getElementById("root")),en()}},[[23,1,2]]]);
//# sourceMappingURL=main.e9f91dcf.chunk.js.map