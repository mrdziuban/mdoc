'use strict';var g,aa=require("ms");Object.freeze({esVersion:6,assumingES6:!0,productionMode:!0,linkerVersion:"1.7.1",fileLevelThis:this});var h=Math.imul,ba=Math.clz32,l;function ca(a){for(var b in a)return b}function m(a){this.T=a}m.prototype.toString=function(){return String.fromCharCode(this.T)};
function da(a){switch(typeof a){case "string":return"java.lang.String";case "number":return"number"===typeof a&&(a|0)===a&&1/a!==1/-0?a<<24>>24===a?"java.lang.Byte":a<<16>>16===a?"java.lang.Short":"java.lang.Integer":"java.lang.Float";case "boolean":return"java.lang.Boolean";case "undefined":return"java.lang.Void";default:return null===a?a.tb():a instanceof n?"java.lang.Long":a instanceof m?"java.lang.Character":a&&a.$classData?a.$classData.name:null.ub()}}
function ea(a){switch(typeof a){case "string":return p(a);case "number":return fa(a);case "boolean":return a?1231:1237;case "undefined":return 0;default:return a&&a.$classData||null===a?a=a.g():a instanceof n?(a=null===a?l:a,a=a.l^a.k):a=a instanceof m?null===a?0:a.T:q.prototype.g.call(a),a}}var ha=0,ia=new WeakMap;
function ja(a){switch(typeof a){case "string":return p(a);case "number":return fa(a);case "bigint":var b=0;for(a<BigInt(0)&&(a=~a);a!==BigInt(0);)b^=Number(BigInt.asIntN(32,a)),a>>=BigInt(32);return b;case "boolean":return a?1231:1237;case "undefined":return 0;case "symbol":return a=a.description,void 0===a?0:p(a);default:if(null===a)return 0;b=ia.get(a);void 0===b&&(ha=b=ha+1|0,ia.set(a,b));return b}}function q(){}q.prototype.constructor=q;function r(){}r.prototype=q.prototype;q.prototype.g=function(){return ja(this)};
q.prototype.d=function(){var a=this.g();return da(this)+"@"+(+(a>>>0)).toString(16)};q.prototype.toString=function(){return this.d()};function ka(a){if("number"===typeof a){this.c=Array(a);for(var b=0;b<a;b++)this.c[b]=null}else this.c=a}ka.prototype=new r;ka.prototype.constructor=ka;function la(a){if("number"===typeof a){this.c=Array(a);for(var b=0;b<a;b++)this.c[b]=!1}else this.c=a}la.prototype=new r;la.prototype.constructor=la;function ma(a){this.c="number"===typeof a?new Uint16Array(a):a}
ma.prototype=new r;ma.prototype.constructor=ma;function na(a){this.c="number"===typeof a?new Int8Array(a):a}na.prototype=new r;na.prototype.constructor=na;function oa(a){this.c="number"===typeof a?new Int16Array(a):a}oa.prototype=new r;oa.prototype.constructor=oa;function pa(a){this.c="number"===typeof a?new Int32Array(a):a}pa.prototype=new r;pa.prototype.constructor=pa;function qa(a){if("number"===typeof a){this.c=Array(a);for(var b=0;b<a;b++)this.c[b]=l}else this.c=a}qa.prototype=new r;
qa.prototype.constructor=qa;function ra(a){this.c="number"===typeof a?new Float32Array(a):a}ra.prototype=new r;ra.prototype.constructor=ra;function sa(a){this.c="number"===typeof a?new Float64Array(a):a}sa.prototype=new r;sa.prototype.constructor=sa;function ta(){this.R=this.i=null;this.S=0;this.na=null;this.o="";this.v=this.P=void 0;this.name="";this.isJSClass=this.isArrayClass=this.isInterface=this.isPrimitive=!1;this.isInstance=void 0}
function t(a,b,c,d){var e=new ta;e.i={};e.na=a;e.o=b;e.v=f=>f===e;e.name=c;e.isPrimitive=!0;e.isInstance=()=>!1;void 0!==d&&(e.P=ua(e,d));return e}function v(a,b,c){var d=new ta,e=ca(a);d.i=c;d.o="L"+b+";";d.v=f=>!!f.i[e];d.name=b;d.isInterface=!1;d.isInstance=f=>!!(f&&f.$classData&&f.$classData.i[e]);return d}
function ua(a,b,c){var d=new ta;b.prototype.$classData=d;var e="["+a.o;d.i={a:1,Aa:1,f:1};d.R=a;d.S=1;d.o=e;d.name=e;d.isArrayClass=!0;d.v=c||(f=>d===f);d.isInstance=f=>f instanceof b;return d}var w=new ta;w.i={a:1};w.o="Ljava.lang.Object;";w.v=a=>!a.isPrimitive;w.name="java.lang.Object";w.isInstance=a=>null!==a;w.P=ua(w,ka,a=>{var b=a.S;return 1===b?!a.R.isPrimitive:1<b});q.prototype.$classData=w;t(void 0,"V","void",void 0);t(!1,"Z","boolean",la);t(0,"C","char",ma);t(0,"B","byte",na);
t(0,"S","short",oa);t(0,"I","int",pa);var va=t(null,"J","long",qa);t(0,"F","float",ra);t(0,"D","double",sa);function x(){this.U=this.x=this.q=null;wa=this;this.q=new ArrayBuffer(8);this.x=new Int32Array(this.q,0,2);new Float32Array(this.q,0,2);this.U=new Float64Array(this.q,0,1);this.x[0]=16909060;new Int8Array(this.q,0,8)}x.prototype=new r;x.prototype.constructor=x;function xa(a,b){var c=b|0;if(c===b&&-Infinity!==1/b)return c;a.U[0]=b;return(a.x[0]|0)^(a.x[1]|0)}
x.prototype.$classData=v({Ca:0},"java.lang.FloatingPointBits$",{Ca:1,a:1});var wa;function ya(){wa||(wa=new x);return wa}function y(){this.V=null;za=this;this.V=new z(!1);new z(!0)}y.prototype=new r;y.prototype.constructor=y;y.prototype.$classData=v({Ja:0},"java.lang.System$Streams$",{Ja:1,a:1});var za;function Aa(){za||(za=new y);return za}function A(){this.E=-1;this.F=20}A.prototype=new r;A.prototype.constructor=A;A.prototype.$classData=v({ra:0},"jsdocs.Progress",{ra:1,a:1});function B(){}
B.prototype=new r;B.prototype.constructor=B;function Ba(a,b){a=new A;Ca().setInterval(((c,d)=>()=>{d.E=1+d.E|0;var e=d.E,f=d.F;if(0===f)throw new Da;var k=1+(e%f|0)|0;e=Ea(new C("#"),k);f=Ea(new C(" "),d.F-k|0);k=k/d.F*100;c.innerHTML="\x3cpre\x3e\x3ccode\x3e"+e+"\ud83d\ude80"+f+(2147483647<k?2147483647:-2147483648>k?-2147483648:k|0)+"%\x3c/code\x3e\x3c/pre\x3e"})(b,a),100)}
function Fa(a,b){Ca().setInterval((c=>()=>{var d=new Date;c.innerHTML="\x3cp\x3eShared date "+(void 0===d?"undefined":d.toString())+"\x3c/p\x3e"})(b),1E3)}function Ga(a,b){a=new D(0);Ca().setInterval(((c,d)=>()=>{c.D=1+c.D|0;d.innerHTML="Invisible tick: "+c.D})(a,b),1E3)}function Ha(a,b){Ca().setTimeout((c=>()=>{c.innerHTML="I am loaded. Refresh the page to load me again."})(b),3E3)}B.prototype.$classData=v({sa:0},"mdocjs$",{sa:1,a:1});var Ia;function E(){Ia||(Ia=new B);return Ia}
function F(){this.O=null;this.t=0}F.prototype=new r;F.prototype.constructor=F;function Ca(){Ja||(Ja=new F);var a=Ja;0===(33554432&a.t)&&0===(33554432&a.t)&&(a.O=window,a.t|=33554432);return a.O}F.prototype.$classData=v({ta:0},"org.scalajs.dom.package$",{ta:1,a:1});var Ja;function n(a,b){this.l=a;this.k=b}n.prototype=new r;n.prototype.constructor=n;n.prototype.g=function(){return this.l^this.k};
n.prototype.d=function(){Ka();var a=this.l,b=this.k;return b===a>>31?""+a:0>b?"-"+La(-a|0,0!==a?~b:-b|0):La(a,b)};n.prototype.$classData=v({ua:0},"org.scalajs.linker.runtime.RuntimeLong",{ua:1,a:1});
function La(a,b){if(0===(-2097152&b))b=""+(4294967296*b+ +(a>>>0));else{var c=(32+ba(1E9)|0)-(0!==b?ba(b):32+ba(a)|0)|0,d=c,e=0===(32&d)?1E9<<d:0;d=0===(32&d)?5E8>>>(31-d|0)|0|0<<d:1E9<<d;var f=a,k=b;for(a=b=0;0<=c&&0!==(-2097152&k);){var u=f,O=k,xb=e,Va=d;if(O===Va?(-2147483648^u)>=(-2147483648^xb):(-2147483648^O)>=(-2147483648^Va))u=k,O=d,k=f-e|0,u=(-2147483648^k)>(-2147483648^f)?-1+(u-O|0)|0:u-O|0,f=k,k=u,32>c?b|=1<<c:a|=1<<c;c=-1+c|0;u=d>>>1|0;e=e>>>1|0|d<<31;d=u}c=k;if(0===c?-1147483648<=(-2147483648^
f):-2147483648<=(-2147483648^c))c=4294967296*k+ +(f>>>0),f=c/1E9,e=f/4294967296|0,d=b,b=f=d+(f|0)|0,a=(-2147483648^f)<(-2147483648^d)?1+(a+e|0)|0:a+e|0,f=c%1E9|0;c=""+f;b=""+(4294967296*a+ +(b>>>0))+"000000000".substring(c.length|0)+c}return b}function G(){this.u=0}G.prototype=new r;G.prototype.constructor=G;G.prototype.$classData=v({va:0},"org.scalajs.linker.runtime.RuntimeLong$",{va:1,a:1});var Ma;function Ka(){Ma||(Ma=new G);return Ma}function Na(){}Na.prototype=new r;
Na.prototype.constructor=Na;function Oa(){}Oa.prototype=Na.prototype;function H(){}H.prototype=new r;H.prototype.constructor=H;
function Pa(a,b){if(null===b)return 0;if("number"===typeof b){a=+b;b=2147483647<a?2147483647:-2147483648>a?-2147483648:a|0;if(b===a)a=b;else{b=Ka();if(-0x7fffffffffffffff>a){b.u=-2147483648;var c=0}else if(0x7fffffffffffffff<=a)b.u=2147483647,c=-1;else{c=a|0;var d=a/4294967296|0;b.u=0>a&&0!==c?-1+d|0:d}b=b.u;Ka();a=(0>b?-(4294967296*+((0!==c?~b:-b|0)>>>0)+ +((-c|0)>>>0)):4294967296*b+ +(c>>>0))===a?c^b:xa(ya(),a)}return a}return b instanceof n?(a=null===b?l:b,b=new n(a.l,a.k),a=b.l,b=b.k,b===a>>31?
a:a^b):ea(b)}H.prototype.$classData=v({qb:0},"scala.runtime.Statics$",{qb:1,a:1});var Qa;function Ra(){Qa||(Qa=new H);return Qa}function I(){}I.prototype=new r;I.prototype.constructor=I;I.prototype.$classData=v({ob:0},"scala.scalajs.runtime.package$",{ob:1,a:1});var Sa;function J(a){this.Z=a}J.prototype=new r;J.prototype.constructor=J;J.prototype.d=function(){return"DynamicVariable("+this.Z+")"};J.prototype.$classData=v({Ta:0},"scala.util.DynamicVariable",{Ta:1,a:1});
function K(a){a=h(-2048144789,a^(a>>>16|0));a=h(-1028477387,a^(a>>>13|0));return a^(a>>>16|0)}function Ta(){}Ta.prototype=new r;Ta.prototype.constructor=Ta;function Ua(){}Ua.prototype=Ta.prototype;function L(a,b){a=Wa(a,b);return-430675100+h(5,a<<13|a>>>19|0)|0}function Wa(a,b){b=h(-862048943,b);b=h(461845907,b<<15|b>>>17|0);return a^b}
function M(a,b){a.G=b;a.Ka=null;a.La=!0;a.Ma=!0;"[object Error]"!==Object.prototype.toString.call(a)&&void 0!==Error.captureStackTrace&&Error.captureStackTrace(a)}class Xa extends Error{constructor(){super();this.Ka=this.G=null;this.Ma=this.La=!1}d(){var a=da(this),b=this.G;return null===b?a:a+": "+b}g(){return q.prototype.g.call(this)}get ["message"](){var a=this.G;return null===a?"":a}get ["name"](){return da(this)}["toString"](){return this.d()}}function N(){}N.prototype=new r;
N.prototype.constructor=N;function Ya(){}Ya.prototype=N.prototype;N.prototype.d=function(){return"\x3cfunction1\x3e"};function D(a){this.D=a}D.prototype=new r;D.prototype.constructor=D;D.prototype.d=function(){return""+this.D};D.prototype.$classData=v({pb:0},"scala.runtime.IntRef",{pb:1,a:1,f:1});
function P(){this.$=this.H=0;Za=this;this.H=p("Seq");this.$=p("Map");p("Set");$a||($a=new Q);var a=$a;var b=this.$;if(a.h()){var c=L(b,0);c=L(c,0);c=Wa(c,1);K(c^0)}else c=new R(this),a.p(c),a=L(b,c.I),a=L(a,c.J),a=Wa(a,c.K),K(a^c.L)}P.prototype=new Ua;P.prototype.constructor=P;function ab(a){Za||(Za=new P);var b=Za;if(a instanceof S){for(b=b.H;!a.h();)throw new bb;a=K(b^0)}else{var c=b.H;a.h()?a=K(c^0):(b=new T(b,c),a.p(b),a=K(b.B^b.C))}return a}
P.prototype.$classData=v({Ua:0},"scala.util.hashing.MurmurHash3$",{Ua:1,Bb:1,a:1});var Za;class cb extends Xa{}function U(){this.X=null;db=this;this.X=new J(Aa().V);Aa()}U.prototype=new Oa;U.prototype.constructor=U;U.prototype.$classData=v({Pa:0},"scala.Console$",{Pa:1,wb:1,a:1,Ab:1});var db;function V(a,b,c){this.M=b;this.ib=c;this.ja=!0}V.prototype=new Ya;V.prototype.constructor=V;
V.prototype.n=function(a){if(this.ja){var b=this.M.e;b.b+=""+a;this.ja=!1}else eb(this.M,this.ib),b=this.M.e,b.b+=""+a};V.prototype.m=function(a){this.n(a)};V.prototype.$classData=v({hb:0},"scala.collection.TraversableOnce$appender$1",{hb:1,ma:1,a:1,s:1});function R(){this.L=this.J=this.I=0;this.K=1}R.prototype=new Ya;R.prototype.constructor=R;R.prototype.n=function(a){a=Pa(Ra(),a);this.I=this.I+a|0;this.J^=a;0!==a&&(this.K=h(this.K,a));this.L=1+this.L|0};R.prototype.m=function(a){this.n(a)};
R.prototype.$classData=v({Va:0},"scala.util.hashing.MurmurHash3$hasher$1",{Va:1,ma:1,a:1,s:1});function T(a,b){this.B=this.C=0;if(null===a)throw Sa||(Sa=new I),null;this.C=0;this.B=b}T.prototype=new Ya;T.prototype.constructor=T;T.prototype.n=function(a){this.B=L(this.B,Pa(Ra(),a));this.C=1+this.C|0};T.prototype.m=function(a){this.n(a)};T.prototype.$classData=v({Wa:0},"scala.util.hashing.MurmurHash3$hasher$2",{Wa:1,ma:1,a:1,s:1});function fb(){}fb.prototype=new r;fb.prototype.constructor=fb;
function gb(){}gb.prototype=fb.prototype;class W extends cb{}function X(){this.b=null}X.prototype=new r;X.prototype.constructor=X;X.prototype.d=function(){return this.b};X.prototype.j=function(){return this.b.length|0};X.prototype.$classData=v({Ia:0},"java.lang.StringBuilder",{Ia:1,a:1,za:1,wa:1,f:1});function hb(){}hb.prototype=new gb;hb.prototype.constructor=hb;function ib(){}ib.prototype=hb.prototype;class Da extends W{constructor(){super();M(this,"/ by zero")}}
Da.prototype.$classData=v({xa:0},"java.lang.ArithmeticException",{xa:1,z:1,w:1,A:1,a:1,f:1});class jb extends W{constructor(a){super();M(this,a)}}jb.prototype.$classData=v({Da:0},"java.lang.IndexOutOfBoundsException",{Da:1,z:1,w:1,A:1,a:1,f:1});v({Fa:0},"java.lang.JSConsoleBasedPrintStream$DummyOutputStream",{Fa:1,qa:1,a:1,oa:1,ya:1,pa:1});class kb extends W{constructor(){super();M(this,null)}}kb.prototype.$classData=v({Ha:0},"java.lang.NegativeArraySizeException",{Ha:1,z:1,w:1,A:1,a:1,f:1});
class lb extends W{constructor(){super();M(this,"tail of empty list")}}lb.prototype.$classData=v({Na:0},"java.lang.UnsupportedOperationException",{Na:1,z:1,w:1,A:1,a:1,f:1});class bb extends W{constructor(){super();M(this,"head of empty list")}}bb.prototype.$classData=v({Oa:0},"java.util.NoSuchElementException",{Oa:1,z:1,w:1,A:1,a:1,f:1});function fa(a){a=+a;return xa(ya(),a)}function p(a){for(var b=0,c=1,d=-1+(a.length|0)|0;0<=d;)b=b+h(65535&(a.charCodeAt(d)|0),c)|0,c=h(31,c),d=-1+d|0;return b}
function mb(){}mb.prototype=new ib;mb.prototype.constructor=mb;function nb(){}nb.prototype=mb.prototype;
function ob(a){a=da(a.W());for(var b=-1+(a.length|0)|0;;)if(-1!==b&&36===(65535&(a.charCodeAt(b)|0)))b=-1+b|0;else break;if(-1===b||46===(65535&(a.charCodeAt(b)|0)))return"";for(var c="";;){for(var d=1+b|0;;)if(-1!==b&&57>=(65535&(a.charCodeAt(b)|0))&&48<=(65535&(a.charCodeAt(b)|0)))b=-1+b|0;else break;for(var e=b;;)if(-1!==b&&36!==(65535&(a.charCodeAt(b)|0))&&46!==(65535&(a.charCodeAt(b)|0)))b=-1+b|0;else break;var f=1+b|0;if(b===e&&d!==(a.length|0))return c;for(;;)if(-1!==b&&36===(65535&(a.charCodeAt(b)|
0)))b=-1+b|0;else break;e=-1===b?!0:46===(65535&(a.charCodeAt(b)|0));var k;(k=e)||(k=65535&(a.charCodeAt(f)|0),k=!(90<k&&127>k||65>k));if(k&&(d=a.substring(f,d),c=""===c?d:d+"."+c,e))return c}}function z(a){this.Ga=a;this.y=""}z.prototype=new nb;z.prototype.constructor=z;z.prototype.$classData=v({Ea:0},"java.lang.JSConsoleBasedPrintStream",{Ea:1,sb:1,rb:1,qa:1,a:1,oa:1,ya:1,pa:1,wa:1});function Y(){}Y.prototype=new r;Y.prototype.constructor=Y;function pb(){}pb.prototype=Y.prototype;
Y.prototype.W=function(){return this};Y.prototype.N=function(){return ob(this)};function qb(a,b){for(var c=0,d=a.j();c<d;)b.m(a.Q(c)),c=1+c|0}function rb(){}rb.prototype=new pb;rb.prototype.constructor=rb;function sb(){}sb.prototype=rb.prototype;function Ea(a,b){var c=tb(),d=-1+b|0;if(!(0>=b))for(b=0;;){eb(c,a.d());if(b===d)break;b=1+b|0}return c.e.b}function C(a){this.r=a}C.prototype=new r;C.prototype.constructor=C;g=C.prototype;g.h=function(){return 0===this.j()};g.p=function(a){qb(this,a)};
g.N=function(){return ob(this)};g.d=function(){return this.r};g.j=function(){return this.r.length|0};g.g=function(){return p(this.r)};g.Q=function(a){return new m(65535&(this.r.charCodeAt(a)|0))};g.W=function(){return this.r};g.$classData=v({mb:0},"scala.collection.immutable.StringOps",{mb:1,a:1,lb:1,db:1,cb:1,ga:1,ea:1,Y:1,ha:1,la:1,ka:1,ia:1,da:1,ca:1,fa:1,aa:1,ba:1,Sa:1,Ba:1});function Z(){}Z.prototype=new sb;Z.prototype.constructor=Z;function ub(){}ub.prototype=Z.prototype;
Z.prototype.d=function(){var a=this.N()+"(",b=tb();eb(b,a);this.p(new V(this,b,", "));eb(b,")");return b.e.b};function vb(){}vb.prototype=new ub;vb.prototype.constructor=vb;function wb(){}wb.prototype=vb.prototype;function S(){}S.prototype=new ub;S.prototype.constructor=S;function yb(){}yb.prototype=S.prototype;S.prototype.g=function(){return ab(this)};S.prototype.p=function(){for(;!this.h();)throw new bb;};S.prototype.N=function(){return"List"};
S.prototype.m=function(a){for(a|=0;!this.h()&&0<a;)throw new lb;if(0>a||this.h())throw new jb(""+a);throw new bb;};function Q(){}Q.prototype=new yb;Q.prototype.constructor=Q;Q.prototype.h=function(){return!0};Q.prototype.$classData=v({kb:0},"scala.collection.immutable.Nil$",{kb:1,Kb:1,Ya:1,Xa:1,Za:1,a:1,gb:1,ha:1,la:1,ka:1,ia:1,da:1,ca:1,fa:1,bb:1,jb:1,eb:1,$a:1,aa:1,ea:1,Y:1,fb:1,Qa:1,s:1,ab:1,ba:1,ga:1,Jb:1,Lb:1,Ib:1,Mb:1,xb:1,Db:1,Eb:1,zb:1,Fb:1,Ra:1,f:1});var $a;
function tb(){var a=new zb,b=16,c=new X;c.b="";if(0>b)throw new kb;c.b=""+c.b;a.e=c;return a}function zb(){this.e=null}zb.prototype=new wb;zb.prototype.constructor=zb;g=zb.prototype;g.p=function(a){qb(this,a)};g.g=function(){return ab(this)};g.j=function(){return this.e.j()};function eb(a,b){a=a.e;a.b=""+a.b+b}g.d=function(){return this.e.b};g.h=function(){return 0===this.e.j()};g.m=function(a){this.e.b.charCodeAt(a|0)};g.Q=function(a){return new m(65535&(this.e.b.charCodeAt(a)|0))};
g.$classData=v({nb:0},"scala.collection.mutable.StringBuilder",{nb:1,Nb:1,Ya:1,Xa:1,Za:1,a:1,gb:1,ha:1,la:1,ka:1,ia:1,da:1,ca:1,fa:1,bb:1,jb:1,eb:1,$a:1,aa:1,ea:1,Y:1,fb:1,Qa:1,s:1,ab:1,ba:1,ga:1,Ub:1,Sb:1,Wb:1,yb:1,Vb:1,Pb:1,vb:1,Aa:1,za:1,Qb:1,Cb:1,cb:1,Rb:1,lb:1,db:1,Sa:1,Ba:1,Tb:1,Ob:1,Hb:1,Gb:1,Ra:1,f:1});l=new n(0,0);va.na=l;exports.mdoc_js_run7=function(a){E();var b=aa(+(new Date).getTime());a.innerHTML="Hello from npm package 'ms': "+b};exports.mdoc_js_run4=function(a){Ga(E(),a)};
exports.mdoc_js_run1=function(a){Ba(E(),a)};exports.mdoc_js_run5=function(a){E();var b="Loading HTML: "+a.innerHTML;db||(db=new U);a=db.X.Z;for(b+="\n";""!==b;){var c=b.indexOf("\n")|0;if(0>c)a.y=""+a.y+b,b="";else{var d=""+a.y+b.substring(0,c);"undefined"!==typeof console&&(a.Ga&&console.error?console.error(d):console.log(d));a.y="";b=b.substring(1+c|0)}}};exports.mdoc_js_run6=function(a){Ha(E(),a)};exports.mdoc_js_run3=function(a){Fa(E(),a)};
