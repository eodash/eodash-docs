var h1=Object.defineProperty;var yv=e=>{throw TypeError(e)};var y1=(e,r,t)=>r in e?h1(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var xe=(e,r,t)=>y1(e,typeof r!="symbol"?r+"":r,t),mo=(e,r,t)=>r.has(e)||yv("Cannot "+t);var M=(e,r,t)=>(mo(e,r,"read from private field"),t?t.call(e):r.get(e)),Q=(e,r,t)=>r.has(e)?yv("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,t),X=(e,r,t,n)=>(mo(e,r,"write to private field"),n?n.call(e,t):r.set(e,t),t),Ue=(e,r,t)=>(mo(e,r,"access private method"),t);import{a as mn,b as ue,D as G_}from"./lit-element.CBn2YVps.js";import{e as m1,a as g1}from"./addCommonStyleSheet.oXwlTwx_.js";import{d as N}from"./dayjs.min.Ba62AOpW.js";import{u as wr,t as Er,g as kr,v as b1,a as _1,b as S1,d as W_,i as K_,m as Y_,C as w1,T as E1,c as I1}from"./vis-timeline-graph2d.BOF7uRR_.js";import{n as rt}from"./when.BR7zwNJC.js";import{c as et,g as H_}from"./commonjsHelpers.BosuxZz1.js";import{o as mv}from"./map.DiiNQ3pp.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{g as R1}from"./getElement.CdRlZPdn.js";import{i as T1}from"./index.BIJR-IiI.js";const Pt=`
:host {
  display: block;
}
`;g1();const dn=`
${m1}

:host, :root {
  --navigation-button-display: inline-flex;
}

[part=controls] {
  display: flex;
  align-items: center;
  gap: 8px;
}

#date-container input {
  min-width: 90px;
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-align: center;
  font-size: small;
  background: white;
  outline: none;    
  margin: 0px 2px;
}

#date-container input.input-field {
  border: 1.5px solid #0e0e0e30;
  padding: 2px;
  border-radius: 4px;
}

#date-container input.input-field:focus-visible {
  border: 2px solid #005fcc;
}

button.icon.previous,
button.icon.next {
  display: var(--navigation-button-display);
}

tc-range-slider {
  display: inline-block;
  margin: 0;
}
`;/**
 * vis-data
 * http://visjs.org/
 *
 * Manage unstructured data using DataSet. Add, update, and remove data, and listen for changes in the data.
 *
 * @version 8.0.3
 * @date    2025-09-10T16:22:00.613Z
 *
 * @copyright (c) 2011-2017 Almende B.V, http://almende.com
 * @copyright (c) 2017-2019 visjs contributors, https://github.com/visjs
 *
 * @license
 * vis.js is dual licensed under both
 *
 *   1. The Apache 2.0 License
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *   and
 *
 *   2. The MIT License
 *      http://opensource.org/licenses/MIT
 *
 * vis.js may be distributed under either license.
 */var gv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Y(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var go={exports:{}},bv={},Wn,_v;function he(){if(_v)return Wn;_v=1;var e=function(r){return r&&r.Math===Math&&r};return Wn=e(typeof globalThis=="object"&&globalThis)||e(typeof window=="object"&&window)||e(typeof self=="object"&&self)||e(typeof gv=="object"&&gv)||e(typeof Wn=="object"&&Wn)||function(){return this}()||Function("return this")(),Wn}var bo,Sv;function ne(){return Sv||(Sv=1,bo=function(e){try{return!!e()}catch{return!0}}),bo}var _o,wv;function di(){if(wv)return _o;wv=1;var e=ne();return _o=!e(function(){var r=(function(){}).bind();return typeof r!="function"||r.hasOwnProperty("prototype")}),_o}var So,Ev;function ta(){if(Ev)return So;Ev=1;var e=di(),r=Function.prototype,t=r.apply,n=r.call;return So=typeof Reflect=="object"&&Reflect.apply||(e?n.bind(t):function(){return n.apply(t,arguments)}),So}var wo,Iv;function se(){if(Iv)return wo;Iv=1;var e=di(),r=Function.prototype,t=r.call,n=e&&r.bind.bind(t,t);return wo=e?n:function(i){return function(){return t.apply(i,arguments)}},wo}var Eo,Rv;function Wr(){if(Rv)return Eo;Rv=1;var e=se(),r=e({}.toString),t=e("".slice);return Eo=function(n){return t(r(n),8,-1)},Eo}var Io,Tv;function V_(){if(Tv)return Io;Tv=1;var e=Wr(),r=se();return Io=function(t){if(e(t)==="Function")return r(t)},Io}var Ro,Ov;function Ie(){if(Ov)return Ro;Ov=1;var e=typeof document=="object"&&document.all;return Ro=typeof e>"u"&&e!==void 0?function(r){return typeof r=="function"||r===e}:function(r){return typeof r=="function"},Ro}var To={},Oo,xv;function ye(){if(xv)return Oo;xv=1;var e=ne();return Oo=!e(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),Oo}var xo,qv;function Ke(){if(qv)return xo;qv=1;var e=di(),r=Function.prototype.call;return xo=e?r.bind(r):function(){return r.apply(r,arguments)},xo}var qo={},Pv;function Kf(){if(Pv)return qo;Pv=1;var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,t=r&&!e.call({1:2},1);return qo.f=t?function(i){var a=r(this,i);return!!a&&a.enumerable}:e,qo}var Po,Av;function pi(){return Av||(Av=1,Po=function(e,r){return{enumerable:!(e&1),configurable:!(e&2),writable:!(e&4),value:r}}),Po}var Ao,Dv;function na(){if(Dv)return Ao;Dv=1;var e=se(),r=ne(),t=Wr(),n=Object,i=e("".split);return Ao=r(function(){return!n("z").propertyIsEnumerable(0)})?function(a){return t(a)==="String"?i(a,""):n(a)}:n,Ao}var Do,Mv;function hi(){return Mv||(Mv=1,Do=function(e){return e==null}),Do}var Mo,Cv;function Nt(){if(Cv)return Mo;Cv=1;var e=hi(),r=TypeError;return Mo=function(t){if(e(t))throw new r("Can't call method on "+t);return t},Mo}var Co,$v;function Ir(){if($v)return Co;$v=1;var e=na(),r=Nt();return Co=function(t){return e(r(t))},Co}var $o,Nv;function Le(){if(Nv)return $o;Nv=1;var e=Ie();return $o=function(r){return typeof r=="object"?r!==null:e(r)},$o}var No,Lv;function we(){return Lv||(Lv=1,No={}),No}var Lo,jv;function Ze(){if(jv)return Lo;jv=1;var e=we(),r=he(),t=Ie(),n=function(i){return t(i)?i:void 0};return Lo=function(i,a){return arguments.length<2?n(e[i])||n(r[i]):e[i]&&e[i][a]||r[i]&&r[i][a]},Lo}var jo,Fv;function Re(){if(Fv)return jo;Fv=1;var e=se();return jo=e({}.isPrototypeOf),jo}var Fo,kv;function gn(){if(kv)return Fo;kv=1;var e=he(),r=e.navigator,t=r&&r.userAgent;return Fo=t?String(t):"",Fo}var ko,Bv;function yi(){if(Bv)return ko;Bv=1;var e=he(),r=gn(),t=e.process,n=e.Deno,i=t&&t.versions||n&&n.version,a=i&&i.v8,o,u;return a&&(o=a.split("."),u=o[0]>0&&o[0]<4?1:+(o[0]+o[1])),!u&&r&&(o=r.match(/Edge\/(\d+)/),(!o||o[1]>=74)&&(o=r.match(/Chrome\/(\d+)/),o&&(u=+o[1]))),ko=u,ko}var Bo,Uv;function bn(){if(Uv)return Bo;Uv=1;var e=yi(),r=ne(),t=he(),n=t.String;return Bo=!!Object.getOwnPropertySymbols&&!r(function(){var i=Symbol("symbol detection");return!n(i)||!(Object(i)instanceof Symbol)||!Symbol.sham&&e&&e<41}),Bo}var Uo,zv;function X_(){if(zv)return Uo;zv=1;var e=bn();return Uo=e&&!Symbol.sham&&typeof Symbol.iterator=="symbol",Uo}var zo,Gv;function mi(){if(Gv)return zo;Gv=1;var e=Ze(),r=Ie(),t=Re(),n=X_(),i=Object;return zo=n?function(a){return typeof a=="symbol"}:function(a){var o=e("Symbol");return r(o)&&t(o.prototype,i(a))},zo}var Go,Wv;function _n(){if(Wv)return Go;Wv=1;var e=String;return Go=function(r){try{return e(r)}catch{return"Object"}},Go}var Wo,Kv;function Kr(){if(Kv)return Wo;Kv=1;var e=Ie(),r=_n(),t=TypeError;return Wo=function(n){if(e(n))return n;throw new t(r(n)+" is not a function")},Wo}var Ko,Yv;function Yf(){if(Yv)return Ko;Yv=1;var e=Kr(),r=hi();return Ko=function(t,n){var i=t[n];return r(i)?void 0:e(i)},Ko}var Yo,Hv;function O1(){if(Hv)return Yo;Hv=1;var e=Ke(),r=Ie(),t=Le(),n=TypeError;return Yo=function(i,a){var o,u;if(a==="string"&&r(o=i.toString)&&!t(u=e(o,i))||r(o=i.valueOf)&&!t(u=e(o,i))||a!=="string"&&r(o=i.toString)&&!t(u=e(o,i)))return u;throw new n("Can't convert object to primitive value")},Yo}var Ho={exports:{}},Vo,Vv;function Sn(){return Vv||(Vv=1,Vo=!0),Vo}var Xo,Xv;function x1(){if(Xv)return Xo;Xv=1;var e=he(),r=Object.defineProperty;return Xo=function(t,n){try{r(e,t,{value:n,configurable:!0,writable:!0})}catch{e[t]=n}return n},Xo}var Zv;function Hf(){if(Zv)return Ho.exports;Zv=1;var e=Sn(),r=he(),t=x1(),n="__core-js_shared__",i=Ho.exports=r[n]||t(n,{});return(i.versions||(i.versions=[])).push({version:"3.44.0",mode:e?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.44.0/LICENSE",source:"https://github.com/zloirock/core-js"}),Ho.exports}var Zo,Jv;function wn(){if(Jv)return Zo;Jv=1;var e=Hf();return Zo=function(r,t){return e[r]||(e[r]=t||{})},Zo}var Jo,Qv;function pr(){if(Qv)return Jo;Qv=1;var e=Nt(),r=Object;return Jo=function(t){return r(e(t))},Jo}var Qo,ed;function Te(){if(ed)return Qo;ed=1;var e=se(),r=pr(),t=e({}.hasOwnProperty);return Qo=Object.hasOwn||function(i,a){return t(r(i),a)},Qo}var es,rd;function ia(){if(rd)return es;rd=1;var e=se(),r=0,t=Math.random(),n=e(1.1.toString);return es=function(i){return"Symbol("+(i===void 0?"":i)+")_"+n(++r+t,36)},es}var rs,td;function Oe(){if(td)return rs;td=1;var e=he(),r=wn(),t=Te(),n=ia(),i=bn(),a=X_(),o=e.Symbol,u=r("wks"),c=a?o.for||o:o&&o.withoutSetter||n;return rs=function(f){return t(u,f)||(u[f]=i&&t(o,f)?o[f]:c("Symbol."+f)),u[f]},rs}var ts,nd;function Z_(){if(nd)return ts;nd=1;var e=Ke(),r=Le(),t=mi(),n=Yf(),i=O1(),a=Oe(),o=TypeError,u=a("toPrimitive");return ts=function(c,f){if(!r(c)||t(c))return c;var v=n(c,u),p;if(v){if(f===void 0&&(f="default"),p=e(v,c,f),!r(p)||t(p))return p;throw new o("Can't convert object to primitive value")}return f===void 0&&(f="number"),i(c,f)},ts}var ns,id;function Vf(){if(id)return ns;id=1;var e=Z_(),r=mi();return ns=function(t){var n=e(t,"string");return r(n)?n:n+""},ns}var is,ad;function J_(){if(ad)return is;ad=1;var e=he(),r=Le(),t=e.document,n=r(t)&&r(t.createElement);return is=function(i){return n?t.createElement(i):{}},is}var as,od;function Q_(){if(od)return as;od=1;var e=ye(),r=ne(),t=J_();return as=!e&&!r(function(){return Object.defineProperty(t("div"),"a",{get:function(){return 7}}).a!==7}),as}var sd;function aa(){if(sd)return To;sd=1;var e=ye(),r=Ke(),t=Kf(),n=pi(),i=Ir(),a=Vf(),o=Te(),u=Q_(),c=Object.getOwnPropertyDescriptor;return To.f=e?c:function(v,p){if(v=i(v),p=a(p),u)try{return c(v,p)}catch{}if(o(v,p))return n(!r(t.f,v,p),v[p])},To}var os,ud;function q1(){if(ud)return os;ud=1;var e=ne(),r=Ie(),t=/#|\.prototype\./,n=function(c,f){var v=a[i(c)];return v===u?!0:v===o?!1:r(f)?e(f):!!f},i=n.normalize=function(c){return String(c).replace(t,".").toLowerCase()},a=n.data={},o=n.NATIVE="N",u=n.POLYFILL="P";return os=n,os}var ss,cd;function oa(){if(cd)return ss;cd=1;var e=V_(),r=Kr(),t=di(),n=e(e.bind);return ss=function(i,a){return r(i),a===void 0?i:t?n(i,a):function(){return i.apply(a,arguments)}},ss}var us={},cs,ld;function eS(){if(ld)return cs;ld=1;var e=ye(),r=ne();return cs=e&&r(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),cs}var ls,fd;function Yr(){if(fd)return ls;fd=1;var e=Le(),r=String,t=TypeError;return ls=function(n){if(e(n))return n;throw new t(r(n)+" is not an object")},ls}var vd;function nr(){if(vd)return us;vd=1;var e=ye(),r=Q_(),t=eS(),n=Yr(),i=Vf(),a=TypeError,o=Object.defineProperty,u=Object.getOwnPropertyDescriptor,c="enumerable",f="configurable",v="writable";return us.f=e?t?function(y,m,g){if(n(y),m=i(m),n(g),typeof y=="function"&&m==="prototype"&&"value"in g&&v in g&&!g[v]){var _=u(y,m);_&&_[v]&&(y[m]=g.value,g={configurable:f in g?g[f]:_[f],enumerable:c in g?g[c]:_[c],writable:!1})}return o(y,m,g)}:o:function(y,m,g){if(n(y),m=i(m),n(g),r)try{return o(y,m,g)}catch{}if("get"in g||"set"in g)throw new a("Accessors not supported");return"value"in g&&(y[m]=g.value),y},us}var fs,dd;function En(){if(dd)return fs;dd=1;var e=ye(),r=nr(),t=pi();return fs=e?function(n,i,a){return r.f(n,i,t(1,a))}:function(n,i,a){return n[i]=a,n},fs}var vs,pd;function U(){if(pd)return vs;pd=1;var e=he(),r=ta(),t=V_(),n=Ie(),i=aa().f,a=q1(),o=we(),u=oa(),c=En(),f=Te(),v=function(p){var y=function(m,g,_){if(this instanceof y){switch(arguments.length){case 0:return new p;case 1:return new p(m);case 2:return new p(m,g)}return new p(m,g,_)}return r(p,this,arguments)};return y.prototype=p.prototype,y};return vs=function(p,y){var m=p.target,g=p.global,_=p.stat,O=p.proto,R=g?e:_?e[m]:e[m]&&e[m].prototype,w=g?o:o[m]||c(o,m,{})[m],A=w.prototype,I,x,D,P,E,T,q,C,j;for(P in y)I=a(g?P:m+(_?".":"#")+P,p.forced),x=!I&&R&&f(R,P),T=w[P],x&&(p.dontCallGetSet?(j=i(R,P),q=j&&j.value):q=R[P]),E=x&&q?q:y[P],!(!I&&!O&&typeof T==typeof E)&&(p.bind&&x?C=u(E,e):p.wrap&&x?C=v(E):O&&n(E)?C=t(E):C=E,(p.sham||E&&E.sham||T&&T.sham)&&c(C,"sham",!0),c(w,P,C),O&&(D=m+"Prototype",f(o,D)||c(o,D,{}),c(o[D],P,E),p.real&&A&&(I||!A[P])&&c(A,P,E)))},vs}var hd;function P1(){if(hd)return bv;hd=1;var e=U(),r=ye(),t=nr().f;return e({target:"Object",stat:!0,forced:Object.defineProperty!==t,sham:!r},{defineProperty:t}),bv}var yd;function A1(){if(yd)return go.exports;yd=1,P1();var e=we(),r=e.Object,t=go.exports=function(i,a,o){return r.defineProperty(i,a,o)};return r.defineProperty.sham&&(t.sham=!0),go.exports}var ds,md;function rS(){if(md)return ds;md=1;var e=A1();return ds=e,ds}var ps,gd;function D1(){if(gd)return ps;gd=1;var e=rS();return ps=e,ps}var hs,bd;function M1(){if(bd)return hs;bd=1;var e=D1();return hs=e,hs}var ys,_d;function C1(){return _d||(_d=1,ys=M1()),ys}var $1=C1(),N1=Y($1),Sd={},ms,wd;function Lt(){if(wd)return ms;wd=1;var e=Wr();return ms=Array.isArray||function(t){return e(t)==="Array"},ms}var gs,Ed;function L1(){if(Ed)return gs;Ed=1;var e=Math.ceil,r=Math.floor;return gs=Math.trunc||function(n){var i=+n;return(i>0?r:e)(i)},gs}var bs,Id;function In(){if(Id)return bs;Id=1;var e=L1();return bs=function(r){var t=+r;return t!==t||t===0?0:e(t)},bs}var _s,Rd;function tS(){if(Rd)return _s;Rd=1;var e=In(),r=Math.min;return _s=function(t){var n=e(t);return n>0?r(n,9007199254740991):0},_s}var Ss,Td;function it(){if(Td)return Ss;Td=1;var e=tS();return Ss=function(r){return e(r.length)},Ss}var ws,Od;function nS(){if(Od)return ws;Od=1;var e=TypeError,r=9007199254740991;return ws=function(t){if(t>r)throw e("Maximum allowed index exceeded");return t},ws}var Es,xd;function sa(){if(xd)return Es;xd=1;var e=ye(),r=nr(),t=pi();return Es=function(n,i,a){e?r.f(n,i,t(0,a)):n[i]=a},Es}var Is,qd;function Xf(){if(qd)return Is;qd=1;var e=Oe(),r=e("toStringTag"),t={};return t[r]="z",Is=String(t)==="[object z]",Is}var Rs,Pd;function at(){if(Pd)return Rs;Pd=1;var e=Xf(),r=Ie(),t=Wr(),n=Oe(),i=n("toStringTag"),a=Object,o=t(function(){return arguments}())==="Arguments",u=function(c,f){try{return c[f]}catch{}};return Rs=e?t:function(c){var f,v,p;return c===void 0?"Undefined":c===null?"Null":typeof(v=u(f=a(c),i))=="string"?v:o?t(f):(p=t(f))==="Object"&&r(f.callee)?"Arguments":p},Rs}var Ts,Ad;function j1(){if(Ad)return Ts;Ad=1;var e=se(),r=Ie(),t=Hf(),n=e(Function.toString);return r(t.inspectSource)||(t.inspectSource=function(i){return n(i)}),Ts=t.inspectSource,Ts}var Os,Dd;function iS(){if(Dd)return Os;Dd=1;var e=se(),r=ne(),t=Ie(),n=at(),i=Ze(),a=j1(),o=function(){},u=i("Reflect","construct"),c=/^\s*(?:class|function)\b/,f=e(c.exec),v=!c.test(o),p=function(g){if(!t(g))return!1;try{return u(o,[],g),!0}catch{return!1}},y=function(g){if(!t(g))return!1;switch(n(g)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return v||!!f(c,a(g))}catch{return!0}};return y.sham=!0,Os=!u||r(function(){var m;return p(p.call)||!p(Object)||!p(function(){m=!0})||m})?y:p,Os}var xs,Md;function F1(){if(Md)return xs;Md=1;var e=Lt(),r=iS(),t=Le(),n=Oe(),i=n("species"),a=Array;return xs=function(o){var u;return e(o)&&(u=o.constructor,r(u)&&(u===a||e(u.prototype))?u=void 0:t(u)&&(u=u[i],u===null&&(u=void 0))),u===void 0?a:u},xs}var qs,Cd;function Zf(){if(Cd)return qs;Cd=1;var e=F1();return qs=function(r,t){return new(e(r))(t===0?0:t)},qs}var Ps,$d;function gi(){if($d)return Ps;$d=1;var e=ne(),r=Oe(),t=yi(),n=r("species");return Ps=function(i){return t>=51||!e(function(){var a=[],o=a.constructor={};return o[n]=function(){return{foo:1}},a[i](Boolean).foo!==1})},Ps}var Nd;function aS(){if(Nd)return Sd;Nd=1;var e=U(),r=ne(),t=Lt(),n=Le(),i=pr(),a=it(),o=nS(),u=sa(),c=Zf(),f=gi(),v=Oe(),p=yi(),y=v("isConcatSpreadable"),m=p>=51||!r(function(){var O=[];return O[y]=!1,O.concat()[0]!==O}),g=function(O){if(!n(O))return!1;var R=O[y];return R!==void 0?!!R:t(O)},_=!m||!f("concat");return e({target:"Array",proto:!0,arity:1,forced:_},{concat:function(R){var w=i(this),A=c(w,0),I=0,x,D,P,E,T;for(x=-1,P=arguments.length;x<P;x++)if(T=x===-1?w:arguments[x],g(T))for(E=a(T),o(I+E),D=0;D<E;D++,I++)D in T&&u(A,I,T[D]);else o(I+1),u(A,I++,T);return A.length=I,A}}),Sd}var Ld={},jd={},As,Fd;function ot(){if(Fd)return As;Fd=1;var e=at(),r=String;return As=function(t){if(e(t)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return r(t)},As}var Ds={},Ms,kd;function Jf(){if(kd)return Ms;kd=1;var e=In(),r=Math.max,t=Math.min;return Ms=function(n,i){var a=e(n);return a<0?r(a+i,0):t(a,i)},Ms}var Cs,Bd;function k1(){if(Bd)return Cs;Bd=1;var e=Ir(),r=Jf(),t=it(),n=function(i){return function(a,o,u){var c=e(a),f=t(c);if(f===0)return!i&&-1;var v=r(u,f),p;if(i&&o!==o){for(;f>v;)if(p=c[v++],p!==p)return!0}else for(;f>v;v++)if((i||v in c)&&c[v]===o)return i||v||0;return!i&&-1}};return Cs={includes:n(!0),indexOf:n(!1)},Cs}var $s,Ud;function bi(){return Ud||(Ud=1,$s={}),$s}var Ns,zd;function oS(){if(zd)return Ns;zd=1;var e=se(),r=Te(),t=Ir(),n=k1().indexOf,i=bi(),a=e([].push);return Ns=function(o,u){var c=t(o),f=0,v=[],p;for(p in c)!r(i,p)&&r(c,p)&&a(v,p);for(;u.length>f;)r(c,p=u[f++])&&(~n(v,p)||a(v,p));return v},Ns}var Ls,Gd;function Qf(){return Gd||(Gd=1,Ls=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]),Ls}var js,Wd;function ua(){if(Wd)return js;Wd=1;var e=oS(),r=Qf();return js=Object.keys||function(n){return e(n,r)},js}var Kd;function ev(){if(Kd)return Ds;Kd=1;var e=ye(),r=eS(),t=nr(),n=Yr(),i=Ir(),a=ua();return Ds.f=e&&!r?Object.defineProperties:function(u,c){n(u);for(var f=i(c),v=a(c),p=v.length,y=0,m;p>y;)t.f(u,m=v[y++],f[m]);return u},Ds}var Fs,Yd;function B1(){if(Yd)return Fs;Yd=1;var e=Ze();return Fs=e("document","documentElement"),Fs}var ks,Hd;function ca(){if(Hd)return ks;Hd=1;var e=wn(),r=ia(),t=e("keys");return ks=function(n){return t[n]||(t[n]=r(n))},ks}var Bs,Vd;function _i(){if(Vd)return Bs;Vd=1;var e=Yr(),r=ev(),t=Qf(),n=bi(),i=B1(),a=J_(),o=ca(),u=">",c="<",f="prototype",v="script",p=o("IE_PROTO"),y=function(){},m=function(w){return c+v+u+w+c+"/"+v+u},g=function(w){w.write(m("")),w.close();var A=w.parentWindow.Object;return w=null,A},_=function(){var w=a("iframe"),A="java"+v+":",I;return w.style.display="none",i.appendChild(w),w.src=String(A),I=w.contentWindow.document,I.open(),I.write(m("document.F=Object")),I.close(),I.F},O,R=function(){try{O=new ActiveXObject("htmlfile")}catch{}R=typeof document<"u"?document.domain&&O?g(O):_():g(O);for(var w=t.length;w--;)delete R[f][t[w]];return R()};return n[p]=!0,Bs=Object.create||function(A,I){var x;return A!==null?(y[f]=e(A),x=new y,y[f]=null,x[p]=A):x=R(),I===void 0?x:r.f(x,I)},Bs}var Us={},Xd;function la(){if(Xd)return Us;Xd=1;var e=oS(),r=Qf(),t=r.concat("length","prototype");return Us.f=Object.getOwnPropertyNames||function(i){return e(i,t)},Us}var zs={},Gs,Zd;function Rn(){if(Zd)return Gs;Zd=1;var e=se();return Gs=e([].slice),Gs}var Jd;function sS(){if(Jd)return zs;Jd=1;var e=Wr(),r=Ir(),t=la().f,n=Rn(),i=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(o){try{return t(o)}catch{return n(i)}};return zs.f=function(u){return i&&e(u)==="Window"?a(u):t(r(u))},zs}var Ws={},Qd;function fa(){return Qd||(Qd=1,Ws.f=Object.getOwnPropertySymbols),Ws}var Ks,ep;function Si(){if(ep)return Ks;ep=1;var e=En();return Ks=function(r,t,n,i){return i&&i.enumerable?r[t]=n:e(r,t,n),r},Ks}var Ys,rp;function rv(){if(rp)return Ys;rp=1;var e=nr();return Ys=function(r,t,n){return e.f(r,t,n)},Ys}var Hs={},tp;function va(){if(tp)return Hs;tp=1;var e=Oe();return Hs.f=e,Hs}var Vs,np;function fe(){if(np)return Vs;np=1;var e=we(),r=Te(),t=va(),n=nr().f;return Vs=function(i){var a=e.Symbol||(e.Symbol={});r(a,i)||n(a,i,{value:t.f(i)})},Vs}var Xs,ip;function uS(){if(ip)return Xs;ip=1;var e=Ke(),r=Ze(),t=Oe(),n=Si();return Xs=function(){var i=r("Symbol"),a=i&&i.prototype,o=a&&a.valueOf,u=t("toPrimitive");a&&!a[u]&&n(a,u,function(c){return e(o,this)},{arity:1})},Xs}var Zs,ap;function U1(){if(ap)return Zs;ap=1;var e=Xf(),r=at();return Zs=e?{}.toString:function(){return"[object "+r(this)+"]"},Zs}var Js,op;function jt(){if(op)return Js;op=1;var e=Xf(),r=nr().f,t=En(),n=Te(),i=U1(),a=Oe(),o=a("toStringTag");return Js=function(u,c,f,v){var p=f?u:u&&u.prototype;p&&(n(p,o)||r(p,o,{configurable:!0,value:c}),v&&!e&&t(p,"toString",i))},Js}var Qs,sp;function z1(){if(sp)return Qs;sp=1;var e=he(),r=Ie(),t=e.WeakMap;return Qs=r(t)&&/native code/.test(String(t)),Qs}var eu,up;function wi(){if(up)return eu;up=1;var e=z1(),r=he(),t=Le(),n=En(),i=Te(),a=Hf(),o=ca(),u=bi(),c="Object already initialized",f=r.TypeError,v=r.WeakMap,p,y,m,g=function(w){return m(w)?y(w):p(w,{})},_=function(w){return function(A){var I;if(!t(A)||(I=y(A)).type!==w)throw new f("Incompatible receiver, "+w+" required");return I}};if(e||a.state){var O=a.state||(a.state=new v);O.get=O.get,O.has=O.has,O.set=O.set,p=function(w,A){if(O.has(w))throw new f(c);return A.facade=w,O.set(w,A),A},y=function(w){return O.get(w)||{}},m=function(w){return O.has(w)}}else{var R=o("state");u[R]=!0,p=function(w,A){if(i(w,R))throw new f(c);return A.facade=w,n(w,R,A),A},y=function(w){return i(w,R)?w[R]:{}},m=function(w){return i(w,R)}}return eu={set:p,get:y,has:m,enforce:g,getterFor:_},eu}var ru,cp;function Tn(){if(cp)return ru;cp=1;var e=oa(),r=se(),t=na(),n=pr(),i=it(),a=Zf(),o=r([].push),u=function(c){var f=c===1,v=c===2,p=c===3,y=c===4,m=c===6,g=c===7,_=c===5||m;return function(O,R,w,A){for(var I=n(O),x=t(I),D=i(x),P=e(R,w),E=0,T=A||a,q=f?T(O,D):v||g?T(O,0):void 0,C,j;D>E;E++)if((_||E in x)&&(C=x[E],j=P(C,E,I),c))if(f)q[E]=j;else if(j)switch(c){case 3:return!0;case 5:return C;case 6:return E;case 2:o(q,C)}else switch(c){case 4:return!1;case 7:o(q,C)}return m?-1:p||y?y:q}};return ru={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)},ru}var lp;function G1(){if(lp)return jd;lp=1;var e=U(),r=he(),t=Ke(),n=se(),i=Sn(),a=ye(),o=bn(),u=ne(),c=Te(),f=Re(),v=Yr(),p=Ir(),y=Vf(),m=ot(),g=pi(),_=_i(),O=ua(),R=la(),w=sS(),A=fa(),I=aa(),x=nr(),D=ev(),P=Kf(),E=Si(),T=rv(),q=wn(),C=ca(),j=bi(),B=ia(),Z=Oe(),ce=va(),ar=fe(),me=uS(),je=jt(),Fe=wi(),or=Tn().forEach,ae=C("hidden"),ke="Symbol",Be="prototype",De=Fe.set,Rr=Fe.getterFor(ke),Pe=Object[Be],sr=r.Symbol,Tr=sr&&sr[Be],qn=r.RangeError,Pn=r.TypeError,ct=r.QObject,Wt=I.f,ur=x.f,k=w.f,An=P.f,Hr=n([].push),He=q("symbols"),le=q("op-symbols"),lt=q("wks"),Or=!ct||!ct[Be]||!ct[Be].findChild,Kt=function(V,z,G){var W=Wt(Pe,z);W&&delete Pe[z],ur(V,z,G),W&&V!==Pe&&ur(Pe,z,W)},xr=a&&u(function(){return _(ur({},"a",{get:function(){return ur(this,"a",{value:7}).a}})).a!==7})?Kt:ur,qr=function(V,z){var G=He[V]=_(Tr);return De(G,{type:ke,tag:V,description:z}),a||(G.description=z),G},hr=function(z,G,W){z===Pe&&hr(le,G,W),v(z);var re=y(G);return v(W),c(He,re)?(W.enumerable?(c(z,ae)&&z[ae][re]&&(z[ae][re]=!1),W=_(W,{enumerable:g(0,!1)})):(c(z,ae)||ur(z,ae,g(1,_(null))),z[ae][re]=!0),xr(z,re,W)):ur(z,re,W)},ft=function(z,G){v(z);var W=p(G),re=O(W).concat(Vt(W));return or(re,function(Ee){(!a||t(vt,W,Ee))&&hr(z,Ee,W[Ee])}),z},Dn=function(z,G){return G===void 0?_(z):ft(_(z),G)},vt=function(z){var G=y(z),W=t(An,this,G);return this===Pe&&c(He,G)&&!c(le,G)?!1:W||!c(this,G)||!c(He,G)||c(this,ae)&&this[ae][G]?W:!0},Yt=function(z,G){var W=p(z),re=y(G);if(!(W===Pe&&c(He,re)&&!c(le,re))){var Ee=Wt(W,re);return Ee&&c(He,re)&&!(c(W,ae)&&W[ae][re])&&(Ee.enumerable=!0),Ee}},Ht=function(z){var G=k(p(z)),W=[];return or(G,function(re){!c(He,re)&&!c(j,re)&&Hr(W,re)}),W},Vt=function(V){var z=V===Pe,G=k(z?le:p(V)),W=[];return or(G,function(re){c(He,re)&&(!z||c(Pe,re))&&Hr(W,He[re])}),W};return o||(sr=function(){if(f(Tr,this))throw new Pn("Symbol is not a constructor");var z=!arguments.length||arguments[0]===void 0?void 0:m(arguments[0]),G=B(z),W=function(re){var Ee=this===void 0?r:this;Ee===Pe&&t(W,le,re),c(Ee,ae)&&c(Ee[ae],G)&&(Ee[ae][G]=!1);var Je=g(1,re);try{xr(Ee,G,Je)}catch(yr){if(!(yr instanceof qn))throw yr;Kt(Ee,G,Je)}};return a&&Or&&xr(Pe,G,{configurable:!0,set:W}),qr(G,z)},Tr=sr[Be],E(Tr,"toString",function(){return Rr(this).tag}),E(sr,"withoutSetter",function(V){return qr(B(V),V)}),P.f=vt,x.f=hr,D.f=ft,I.f=Yt,R.f=w.f=Ht,A.f=Vt,ce.f=function(V){return qr(Z(V),V)},a&&(T(Tr,"description",{configurable:!0,get:function(){return Rr(this).description}}),i||E(Pe,"propertyIsEnumerable",vt,{unsafe:!0}))),e({global:!0,constructor:!0,wrap:!0,forced:!o,sham:!o},{Symbol:sr}),or(O(lt),function(V){ar(V)}),e({target:ke,stat:!0,forced:!o},{useSetter:function(){Or=!0},useSimple:function(){Or=!1}}),e({target:"Object",stat:!0,forced:!o,sham:!a},{create:Dn,defineProperty:hr,defineProperties:ft,getOwnPropertyDescriptor:Yt}),e({target:"Object",stat:!0,forced:!o},{getOwnPropertyNames:Ht}),me(),je(sr,ke),j[ae]=!0,jd}var fp={},tu,vp;function cS(){if(vp)return tu;vp=1;var e=bn();return tu=e&&!!Symbol.for&&!!Symbol.keyFor,tu}var dp;function W1(){if(dp)return fp;dp=1;var e=U(),r=Ze(),t=Te(),n=ot(),i=wn(),a=cS(),o=i("string-to-symbol-registry"),u=i("symbol-to-string-registry");return e({target:"Symbol",stat:!0,forced:!a},{for:function(c){var f=n(c);if(t(o,f))return o[f];var v=r("Symbol")(f);return o[f]=v,u[v]=f,v}}),fp}var pp={},hp;function K1(){if(hp)return pp;hp=1;var e=U(),r=Te(),t=mi(),n=_n(),i=wn(),a=cS(),o=i("symbol-to-string-registry");return e({target:"Symbol",stat:!0,forced:!a},{keyFor:function(c){if(!t(c))throw new TypeError(n(c)+" is not a symbol");if(r(o,c))return o[c]}}),pp}var yp={},nu,mp;function Y1(){if(mp)return nu;mp=1;var e=se(),r=Lt(),t=Ie(),n=Wr(),i=ot(),a=e([].push);return nu=function(o){if(t(o))return o;if(r(o)){for(var u=o.length,c=[],f=0;f<u;f++){var v=o[f];typeof v=="string"?a(c,v):(typeof v=="number"||n(v)==="Number"||n(v)==="String")&&a(c,i(v))}var p=c.length,y=!0;return function(m,g){if(y)return y=!1,g;if(r(this))return g;for(var _=0;_<p;_++)if(c[_]===m)return g}}},nu}var gp;function lS(){if(gp)return yp;gp=1;var e=U(),r=Ze(),t=ta(),n=Ke(),i=se(),a=ne(),o=Ie(),u=mi(),c=Rn(),f=Y1(),v=bn(),p=String,y=r("JSON","stringify"),m=i(/./.exec),g=i("".charAt),_=i("".charCodeAt),O=i("".replace),R=i(1.1.toString),w=/[\uD800-\uDFFF]/g,A=/^[\uD800-\uDBFF]$/,I=/^[\uDC00-\uDFFF]$/,x=!v||a(function(){var T=r("Symbol")("stringify detection");return y([T])!=="[null]"||y({a:T})!=="{}"||y(Object(T))!=="{}"}),D=a(function(){return y("\uDF06\uD834")!=='"\\udf06\\ud834"'||y("\uDEAD")!=='"\\udead"'}),P=function(T,q){var C=c(arguments),j=f(q);if(!(!o(j)&&(T===void 0||u(T))))return C[1]=function(B,Z){if(o(j)&&(Z=n(j,this,p(B),Z)),!u(Z))return Z},t(y,null,C)},E=function(T,q,C){var j=g(C,q-1),B=g(C,q+1);return m(A,T)&&!m(I,B)||m(I,T)&&!m(A,j)?"\\u"+R(_(T,0),16):T};return y&&e({target:"JSON",stat:!0,arity:3,forced:x||D},{stringify:function(q,C,j){var B=c(arguments),Z=t(x?P:y,null,B);return D&&typeof Z=="string"?O(Z,w,E):Z}}),yp}var bp={},_p;function H1(){if(_p)return bp;_p=1;var e=U(),r=bn(),t=ne(),n=fa(),i=pr(),a=!r||t(function(){n.f(1)});return e({target:"Object",stat:!0,forced:a},{getOwnPropertySymbols:function(u){var c=n.f;return c?c(i(u)):[]}}),bp}var Sp;function fS(){return Sp||(Sp=1,G1(),W1(),K1(),lS(),H1()),Ld}var wp={},Ep;function vS(){if(Ep)return wp;Ep=1;var e=fe();return e("asyncDispose"),wp}var Ip={},Rp;function V1(){if(Rp)return Ip;Rp=1;var e=fe();return e("asyncIterator"),Ip}var Tp={},Op;function dS(){if(Op)return Tp;Op=1;var e=fe();return e("dispose"),Tp}var xp={},qp;function X1(){if(qp)return xp;qp=1;var e=fe();return e("hasInstance"),xp}var Pp={},Ap;function Z1(){if(Ap)return Pp;Ap=1;var e=fe();return e("isConcatSpreadable"),Pp}var Dp={},Mp;function pS(){if(Mp)return Dp;Mp=1;var e=fe();return e("iterator"),Dp}var Cp={},$p;function J1(){if($p)return Cp;$p=1;var e=fe();return e("match"),Cp}var Np={},Lp;function Q1(){if(Lp)return Np;Lp=1;var e=fe();return e("matchAll"),Np}var jp={},Fp;function ew(){if(Fp)return jp;Fp=1;var e=fe();return e("replace"),jp}var kp={},Bp;function rw(){if(Bp)return kp;Bp=1;var e=fe();return e("search"),kp}var Up={},zp;function tw(){if(zp)return Up;zp=1;var e=fe();return e("species"),Up}var Gp={},Wp;function nw(){if(Wp)return Gp;Wp=1;var e=fe();return e("split"),Gp}var Kp={},Yp;function hS(){if(Yp)return Kp;Yp=1;var e=fe(),r=uS();return e("toPrimitive"),r(),Kp}var Hp={},Vp;function iw(){if(Vp)return Hp;Vp=1;var e=Ze(),r=fe(),t=jt();return r("toStringTag"),t(e("Symbol"),"Symbol"),Hp}var Xp={},Zp;function aw(){if(Zp)return Xp;Zp=1;var e=fe();return e("unscopables"),Xp}var Jp={},Qp;function ow(){if(Qp)return Jp;Qp=1;var e=he(),r=jt();return r(e.JSON,"JSON",!0),Jp}var iu,eh;function sw(){if(eh)return iu;eh=1,aS(),fS(),vS(),V1(),dS(),X1(),Z1(),pS(),J1(),Q1(),ew(),rw(),tw(),nw(),hS(),iw(),aw(),ow();var e=we();return iu=e.Symbol,iu}var rh={},au,th;function uw(){return th||(th=1,au=function(){}),au}var ou,nh;function On(){return nh||(nh=1,ou={}),ou}var su,ih;function cw(){if(ih)return su;ih=1;var e=ye(),r=Te(),t=Function.prototype,n=e&&Object.getOwnPropertyDescriptor,i=r(t,"name"),a=i&&(function(){}).name==="something",o=i&&(!e||e&&n(t,"name").configurable);return su={EXISTS:i,PROPER:a,CONFIGURABLE:o},su}var uu,ah;function lw(){if(ah)return uu;ah=1;var e=ne();return uu=!e(function(){function r(){}return r.prototype.constructor=null,Object.getPrototypeOf(new r)!==r.prototype}),uu}var cu,oh;function yS(){if(oh)return cu;oh=1;var e=Te(),r=Ie(),t=pr(),n=ca(),i=lw(),a=n("IE_PROTO"),o=Object,u=o.prototype;return cu=i?o.getPrototypeOf:function(c){var f=t(c);if(e(f,a))return f[a];var v=f.constructor;return r(v)&&f instanceof v?v.prototype:f instanceof o?u:null},cu}var lu,sh;function mS(){if(sh)return lu;sh=1;var e=ne(),r=Ie(),t=Le(),n=_i(),i=yS(),a=Si(),o=Oe(),u=Sn(),c=o("iterator"),f=!1,v,p,y;[].keys&&(y=[].keys(),"next"in y?(p=i(i(y)),p!==Object.prototype&&(v=p)):f=!0);var m=!t(v)||e(function(){var g={};return v[c].call(g)!==g});return m?v={}:u&&(v=n(v)),r(v[c])||a(v,c,function(){return this}),lu={IteratorPrototype:v,BUGGY_SAFARI_ITERATORS:f},lu}var fu,uh;function fw(){if(uh)return fu;uh=1;var e=mS().IteratorPrototype,r=_i(),t=pi(),n=jt(),i=On(),a=function(){return this};return fu=function(o,u,c,f){var v=u+" Iterator";return o.prototype=r(e,{next:t(+!f,c)}),n(o,v,!1,!0),i[v]=a,o},fu}var vu,ch;function vw(){if(ch)return vu;ch=1;var e=se(),r=Kr();return vu=function(t,n,i){try{return e(r(Object.getOwnPropertyDescriptor(t,n)[i]))}catch{}},vu}var du,lh;function dw(){if(lh)return du;lh=1;var e=Le();return du=function(r){return e(r)||r===null},du}var pu,fh;function pw(){if(fh)return pu;fh=1;var e=dw(),r=String,t=TypeError;return pu=function(n){if(e(n))return n;throw new t("Can't set "+r(n)+" as a prototype")},pu}var hu,vh;function hw(){if(vh)return hu;vh=1;var e=vw(),r=Le(),t=Nt(),n=pw();return hu=Object.setPrototypeOf||("__proto__"in{}?function(){var i=!1,a={},o;try{o=e(Object.prototype,"__proto__","set"),o(a,[]),i=a instanceof Array}catch{}return function(c,f){return t(c),n(f),r(c)&&(i?o(c,f):c.__proto__=f),c}}():void 0),hu}var yu,dh;function tv(){if(dh)return yu;dh=1;var e=U(),r=Ke(),t=Sn(),n=cw(),i=Ie(),a=fw(),o=yS(),u=hw(),c=jt(),f=En(),v=Si(),p=Oe(),y=On(),m=mS(),g=n.PROPER,_=n.CONFIGURABLE,O=m.IteratorPrototype,R=m.BUGGY_SAFARI_ITERATORS,w=p("iterator"),A="keys",I="values",x="entries",D=function(){return this};return yu=function(P,E,T,q,C,j,B){a(T,E,q);var Z=function(De){if(De===C&&Fe)return Fe;if(!R&&De&&De in me)return me[De];switch(De){case A:return function(){return new T(this,De)};case I:return function(){return new T(this,De)};case x:return function(){return new T(this,De)}}return function(){return new T(this)}},ce=E+" Iterator",ar=!1,me=P.prototype,je=me[w]||me["@@iterator"]||C&&me[C],Fe=!R&&je||Z(C),or=E==="Array"&&me.entries||je,ae,ke,Be;if(or&&(ae=o(or.call(new P)),ae!==Object.prototype&&ae.next&&(!t&&o(ae)!==O&&(u?u(ae,O):i(ae[w])||v(ae,w,D)),c(ae,ce,!0,!0),t&&(y[ce]=D))),g&&C===I&&je&&je.name!==I&&(!t&&_?f(me,"name",I):(ar=!0,Fe=function(){return r(je,this)})),C)if(ke={values:Z(I),keys:j?Fe:Z(A),entries:Z(x)},B)for(Be in ke)(R||ar||!(Be in me))&&v(me,Be,ke[Be]);else e({target:E,proto:!0,forced:R||ar},ke);return(!t||B)&&me[w]!==Fe&&v(me,w,Fe,{name:C}),y[E]=Fe,ke},yu}var mu,ph;function nv(){return ph||(ph=1,mu=function(e,r){return{value:e,done:r}}),mu}var gu,hh;function st(){if(hh)return gu;hh=1;var e=Ir(),r=uw(),t=On(),n=wi(),i=nr().f,a=tv(),o=nv(),u=Sn(),c=ye(),f="Array Iterator",v=n.set,p=n.getterFor(f);gu=a(Array,"Array",function(m,g){v(this,{type:f,target:e(m),index:0,kind:g})},function(){var m=p(this),g=m.target,_=m.index++;if(!g||_>=g.length)return m.target=null,o(void 0,!0);switch(m.kind){case"keys":return o(_,!1);case"values":return o(g[_],!1)}return o([_,g[_]],!1)},"values");var y=t.Arguments=t.Array;if(r("keys"),r("values"),r("entries"),!u&&c&&y.name!=="values")try{i(y,"name",{value:"values"})}catch{}return gu}var bu,yh;function yw(){return yh||(yh=1,bu={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}),bu}var mh;function ut(){if(mh)return rh;mh=1,st();var e=yw(),r=he(),t=jt(),n=On();for(var i in e)t(r[i],i),n[i]=n.Array;return rh}var _u,gh;function gS(){if(gh)return _u;gh=1;var e=sw();return ut(),_u=e,_u}var bh={},_h;function mw(){if(_h)return bh;_h=1;var e=Oe(),r=nr().f,t=e("metadata"),n=Function.prototype;return n[t]===void 0&&r(n,t,{value:null}),bh}var Sh={},wh;function gw(){return wh||(wh=1,vS()),Sh}var Eh={},Ih;function bw(){return Ih||(Ih=1,dS()),Eh}var Rh={},Th;function _w(){if(Th)return Rh;Th=1;var e=fe();return e("metadata"),Rh}var Su,Oh;function Sw(){if(Oh)return Su;Oh=1;var e=gS();return mw(),gw(),bw(),_w(),Su=e,Su}var xh={},wu,qh;function bS(){if(qh)return wu;qh=1;var e=Ze(),r=se(),t=e("Symbol"),n=t.keyFor,i=r(t.prototype.valueOf);return wu=t.isRegisteredSymbol||function(o){try{return n(i(o))!==void 0}catch{return!1}},wu}var Ph;function ww(){if(Ph)return xh;Ph=1;var e=U(),r=bS();return e({target:"Symbol",stat:!0},{isRegisteredSymbol:r}),xh}var Ah={},Eu,Dh;function _S(){if(Dh)return Eu;Dh=1;for(var e=wn(),r=Ze(),t=se(),n=mi(),i=Oe(),a=r("Symbol"),o=a.isWellKnownSymbol,u=r("Object","getOwnPropertyNames"),c=t(a.prototype.valueOf),f=e("wks"),v=0,p=u(a),y=p.length;v<y;v++)try{var m=p[v];n(a[m])&&i(m)}catch{}return Eu=function(_){if(o&&o(_))return!0;try{for(var O=c(_),R=0,w=u(f),A=w.length;R<A;R++)if(f[w[R]]==O)return!0}catch{}return!1},Eu}var Mh;function Ew(){if(Mh)return Ah;Mh=1;var e=U(),r=_S();return e({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:r}),Ah}var Ch={},$h;function Iw(){if($h)return Ch;$h=1;var e=fe();return e("customMatcher"),Ch}var Nh={},Lh;function Rw(){if(Lh)return Nh;Lh=1;var e=fe();return e("observable"),Nh}var jh={},Fh;function Tw(){if(Fh)return jh;Fh=1;var e=U(),r=bS();return e({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:r}),jh}var kh={},Bh;function Ow(){if(Bh)return kh;Bh=1;var e=U(),r=_S();return e({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:r}),kh}var Uh={},zh;function xw(){if(zh)return Uh;zh=1;var e=fe();return e("matcher"),Uh}var Gh={},Wh;function qw(){if(Wh)return Gh;Wh=1;var e=fe();return e("metadataKey"),Gh}var Kh={},Yh;function Pw(){if(Yh)return Kh;Yh=1;var e=fe();return e("patternMatch"),Kh}var Hh={},Vh;function Aw(){if(Vh)return Hh;Vh=1;var e=fe();return e("replaceAll"),Hh}var Iu,Xh;function Dw(){if(Xh)return Iu;Xh=1;var e=Sw();return ww(),Ew(),Iw(),Rw(),Tw(),Ow(),xw(),qw(),Pw(),Aw(),Iu=e,Iu}var Ru,Zh;function Mw(){return Zh||(Zh=1,Ru=Dw()),Ru}var Cw=Mw(),Fi=Y(Cw),Jh={},Tu,Qh;function $w(){if(Qh)return Tu;Qh=1;var e=se(),r=In(),t=ot(),n=Nt(),i=e("".charAt),a=e("".charCodeAt),o=e("".slice),u=function(c){return function(f,v){var p=t(n(f)),y=r(v),m=p.length,g,_;return y<0||y>=m?c?"":void 0:(g=a(p,y),g<55296||g>56319||y+1===m||(_=a(p,y+1))<56320||_>57343?c?i(p,y):g:c?o(p,y,y+2):(g-55296<<10)+(_-56320)+65536)}};return Tu={codeAt:u(!1),charAt:u(!0)},Tu}var ey;function da(){if(ey)return Jh;ey=1;var e=$w().charAt,r=ot(),t=wi(),n=tv(),i=nv(),a="String Iterator",o=t.set,u=t.getterFor(a);return n(String,"String",function(c){o(this,{type:a,string:r(c),index:0})},function(){var f=u(this),v=f.string,p=f.index,y;return p>=v.length?i(void 0,!0):(y=e(v,p),f.index+=y.length,i(y,!1))}),Jh}var Ou,ry;function Nw(){if(ry)return Ou;ry=1,st(),da(),pS();var e=va();return Ou=e.f("iterator"),Ou}var xu,ty;function SS(){if(ty)return xu;ty=1;var e=Nw();return ut(),xu=e,xu}var qu,ny;function Lw(){if(ny)return qu;ny=1;var e=SS();return qu=e,qu}var Pu,iy;function jw(){if(iy)return Pu;iy=1;var e=Lw();return Pu=e,Pu}var Au,ay;function Fw(){return ay||(ay=1,Au=jw()),Au}var kw=Fw(),Bw=Y(kw);function Xn(e){"@babel/helpers - typeof";return Xn=typeof Fi=="function"&&typeof Bw=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Fi=="function"&&r.constructor===Fi&&r!==Fi.prototype?"symbol":typeof r},Xn(e)}var Du,oy;function Uw(){if(oy)return Du;oy=1,hS();var e=va();return Du=e.f("toPrimitive"),Du}var Mu,sy;function zw(){if(sy)return Mu;sy=1;var e=Uw();return Mu=e,Mu}var Cu,uy;function Gw(){if(uy)return Cu;uy=1;var e=zw();return Cu=e,Cu}var $u,cy;function Ww(){if(cy)return $u;cy=1;var e=Gw();return $u=e,$u}var Nu,ly;function Kw(){return ly||(ly=1,Nu=Ww()),Nu}var Yw=Kw(),Hw=Y(Yw);function Vw(e,r){if(Xn(e)!="object"||!e)return e;var t=e[Hw];if(t!==void 0){var n=t.call(e,r);if(Xn(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function Xw(e){var r=Vw(e,"string");return Xn(r)=="symbol"?r:r+""}function tt(e,r,t){return(r=Xw(r))in e?N1(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var fy={},Lu,vy;function Zw(){if(vy)return Lu;vy=1;var e=se(),r=Kr(),t=Le(),n=Te(),i=Rn(),a=di(),o=Function,u=e([].concat),c=e([].join),f={},v=function(p,y,m){if(!n(f,y)){for(var g=[],_=0;_<y;_++)g[_]="a["+_+"]";f[y]=o("C,a","return new C("+c(g,",")+")")}return f[y](p,m)};return Lu=a?o.bind:function(y){var m=r(this),g=m.prototype,_=i(arguments,1),O=function(){var w=u(_,i(arguments));return this instanceof O?v(m,w.length,w):m.apply(y,w)};return t(g)&&(O.prototype=g),O},Lu}var dy;function Jw(){if(dy)return fy;dy=1;var e=U(),r=Zw();return e({target:"Function",proto:!0,forced:Function.bind!==r},{bind:r}),fy}var ju,py;function Ye(){if(py)return ju;py=1;var e=he(),r=we();return ju=function(t,n){var i=r[t+"Prototype"],a=i&&i[n];if(a)return a;var o=e[t],u=o&&o.prototype;return u&&u[n]},ju}var Fu,hy;function Qw(){if(hy)return Fu;hy=1,Jw();var e=Ye();return Fu=e("Function","bind"),Fu}var ku,yy;function eE(){if(yy)return ku;yy=1;var e=Re(),r=Qw(),t=Function.prototype;return ku=function(n){var i=n.bind;return n===t||e(t,n)&&i===t.bind?r:i},ku}var Bu,my;function rE(){if(my)return Bu;my=1;var e=eE();return Bu=e,Bu}var Uu,gy;function tE(){return gy||(gy=1,Uu=rE()),Uu}var nE=tE(),wS=Y(nE),by={},zu,_y;function iE(){if(_y)return zu;_y=1;var e=Kr(),r=pr(),t=na(),n=it(),i=TypeError,a="Reduce of empty array with no initial value",o=function(u){return function(c,f,v,p){var y=r(c),m=t(y),g=n(y);if(e(f),g===0&&v<2)throw new i(a);var _=u?g-1:0,O=u?-1:1;if(v<2)for(;;){if(_ in m){p=m[_],_+=O;break}if(_+=O,u?_<0:g<=_)throw new i(a)}for(;u?_>=0:g>_;_+=O)_ in m&&(p=f(p,m[_],_,y));return p}};return zu={left:o(!1),right:o(!0)},zu}var Gu,Sy;function pa(){if(Sy)return Gu;Sy=1;var e=ne();return Gu=function(r,t){var n=[][r];return!!n&&e(function(){n.call(null,t||function(){return 1},1)})},Gu}var Wu,wy;function ES(){if(wy)return Wu;wy=1;var e=he(),r=gn(),t=Wr(),n=function(i){return r.slice(0,i.length)===i};return Wu=function(){return n("Bun/")?"BUN":n("Cloudflare-Workers")?"CLOUDFLARE":n("Deno/")?"DENO":n("Node.js/")?"NODE":e.Bun&&typeof Bun.version=="string"?"BUN":e.Deno&&typeof Deno.version=="object"?"DENO":t(e.process)==="process"?"NODE":e.window&&e.document?"BROWSER":"REST"}(),Wu}var Ku,Ey;function aE(){if(Ey)return Ku;Ey=1;var e=ES();return Ku=e==="NODE",Ku}var Iy;function oE(){if(Iy)return by;Iy=1;var e=U(),r=iE().left,t=pa(),n=yi(),i=aE(),a=!i&&n>79&&n<83,o=a||!t("reduce");return e({target:"Array",proto:!0,forced:o},{reduce:function(c){var f=arguments.length;return r(this,c,f,f>1?arguments[1]:void 0)}}),by}var Yu,Ry;function sE(){if(Ry)return Yu;Ry=1,oE();var e=Ye();return Yu=e("Array","reduce"),Yu}var Hu,Ty;function uE(){if(Ty)return Hu;Ty=1;var e=Re(),r=sE(),t=Array.prototype;return Hu=function(n){var i=n.reduce;return n===t||e(t,n)&&i===t.reduce?r:i},Hu}var Vu,Oy;function cE(){if(Oy)return Vu;Oy=1;var e=uE();return Vu=e,Vu}var Xu,xy;function lE(){return xy||(xy=1,Xu=cE()),Xu}var fE=lE(),vE=Y(fE),qy={},Py;function dE(){if(Py)return qy;Py=1;var e=U(),r=Tn().filter,t=gi(),n=t("filter");return e({target:"Array",proto:!0,forced:!n},{filter:function(a){return r(this,a,arguments.length>1?arguments[1]:void 0)}}),qy}var Zu,Ay;function pE(){if(Ay)return Zu;Ay=1,dE();var e=Ye();return Zu=e("Array","filter"),Zu}var Ju,Dy;function hE(){if(Dy)return Ju;Dy=1;var e=Re(),r=pE(),t=Array.prototype;return Ju=function(n){var i=n.filter;return n===t||e(t,n)&&i===t.filter?r:i},Ju}var Qu,My;function yE(){if(My)return Qu;My=1;var e=hE();return Qu=e,Qu}var ec,Cy;function mE(){return Cy||(Cy=1,ec=yE()),ec}var gE=mE(),sn=Y(gE),$y={},Ny;function bE(){if(Ny)return $y;Ny=1;var e=U(),r=Tn().map,t=gi(),n=t("map");return e({target:"Array",proto:!0,forced:!n},{map:function(a){return r(this,a,arguments.length>1?arguments[1]:void 0)}}),$y}var rc,Ly;function _E(){if(Ly)return rc;Ly=1,bE();var e=Ye();return rc=e("Array","map"),rc}var tc,jy;function SE(){if(jy)return tc;jy=1;var e=Re(),r=_E(),t=Array.prototype;return tc=function(n){var i=n.map;return n===t||e(t,n)&&i===t.map?r:i},tc}var nc,Fy;function wE(){if(Fy)return nc;Fy=1;var e=SE();return nc=e,nc}var ic,ky;function EE(){return ky||(ky=1,ic=wE()),ic}var IE=EE(),Nr=Y(IE),ac,By;function RE(){return By||(By=1,ac=gS()),ac}var TE=RE(),OE=Y(TE),Uy={},zy;function xE(){if(zy)return Uy;zy=1;var e=U(),r=Lt(),t=iS(),n=Le(),i=Jf(),a=it(),o=Ir(),u=sa(),c=Oe(),f=gi(),v=Rn(),p=f("slice"),y=c("species"),m=Array,g=Math.max;return e({target:"Array",proto:!0,forced:!p},{slice:function(O,R){var w=o(this),A=a(w),I=i(O,A),x=i(R===void 0?A:R,A),D,P,E;if(r(w)&&(D=w.constructor,t(D)&&(D===m||r(D.prototype))?D=void 0:n(D)&&(D=D[y],D===null&&(D=void 0)),D===m||D===void 0))return v(w,I,x);for(P=new(D===void 0?m:D)(g(x-I,0)),E=0;I<x;I++,E++)I in w&&u(P,E,w[I]);return P.length=E,P}}),Uy}var oc,Gy;function qE(){if(Gy)return oc;Gy=1,xE();var e=Ye();return oc=e("Array","slice"),oc}var sc,Wy;function PE(){if(Wy)return sc;Wy=1;var e=Re(),r=qE(),t=Array.prototype;return sc=function(n){var i=n.slice;return n===t||e(t,n)&&i===t.slice?r:i},sc}var uc,Ky;function AE(){if(Ky)return uc;Ky=1;var e=PE();return uc=e,uc}var cc,Yy;function DE(){return Yy||(Yy=1,cc=AE()),cc}var ME=DE(),CE=Y(ME),Hy={},lc,Vy;function IS(){if(Vy)return lc;Vy=1;var e=Ze(),r=se(),t=la(),n=fa(),i=Yr(),a=r([].concat);return lc=e("Reflect","ownKeys")||function(u){var c=t.f(i(u)),f=n.f;return f?a(c,f(u)):c},lc}var Xy;function $E(){if(Xy)return Hy;Xy=1;var e=U(),r=IS();return e({target:"Reflect",stat:!0},{ownKeys:r}),Hy}var fc,Zy;function NE(){if(Zy)return fc;Zy=1,$E();var e=we();return fc=e.Reflect.ownKeys,fc}var vc,Jy;function LE(){if(Jy)return vc;Jy=1;var e=NE();return vc=e,vc}var dc,Qy;function jE(){return Qy||(Qy=1,dc=LE()),dc}var FE=jE(),kE=Y(FE),em={},rm;function BE(){if(rm)return em;rm=1;var e=U(),r=Lt();return e({target:"Array",stat:!0},{isArray:r}),em}var pc,tm;function UE(){if(tm)return pc;tm=1,BE();var e=we();return pc=e.Array.isArray,pc}var hc,nm;function zE(){if(nm)return hc;nm=1;var e=UE();return hc=e,hc}var yc,im;function GE(){return im||(im=1,yc=zE()),yc}var WE=GE(),br=Y(WE),am={},om;function KE(){if(om)return am;om=1;var e=U(),r=pr(),t=ua(),n=ne(),i=n(function(){t(1)});return e({target:"Object",stat:!0,forced:i},{keys:function(o){return t(r(o))}}),am}var mc,sm;function YE(){if(sm)return mc;sm=1,KE();var e=we();return mc=e.Object.keys,mc}var gc,um;function HE(){if(um)return gc;um=1;var e=YE();return gc=e,gc}var bc,cm;function VE(){return cm||(cm=1,bc=HE()),bc}var XE=VE(),iv=Y(XE),lm={},_c,fm;function ZE(){if(fm)return _c;fm=1;var e=Tn().forEach,r=pa(),t=r("forEach");return _c=t?[].forEach:function(i){return e(this,i,arguments.length>1?arguments[1]:void 0)},_c}var vm;function JE(){if(vm)return lm;vm=1;var e=U(),r=ZE();return e({target:"Array",proto:!0,forced:[].forEach!==r},{forEach:r}),lm}var Sc,dm;function QE(){if(dm)return Sc;dm=1,JE();var e=Ye();return Sc=e("Array","forEach"),Sc}var wc,pm;function eI(){if(pm)return wc;pm=1;var e=QE();return wc=e,wc}var Ec,hm;function rI(){if(hm)return Ec;hm=1;var e=at(),r=Te(),t=Re(),n=eI(),i=Array.prototype,a={DOMTokenList:!0,NodeList:!0};return Ec=function(o){var u=o.forEach;return o===i||t(i,o)&&u===i.forEach||r(a,e(o))?n:u},Ec}var Ic,ym;function tI(){return ym||(ym=1,Ic=rI()),Ic}var nI=tI(),Zn=Y(nI),mm={},gm;function iI(){if(gm)return mm;gm=1;var e=U(),r=se(),t=Lt(),n=r([].reverse),i=[1,2];return e({target:"Array",proto:!0,forced:String(i)===String(i.reverse())},{reverse:function(){return t(this)&&(this.length=this.length),n(this)}}),mm}var Rc,bm;function aI(){if(bm)return Rc;bm=1,iI();var e=Ye();return Rc=e("Array","reverse"),Rc}var Tc,_m;function oI(){if(_m)return Tc;_m=1;var e=Re(),r=aI(),t=Array.prototype;return Tc=function(n){var i=n.reverse;return n===t||e(t,n)&&i===t.reverse?r:i},Tc}var Oc,Sm;function sI(){if(Sm)return Oc;Sm=1;var e=oI();return Oc=e,Oc}var xc,wm;function uI(){return wm||(wm=1,xc=sI()),xc}var cI=uI(),lI=Y(cI),Em={},qc,Im;function fI(){if(Im)return qc;Im=1;var e=ye(),r=Lt(),t=TypeError,n=Object.getOwnPropertyDescriptor,i=e&&!function(){if(this!==void 0)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(a){return a instanceof TypeError}}();return qc=i?function(a,o){if(r(a)&&!n(a,"length").writable)throw new t("Cannot set read only .length");return a.length=o}:function(a,o){return a.length=o},qc}var Pc,Rm;function RS(){if(Rm)return Pc;Rm=1;var e=_n(),r=TypeError;return Pc=function(t,n){if(!delete t[n])throw new r("Cannot delete property "+e(n)+" of "+e(t))},Pc}var Tm;function vI(){if(Tm)return Em;Tm=1;var e=U(),r=pr(),t=Jf(),n=In(),i=it(),a=fI(),o=nS(),u=Zf(),c=sa(),f=RS(),v=gi(),p=v("splice"),y=Math.max,m=Math.min;return e({target:"Array",proto:!0,forced:!p},{splice:function(_,O){var R=r(this),w=i(R),A=t(_,w),I=arguments.length,x,D,P,E,T,q;for(I===0?x=D=0:I===1?(x=0,D=w-A):(x=I-2,D=m(y(n(O),0),w-A)),o(w+x-D),P=u(R,D),E=0;E<D;E++)T=A+E,T in R&&c(P,E,R[T]);if(P.length=D,x<D){for(E=A;E<w-D;E++)T=E+D,q=E+x,T in R?R[q]=R[T]:f(R,q);for(E=w;E>w-D+x;E--)f(R,E-1)}else if(x>D)for(E=w-D;E>A;E--)T=E+D-1,q=E+x-1,T in R?R[q]=R[T]:f(R,q);for(E=0;E<x;E++)R[E+A]=arguments[E+2];return a(R,w-D+x),P}}),Em}var Ac,Om;function dI(){if(Om)return Ac;Om=1,vI();var e=Ye();return Ac=e("Array","splice"),Ac}var Dc,xm;function pI(){if(xm)return Dc;xm=1;var e=Re(),r=dI(),t=Array.prototype;return Dc=function(n){var i=n.splice;return n===t||e(t,n)&&i===t.splice?r:i},Dc}var Mc,qm;function hI(){if(qm)return Mc;qm=1;var e=pI();return Mc=e,Mc}var Cc,Pm;function yI(){return Pm||(Pm=1,Cc=hI()),Cc}var mI=yI(),TS=Y(mI),Am={},$c,Dm;function gI(){if(Dm)return $c;Dm=1;var e=ye(),r=se(),t=Ke(),n=ne(),i=ua(),a=fa(),o=Kf(),u=pr(),c=na(),f=Object.assign,v=Object.defineProperty,p=r([].concat);return $c=!f||n(function(){if(e&&f({b:1},f(v({},"a",{enumerable:!0,get:function(){v(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var y={},m={},g=Symbol("assign detection"),_="abcdefghijklmnopqrst";return y[g]=7,_.split("").forEach(function(O){m[O]=O}),f({},y)[g]!==7||i(f({},m)).join("")!==_})?function(m,g){for(var _=u(m),O=arguments.length,R=1,w=a.f,A=o.f;O>R;)for(var I=c(arguments[R++]),x=w?p(i(I),w(I)):i(I),D=x.length,P=0,E;D>P;)E=x[P++],(!e||t(A,I,E))&&(_[E]=I[E]);return _}:f,$c}var Mm;function bI(){if(Mm)return Am;Mm=1;var e=U(),r=gI();return e({target:"Object",stat:!0,arity:2,forced:Object.assign!==r},{assign:r}),Am}var Nc,Cm;function _I(){if(Cm)return Nc;Cm=1,bI();var e=we();return Nc=e.Object.assign,Nc}var Lc,$m;function SI(){if($m)return Lc;$m=1;var e=_I();return Lc=e,Lc}var jc,Nm;function wI(){return Nm||(Nm=1,jc=SI()),jc}var EI=wI(),II=Y(EI),Fc,Lm;function RI(){if(Lm)return Fc;Lm=1,aS();var e=Ye();return Fc=e("Array","concat"),Fc}var kc,jm;function TI(){if(jm)return kc;jm=1;var e=Re(),r=RI(),t=Array.prototype;return kc=function(n){var i=n.concat;return n===t||e(t,n)&&i===t.concat?r:i},kc}var Bc,Fm;function OI(){if(Fm)return Bc;Fm=1;var e=TI();return Bc=e,Bc}var Uc,km;function xI(){return km||(km=1,Uc=OI()),Uc}var qI=xI(),PI=Y(qI),Bm={},Um;function AI(){if(Um)return Bm;Um=1;var e=U(),r=ye(),t=_i();return e({target:"Object",stat:!0,sham:!r},{create:t}),Bm}var zc,zm;function DI(){if(zm)return zc;zm=1,AI();var e=we(),r=e.Object;return zc=function(n,i){return r.create(n,i)},zc}var Gc,Gm;function MI(){if(Gm)return Gc;Gm=1;var e=DI();return Gc=e,Gc}var Wc,Wm;function CI(){return Wm||(Wm=1,Wc=MI()),Wc}var $I=CI(),NI=Y($I),Km={},Kc,Ym;function LI(){if(Ym)return Kc;Ym=1;var e=In(),r=ot(),t=Nt(),n=RangeError;return Kc=function(a){var o=r(t(this)),u="",c=e(a);if(c<0||c===1/0)throw new n("Wrong number of repetitions");for(;c>0;(c>>>=1)&&(o+=o))c&1&&(u+=o);return u},Kc}var Yc,Hm;function jI(){if(Hm)return Yc;Hm=1;var e=se(),r=tS(),t=ot(),n=LI(),i=Nt(),a=e(n),o=e("".slice),u=Math.ceil,c=function(f){return function(v,p,y){var m=t(i(v)),g=r(p),_=m.length,O=y===void 0?" ":t(y),R,w;return g<=_||O===""?m:(R=g-_,w=a(O,u(R/O.length)),w.length>R&&(w=o(w,0,R)),f?m+w:w+m)}};return Yc={start:c(!1),end:c(!0)},Yc}var Hc,Vm;function FI(){if(Vm)return Hc;Vm=1;var e=se(),r=ne(),t=jI().start,n=RangeError,i=isFinite,a=Math.abs,o=Date.prototype,u=o.toISOString,c=e(o.getTime),f=e(o.getUTCDate),v=e(o.getUTCFullYear),p=e(o.getUTCHours),y=e(o.getUTCMilliseconds),m=e(o.getUTCMinutes),g=e(o.getUTCMonth),_=e(o.getUTCSeconds);return Hc=r(function(){return u.call(new Date(-5e13-1))!=="0385-07-25T07:06:39.999Z"})||!r(function(){u.call(new Date(NaN))})?function(){if(!i(c(this)))throw new n("Invalid time value");var R=this,w=v(R),A=y(R),I=w<0?"-":w>9999?"+":"";return I+t(a(w),I?6:4,0)+"-"+t(g(R)+1,2,0)+"-"+t(f(R),2,0)+"T"+t(p(R),2,0)+":"+t(m(R),2,0)+":"+t(_(R),2,0)+"."+t(A,3,0)+"Z"}:u,Hc}var Xm;function kI(){if(Xm)return Km;Xm=1;var e=U(),r=Ke(),t=pr(),n=Z_(),i=FI(),a=Wr(),o=ne(),u=o(function(){return new Date(NaN).toJSON()!==null||r(Date.prototype.toJSON,{toISOString:function(){return 1}})!==1});return e({target:"Date",proto:!0,forced:u},{toJSON:function(f){var v=t(this),p=n(v,"number");return typeof p=="number"&&!isFinite(p)?null:!("toISOString"in v)&&a(v)==="Date"?r(i,v):v.toISOString()}}),Km}var Vc,Zm;function BI(){if(Zm)return Vc;Zm=1,kI(),lS();var e=we(),r=ta();return e.JSON||(e.JSON={stringify:JSON.stringify}),Vc=function(n,i,a){return r(e.JSON.stringify,null,arguments)},Vc}var Xc,Jm;function UI(){if(Jm)return Xc;Jm=1;var e=BI();return Xc=e,Xc}var Zc,Qm;function zI(){return Qm||(Qm=1,Zc=UI()),Zc}var GI=zI(),WI=Y(GI),eg={},rg={},Jc,tg;function KI(){if(tg)return Jc;tg=1;var e=TypeError;return Jc=function(r,t){if(r<t)throw new e("Not enough arguments");return r},Jc}var Qc,ng;function OS(){if(ng)return Qc;ng=1;var e=he(),r=ta(),t=Ie(),n=ES(),i=gn(),a=Rn(),o=KI(),u=e.Function,c=/MSIE .\./.test(i)||n==="BUN"&&function(){var f=e.Bun.version.split(".");return f.length<3||f[0]==="0"&&(f[1]<3||f[1]==="3"&&f[2]==="0")}();return Qc=function(f,v){var p=v?2:1;return c?function(y,m){var g=o(arguments.length,1)>p,_=t(y)?y:u(y),O=g?a(arguments,p):[],R=g?function(){r(_,this,O)}:_;return v?f(R,m):f(R)}:f},Qc}var ig;function YI(){if(ig)return rg;ig=1;var e=U(),r=he(),t=OS(),n=t(r.setInterval,!0);return e({global:!0,bind:!0,forced:r.setInterval!==n},{setInterval:n}),rg}var ag={},og;function HI(){if(og)return ag;og=1;var e=U(),r=he(),t=OS(),n=t(r.setTimeout,!0);return e({global:!0,bind:!0,forced:r.setTimeout!==n},{setTimeout:n}),ag}var sg;function VI(){return sg||(sg=1,YI(),HI()),eg}var el,ug;function XI(){if(ug)return el;ug=1,VI();var e=we();return el=e.setTimeout,el}var rl,cg;function ZI(){return cg||(cg=1,rl=XI()),rl}var JI=ZI(),QI=Y(JI),tl={exports:{}},lg;function eR(){return lg||(lg=1,function(e){function r(n){if(n)return t(n);this._callbacks=new Map}function t(n){return Object.assign(n,r.prototype),n._callbacks=new Map,n}r.prototype.on=function(n,i){const a=this._callbacks.get(n)??[];return a.push(i),this._callbacks.set(n,a),this},r.prototype.once=function(n,i){const a=(...o)=>{this.off(n,a),i.apply(this,o)};return a.fn=i,this.on(n,a),this},r.prototype.off=function(n,i){if(n===void 0&&i===void 0)return this._callbacks.clear(),this;if(i===void 0)return this._callbacks.delete(n),this;const a=this._callbacks.get(n);if(a){for(const[o,u]of a.entries())if(u===i||u.fn===i){a.splice(o,1);break}a.length===0?this._callbacks.delete(n):this._callbacks.set(n,a)}return this},r.prototype.emit=function(n,...i){const a=this._callbacks.get(n);if(a){const o=[...a];for(const u of o)u.apply(this,i)}return this},r.prototype.listeners=function(n){return this._callbacks.get(n)??[]},r.prototype.listenerCount=function(n){if(n)return this.listeners(n).length;let i=0;for(const a of this._callbacks.values())i+=a.length;return i},r.prototype.hasListeners=function(n){return this.listenerCount(n)>0},r.prototype.addEventListener=r.prototype.on,r.prototype.removeListener=r.prototype.off,r.prototype.removeEventListener=r.prototype.off,r.prototype.removeAllListeners=r.prototype.off,e.exports=r}(tl)),tl.exports}var rR=eR(),tR=Y(rR);/*! Hammer.JS - v2.0.17-rc - 2019-12-16
 * http://naver.github.io/egjs
 *
 * Forked By Naver egjs
 * Copyright (c) hammerjs
 * Licensed under the MIT license */function vr(){return vr=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},vr.apply(this,arguments)}function ir(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r}function ki(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Nf;typeof Object.assign!="function"?Nf=function(r){if(r==null)throw new TypeError("Cannot convert undefined or null to object");for(var t=Object(r),n=1;n<arguments.length;n++){var i=arguments[n];if(i!=null)for(var a in i)i.hasOwnProperty(a)&&(t[a]=i[a])}return t}:Nf=Object.assign;var At=Nf,fg=["","webkit","Moz","MS","ms","o"],nR=typeof document>"u"?{style:{}}:document.createElement("div"),iR="function",un=Math.round,Dt=Math.abs,av=Date.now;function ha(e,r){for(var t,n,i=r[0].toUpperCase()+r.slice(1),a=0;a<fg.length;){if(t=fg[a],n=t?t+i:r,n in e)return n;a++}}var Ur;typeof window>"u"?Ur={}:Ur=window;var xS=ha(nR.style,"touchAction"),qS=xS!==void 0;function aR(){if(!qS)return!1;var e={},r=Ur.CSS&&Ur.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(t){return e[t]=r?Ur.CSS.supports("touch-action",t):!0}),e}var PS="compute",AS="auto",Lf="manipulation",xt="none",Jn="pan-x",Qn="pan-y",Bi=aR(),oR=/mobile|tablet|ip(ad|hone|od)|android/i,DS="ontouchstart"in Ur,sR=ha(Ur,"PointerEvent")!==void 0,uR=DS&&oR.test(navigator.userAgent),Ei="touch",cR="pen",ov="mouse",lR="kinect",fR=25,Ne=1,Ft=2,pe=4,We=8,Ki=1,Ii=2,Ri=4,Ti=8,pn=16,Sr=Ii|Ri,qt=Ti|pn,MS=Sr|qt,CS=["x","y"],Yi=["clientX","clientY"];function zr(e,r,t){var n;if(e)if(e.forEach)e.forEach(r,t);else if(e.length!==void 0)for(n=0;n<e.length;)r.call(t,e[n],n,e),n++;else for(n in e)e.hasOwnProperty(n)&&r.call(t,e[n],n,e)}function ya(e,r){return typeof e===iR?e.apply(r&&r[0]||void 0,r):e}function wt(e,r){return e.indexOf(r)>-1}function vR(e){if(wt(e,xt))return xt;var r=wt(e,Jn),t=wt(e,Qn);return r&&t?xt:r||t?r?Jn:Qn:wt(e,Lf)?Lf:AS}var $S=function(){function e(t,n){this.manager=t,this.set(n)}var r=e.prototype;return r.set=function(n){n===PS&&(n=this.compute()),qS&&this.manager.element.style&&Bi[n]&&(this.manager.element.style[xS]=n),this.actions=n.toLowerCase().trim()},r.update=function(){this.set(this.manager.options.touchAction)},r.compute=function(){var n=[];return zr(this.manager.recognizers,function(i){ya(i.options.enable,[i])&&(n=n.concat(i.getTouchAction()))}),vR(n.join(" "))},r.preventDefaults=function(n){var i=n.srcEvent,a=n.offsetDirection;if(this.manager.session.prevented){i.preventDefault();return}var o=this.actions,u=wt(o,xt)&&!Bi[xt],c=wt(o,Qn)&&!Bi[Qn],f=wt(o,Jn)&&!Bi[Jn];if(u){var v=n.pointers.length===1,p=n.distance<2,y=n.deltaTime<250;if(v&&p&&y)return}if(!(f&&c)&&(u||c&&a&Sr||f&&a&qt))return this.preventSrc(i)},r.preventSrc=function(n){this.manager.session.prevented=!0,n.preventDefault()},e}();function sv(e,r){for(;e;){if(e===r)return!0;e=e.parentNode}return!1}function NS(e){var r=e.length;if(r===1)return{x:un(e[0].clientX),y:un(e[0].clientY)};for(var t=0,n=0,i=0;i<r;)t+=e[i].clientX,n+=e[i].clientY,i++;return{x:un(t/r),y:un(n/r)}}function vg(e){for(var r=[],t=0;t<e.pointers.length;)r[t]={clientX:un(e.pointers[t].clientX),clientY:un(e.pointers[t].clientY)},t++;return{timeStamp:av(),pointers:r,center:NS(r),deltaX:e.deltaX,deltaY:e.deltaY}}function Hi(e,r,t){t||(t=CS);var n=r[t[0]]-e[t[0]],i=r[t[1]]-e[t[1]];return Math.sqrt(n*n+i*i)}function jf(e,r,t){t||(t=CS);var n=r[t[0]]-e[t[0]],i=r[t[1]]-e[t[1]];return Math.atan2(i,n)*180/Math.PI}function LS(e,r){return e===r?Ki:Dt(e)>=Dt(r)?e<0?Ii:Ri:r<0?Ti:pn}function dR(e,r){var t=r.center,n=e.offsetDelta||{},i=e.prevDelta||{},a=e.prevInput||{};(r.eventType===Ne||a.eventType===pe)&&(i=e.prevDelta={x:a.deltaX||0,y:a.deltaY||0},n=e.offsetDelta={x:t.x,y:t.y}),r.deltaX=i.x+(t.x-n.x),r.deltaY=i.y+(t.y-n.y)}function jS(e,r,t){return{x:r/e||0,y:t/e||0}}function pR(e,r){return Hi(r[0],r[1],Yi)/Hi(e[0],e[1],Yi)}function hR(e,r){return jf(r[1],r[0],Yi)+jf(e[1],e[0],Yi)}function yR(e,r){var t=e.lastInterval||r,n=r.timeStamp-t.timeStamp,i,a,o,u;if(r.eventType!==We&&(n>fR||t.velocity===void 0)){var c=r.deltaX-t.deltaX,f=r.deltaY-t.deltaY,v=jS(n,c,f);a=v.x,o=v.y,i=Dt(v.x)>Dt(v.y)?v.x:v.y,u=LS(c,f),e.lastInterval=r}else i=t.velocity,a=t.velocityX,o=t.velocityY,u=t.direction;r.velocity=i,r.velocityX=a,r.velocityY=o,r.direction=u}function mR(e,r){var t=e.session,n=r.pointers,i=n.length;t.firstInput||(t.firstInput=vg(r)),i>1&&!t.firstMultiple?t.firstMultiple=vg(r):i===1&&(t.firstMultiple=!1);var a=t.firstInput,o=t.firstMultiple,u=o?o.center:a.center,c=r.center=NS(n);r.timeStamp=av(),r.deltaTime=r.timeStamp-a.timeStamp,r.angle=jf(u,c),r.distance=Hi(u,c),dR(t,r),r.offsetDirection=LS(r.deltaX,r.deltaY);var f=jS(r.deltaTime,r.deltaX,r.deltaY);r.overallVelocityX=f.x,r.overallVelocityY=f.y,r.overallVelocity=Dt(f.x)>Dt(f.y)?f.x:f.y,r.scale=o?pR(o.pointers,n):1,r.rotation=o?hR(o.pointers,n):0,r.maxPointers=t.prevInput?r.pointers.length>t.prevInput.maxPointers?r.pointers.length:t.prevInput.maxPointers:r.pointers.length,yR(t,r);var v=e.element,p=r.srcEvent,y;p.composedPath?y=p.composedPath()[0]:p.path?y=p.path[0]:y=p.target,sv(y,v)&&(v=y),r.target=v}function gR(e,r,t){var n=t.pointers.length,i=t.changedPointers.length,a=r&Ne&&n-i===0,o=r&(pe|We)&&n-i===0;t.isFirst=!!a,t.isFinal=!!o,a&&(e.session={}),t.eventType=r,mR(e,t),e.emit("hammer.input",t),e.recognize(t),e.session.prevInput=t}function ei(e){return e.trim().split(/\s+/g)}function Yn(e,r,t){zr(ei(r),function(n){e.addEventListener(n,t,!1)})}function Hn(e,r,t){zr(ei(r),function(n){e.removeEventListener(n,t,!1)})}function dg(e){var r=e.ownerDocument||e;return r.defaultView||r.parentWindow||window}var xn=function(){function e(t,n){var i=this;this.manager=t,this.callback=n,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(a){ya(t.options.enable,[t])&&i.handler(a)},this.init()}var r=e.prototype;return r.handler=function(){},r.init=function(){this.evEl&&Yn(this.element,this.evEl,this.domHandler),this.evTarget&&Yn(this.target,this.evTarget,this.domHandler),this.evWin&&Yn(dg(this.element),this.evWin,this.domHandler)},r.destroy=function(){this.evEl&&Hn(this.element,this.evEl,this.domHandler),this.evTarget&&Hn(this.target,this.evTarget,this.domHandler),this.evWin&&Hn(dg(this.element),this.evWin,this.domHandler)},e}();function Mt(e,r,t){if(e.indexOf&&!t)return e.indexOf(r);for(var n=0;n<e.length;){if(t&&e[n][t]==r||!t&&e[n]===r)return n;n++}return-1}var bR={pointerdown:Ne,pointermove:Ft,pointerup:pe,pointercancel:We,pointerout:We},_R={2:Ei,3:cR,4:ov,5:lR},FS="pointerdown",kS="pointermove pointerup pointercancel";Ur.MSPointerEvent&&!Ur.PointerEvent&&(FS="MSPointerDown",kS="MSPointerMove MSPointerUp MSPointerCancel");var BS=function(e){ir(r,e);function r(){var n,i=r.prototype;return i.evEl=FS,i.evWin=kS,n=e.apply(this,arguments)||this,n.store=n.manager.session.pointerEvents=[],n}var t=r.prototype;return t.handler=function(i){var a=this.store,o=!1,u=i.type.toLowerCase().replace("ms",""),c=bR[u],f=_R[i.pointerType]||i.pointerType,v=f===Ei,p=Mt(a,i.pointerId,"pointerId");c&Ne&&(i.button===0||v)?p<0&&(a.push(i),p=a.length-1):c&(pe|We)&&(o=!0),!(p<0)&&(a[p]=i,this.callback(this.manager,c,{pointers:a,changedPointers:[i],pointerType:f,srcEvent:i}),o&&a.splice(p,1))},r}(xn);function ri(e){return Array.prototype.slice.call(e,0)}function uv(e,r,t){for(var n=[],i=[],a=0;a<e.length;){var o=r?e[a][r]:e[a];Mt(i,o)<0&&n.push(e[a]),i[a]=o,a++}return t&&(r?n=n.sort(function(u,c){return u[r]>c[r]}):n=n.sort()),n}var SR={touchstart:Ne,touchmove:Ft,touchend:pe,touchcancel:We},wR="touchstart touchmove touchend touchcancel",cv=function(e){ir(r,e);function r(){var n;return r.prototype.evTarget=wR,n=e.apply(this,arguments)||this,n.targetIds={},n}var t=r.prototype;return t.handler=function(i){var a=SR[i.type],o=ER.call(this,i,a);o&&this.callback(this.manager,a,{pointers:o[0],changedPointers:o[1],pointerType:Ei,srcEvent:i})},r}(xn);function ER(e,r){var t=ri(e.touches),n=this.targetIds;if(r&(Ne|Ft)&&t.length===1)return n[t[0].identifier]=!0,[t,t];var i,a,o=ri(e.changedTouches),u=[],c=this.target;if(a=t.filter(function(f){return sv(f.target,c)}),r===Ne)for(i=0;i<a.length;)n[a[i].identifier]=!0,i++;for(i=0;i<o.length;)n[o[i].identifier]&&u.push(o[i]),r&(pe|We)&&delete n[o[i].identifier],i++;if(u.length)return[uv(a.concat(u),"identifier",!0),u]}var IR={mousedown:Ne,mousemove:Ft,mouseup:pe},RR="mousedown",TR="mousemove mouseup",lv=function(e){ir(r,e);function r(){var n,i=r.prototype;return i.evEl=RR,i.evWin=TR,n=e.apply(this,arguments)||this,n.pressed=!1,n}var t=r.prototype;return t.handler=function(i){var a=IR[i.type];a&Ne&&i.button===0&&(this.pressed=!0),a&Ft&&i.which!==1&&(a=pe),this.pressed&&(a&pe&&(this.pressed=!1),this.callback(this.manager,a,{pointers:[i],changedPointers:[i],pointerType:ov,srcEvent:i}))},r}(xn),OR=2500,pg=25;function hg(e){var r=e.changedPointers,t=r[0];if(t.identifier===this.primaryTouch){var n={x:t.clientX,y:t.clientY},i=this.lastTouches;this.lastTouches.push(n);var a=function(){var u=i.indexOf(n);u>-1&&i.splice(u,1)};setTimeout(a,OR)}}function xR(e,r){e&Ne?(this.primaryTouch=r.changedPointers[0].identifier,hg.call(this,r)):e&(pe|We)&&hg.call(this,r)}function qR(e){for(var r=e.srcEvent.clientX,t=e.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var i=this.lastTouches[n],a=Math.abs(r-i.x),o=Math.abs(t-i.y);if(a<=pg&&o<=pg)return!0}return!1}var US=function(){var e=function(r){ir(t,r);function t(i,a){var o;return o=r.call(this,i,a)||this,o.handler=function(u,c,f){var v=f.pointerType===Ei,p=f.pointerType===ov;if(!(p&&f.sourceCapabilities&&f.sourceCapabilities.firesTouchEvents)){if(v)xR.call(ki(ki(o)),c,f);else if(p&&qR.call(ki(ki(o)),f))return;o.callback(u,c,f)}},o.touch=new cv(o.manager,o.handler),o.mouse=new lv(o.manager,o.handler),o.primaryTouch=null,o.lastTouches=[],o}var n=t.prototype;return n.destroy=function(){this.touch.destroy(),this.mouse.destroy()},t}(xn);return e}();function PR(e){var r,t=e.options.inputClass;return t?r=t:sR?r=BS:uR?r=cv:DS?r=US:r=lv,new r(e,gR)}function cn(e,r,t){return Array.isArray(e)?(zr(e,t[r],t),!0):!1}var Gi=1,tr=2,hn=4,nt=8,Gr=nt,ti=16,_r=32,AR=1;function DR(){return AR++}function Ui(e,r){var t=r.manager;return t?t.get(e):e}function yg(e){return e&ti?"cancel":e&nt?"end":e&hn?"move":e&tr?"start":""}var Oi=function(){function e(t){t===void 0&&(t={}),this.options=vr({enable:!0},t),this.id=DR(),this.manager=null,this.state=Gi,this.simultaneous={},this.requireFail=[]}var r=e.prototype;return r.set=function(n){return At(this.options,n),this.manager&&this.manager.touchAction.update(),this},r.recognizeWith=function(n){if(cn(n,"recognizeWith",this))return this;var i=this.simultaneous;return n=Ui(n,this),i[n.id]||(i[n.id]=n,n.recognizeWith(this)),this},r.dropRecognizeWith=function(n){return cn(n,"dropRecognizeWith",this)?this:(n=Ui(n,this),delete this.simultaneous[n.id],this)},r.requireFailure=function(n){if(cn(n,"requireFailure",this))return this;var i=this.requireFail;return n=Ui(n,this),Mt(i,n)===-1&&(i.push(n),n.requireFailure(this)),this},r.dropRequireFailure=function(n){if(cn(n,"dropRequireFailure",this))return this;n=Ui(n,this);var i=Mt(this.requireFail,n);return i>-1&&this.requireFail.splice(i,1),this},r.hasRequireFailures=function(){return this.requireFail.length>0},r.canRecognizeWith=function(n){return!!this.simultaneous[n.id]},r.emit=function(n){var i=this,a=this.state;function o(u){i.manager.emit(u,n)}a<nt&&o(i.options.event+yg(a)),o(i.options.event),n.additionalEvent&&o(n.additionalEvent),a>=nt&&o(i.options.event+yg(a))},r.tryEmit=function(n){if(this.canEmit())return this.emit(n);this.state=_r},r.canEmit=function(){for(var n=0;n<this.requireFail.length;){if(!(this.requireFail[n].state&(_r|Gi)))return!1;n++}return!0},r.recognize=function(n){var i=At({},n);if(!ya(this.options.enable,[this,i])){this.reset(),this.state=_r;return}this.state&(Gr|ti|_r)&&(this.state=Gi),this.state=this.process(i),this.state&(tr|hn|nt|ti)&&this.tryEmit(i)},r.process=function(n){},r.getTouchAction=function(){},r.reset=function(){},e}(),Ff=function(e){ir(r,e);function r(n){var i;return n===void 0&&(n={}),i=e.call(this,vr({event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},n))||this,i.pTime=!1,i.pCenter=!1,i._timer=null,i._input=null,i.count=0,i}var t=r.prototype;return t.getTouchAction=function(){return[Lf]},t.process=function(i){var a=this,o=this.options,u=i.pointers.length===o.pointers,c=i.distance<o.threshold,f=i.deltaTime<o.time;if(this.reset(),i.eventType&Ne&&this.count===0)return this.failTimeout();if(c&&f&&u){if(i.eventType!==pe)return this.failTimeout();var v=this.pTime?i.timeStamp-this.pTime<o.interval:!0,p=!this.pCenter||Hi(this.pCenter,i.center)<o.posThreshold;this.pTime=i.timeStamp,this.pCenter=i.center,!p||!v?this.count=1:this.count+=1,this._input=i;var y=this.count%o.taps;if(y===0)return this.hasRequireFailures()?(this._timer=setTimeout(function(){a.state=Gr,a.tryEmit()},o.interval),tr):Gr}return _r},t.failTimeout=function(){var i=this;return this._timer=setTimeout(function(){i.state=_r},this.options.interval),_r},t.reset=function(){clearTimeout(this._timer)},t.emit=function(){this.state===Gr&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))},r}(Oi),yn=function(e){ir(r,e);function r(n){return n===void 0&&(n={}),e.call(this,vr({pointers:1},n))||this}var t=r.prototype;return t.attrTest=function(i){var a=this.options.pointers;return a===0||i.pointers.length===a},t.process=function(i){var a=this.state,o=i.eventType,u=a&(tr|hn),c=this.attrTest(i);return u&&(o&We||!c)?a|ti:u||c?o&pe?a|nt:a&tr?a|hn:tr:_r},r}(Oi);function zS(e){return e===pn?"down":e===Ti?"up":e===Ii?"left":e===Ri?"right":""}var fv=function(e){ir(r,e);function r(n){var i;return n===void 0&&(n={}),i=e.call(this,vr({event:"pan",threshold:10,pointers:1,direction:MS},n))||this,i.pX=null,i.pY=null,i}var t=r.prototype;return t.getTouchAction=function(){var i=this.options.direction,a=[];return i&Sr&&a.push(Qn),i&qt&&a.push(Jn),a},t.directionTest=function(i){var a=this.options,o=!0,u=i.distance,c=i.direction,f=i.deltaX,v=i.deltaY;return c&a.direction||(a.direction&Sr?(c=f===0?Ki:f<0?Ii:Ri,o=f!==this.pX,u=Math.abs(i.deltaX)):(c=v===0?Ki:v<0?Ti:pn,o=v!==this.pY,u=Math.abs(i.deltaY))),i.direction=c,o&&u>a.threshold&&c&a.direction},t.attrTest=function(i){return yn.prototype.attrTest.call(this,i)&&(this.state&tr||!(this.state&tr)&&this.directionTest(i))},t.emit=function(i){this.pX=i.deltaX,this.pY=i.deltaY;var a=zS(i.direction);a&&(i.additionalEvent=this.options.event+a),e.prototype.emit.call(this,i)},r}(yn),GS=function(e){ir(r,e);function r(n){return n===void 0&&(n={}),e.call(this,vr({event:"swipe",threshold:10,velocity:.3,direction:Sr|qt,pointers:1},n))||this}var t=r.prototype;return t.getTouchAction=function(){return fv.prototype.getTouchAction.call(this)},t.attrTest=function(i){var a=this.options.direction,o;return a&(Sr|qt)?o=i.overallVelocity:a&Sr?o=i.overallVelocityX:a&qt&&(o=i.overallVelocityY),e.prototype.attrTest.call(this,i)&&a&i.offsetDirection&&i.distance>this.options.threshold&&i.maxPointers===this.options.pointers&&Dt(o)>this.options.velocity&&i.eventType&pe},t.emit=function(i){var a=zS(i.offsetDirection);a&&this.manager.emit(this.options.event+a,i),this.manager.emit(this.options.event,i)},r}(yn),WS=function(e){ir(r,e);function r(n){return n===void 0&&(n={}),e.call(this,vr({event:"pinch",threshold:0,pointers:2},n))||this}var t=r.prototype;return t.getTouchAction=function(){return[xt]},t.attrTest=function(i){return e.prototype.attrTest.call(this,i)&&(Math.abs(i.scale-1)>this.options.threshold||this.state&tr)},t.emit=function(i){if(i.scale!==1){var a=i.scale<1?"in":"out";i.additionalEvent=this.options.event+a}e.prototype.emit.call(this,i)},r}(yn),KS=function(e){ir(r,e);function r(n){return n===void 0&&(n={}),e.call(this,vr({event:"rotate",threshold:0,pointers:2},n))||this}var t=r.prototype;return t.getTouchAction=function(){return[xt]},t.attrTest=function(i){return e.prototype.attrTest.call(this,i)&&(Math.abs(i.rotation)>this.options.threshold||this.state&tr)},r}(yn),YS=function(e){ir(r,e);function r(n){var i;return n===void 0&&(n={}),i=e.call(this,vr({event:"press",pointers:1,time:251,threshold:9},n))||this,i._timer=null,i._input=null,i}var t=r.prototype;return t.getTouchAction=function(){return[AS]},t.process=function(i){var a=this,o=this.options,u=i.pointers.length===o.pointers,c=i.distance<o.threshold,f=i.deltaTime>o.time;if(this._input=i,!c||!u||i.eventType&(pe|We)&&!f)this.reset();else if(i.eventType&Ne)this.reset(),this._timer=setTimeout(function(){a.state=Gr,a.tryEmit()},o.time);else if(i.eventType&pe)return Gr;return _r},t.reset=function(){clearTimeout(this._timer)},t.emit=function(i){this.state===Gr&&(i&&i.eventType&pe?this.manager.emit(this.options.event+"up",i):(this._input.timeStamp=av(),this.manager.emit(this.options.event,this._input)))},r}(Oi),HS={domEvents:!1,touchAction:PS,enable:!0,inputTarget:null,inputClass:null,cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},mg=[[KS,{enable:!1}],[WS,{enable:!1},["rotate"]],[GS,{direction:Sr}],[fv,{direction:Sr},["swipe"]],[Ff],[Ff,{event:"doubletap",taps:2},["tap"]],[YS]],MR=1,gg=2;function bg(e,r){var t=e.element;if(t.style){var n;zr(e.options.cssProps,function(i,a){n=ha(t.style,a),r?(e.oldCssProps[n]=t.style[n],t.style[n]=i):t.style[n]=e.oldCssProps[n]||""}),r||(e.oldCssProps={})}}function CR(e,r){var t=document.createEvent("Event");t.initEvent(e,!0,!0),t.gesture=r,r.target.dispatchEvent(t)}var _g=function(){function e(t,n){var i=this;this.options=At({},HS,n||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=PR(this),this.touchAction=new $S(this,this.options.touchAction),bg(this,!0),zr(this.options.recognizers,function(a){var o=i.add(new a[0](a[1]));a[2]&&o.recognizeWith(a[2]),a[3]&&o.requireFailure(a[3])},this)}var r=e.prototype;return r.set=function(n){return At(this.options,n),n.touchAction&&this.touchAction.update(),n.inputTarget&&(this.input.destroy(),this.input.target=n.inputTarget,this.input.init()),this},r.stop=function(n){this.session.stopped=n?gg:MR},r.recognize=function(n){var i=this.session;if(!i.stopped){this.touchAction.preventDefaults(n);var a,o=this.recognizers,u=i.curRecognizer;(!u||u&&u.state&Gr)&&(i.curRecognizer=null,u=null);for(var c=0;c<o.length;)a=o[c],i.stopped!==gg&&(!u||a===u||a.canRecognizeWith(u))?a.recognize(n):a.reset(),!u&&a.state&(tr|hn|nt)&&(i.curRecognizer=a,u=a),c++}},r.get=function(n){if(n instanceof Oi)return n;for(var i=this.recognizers,a=0;a<i.length;a++)if(i[a].options.event===n)return i[a];return null},r.add=function(n){if(cn(n,"add",this))return this;var i=this.get(n.options.event);return i&&this.remove(i),this.recognizers.push(n),n.manager=this,this.touchAction.update(),n},r.remove=function(n){if(cn(n,"remove",this))return this;var i=this.get(n);if(n){var a=this.recognizers,o=Mt(a,i);o!==-1&&(a.splice(o,1),this.touchAction.update())}return this},r.on=function(n,i){if(n===void 0||i===void 0)return this;var a=this.handlers;return zr(ei(n),function(o){a[o]=a[o]||[],a[o].push(i)}),this},r.off=function(n,i){if(n===void 0)return this;var a=this.handlers;return zr(ei(n),function(o){i?a[o]&&a[o].splice(Mt(a[o],i),1):delete a[o]}),this},r.emit=function(n,i){this.options.domEvents&&CR(n,i);var a=this.handlers[n]&&this.handlers[n].slice();if(!(!a||!a.length)){i.type=n,i.preventDefault=function(){i.srcEvent.preventDefault()};for(var o=0;o<a.length;)a[o](i),o++}},r.destroy=function(){this.element&&bg(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null},e}(),$R={touchstart:Ne,touchmove:Ft,touchend:pe,touchcancel:We},NR="touchstart",LR="touchstart touchmove touchend touchcancel",jR=function(e){ir(r,e);function r(){var n,i=r.prototype;return i.evTarget=NR,i.evWin=LR,n=e.apply(this,arguments)||this,n.started=!1,n}var t=r.prototype;return t.handler=function(i){var a=$R[i.type];if(a===Ne&&(this.started=!0),!!this.started){var o=FR.call(this,i,a);a&(pe|We)&&o[0].length-o[1].length===0&&(this.started=!1),this.callback(this.manager,a,{pointers:o[0],changedPointers:o[1],pointerType:Ei,srcEvent:i})}},r}(xn);function FR(e,r){var t=ri(e.touches),n=ri(e.changedTouches);return r&(pe|We)&&(t=uv(t.concat(n),"identifier",!0)),[t,n]}function VS(e,r,t){var n="DEPRECATED METHOD: "+r+`
`+t+` AT 
`;return function(){var i=new Error("get-stack-trace"),a=i&&i.stack?i.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=window.console&&(window.console.warn||window.console.log);return o&&o.call(window.console,n,a),e.apply(this,arguments)}}var XS=VS(function(e,r,t){for(var n=Object.keys(r),i=0;i<n.length;)(!t||t&&e[n[i]]===void 0)&&(e[n[i]]=r[n[i]]),i++;return e},"extend","Use `assign`."),kR=VS(function(e,r){return XS(e,r,!0)},"merge","Use `assign`.");function BR(e,r,t){var n=r.prototype,i;i=e.prototype=Object.create(n),i.constructor=e,i._super=n,t&&At(i,t)}function Sg(e,r){return function(){return e.apply(r,arguments)}}var UR=function(){var e=function(t,n){return n===void 0&&(n={}),new _g(t,vr({recognizers:mg.concat()},n))};return e.VERSION="2.0.17-rc",e.DIRECTION_ALL=MS,e.DIRECTION_DOWN=pn,e.DIRECTION_LEFT=Ii,e.DIRECTION_RIGHT=Ri,e.DIRECTION_UP=Ti,e.DIRECTION_HORIZONTAL=Sr,e.DIRECTION_VERTICAL=qt,e.DIRECTION_NONE=Ki,e.DIRECTION_DOWN=pn,e.INPUT_START=Ne,e.INPUT_MOVE=Ft,e.INPUT_END=pe,e.INPUT_CANCEL=We,e.STATE_POSSIBLE=Gi,e.STATE_BEGAN=tr,e.STATE_CHANGED=hn,e.STATE_ENDED=nt,e.STATE_RECOGNIZED=Gr,e.STATE_CANCELLED=ti,e.STATE_FAILED=_r,e.Manager=_g,e.Input=xn,e.TouchAction=$S,e.TouchInput=cv,e.MouseInput=lv,e.PointerEventInput=BS,e.TouchMouseInput=US,e.SingleTouchInput=jR,e.Recognizer=Oi,e.AttrRecognizer=yn,e.Tap=Ff,e.Pan=fv,e.Swipe=GS,e.Pinch=WS,e.Rotate=KS,e.Press=YS,e.on=Yn,e.off=Hn,e.each=zr,e.merge=kR,e.extend=XS,e.bindFn=Sg,e.assign=At,e.inherit=BR,e.bindFn=Sg,e.prefixed=ha,e.toArray=ri,e.inArray=Mt,e.uniqueArray=uv,e.splitStr=ei,e.boolOrFn=ya,e.hasParent=sv,e.addEventListeners=Yn,e.removeEventListeners=Hn,e.defaults=At({},HS,{preset:mg}),e}();const ZS=OE("DELETE");function zR(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return JS({},e,...t)}function JS(){const e=Vi(...arguments);return e1(e),e}function Vi(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r.length<2)return r[0];if(r.length>2)return Vi(JS(r[0],r[1]),...CE(r).call(r,2));const n=r[0],i=r[1];if(n instanceof Date&&i instanceof Date)return n.setTime(i.getTime()),n;for(const a of kE(i))Object.prototype.propertyIsEnumerable.call(i,a)&&(i[a]===ZS?delete n[a]:n[a]!==null&&i[a]!==null&&typeof n[a]=="object"&&typeof i[a]=="object"&&!br(n[a])&&!br(i[a])?n[a]=Vi(n[a],i[a]):n[a]=QS(i[a]));return n}function QS(e){return br(e)?Nr(e).call(e,r=>QS(r)):typeof e=="object"&&e!==null?e instanceof Date?new Date(e.getTime()):Vi({},e):e}function e1(e){for(const r of iv(e))e[r]===ZS?delete e[r]:typeof e[r]=="object"&&e[r]!==null&&e1(e[r])}function GR(){const e=()=>{};return{on:e,off:e,destroy:e,emit:e,get(){return{set:e}}}}const WR=typeof window<"u"?window.Hammer||UR:function(){return GR()};function Br(e){var r;this._cleanupQueue=[],this.active=!1,this._dom={container:e,overlay:document.createElement("div")},this._dom.overlay.classList.add("vis-overlay"),this._dom.container.appendChild(this._dom.overlay),this._cleanupQueue.push(()=>{this._dom.overlay.parentNode.removeChild(this._dom.overlay)});const t=WR(this._dom.overlay);t.on("tap",wS(r=this._onTapOverlay).call(r,this)),this._cleanupQueue.push(()=>{t.destroy()});const n=["tap","doubletap","press","pinch","pan","panstart","panmove","panend"];Zn(n).call(n,i=>{t.on(i,a=>{a.srcEvent.stopPropagation()})}),document&&document.body&&(this._onClick=i=>{KR(i.target,e)||this.deactivate()},document.body.addEventListener("click",this._onClick),this._cleanupQueue.push(()=>{document.body.removeEventListener("click",this._onClick)})),this._escListener=i=>{("key"in i?i.key==="Escape":i.keyCode===27)&&this.deactivate()}}tR(Br.prototype);Br.current=null;Br.prototype.destroy=function(){this.deactivate();for(const t of lI(e=TS(r=this._cleanupQueue).call(r,0)).call(e)){var e,r;t()}};Br.prototype.activate=function(){Br.current&&Br.current.deactivate(),Br.current=this,this.active=!0,this._dom.overlay.style.display="none",this._dom.container.classList.add("vis-active"),this.emit("change"),this.emit("activate"),document.body.addEventListener("keydown",this._escListener)};Br.prototype.deactivate=function(){this.active=!1,this._dom.overlay.style.display="block",this._dom.container.classList.remove("vis-active"),document.body.removeEventListener("keydown",this._escListener),this.emit("change"),this.emit("deactivate")};Br.prototype._onTapOverlay=function(e){this.activate(),e.srcEvent.stopPropagation()};function KR(e,r){for(;e;){if(e===r)return!0;e=e.parentNode}return!1}var nl,wg;function YR(){if(wg)return nl;wg=1,fS();var e=we();return nl=e.Object.getOwnPropertySymbols,nl}var il,Eg;function HR(){if(Eg)return il;Eg=1;var e=YR();return il=e,il}var al,Ig;function VR(){return Ig||(Ig=1,al=HR()),al}var XR=VR(),Rg=Y(XR),ol={exports:{}},Tg={},Og;function ZR(){if(Og)return Tg;Og=1;var e=U(),r=ne(),t=Ir(),n=aa().f,i=ye(),a=!i||r(function(){n(1)});return e({target:"Object",stat:!0,forced:a,sham:!i},{getOwnPropertyDescriptor:function(u,c){return n(t(u),c)}}),Tg}var xg;function JR(){if(xg)return ol.exports;xg=1,ZR();var e=we(),r=e.Object,t=ol.exports=function(i,a){return r.getOwnPropertyDescriptor(i,a)};return r.getOwnPropertyDescriptor.sham&&(t.sham=!0),ol.exports}var sl,qg;function QR(){if(qg)return sl;qg=1;var e=JR();return sl=e,sl}var ul,Pg;function eT(){return Pg||(Pg=1,ul=QR()),ul}var rT=eT(),r1=Y(rT),Ag={},Dg;function tT(){if(Dg)return Ag;Dg=1;var e=U(),r=ye(),t=IS(),n=Ir(),i=aa(),a=sa();return e({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(u){for(var c=n(u),f=i.f,v=t(c),p={},y=0,m,g;v.length>y;)g=f(c,m=v[y++]),g!==void 0&&a(p,m,g);return p}}),Ag}var cl,Mg;function nT(){if(Mg)return cl;Mg=1,tT();var e=we();return cl=e.Object.getOwnPropertyDescriptors,cl}var ll,Cg;function iT(){if(Cg)return ll;Cg=1;var e=nT();return ll=e,ll}var fl,$g;function aT(){return $g||($g=1,fl=iT()),fl}var oT=aT(),Ng=Y(oT),vl={exports:{}},Lg={},jg;function sT(){if(jg)return Lg;jg=1;var e=U(),r=ye(),t=ev().f;return e({target:"Object",stat:!0,forced:Object.defineProperties!==t,sham:!r},{defineProperties:t}),Lg}var Fg;function uT(){if(Fg)return vl.exports;Fg=1,sT();var e=we(),r=e.Object,t=vl.exports=function(i,a){return r.defineProperties(i,a)};return r.defineProperties.sham&&(t.sham=!0),vl.exports}var dl,kg;function cT(){if(kg)return dl;kg=1;var e=uT();return dl=e,dl}var pl,Bg;function lT(){return Bg||(Bg=1,pl=cT()),pl}var fT=lT(),vT=Y(fT),hl,Ug;function dT(){return Ug||(Ug=1,hl=rS()),hl}var pT=dT(),hT=Y(pT),zg={},Gg={},yl={exports:{}},ml,Wg;function yT(){if(Wg)return ml;Wg=1;var e=ne();return ml=e(function(){if(typeof ArrayBuffer=="function"){var r=new ArrayBuffer(8);Object.isExtensible(r)&&Object.defineProperty(r,"a",{value:8})}}),ml}var gl,Kg;function mT(){if(Kg)return gl;Kg=1;var e=ne(),r=Le(),t=Wr(),n=yT(),i=Object.isExtensible,a=e(function(){});return gl=a||n?function(u){return!r(u)||n&&t(u)==="ArrayBuffer"?!1:i?i(u):!0}:i,gl}var bl,Yg;function gT(){if(Yg)return bl;Yg=1;var e=ne();return bl=!e(function(){return Object.isExtensible(Object.preventExtensions({}))}),bl}var Hg;function t1(){if(Hg)return yl.exports;Hg=1;var e=U(),r=se(),t=bi(),n=Le(),i=Te(),a=nr().f,o=la(),u=sS(),c=mT(),f=ia(),v=gT(),p=!1,y=f("meta"),m=0,g=function(I){a(I,y,{value:{objectID:"O"+m++,weakData:{}}})},_=function(I,x){if(!n(I))return typeof I=="symbol"?I:(typeof I=="string"?"S":"P")+I;if(!i(I,y)){if(!c(I))return"F";if(!x)return"E";g(I)}return I[y].objectID},O=function(I,x){if(!i(I,y)){if(!c(I))return!0;if(!x)return!1;g(I)}return I[y].weakData},R=function(I){return v&&p&&c(I)&&!i(I,y)&&g(I),I},w=function(){A.enable=function(){},p=!0;var I=o.f,x=r([].splice),D={};D[y]=1,I(D).length&&(o.f=function(P){for(var E=I(P),T=0,q=E.length;T<q;T++)if(E[T]===y){x(E,T,1);break}return E},e({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:u.f}))},A=yl.exports={enable:w,fastKey:_,getWeakData:O,onFreeze:R};return t[y]=!0,yl.exports}var _l,Vg;function bT(){if(Vg)return _l;Vg=1;var e=Oe(),r=On(),t=e("iterator"),n=Array.prototype;return _l=function(i){return i!==void 0&&(r.Array===i||n[t]===i)},_l}var Sl,Xg;function n1(){if(Xg)return Sl;Xg=1;var e=at(),r=Yf(),t=hi(),n=On(),i=Oe(),a=i("iterator");return Sl=function(o){if(!t(o))return r(o,a)||r(o,"@@iterator")||n[e(o)]},Sl}var wl,Zg;function i1(){if(Zg)return wl;Zg=1;var e=Ke(),r=Kr(),t=Yr(),n=_n(),i=n1(),a=TypeError;return wl=function(o,u){var c=arguments.length<2?i(o):u;if(r(c))return t(e(c,o));throw new a(n(o)+" is not iterable")},wl}var El,Jg;function vv(){if(Jg)return El;Jg=1;var e=Ke(),r=Yr(),t=Yf();return El=function(n,i,a){var o,u;r(n);try{if(o=t(n,"return"),!o){if(i==="throw")throw a;return a}o=e(o,n)}catch(c){u=!0,o=c}if(i==="throw")throw a;if(u)throw o;return r(o),a},El}var Il,Qg;function dv(){if(Qg)return Il;Qg=1;var e=oa(),r=Ke(),t=Yr(),n=_n(),i=bT(),a=it(),o=Re(),u=i1(),c=n1(),f=vv(),v=TypeError,p=function(m,g){this.stopped=m,this.result=g},y=p.prototype;return Il=function(m,g,_){var O=_&&_.that,R=!!(_&&_.AS_ENTRIES),w=!!(_&&_.IS_RECORD),A=!!(_&&_.IS_ITERATOR),I=!!(_&&_.INTERRUPTED),x=e(g,O),D,P,E,T,q,C,j,B=function(ce){return D&&f(D,"normal"),new p(!0,ce)},Z=function(ce){return R?(t(ce),I?x(ce[0],ce[1],B):x(ce[0],ce[1])):I?x(ce,B):x(ce)};if(w)D=m.iterator;else if(A)D=m;else{if(P=c(m),!P)throw new v(n(m)+" is not iterable");if(i(P)){for(E=0,T=a(m);T>E;E++)if(q=Z(m[E]),q&&o(y,q))return q;return new p(!1)}D=u(m,P)}for(C=w?m.next:D.next;!(j=r(C,D)).done;){try{q=Z(j.value)}catch(ce){f(D,"throw",ce)}if(typeof q=="object"&&q&&o(y,q))return q}return new p(!1)},Il}var Rl,eb;function a1(){if(eb)return Rl;eb=1;var e=Re(),r=TypeError;return Rl=function(t,n){if(e(n,t))return t;throw new r("Incorrect invocation")},Rl}var Tl,rb;function o1(){if(rb)return Tl;rb=1;var e=U(),r=he(),t=t1(),n=ne(),i=En(),a=dv(),o=a1(),u=Ie(),c=Le(),f=hi(),v=jt(),p=nr().f,y=Tn().forEach,m=ye(),g=wi(),_=g.set,O=g.getterFor;return Tl=function(R,w,A){var I=R.indexOf("Map")!==-1,x=R.indexOf("Weak")!==-1,D=I?"set":"add",P=r[R],E=P&&P.prototype,T={},q;if(!m||!u(P)||!(x||E.forEach&&!n(function(){new P().entries().next()})))q=A.getConstructor(w,R,I,D),t.enable();else{q=w(function(B,Z){_(o(B,C),{type:R,collection:new P}),f(Z)||a(Z,B[D],{that:B,AS_ENTRIES:I})});var C=q.prototype,j=O(R);y(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(B){var Z=B==="add"||B==="set";B in E&&!(x&&B==="clear")&&i(C,B,function(ce,ar){var me=j(this).collection;if(!Z&&x&&!c(ce))return B==="get"?void 0:!1;var je=me[B](ce===0?0:ce,ar);return Z?this:je})}),x||p(C,"size",{configurable:!0,get:function(){return j(this).collection.size}})}return v(q,R,!1,!0),T[R]=q,e({global:!0,forced:!0},T),x||A.setStrong(q,R,I),q},Tl}var Ol,tb;function _T(){if(tb)return Ol;tb=1;var e=Si();return Ol=function(r,t,n){for(var i in t)n&&n.unsafe&&r[i]?r[i]=t[i]:e(r,i,t[i],n);return r},Ol}var xl,nb;function ST(){if(nb)return xl;nb=1;var e=Ze(),r=rv(),t=Oe(),n=ye(),i=t("species");return xl=function(a){var o=e(a);n&&o&&!o[i]&&r(o,i,{configurable:!0,get:function(){return this}})},xl}var ql,ib;function s1(){if(ib)return ql;ib=1;var e=_i(),r=rv(),t=_T(),n=oa(),i=a1(),a=hi(),o=dv(),u=tv(),c=nv(),f=ST(),v=ye(),p=t1().fastKey,y=wi(),m=y.set,g=y.getterFor;return ql={getConstructor:function(_,O,R,w){var A=_(function(E,T){i(E,I),m(E,{type:O,index:e(null),first:null,last:null,size:0}),v||(E.size=0),a(T)||o(T,E[w],{that:E,AS_ENTRIES:R})}),I=A.prototype,x=g(O),D=function(E,T,q){var C=x(E),j=P(E,T),B,Z;return j?j.value=q:(C.last=j={index:Z=p(T,!0),key:T,value:q,previous:B=C.last,next:null,removed:!1},C.first||(C.first=j),B&&(B.next=j),v?C.size++:E.size++,Z!=="F"&&(C.index[Z]=j)),E},P=function(E,T){var q=x(E),C=p(T),j;if(C!=="F")return q.index[C];for(j=q.first;j;j=j.next)if(j.key===T)return j};return t(I,{clear:function(){for(var T=this,q=x(T),C=q.first;C;)C.removed=!0,C.previous&&(C.previous=C.previous.next=null),C=C.next;q.first=q.last=null,q.index=e(null),v?q.size=0:T.size=0},delete:function(E){var T=this,q=x(T),C=P(T,E);if(C){var j=C.next,B=C.previous;delete q.index[C.index],C.removed=!0,B&&(B.next=j),j&&(j.previous=B),q.first===C&&(q.first=j),q.last===C&&(q.last=B),v?q.size--:T.size--}return!!C},forEach:function(T){for(var q=x(this),C=n(T,arguments.length>1?arguments[1]:void 0),j;j=j?j.next:q.first;)for(C(j.value,j.key,this);j&&j.removed;)j=j.previous},has:function(T){return!!P(this,T)}}),t(I,R?{get:function(T){var q=P(this,T);return q&&q.value},set:function(T,q){return D(this,T===0?0:T,q)}}:{add:function(T){return D(this,T=T===0?0:T,T)}}),v&&r(I,"size",{configurable:!0,get:function(){return x(this).size}}),A},setStrong:function(_,O,R){var w=O+" Iterator",A=g(O),I=g(w);u(_,O,function(x,D){m(this,{type:w,target:x,state:A(x),kind:D,last:null})},function(){for(var x=I(this),D=x.kind,P=x.last;P&&P.removed;)P=P.previous;return!x.target||!(x.last=P=P?P.next:x.state.first)?(x.target=null,c(void 0,!0)):c(D==="keys"?P.key:D==="values"?P.value:[P.key,P.value],!1)},R?"entries":"values",!R,!0),f(O)}},ql}var ab;function wT(){if(ab)return Gg;ab=1;var e=o1(),r=s1();return e("Map",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},r),Gg}var ob;function ET(){return ob||(ob=1,wT()),zg}var sb={},Pl,ub;function u1(){return ub||(ub=1,Pl=function(e,r){return r===1?function(t,n){return t[e](n)}:function(t,n,i){return t[e](n,i)}}),Pl}var Al,cb;function IT(){if(cb)return Al;cb=1;var e=Ze(),r=u1(),t=e("Map");return Al={Map:t,set:r("set",2),get:r("get",1),has:r("has",1),remove:r("delete",1),proto:t.prototype},Al}var lb;function RT(){if(lb)return sb;lb=1;var e=U(),r=se(),t=Kr(),n=Nt(),i=dv(),a=IT(),o=Sn(),u=ne(),c=a.Map,f=a.has,v=a.get,p=a.set,y=r([].push),m=o||u(function(){return c.groupBy("ab",function(g){return g}).get("a").length!==1});return e({target:"Map",stat:!0,forced:o||m},{groupBy:function(_,O){n(_),t(O);var R=new c,w=0;return i(_,function(A){var I=O(A,w++);f(R,I)?y(v(R,I),A):p(R,I,[A])}),R}}),sb}var Dl,fb;function TT(){if(fb)return Dl;fb=1,st(),ET(),RT(),da();var e=we();return Dl=e.Map,Dl}var Ml,vb;function OT(){if(vb)return Ml;vb=1;var e=TT();return ut(),Ml=e,Ml}var Cl,db;function xT(){return db||(db=1,Cl=OT()),Cl}var qT=xT(),c1=Y(qT),pb={},hb;function PT(){if(hb)return pb;hb=1;var e=U(),r=Tn().some,t=pa(),n=t("some");return e({target:"Array",proto:!0,forced:!n},{some:function(a){return r(this,a,arguments.length>1?arguments[1]:void 0)}}),pb}var $l,yb;function AT(){if(yb)return $l;yb=1,PT();var e=Ye();return $l=e("Array","some"),$l}var Nl,mb;function DT(){if(mb)return Nl;mb=1;var e=Re(),r=AT(),t=Array.prototype;return Nl=function(n){var i=n.some;return n===t||e(t,n)&&i===t.some?r:i},Nl}var Ll,gb;function MT(){if(gb)return Ll;gb=1;var e=DT();return Ll=e,Ll}var jl,bb;function CT(){return bb||(bb=1,jl=MT()),jl}var $T=CT(),NT=Y($T),Fl,_b;function LT(){if(_b)return Fl;_b=1,st();var e=Ye();return Fl=e("Array","keys"),Fl}var kl,Sb;function jT(){if(Sb)return kl;Sb=1;var e=LT();return kl=e,kl}var Bl,wb;function FT(){if(wb)return Bl;wb=1,ut();var e=at(),r=Te(),t=Re(),n=jT(),i=Array.prototype,a={DOMTokenList:!0,NodeList:!0};return Bl=function(o){var u=o.keys;return o===i||t(i,o)&&u===i.keys||r(a,e(o))?n:u},Bl}var Ul,Eb;function kT(){return Eb||(Eb=1,Ul=FT()),Ul}var BT=kT(),on=Y(BT),Ib={},zl,Rb;function UT(){if(Rb)return zl;Rb=1;var e=Rn(),r=Math.floor,t=function(n,i){var a=n.length;if(a<8)for(var o=1,u,c;o<a;){for(c=o,u=n[o];c&&i(n[c-1],u)>0;)n[c]=n[--c];c!==o++&&(n[c]=u)}else for(var f=r(a/2),v=t(e(n,0,f),i),p=t(e(n,f),i),y=v.length,m=p.length,g=0,_=0;g<y||_<m;)n[g+_]=g<y&&_<m?i(v[g],p[_])<=0?v[g++]:p[_++]:g<y?v[g++]:p[_++];return n};return zl=t,zl}var Gl,Tb;function zT(){if(Tb)return Gl;Tb=1;var e=gn(),r=e.match(/firefox\/(\d+)/i);return Gl=!!r&&+r[1],Gl}var Wl,Ob;function GT(){if(Ob)return Wl;Ob=1;var e=gn();return Wl=/MSIE|Trident/.test(e),Wl}var Kl,xb;function WT(){if(xb)return Kl;xb=1;var e=gn(),r=e.match(/AppleWebKit\/(\d+)\./);return Kl=!!r&&+r[1],Kl}var qb;function KT(){if(qb)return Ib;qb=1;var e=U(),r=se(),t=Kr(),n=pr(),i=it(),a=RS(),o=ot(),u=ne(),c=UT(),f=pa(),v=zT(),p=GT(),y=yi(),m=WT(),g=[],_=r(g.sort),O=r(g.push),R=u(function(){g.sort(void 0)}),w=u(function(){g.sort(null)}),A=f("sort"),I=!u(function(){if(y)return y<70;if(!(v&&v>3)){if(p)return!0;if(m)return m<603;var P="",E,T,q,C;for(E=65;E<76;E++){switch(T=String.fromCharCode(E),E){case 66:case 69:case 70:case 72:q=3;break;case 68:case 71:q=4;break;default:q=2}for(C=0;C<47;C++)g.push({k:T+C,v:q})}for(g.sort(function(j,B){return B.v-j.v}),C=0;C<g.length;C++)T=g[C].k.charAt(0),P.charAt(P.length-1)!==T&&(P+=T);return P!=="DGBEFHACIJK"}}),x=R||!w||!A||!I,D=function(P){return function(E,T){return T===void 0?-1:E===void 0?1:P!==void 0?+P(E,T)||0:o(E)>o(T)?1:-1}};return e({target:"Array",proto:!0,forced:x},{sort:function(E){E!==void 0&&t(E);var T=n(this);if(I)return E===void 0?_(T):_(T,E);var q=[],C=i(T),j,B;for(B=0;B<C;B++)B in T&&O(q,T[B]);for(c(q,D(E)),j=i(q),B=0;B<j;)T[B]=q[B++];for(;B<C;)a(T,B++);return T}}),Ib}var Yl,Pb;function YT(){if(Pb)return Yl;Pb=1,KT();var e=Ye();return Yl=e("Array","sort"),Yl}var Hl,Ab;function HT(){if(Ab)return Hl;Ab=1;var e=Re(),r=YT(),t=Array.prototype;return Hl=function(n){var i=n.sort;return n===t||e(t,n)&&i===t.sort?r:i},Hl}var Vl,Db;function VT(){if(Db)return Vl;Db=1;var e=HT();return Vl=e,Vl}var Xl,Mb;function XT(){return Mb||(Mb=1,Xl=VT()),Xl}var ZT=XT(),kf=Y(ZT),Zl,Cb;function JT(){if(Cb)return Zl;Cb=1,st();var e=Ye();return Zl=e("Array","values"),Zl}var Jl,$b;function QT(){if($b)return Jl;$b=1;var e=JT();return Jl=e,Jl}var Ql,Nb;function e0(){if(Nb)return Ql;Nb=1,ut();var e=at(),r=Te(),t=Re(),n=QT(),i=Array.prototype,a={DOMTokenList:!0,NodeList:!0};return Ql=function(o){var u=o.values;return o===i||t(i,o)&&u===i.values||r(a,e(o))?n:u},Ql}var ef,Lb;function r0(){return Lb||(Lb=1,ef=e0()),ef}var t0=r0(),jb=Y(t0),rf,Fb;function n0(){return Fb||(Fb=1,rf=SS()),rf}var i0=n0(),ln=Y(i0),tf,kb;function a0(){if(kb)return tf;kb=1,st();var e=Ye();return tf=e("Array","entries"),tf}var nf,Bb;function o0(){if(Bb)return nf;Bb=1;var e=a0();return nf=e,nf}var af,Ub;function s0(){if(Ub)return af;Ub=1,ut();var e=at(),r=Te(),t=Re(),n=o0(),i=Array.prototype,a={DOMTokenList:!0,NodeList:!0};return af=function(o){var u=o.entries;return o===i||t(i,o)&&u===i.entries||r(a,e(o))?n:u},af}var of,zb;function u0(){return zb||(zb=1,of=s0()),of}var c0=u0(),l0=Y(c0);const qe=[];for(let e=0;e<256;++e)qe.push((e+256).toString(16).slice(1));function f0(e,r=0){return(qe[e[r+0]]+qe[e[r+1]]+qe[e[r+2]]+qe[e[r+3]]+"-"+qe[e[r+4]]+qe[e[r+5]]+"-"+qe[e[r+6]]+qe[e[r+7]]+"-"+qe[e[r+8]]+qe[e[r+9]]+"-"+qe[e[r+10]]+qe[e[r+11]]+qe[e[r+12]]+qe[e[r+13]]+qe[e[r+14]]+qe[e[r+15]]).toLowerCase()}let sf;const v0=new Uint8Array(16);function d0(){if(!sf){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");sf=crypto.getRandomValues.bind(crypto)}return sf(v0)}const p0=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var Gb={randomUUID:p0};function h0(e,r,t){var i;e=e||{};const n=e.random??((i=e.rng)==null?void 0:i.call(e))??d0();if(n.length<16)throw new Error("Random bytes length must be >= 16");return n[6]=n[6]&15|64,n[8]=n[8]&63|128,f0(n)}function y0(e,r,t){return Gb.randomUUID&&!e?Gb.randomUUID():h0(e)}function Wb(e){return typeof e=="string"||typeof e=="number"}class pv{constructor(r){tt(this,"_queue",[]),tt(this,"_timeout",null),tt(this,"_extended",null),this.delay=null,this.max=1/0,this.setOptions(r)}setOptions(r){r&&typeof r.delay<"u"&&(this.delay=r.delay),r&&typeof r.max<"u"&&(this.max=r.max),this._flushIfNeeded()}static extend(r,t){const n=new pv(t);if(r.flush!==void 0)throw new Error("Target object already has a property flush");r.flush=()=>{n.flush()};const i=[{name:"flush",original:void 0}];if(t&&t.replace)for(let a=0;a<t.replace.length;a++){const o=t.replace[a];i.push({name:o,original:r[o]}),n.replace(r,o)}return n._extended={object:r,methods:i},n}destroy(){if(this.flush(),this._extended){const r=this._extended.object,t=this._extended.methods;for(let n=0;n<t.length;n++){const i=t[n];i.original?r[i.name]=i.original:delete r[i.name]}this._extended=null}}replace(r,t){const n=this,i=r[t];if(!i)throw new Error("Method "+t+" undefined");r[t]=function(){for(var a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];n.queue({args:o,fn:i,context:this})}}queue(r){typeof r=="function"?this._queue.push({fn:r}):this._queue.push(r),this._flushIfNeeded()}_flushIfNeeded(){this._queue.length>this.max&&this.flush(),this._timeout!=null&&(clearTimeout(this._timeout),this._timeout=null),this.queue.length>0&&typeof this.delay=="number"&&(this._timeout=QI(()=>{this.flush()},this.delay))}flush(){var r,t;Zn(r=TS(t=this._queue).call(t,0)).call(r,n=>{n.fn.apply(n.context||n.fn,n.args||[])})}}class Xi{constructor(){tt(this,"_subscribers",{"*":[],add:[],remove:[],update:[]}),tt(this,"subscribe",Xi.prototype.on),tt(this,"unsubscribe",Xi.prototype.off)}_trigger(r,t,n){var i;if(r==="*")throw new Error("Cannot trigger event *");Zn(i=[...this._subscribers[r],...this._subscribers["*"]]).call(i,a=>{a(r,t,n??null)})}on(r,t){typeof t=="function"&&this._subscribers[r].push(t)}off(r,t){var n;this._subscribers[r]=sn(n=this._subscribers[r]).call(n,i=>i!==t)}}var Kb={},Yb={},Hb;function m0(){if(Hb)return Yb;Hb=1;var e=o1(),r=s1();return e("Set",function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}},r),Yb}var Vb;function g0(){return Vb||(Vb=1,m0()),Kb}var Xb={},uf,Zb;function kt(){if(Zb)return uf;Zb=1;var e=_n(),r=TypeError;return uf=function(t){if(typeof t=="object"&&"size"in t&&"has"in t&&"add"in t&&"delete"in t&&"keys"in t)return t;throw new r(e(t)+" is not a set")},uf}var cf,Jb;function Bt(){if(Jb)return cf;Jb=1;var e=Ze(),r=u1(),t=e("Set"),n=t.prototype;return cf={Set:t,add:r("add",1),has:r("has",1),remove:r("delete",1),proto:n},cf}var lf,Qb;function Ut(){if(Qb)return lf;Qb=1;var e=Ke();return lf=function(r,t,n){for(var i=n?r:r.iterator,a=r.next,o,u;!(o=e(a,i)).done;)if(u=t(o.value),u!==void 0)return u},lf}var ff,e_;function xi(){if(e_)return ff;e_=1;var e=Ut();return ff=function(r,t,n){return n?e(r.keys(),t,!0):r.forEach(t)},ff}var vf,r_;function hv(){if(r_)return vf;r_=1;var e=Bt(),r=xi(),t=e.Set,n=e.add;return vf=function(i){var a=new t;return r(i,function(o){n(a,o)}),a},vf}var df,t_;function qi(){return t_||(t_=1,df=function(e){return e.size}),df}var pf,n_;function b0(){return n_||(n_=1,pf=function(e){return{iterator:e,next:e.next,done:!1}}),pf}var hf,i_;function zt(){if(i_)return hf;i_=1;var e=Kr(),r=Yr(),t=Ke(),n=In(),i=b0(),a="Invalid size",o=RangeError,u=TypeError,c=Math.max,f=function(v,p){this.set=v,this.size=c(p,0),this.has=e(v.has),this.keys=e(v.keys)};return f.prototype={getIterator:function(){return i(r(t(this.keys,this.set)))},includes:function(v){return t(this.has,this.set,v)}},hf=function(v){r(v);var p=+v.size;if(p!==p)throw new u(a);var y=n(p);if(y<0)throw new o(a);return new f(v,y)},hf}var yf,a_;function _0(){if(a_)return yf;a_=1;var e=kt(),r=Bt(),t=hv(),n=qi(),i=zt(),a=xi(),o=Ut(),u=r.has,c=r.remove;return yf=function(v){var p=e(this),y=i(v),m=t(p);return n(p)<=y.size?a(p,function(g){y.includes(g)&&c(m,g)}):o(y.getIterator(),function(g){u(m,g)&&c(m,g)}),m},yf}var mf,o_;function Gt(){return o_||(o_=1,mf=function(){return!1}),mf}var s_;function S0(){if(s_)return Xb;s_=1;var e=U(),r=_0(),t=ne(),n=Gt(),i=!n("difference",function(o){return o.size===0}),a=i||t(function(){var o={size:1,has:function(){return!0},keys:function(){var c=0;return{next:function(){var f=c++>1;return u.has(1)&&u.clear(),{done:f,value:2}}}}},u=new Set([1,2,3,4]);return u.difference(o).size!==3});return e({target:"Set",proto:!0,real:!0,forced:a},{difference:r}),Xb}var u_={},gf,c_;function w0(){if(c_)return gf;c_=1;var e=kt(),r=Bt(),t=qi(),n=zt(),i=xi(),a=Ut(),o=r.Set,u=r.add,c=r.has;return gf=function(v){var p=e(this),y=n(v),m=new o;return t(p)>y.size?a(y.getIterator(),function(g){c(p,g)&&u(m,g)}):i(p,function(g){y.includes(g)&&u(m,g)}),m},gf}var l_;function E0(){if(l_)return u_;l_=1;var e=U(),r=ne(),t=w0(),n=Gt(),i=!n("intersection",function(a){return a.size===2&&a.has(1)&&a.has(2)})||r(function(){return String(Array.from(new Set([1,2,3]).intersection(new Set([3,2]))))!=="3,2"});return e({target:"Set",proto:!0,real:!0,forced:i},{intersection:t}),u_}var f_={},bf,v_;function I0(){if(v_)return bf;v_=1;var e=kt(),r=Bt().has,t=qi(),n=zt(),i=xi(),a=Ut(),o=vv();return bf=function(c){var f=e(this),v=n(c);if(t(f)<=v.size)return i(f,function(y){if(v.includes(y))return!1},!0)!==!1;var p=v.getIterator();return a(p,function(y){if(r(f,y))return o(p,"normal",!1)})!==!1},bf}var d_;function R0(){if(d_)return f_;d_=1;var e=U(),r=I0(),t=Gt(),n=!t("isDisjointFrom",function(i){return!i});return e({target:"Set",proto:!0,real:!0,forced:n},{isDisjointFrom:r}),f_}var p_={},_f,h_;function T0(){if(h_)return _f;h_=1;var e=kt(),r=qi(),t=xi(),n=zt();return _f=function(a){var o=e(this),u=n(a);return r(o)>u.size?!1:t(o,function(c){if(!u.includes(c))return!1},!0)!==!1},_f}var y_;function O0(){if(y_)return p_;y_=1;var e=U(),r=T0(),t=Gt(),n=!t("isSubsetOf",function(i){return i});return e({target:"Set",proto:!0,real:!0,forced:n},{isSubsetOf:r}),p_}var m_={},Sf,g_;function x0(){if(g_)return Sf;g_=1;var e=kt(),r=Bt().has,t=qi(),n=zt(),i=Ut(),a=vv();return Sf=function(u){var c=e(this),f=n(u);if(t(c)<f.size)return!1;var v=f.getIterator();return i(v,function(p){if(!r(c,p))return a(v,"normal",!1)})!==!1},Sf}var b_;function q0(){if(b_)return m_;b_=1;var e=U(),r=x0(),t=Gt(),n=!t("isSupersetOf",function(i){return!i});return e({target:"Set",proto:!0,real:!0,forced:n},{isSupersetOf:r}),m_}var __={},wf,S_;function P0(){if(S_)return wf;S_=1;var e=kt(),r=Bt(),t=hv(),n=zt(),i=Ut(),a=r.add,o=r.has,u=r.remove;return wf=function(f){var v=e(this),p=n(f).getIterator(),y=t(v);return i(p,function(m){o(v,m)?u(y,m):a(y,m)}),y},wf}var Ef,w_;function l1(){return w_||(w_=1,Ef=function(e){try{var r=new Set,t={size:0,has:function(){return!0},keys:function(){return Object.defineProperty({},"next",{get:function(){return r.clear(),r.add(4),function(){return{done:!0}}}})}},n=r[e](t);return n.size===1&&n.values().next().value===4}catch{return!1}}),Ef}var E_;function A0(){if(E_)return __;E_=1;var e=U(),r=P0(),t=l1(),n=Gt(),i=!n("symmetricDifference")||!t("symmetricDifference");return e({target:"Set",proto:!0,real:!0,forced:i},{symmetricDifference:r}),__}var I_={},If,R_;function D0(){if(R_)return If;R_=1;var e=kt(),r=Bt().add,t=hv(),n=zt(),i=Ut();return If=function(o){var u=e(this),c=n(o).getIterator(),f=t(u);return i(c,function(v){r(f,v)}),f},If}var T_;function M0(){if(T_)return I_;T_=1;var e=U(),r=D0(),t=l1(),n=Gt(),i=!n("union")||!t("union");return e({target:"Set",proto:!0,real:!0,forced:i},{union:r}),I_}var Rf,O_;function C0(){if(O_)return Rf;O_=1,st(),g0(),S0(),E0(),R0(),O0(),q0(),A0(),M0(),da();var e=we();return Rf=e.Set,Rf}var Tf,x_;function $0(){if(x_)return Tf;x_=1;var e=C0();return ut(),Tf=e,Tf}var Of,q_;function N0(){return q_||(q_=1,Of=$0()),Of}var L0=N0(),xf=Y(L0),qf,P_;function j0(){if(P_)return qf;P_=1,st(),da();var e=i1();return qf=e,qf}var Pf,A_;function F0(){if(A_)return Pf;A_=1;var e=j0();return ut(),Pf=e,Pf}var Af,D_;function k0(){if(D_)return Af;D_=1;var e=F0();return Af=e,Af}var Df,M_;function B0(){if(M_)return Df;M_=1;var e=k0();return Df=e,Df}var Mf,C_;function U0(){return C_||(C_=1,Mf=B0()),Mf}var Cf,$_;function z0(){return $_||($_=1,Cf=U0()),Cf}var G0=z0(),$f=Y(G0);class Et{constructor(r){this._pairs=r}*[ln](){for(const[r,t]of this._pairs)yield[r,t]}*entries(){for(const[r,t]of this._pairs)yield[r,t]}*keys(){for(const[r]of this._pairs)yield r}*values(){for(const[,r]of this._pairs)yield r}toIdArray(){var r;return Nr(r=[...this._pairs]).call(r,t=>t[0])}toItemArray(){var r;return Nr(r=[...this._pairs]).call(r,t=>t[1])}toEntryArray(){return[...this._pairs]}toObjectMap(){const r=NI(null);for(const[t,n]of this._pairs)r[t]=n;return r}toMap(){return new c1(this._pairs)}toIdSet(){return new xf(this.toIdArray())}toItemSet(){return new xf(this.toItemArray())}cache(){return new Et([...this._pairs])}distinct(r){const t=new xf;for(const[n,i]of this._pairs)t.add(r(i,n));return t}filter(r){const t=this._pairs;return new Et({*[ln](){for(const[n,i]of t)r(i,n)&&(yield[n,i])}})}forEach(r){for(const[t,n]of this._pairs)r(n,t)}map(r){const t=this._pairs;return new Et({*[ln](){for(const[n,i]of t)yield[n,r(i,n)]}})}max(r){const t=$f(this._pairs);let n=t.next();if(n.done)return null;let i=n.value[1],a=r(n.value[1],n.value[0]);for(;!(n=t.next()).done;){const[o,u]=n.value,c=r(u,o);c>a&&(a=c,i=u)}return i}min(r){const t=$f(this._pairs);let n=t.next();if(n.done)return null;let i=n.value[1],a=r(n.value[1],n.value[0]);for(;!(n=t.next()).done;){const[o,u]=n.value,c=r(u,o);c<a&&(a=c,i=u)}return i}reduce(r,t){for(const[n,i]of this._pairs)t=r(t,i,n);return t}sort(r){return new Et({[ln]:()=>{var t;return $f(kf(t=[...this._pairs]).call(t,(n,i)=>{let[a,o]=n,[u,c]=i;return r(o,c,a,u)}))}})}}function N_(e,r){var t=iv(e);if(Rg){var n=Rg(e);r&&(n=sn(n).call(n,function(i){return r1(e,i).enumerable})),t.push.apply(t,n)}return t}function L_(e){for(var r=1;r<arguments.length;r++){var t,n,i=arguments[r]!=null?arguments[r]:{};r%2?Zn(t=N_(Object(i),!0)).call(t,function(a){tt(e,a,i[a])}):Ng?vT(e,Ng(i)):Zn(n=N_(Object(i))).call(n,function(a){hT(e,a,r1(i,a))})}return e}function W0(e,r){return e[r]==null&&(e[r]=y0()),e}class Zi extends Xi{get idProp(){return this._idProp}constructor(r,t){super(),tt(this,"_queue",null),r&&!br(r)&&(t=r,r=[]),this._options=t||{},this._data=new c1,this.length=0,this._idProp=this._options.fieldId||"id",r&&r.length&&this.add(r),this.setOptions(t)}setOptions(r){r&&r.queue!==void 0&&(r.queue===!1?this._queue&&(this._queue.destroy(),this._queue=null):(this._queue||(this._queue=pv.extend(this,{replace:["add","update","remove"]})),r.queue&&typeof r.queue=="object"&&this._queue.setOptions(r.queue)))}add(r,t){const n=[];let i;if(br(r)){const a=Nr(r).call(r,o=>o[this._idProp]);if(NT(a).call(a,o=>this._data.has(o)))throw new Error("A duplicate id was found in the parameter array.");for(let o=0,u=r.length;o<u;o++)i=this._addItem(r[o]),n.push(i)}else if(r&&typeof r=="object")i=this._addItem(r),n.push(i);else throw new Error("Unknown dataType");return n.length&&this._trigger("add",{items:n},t),n}update(r,t){const n=[],i=[],a=[],o=[],u=this._idProp,c=f=>{const v=f[u];if(v!=null&&this._data.has(v)){const p=f,y=II({},this._data.get(v)),m=this._updateItem(p);i.push(m),o.push(p),a.push(y)}else{const p=this._addItem(f);n.push(p)}};if(br(r))for(let f=0,v=r.length;f<v;f++)r[f]&&typeof r[f]=="object"?c(r[f]):console.warn("Ignoring input item, which is not an object at index "+f);else if(r&&typeof r=="object")c(r);else throw new Error("Unknown dataType");if(n.length&&this._trigger("add",{items:n},t),i.length){const f={items:i,oldData:a,data:o};this._trigger("update",f,t)}return PI(n).call(n,i)}updateOnly(r,t){var n;br(r)||(r=[r]);const i=Nr(n=Nr(r).call(r,a=>{const o=this._data.get(a[this._idProp]);if(o==null)throw new Error("Updating non-existent items is not allowed.");return{oldData:o,update:a}})).call(n,a=>{let{oldData:o,update:u}=a;const c=o[this._idProp],f=zR(o,u);return this._data.set(c,f),{id:c,oldData:o,updatedData:f}});if(i.length){const a={items:Nr(i).call(i,o=>o.id),oldData:Nr(i).call(i,o=>o.oldData),data:Nr(i).call(i,o=>o.updatedData)};return this._trigger("update",a,t),a.items}else return[]}get(r,t){let n,i,a;Wb(r)?(n=r,a=t):br(r)?(i=r,a=t):a=r;const o=a&&a.returnType==="Object"?"Object":"Array",u=a&&sn(a),c=[];let f,v,p;if(n!=null)f=this._data.get(n),f&&u&&!u(f)&&(f=void 0);else if(i!=null)for(let m=0,g=i.length;m<g;m++)f=this._data.get(i[m]),f!=null&&(!u||u(f))&&c.push(f);else{var y;v=[...on(y=this._data).call(y)];for(let m=0,g=v.length;m<g;m++)p=v[m],f=this._data.get(p),f!=null&&(!u||u(f))&&c.push(f)}if(a&&a.order&&n==null&&this._sort(c,a.order),a&&a.fields){const m=a.fields;if(n!=null&&f!=null)f=this._filterFields(f,m);else for(let g=0,_=c.length;g<_;g++)c[g]=this._filterFields(c[g],m)}if(o=="Object"){const m={};for(let g=0,_=c.length;g<_;g++){const O=c[g],R=O[this._idProp];m[R]=O}return m}else return n!=null?f??null:c}getIds(r){const t=this._data,n=r&&sn(r),i=r&&r.order,a=[...on(t).call(t)],o=[];if(n)if(i){const u=[];for(let c=0,f=a.length;c<f;c++){const v=a[c],p=this._data.get(v);p!=null&&n(p)&&u.push(p)}this._sort(u,i);for(let c=0,f=u.length;c<f;c++)o.push(u[c][this._idProp])}else for(let u=0,c=a.length;u<c;u++){const f=a[u],v=this._data.get(f);v!=null&&n(v)&&o.push(v[this._idProp])}else if(i){const u=[];for(let c=0,f=a.length;c<f;c++){const v=a[c];u.push(t.get(v))}this._sort(u,i);for(let c=0,f=u.length;c<f;c++)o.push(u[c][this._idProp])}else for(let u=0,c=a.length;u<c;u++){const f=a[u],v=t.get(f);v!=null&&o.push(v[this._idProp])}return o}getDataSet(){return this}forEach(r,t){const n=t&&sn(t),i=this._data,a=[...on(i).call(i)];if(t&&t.order){const o=this.get(t);for(let u=0,c=o.length;u<c;u++){const f=o[u],v=f[this._idProp];r(f,v)}}else for(let o=0,u=a.length;o<u;o++){const c=a[o],f=this._data.get(c);f!=null&&(!n||n(f))&&r(f,c)}}map(r,t){const n=t&&sn(t),i=[],a=this._data,o=[...on(a).call(a)];for(let u=0,c=o.length;u<c;u++){const f=o[u],v=this._data.get(f);v!=null&&(!n||n(v))&&i.push(r(v,f))}return t&&t.order&&this._sort(i,t.order),i}_filterFields(r,t){var n;return r&&vE(n=br(t)?t:iv(t)).call(n,(i,a)=>(i[a]=r[a],i),{})}_sort(r,t){if(typeof t=="string"){const n=t;kf(r).call(r,(i,a)=>{const o=i[n],u=a[n];return o>u?1:o<u?-1:0})}else if(typeof t=="function")kf(r).call(r,t);else throw new TypeError("Order must be a function or a string")}remove(r,t){const n=[],i=[],a=br(r)?r:[r];for(let o=0,u=a.length;o<u;o++){const c=this._remove(a[o]);if(c){const f=c[this._idProp];f!=null&&(n.push(f),i.push(c))}}return n.length&&this._trigger("remove",{items:n,oldData:i},t),n}_remove(r){let t;if(Wb(r)?t=r:r&&typeof r=="object"&&(t=r[this._idProp]),t!=null&&this._data.has(t)){const n=this._data.get(t)||null;return this._data.delete(t),--this.length,n}return null}clear(r){var t;const n=[...on(t=this._data).call(t)],i=[];for(let a=0,o=n.length;a<o;a++)i.push(this._data.get(n[a]));return this._data.clear(),this.length=0,this._trigger("remove",{items:n,oldData:i},r),n}max(r){let t=null,n=null;for(const a of jb(i=this._data).call(i)){var i;const o=a[r];typeof o=="number"&&(n==null||o>n)&&(t=a,n=o)}return t||null}min(r){let t=null,n=null;for(const a of jb(i=this._data).call(i)){var i;const o=a[r];typeof o=="number"&&(n==null||o<n)&&(t=a,n=o)}return t||null}distinct(r){const t=this._data,n=[...on(t).call(t)],i=[];let a=0;for(let o=0,u=n.length;o<u;o++){const c=n[o],v=t.get(c)[r];let p=!1;for(let y=0;y<a;y++)if(i[y]==v){p=!0;break}!p&&v!==void 0&&(i[a]=v,a++)}return i}_addItem(r){const t=W0(r,this._idProp),n=t[this._idProp];if(this._data.has(n))throw new Error("Cannot add item: item with id "+n+" already exists");return this._data.set(n,t),++this.length,n}_updateItem(r){const t=r[this._idProp];if(t==null)throw new Error("Cannot update item: item has no id (item: "+WI(r)+")");const n=this._data.get(t);if(!n)throw new Error("Cannot update item: no item with id "+t+" found");return this._data.set(t,L_(L_({},n),r)),t}stream(r){if(r){const n=this._data;return new Et({*[ln](){for(const i of r){const a=n.get(i);a!=null&&(yield[i,a])}}})}else{var t;return new Et({[ln]:wS(t=l0(this._data)).call(t,this._data)})}}}const Ct="YYYY-MM-DD",K0={stack:!1,selectable:!0,zoomable:!0,moveable:!0,margin:{item:40,axis:20},showCurrentTime:!0,timeAxis:{scale:"day",step:5},showTooltips:!0,orientation:{axis:"top"}},Y0={minorLabels:{millisecond:"SSS",second:"s",minute:"HH:mm",hour:"HH:mm",weekday:"ddd D",day:"DD",week:"w",month:"MMM",year:"YYYY"},majorLabels:{millisecond:"HH:mm:ss",second:"D MMMM HH:mm",minute:"ddd D MMMM",hour:"ddd D MMMM",weekday:"MMM YYYY",day:"MMM YYYY",week:"MMM YYYY",month:"YYYY",year:""}};var Ji={exports:{}};Ji.exports;(function(e,r){var t=200,n="Expected a function",i="__lodash_hash_undefined__",a=1,o=2,u=1/0,c=9007199254740991,f=17976931348623157e292,v=NaN,p="[object Arguments]",y="[object Array]",m="[object Boolean]",g="[object Date]",_="[object Error]",O="[object Function]",R="[object GeneratorFunction]",w="[object Map]",A="[object Number]",I="[object Object]",x="[object Promise]",D="[object RegExp]",P="[object Set]",E="[object String]",T="[object Symbol]",q="[object WeakMap]",C="[object ArrayBuffer]",j="[object DataView]",B="[object Float32Array]",Z="[object Float64Array]",ce="[object Int8Array]",ar="[object Int16Array]",me="[object Int32Array]",je="[object Uint8Array]",Fe="[object Uint8ClampedArray]",or="[object Uint16Array]",ae="[object Uint32Array]",ke=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Be=/^\w*$/,De=/^\./,Rr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pe=/[\\^$.*+?()[\]{}|]/g,sr=/^\s+|\s+$/g,Tr=/\\(\\)?/g,qn=/^[-+]0x[0-9a-f]+$/i,Pn=/^0b[01]+$/i,ct=/^\[object .+?Constructor\]$/,Wt=/^0o[0-7]+$/i,ur=/^(?:0|[1-9]\d*)$/,k={};k[B]=k[Z]=k[ce]=k[ar]=k[me]=k[je]=k[Fe]=k[or]=k[ae]=!0,k[p]=k[y]=k[C]=k[m]=k[j]=k[g]=k[_]=k[O]=k[w]=k[A]=k[I]=k[D]=k[P]=k[E]=k[q]=!1;var An=parseInt,Hr=typeof et=="object"&&et&&et.Object===Object&&et,He=typeof self=="object"&&self&&self.Object===Object&&self,le=Hr||He||Function("return this")(),lt=r&&!r.nodeType&&r,Or=lt&&!0&&e&&!e.nodeType&&e,Kt=Or&&Or.exports===lt,xr=Kt&&Hr.process,qr=function(){try{return xr&&xr.binding("util")}catch{}}(),hr=qr&&qr.isTypedArray;function ft(l,h){for(var s=-1,d=l?l.length:0;++s<d;)if(h(l[s],s,l))return!0;return!1}function Dn(l,h,s,d){for(var b=l.length,S=s+-1;++S<b;)if(h(l[S],S,l))return S;return-1}function vt(l){return function(h){return h==null?void 0:h[l]}}function Yt(l,h){for(var s=-1,d=Array(l);++s<l;)d[s]=h(s);return d}function Ht(l){return function(h){return l(h)}}function Vt(l,h){return l==null?void 0:l[h]}function V(l){var h=!1;if(l!=null&&typeof l.toString!="function")try{h=!!(l+"")}catch{}return h}function z(l){var h=-1,s=Array(l.size);return l.forEach(function(d,b){s[++h]=[b,d]}),s}function G(l,h){return function(s){return l(h(s))}}function W(l){var h=-1,s=Array(l.size);return l.forEach(function(d){s[++h]=d}),s}var re=Array.prototype,Ee=Function.prototype,Je=Object.prototype,yr=le["__core-js_shared__"],Mn=function(){var l=/[^.]+$/.exec(yr&&yr.keys&&yr.keys.IE_PROTO||"");return l?"Symbol(src)_1."+l:""}(),Cn=Ee.toString,ge=Je.hasOwnProperty,Ve=Je.toString,ma=RegExp("^"+Cn.call(ge).replace(Pe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$n=le.Symbol,Nn=le.Uint8Array,ga=Je.propertyIsEnumerable,ba=re.splice,_a=G(Object.keys,Object),Sa=Math.max,dt=Vr(le,"DataView"),cr=Vr(le,"Map"),pt=Vr(le,"Promise"),ht=Vr(le,"Set"),yt=Vr(le,"WeakMap"),lr=Vr(Object,"create"),wa=Qe(dt),Ea=Qe(cr),Ia=Qe(pt),Ra=Qe(ht),Ta=Qe(yt),Pr=$n?$n.prototype:void 0,mt=Pr?Pr.valueOf:void 0,Ln=Pr?Pr.toString:void 0;function Me(l){var h=-1,s=l?l.length:0;for(this.clear();++h<s;){var d=l[h];this.set(d[0],d[1])}}function Oa(){this.__data__=lr?lr(null):{}}function xa(l){return this.has(l)&&delete this.__data__[l]}function qa(l){var h=this.__data__;if(lr){var s=h[l];return s===i?void 0:s}return ge.call(h,l)?h[l]:void 0}function Pa(l){var h=this.__data__;return lr?h[l]!==void 0:ge.call(h,l)}function Aa(l,h){var s=this.__data__;return s[l]=lr&&h===void 0?i:h,this}Me.prototype.clear=Oa,Me.prototype.delete=xa,Me.prototype.get=qa,Me.prototype.has=Pa,Me.prototype.set=Aa;function be(l){var h=-1,s=l?l.length:0;for(this.clear();++h<s;){var d=l[h];this.set(d[0],d[1])}}function Da(){this.__data__=[]}function Ma(l){var h=this.__data__,s=Dr(h,l);if(s<0)return!1;var d=h.length-1;return s==d?h.pop():ba.call(h,s,1),!0}function Ca(l){var h=this.__data__,s=Dr(h,l);return s<0?void 0:h[s][1]}function $a(l){return Dr(this.__data__,l)>-1}function Na(l,h){var s=this.__data__,d=Dr(s,l);return d<0?s.push([l,h]):s[d][1]=h,this}be.prototype.clear=Da,be.prototype.delete=Ma,be.prototype.get=Ca,be.prototype.has=$a,be.prototype.set=Na;function _e(l){var h=-1,s=l?l.length:0;for(this.clear();++h<s;){var d=l[h];this.set(d[0],d[1])}}function La(){this.__data__={hash:new Me,map:new(cr||be),string:new Me}}function ja(l){return Xt(this,l).delete(l)}function Fa(l){return Xt(this,l).get(l)}function ka(l){return Xt(this,l).has(l)}function Ba(l,h){return Xt(this,l).set(l,h),this}_e.prototype.clear=La,_e.prototype.delete=ja,_e.prototype.get=Fa,_e.prototype.has=ka,_e.prototype.set=Ba;function Ar(l){var h=-1,s=l?l.length:0;for(this.__data__=new _e;++h<s;)this.add(l[h])}function Ua(l){return this.__data__.set(l,i),this}function za(l){return this.__data__.has(l)}Ar.prototype.add=Ar.prototype.push=Ua,Ar.prototype.has=za;function Se(l){this.__data__=new be(l)}function Ga(){this.__data__=new be}function Wa(l){return this.__data__.delete(l)}function Ka(l){return this.__data__.get(l)}function Ya(l){return this.__data__.has(l)}function Ha(l,h){var s=this.__data__;if(s instanceof be){var d=s.__data__;if(!cr||d.length<t-1)return d.push([l,h]),this;s=this.__data__=new _e(d)}return s.set(l,h),this}Se.prototype.clear=Ga,Se.prototype.delete=Wa,Se.prototype.get=Ka,Se.prototype.has=Ya,Se.prototype.set=Ha;function Va(l,h){var s=gr(l)||en(l)?Yt(l.length,String):[],d=s.length,b=!!d;for(var S in l)ge.call(l,S)&&!(b&&(S=="length"||Mi(S,d)))&&s.push(S);return s}function Dr(l,h){for(var s=l.length;s--;)if(Ni(l[s][0],h))return s;return-1}function jn(l,h){h=bt(h,l)?[h]:Fn(h);for(var s=0,d=h.length;l!=null&&s<d;)l=l[Qt(h[s++])];return s&&s==d?l:void 0}function Xa(l){return Ve.call(l)}function Za(l,h){return l!=null&&h in Object(l)}function gt(l,h,s,d,b){return l===h?!0:l==null||h==null||!$r(l)&&!Xr(h)?l!==l&&h!==h:Ja(l,h,gt,s,d,b)}function Ja(l,h,s,d,b,S){var $=gr(l),L=gr(h),F=y,K=y;$||(F=Ce(l),F=F==p?I:F),L||(K=Ce(h),K=K==p?I:K);var H=F==I&&!V(l),J=K==I&&!V(h),ee=F==K;if(ee&&!H)return S||(S=new Se),$||tn(l)?Ai(l,h,s,d,b,S):Di(l,h,F,s,d,b,S);if(!(b&o)){var oe=H&&ge.call(l,"__wrapped__"),ie=J&&ge.call(h,"__wrapped__");if(oe||ie){var de=oe?l.value():l,ve=ie?h.value():h;return S||(S=new Se),s(de,ve,d,b,S)}}return ee?(S||(S=new Se),so(l,h,s,d,b,S)):!1}function Qa(l,h,s,d){var b=s.length,S=b;if(l==null)return!S;for(l=Object(l);b--;){var $=s[b];if($[2]?$[1]!==l[$[0]]:!($[0]in l))return!1}for(;++b<S;){$=s[b];var L=$[0],F=l[L],K=$[1];if($[2]){if(F===void 0&&!(L in l))return!1}else{var H=new Se,J;if(!(J===void 0?gt(K,F,d,a|o,H):J))return!1}}return!0}function eo(l){if(!$r(l)||uo(l))return!1;var h=rn(l)||V(l)?ma:ct;return h.test(Qe(l))}function ro(l){return Xr(l)&&zn(l.length)&&!!k[Ve.call(l)]}function Pi(l){return typeof l=="function"?l:l==null?yo:typeof l=="object"?gr(l)?io(l[0],l[1]):no(l):an(l)}function to(l){if(!co(l))return _a(l);var h=[];for(var s in Object(l))ge.call(l,s)&&s!="constructor"&&h.push(s);return h}function no(l){var h=Zt(l);return h.length==1&&h[0][2]?kn(h[0][0],h[0][1]):function(s){return s===l||Qa(s,l,h)}}function io(l,h){return bt(l)&&Ci(h)?kn(Qt(l),h):function(s){var d=po(s,l);return d===void 0&&d===h?ho(s,l):gt(h,d,void 0,a|o)}}function ao(l){return function(h){return jn(h,l)}}function oo(l){if(typeof l=="string")return l;if(fr(l))return Ln?Ln.call(l):"";var h=l+"";return h=="0"&&1/l==-u?"-0":h}function Fn(l){return gr(l)?l:$i(l)}function Ai(l,h,s,d,b,S){var $=b&o,L=l.length,F=h.length;if(L!=F&&!($&&F>L))return!1;var K=S.get(l);if(K&&S.get(h))return K==h;var H=-1,J=!0,ee=b&a?new Ar:void 0;for(S.set(l,h),S.set(h,l);++H<L;){var oe=l[H],ie=h[H];if(d)var de=$?d(ie,oe,H,h,l,S):d(oe,ie,H,l,h,S);if(de!==void 0){if(de)continue;J=!1;break}if(ee){if(!ft(h,function(ve,Ae){if(!ee.has(Ae)&&(oe===ve||s(oe,ve,d,b,S)))return ee.add(Ae)})){J=!1;break}}else if(!(oe===ie||s(oe,ie,d,b,S))){J=!1;break}}return S.delete(l),S.delete(h),J}function Di(l,h,s,d,b,S,$){switch(s){case j:if(l.byteLength!=h.byteLength||l.byteOffset!=h.byteOffset)return!1;l=l.buffer,h=h.buffer;case C:return!(l.byteLength!=h.byteLength||!d(new Nn(l),new Nn(h)));case m:case g:case A:return Ni(+l,+h);case _:return l.name==h.name&&l.message==h.message;case D:case E:return l==h+"";case w:var L=z;case P:var F=S&o;if(L||(L=W),l.size!=h.size&&!F)return!1;var K=$.get(l);if(K)return K==h;S|=a,$.set(l,h);var H=Ai(L(l),L(h),d,b,S,$);return $.delete(l),H;case T:if(mt)return mt.call(l)==mt.call(h)}return!1}function so(l,h,s,d,b,S){var $=b&o,L=Gn(l),F=L.length,K=Gn(h),H=K.length;if(F!=H&&!$)return!1;for(var J=F;J--;){var ee=L[J];if(!($?ee in h:ge.call(h,ee)))return!1}var oe=S.get(l);if(oe&&S.get(h))return oe==h;var ie=!0;S.set(l,h),S.set(h,l);for(var de=$;++J<F;){ee=L[J];var ve=l[ee],Ae=h[ee];if(d)var er=$?d(Ae,ve,ee,h,l,S):d(ve,Ae,ee,l,h,S);if(!(er===void 0?ve===Ae||s(ve,Ae,d,b,S):er)){ie=!1;break}de||(de=ee=="constructor")}if(ie&&!de){var rr=l.constructor,_t=h.constructor;rr!=_t&&"constructor"in l&&"constructor"in h&&!(typeof rr=="function"&&rr instanceof rr&&typeof _t=="function"&&_t instanceof _t)&&(ie=!1)}return S.delete(l),S.delete(h),ie}function Xt(l,h){var s=l.__data__;return Jt(h)?s[typeof h=="string"?"string":"hash"]:s.map}function Zt(l){for(var h=Gn(l),s=h.length;s--;){var d=h[s],b=l[d];h[s]=[d,b,Ci(b)]}return h}function Vr(l,h){var s=Vt(l,h);return eo(s)?s:void 0}var Ce=Xa;(dt&&Ce(new dt(new ArrayBuffer(1)))!=j||cr&&Ce(new cr)!=w||pt&&Ce(pt.resolve())!=x||ht&&Ce(new ht)!=P||yt&&Ce(new yt)!=q)&&(Ce=function(l){var h=Ve.call(l),s=h==I?l.constructor:void 0,d=s?Qe(s):void 0;if(d)switch(d){case wa:return j;case Ea:return w;case Ia:return x;case Ra:return P;case Ta:return q}return h});function mr(l,h,s){h=bt(h,l)?[h]:Fn(h);for(var d,b=-1,$=h.length;++b<$;){var S=Qt(h[b]);if(!(d=l!=null&&s(l,S)))break;l=l[S]}if(d)return d;var $=l?l.length:0;return!!$&&zn($)&&Mi(S,$)&&(gr(l)||en(l))}function Mi(l,h){return h=h??c,!!h&&(typeof l=="number"||ur.test(l))&&l>-1&&l%1==0&&l<h}function bt(l,h){if(gr(l))return!1;var s=typeof l;return s=="number"||s=="symbol"||s=="boolean"||l==null||fr(l)?!0:Be.test(l)||!ke.test(l)||h!=null&&l in Object(h)}function Jt(l){var h=typeof l;return h=="string"||h=="number"||h=="symbol"||h=="boolean"?l!=="__proto__":l===null}function uo(l){return!!Mn&&Mn in l}function co(l){var h=l&&l.constructor,s=typeof h=="function"&&h.prototype||Je;return l===s}function Ci(l){return l===l&&!$r(l)}function kn(l,h){return function(s){return s==null?!1:s[l]===h&&(h!==void 0||l in Object(s))}}var $i=Bn(function(l){l=vo(l);var h=[];return De.test(l)&&h.push(""),l.replace(Rr,function(s,d,b,S){h.push(b?S.replace(Tr,"$1"):d||s)}),h});function Qt(l){if(typeof l=="string"||fr(l))return l;var h=l+"";return h=="0"&&1/l==-u?"-0":h}function Qe(l){if(l!=null){try{return Cn.call(l)}catch{}try{return l+""}catch{}}return""}function Mr(l,h,s){var d=l?l.length:0;if(!d)return-1;var b=s==null?0:lo(s);return b<0&&(b=Sa(d+b,0)),Dn(l,Pi(h),b)}function Bn(l,h){if(typeof l!="function"||h&&typeof h!="function")throw new TypeError(n);var s=function(){var d=arguments,b=h?h.apply(this,d):d[0],S=s.cache;if(S.has(b))return S.get(b);var $=l.apply(this,d);return s.cache=S.set(b,$),$};return s.cache=new(Bn.Cache||_e),s}Bn.Cache=_e;function Ni(l,h){return l===h||l!==l&&h!==h}function en(l){return Cr(l)&&ge.call(l,"callee")&&(!ga.call(l,"callee")||Ve.call(l)==p)}var gr=Array.isArray;function Un(l){return l!=null&&zn(l.length)&&!rn(l)}function Cr(l){return Xr(l)&&Un(l)}function rn(l){var h=$r(l)?Ve.call(l):"";return h==O||h==R}function zn(l){return typeof l=="number"&&l>-1&&l%1==0&&l<=c}function $r(l){var h=typeof l;return!!l&&(h=="object"||h=="function")}function Xr(l){return!!l&&typeof l=="object"}function fr(l){return typeof l=="symbol"||Xr(l)&&Ve.call(l)==T}var tn=hr?Ht(hr):ro;function nn(l){if(!l)return l===0?l:0;if(l=fo(l),l===u||l===-u){var h=l<0?-1:1;return h*f}return l===l?l:0}function lo(l){var h=nn(l),s=h%1;return h===h?s?h-s:h:0}function fo(l){if(typeof l=="number")return l;if(fr(l))return v;if($r(l)){var h=typeof l.valueOf=="function"?l.valueOf():l;l=$r(h)?h+"":h}if(typeof l!="string")return l===0?l:+l;l=l.replace(sr,"");var s=Pn.test(l);return s||Wt.test(l)?An(l.slice(2),s?2:8):qn.test(l)?v:+l}function vo(l){return l==null?"":oo(l)}function po(l,h,s){var d=l==null?void 0:jn(l,h);return d===void 0?s:d}function ho(l,h){return l!=null&&mr(l,h,Za)}function Gn(l){return Un(l)?Va(l):to(l)}function yo(l){return l}function an(l){return bt(l)?vt(Qt(l)):ao(l)}e.exports=Mr})(Ji,Ji.exports);var H0=Ji.exports;const V0=H_(H0);N.extend(wr);N.extend(Er);var ni,Lr,dr,Bf,Uf,zf;class X0 extends mn{constructor(){super();Q(this,dr);Q(this,ni,!1);Q(this,Lr,null);this.format=Ct,this.navigation=!1,this.unstyled=!1}static get properties(){return{format:{type:String,attribute:"format"},navigation:{type:Boolean,attribute:"navigation"},unstyled:{type:Boolean,attribute:"unstyled"}}}getEOxTimeControl(){return this.closest("eox-timecontrol")}updateStep(t=1){const n=this.getEOxTimeControl();let i,a,o;const u=Ue(this,dr,Bf).call(this,"utc");if(a=u.index,o=u.itemValues,a>=0)i=Ue(this,dr,Uf).call(this,o,t,a);else{const p=Ue(this,dr,Bf).call(this,"date");a=p.index,o=p.itemValues,i=Ue(this,dr,Uf).call(this,o,t,a)}const c=o[i],v=[N(c).isSame(n.selectedDateRange[0],"day")?N(c).utc().format():N(c).startOf("day").utc().format(),N(c).endOf("day").utc().format()];n.dateChange(v,n)}setDateRange(t){X(this,Lr,t),this.requestUpdate()}firstUpdated(){const n=this.getEOxTimeControl().querySelector("eox-timecontrol-picker");n&&n.popup&&(X(this,ni,!0),this.requestUpdate())}render(){return ue`
      <style>
        ${Pt}
        ${!this.unstyled&&dn}
      </style>
      ${rt(this.navigation&&M(this,Lr),()=>ue`
          <button
            part="previous"
            class="icon previous small circle transparent no-margin"
            @click=${()=>this.updateStep(-1)}
          >
            ${this.unstyled?"<":ue`
                  <i class="primary-text small">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>chevron-left-circle</title>
                      <path
                        d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z"
                      />
                    </svg>
                  </i>
                `}
          </button>
        `)}
      <span id="date-container">
        ${rt(M(this,Lr),()=>ue`
            <input
              readonly
              class=${M(this,ni)?"input-field":""}
              value=${Ue(this,dr,zf).call(this,M(this,Lr),this.format)}
              type="text"
              style="width: ${Ue(this,dr,zf).call(this,M(this,Lr),this.format).length+1}ch"
            />
          `)}
      </span>
      ${rt(this.navigation&&M(this,Lr),()=>ue`
          <button
            part="next"
            class="icon next small circle transparent no-margin"
            @click=${()=>this.updateStep(1)}
          >
            ${this.unstyled?">":ue`
                  <i class="primary-text small">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>chevron-right-circle</title>
                      <path
                        d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,18L16,12L10,6L8.6,7.4L13.2,12L8.6,16.6L10,18Z"
                      />
                    </svg>
                  </i>
                `}
          </button>
        `)}
    `}}ni=new WeakMap,Lr=new WeakMap,dr=new WeakSet,Bf=function(t){const n=this.getEOxTimeControl(),i=Object.keys(kr(n.items.get(),t)).sort((o,u)=>new Date(o).getTime()-new Date(u).getTime());return{index:V0(i,o=>t==="utc"?N(o).isSame(n.selectedDateRange[0]):o===N(n.selectedDateRange[0]).format(Ct)),itemValues:i}},Uf=function(t,n,i){let a=i+n;return a>t.length-1&&(a=0),a<0&&(a=t.length-1),a},zf=function(t,n){const i=N(t[0]),a=N(t[1]);return a.diff(i,"day")===0?i.format(n):i.format(n)+" - "+a.format(n)};customElements.define("eox-timecontrol-date",X0);function f1(e,r,t){const n=e.visTimeline,i=n.dom.leftContainer.querySelectorAll(".vis-label")[t],a=n.dom.centerContainer.querySelectorAll(".vis-foreground .vis-group")[t];r?(i.classList.remove("vis-label-hide"),a.classList.remove("vis-group-hide")):(i.classList.add("vis-label-hide"),a.classList.add("vis-group-hide"))}function Z0(e,r,t,n){var i,a;r.clear(),t.clear();for(let o=0;o<e.length;o++){const u=e[o],c=f=>{if(n){const v=f.target.getVisible();f1(n,v,o)}};(i=u.layerInstance)==null||i.un("change:visible",c),(a=u.layerInstance)==null||a.on("change:visible",c),r.add({id:u.layer,content:u.name});for(const f of u.values){const v={data:u.layer+f.date},p=b1(v);t.add({...f,id:p,group:u.layer,className:`milestone item-${p}`,start:f.date,originalDate:f.originalDate,type:"point",property:u.property})}}}N.extend(wr);N.extend(Er);function J0(e,r,t){t.selectedDateRange=e,tO(t,["eox-timecontrol-date","eox-timecontrol-picker","eox-timecontrol-slider","eox-timecontrol-timeline","eox-timecontrol-timelapse"],e,t.items.get());const n=N(e[0]);if(Number.isNaN(n.unix()))return;const i=r?r.getFlatLayersArray(r.map.getLayers().getArray()):[];let a=[];const o=[N(e[0]),N(e[1])],[u,c]=o[0].isBefore(o[1])?[o[0],o[1]]:[o[1],o[0]];a=t.items.get().filter(p=>{const y=p.utc;if(!y)return!1;const m=N(y);return(m.isSame(u,"day")||m.isAfter(u,"day"))&&(m.isSame(c,"day")||m.isBefore(c,"day"))});let f={};a.forEach(p=>{if(p.group&&r){const y=i.find(g=>g.get("id")===p.group),m=y!=null&&y.getLayers?null:y==null?void 0:y.getSource();f={...f,[p.group]:{layer:y,source:m||null}},t.externalMapRendering||m.updateParams({[p.property]:p.originalDate})}});const v=t.renderRoot.querySelector("#timecontrol-filter");t.dispatchEvent(new CustomEvent("select",{detail:{selectedItems:kr(a,"group"),date:[N(e[0]).utc().toDate(),N(e[1]).utc().toDate()],filters:(v==null?void 0:v.filters)||[],instances:f}})),t.requestUpdate()}const v1=`
  ${_1}
  :root, :host, body {
    --dot-color-1: var(--primary);
    --dot-color-2: #F5365C;
    --dot-color-3: #43CC8B;
    --dot-color-4: #FFBE4F;
    --dot-color-5: #00F6FF;
    --dot-color-6: #FF4AB1;
    --dot-color-7: #FFE600;
    --dot-color-8: #36FF72;
    --dot-color-9: #00F0FF;
    --dot-color-10: #FF6B00;
    --dot-color-11: #E100FF;
  }
  .vc {
    z-index: 9999;
  }
  .vc * {
    font-family: var(--eox-body-font-family);
  }
  .vc-day__dots {
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4px;
    pointer-events: none;
  }
  .vc-day__dot {
    width: 4px;
    height: 4px;
    border-radius: 9999px;
    opacity: 0.9;
  }
  .vc-day__plus {
    width: 6px;
    height: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .vc-day__plus::before, .vc-day__plus::after {
    content: "";
    position: absolute;
    background: var(--primary);
    border-radius: 1px;
  }
  .vc-day__plus::before {
    width: 1.5px;
    height: 6px;
    background: var(--primary);
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .vc-day__plus::after {
    height: 1.5px;
    width: 6px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  .vc-date[data-vc-date-selected] .vc-day__dot,
  .vc-date[data-vc-date-selected] .vc-day__plus::after,
  .vc-date[data-vc-date-selected] .vc-day__plus::before {
    background: var(--on-primary) !important;
  }
  [data-vc-theme=light] .vc-date.vc-data-available .vc-date__btn {
    --tw-bg-opacity: 1;
    background-color: rgb(241 245 249 / var(--tw-bg-opacity));
  }
  [data-vc-theme=dark] .vc-date.vc-data-available .vc-date__btn {
    --tw-bg-opacity: 1;
    background-color: rgb(30 41 59 / var(--tw-bg-opacity));
  }
  [data-vc-theme=light] .vc-date.vc-data-unavailable .vc-date__btn {
    --tw-bg-opacity: 0;
    background-color: rgb(241 245 249 / var(--tw-bg-opacity));
    border: 3px solid rgb(241 245 249);
  }
  [data-vc-theme=dark] .vc-date.vc-data-unavailable .vc-date__btn {
    --tw-bg-opacity: 0;
    background-color: rgb(30 41 59 / var(--tw-bg-opacity));
    border: 3px solid rgb(30 41 59);
  }
  .vc-date[data-vc-date-selected] .vc-date__btn {
    background-color: var(--primary) !important;
    border: none !important;
  }
  .vc-date.vc-data-available:hover .vc-date__popup {
    opacity: 1 !important;
  }
  .vc-item-popup {
    padding: 8px;
    // max-width: 300px;
    background-color: #fff;
    border-radius: 4px;
  }
  .v-date_popup {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  [data-vc-theme=dark] .vc-item-popup {
    background-color: #1e293b;
    color: #fff;
  }
  .vc-date__popup {
    max-width: 300px !important;
    left: 0px !important;
    padding: 0.5rem !important;
  }
  .vc-item-popup__item {
    margin-bottom: 12px;
  }
  .vc-item-popup__item:last-of-type {
    margin-bottom: 0;
  }
  .vc-item-popup__item-content {
    display: flex;
    align-items: flex-start;
    margin-bottom: 4px;
  }
  .vc-item-popup__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--primary-color, var(--primary, #007bff));
    margin-right: 8px;
    margin-top: 4px;
    flex-shrink: 0;
  }
  .vc-item-popup__text-container {
    flex: 1;
  }
  .vc-item-popup__id {
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .vc-item-popup__meta {
    margin-top: 2px;
    color: #333;
    font-size: 0.9em;
  }
  [data-vc-theme=dark] .vc-item-popup__meta {
    color: #cbd5e1;
  }
  .vc-item-popup__more {
    margin-top: 4px;
    color: #999;
    font-size: 0.9em;
  }
  [data-vc-theme=dark] .vc-item-popup__more {
    color: #94a3b8;
  }
`;function Q0(){if(document.querySelector("#vanilla-calendar-styles"))return;const e=document.createElement("style");e.id="vanilla-calendar-styles",e.textContent=v1,document.head.appendChild(e)}function eO(){if(document.querySelectorAll("eox-timeslider").length<=1){const t=document.querySelector("#vanilla-calendar-styles");t&&t.remove()}document.querySelectorAll(".vc").forEach(t=>t.remove())}function rO(e){var r;return e.getAttribute("data-calendar-date")||((r=e.dataset)==null?void 0:r.calendarDate)||Object.values(e.dataset||{}).find(t=>/^\d{4}-\d{2}-\d{2}$/.test(t))||null}function tO(e,r,t,n){r.forEach(i=>{const a=e.querySelector(i);a&&a.setDateRange(t,n)})}var te;(function(e){e.LOAD="LOAD",e.EXEC="EXEC",e.FFPROBE="FFPROBE",e.WRITE_FILE="WRITE_FILE",e.READ_FILE="READ_FILE",e.DELETE_FILE="DELETE_FILE",e.RENAME="RENAME",e.CREATE_DIR="CREATE_DIR",e.LIST_DIR="LIST_DIR",e.DELETE_DIR="DELETE_DIR",e.ERROR="ERROR",e.DOWNLOAD="DOWNLOAD",e.PROGRESS="PROGRESS",e.LOG="LOG",e.MOUNT="MOUNT",e.UNMOUNT="UNMOUNT"})(te||(te={}));const nO=(()=>{let e=0;return()=>e++})(),iO=new Error("ffmpeg is not loaded, call `await ffmpeg.load()` first"),aO=new Error("called FFmpeg.terminate()");var Xe,Zr,jr,It,Rt,ea,$e;class oO{constructor(){Q(this,Xe,null);Q(this,Zr,{});Q(this,jr,{});Q(this,It,[]);Q(this,Rt,[]);xe(this,"loaded",!1);Q(this,ea,()=>{M(this,Xe)&&(M(this,Xe).onmessage=({data:{id:r,type:t,data:n}})=>{switch(t){case te.LOAD:this.loaded=!0,M(this,Zr)[r](n);break;case te.MOUNT:case te.UNMOUNT:case te.EXEC:case te.FFPROBE:case te.WRITE_FILE:case te.READ_FILE:case te.DELETE_FILE:case te.RENAME:case te.CREATE_DIR:case te.LIST_DIR:case te.DELETE_DIR:M(this,Zr)[r](n);break;case te.LOG:M(this,It).forEach(i=>i(n));break;case te.PROGRESS:M(this,Rt).forEach(i=>i(n));break;case te.ERROR:M(this,jr)[r](n);break}delete M(this,Zr)[r],delete M(this,jr)[r]})});Q(this,$e,({type:r,data:t},n=[],i)=>M(this,Xe)?new Promise((a,o)=>{const u=nO();M(this,Xe)&&M(this,Xe).postMessage({id:u,type:r,data:t},n),M(this,Zr)[u]=a,M(this,jr)[u]=o,i==null||i.addEventListener("abort",()=>{o(new DOMException(`Message # ${u} was aborted`,"AbortError"))},{once:!0})}):Promise.reject(iO));xe(this,"load",({classWorkerURL:r,...t}={},{signal:n}={})=>(M(this,Xe)||(X(this,Xe,r?new Worker(new URL(r,import.meta.url),{type:"module"}):new Worker(new URL("/pr-preview/pr-10/assets/worker-BAOIWoxA.js",import.meta.url),{type:"module"})),M(this,ea).call(this)),M(this,$e).call(this,{type:te.LOAD,data:t},void 0,n)));xe(this,"exec",(r,t=-1,{signal:n}={})=>M(this,$e).call(this,{type:te.EXEC,data:{args:r,timeout:t}},void 0,n));xe(this,"ffprobe",(r,t=-1,{signal:n}={})=>M(this,$e).call(this,{type:te.FFPROBE,data:{args:r,timeout:t}},void 0,n));xe(this,"terminate",()=>{const r=Object.keys(M(this,jr));for(const t of r)M(this,jr)[t](aO),delete M(this,jr)[t],delete M(this,Zr)[t];M(this,Xe)&&(M(this,Xe).terminate(),X(this,Xe,null),this.loaded=!1)});xe(this,"writeFile",(r,t,{signal:n}={})=>{const i=[];return t instanceof Uint8Array&&i.push(t.buffer),M(this,$e).call(this,{type:te.WRITE_FILE,data:{path:r,data:t}},i,n)});xe(this,"mount",(r,t,n)=>{const i=[];return M(this,$e).call(this,{type:te.MOUNT,data:{fsType:r,options:t,mountPoint:n}},i)});xe(this,"unmount",r=>{const t=[];return M(this,$e).call(this,{type:te.UNMOUNT,data:{mountPoint:r}},t)});xe(this,"readFile",(r,t="binary",{signal:n}={})=>M(this,$e).call(this,{type:te.READ_FILE,data:{path:r,encoding:t}},void 0,n));xe(this,"deleteFile",(r,{signal:t}={})=>M(this,$e).call(this,{type:te.DELETE_FILE,data:{path:r}},void 0,t));xe(this,"rename",(r,t,{signal:n}={})=>M(this,$e).call(this,{type:te.RENAME,data:{oldPath:r,newPath:t}},void 0,n));xe(this,"createDir",(r,{signal:t}={})=>M(this,$e).call(this,{type:te.CREATE_DIR,data:{path:r}},void 0,t));xe(this,"listDir",(r,{signal:t}={})=>M(this,$e).call(this,{type:te.LIST_DIR,data:{path:r}},void 0,t));xe(this,"deleteDir",(r,{signal:t}={})=>M(this,$e).call(this,{type:te.DELETE_DIR,data:{path:r}},void 0,t))}on(r,t){r==="log"?M(this,It).push(t):r==="progress"&&M(this,Rt).push(t)}off(r,t){r==="log"?X(this,It,M(this,It).filter(n=>n!==t)):r==="progress"&&X(this,Rt,M(this,Rt).filter(n=>n!==t))}}Xe=new WeakMap,Zr=new WeakMap,jr=new WeakMap,It=new WeakMap,Rt=new WeakMap,ea=new WeakMap,$e=new WeakMap;var j_;(function(e){e.MEMFS="MEMFS",e.NODEFS="NODEFS",e.NODERAWFS="NODERAWFS",e.IDBFS="IDBFS",e.WORKERFS="WORKERFS",e.PROXYFS="PROXYFS"})(j_||(j_={}));const sO=new Error("failed to get response body reader"),uO=new Error("failed to complete download"),cO="Content-Length",lO=async(e,r)=>{var i;const t=await fetch(e);let n;try{const a=parseInt(t.headers.get(cO)||"-1"),o=(i=t.body)==null?void 0:i.getReader();if(!o)throw sO;const u=[];let c=0;for(;;){const{done:p,value:y}=await o.read(),m=y?y.length:0;if(p){if(a!=-1&&a!==c)throw uO;r&&r({url:e,total:a,received:c,delta:m,done:p});break}u.push(y),c+=m,r&&r({url:e,total:a,received:c,delta:m,done:p})}const f=new Uint8Array(c);let v=0;for(const p of u)f.set(p,v),v+=p.length;n=f.buffer}catch(a){console.log("failed to send download progress event: ",a),n=await t.arrayBuffer()}return n},F_=async(e,r,t=!1,n)=>{const i=t?await lO(e,n):await(await fetch(e)).arrayBuffer(),a=new Blob([i],{type:r});return URL.createObjectURL(a)};async function fO(e,r,t,n,i){const a=e.map(o=>o.img).filter(o=>o);if(a.length===0){console.error("No images available for export");return}if(r==="mp4")try{const o=await dO(a,{fps:t,preset:"ultrafast"}),u=URL.createObjectURL(o),c=document.createElement("a");c.href=u,c.download="timeslider.mp4",document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(u),n()}catch(o){n(),console.error("MP4 conversion error:",o),alert("Failed to convert to MP4: "+(o instanceof Error?o.message:String(o)))}else vO(a,i,t,n)}function vO(e,r,t,n){const a=r.timelapseComponent.querySelector(".map-view-item").getBoundingClientRect(),o=a.width,u=a.height;S1.createGIF({gifWidth:o,gifHeight:u,images:[...e],interval:1,numFrames:e.length,frameDuration:t,fontWeight:"normal",fontSize:"16px",fontFamily:"sans-serif",fontColor:"#ffffff",textAlign:"center",textBaseline:"bottom",sampleInterval:10,numWorkers:2},function(c){if(c.error)console.error("GIF generation error:",c.error),n();else{const f=document.createElement("a");f.href=c.image,f.download="timeslider.gif",document.body.appendChild(f),f.click(),document.body.removeChild(f),n()}})}async function dO(e,{fps:r=1,crf:t=1,preset:n="veryfast"}={}){if(!e||e.length===0)throw new Error("No frames provided");const i="https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm",a=new oO;await a.load({coreURL:await F_(`${i}/ffmpeg-core.js`,"text/javascript"),wasmURL:await F_(`${i}/ffmpeg-core.wasm`,"application/wasm")});const o=Math.max(3,String(e.length-1).length+1),u=v=>`frame${String(v).padStart(o,"0")}.png`;for(let v=0;v<e.length;v++){const p=e[v];let y;try{if(p.startsWith("data:")){const m=p.split(",")[1];if(!m)throw new Error(`Invalid data URL format at index ${v}`);const g=atob(m),_=new Uint8Array(g.length);for(let O=0;O<g.length;O++)_[O]=g.charCodeAt(O);y=_}else{const m=await fetch(p);if(!m.ok)throw new Error(`Failed to fetch image ${v}: ${m.status} ${m.statusText}`);y=new Uint8Array(await m.arrayBuffer())}if(y.length===0)throw new Error(`Empty image data at index ${v}`);await a.writeFile(u(v),y)}catch(m){throw new Error(`Failed to process image ${v}: ${m instanceof Error?m.message:String(m)}`)}}const c=`frame%0${o}d.png`,f="output.mp4";try{await a.exec(["-framerate",String(r),"-i",c,"-movflags","faststart","-pix_fmt","yuv420p","-vf","scale=trunc(iw/2)*2:trunc(ih/2)*2","-c:v","libx264","-preset",n,"-crf",String(t),"-r",String(r),f]);const v=await a.readFile(f);if(!v||v.length===0)throw new Error("FFmpeg produced no output");try{for(let p=0;p<e.length;p++)await a.deleteFile(u(p));await a.deleteFile(f)}catch(p){console.warn("Failed to clean up temporary files:",p)}return new Blob([v.buffer],{type:"video/mp4"})}catch(v){try{for(let p=0;p<e.length;p++)await a.deleteFile(u(p));await a.deleteFile(f)}catch{}throw new Error(`FFmpeg encoding failed: ${v instanceof Error?v.message:String(v)}`)}}N.extend(W_);N.extend(K_);N.extend(Y_);function pO(e){const r=e.getEOxTimeControl().querySelector(".eox-timecontrol-date"),t=Array.from(e.timelapseComponent.querySelectorAll(".map-view-item")).map(i=>i),n=e.timelapseComponent.querySelector(".export-images");t.forEach(i=>{const a=i.map,o=i.getAttribute("data-index"),u=()=>{const c=document.createElement("canvas"),f=a.getSize();c.width=f[0],c.height=f[1];const v=c.getContext("2d");if(Array.prototype.forEach.call(a.getViewport().querySelectorAll(".ol-layer canvas, canvas.ol-layer"),function(p){if(p.width>0){const y=p.parentNode.style.opacity||p.style.opacity;v.globalAlpha=y===""?1:Number(y);let m;const g=p.style.transform;g?m=g.match(/^matrix\(([^\(]*)\)$/)[1].split(",").map(Number):m=[parseFloat(p.style.width)/p.width,0,0,parseFloat(p.style.height)/p.height,0,0],CanvasRenderingContext2D.prototype.setTransform.apply(v,m);const _=p.parentNode.style.backgroundColor;_&&(v.fillStyle=_,v.fillRect(0,0,p.width,p.height)),v.drawImage(p,0,0)}}),v.globalAlpha=1,v.setTransform(1,0,0,1,0,0),e&&e.exportConfig&&Array.isArray(e.exportConfig.mapLayers)&&typeof o<"u"){const p=Number(o);if(!isNaN(p)&&e.exportConfig.mapLayers[p]){const y=e.exportConfig.mapLayers[p];e.exportConfig.mapLayers[p].img=c.toDataURL();const m=n.children[p];for(m.classList.remove("loader-image"),e.exportConfig.selectedPreview===p&&m.classList.add("selected-preview"),m.addEventListener("click",()=>e.handleSelectedPreview(p));m.firstChild;)m.removeChild(m.firstChild);G_(ue`<img src=${y.img} alt="Exported map ${o+1}" />
              ${rt(y.date,()=>ue`<span
                    >${N(y.date).format((r==null?void 0:r.format)||Ct)}</span
                  >`)}`,m),e.requestUpdate()}}};a.once("rendercomplete",u),a.renderSync()})}function k_(e,r,t){r.forEach(n=>{const i=e.querySelector(n);i&&Object.keys(t).forEach(a=>{i[a]!==void 0&&(i[a]=t[a])})})}N.extend(wr);N.extend(Er);function hO(e){if(!Array.isArray(e)||!e.length)return null;let r,t;return e.length<2?r=t=e[0]:[r,t]=e,r=N(r).utc().format(),t=N(t).endOf("day").utc().format(),[r,t]}function yO(){Q0()}N.extend(wr);N.extend(Er);function B_(e,r){if(!e)return null;const t=N(e[0]),n=N(e[1]),i=t.format(Ct),a=n.format(Ct);return{dates:r?[i,a]:[i],year:t.year(),month:t.month()}}var Qi={exports:{}};Qi.exports;(function(e,r){var t=200,n="Expected a function",i="__lodash_hash_undefined__",a=1,o=2,u=1/0,c=9007199254740991,f=17976931348623157e292,v=NaN,p="[object Arguments]",y="[object Array]",m="[object Boolean]",g="[object Date]",_="[object Error]",O="[object Function]",R="[object GeneratorFunction]",w="[object Map]",A="[object Number]",I="[object Object]",x="[object Promise]",D="[object RegExp]",P="[object Set]",E="[object String]",T="[object Symbol]",q="[object WeakMap]",C="[object ArrayBuffer]",j="[object DataView]",B="[object Float32Array]",Z="[object Float64Array]",ce="[object Int8Array]",ar="[object Int16Array]",me="[object Int32Array]",je="[object Uint8Array]",Fe="[object Uint8ClampedArray]",or="[object Uint16Array]",ae="[object Uint32Array]",ke=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Be=/^\w*$/,De=/^\./,Rr=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pe=/[\\^$.*+?()[\]{}|]/g,sr=/^\s+|\s+$/g,Tr=/\\(\\)?/g,qn=/^[-+]0x[0-9a-f]+$/i,Pn=/^0b[01]+$/i,ct=/^\[object .+?Constructor\]$/,Wt=/^0o[0-7]+$/i,ur=/^(?:0|[1-9]\d*)$/,k={};k[B]=k[Z]=k[ce]=k[ar]=k[me]=k[je]=k[Fe]=k[or]=k[ae]=!0,k[p]=k[y]=k[C]=k[m]=k[j]=k[g]=k[_]=k[O]=k[w]=k[A]=k[I]=k[D]=k[P]=k[E]=k[q]=!1;var An=parseInt,Hr=typeof et=="object"&&et&&et.Object===Object&&et,He=typeof self=="object"&&self&&self.Object===Object&&self,le=Hr||He||Function("return this")(),lt=r&&!r.nodeType&&r,Or=lt&&!0&&e&&!e.nodeType&&e,Kt=Or&&Or.exports===lt,xr=Kt&&Hr.process,qr=function(){try{return xr&&xr.binding("util")}catch{}}(),hr=qr&&qr.isTypedArray;function ft(s,d){for(var b=-1,S=s?s.length:0;++b<S;)if(d(s[b],b,s))return!0;return!1}function Dn(s,d,b,S){for(var $=s.length,L=b+-1;++L<$;)if(d(s[L],L,s))return L;return-1}function vt(s){return function(d){return d==null?void 0:d[s]}}function Yt(s,d){for(var b=-1,S=Array(s);++b<s;)S[b]=d(b);return S}function Ht(s){return function(d){return s(d)}}function Vt(s,d){return s==null?void 0:s[d]}function V(s){var d=!1;if(s!=null&&typeof s.toString!="function")try{d=!!(s+"")}catch{}return d}function z(s){var d=-1,b=Array(s.size);return s.forEach(function(S,$){b[++d]=[$,S]}),b}function G(s,d){return function(b){return s(d(b))}}function W(s){var d=-1,b=Array(s.size);return s.forEach(function(S){b[++d]=S}),b}var re=Array.prototype,Ee=Function.prototype,Je=Object.prototype,yr=le["__core-js_shared__"],Mn=function(){var s=/[^.]+$/.exec(yr&&yr.keys&&yr.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Cn=Ee.toString,ge=Je.hasOwnProperty,Ve=Je.toString,ma=RegExp("^"+Cn.call(ge).replace(Pe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$n=le.Symbol,Nn=le.Uint8Array,ga=Je.propertyIsEnumerable,ba=re.splice,_a=G(Object.keys,Object),Sa=Math.max,dt=Ce(le,"DataView"),cr=Ce(le,"Map"),pt=Ce(le,"Promise"),ht=Ce(le,"Set"),yt=Ce(le,"WeakMap"),lr=Ce(Object,"create"),wa=Mr(dt),Ea=Mr(cr),Ia=Mr(pt),Ra=Mr(ht),Ta=Mr(yt),Pr=$n?$n.prototype:void 0,mt=Pr?Pr.valueOf:void 0,Ln=Pr?Pr.toString:void 0;function Me(s){var d=-1,b=s?s.length:0;for(this.clear();++d<b;){var S=s[d];this.set(S[0],S[1])}}function Oa(){this.__data__=lr?lr(null):{}}function xa(s){return this.has(s)&&delete this.__data__[s]}function qa(s){var d=this.__data__;if(lr){var b=d[s];return b===i?void 0:b}return ge.call(d,s)?d[s]:void 0}function Pa(s){var d=this.__data__;return lr?d[s]!==void 0:ge.call(d,s)}function Aa(s,d){var b=this.__data__;return b[s]=lr&&d===void 0?i:d,this}Me.prototype.clear=Oa,Me.prototype.delete=xa,Me.prototype.get=qa,Me.prototype.has=Pa,Me.prototype.set=Aa;function be(s){var d=-1,b=s?s.length:0;for(this.clear();++d<b;){var S=s[d];this.set(S[0],S[1])}}function Da(){this.__data__=[]}function Ma(s){var d=this.__data__,b=Dr(d,s);if(b<0)return!1;var S=d.length-1;return b==S?d.pop():ba.call(d,b,1),!0}function Ca(s){var d=this.__data__,b=Dr(d,s);return b<0?void 0:d[b][1]}function $a(s){return Dr(this.__data__,s)>-1}function Na(s,d){var b=this.__data__,S=Dr(b,s);return S<0?b.push([s,d]):b[S][1]=d,this}be.prototype.clear=Da,be.prototype.delete=Ma,be.prototype.get=Ca,be.prototype.has=$a,be.prototype.set=Na;function _e(s){var d=-1,b=s?s.length:0;for(this.clear();++d<b;){var S=s[d];this.set(S[0],S[1])}}function La(){this.__data__={hash:new Me,map:new(cr||be),string:new Me}}function ja(s){return Zt(this,s).delete(s)}function Fa(s){return Zt(this,s).get(s)}function ka(s){return Zt(this,s).has(s)}function Ba(s,d){return Zt(this,s).set(s,d),this}_e.prototype.clear=La,_e.prototype.delete=ja,_e.prototype.get=Fa,_e.prototype.has=ka,_e.prototype.set=Ba;function Ar(s){var d=-1,b=s?s.length:0;for(this.__data__=new _e;++d<b;)this.add(s[d])}function Ua(s){return this.__data__.set(s,i),this}function za(s){return this.__data__.has(s)}Ar.prototype.add=Ar.prototype.push=Ua,Ar.prototype.has=za;function Se(s){this.__data__=new be(s)}function Ga(){this.__data__=new be}function Wa(s){return this.__data__.delete(s)}function Ka(s){return this.__data__.get(s)}function Ya(s){return this.__data__.has(s)}function Ha(s,d){var b=this.__data__;if(b instanceof be){var S=b.__data__;if(!cr||S.length<t-1)return S.push([s,d]),this;b=this.__data__=new _e(S)}return b.set(s,d),this}Se.prototype.clear=Ga,Se.prototype.delete=Wa,Se.prototype.get=Ka,Se.prototype.has=Ya,Se.prototype.set=Ha;function Va(s,d){var b=Cr(s)||Un(s)?Yt(s.length,String):[],S=b.length,$=!!S;for(var L in s)ge.call(s,L)&&!($&&(L=="length"||bt(L,S)))&&b.push(L);return b}function Dr(s,d){for(var b=s.length;b--;)if(gr(s[b][0],d))return b;return-1}function jn(s,d){d=Jt(d,s)?[d]:Fn(d);for(var b=0,S=d.length;s!=null&&b<S;)s=s[Qe(d[b++])];return b&&b==S?s:void 0}function Xa(s){return Ve.call(s)}function Za(s,d){return s!=null&&d in Object(s)}function gt(s,d,b,S,$){return s===d?!0:s==null||d==null||!fr(s)&&!tn(d)?s!==s&&d!==d:Ja(s,d,gt,b,S,$)}function Ja(s,d,b,S,$,L){var F=Cr(s),K=Cr(d),H=y,J=y;F||(H=mr(s),H=H==p?I:H),K||(J=mr(d),J=J==p?I:J);var ee=H==I&&!V(s),oe=J==I&&!V(d),ie=H==J;if(ie&&!ee)return L||(L=new Se),F||lo(s)?Di(s,d,b,S,$,L):so(s,d,H,b,S,$,L);if(!($&o)){var de=ee&&ge.call(s,"__wrapped__"),ve=oe&&ge.call(d,"__wrapped__");if(de||ve){var Ae=de?s.value():s,er=ve?d.value():d;return L||(L=new Se),b(Ae,er,S,$,L)}}return ie?(L||(L=new Se),Xt(s,d,b,S,$,L)):!1}function Qa(s,d,b,S){var $=b.length,L=$;if(s==null)return!L;for(s=Object(s);$--;){var F=b[$];if(F[2]?F[1]!==s[F[0]]:!(F[0]in s))return!1}for(;++$<L;){F=b[$];var K=F[0],H=s[K],J=F[1];if(F[2]){if(H===void 0&&!(K in s))return!1}else{var ee=new Se,oe;if(!(oe===void 0?gt(J,H,S,a|o,ee):oe))return!1}}return!0}function eo(s){if(!fr(s)||co(s))return!1;var d=$r(s)||V(s)?ma:ct;return d.test(Mr(s))}function ro(s){return tn(s)&&Xr(s.length)&&!!k[Ve.call(s)]}function Pi(s){return typeof s=="function"?s:s==null?l:typeof s=="object"?Cr(s)?io(s[0],s[1]):no(s):h(s)}function to(s){if(!Ci(s))return _a(s);var d=[];for(var b in Object(s))ge.call(s,b)&&b!="constructor"&&d.push(b);return d}function no(s){var d=Vr(s);return d.length==1&&d[0][2]?$i(d[0][0],d[0][1]):function(b){return b===s||Qa(b,s,d)}}function io(s,d){return Jt(s)&&kn(d)?$i(Qe(s),d):function(b){var S=Gn(b,s);return S===void 0&&S===d?yo(b,s):gt(d,S,void 0,a|o)}}function ao(s){return function(d){return jn(d,s)}}function oo(s){if(typeof s=="string")return s;if(nn(s))return Ln?Ln.call(s):"";var d=s+"";return d=="0"&&1/s==-u?"-0":d}function Fn(s){return Cr(s)?s:Qt(s)}function Ai(s){return function(d,b,S){var $=Object(d);if(!rn(d)){var L=Pi(b);d=an(d),b=function(K){return L($[K],K,$)}}var F=s(d,b,S);return F>-1?$[L?d[F]:F]:void 0}}function Di(s,d,b,S,$,L){var F=$&o,K=s.length,H=d.length;if(K!=H&&!(F&&H>K))return!1;var J=L.get(s);if(J&&L.get(d))return J==d;var ee=-1,oe=!0,ie=$&a?new Ar:void 0;for(L.set(s,d),L.set(d,s);++ee<K;){var de=s[ee],ve=d[ee];if(S)var Ae=F?S(ve,de,ee,d,s,L):S(de,ve,ee,s,d,L);if(Ae!==void 0){if(Ae)continue;oe=!1;break}if(ie){if(!ft(d,function(er,rr){if(!ie.has(rr)&&(de===er||b(de,er,S,$,L)))return ie.add(rr)})){oe=!1;break}}else if(!(de===ve||b(de,ve,S,$,L))){oe=!1;break}}return L.delete(s),L.delete(d),oe}function so(s,d,b,S,$,L,F){switch(b){case j:if(s.byteLength!=d.byteLength||s.byteOffset!=d.byteOffset)return!1;s=s.buffer,d=d.buffer;case C:return!(s.byteLength!=d.byteLength||!S(new Nn(s),new Nn(d)));case m:case g:case A:return gr(+s,+d);case _:return s.name==d.name&&s.message==d.message;case D:case E:return s==d+"";case w:var K=z;case P:var H=L&o;if(K||(K=W),s.size!=d.size&&!H)return!1;var J=F.get(s);if(J)return J==d;L|=a,F.set(s,d);var ee=Di(K(s),K(d),S,$,L,F);return F.delete(s),ee;case T:if(mt)return mt.call(s)==mt.call(d)}return!1}function Xt(s,d,b,S,$,L){var F=$&o,K=an(s),H=K.length,J=an(d),ee=J.length;if(H!=ee&&!F)return!1;for(var oe=H;oe--;){var ie=K[oe];if(!(F?ie in d:ge.call(d,ie)))return!1}var de=L.get(s);if(de&&L.get(d))return de==d;var ve=!0;L.set(s,d),L.set(d,s);for(var Ae=F;++oe<H;){ie=K[oe];var er=s[ie],rr=d[ie];if(S)var _t=F?S(rr,er,ie,d,s,L):S(er,rr,ie,s,d,L);if(!(_t===void 0?er===rr||b(er,rr,S,$,L):_t)){ve=!1;break}Ae||(Ae=ie=="constructor")}if(ve&&!Ae){var Li=s.constructor,ji=d.constructor;Li!=ji&&"constructor"in s&&"constructor"in d&&!(typeof Li=="function"&&Li instanceof Li&&typeof ji=="function"&&ji instanceof ji)&&(ve=!1)}return L.delete(s),L.delete(d),ve}function Zt(s,d){var b=s.__data__;return uo(d)?b[typeof d=="string"?"string":"hash"]:b.map}function Vr(s){for(var d=an(s),b=d.length;b--;){var S=d[b],$=s[S];d[b]=[S,$,kn($)]}return d}function Ce(s,d){var b=Vt(s,d);return eo(b)?b:void 0}var mr=Xa;(dt&&mr(new dt(new ArrayBuffer(1)))!=j||cr&&mr(new cr)!=w||pt&&mr(pt.resolve())!=x||ht&&mr(new ht)!=P||yt&&mr(new yt)!=q)&&(mr=function(s){var d=Ve.call(s),b=d==I?s.constructor:void 0,S=b?Mr(b):void 0;if(S)switch(S){case wa:return j;case Ea:return w;case Ia:return x;case Ra:return P;case Ta:return q}return d});function Mi(s,d,b){d=Jt(d,s)?[d]:Fn(d);for(var S,$=-1,F=d.length;++$<F;){var L=Qe(d[$]);if(!(S=s!=null&&b(s,L)))break;s=s[L]}if(S)return S;var F=s?s.length:0;return!!F&&Xr(F)&&bt(L,F)&&(Cr(s)||Un(s))}function bt(s,d){return d=d??c,!!d&&(typeof s=="number"||ur.test(s))&&s>-1&&s%1==0&&s<d}function Jt(s,d){if(Cr(s))return!1;var b=typeof s;return b=="number"||b=="symbol"||b=="boolean"||s==null||nn(s)?!0:Be.test(s)||!ke.test(s)||d!=null&&s in Object(d)}function uo(s){var d=typeof s;return d=="string"||d=="number"||d=="symbol"||d=="boolean"?s!=="__proto__":s===null}function co(s){return!!Mn&&Mn in s}function Ci(s){var d=s&&s.constructor,b=typeof d=="function"&&d.prototype||Je;return s===b}function kn(s){return s===s&&!fr(s)}function $i(s,d){return function(b){return b==null?!1:b[s]===d&&(d!==void 0||s in Object(b))}}var Qt=en(function(s){s=ho(s);var d=[];return De.test(s)&&d.push(""),s.replace(Rr,function(b,S,$,L){d.push($?L.replace(Tr,"$1"):S||b)}),d});function Qe(s){if(typeof s=="string"||nn(s))return s;var d=s+"";return d=="0"&&1/s==-u?"-0":d}function Mr(s){if(s!=null){try{return Cn.call(s)}catch{}try{return s+""}catch{}}return""}function Bn(s,d,b){var S=s?s.length:0;if(!S)return-1;var $=b==null?0:vo(b);return $<0&&($=Sa(S+$,0)),Dn(s,Pi(d),$)}var Ni=Ai(Bn);function en(s,d){if(typeof s!="function"||d&&typeof d!="function")throw new TypeError(n);var b=function(){var S=arguments,$=d?d.apply(this,S):S[0],L=b.cache;if(L.has($))return L.get($);var F=s.apply(this,S);return b.cache=L.set($,F),F};return b.cache=new(en.Cache||_e),b}en.Cache=_e;function gr(s,d){return s===d||s!==s&&d!==d}function Un(s){return zn(s)&&ge.call(s,"callee")&&(!ga.call(s,"callee")||Ve.call(s)==p)}var Cr=Array.isArray;function rn(s){return s!=null&&Xr(s.length)&&!$r(s)}function zn(s){return tn(s)&&rn(s)}function $r(s){var d=fr(s)?Ve.call(s):"";return d==O||d==R}function Xr(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=c}function fr(s){var d=typeof s;return!!s&&(d=="object"||d=="function")}function tn(s){return!!s&&typeof s=="object"}function nn(s){return typeof s=="symbol"||tn(s)&&Ve.call(s)==T}var lo=hr?Ht(hr):ro;function fo(s){if(!s)return s===0?s:0;if(s=po(s),s===u||s===-u){var d=s<0?-1:1;return d*f}return s===s?s:0}function vo(s){var d=fo(s),b=d%1;return d===d?b?d-b:d:0}function po(s){if(typeof s=="number")return s;if(nn(s))return v;if(fr(s)){var d=typeof s.valueOf=="function"?s.valueOf():s;s=fr(d)?d+"":d}if(typeof s!="string")return s===0?s:+s;s=s.replace(sr,"");var b=Pn.test(s);return b||Wt.test(s)?An(s.slice(2),b?2:8):qn.test(s)?v:+s}function ho(s){return s==null?"":oo(s)}function Gn(s,d,b){var S=s==null?void 0:jn(s,d);return S===void 0?b:S}function yo(s,d){return s!=null&&Mi(s,d,Za)}function an(s){return rn(s)?Va(s):to(s)}function l(s){return s}function h(s){return Jt(s)?vt(Qe(s)):ao(s)}e.exports=Ni})(Qi,Qi.exports);var mO=Qi.exports;const gO=H_(mO);N.extend(wr);N.extend(Er);let zi=null;var ii,Tt,fn,Wi;class bO extends mn{constructor(){super();Q(this,fn);Q(this,ii,!1);Q(this,Tt,null);this.cal=null,this.popup=!1,this.unstyled=!1,this.range=!1,this.showDots=!1,this.showItems=!1,this.position=["top","left"]}static get properties(){return{cal:{attribute:!1,state:!0},popup:{type:Boolean,attribute:"popup"},unstyled:{type:Boolean,attribute:"unstyled"},range:{type:Boolean,attribute:"range"},showItems:{type:Boolean,attribute:"show-items"},showDots:{type:Boolean,attribute:"show-dots"},position:{type:Array,attribute:!1}}}firstUpdated(){yO(),M(this,ii)||this.initCalendar()}disconnectedCallback(){super.disconnectedCallback(),eO()}setDateRange(t){if(X(this,Tt,t),this.cal){const n=B_(M(this,Tt),this.range);this.cal.set({selectedDates:n.dates,selectedYear:n.year,selectedMonth:n.month})}}getViewRange(){const t=this.cal.context.mainElement.querySelector(".vc-month"),n=this.cal.context.mainElement.querySelector(".vc-year"),i=t?Number(t.getAttribute("data-vc-month")):this.cal.selectedMonth,a=n?Number(n.getAttribute("data-vc-year")):this.cal.selectedYear,o=N(`${a}-${String(i+1).padStart(2,"0")}-01`).startOf("month"),u=N(o).endOf("month");return{start:o.toDate(),end:u.toDate()}}initCalendar(t={}){X(this,ii,!0);const n=this.closest("eox-timecontrol");setTimeout(()=>{var u,c;const i=this.renderRoot.querySelector("#cal"),a=(c=(u=n.querySelector("eox-timecontrol-date"))==null?void 0:u.shadowRoot)==null?void 0:c.querySelector("span"),o=this.popup&&a||i;if(o){i.innerHTML="",X(this,Tt,t.selectedDateRange);const f=B_(M(this,Tt),this.range),v=n.items.get(),p=kr(v,"date");let y={};if(this.showItems)for(const m of Object.keys(p)){const g=p[m],_=g.slice(0,3),O=g.length-3;let R="";_.forEach(w=>{const A=w.id||"",I=w.utc?N(w.utc).format("HH:mm"):"",x=w.group||"",D=Object.keys(kr(v,"group")),P=A.length>30?A.substring(0,30)+"...":A;R+=`
                <div class="vc-item-popup__item">
                  <div class="vc-item-popup__item-content">
                    <div class="vc-item-popup__dot" style="background-color: var(--dot-color-${D.indexOf(x)+1}, var(--primary))"></div>
                    <div class="vc-item-popup__text-container">
                      <div class="vc-item-popup__id">
                        ID: ${P}
                      </div>
                      <div class="vc-item-popup__meta">
                        ${I} ${x}
                      </div>
                    </div>
                  </div>
                </div>
              `}),O>0&&(R+=`
                <div class="vc-item-popup__more">
                  + ${O} more
                </div>
              `),y={...y,[m]:{modifier:"vc-item-popup",html:R}}}this.cal=new w1(o||"#cal",{selectedTheme:"light",dateMin:t.min,dateMax:t.max,displayDateMin:t.min,disableToday:!0,displayDateMax:t.max,displayDatesOutside:!1,type:"default",selectionDatesMode:this.range?"multiple-ranged":"single",...f?{selectedDates:f.dates,selectedYear:f.year,selectedMonth:f.month}:{},enableEdgeDatesOnly:!1,inputMode:!!this.popup,positionToInput:this.position,selectedWeekends:[],popups:y,onClickArrow:()=>Ue(this,fn,Wi).call(this),onClickMonth:()=>Ue(this,fn,Wi).call(this),onClickYear:()=>Ue(this,fn,Wi).call(this),onClickDate:m=>{const g=m.context.selectedDates.length-1,_=m.context.selectedDates[0]||zi,O=this.range&&m.context.selectedDates[g];if(_){const R=N(_).startOf("day").utc().format(),w=N(O||_).endOf("day").utc().format();this.range?g||zi===_?(n.dateChange([R,w],n),zi=null):zi=_:n.dateChange([R,w],n)}},onCreateDateEls:(m,g)=>{const _=rO(g),O=n.items.get(),R=kr(O,"date"),w=g.querySelector(".vc-day__dots");w&&w.remove();const A=R[_],I=Object.keys(kr(O,"group"));if(A&&g.children.length){const x=document.createElement("div");x.className="vc-day__dots";const D=n.querySelector("eox-itemfilter");if(D){const T=D.results;gO(T,C=>C.start===_)||g.classList.add("vc-data-unavailable")}const P=A.length,E=P<=3?P:3;for(let T=0;T<E;T++)if(g.classList.add("vc-data-available"),g.hasAttribute("data-vc-date-today")&&g.removeAttribute("data-vc-date-today"),this.showDots)if(T<2||T===2&&P===3){const q=document.createElement("div");q.className="vc-day__dot",q.style.backgroundColor=`var(--dot-color-${I.indexOf(A[T].group)+1}, var(--primary))`,x.appendChild(q)}else{const q=document.createElement("div");q.className="vc-day__plus",x.appendChild(q)}g.appendChild(x)}}}),this.cal.init()}})}render(){return ue`
      <style>
        ${Pt}
        ${v1}
      </style>
      <div id="cal" class="timecontrol-calendar-input" readonly />
    `}}ii=new WeakMap,Tt=new WeakMap,fn=new WeakSet,Wi=function(){const t=this.getViewRange();setTimeout(()=>{this.dispatchEvent(new CustomEvent("update:view",{detail:{start:t.start,end:t.end},composed:!0}))})};customElements.define("eox-timecontrol-picker",bO);const _O=`
[class*=round] {
  border-radius: 0px !important;
}
.vis-timeline * {
  border-radius: 0px;
}
.timeline-wrapper {
  position: relative;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.vis-labelset .vis-label .vis-inner {
  font-size: 12px;
}
.vis-label-hide {
  opacity: 0.4;
}
.vis-item.task {
  background: var(--primary);
  border: none;
  border-radius: 0px !important;
  height: 14px;
}
.vis-labelset .vis-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.vis-labelset .vis-label .vis-inner {
  font-weight: 700;
  padding: 15px;
}
.vis-custom-time-selected-label {
  padding: 5px;
  border-radius: 0px !important;
  background:rgba(0, 12, 20, 0.8);
  color: white;
  font-weight: 700;
  font-size: 12px;
  width: 120px !important;
  height: auto !important;
  left: -60px !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vis-foreground .vis-group {
  border-radius: 0px;
}
.vis-item.task:hover {
  background: var(--primary-container);
}
.vis-item.milestone.vis-dot {
  display: none;
}
.vis-item.milestone.vis-point {
  background: var(--primary) !important;
  border: none;
  width: 14px;
  height: 14px;
  border-radius: 0px !important;
}
.vis-item.milestone.vis-point.vis-selected-item {
  background: #ffc200 !important;
}
.vis-item.milestone.vis-point.vis-not-filtered {
  background: var(--primary-container) !important;
  /*opacity: 0.4;*/
}
.vis-item.milestone.vis-point:hover {
  background: #ffc200 !important;
  cursor: pointer;
}
.vis-group.vis-group-hide .vis-item.milestone.vis-point,
.vis-group.vis-group-hide .vis-item.milestone.vis-point:hover {
  background: var(--primary) !important;
  opacity: 0.4 !important;
}
.vis-custom-time.multi-select-start {
  background: rgb(var(--eox-theme-light-primary), 0.4) !important;
  // border-left: 1px solid var(--primary) !important;
  // border-right: 1px solid var(--primary) !important;
}
.vis-custom-time.multi-select-end {
  // display: none;
  background: none;
}
.vis-custom-time.multi-select-start div, 
.vis-custom-time.multi-select-end div {
  width: 3px !important;
  left: 0px !important;
  background-color: var(--primary);
}
.vis-custom-time.multi-select-start div {
  cursor: w-resize;
}
.vis-custom-time.multi-select-end div {
  cursor: e-resize;
}
.vis-custom-time.multi-select-start tag, 
.vis-custom-time.multi-select-end tag {
  position: absolute;
  top: 0;
  font-size: 10px;
  width: 140px;
  text-align: center;
  background: rgba(0, 12, 20, 0.8);
  color: white;
  padding: 0 10px;
  display: none;
}
.vis-custom-time.multi-select-start tag {
  left: -140px;
} 
.vis-custom-time.multi-select-end tag {
  left: 0;
}
.vis-custom-time.multi-select-end div:hover + tag,
.vis-custom-time.multi-select-start div:hover + tag {
  display: block;
}
.vis-custom-time.multi-select-start:hover tag,
.vis-custom-time.multi-select-end:hover tag, 
.vis-custom-time.multi-select-start:hover + .vis-custom-time.multi-select-end tag,
.vis-custom-time.multi-select-end:hover + .vis-custom-time.multi-select-start tag {
  display: block;
}
.vis-text {
  font-size: 13px;
  text-transform: uppercase;
}
.vis-text.vis-major {
  color: #96938A !important;
  padding-left: 10px;
  margin-left: -8px;
  background: white;
}
.vis-text.vis-minor {
  margin-left: -8px;
  background: white;
}
.vis-item .vis-item-content {
  display: none;
}
.vis-current-time {
  background-color: var(--now) !important;
  width: 2px;
}
.vis-custom-time.selected {
  background-color: #202427 !important;
  width: 2px;
  z-index: 9;
}
.vis-custom-time-selected {
  background: #111 !important;
  width: 2px;
}
.load-wrapper-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.load-wrapper,
.loader-image {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: rgb(211,211,211);
  z-index: 44;
  overflow: hidden;
}
.shimmer,
.shimmer-image {
  position: absolute;
  left: -45%;
  height: 100%;
  width: 45%;
  background-image: linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
  background-image: -moz-linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
  background-image: -webkit-linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
  animation: loading 1s infinite;
  z-index: 45;
}
.loader-image {
  width: 200px;
  height: 100px;
}
@keyframes loading {
  0%{
    left: -45%;
  }
  100%{
    left: 100%;
  }
}
`;N.extend(wr);N.extend(Er);let Gf=!1,St=null;function Vn(e){const r=e.getContainer(),t=r.querySelector(".vis-custom-time.multi-select-start"),n=r.querySelector(".vis-custom-time.multi-select-end");let i,a=null,o,u=null;try{o=N(e.visTimeline.getCustomTime("multi-select-start")),i=o.format("DD MMM YYYY HH:mm:ss")}catch{}try{u=N(e.visTimeline.getCustomTime("multi-select-end")),a=u.format("DD MMM YYYY HH:mm:ss")}catch{}if(i&&o||a&&u){if(t){t.title="";const c=t.querySelector("tag"),f=c||document.createElement("tag");f.textContent=i,c||t.appendChild(f)}if(n){n.title="";const c=n.querySelector("tag"),f=c||document.createElement("tag");f.textContent=a,c||n.appendChild(f)}if(t&&n){const c=Number(n.style.left.replace("px","")),f=Number(t.style.left.replace("px",""));t.style.width=o.isAfter(u)?`${f-c}px`:`${c-f}px`,o.isAfter(u)&&(t.style.left=`${c}px`)}}}function SO(e,r,t){var f;const n=e.getContainer(),i=r.querySelector("eox-itemfilter"),a=n.querySelector(".vis-text.vis-minor.vis-even"),u=Number(a.style.width.replace("px",""))/t.timeAxis.step+.1;n.querySelectorAll(".vis-item.milestone").forEach(v=>{v.style.width=`${u}px`});for(let v=0;v<r.sliderValues.length;v++)f1(e,((f=r.sliderValues[v].layerInstance)==null?void 0:f.getVisible())||!0,v);i&&r.filter(void 0,r)}function wO(e,r){if(e.id=="multi-select-start"||e.id=="multi-select-end"){const t=e.id.includes("start"),n=N(e.time).utc().format(),a=[...t?[n,r.selectedDateRange[1]]:[r.selectedDateRange[0],n]].sort((o,u)=>N(o).isAfter(N(u))?1:-1);r.dateChange(a,r)}}function EO(e,r){if(e&&e.time&&e.what&&e.what!=="group-label"&&!Gf&&!e.event.shiftKey){const t=N(e.time).startOf("day").utc().format(),n=N(e.time).endOf("day").utc().format();r.dateChange([t,n],r)}}function IO(e,r){e.byUser&&(Gf=!0,setTimeout(()=>Gf=!1),Vn(r));const t=r.visTimeline.getWindow();r.dispatchEvent(new CustomEvent("update:view",{detail:{start:t.start,end:t.end},composed:!0}))}function RO(e){const r=e.closest("eox-timecontrol");if(r){const t=r.items.get(),n=r.groups.get(),i=t.map(v=>N(v.start)),a=N.min(i).subtract(50,"day").format("YYYY-MM-DD"),o=N.max(i).add(50,"day").format("YYYY-MM-DD"),u=e.getContainer();u.innerHTML="";const c={...K0,start:a,end:o,min:a,max:o,format:Y0},f=new E1(u,t,n,c);e.visTimeline=f,e.requestUpdate(),St&&(clearInterval(St),St=null),St===null&&(St=setInterval(()=>{const v=e.visTimeline;v&&v.initialRangeChangeDone&&v.initialFitDone&&!v.initialDrawDone?(v.redraw(),clearInterval(St)):v&&v.initialRangeChangeDone&&v.initialFitDone&&v.initialDrawDone&&clearInterval(St)},50)),f.on("changed",()=>{Vn(e),SO(e,r,c)}),f.on("timechange",()=>Vn(e)),f.on("timechanged",v=>wO(v,r)),f.on("click",v=>EO(v,r)),f.on("rangechange",v=>v.byUser&&Vn(e)),f.on("rangechanged",v=>IO(v,e))}}N.extend(wr);N.extend(Er);function TO(e,r){try{r.visTimeline.removeCustomTime("multi-select-start")}catch{}try{r.visTimeline.removeCustomTime("multi-select-end")}catch{}try{r.visTimeline.addCustomTime(N(e[0]).toDate(),"multi-select-start")}catch{}try{r.visTimeline.addCustomTime(N(e[1]).toDate(),"multi-select-end")}catch{}setTimeout(()=>{Vn(r)})}var vn,ai;class OO extends mn{constructor(){super();Q(this,vn,null);Q(this,ai,!1);this.unstyled=!1}static get properties(){return{unstyled:{type:Boolean,attribute:"unstyled"}}}get visTimeline(){return M(this,vn)}set visTimeline(t){X(this,vn,t)}set loading(t){X(this,ai,t),this.requestUpdate()}get loading(){return M(this,ai)}getContainer(){return this.renderRoot.querySelector("#timeline")}getViewRange(){return M(this,vn).getWindow()}setDateRange(t){TO(t,this)}initTimeline(){setTimeout(()=>RO(this))}render(){return ue`
      <style>
        ${Pt}
        ${I1}
        ${!this.unstyled&&dn}
        ${_O}
      </style>
      <div class="timeline-wrapper">
        <div id="timeline"></div>
        ${rt(this.loading,()=>ue`
            <div class="load-wrapper-container">
              <div class="load-wrapper">
                <div class="shimmer"></div>
              </div>
            </div>
          `)}
      </div>
    `}}vn=new WeakMap,ai=new WeakMap;customElements.define("eox-timecontrol-timeline",OO);const U_=`
.timelapse-component {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999999;
}
.timelapse-component i.icon,
.export-btn i.icon {
  background-repeat: no-repeat;
  background-size: contain;
  width: 15px;
}
.setting-menu-content-value .field.border {
  margin: 0;
  padding: 0;
  margin-block-start: 0 !important;
}
.setting-menu-header {
  padding: 10px 0px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.setting-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-grow: 1;
}
.setting-btn-container {
  position: relative;
}
.setting-menu-content {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.setting-menu-content-value {
  flex-grow: 1;
  justify-content: end;
  align-items: center;
  display: flex;
  gap: 10px;
}
.setting-menu-content-value .field.border {
  margin: 0;
  padding: 0;
}
.setting-menu-content-value input {
  width: 50px;
  text-align: center;
  padding: 0 5px !important;
}
.setting-menu-content-value input#setting-date-range {
  width: 210px;
}
.setting-menu-content span {
  font-weight: 300;
}
.timecontrol-export {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 99;
  border-radius: 6px;
}
.timecontrol-export-overlay {
  background: #00000091;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
}
.timecontrol-export-container {
  width: 90%;
  background: white;
  margin: 0 auto;
  border-radius: 6px;
}

@media (min-width: 1300px) and (max-width: 1440px) {
  .timecontrol-export-container {
    width: 1280px;
  }
}
@media (min-width: 1441px) and (max-width: 1600px) {
  .timecontrol-export-container {
    width: 1350px;
  }
}
@media (min-width: 1601px) and (max-width: 1900px) {
  .timecontrol-export-container {
    width: 1500px;
  }
}
@media (min-width: 1901px) {
  .timecontrol-export-container {
    width: 1650px;
  }
}
.timecontrol-export-content {
  padding: 1rem;
  display: flex;
  gap: 1rem;
}
.map-view {
  position: relative;
  width: 100%;
  border-radius: 6px;
  flex-grow: 1;
}
.map-view-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 6px;
  aspect-ratio: 16 / 9;
}
.export-images {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 10px;
  align-items: center;
  padding: 0px 2rem;
  aspect-ratio: 1;
}
.export-images img {
  width: 200px;
  height: 100px;
  object-fit: cover;
}
.export-images div {
  cursor: pointer;
}
.export-images span {
  position: absolute;
  top: 2px;
  right: 2px;
  padding: 0px 4px;
  background: white;
  font-weight: 500;
  font-size: 0.75rem;
  z-index: 9;
  border-radius: 2px;
}
.timecontrol-export-play-pause {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  color: white;
  font-size: 3rem;
  font-weight: 800;
  width: 100%;
  cursor: pointer;
  background: #0000001a;
  aspect-ratio: 16 / 9;
}
.timecontrol-export-play-pause span {
  padding: 1.5rem;
  background: #02020287;
  border-radius: 50%;
  font-size: 0px;
}
.timecontrol-export-play-pause span  i {
  width: 2.5rem !important;
  height: 2.5rem !important;  
}
.export-images div.selected-preview img {
  border: 3px solid var(--primary);
}
.export-images div.selected-preview {
  position: relative;
}
.export-images div.selected-preview::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary);
  opacity: 0.5;
  border-radius: 6px;
}
.timecontrol-wrapper {
  position: relative;
}
.selected-map {
  z-index: 1;
}
.timecontrol-export-footer {
  padding: 1rem;
  background: var(--inverse-on-surface);
  display: flex;
  align-items: center;
  width: 100%;
}
.load-wrapper-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.load-wrapper,
.loader-image {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: rgb(211,211,211);
  z-index: 44;
  overflow: hidden;
}
.shimmer,
.shimmer-image {
  position: absolute;
  left: -45%;
  height: 100%;
  width: 45%;
  background-image: linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
  background-image: -moz-linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
  background-image: -webkit-linear-gradient(to left, rgba(251,251,251, .05), rgba(251,251,251, .3), rgba(251,251,251, .6), rgba(251,251,251, .3), rgba(251,251,251, .05));
  animation: loading 1s infinite;
  z-index: 45;
}
.loader-image {
  width: 200px;
  height: 100px;
}

@keyframes loading {
  0%{
    left: -45%;
  }
  100%{
    left: 100%;
  }
}
.export-icon {
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjk5OTggMTAuMDAwMVYxMi4wMDAxSDMuOTk5ODRWMTAuMDAwMUgyLjY2NjVWMTIuMDAwMUMyLjY2NjUgMTIuNzMzNCAzLjI2NjUgMTMuMzMzNCAzLjk5OTg0IDEzLjMzMzRIMTEuOTk5OEMxMi43MzMyIDEzLjMzMzQgMTMuMzMzMiAxMi43MzM0IDEzLjMzMzIgMTIuMDAwMVYxMC4wMDAxSDExLjk5OThaTTExLjMzMzIgNy4zMzM0MUwxMC4zOTMyIDYuMzkzNDFMOC42NjY1IDguMTEzNDFWMi42NjY3NUg3LjMzMzE3VjguMTEzNDFMNS42MDY1IDYuMzkzNDFMNC42NjY1IDcuMzMzNDFMNy45OTk4NCAxMC42NjY3TDExLjMzMzIgNy4zMzM0MVoiIGZpbGw9IiMwMDA2MEEiLz4KPC9zdmc+Cg==);
}
.export-icon-loading {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: none;
  position: relative;
  display: flex;
}
.export-icon-loading::after {
  content: "";
  display: block;
  width: 14px;
  height: 14px;
  margin: 1px;
  border-radius: 50%;
  border: 2px solid var(--primary);
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: var(--primary);
  border-left-color: var(--primary);
  animation: export-spin 0.9s linear infinite;
  box-sizing: border-box;
}
@keyframes export-spin {
  100% {
    transform: rotate(360deg);
  }
}
.calendar-icon {
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjMzMzMgMi4wMDAwOEgxMi42NjY2VjAuNjY2NzQ4SDExLjMzMzNWMi4wMDAwOEg0LjY2NjU5VjAuNjY2NzQ4SDMuMzMzMjVWMi4wMDAwOEgyLjY2NjU5QzEuOTMzMjUgMi4wMDAwOCAxLjMzMzI1IDIuNjAwMDggMS4zMzMyNSAzLjMzMzQxVjE0LjAwMDFDMS4zMzMyNSAxNC43MzM0IDEuOTMzMjUgMTUuMzMzNCAyLjY2NjU5IDE1LjMzMzRIMTMuMzMzM0MxNC4wNjY2IDE1LjMzMzQgMTQuNjY2NiAxNC43MzM0IDE0LjY2NjYgMTQuMDAwMVYzLjMzMzQxQzE0LjY2NjYgMi42MDAwOCAxNC4wNjY2IDIuMDAwMDggMTMuMzMzMyAyLjAwMDA4Wk0xMy4zMzMzIDE0LjAwMDFIMi42NjY1OVY2LjY2Njc1SDEzLjMzMzNWMTQuMDAwMVpNMTMuMzMzMyA1LjMzMzQxSDIuNjY2NTlWMy4zMzM0MUgxMy4zMzMzVjUuMzMzNDFaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K);
  padding-right: 10px;
}
.play-icon {
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBMaWNlbnNlOiBNSVQuIE1hZGUgYnkgdm13YXJlOiBodHRwczovL2dpdGh1Yi5jb20vdm13YXJlL2NsYXJpdHktYXNzZXRzIC0tPgo8c3ZnIGZpbGw9IiNmZmZmIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHZlcnNpb249IjEuMSIgIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPnBsYXktc29saWQ8L3RpdGxlPgogICAgPHBhdGggY2xhc3M9ImNsci1pLXNvbGlkIGNsci1pLXNvbGlkLXBhdGgtMSIgZD0iTTMyLjE2LDE2LjA4LDguOTQsNC40N0EyLjA3LDIuMDcsMCwwLDAsNiw2LjMyVjI5LjUzYTIuMDYsMi4wNiwwLDAsMCwzLDEuODVMMzIuMTYsMTkuNzdhMi4wNywyLjA3LDAsMCwwLDAtMy43WiI+PC9wYXRoPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiBmaWxsLW9wYWNpdHk9IjAiLz4KPC9zdmc+)
}
.pause-icon {
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBMaWNlbnNlOiBQRC4gTWFkZSBieSBNYXJ5IEFrdmVvOiBodHRwczovL21hcnlha3Zlby5jb20vIC0tPgo8c3ZnIGZpbGw9IiNmZmZmZmYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9InBhdXNlIiBkYXRhLW5hbWU9IkZsYXQgQ29sb3IiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9Imljb24gZmxhdC1jb2xvciI+PHBhdGggaWQ9InByaW1hcnkiIGQ9Ik0xOSw0VjIwYTIsMiwwLDAsMS0yLDJIMTVhMiwyLDAsMCwxLTItMlY0YTIsMiwwLDAsMSwyLTJoMkEyLDIsMCwwLDEsMTksNFpNOSwySDdBMiwyLDAsMCwwLDUsNFYyMGEyLDIsMCwwLDAsMiwySDlhMiwyLDAsMCwwLDItMlY0QTIsMiwwLDAsMCw5LDJaIj48L3BhdGg+PC9zdmc+)
}
`;N.extend(wr);N.extend(Er);function xO(e){const r=N(e[0]),t=N(e[1]);return r.isBefore(t)?[r,t]:[t,r]}function qO(e){return e.date||e.start||null}function PO(e,r){var a;const n=e.getLayers().getArray().find(o=>o.get("id")===r),i=n&&typeof n.getLayers=="function"?null:(a=n==null?void 0:n.getSource)==null?void 0:a.call(n);return{layer:n,source:i}}function AO(e){const r=e.getEOxTimeControl(),t=r.selectedDateRange;if(!t||t.length<2)return null;const[n,i]=xO(t),o=r.items.get().filter(v=>{const p=qO(v);if(!p)return!1;const y=N(p);return(y.isSame(n,"day")||y.isAfter(n,"day"))&&(y.isSame(i,"day")||y.isBefore(i,"day"))}),u=kr(o,"group"),c=Object.keys(u).reduce((v,p)=>{const{layer:y,source:m}=PO(r.eoxMap.map,p);return{...v,[p]:{layer:y,source:m}}},{}),f=r.querySelector("eox-itemfilter");return o.length>0?{selectedRangeItems:kr(o,"date"),filters:(f==null?void 0:f.filters)??[],instances:c,eoxMapConfig:{layers:r.eoxMap.layers,center:r.eoxMap.map.getView().getCenter(),zoom:r.eoxMap.map.getView().getZoom()}}:null}N.extend(W_);N.extend(K_);N.extend(Y_);var oi,si,ze,Fr;class DO extends mn{constructor(){super();Q(this,oi,null);Q(this,si,null);Q(this,ze,null);Q(this,Fr,!1);this.unstyled=!1,this.visTimeline=null,this.speed=1,this.format="gif"}static get properties(){return{unstyled:{type:Boolean,attribute:"unstyled"},speed:{type:Number,attribute:"speed"},format:{type:String,attribute:"format"}}}get exportConfig(){return M(this,oi)}set exportConfig(t){X(this,oi,t)}get timelapseComponent(){return M(this,ze)}setDateRange(t){X(this,si,t),this.requestUpdate()}getContainer(){return this.renderRoot.querySelector("#timeline")}handleExportClose(){this.exportConfig=null,X(this,Fr,!1),M(this,ze)&&(M(this,ze).remove(),X(this,ze,null)),this.requestUpdate()}export(){X(this,Fr,!0),this.timelapseComponent.querySelector(".export-btn i").classList.remove("export-icon"),this.timelapseComponent.querySelector(".export-btn i").classList.add("export-icon-loading");const t=()=>{X(this,Fr,!1),this.timelapseComponent.querySelector(".export-btn i").classList.add("export-icon"),this.timelapseComponent.querySelector(".export-btn i").classList.remove("export-icon-loading"),this.requestUpdate()};fO(this.exportConfig.mapLayers,this.format,this.speed,t,this)}handleSelectedPreview(t){var a,o;this.exportConfig.selectedPreview=t;const n=this.timelapseComponent.querySelectorAll(".map-view-item");n.forEach(u=>{u.classList.remove("selected-map")}),(a=n[t])==null||a.classList.add("selected-map");const i=this.timelapseComponent.querySelector(".export-images").children;Array.from(i).forEach(u=>{u.classList.remove("selected-preview")}),(o=i[t])==null||o.classList.add("selected-preview"),this.requestUpdate()}getEOxTimeControl(){return this.closest("eox-timecontrol")}async generateExport(t){var n,i;t&&t.mapLayers&&t.mapLayers.length&&(this.exportConfig={...t,selectedPreview:0},X(this,ze,document.createElement("div")),M(this,ze).classList.add("timelapse-component"),G_(ue`
          <style>
            ${Pt}
            ${!this.unstyled&&dn}
            ${U_}
          </style>
          <div class="timecontrol-export">
            <div
              @click=${()=>this.handleExportClose()}
              class="timecontrol-export-overlay"
            ></div>
            <div class="timecontrol-export-container">
              <div class="timecontrol-export-content">
                ${rt(this.exportConfig&&((n=this.exportConfig.mapLayers)==null?void 0:n.length),()=>ue`
                    <div class="export-images">
                      ${mv(this.exportConfig.mapLayers,(a,o)=>a.img?ue`<div
                              @click=${()=>this.handleSelectedPreview(o)}
                              class=${this.exportConfig.selectedPreview===o?"selected-preview":""}
                            >
                              <img
                                src=${a.img}
                                alt="Exported map ${o+1}"
                              />
                              ${rt(a.date,()=>ue`<span
                                    >${N(a.date).format("MMM DD, 'YY")}</span
                                  >`)}
                            </div>`:ue`<div class="loader-image">
                              <div class="shimmer-image"></div>
                            </div>`)}
                    </div>
                  `)}
                <div class="map-view">
                  <div
                    @click=${()=>this.handlePlayPause()}
                    class="timecontrol-export-play-pause"
                  >
                    <span>
                      <i
                        class="icon ${this.exportConfig.play?"pause":"play"}-icon"
                      ></i>
                    </span>
                  </div>
                  ${rt(this.exportConfig&&((i=this.exportConfig.mapLayers)==null?void 0:i.length),()=>ue`
                      ${mv(this.exportConfig.mapLayers,(a,o)=>ue`
                          <eox-map
                            class="map-view-item ${this.exportConfig.selectedPreview===o?"selected-map":""}"
                            data-index=${o}
                            .layers=${a.layers}
                            .center=${a.center||this.getEOxTimeControl().eoxMap.map.getView().getCenter()}
                            .zoom=${a.zoom||this.getEOxTimeControl().eoxMap.map.getView().getZoom()}
                            prevent-scroll
                          ></eox-map>
                        `)}
                    `)}
                </div>
              </div>
              <div class="timecontrol-export-footer flex-center">
                <div class="setting-menu">
                  <div class="setting-menu-content">
                    <span>Speed</span>
                    <div class="setting-menu-content-value">
                      <span>(frames/sec)</span>
                      <div class="field border small fill">
                        <input
                          value=${this.speed}
                          min="1"
                          max="5"
                          @change=${a=>this.speed=a.target.value}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="setting-menu-content">
                    <span>Format</span>
                    <div class="setting-menu-content-value">
                      <div class="field border fill small">
                        <select
                          value=${this.format}
                          @change=${a=>this.format=a.target.value}
                        >
                          <option value="gif">GIF</option>
                          <option value="mp4">MP4</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  @click=${()=>this.export()}
                  class="export-btn border small flex-center"
                >
                  <i class="icon export-icon"></i><span>Export</span>
                </button>
              </div>
            </div>
          </div>
        `,M(this,ze)),document.body.appendChild(M(this,ze)),setTimeout(()=>{pO(this)})),X(this,Fr,!1),this.requestUpdate()}handlePlayPause(){const t=this.timelapseComponent.querySelector(".timecontrol-export-play-pause span i");if(this.exportConfig.play)t.classList.add("play-icon"),t.classList.remove("pause-icon"),this.exportConfig.play=!1;else{t.classList.add("pause-icon"),t.classList.remove("play-icon"),this.exportConfig.play=!0;const n=i=>{var a;this.exportConfig.play&&(i||(this.exportConfig.selectedPreview+1!==((a=this.exportConfig.mapLayers)==null?void 0:a.length)?this.handleSelectedPreview(this.exportConfig.selectedPreview+1):this.handleSelectedPreview(0)),setTimeout(n,1e3/this.speed))};n(!0)}this.requestUpdate()}handleExport(){const t=AO(this);if(t){if(this.getEOxTimeControl().externalMapRendering)this.dispatchEvent(new CustomEvent("export",{detail:{...t,generate:async n=>await this.generateExport(n)}}));else{const n=[];for(const i in t.selectedRangeItems){const a=t.selectedRangeItems[i],o=[];for(const u in a){let c=t.eoxMapConfig.layers.find(f=>f.properties.id===a[u].group);c.source.params[a[u].property]=a[u].date,o.push(c)}o.push(t.eoxMapConfig.layers[0]),n.push({layers:o,center:t.eoxMapConfig.center,zoom:t.eoxMapConfig.zoom})}this.generateExport({mapLayers:n})}X(this,Fr,!0),this.requestUpdate()}}disconnectedCallback(){super.disconnectedCallback(),M(this,ze)&&(M(this,ze).remove(),X(this,ze,null))}render(){var t;return ue`
      <style>
        ${Pt}
        ${!this.unstyled&&dn}
        ${U_}
      </style>
      <button
        ?disabled=${((t=M(this,si))==null?void 0:t.length)!==2}
        @click=${()=>this.handleExport()}
        class="export-btn border small flex-center"
      >
        <i
          class="icon ${M(this,Fr)?"export-icon-loading":"export-icon"}"
        ></i
        ><span>Timelapse</span>
      </button>
    `}}oi=new WeakMap,si=new WeakMap,ze=new WeakMap,Fr=new WeakMap;customElements.define("eox-timecontrol-timelapse",DO);const MO=`
  .date-range-slider-wrapper {
    margin: 16px 0px 0px 0px;
    position: relative;
  }

  .custom-marks-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 8px;
    pointer-events: none;
  }

  :host {
    --track-bg: #cfd4dd;
  }

  /* Base track */
  tc-range-slider {
    --slider-bg: var(--track-bg);
    --slider-height: 8px;
    --slider-radius: 999px;
    --range-bg: var(--primary);
    --pointer-width: 18px;
    --pointer-height: 18px;
    --pointer-bg: var(--primary);
    --pointer-border: none;
    --pointer-shadow: none;
    --pointer-radius: 50%;
    display: block;
    width: 100%;
    position: relative;
    padding-bottom: 40px;
  }

  /* Custom marks */
  .custom-mark {
    position: absolute;
    pointer-events: none;
    transform: translateX(-50%);
  }

  .custom-mark-year {
    height: 12px;
    width: 2px;
    background-color: var(--mark-color, #666);
    top: 0;
  }

  .custom-mark-empty {
    height: 4px;
    width: 1px;
    background-color: var(--mark-color, #ccc);
    top: 10px;
  }

  .custom-mark-label {
    position: absolute;
    font-size: 11px;
    white-space: nowrap;
    pointer-events: none;
    left: 50%;
    transform: translateX(-50%);
    /* Prevent text cut off at edges */
    max-width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Show full first/last label within slider bounds */
  .custom-mark:first-child .custom-mark-label {
    left: 0;
    transform: translateX(0);
    text-align: left;
    max-width: 70px;
  }
  .custom-mark:last-child .custom-mark-label {
    left: 100%;
    transform: translateX(-100%);
    text-align: right;
    max-width: 70px;
  }

  .custom-mark-year-label {
    color: var(--mark-text-color, #666);
    top: 16px;
  }

  /* Custom tooltips */
  .custom-tooltip {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 8px;
    padding: 4px 8px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    pointer-events: none;
    z-index: 10;
  }

  .custom-tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.8);
  }
`;N.extend(wr);N.extend(Er);var Ge,Ot,ui,Jr,Qr,$t,Wf,d1;class CO extends mn{constructor(){super();Q(this,$t);Q(this,Ge,null);Q(this,Ot,null);Q(this,ui,null);Q(this,Jr,[]);Q(this,Qr,null);this.unstyled=!1,this.animateOnClickInterval="0.3s"}static get properties(){return{unstyled:{type:Boolean,attribute:"unstyled"},animateOnClickInterval:{type:String,attribute:"animate-onclick-interval"}}}getSliderInstance(){return this.renderRoot.querySelector("tc-range-slider")}getEOxTimeControl(){return this.closest("eox-timecontrol")}setDateRange(t,n){X(this,Ot,t);let i=null;const a=this.getSliderInstance();if(n&&n.length&&X(this,Ge,Object.keys(kr(n,"utc")).sort((o,u)=>N(o).diff(N(u),"day"))),M(this,Ge)&&M(this,Ot)){const o=N(M(this,Ot)[0]),u=N(M(this,Ot)[1]),c=M(this,Ge).filter(f=>{const v=N(f);return v.isSame(o)&&(i=f),(v.isAfter(o)||v.isSame(o,"day"))&&(v.isBefore(u)||v.isSame(u,"day"))});X(this,ui,c)}a&&(a.setAttribute("data",M(this,Ge).join(",")),a.setAttribute("value1",i||M(this,ui)[0])),X(this,Jr,Ue(this,$t,Wf).call(this)),this.requestUpdate()}firstUpdated(){const t=this.getSliderInstance();t&&window.ResizeObserver&&(X(this,Qr,new ResizeObserver(()=>{M(this,Ge)&&M(this,Ge).length>0&&(X(this,Jr,Ue(this,$t,Wf).call(this)),this.requestUpdate())})),M(this,Qr).observe(t))}disconnectedCallback(){M(this,Qr)&&(M(this,Qr).disconnect(),X(this,Qr,null)),super.disconnectedCallback()}handleChange(t){const n=this.getEOxTimeControl(),i=N(t.detail.value1).utc().format(),a=N(t.detail.value1).endOf("day").utc().format();i===n.selectedDateRange[0]&&a===n.selectedDateRange[1]||n.dateChange([i,a],n)}render(){return ue`
      <style>
        ${Pt}
        ${!this.unstyled&&dn}
        ${MO}
      </style>
      <div class="date-range-slider-wrapper">
        <tc-range-slider
          animate-onclick="${this.animateOnClickInterval}"
          @change="${t=>this.handleChange(t)}"
        ></tc-range-slider>
        ${Ue(this,$t,d1).call(this)}
      </div>
    `}}Ge=new WeakMap,Ot=new WeakMap,ui=new WeakMap,Jr=new WeakMap,Qr=new WeakMap,$t=new WeakSet,Wf=function(){if(!M(this,Ge)||M(this,Ge).length===0)return[];const t=[],n=new Set,i=[];M(this,Ge).forEach((a,o)=>{const c=N(a).year(),f=M(this,Ge).length===1?0:o/(M(this,Ge).length-1)*100;n.has(c)||(n.add(c),i.push({type:"year",position:f,label:c.toString(),date:a}))}),i.sort((a,o)=>a.position-o.position);for(let a=0;a<i.length;a++){t.push(i[a]);let o=a===i.length-1,u=i[a],c=100,f=null;o||(f=i[a+1],c=f.position);const v=c-u.position;if(v>4){const p=Math.max(1,Math.floor(v/3)),y=.8,m=v/(p+1);for(let g=1;g<=p;g++){const _=u.position+m*g,O=_-u.position,R=c-_;O>y&&R>y&&t.push({type:"empty",position:_})}}}return t.sort((a,o)=>a.position-o.position)},d1=function(){return!M(this,Jr)||M(this,Jr).length===0?ue``:ue`
      <div class="custom-marks-container">
        ${M(this,Jr).map(t=>ue`
            <div
              class="custom-mark custom-mark-${t.type}"
              style="left: ${t.position}%"
            >
              ${t.type==="year"&&t.label?ue`
                    <div
                      class="custom-mark-label custom-mark-${t.type}-label"
                    >
                      ${t.label}
                    </div>
                  `:""}
            </div>
          `)}
      </div>
    `};customElements.define("eox-timecontrol-slider",CO);N.extend(wr);N.extend(Er);let z_=!1;function $O(e,r){const t=typeof e.for=="object"?e.for:R1(e.for),n=e.getTimeControlTimeline(),i=e.getTimeControlPicker();if(n&&n.addEventListener("update:view",()=>r(e)),i&&i.addEventListener("update:view",()=>r(e)),t||(e.externalMapRendering=!0),t||e.controlValues.length){const a=t;e.eoxMap=a;const o=a?a.getFlatLayersArray(a.map.getLayers().getArray()):[];let u=!e.initDate;const c=()=>{const f=a?a.getFlatLayersArray(a.map.getLayers().getArray()):[],v=[];if(f.length||e.controlValues.length){const p=e.controlValues.length?e.controlValues:f;for(const y of p){const m=e.controlValues.length?y:y.getProperties();if(m&&m.timeControlValues&&Array.isArray(m.timeControlValues)){const g=m.timeControlValues.map(_=>({..._,date:N(_.date).format().split("T")[0],utc:N(_.date).utc().format(),local:N(_.date).format(),originalDate:_.date})).sort((_,O)=>new Date(_.date)-new Date(O.date));v.push({layer:m[e.layerIdKey],name:m[e.titleKey],property:m.timeControlProperty||"dummy",values:g,layerInstance:e.eoxMap?y:null}),e.eoxMap&&y.on("change:timeControlValues",()=>c())}}}if(!T1(e.sliderValues,v)&&(e.sliderValues=v,e.sliderValues.length)){k_(e,["eox-timecontrol-timeline"],{loading:!0});const p=new Zi([]),y=new Zi([]),m=e.querySelector("eox-timecontrol-timeline");Z0(e.sliderValues,p,y,m),e.groups=p,e.items=y,m&&m.initTimeline(),k_(e,["eox-timecontrol-timeline"],{loading:!1});const g=hO(e.initDate),_=e.items.get();if(_&&_.length){const O=N(_[_.length-1].utc),R=g||[O.utc().format(),O.endOf("day").utc().format()],w=e.querySelector("eox-timecontrol-picker");setTimeout(()=>{m&&m.visTimeline.setOptions({...m.visTimeline.setOptions,start:N(R[0]).subtract(30,"day").format(Ct),end:N(R[0]).add(30,"day").format(Ct)}),e.dateChange(R,e);const A=e.querySelector("eox-itemfilter");if(A){A.items=e.items.get().map(x=>({key:x.id,title:x.name||x.title||String(x.id),...x}));const I=x=>{e.filter(x,e)};z_||(A.addEventListener("filter",I),z_=!0)}}),w&&w.initCalendar({selectedDateRange:R})}else u||e.dateChange(g,e);u=!0}e.requestUpdate()};(o.length>0||e.controlValues.length)&&c(),a&&(a.map.getLayers().on("add",()=>c()),a.map.getLayers().on("remove",()=>c()),a.map.on("change",()=>{c()}))}}function NO(e,r){J0(e,r.eoxMap,r)}function LO(e,r){var i;const t=r.querySelector("eox-itemfilter");if(!t)return;const n=r.querySelector("eox-timecontrol-timeline");if(n&&n.visTimeline){n.renderRoot.querySelectorAll(".vis-item.milestone.vis-point").forEach(u=>{u.classList.remove("vis-filtered"),u.classList.remove("vis-not-filtered")});const o=((i=e==null?void 0:e.detail)==null?void 0:i.results)||t.results;if(r.items.get().length!=o.length){for(const c of o){const f=n.renderRoot.querySelector(`.vis-item.milestone.vis-point.item-${c.id}`);f&&f.classList.add("vis-filtered")}n.renderRoot.querySelectorAll(".vis-item.milestone.vis-point:not(.vis-filtered)").forEach(c=>{c.classList.add("vis-not-filtered")})}}}function Kn(e,r){return e.querySelector(r)}var ci,li,fi,vi,ra,p1;class jO extends mn{constructor(){super();Q(this,ra);Q(this,ci,null);Q(this,li,new Zi([]));Q(this,fi,new Zi([]));Q(this,vi,[]);xe(this,"dateChange",NO);xe(this,"filter",LO);this.unstyled=!1,this.selectedDateRange=null,this.titleKey="name",this.layerIdKey="id",this.externalMapRendering=!1,this.for=void 0,this.controlValues=[],this.initDate=null}static get properties(){return{for:{type:String},unstyled:{type:Boolean},titleKey:{type:String,attribute:"title-key"},layerIdKey:{type:String,attribute:"layer-id-key"},externalMapRendering:{type:Boolean,attribute:"external-map-rendering"},selectedDateRange:{type:Array,attribute:void 0},controlValues:{type:Array,attribute:!1},initDate:{type:Array,attribute:!1}}}get sliderValues(){return M(this,vi)}set sliderValues(t){X(this,vi,t)}get eoxMap(){return M(this,ci)}set eoxMap(t){X(this,ci,t)}get groups(){return M(this,li)}set groups(t){X(this,li,t)}get items(){return M(this,fi)}set items(t){X(this,fi,t)}getContainer(){return this.renderRoot.querySelector("#timeslider")}getTimeControlDate(){return Kn(this,"eox-timecontrol-date")}getTimeControlSlider(){return Kn(this,"eox-timecontrol-slider")}getTimeControlTimeline(){return Kn(this,"eox-timecontrol-timeline")}getTimeControlTimelapse(){return Kn(this,"eox-timecontrol-timelapse")}getTimeControlPicker(){return Kn(this,"eox-timecontrol-picker")}firstUpdated(){$O(this,Ue(this,ra,p1)),this.requestUpdate()}render(){return ue`
      <style>
        ${Pt}
        ${!this.unstyled&&dn}
      </style>
      <main>
        <slot></slot>
      </main>
    `}}ci=new WeakMap,li=new WeakMap,fi=new WeakMap,vi=new WeakMap,ra=new WeakSet,p1=function(t){const n=t.getTimeControlTimeline(),i=t.getTimeControlPicker();t.dispatchEvent(new CustomEvent("update:view",{detail:{...n?{timeline:[n.getViewRange().start,n.getViewRange().end]}:{},...i?{picker:[i.getViewRange().start,i.getViewRange().end]}:{}},bubbles:!0,composed:!0}))};customElements.define("eox-timecontrol",jO);export{jO as EOxTimeControl};
