(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r)){b[r]=a[r]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++){inherit(b[t],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t){A.du(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.bf(b)
return new t(c,this)}:function(){if(t===null)t=A.bf(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.bf(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
bi(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bg(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.bh==null){A.di()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.b(A.bw("Return interceptor for "+A.z(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.aU
if(p==null)p=$.aU=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.dn(a)
if(q!=null)return q
if(typeof a=="function")return B.n
t=Object.getPrototypeOf(a)
if(t==null)return B.e
if(t===Object.prototype)return B.e
if(typeof r=="function"){p=$.aU
if(p==null)p=$.aU=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.b,enumerable:false,writable:true,configurable:true})
return B.b}return B.b},
H(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ae.prototype
return J.af.prototype}if(typeof a=="string")return J.P.prototype
if(a==null)return J.O.prototype
if(typeof a=="boolean")return J.ad.prototype
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.x.prototype
if(typeof a=="symbol")return J.S.prototype
if(typeof a=="bigint")return J.Q.prototype
return a}if(a instanceof A.j)return a
return J.bg(a)},
bY(a){if(typeof a=="string")return J.P.prototype
if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.x.prototype
if(typeof a=="symbol")return J.S.prototype
if(typeof a=="bigint")return J.Q.prototype
return a}if(a instanceof A.j)return a
return J.bg(a)},
dd(a){if(a==null)return a
if(Array.isArray(a))return J.p.prototype
if(typeof a!="object"){if(typeof a=="function")return J.x.prototype
if(typeof a=="symbol")return J.S.prototype
if(typeof a=="bigint")return J.Q.prototype
return a}if(a instanceof A.j)return a
return J.bg(a)},
c6(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.H(a).n(a,b)},
az(a){return J.H(a).gj(a)},
c7(a){return J.dd(a).gG(a)},
bj(a){return J.bY(a).gl(a)},
c8(a){return J.H(a).gi(a)},
a9(a){return J.H(a).h(a)},
ac:function ac(){},
ad:function ad(){},
O:function O(){},
R:function R(){},
y:function y(){},
as:function as(){},
a_:function a_(){},
x:function x(){},
Q:function Q(){},
S:function S(){},
p:function p(a){this.$ti=a},
aG:function aG(a){this.$ti=a},
aa:function aa(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ag:function ag(){},
ae:function ae(){},
af:function af(){},
P:function P(){}},A={b6:function b6(){},
c0(a){var t,s
for(t=$.w.length,s=0;s<t;++s)if(a===$.w[s])return!0
return!1},
aH:function aH(a){this.a=a},
ah:function ah(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
l:function l(){},
c4(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
dN(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
z(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.a9(a)
return t},
at(a){var t,s=$.bt
if(s==null)s=$.bt=Symbol("identityHashCode")
t=a[s]
if(t==null){t=Math.random()*0x3fffffff|0
a[s]=t}return t},
aK(a){return A.cm(a)},
cm(a){var t,s,r,q
if(a instanceof A.j)return A.n(A.a7(a),null)
t=J.H(a)
if(t===B.m||t===B.o||u.o.b(a)){s=B.c(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.n(A.a7(a),null)},
cn(a){if(typeof a=="number"||A.bd(a))return J.a9(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.C)return a.h(0)
return"Instance of '"+A.aK(a)+"'"},
b3(a,b){if(a==null)J.bj(a)
throw A.b(A.bW(a,b))},
bW(a,b){var t,s="index"
if(!A.bQ(b))return new A.M(!0,b,s,null)
t=J.bj(a)
if(b<0||b>=t)return A.ci(b,t,a,s)
return new A.aL(null,null,!0,b,s,"Value not in range")},
b(a){return A.c_(new Error(),a)},
c_(a,b){var t
if(b==null)b=new A.aP()
a.dartException=b
t=A.dw
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:t})
a.name=""}else a.toString=t
return a},
dw(){return J.a9(this.dartException)},
dt(a){throw A.b(a)},
c3(a,b){throw A.c_(b,a)},
dv(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.c3(A.cQ(a,b,c),t)},
cQ(a,b,c){var t,s,r,q,p,o,n,m,l
if(typeof b=="string")t=b
else{s="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
r=s.length
q=b
if(q>r){c=q/r|0
q%=r}t=s[q]}p=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
o=u.j.b(a)?"list":"ByteData"
n=a.$flags|0
m="a "
if((n&4)!==0)l="constant "
else if((n&2)!==0){l="unmodifiable "
m="an "}else l=(n&1)!==0?"fixed-length ":""
return new A.aR("'"+t+"': Cannot "+p+" "+m+l+o)},
ds(a){throw A.b(A.b5(a))},
dr(a){if(a==null)return J.az(a)
if(typeof a=="object")return A.at(a)
return J.az(a)},
dc(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=a.length
for(t=b.$ti,s=t.c,t=t.y[1],r=0;r<g;){q=r+1
p=a[r]
r=q+1
o=a[q]
s.a(p)
t.a(o)
if(typeof p=="string"){n=b.b
if(n==null){m=Object.create(null)
m["<non-identifier-key>"]=m
delete m["<non-identifier-key>"]
b.b=m
n=m}l=n[p]
if(l==null)n[p]=b.p(p,o)
else l.b=o}else if(typeof p=="number"&&(p&0x3fffffff)===p){k=b.c
if(k==null){m=Object.create(null)
m["<non-identifier-key>"]=m
delete m["<non-identifier-key>"]
b.c=m
k=m}l=k[p]
if(l==null)k[p]=b.p(p,o)
else l.b=o}else{j=b.d
if(j==null){m=Object.create(null)
m["<non-identifier-key>"]=m
delete m["<non-identifier-key>"]
b.d=m
j=m}i=J.az(p)&1073741823
h=j[i]
if(h==null)j[i]=[b.p(p,o)]
else{q=b.F(h,p)
if(q>=0)h[q].b=o
else h.push(b.p(p,o))}}}return b},
cf(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.aN().constructor.prototype):Object.create(new A.N(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.bo(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.cb(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.bo(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
cb(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.c9)}throw A.b("Error in functionType of tearoff")},
cc(a,b,c,d){var t=A.bn
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
bo(a,b,c,d){if(c)return A.ce(a,b,d)
return A.cc(b.length,d,a,b)},
cd(a,b,c,d){var t=A.bn,s=A.ca
switch(b?-1:a){case 0:throw A.b(new A.aM("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
ce(a,b,c){var t,s
if($.bl==null)$.bl=A.bk("interceptor")
if($.bm==null)$.bm=A.bk("receiver")
t=b.length
s=A.cd(t,c,a,b)
return s},
bf(a){return A.cf(a)},
c9(a,b){return A.aW(v.typeUniverse,A.a7(a.a),b)},
bn(a){return a.a},
ca(a){return a.b},
bk(a){var t,s,r,q=new A.N("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.b(new A.M(!1,null,null,"Field name "+a+" not found."))},
dO(a){throw A.b(new A.aS(a))},
de(a){return v.getIsolateTag(a)},
dn(a){var t,s,r,q,p,o=A.bK($.bZ.$1(a)),n=$.aZ[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.b2[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.cO($.bU.$2(a,o))
if(r!=null){n=$.aZ[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.b2[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.b4(t)
$.aZ[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.b2[o]=t
return t}if(q==="-"){p=A.b4(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.c1(a,t)
if(q==="*")throw A.b(A.bw(o))
if(v.leafTags[o]===true){p=A.b4(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.c1(a,t)},
c1(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.bi(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
b4(a){return J.bi(a,!1,null,!!a.$io)},
dq(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.b4(t)
else return J.bi(t,c,null,null)},
di(){if(!0===$.bh)return
$.bh=!0
A.dj()},
dj(){var t,s,r,q,p,o,n,m
$.aZ=Object.create(null)
$.b2=Object.create(null)
A.dh()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.c2.$1(p)
if(o!=null){n=A.dq(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
dh(){var t,s,r,q,p,o,n=B.f()
n=A.K(B.h,A.K(B.i,A.K(B.d,A.K(B.d,A.K(B.j,A.K(B.k,A.K(B.l(B.c),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.bZ=new A.b_(q)
$.bU=new A.b0(p)
$.c2=new A.b1(o)},
K(a,b){return a(b)||b},
db(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
C:function C(){},
aB:function aB(){},
aO:function aO(){},
aN:function aN(){},
N:function N(a,b){this.a=a
this.b=b},
aS:function aS(a){this.a=a},
aM:function aM(a){this.a=a},
T:function T(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
aI:function aI(a,b){this.a=a
this.b=b
this.c=null},
b_:function b_(a){this.a=a},
b0:function b0(a){this.a=a},
b1:function b1(a){this.a=a},
F(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.bW(b,a))},
ai:function ai(){},
X:function X(){},
aj:function aj(){},
I:function I(){},
V:function V(){},
W:function W(){},
ak:function ak(){},
al:function al(){},
am:function am(){},
an:function an(){},
ao:function ao(){},
ap:function ap(){},
aq:function aq(){},
Y:function Y(){},
ar:function ar(){},
a0:function a0(){},
a1:function a1(){},
a2:function a2(){},
a3:function a3(){},
bu(a,b){var t=b.c
return t==null?b.c=A.bb(a,b.x,!0):t},
b8(a,b){var t=b.c
return t==null?b.c=A.a5(a,"bp",[b.x]):t},
bv(a){var t=a.w
if(t===6||t===7||t===8)return A.bv(a.x)
return t===12||t===13},
co(a){return a.as},
bX(a){return A.ax(v.typeUniverse,a,!1)},
B(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.B(a0,t,a2,a3)
if(s===t)return a1
return A.bG(a0,s,!0)
case 7:t=a1.x
s=A.B(a0,t,a2,a3)
if(s===t)return a1
return A.bb(a0,s,!0)
case 8:t=a1.x
s=A.B(a0,t,a2,a3)
if(s===t)return a1
return A.bE(a0,s,!0)
case 9:r=a1.y
q=A.J(a0,r,a2,a3)
if(q===r)return a1
return A.a5(a0,a1.x,q)
case 10:p=a1.x
o=A.B(a0,p,a2,a3)
n=a1.y
m=A.J(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.b9(a0,o,m)
case 11:l=a1.x
k=a1.y
j=A.J(a0,k,a2,a3)
if(j===k)return a1
return A.bF(a0,l,j)
case 12:i=a1.x
h=A.B(a0,i,a2,a3)
g=a1.y
f=A.d8(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.bD(a0,h,f)
case 13:e=a1.y
a3+=e.length
d=A.J(a0,e,a2,a3)
p=a1.x
o=A.B(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.ba(a0,o,d,!0)
case 14:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.b(A.ab("Attempted to substitute unexpected RTI kind "+a))}},
J(a,b,c,d){var t,s,r,q,p=b.length,o=A.aX(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.B(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
d9(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.aX(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.B(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
d8(a,b,c,d){var t,s=b.a,r=A.J(a,s,c,d),q=b.b,p=A.J(a,q,c,d),o=b.c,n=A.d9(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.av()
t.a=r
t.b=p
t.c=n
return t},
bT(a,b){a[v.arrayRti]=b
return a},
bV(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.dg(t)
return a.$S()}return null},
dk(a,b){var t
if(A.bv(b))if(a instanceof A.C){t=A.bV(a)
if(t!=null)return t}return A.a7(a)},
a7(a){if(a instanceof A.j)return A.bO(a)
if(Array.isArray(a))return A.aY(a)
return A.bc(J.H(a))},
aY(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
bO(a){var t=a.$ti
return t!=null?t:A.bc(a)},
bc(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.cX(a,t)},
cX(a,b){var t=a instanceof A.C?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.cK(v.typeUniverse,t.name)
b.$ccache=s
return s},
dg(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.ax(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
df(a){return A.G(A.bO(a))},
d7(a){var t=a instanceof A.C?A.bV(a):null
if(t!=null)return t
if(u.R.b(a))return J.c8(a).a
if(Array.isArray(a))return A.aY(a)
return A.a7(a)},
G(a){var t=a.r
return t==null?a.r=A.bL(a):t},
bL(a){var t,s,r=a.as,q=r.replace(/\*/g,"")
if(q===r)return a.r=new A.aV(a)
t=A.ax(v.typeUniverse,q,!0)
s=t.r
return s==null?t.r=A.bL(t):s},
r(a){return A.G(A.ax(v.typeUniverse,a,!1))},
cW(a){var t,s,r,q,p,o,n=this
if(n===u.K)return A.u(n,a,A.d1)
if(!A.v(n))t=n===u._
else t=!0
if(t)return A.u(n,a,A.d5)
t=n.w
if(t===7)return A.u(n,a,A.cU)
if(t===1)return A.u(n,a,A.bR)
s=t===6?n.x:n
r=s.w
if(r===8)return A.u(n,a,A.cY)
if(s===u.S)q=A.bQ
else if(s===u.i||s===u.H)q=A.d0
else if(s===u.N)q=A.d3
else q=s===u.y?A.bd:null
if(q!=null)return A.u(n,a,q)
if(r===9){p=s.x
if(s.y.every(A.dl)){n.f="$i"+p
if(p==="d")return A.u(n,a,A.d_)
return A.u(n,a,A.d4)}}else if(r===11){o=A.db(s.x,s.y)
return A.u(n,a,o==null?A.bR:o)}return A.u(n,a,A.cS)},
u(a,b,c){a.b=c
return a.b(b)},
cV(a){var t,s=this,r=A.cR
if(!A.v(s))t=s===u._
else t=!0
if(t)r=A.cP
else if(s===u.K)r=A.cN
else{t=A.a8(s)
if(t)r=A.cT}s.a=r
return s.a(a)},
ay(a){var t=a.w,s=!0
if(!A.v(a))if(!(a===u._))if(!(a===u.A))if(t!==7)if(!(t===6&&A.ay(a.x)))s=t===8&&A.ay(a.x)||a===u.P||a===u.T
return s},
cS(a){var t=this
if(a==null)return A.ay(t)
return A.dm(v.typeUniverse,A.dk(a,t),t)},
cU(a){if(a==null)return!0
return this.x.b(a)},
d4(a){var t,s=this
if(a==null)return A.ay(s)
t=s.f
if(a instanceof A.j)return!!a[t]
return!!J.H(a)[t]},
d_(a){var t,s=this
if(a==null)return A.ay(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.j)return!!a[t]
return!!J.H(a)[t]},
cR(a){var t=this
if(a==null){if(A.a8(t))return a}else if(t.b(a))return a
A.bM(a,t)},
cT(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.bM(a,t)},
bM(a,b){throw A.b(A.cA(A.bx(a,A.n(b,null))))},
bx(a,b){return A.aE(a)+": type '"+A.n(A.d7(a),null)+"' is not a subtype of type '"+b+"'"},
cA(a){return new A.aw("TypeError: "+a)},
m(a,b){return new A.aw("TypeError: "+A.bx(a,b))},
cY(a){var t=this,s=t.w===6?t.x:t
return s.x.b(a)||A.b8(v.typeUniverse,s).b(a)},
d1(a){return a!=null},
cN(a){if(a!=null)return a
throw A.b(A.m(a,"Object"))},
d5(a){return!0},
cP(a){return a},
bR(a){return!1},
bd(a){return!0===a||!1===a},
dC(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.m(a,"bool"))},
dE(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.m(a,"bool"))},
dD(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.m(a,"bool?"))},
dF(a){if(typeof a=="number")return a
throw A.b(A.m(a,"double"))},
dH(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.m(a,"double"))},
dG(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.m(a,"double?"))},
bQ(a){return typeof a=="number"&&Math.floor(a)===a},
bJ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.m(a,"int"))},
dJ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.m(a,"int"))},
dI(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.m(a,"int?"))},
d0(a){return typeof a=="number"},
dK(a){if(typeof a=="number")return a
throw A.b(A.m(a,"num"))},
dL(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.m(a,"num"))},
cM(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.m(a,"num?"))},
d3(a){return typeof a=="string"},
bK(a){if(typeof a=="string")return a
throw A.b(A.m(a,"String"))},
dM(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.m(a,"String"))},
cO(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.m(a,"String?"))},
bS(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.n(a[r],b)
return t},
d6(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.bS(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.n(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
bN(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){t=a5.length
if(a4==null)a4=A.bT([],u.s)
else a2=a4.length
s=a4.length
for(r=t;r>0;--r)B.a.A(a4,"T"+(s+r))
for(q=u.X,p=u._,o="<",n="",r=0;r<t;++r,n=a1){m=a4.length
l=m-1-r
if(!(l>=0))return A.b3(a4,l)
o=o+n+a4[l]
k=a5[r]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===q))m=k===p
else m=!0
if(!m)o+=" extends "+A.n(k,a4)}o+=">"}else o=""
q=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.n(q,a4)
for(a="",a0="",r=0;r<g;++r,a0=a1)a+=a0+A.n(h[r],a4)
if(e>0){a+=a0+"["
for(a0="",r=0;r<e;++r,a0=a1)a+=a0+A.n(f[r],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",r=0;r<c;r+=3,a0=a1){a+=a0
if(d[r+1])a+="required "
a+=A.n(d[r+2],a4)+" "+d[r]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
n(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6)return A.n(a.x,b)
if(m===7){t=a.x
s=A.n(t,b)
r=t.w
return(r===12||r===13?"("+s+")":s)+"?"}if(m===8)return"FutureOr<"+A.n(a.x,b)+">"
if(m===9){q=A.da(a.x)
p=a.y
return p.length>0?q+("<"+A.bS(p,b)+">"):q}if(m===11)return A.d6(a,b)
if(m===12)return A.bN(a,b,null)
if(m===13)return A.bN(a.x,b,a.y)
if(m===14){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.b3(b,o)
return b[o]}return"?"},
da(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
cL(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
cK(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.ax(a,b,!1)
else if(typeof n=="number"){t=n
s=A.a6(a,5,"#")
r=A.aX(t)
for(q=0;q<t;++q)r[q]=s
p=A.a5(a,b,r)
o[b]=p
return p}else return n},
cI(a,b){return A.bH(a.tR,b)},
cH(a,b){return A.bH(a.eT,b)},
ax(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.bB(A.bz(a,null,b,c))
s.set(b,t)
return t},
aW(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.bB(A.bz(a,b,c,!0))
r.set(c,s)
return s},
cJ(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.b9(a,b,c.w===10?c.y:[c])
q.set(t,r)
return r},
t(a,b){b.a=A.cV
b.b=A.cW
return b},
a6(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.q(null,null)
t.w=b
t.as=c
s=A.t(a,t)
a.eC.set(c,s)
return s},
bG(a,b,c){var t,s=b.as+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.cF(a,b,s,c)
a.eC.set(s,t)
return t},
cF(a,b,c,d){var t,s,r
if(d){t=b.w
if(!A.v(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.q(null,null)
r.w=6
r.x=b
r.as=c
return A.t(a,r)},
bb(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.cE(a,b,s,c)
a.eC.set(s,t)
return t},
cE(a,b,c,d){var t,s,r,q
if(d){t=b.w
s=!0
if(!A.v(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.a8(b.x)
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.x
if(r.w===8&&A.a8(r.x))return r
else return A.bu(a,b)}}q=new A.q(null,null)
q.w=7
q.x=b
q.as=c
return A.t(a,q)},
bE(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.cC(a,b,s,c)
a.eC.set(s,t)
return t},
cC(a,b,c,d){var t,s
if(d){t=b.w
if(A.v(b)||b===u.K||b===u._)return b
else if(t===1)return A.a5(a,"bp",[b])
else if(b===u.P||b===u.T)return u.O}s=new A.q(null,null)
s.w=8
s.x=b
s.as=c
return A.t(a,s)},
cG(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.q(null,null)
t.w=14
t.x=b
t.as=r
s=A.t(a,t)
a.eC.set(r,s)
return s},
a4(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
cB(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
a5(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.a4(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.q(null,null)
s.w=9
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.t(a,s)
a.eC.set(q,r)
return r},
b9(a,b,c){var t,s,r,q,p,o
if(b.w===10){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.a4(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.q(null,null)
p.w=10
p.x=t
p.y=s
p.as=r
o=A.t(a,p)
a.eC.set(r,o)
return o},
bF(a,b,c){var t,s,r="+"+(b+"("+A.a4(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.q(null,null)
t.w=11
t.x=b
t.y=c
t.as=r
s=A.t(a,t)
a.eC.set(r,s)
return s},
bD(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.a4(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.a4(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.cB(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.q(null,null)
q.w=12
q.x=b
q.y=c
q.as=s
p=A.t(a,q)
a.eC.set(s,p)
return p},
ba(a,b,c,d){var t,s=b.as+("<"+A.a4(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.cD(a,b,c,s,d)
a.eC.set(s,t)
return t},
cD(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.aX(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.B(a,b,s,0)
n=A.J(a,c,s,0)
return A.ba(a,o,n,c!==n)}}m=new A.q(null,null)
m.w=13
m.x=b
m.y=c
m.as=d
return A.t(a,m)},
bz(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
bB(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.cv(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.bA(a,s,m,l,!1)
else if(r===46)s=A.bA(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.A(a.u,a.e,l.pop()))
break
case 94:l.push(A.cG(a.u,l.pop()))
break
case 35:l.push(A.a6(a.u,5,"#"))
break
case 64:l.push(A.a6(a.u,2,"@"))
break
case 126:l.push(A.a6(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.cx(a,l)
break
case 38:A.cw(a,l)
break
case 42:q=a.u
l.push(A.bG(q,A.A(q,a.e,l.pop()),a.n))
break
case 63:q=a.u
l.push(A.bb(q,A.A(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.bE(q,A.A(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.cu(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.bC(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.cz(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.A(a.u,a.e,n)},
cv(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
bA(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===10)p=p.x
o=A.cL(t,p.x)[q]
if(o==null)A.dt('No "'+q+'" in "'+A.co(p)+'"')
d.push(A.aW(t,p,o))}else d.push(q)
return n},
cx(a,b){var t,s=a.u,r=A.by(a,b),q=b.pop()
if(typeof q=="string")b.push(A.a5(s,q,r))
else{t=A.A(s,a.e,q)
switch(t.w){case 12:b.push(A.ba(s,t,r,a.n))
break
default:b.push(A.b9(s,t,r))
break}}},
cu(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.by(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.A(q,a.e,p)
r=new A.av()
r.a=t
r.b=o
r.c=n
b.push(A.bD(q,s,r))
return
case-4:b.push(A.bF(q,b.pop(),t))
return
default:throw A.b(A.ab("Unexpected state under `()`: "+A.z(p)))}},
cw(a,b){var t=b.pop()
if(0===t){b.push(A.a6(a.u,1,"0&"))
return}if(1===t){b.push(A.a6(a.u,4,"1&"))
return}throw A.b(A.ab("Unexpected extended operation "+A.z(t)))},
by(a,b){var t=b.splice(a.p)
A.bC(a.u,a.e,t)
a.p=b.pop()
return t},
A(a,b,c){if(typeof c=="string")return A.a5(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.cy(a,b,c)}else return c},
bC(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.A(a,b,c[t])},
cz(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.A(a,b,c[t])},
cy(a,b,c){var t,s,r=b.w
if(r===10){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==9)throw A.b(A.ab("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.b(A.ab("Bad index "+c+" for "+b.h(0)))},
dm(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.i(a,b,null,c,null,!1)?1:0
s.set(c,t)}if(0===t)return!1
if(1===t)return!0
return!0},
i(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.v(d))t=d===u._
else t=!0
if(t)return!0
s=b.w
if(s===4)return!0
if(A.v(b))return!1
t=b.w
if(t===1)return!0
r=s===14
if(r)if(A.i(a,c[b.x],c,d,e,!1))return!0
q=d.w
t=b===u.P||b===u.T
if(t){if(q===8)return A.i(a,b,c,d.x,e,!1)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.i(a,b.x,c,d,e,!1)
if(s===6)return A.i(a,b.x,c,d,e,!1)
return s!==7}if(s===6)return A.i(a,b.x,c,d,e,!1)
if(q===6){t=A.bu(a,d)
return A.i(a,b,c,t,e,!1)}if(s===8){if(!A.i(a,b.x,c,d,e,!1))return!1
return A.i(a,A.b8(a,b),c,d,e,!1)}if(s===7){t=A.i(a,u.P,c,d,e,!1)
return t&&A.i(a,b.x,c,d,e,!1)}if(q===8){if(A.i(a,b,c,d.x,e,!1))return!0
return A.i(a,b,c,A.b8(a,d),e,!1)}if(q===7){t=A.i(a,b,c,u.P,e,!1)
return t||A.i(a,b,c,d.x,e,!1)}if(r)return!1
t=s!==12
if((!t||s===13)&&d===u.Z)return!0
p=s===11
if(p&&d===u.L)return!0
if(q===13){if(b===u.g)return!0
if(s!==13)return!1
o=b.y
n=d.y
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.i(a,k,c,j,e,!1)||!A.i(a,j,e,k,c,!1))return!1}return A.bP(a,b.x,c,d.x,e,!1)}if(q===12){if(b===u.g)return!0
if(t)return!1
return A.bP(a,b,c,d,e,!1)}if(s===9){if(q!==9)return!1
return A.cZ(a,b,c,d,e,!1)}if(p&&q===11)return A.d2(a,b,c,d,e,!1)
return!1},
bP(a2,a3,a4,a5,a6,a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.i(a2,a3.x,a4,a5.x,a6,!1))return!1
t=a3.y
s=a5.y
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.i(a2,q[i],a6,h,a4,!1))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.i(a2,q[p+i],a6,h,a4,!1))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.i(a2,l[i],a6,h,a4,!1))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.i(a2,f[b+2],a6,h,a4,!1))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
cZ(a,b,c,d,e,f){var t,s,r,q,p,o=b.x,n=d.x
for(;o!==n;){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.aW(a,b,s[p])
return A.bI(a,q,null,c,d.y,e,!1)}return A.bI(a,b.y,null,c,d.y,e,!1)},
bI(a,b,c,d,e,f,g){var t,s=b.length
for(t=0;t<s;++t)if(!A.i(a,b[t],d,e[t],f,!1))return!1
return!0},
d2(a,b,c,d,e,f){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.i(a,s[t],c,r[t],e,!1))return!1
return!0},
a8(a){var t=a.w,s=!0
if(!(a===u.P||a===u.T))if(!A.v(a))if(t!==7)if(!(t===6&&A.a8(a.x)))s=t===8&&A.a8(a.x)
return s},
dl(a){var t
if(!A.v(a))t=a===u._
else t=!0
return t},
v(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
bH(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
aX(a){return a>0?new Array(a):v.typeUniverse.sEA},
q:function q(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
av:function av(){this.c=this.b=this.a=null},
aV:function aV(a){this.a=a},
aT:function aT(){},
aw:function aw(a){this.a=a},
D(a,b,c){return b.m("@<0>").D(c).m("br<1,2>").a(A.dc(a,new A.T(b.m("@<0>").D(c).m("T<1,2>"))))},
bs(a){var t,s={}
if(A.c0(a))return"{...}"
t=new A.au("")
try{B.a.A($.w,a)
t.a+="{"
s.a=!0
a.I(0,new A.aJ(s,t))
t.a+="}"}finally{if(0>=$.w.length)return A.b3($.w,-1)
$.w.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
f:function f(){},
U:function U(){},
aJ:function aJ(a,b){this.a=a
this.b=b},
cp(a,b,c){var t=J.c7(b)
if(!t.t())return a
if(c.length===0){do a+=A.z(t.gq())
while(t.t())}else{a+=A.z(t.gq())
for(;t.t();)a=a+c+A.z(t.gq())}return a},
aE(a){if(typeof a=="number"||A.bd(a)||a==null)return J.a9(a)
if(typeof a=="string")return JSON.stringify(a)
return A.cn(a)},
ab(a){return new A.aA(a)},
ci(a,b,c,d){return new A.aF(b,!0,a,d,"Index out of range")},
bw(a){return new A.aQ(a)},
b5(a){return new A.aC(a)},
bq(a,b,c){var t,s
if(A.c0(a))return b+"..."+c
t=new A.au(b)
B.a.A($.w,a)
try{s=t
s.a=A.cp(s.a,a,", ")}finally{if(0>=$.w.length)return A.b3($.w,-1)
$.w.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
aD:function aD(){},
aA:function aA(a){this.a=a},
aP:function aP(){},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aL:function aL(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aF:function aF(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aR:function aR(a){this.a=a},
aQ:function aQ(a){this.a=a},
aC:function aC(a){this.a=a},
Z:function Z(){},
j:function j(){},
au:function au(a){this.a=a},
du(a){A.c3(new A.aH("Field '"+a+"' has been assigned during initialization."),new Error())},
dp(){var t,s,r,q,p,o,n,m,l,k,j,i=u.m,h=i.a(self.document)
h.title="Task Flow Privacy Policy"
t=i.a(h.createElement("div"))
t.id="content"
s=u.z
s.a(h.body).append(t)
r=i.a(h.createElement("h1"))
r.textContent="Task Flow Privacy Policy"
t.append(r)
q=i.a(h.createElement("div"))
i.a(q.classList).add("container")
t.append(q)
p=u.N
o=[A.D(["title","Last updated:","content","January 1, 2025"],p,p),A.D(["title","Introduction","content",'This Privacy Policy describes how Task Flow ("we," "our," or "us") handles information through our mobile application ("Task Flow" or "the App"). We are committed to protecting your privacy and ensuring you have a positive experience when using our application.'],p,p),A.D(["title","Information Collection and Use","content","Task Flow has been designed with your privacy in mind."],p,p),A.D(["title","Information We Do Not Collect","content","We do not collect, store, or process any data. This includes, but is not limited to:\n\n\u2022 Personal identification information\n\u2022 Email addresses or contact information\n\u2022 Geographic location data\n\u2022 Device information or identifiers\n\u2022 Usage patterns or statistics\n\nAll data is stored locally on your device and is not transmitted to our servers or any third parties."],p,p),A.D(["title","Third-Party Data Collection","content","Please note that the app distribution platforms (Google Play Store and Apple App Store) may collect certain information in accordance with their respective privacy policies:\n\n\u2022 Basic installation metrics\n\u2022 App usage statistics (anonymized)\n\u2022 Device-specific information (operating system version, device model)\n\u2022 Crash reports and performance data\n\nFor more information about their data collection practices, please refer to:\n\n\u2022 Google Play Store Privacy Policy\n\u2022 Apple App Store Privacy Policy"],p,p),A.D(["title","Data Security","content","While we do not collect personal data, we are committed to ensuring that our application maintains high security standards to protect your device and usage experience."],p,p),A.D(["title","Changes to This Privacy Policy","content",'We reserve the right to update or change our Privacy Policy at any time. Any modifications will be effective immediately upon posting the updated Privacy Policy. We will notify you of any material changes by updating the "Last updated" date at the top of this Privacy Policy.'],p,p),A.D(["title","Compliance","content","This Privacy Policy is compliant with applicable privacy laws and regulations. By using Task Flow, you agree to the terms outlined in this Privacy Policy."],p,p)]
for(n=0;n<8;++n){m=o[n]
if(m.k(0,"title")!=="Last updated:"){l=i.a(h.createElement("h2"))
p=m.k(0,"title")
p.toString
l.textContent=p
q.append(l)}k=i.a(h.createElement("p"))
p=m.k(0,"content")
p.toString
k.innerHTML=p
q.append(k)}j=i.a(h.createElement("style"))
j.textContent="    body {\n      margin: 0;\n      font-family: sans-serif;\n      line-height: 1.6;\n    }\n\n    .container {\n      max-width: 800px;\n      margin: 0 auto;\n      padding: 20px;\n    }\n\n    h1 {\n      margin-bottom: 20px;\n      text-align: center;\n    }\n\n    h2 {\n      color: #333;\n      margin-top: 30px;\n      margin-bottom: 15px;\n    }\n\n    p {\n      margin-bottom: 20px;\n      text-align: justify;\n    }\n  "
s.a(h.head).append(j)}},B={}
var w=[A,J,B]
var $={}
A.b6.prototype={}
J.ac.prototype={
n(a,b){return a===b},
gj(a){return A.at(a)},
h(a){return"Instance of '"+A.aK(a)+"'"},
gi(a){return A.G(A.bc(this))}}
J.ad.prototype={
h(a){return String(a)},
gj(a){return a?519018:218159},
gi(a){return A.G(u.y)},
$ic:1,
$ibe:1}
J.O.prototype={
n(a,b){return null==b},
h(a){return"null"},
gj(a){return 0},
$ic:1}
J.R.prototype={$ik:1}
J.y.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.as.prototype={}
J.a_.prototype={}
J.x.prototype={
h(a){var t=a[$.c5()]
if(t==null)return this.H(a)
return"JavaScript function for "+J.a9(t)}}
J.Q.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.S.prototype={
gj(a){return 0},
h(a){return String(a)}}
J.p.prototype={
A(a,b){A.aY(a).c.a(b)
a.$flags&1&&A.dv(a,29)
a.push(b)},
h(a){return A.bq(a,"[","]")},
gG(a){return new J.aa(a,a.length,A.aY(a).m("aa<1>"))},
gj(a){return A.at(a)},
gl(a){return a.length},
$ih:1,
$id:1}
J.aG.prototype={}
J.aa.prototype={
gq(){var t=this.d
return t==null?this.$ti.c.a(t):t},
t(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.ds(r)
throw A.b(r)}t=s.c
if(t>=q){s.sE(null)
return!1}s.sE(r[t]);++s.c
return!0},
sE(a){this.d=this.$ti.m("1?").a(a)}}
J.ag.prototype={
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gj(a){var t,s,r,q,p=a|0
if(a===p)return p&536870911
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259&536870911},
gi(a){return A.G(u.H)},
$ie:1,
$iL:1}
J.ae.prototype={
gi(a){return A.G(u.S)},
$ic:1,
$ia:1}
J.af.prototype={
gi(a){return A.G(u.i)},
$ic:1}
J.P.prototype={
h(a){return a},
gj(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=s+a.charCodeAt(r)&536870911
s=s+((s&524287)<<10)&536870911
s^=s>>6}s=s+((s&67108863)<<3)&536870911
s^=s>>11
return s+((s&16383)<<15)&536870911},
gi(a){return A.G(u.N)},
gl(a){return a.length},
$ic:1,
$iE:1}
A.aH.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.ah.prototype={
gq(){var t=this.d
return t==null?this.$ti.c.a(t):t},
t(){var t,s=this,r=s.a,q=J.bY(r),p=q.gl(r)
if(s.b!==p)throw A.b(A.b5(r))
t=s.c
if(t>=p){s.sC(null)
return!1}s.sC(q.k(r,t));++s.c
return!0},
sC(a){this.d=this.$ti.m("1?").a(a)}}
A.l.prototype={}
A.C.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.c4(s==null?"unknown":s)+"'"},
gK(){return this},
$C:"$1",
$R:1,
$D:null}
A.aB.prototype={$C:"$2",$R:2}
A.aO.prototype={}
A.aN.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.c4(t)+"'"}}
A.N.prototype={
n(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.N))return!1
return this.$_target===b.$_target&&this.a===b.a},
gj(a){return(A.dr(this.a)^A.at(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.aK(this.a)+"'")}}
A.aS.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.aM.prototype={
h(a){return"RuntimeError: "+this.a}}
A.T.prototype={
gl(a){return this.a},
k(a,b){var t,s,r,q,p=null
if(typeof b=="string"){t=this.b
if(t==null)return p
s=t[b]
r=s==null?p:s.b
return r}else if(typeof b=="number"&&(b&0x3fffffff)===b){q=this.c
if(q==null)return p
s=q[b]
r=s==null?p:s.b
return r}else return this.J(b)},
J(a){var t,s,r=this.d
if(r==null)return null
t=r[J.az(a)&1073741823]
s=this.F(t,a)
if(s<0)return null
return t[s].b},
I(a,b){var t,s,r=this
r.$ti.m("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw A.b(A.b5(r))
t=t.c}},
p(a,b){var t=this,s=t.$ti,r=new A.aI(s.c.a(a),s.y[1].a(b))
if(t.e==null)t.e=t.f=r
else t.f=t.f.c=r;++t.a
t.r=t.r+1&1073741823
return r},
F(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.c6(a[s].a,b))return s
return-1},
h(a){return A.bs(this)},
$ibr:1}
A.aI.prototype={}
A.b_.prototype={
$1(a){return this.a(a)},
$S:0}
A.b0.prototype={
$2(a,b){return this.a(a,b)},
$S:1}
A.b1.prototype={
$1(a){return this.a(A.bK(a))},
$S:2}
A.ai.prototype={
gi(a){return B.p},
$ic:1}
A.X.prototype={}
A.aj.prototype={
gi(a){return B.q},
$ic:1}
A.I.prototype={
gl(a){return a.length},
$io:1}
A.V.prototype={
k(a,b){A.F(b,a,a.length)
return a[b]},
$ih:1,
$id:1}
A.W.prototype={$ih:1,$id:1}
A.ak.prototype={
gi(a){return B.r},
$ic:1}
A.al.prototype={
gi(a){return B.t},
$ic:1}
A.am.prototype={
gi(a){return B.u},
k(a,b){A.F(b,a,a.length)
return a[b]},
$ic:1}
A.an.prototype={
gi(a){return B.v},
k(a,b){A.F(b,a,a.length)
return a[b]},
$ic:1}
A.ao.prototype={
gi(a){return B.w},
k(a,b){A.F(b,a,a.length)
return a[b]},
$ic:1}
A.ap.prototype={
gi(a){return B.x},
k(a,b){A.F(b,a,a.length)
return a[b]},
$ic:1}
A.aq.prototype={
gi(a){return B.y},
k(a,b){A.F(b,a,a.length)
return a[b]},
$ic:1}
A.Y.prototype={
gi(a){return B.z},
gl(a){return a.length},
k(a,b){A.F(b,a,a.length)
return a[b]},
$ic:1}
A.ar.prototype={
gi(a){return B.A},
gl(a){return a.length},
k(a,b){A.F(b,a,a.length)
return a[b]},
$ic:1}
A.a0.prototype={}
A.a1.prototype={}
A.a2.prototype={}
A.a3.prototype={}
A.q.prototype={
m(a){return A.aW(v.typeUniverse,this,a)},
D(a){return A.cJ(v.typeUniverse,this,a)}}
A.av.prototype={}
A.aV.prototype={
h(a){return A.n(this.a,null)}}
A.aT.prototype={
h(a){return this.a}}
A.aw.prototype={}
A.f.prototype={
gG(a){return new A.ah(a,this.gl(a),A.a7(a).m("ah<f.E>"))},
h(a){return A.bq(a,"[","]")}}
A.U.prototype={
gl(a){return this.a},
h(a){return A.bs(this)},
$ib7:1}
A.aJ.prototype={
$2(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=A.z(a)
t=s.a+=t
s.a=t+": "
t=A.z(b)
s.a+=t},
$S:3}
A.aD.prototype={}
A.aA.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.aE(t)
return"Assertion failed"}}
A.aP.prototype={}
A.M.prototype={
gv(){return"Invalid argument"+(!this.a?"(s)":"")},
gu(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gv()+r+p
if(!t.a)return o
return o+t.gu()+": "+A.aE(t.gB())},
gB(){return this.b}}
A.aL.prototype={
gB(){return A.cM(this.b)},
gv(){return"RangeError"},
gu(){var t,s=this.e
if(s==null)t=""
else t=": Not greater than or equal to "+A.z(s)
return t}}
A.aF.prototype={
gB(){return A.bJ(this.b)},
gv(){return"RangeError"},
gu(){if(A.bJ(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gl(a){return this.f}}
A.aR.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.aQ.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.aC.prototype={
h(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.aE(t)+"."}}
A.Z.prototype={
gj(a){return A.j.prototype.gj.call(this,0)},
h(a){return"null"}}
A.j.prototype={$ij:1,
n(a,b){return this===b},
gj(a){return A.at(this)},
h(a){return"Instance of '"+A.aK(this)+"'"},
gi(a){return A.df(this)},
toString(){return this.h(this)}}
A.au.prototype={
gl(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}};(function aliases(){var t=J.y.prototype
t.H=t.h})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.b6,J.ac,J.aa,A.aD,A.ah,A.l,A.C,A.U,A.aI,A.q,A.av,A.aV,A.f,A.Z,A.au])
r(J.ac,[J.ad,J.O,J.R,J.Q,J.S,J.ag,J.P])
r(J.R,[J.y,J.p,A.ai,A.X])
r(J.y,[J.as,J.a_,J.x])
s(J.aG,J.p)
r(J.ag,[J.ae,J.af])
r(A.aD,[A.aH,A.aS,A.aM,A.aT,A.aA,A.aP,A.M,A.aR,A.aQ,A.aC])
r(A.C,[A.aB,A.aO,A.b_,A.b1])
r(A.aO,[A.aN,A.N])
s(A.T,A.U)
r(A.aB,[A.b0,A.aJ])
r(A.X,[A.aj,A.I])
r(A.I,[A.a0,A.a2])
s(A.a1,A.a0)
s(A.V,A.a1)
s(A.a3,A.a2)
s(A.W,A.a3)
r(A.V,[A.ak,A.al])
r(A.W,[A.am,A.an,A.ao,A.ap,A.aq,A.Y,A.ar])
s(A.aw,A.aT)
r(A.M,[A.aL,A.aF])
t(A.a0,A.f)
t(A.a1,A.l)
t(A.a2,A.f)
t(A.a3,A.l)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",e:"double",L:"num",E:"String",be:"bool",Z:"Null",d:"List",j:"Object",b7:"Map"},mangledNames:{},types:["@(@)","@(@,E)","@(E)","~(j?,j?)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.cI(v.typeUniverse,JSON.parse('{"as":"y","a_":"y","x":"y","ad":{"be":[],"c":[]},"O":{"c":[]},"R":{"k":[]},"y":{"k":[]},"p":{"d":["1"],"k":[],"h":["1"]},"aG":{"p":["1"],"d":["1"],"k":[],"h":["1"]},"ag":{"e":[],"L":[]},"ae":{"e":[],"a":[],"L":[],"c":[]},"af":{"e":[],"L":[],"c":[]},"P":{"E":[],"c":[]},"T":{"U":["1","2"],"br":["1","2"],"b7":["1","2"]},"ai":{"k":[],"c":[]},"X":{"k":[]},"aj":{"k":[],"c":[]},"I":{"o":["1"],"k":[]},"V":{"f":["e"],"d":["e"],"o":["e"],"k":[],"h":["e"],"l":["e"]},"W":{"f":["a"],"d":["a"],"o":["a"],"k":[],"h":["a"],"l":["a"]},"ak":{"f":["e"],"d":["e"],"o":["e"],"k":[],"h":["e"],"l":["e"],"c":[],"f.E":"e"},"al":{"f":["e"],"d":["e"],"o":["e"],"k":[],"h":["e"],"l":["e"],"c":[],"f.E":"e"},"am":{"f":["a"],"d":["a"],"o":["a"],"k":[],"h":["a"],"l":["a"],"c":[],"f.E":"a"},"an":{"f":["a"],"d":["a"],"o":["a"],"k":[],"h":["a"],"l":["a"],"c":[],"f.E":"a"},"ao":{"f":["a"],"d":["a"],"o":["a"],"k":[],"h":["a"],"l":["a"],"c":[],"f.E":"a"},"ap":{"f":["a"],"d":["a"],"o":["a"],"k":[],"h":["a"],"l":["a"],"c":[],"f.E":"a"},"aq":{"f":["a"],"d":["a"],"o":["a"],"k":[],"h":["a"],"l":["a"],"c":[],"f.E":"a"},"Y":{"f":["a"],"d":["a"],"o":["a"],"k":[],"h":["a"],"l":["a"],"c":[],"f.E":"a"},"ar":{"f":["a"],"d":["a"],"o":["a"],"k":[],"h":["a"],"l":["a"],"c":[],"f.E":"a"},"U":{"b7":["1","2"]},"e":{"L":[]},"a":{"L":[]},"cl":{"d":["a"],"h":["a"]},"ct":{"d":["a"],"h":["a"]},"cs":{"d":["a"],"h":["a"]},"cj":{"d":["a"],"h":["a"]},"cq":{"d":["a"],"h":["a"]},"ck":{"d":["a"],"h":["a"]},"cr":{"d":["a"],"h":["a"]},"cg":{"d":["e"],"h":["e"]},"ch":{"d":["e"],"h":["e"]}}'))
A.cH(v.typeUniverse,JSON.parse('{"I":1}'))
var u=(function rtii(){var t=A.bX
return{Z:t("dA"),s:t("p<E>"),b:t("p<@>"),T:t("O"),m:t("k"),g:t("x"),p:t("o<@>"),j:t("d<@>"),P:t("Z"),K:t("j"),L:t("dB"),N:t("E"),R:t("c"),o:t("a_"),y:t("be"),i:t("e"),S:t("a"),A:t("0&*"),_:t("j*"),O:t("bp<Z>?"),z:t("k?"),X:t("j?"),H:t("L")}})();(function constants(){B.m=J.ac.prototype
B.a=J.p.prototype
B.n=J.x.prototype
B.o=J.R.prototype
B.e=J.as.prototype
B.b=J.a_.prototype
B.c=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.f=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.l=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.h=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.k=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.j=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.i=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.d=function(hooks) { return hooks; }

B.p=A.r("dx")
B.q=A.r("dy")
B.r=A.r("cg")
B.t=A.r("ch")
B.u=A.r("cj")
B.v=A.r("ck")
B.w=A.r("cl")
B.x=A.r("cq")
B.y=A.r("cr")
B.z=A.r("cs")
B.A=A.r("ct")})();(function staticFields(){$.aU=null
$.w=A.bT([],A.bX("p<j>"))
$.bt=null
$.bm=null
$.bl=null
$.bZ=null
$.bU=null
$.c2=null
$.aZ=null
$.b2=null
$.bh=null})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"dz","c5",()=>A.de("_$dart_dartClosure"))})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.ai,ArrayBufferView:A.X,DataView:A.aj,Float32Array:A.ak,Float64Array:A.al,Int16Array:A.am,Int32Array:A.an,Int8Array:A.ao,Uint16Array:A.ap,Uint32Array:A.aq,Uint8ClampedArray:A.Y,CanvasPixelArray:A.Y,Uint8Array:A.ar})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.I.$nativeSuperclassTag="ArrayBufferView"
A.a0.$nativeSuperclassTag="ArrayBufferView"
A.a1.$nativeSuperclassTag="ArrayBufferView"
A.V.$nativeSuperclassTag="ArrayBufferView"
A.a2.$nativeSuperclassTag="ArrayBufferView"
A.a3.$nativeSuperclassTag="ArrayBufferView"
A.W.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.dp
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()
//# sourceMappingURL=main.dart.js.map
