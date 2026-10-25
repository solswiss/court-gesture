var Tg=Object.defineProperty;var Ag=(e,t,n)=>t in e?Tg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var C=(e,t,n)=>Ag(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nh="170",Cg=0,fd=1,Rg=2,Lp=1,Pg=2,Ri=3,us=0,gn=1,ln=2,os=0,yr=1,pd=2,md=3,gd=4,Lg=5,Ps=100,Ig=101,Dg=102,Ug=103,Ng=104,Fg=200,Og=201,Bg=202,kg=203,Rl=204,Pl=205,zg=206,Vg=207,Hg=208,Gg=209,Wg=210,Xg=211,qg=212,Yg=213,jg=214,Ll=0,Il=1,Dl=2,wr=3,Ul=4,Nl=5,Fl=6,Ol=7,Fh=0,$g=1,Kg=2,cs=0,Zg=1,Jg=2,Qg=3,t1=4,e1=5,n1=6,i1=7,Ip=300,Tr=301,Ar=302,Bl=303,kl=304,ac=306,Zn=1e3,Ds=1001,zl=1002,ei=1003,s1=1004,no=1005,Hn=1006,Nc=1007,Us=1008,Gi=1009,Dp=1010,Up=1011,Da=1012,Oh=1013,Gs=1014,Ni=1015,Ha=1016,Bh=1017,kh=1018,Cr=1020,Np=35902,Fp=1021,Op=1022,Qn=1023,Bp=1024,kp=1025,Mr=1026,Rr=1027,zp=1028,zh=1029,Vp=1030,Vh=1031,Hh=1033,No=33776,Fo=33777,Oo=33778,Bo=33779,Vl=35840,Hl=35841,Gl=35842,Wl=35843,Xl=36196,ql=37492,Yl=37496,jl=37808,$l=37809,Kl=37810,Zl=37811,Jl=37812,Ql=37813,th=37814,eh=37815,nh=37816,ih=37817,sh=37818,rh=37819,ah=37820,oh=37821,ko=36492,ch=36494,lh=36495,Hp=36283,hh=36284,uh=36285,dh=36286,r1=3200,a1=3201,Gh=0,o1=1,Li="",Me="srgb",Gr="srgb-linear",oc="linear",ae="srgb",Js=7680,_d=519,c1=512,l1=513,h1=514,Gp=515,u1=516,d1=517,f1=518,p1=519,fh=35044,vd=35048,xd="300 es",Fi=2e3,Yo=2001;class Wr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yd=1234567;const wa=Math.PI/180,Ua=180/Math.PI;function ki(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[e&255]+tn[e>>8&255]+tn[e>>16&255]+tn[e>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function je(e,t,n){return Math.max(t,Math.min(n,e))}function Wh(e,t){return(e%t+t)%t}function m1(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function g1(e,t,n){return e!==t?(n-e)/(t-e):0}function Ta(e,t,n){return(1-n)*e+n*t}function _1(e,t,n,i){return Ta(e,t,1-Math.exp(-n*i))}function v1(e,t=1){return t-Math.abs(Wh(e,t*2)-t)}function x1(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function y1(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function M1(e,t){return e+Math.floor(Math.random()*(t-e+1))}function S1(e,t){return e+Math.random()*(t-e)}function E1(e){return e*(.5-Math.random())}function b1(e){e!==void 0&&(yd=e);let t=yd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function w1(e){return e*wa}function T1(e){return e*Ua}function A1(e){return(e&e-1)===0&&e!==0}function C1(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function R1(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function P1(e,t,n,i,s){const r=Math.cos,a=Math.sin,o=r(n/2),c=a(n/2),l=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),d=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":e.set(o*h,c*u,c*d,o*l);break;case"YZY":e.set(c*d,o*h,c*u,o*l);break;case"ZXZ":e.set(c*u,c*d,o*h,o*l);break;case"XZX":e.set(o*h,c*g,c*f,o*l);break;case"YXY":e.set(c*f,o*h,c*g,o*l);break;case"ZYZ":e.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Jn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function re(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const Be={DEG2RAD:wa,RAD2DEG:Ua,generateUUID:ki,clamp:je,euclideanModulo:Wh,mapLinear:m1,inverseLerp:g1,lerp:Ta,damp:_1,pingpong:v1,smoothstep:x1,smootherstep:y1,randInt:M1,randFloat:S1,randFloatSpread:E1,seededRandom:b1,degToRad:w1,radToDeg:T1,isPowerOfTwo:A1,ceilPowerOfTwo:C1,floorPowerOfTwo:R1,setQuaternionFromProperEuler:P1,normalize:re,denormalize:Jn};class ot{constructor(t=0,n=0){ot.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,n,i,s,r,a,o,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,o,c,l)}set(t,n,i,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],E=s[1],b=s[4],S=s[7],O=s[2],A=s[5],T=s[8];return r[0]=a*_+o*E+c*O,r[3]=a*m+o*b+c*A,r[6]=a*p+o*S+c*T,r[1]=l*_+h*E+u*O,r[4]=l*m+h*b+u*A,r[7]=l*p+h*S+u*T,r[2]=d*_+f*E+g*O,r[5]=d*m+f*b+g*A,r[8]=d*p+f*S+g*T,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return n*a*h-n*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=n*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*i)*_,t[2]=(o*i-s*a)*_,t[3]=d*_,t[4]=(h*n-s*c)*_,t[5]=(s*r-o*n)*_,t[6]=f*_,t[7]=(i*c-l*n)*_,t[8]=(a*n-i*r)*_,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(Fc.makeScale(t,n)),this}rotate(t){return this.premultiply(Fc.makeRotation(-t)),this}translate(t,n){return this.premultiply(Fc.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Fc=new Ot;function Wp(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Na(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function L1(){const e=Na("canvas");return e.style.display="block",e}const Md={};function ya(e){e in Md||(Md[e]=!0,console.warn(e))}function I1(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function D1(e){const t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function U1(e){const t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zt={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===ae&&(e.r=zi(e.r),e.g=zi(e.g),e.b=zi(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===ae&&(e.r=Sr(e.r),e.g=Sr(e.g),e.b=Sr(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===Li?oc:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function zi(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Sr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}const Sd=[.64,.33,.3,.6,.15,.06],Ed=[.2126,.7152,.0722],bd=[.3127,.329],wd=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Td=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[Gr]:{primaries:Sd,whitePoint:bd,transfer:oc,toXYZ:wd,fromXYZ:Td,luminanceCoefficients:Ed,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:Sd,whitePoint:bd,transfer:ae,toXYZ:wd,fromXYZ:Td,luminanceCoefficients:Ed,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}});let Qs;class N1{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Qs===void 0&&(Qs=Na("canvas")),Qs.width=t.width,Qs.height=t.height;const i=Qs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Qs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Na("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=zi(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zi(n[i]/255)*255):n[i]=zi(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let F1=0;class Xp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Oc(s[a].image)):r.push(Oc(s[a]))}else r=Oc(s);i.url=r}return n||(t.images[this.uuid]=i),i}}function Oc(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?N1.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let O1=0;class Ze extends Wr{constructor(t=Ze.DEFAULT_IMAGE,n=Ze.DEFAULT_MAPPING,i=Ds,s=Ds,r=Hn,a=Us,o=Qn,c=Gi,l=Ze.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O1++}),this.uuid=ki(),this.name="",this.source=new Xp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ip)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zn:t.x=t.x-Math.floor(t.x);break;case Ds:t.x=t.x<0?0:1;break;case zl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zn:t.y=t.y-Math.floor(t.y);break;case Ds:t.y=t.y<0?0:1;break;case zl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Ip;Ze.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,n=0,i=0,s=1){Te.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(l+1)/2,S=(f+1)/2,O=(p+1)/2,A=(h+d)/4,T=(u+_)/4,P=(g+m)/4;return b>S&&b>O?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=A/i,r=T/i):S>O?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=A/s,r=P/s):O<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),i=T/r,s=P/r),this.set(i,s,r,n),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class B1 extends Wr{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Te(0,0,t,n),this.scissorTest=!1,this.viewport=new Te(0,0,t,n);const s={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ze(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Xp(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ws extends B1{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class qp extends Ze{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=ei,this.minFilter=ei,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class k1 extends Ze{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=ei,this.minFilter=ei,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ga{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[n+0]=c,t[n+1]=l,t[n+2]=h,t[n+3]=u;return}if(o===1){t[n+0]=d,t[n+1]=f,t[n+2]=g,t[n+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-o;const p=c*d+l*f+h*g+u*_,E=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const O=Math.sqrt(b),A=Math.atan2(O,p*E);m=Math.sin(m*A)/O,o=Math.sin(o*A)/O}const S=o*E;if(c=c*m+d*S,l=l*m+f*S,h=h*m+g*S,u=u*m+_*S,m===1-o){const O=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=O,l*=O,h*=O,u*=O}}t[n]=c,t[n+1]=l,t[n+2]=h,t[n+3]=u}static multiplyQuaternionsFlat(t,n,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[n]=o*g+h*u+c*f-l*d,t[n+1]=c*g+h*d+l*u-o*f,t[n+2]=l*g+h*f+o*d-c*u,t[n+3]=h*g-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],c=n[9],l=n[2],h=n[6],u=n[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,s=t._y,r=t._z,a=t._w,o=n._x,c=n._y,l=n._z,h=n._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-n;return this._w=f*a+n*this._w,this._x=f*i+n*this._x,this._y=f*s+n*this._y,this._z=f*r+n*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-n)*h)/l,d=Math.sin(n*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,n=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Ad.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Ad.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const n=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*n-r*s),u=2*(r*i-a*n);return this.x=n+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,s=t.y,r=t.z,a=n.x,o=n.y,c=n.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Bc.copy(this).projectOnVector(t),this.sub(Bc)}reflect(t){return this.sub(Bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bc=new L,Ad=new Ga;class Wa{constructor(t=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(jn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(jn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=jn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,jn):jn.fromBufferAttribute(r,a),jn.applyMatrix4(t.matrixWorld),this.expandByPoint(jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),io.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),io.copy(i.boundingBox)),io.applyMatrix4(t.matrixWorld),this.union(io)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(la),so.subVectors(this.max,la),tr.subVectors(t.a,la),er.subVectors(t.b,la),nr.subVectors(t.c,la),Zi.subVectors(er,tr),Ji.subVectors(nr,er),xs.subVectors(tr,nr);let n=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-xs.z,xs.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,xs.z,0,-xs.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-xs.y,xs.x,0];return!kc(n,tr,er,nr,so)||(n=[1,0,0,0,1,0,0,0,1],!kc(n,tr,er,nr,so))?!1:(ro.crossVectors(Zi,Ji),n=[ro.x,ro.y,ro.z],kc(n,tr,er,nr,so))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bi=[new L,new L,new L,new L,new L,new L,new L,new L],jn=new L,io=new Wa,tr=new L,er=new L,nr=new L,Zi=new L,Ji=new L,xs=new L,la=new L,so=new L,ro=new L,ys=new L;function kc(e,t,n,i,s){for(let r=0,a=e.length-3;r<=a;r+=3){ys.fromArray(e,r);const o=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),c=t.dot(ys),l=n.dot(ys),h=i.dot(ys);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const z1=new Wa,ha=new L,zc=new L;class cc{constructor(t=new L,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):z1.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ha.subVectors(t,this.center);const n=ha.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(ha,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ha.copy(t.center).add(zc)),this.expandByPoint(ha.copy(t.center).sub(zc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new L,Vc=new L,ao=new L,Qi=new L,Hc=new L,oo=new L,Gc=new L;class Yp{constructor(t=new L,n=new L(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=wi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(wi.copy(this.origin).addScaledVector(this.direction,n),wi.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Vc.copy(t).add(n).multiplyScalar(.5),ao.copy(n).sub(t).normalize(),Qi.copy(this.origin).sub(Vc);const r=t.distanceTo(n)*.5,a=-this.direction.dot(ao),o=Qi.dot(this.direction),c=-Qi.dot(ao),l=Qi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Vc).addScaledVector(ao,d),f}intersectSphere(t,n){wi.subVectors(t.center,this.origin);const i=wi.dot(this.direction),s=wi.dot(wi)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,wi)!==null}intersectTriangle(t,n,i,s,r){Hc.subVectors(n,t),oo.subVectors(i,t),Gc.crossVectors(Hc,oo);let a=this.direction.dot(Gc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qi.subVectors(this.origin,t);const c=o*this.direction.dot(oo.crossVectors(Qi,oo));if(c<0)return null;const l=o*this.direction.dot(Hc.cross(Qi));if(l<0||c+l>a)return null;const h=-o*Qi.dot(Gc);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,n,i,s,r,a,o,c,l,h,u,d,f,g,_,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,o,c,l,h,u,d,f,g,_,m)}set(t,n,i,s,r,a,o,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,s=1/ir.setFromMatrixColumn(t,0).length(),r=1/ir.setFromMatrixColumn(t,1).length(),a=1/ir.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;n[0]=c*h,n[4]=-c*u,n[8]=l,n[1]=f+g*l,n[5]=d-_*l,n[9]=-o*c,n[2]=_-d*l,n[6]=g+f*l,n[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;n[0]=d+_*o,n[4]=g*o-f,n[8]=a*l,n[1]=a*u,n[5]=a*h,n[9]=-o,n[2]=f*o-g,n[6]=_+d*o,n[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;n[0]=d-_*o,n[4]=-a*u,n[8]=g+f*o,n[1]=f+g*o,n[5]=a*h,n[9]=_-d*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;n[0]=c*h,n[4]=g*l-f,n[8]=d*l+_,n[1]=c*u,n[5]=_*l+d,n[9]=f*l-g,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;n[0]=c*h,n[4]=_-d*u,n[8]=g*u+f,n[1]=u,n[5]=a*h,n[9]=-o*h,n[2]=-l*h,n[6]=f*u+g,n[10]=d-_*u}else if(t.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;n[0]=c*h,n[4]=-u,n[8]=l*h,n[1]=d*u+_,n[5]=a*h,n[9]=f*u-g,n[2]=g*u-f,n[6]=o*h,n[10]=_*u+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(V1,t,H1)}lookAt(t,n,i){const s=this.elements;return yn.subVectors(t,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),ts.crossVectors(i,yn),ts.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),ts.crossVectors(i,yn)),ts.normalize(),co.crossVectors(yn,ts),s[0]=ts.x,s[4]=co.x,s[8]=yn.x,s[1]=ts.y,s[5]=co.y,s[9]=yn.y,s[2]=ts.z,s[6]=co.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],E=i[3],b=i[7],S=i[11],O=i[15],A=s[0],T=s[4],P=s[8],M=s[12],x=s[1],R=s[5],I=s[9],U=s[13],H=s[2],G=s[6],q=s[10],Z=s[14],X=s[3],st=s[7],ut=s[11],Tt=s[15];return r[0]=a*A+o*x+c*H+l*X,r[4]=a*T+o*R+c*G+l*st,r[8]=a*P+o*I+c*q+l*ut,r[12]=a*M+o*U+c*Z+l*Tt,r[1]=h*A+u*x+d*H+f*X,r[5]=h*T+u*R+d*G+f*st,r[9]=h*P+u*I+d*q+f*ut,r[13]=h*M+u*U+d*Z+f*Tt,r[2]=g*A+_*x+m*H+p*X,r[6]=g*T+_*R+m*G+p*st,r[10]=g*P+_*I+m*q+p*ut,r[14]=g*M+_*U+m*Z+p*Tt,r[3]=E*A+b*x+S*H+O*X,r[7]=E*T+b*R+S*G+O*st,r[11]=E*P+b*I+S*q+O*ut,r[15]=E*M+b*U+S*Z+O*Tt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*o*d+i*l*d+s*o*f-i*c*f)+_*(+n*c*f-n*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+n*l*u-n*o*f-r*a*u+i*a*f+r*o*h-i*l*h)+p*(-s*o*h-n*c*u+n*o*d+s*a*u-i*a*d+i*c*h)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=u*m*l-_*d*l+_*c*f-o*m*f-u*c*p+o*d*p,b=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,S=h*_*l-g*u*l+g*o*f-a*_*f-h*o*p+a*u*p,O=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,A=n*E+i*b+s*S+r*O;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=E*T,t[1]=(_*d*r-u*m*r-_*s*f+i*m*f+u*s*p-i*d*p)*T,t[2]=(o*m*r-_*c*r+_*s*l-i*m*l-o*s*p+i*c*p)*T,t[3]=(u*c*r-o*d*r-u*s*l+i*d*l+o*s*f-i*c*f)*T,t[4]=b*T,t[5]=(h*m*r-g*d*r+g*s*f-n*m*f-h*s*p+n*d*p)*T,t[6]=(g*c*r-a*m*r-g*s*l+n*m*l+a*s*p-n*c*p)*T,t[7]=(a*d*r-h*c*r+h*s*l-n*d*l-a*s*f+n*c*f)*T,t[8]=S*T,t[9]=(g*u*r-h*_*r-g*i*f+n*_*f+h*i*p-n*u*p)*T,t[10]=(a*_*r-g*o*r+g*i*l-n*_*l-a*i*p+n*o*p)*T,t[11]=(h*o*r-a*u*r-h*i*l+n*u*l+a*i*f-n*o*f)*T,t[12]=O*T,t[13]=(h*_*s-g*u*s+g*i*d-n*_*d-h*i*m+n*u*m)*T,t[14]=(g*o*s-a*_*s-g*i*c+n*_*c+a*i*m-n*o*m)*T,t[15]=(a*u*s-h*o*s+h*i*c-n*u*c-a*i*d+n*o*d)*T,this}scale(t){const n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){const s=this.elements,r=n._x,a=n._y,o=n._z,c=n._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,E=c*l,b=c*h,S=c*u,O=i.x,A=i.y,T=i.z;return s[0]=(1-(_+p))*O,s[1]=(f+S)*O,s[2]=(g-b)*O,s[3]=0,s[4]=(f-S)*A,s[5]=(1-(d+p))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+b)*T,s[9]=(m-E)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){const s=this.elements;let r=ir.set(s[0],s[1],s[2]).length();const a=ir.set(s[4],s[5],s[6]).length(),o=ir.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],$n.copy(this);const l=1/r,h=1/a,u=1/o;return $n.elements[0]*=l,$n.elements[1]*=l,$n.elements[2]*=l,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=u,$n.elements[9]*=u,$n.elements[10]*=u,n.setFromRotationMatrix($n),i.x=r,i.y=a,i.z=o,this}makePerspective(t,n,i,s,r,a,o=Fi){const c=this.elements,l=2*r/(n-t),h=2*r/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s);let f,g;if(o===Fi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Yo)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,r,a,o=Fi){const c=this.elements,l=1/(n-t),h=1/(i-s),u=1/(a-r),d=(n+t)*l,f=(i+s)*h;let g,_;if(o===Fi)g=(a+r)*u,_=-2*u;else if(o===Yo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const ir=new L,$n=new me,V1=new L(0,0,0),H1=new L(1,1,1),ts=new L,co=new L,yn=new L,Cd=new me,Rd=new Ga;class ii{constructor(t=0,n=0,i=0,s=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Cd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cd,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Rd.setFromEuler(this),this.setFromQuaternion(Rd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class jp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let G1=0;const Pd=new L,sr=new Ga,Ti=new me,lo=new L,ua=new L,W1=new L,X1=new Ga,Ld=new L(1,0,0),Id=new L(0,1,0),Dd=new L(0,0,1),Ud={type:"added"},q1={type:"removed"},rr={type:"childadded",child:null},Wc={type:"childremoved",child:null};class ke extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const t=new L,n=new ii,i=new Ga,s=new L(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Ot}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return sr.setFromAxisAngle(t,n),this.quaternion.multiply(sr),this}rotateOnWorldAxis(t,n){return sr.setFromAxisAngle(t,n),this.quaternion.premultiply(sr),this}rotateX(t){return this.rotateOnAxis(Ld,t)}rotateY(t){return this.rotateOnAxis(Id,t)}rotateZ(t){return this.rotateOnAxis(Dd,t)}translateOnAxis(t,n){return Pd.copy(t).applyQuaternion(this.quaternion),this.position.add(Pd.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Ld,t)}translateY(t){return this.translateOnAxis(Id,t)}translateZ(t){return this.translateOnAxis(Dd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?lo.copy(t):lo.set(t,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(ua,lo,this.up):Ti.lookAt(lo,ua,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),sr.setFromRotationMatrix(Ti),this.quaternion.premultiply(sr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ud),rr.child=t,this.dispatchEvent(rr),rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(q1),Wc.child=t,this.dispatchEvent(Wc),Wc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ud),rr.child=t,this.dispatchEvent(rr),rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,t,W1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,X1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(n){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ke.DEFAULT_UP=new L(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new L,Ai=new L,Xc=new L,Ci=new L,ar=new L,or=new L,Nd=new L,qc=new L,Yc=new L,jc=new L,$c=new Te,Kc=new Te,Zc=new Te;class Vn{constructor(t=new L,n=new L,i=new L){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Kn.subVectors(t,n),s.cross(Kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){Kn.subVectors(s,n),Ai.subVectors(i,n),Xc.subVectors(t,n);const a=Kn.dot(Kn),o=Kn.dot(Ai),c=Kn.dot(Xc),l=Ai.dot(Ai),h=Ai.dot(Xc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,n,i,s,r,a,o,c){return this.getBarycoord(t,n,i,s,Ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ci.x),c.addScaledVector(a,Ci.y),c.addScaledVector(o,Ci.z),c)}static getInterpolatedAttribute(t,n,i,s,r,a){return $c.setScalar(0),Kc.setScalar(0),Zc.setScalar(0),$c.fromBufferAttribute(t,n),Kc.fromBufferAttribute(t,i),Zc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector($c,r.x),a.addScaledVector(Kc,r.y),a.addScaledVector(Zc,r.z),a}static isFrontFacing(t,n,i,s){return Kn.subVectors(i,n),Ai.subVectors(t,n),Kn.cross(Ai).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Kn.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Vn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return Vn.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return Vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,s=this.b,r=this.c;let a,o;ar.subVectors(s,i),or.subVectors(r,i),qc.subVectors(t,i);const c=ar.dot(qc),l=or.dot(qc);if(c<=0&&l<=0)return n.copy(i);Yc.subVectors(t,s);const h=ar.dot(Yc),u=or.dot(Yc);if(h>=0&&u<=h)return n.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(ar,a);jc.subVectors(t,r);const f=ar.dot(jc),g=or.dot(jc);if(g>=0&&f<=g)return n.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),n.copy(i).addScaledVector(or,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Nd.subVectors(r,s),o=(u-h)/(u-h+(f-g)),n.copy(s).addScaledVector(Nd,o);const p=1/(m+_+d);return a=_*p,o=d*p,n.copy(i).addScaledVector(ar,a).addScaledVector(or,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},ho={h:0,s:0,l:0};function Jc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Vt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,n),this}setRGB(t,n,i,s=Zt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Zt.toWorkingColorSpace(this,s),this}setHSL(t,n,i,s=Zt.workingColorSpace){if(t=Wh(t,1),n=je(n,0,1),i=je(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=Jc(a,r,t+1/3),this.g=Jc(a,r,t),this.b=Jc(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,n=Me){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Me){const i=$p[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}copyLinearToSRGB(t){return this.r=Sr(t.r),this.g=Sr(t.g),this.b=Sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return Zt.fromWorkingColorSpace(en.copy(this),t),Math.round(je(en.r*255,0,255))*65536+Math.round(je(en.g*255,0,255))*256+Math.round(je(en.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Zt.workingColorSpace){Zt.fromWorkingColorSpace(en.copy(this),n);const i=en.r,s=en.g,r=en.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,n=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(en.copy(this),n),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Me){Zt.fromWorkingColorSpace(en.copy(this),t);const n=en.r,i=en.g,s=en.b;return t!==Me?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(es),this.setHSL(es.h+t,es.s+n,es.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(es),t.getHSL(ho);const i=Ta(es.h,ho.h,n),s=Ta(es.s,ho.s,n),r=Ta(es.l,ho.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Vt;Vt.NAMES=$p;let Y1=0;class gs extends Wr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=ki(),this.name="",this.blending=yr,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Pl,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Js,this.stencilZFail=Js,this.stencilZPass=Js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(i.blending=this.blending),this.side!==us&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rl&&(i.blendSrc=this.blendSrc),this.blendDst!==Pl&&(i.blendDst=this.blendDst),this.blendEquation!==Ps&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_d&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Js&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Js&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Js&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(n){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sn extends gs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new L,uo=new ot;class _n{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=fh,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)uo.fromBufferAttribute(this,n),uo.applyMatrix3(t),this.setXY(n,uo.x,uo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ue.fromBufferAttribute(this,n),Ue.applyMatrix3(t),this.setXYZ(n,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ue.fromBufferAttribute(this,n),Ue.applyMatrix4(t),this.setXYZ(n,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ue.fromBufferAttribute(this,n),Ue.applyNormalMatrix(t),this.setXYZ(n,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ue.fromBufferAttribute(this,n),Ue.transformDirection(t),this.setXYZ(n,Ue.x,Ue.y,Ue.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=re(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Jn(n,this.array)),n}setX(t,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Jn(n,this.array)),n}setY(t,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Jn(n,this.array)),n}setZ(t,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Jn(n,this.array)),n}setW(t,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=re(n,this.array),i=re(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=re(n,this.array),i=re(i,this.array),s=re(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=re(n,this.array),i=re(i,this.array),s=re(s,this.array),r=re(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fh&&(t.usage=this.usage),t}}class Kp extends _n{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Zp extends _n{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Ie extends _n{constructor(t,n,i){super(new Float32Array(t),n,i)}}let j1=0;const On=new me,Qc=new ke,cr=new L,Mn=new Wa,da=new Wa,Xe=new L;class rn extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wp(t)?Zp:Kp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ot().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,n,i){return On.makeTranslation(t,n,i),this.applyMatrix4(On),this}scale(t,n,i){return On.makeScale(t,n,i),this.applyMatrix4(On),this}lookAt(t){return Qc.lookAt(t),Qc.updateMatrix(),this.applyMatrix4(Qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ie(i,3))}else{for(let i=0,s=n.count;i<s;i++){const r=t[i];n.setXYZ(i,r.x,r.y,r.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wa);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cc);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),n)for(let r=0,a=n.length;r<a;r++){const o=n[r];da.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(Mn.min,da.min),Mn.expandByPoint(Xe),Xe.addVectors(Mn.max,da.max),Mn.expandByPoint(Xe)):(Mn.expandByPoint(da.min),Mn.expandByPoint(da.max))}Mn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Xe));if(n)for(let r=0,a=n.length;r<a;r++){const o=n[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Xe.fromBufferAttribute(o,l),c&&(cr.fromBufferAttribute(t,l),Xe.add(cr)),s=Math.max(s,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new L,c[P]=new L;const l=new L,h=new L,u=new L,d=new ot,f=new ot,g=new ot,_=new L,m=new L;function p(P,M,x){l.fromBufferAttribute(i,P),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,x),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),o[P].add(_),o[M].add(_),o[x].add(_),c[P].add(m),c[M].add(m),c[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,M=E.length;P<M;++P){const x=E[P],R=x.start,I=x.count;for(let U=R,H=R+I;U<H;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const b=new L,S=new L,O=new L,A=new L;function T(P){O.fromBufferAttribute(s,P),A.copy(O);const M=o[P];b.copy(M),b.sub(O.multiplyScalar(O.dot(M))).normalize(),S.crossVectors(A,M);const R=S.dot(c[P])<0?-1:1;a.setXYZW(P,b.x,b.y,b.z,R)}for(let P=0,M=E.length;P<M;++P){const x=E[P],R=x.start,I=x.count;for(let U=R,H=R+I;U<H;U+=3)T(t.getX(U+0)),T(t.getX(U+1)),T(t.getX(U+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=n.count;d<f;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Xe.fromBufferAttribute(t,n),Xe.normalize(),t.setXYZ(n,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new _n(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rn,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,i);n.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,i);c.push(f)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(n))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(n));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fd=new me,Ms=new Yp,fo=new cc,Od=new L,po=new L,mo=new L,go=new L,tl=new L,_o=new L,Bd=new L,vo=new L;class Bt extends ke{constructor(t=new rn,n=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){_o.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(tl.fromBufferAttribute(u,t),a?_o.addScaledVector(tl,h):_o.addScaledVector(tl.sub(n),h))}n.add(_o)}return n}raycast(t,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(r),Ms.copy(t.ray).recast(t.near),!(fo.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(fo,Od)===null||Ms.origin.distanceToSquared(Od)>(t.far-t.near)**2))&&(Fd.copy(r).invert(),Ms.copy(t.ray).applyMatrix4(Fd),!(i.boundingBox!==null&&Ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ms)))}_computeIntersections(t,n,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=E,O=b;S<O;S+=3){const A=o.getX(S),T=o.getX(S+1),P=o.getX(S+2);s=xo(this,p,t,i,l,h,u,A,T,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);s=xo(this,a,t,i,l,h,u,E,b,S),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=E,O=b;S<O;S+=3){const A=S,T=S+1,P=S+2;s=xo(this,p,t,i,l,h,u,A,T,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=m,b=m+1,S=m+2;s=xo(this,a,t,i,l,h,u,E,b,S),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function $1(e,t,n,i,s,r,a,o){let c;if(t.side===gn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===us,o),c===null)return null;vo.copy(o),vo.applyMatrix4(e.matrixWorld);const l=n.ray.origin.distanceTo(vo);return l<n.near||l>n.far?null:{distance:l,point:vo.clone(),object:e}}function xo(e,t,n,i,s,r,a,o,c,l){e.getVertexPosition(o,po),e.getVertexPosition(c,mo),e.getVertexPosition(l,go);const h=$1(e,t,n,i,po,mo,go,Bd);if(h){const u=new L;Vn.getBarycoord(Bd,po,mo,go,u),s&&(h.uv=Vn.getInterpolatedAttribute(s,o,c,l,u,new ot)),r&&(h.uv1=Vn.getInterpolatedAttribute(r,o,c,l,u,new ot)),a&&(h.normal=Vn.getInterpolatedAttribute(a,o,c,l,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new L,materialIndex:0};Vn.getNormal(po,mo,go,d.normal),h.face=d,h.barycoord=u}return h}class Xr extends rn{constructor(t=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,n,t,a,r,0),g("z","y","x",1,-1,i,n,-t,a,r,1),g("x","z","y",1,1,t,i,n,s,a,2),g("x","z","y",1,-1,t,i,-n,s,a,3),g("x","y","z",1,-1,t,n,i,s,r,4),g("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(u,2));function g(_,m,p,E,b,S,O,A,T,P,M){const x=S/T,R=O/P,I=S/2,U=O/2,H=A/2,G=T+1,q=P+1;let Z=0,X=0;const st=new L;for(let ut=0;ut<q;ut++){const Tt=ut*R-U;for(let Ht=0;Ht<G;Ht++){const ce=Ht*x-I;st[_]=ce*E,st[m]=Tt*b,st[p]=H,l.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[p]=A>0?1:-1,h.push(st.x,st.y,st.z),u.push(Ht/T),u.push(1-ut/P),Z+=1}}for(let ut=0;ut<P;ut++)for(let Tt=0;Tt<T;Tt++){const Ht=d+Tt+G*ut,ce=d+Tt+G*(ut+1),j=d+(Tt+1)+G*(ut+1),et=d+(Tt+1)+G*ut;c.push(Ht,ce,et),c.push(ce,j,et),X+=6}o.addGroup(f,X,M),f+=X,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Pr(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function on(e){const t={};for(let n=0;n<e.length;n++){const i=Pr(e[n]);for(const s in i)t[s]=i[s]}return t}function K1(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Jp(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Z1={clone:Pr,merge:on};var J1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ds extends gs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J1,this.fragmentShader=Q1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pr(t.uniforms),this.uniformsGroups=K1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Qp extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Fi}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new L,kd=new ot,zd=new ot;class pn extends Qp{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Ua*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-t/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-t/ns.z)}getViewSize(t,n){return this.getViewBounds(t,kd,zd),n.subVectors(zd,kd)}setViewOffset(t,n,i,s,r,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(wa*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,n-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const lr=-90,hr=1;class t_ extends ke{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(lr,hr,t,n);s.layers=this.layers,this.add(s);const r=new pn(lr,hr,t,n);r.layers=this.layers,this.add(r);const a=new pn(lr,hr,t,n);a.layers=this.layers,this.add(a);const o=new pn(lr,hr,t,n);o.layers=this.layers,this.add(o);const c=new pn(lr,hr,t,n);c.layers=this.layers,this.add(c);const l=new pn(lr,hr,t,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,c]=n;for(const l of n)this.remove(l);if(t===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of n)this.add(l),l.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,r),t.setRenderTarget(i,1,s),t.render(n,a),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,c),t.setRenderTarget(i,4,s),t.render(n,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(n,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class tm extends Ze{constructor(t,n,i,s,r,a,o,c,l,h){t=t!==void 0?t:[],n=n!==void 0?n:Tr,super(t,n,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class e_ extends Ws{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new tm(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Hn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Xr(5,5,5),r=new ds({name:"CubemapFromEquirect",uniforms:Pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:os});r.uniforms.tEquirect.value=n;const a=new Bt(s,r),o=n.minFilter;return n.minFilter===Us&&(n.minFilter=Hn),new t_(1,10,this).update(t,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,n,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,s);t.setRenderTarget(r)}}const el=new L,n_=new L,i_=new Ot;class Pi{constructor(t=new L(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const s=el.subVectors(i,n).cross(n_.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(el),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||i_.getNormalMatrix(t),s=this.coplanarPoint(el).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new cc,yo=new L;class Xh{constructor(t=new Pi,n=new Pi,i=new Pi,s=new Pi,r=new Pi,a=new Pi){this.planes=[t,n,i,s,r,a]}set(t,n,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Fi){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],E=s[13],b=s[14],S=s[15];if(i[0].setComponents(c-r,d-l,m-f,S-p).normalize(),i[1].setComponents(c+r,d+l,m+f,S+p).normalize(),i[2].setComponents(c+a,d+h,m+g,S+E).normalize(),i[3].setComponents(c-a,d-h,m-g,S-E).normalize(),i[4].setComponents(c-o,d-u,m-_,S-b).normalize(),n===Fi)i[5].setComponents(c+o,d+u,m+_,S+b).normalize();else if(n===Yo)i[5].setComponents(o,u,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(t){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(t){const n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(yo.x=s.normal.x>0?t.max.x:t.min.x,yo.y=s.normal.y>0?t.max.y:t.min.y,yo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yo)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function em(){let e=null,t=!1,n=null,i=null;function s(r,a){n(r,a),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function s_(e){const t=new WeakMap;function n(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=e.createBuffer();e.bindBuffer(c,d),e.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=e.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=e.SHORT;else if(l instanceof Uint32Array)f=e.UNSIGNED_INT;else if(l instanceof Int32Array)f=e.INT;else if(l instanceof Int8Array)f=e.BYTE;else if(l instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const h=c.array,u=c.updateRanges;if(e.bindBuffer(l,o),u.length===0)e.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];e.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(e.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class mn extends rn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};const r=t/2,a=n/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=n/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const E=p*d-a;for(let b=0;b<l;b++){const S=b*u-r;g.push(S,-E,0),_.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){const b=E+l*p,S=E+l*(p+1),O=E+1+l*(p+1),A=E+1+l*p;f.push(b,S,A),f.push(S,O,A)}this.setIndex(f),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.width,t.height,t.widthSegments,t.heightSegments)}}var r_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,o_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,d_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,p_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,__=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,v_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,x_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,C_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,R_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,P_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,L_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,U_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,N_="gl_FragColor = linearToOutputTexel( gl_FragColor );",F_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,O_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,B_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,k_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,H_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Y_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Z_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,J_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ev=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,av=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ov=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_v=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ev=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Av=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ov=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$v=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,t2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,i2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,u2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,d2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,f2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,p2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,x2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,E2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,w2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,R2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,D2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,F2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:r_,alphahash_pars_fragment:a_,alphamap_fragment:o_,alphamap_pars_fragment:c_,alphatest_fragment:l_,alphatest_pars_fragment:h_,aomap_fragment:u_,aomap_pars_fragment:d_,batching_pars_vertex:f_,batching_vertex:p_,begin_vertex:m_,beginnormal_vertex:g_,bsdfs:__,iridescence_fragment:v_,bumpmap_pars_fragment:x_,clipping_planes_fragment:y_,clipping_planes_pars_fragment:M_,clipping_planes_pars_vertex:S_,clipping_planes_vertex:E_,color_fragment:b_,color_pars_fragment:w_,color_pars_vertex:T_,color_vertex:A_,common:C_,cube_uv_reflection_fragment:R_,defaultnormal_vertex:P_,displacementmap_pars_vertex:L_,displacementmap_vertex:I_,emissivemap_fragment:D_,emissivemap_pars_fragment:U_,colorspace_fragment:N_,colorspace_pars_fragment:F_,envmap_fragment:O_,envmap_common_pars_fragment:B_,envmap_pars_fragment:k_,envmap_pars_vertex:z_,envmap_physical_pars_fragment:Z_,envmap_vertex:V_,fog_vertex:H_,fog_pars_vertex:G_,fog_fragment:W_,fog_pars_fragment:X_,gradientmap_pars_fragment:q_,lightmap_pars_fragment:Y_,lights_lambert_fragment:j_,lights_lambert_pars_fragment:$_,lights_pars_begin:K_,lights_toon_fragment:J_,lights_toon_pars_fragment:Q_,lights_phong_fragment:tv,lights_phong_pars_fragment:ev,lights_physical_fragment:nv,lights_physical_pars_fragment:iv,lights_fragment_begin:sv,lights_fragment_maps:rv,lights_fragment_end:av,logdepthbuf_fragment:ov,logdepthbuf_pars_fragment:cv,logdepthbuf_pars_vertex:lv,logdepthbuf_vertex:hv,map_fragment:uv,map_pars_fragment:dv,map_particle_fragment:fv,map_particle_pars_fragment:pv,metalnessmap_fragment:mv,metalnessmap_pars_fragment:gv,morphinstance_vertex:_v,morphcolor_vertex:vv,morphnormal_vertex:xv,morphtarget_pars_vertex:yv,morphtarget_vertex:Mv,normal_fragment_begin:Sv,normal_fragment_maps:Ev,normal_pars_fragment:bv,normal_pars_vertex:wv,normal_vertex:Tv,normalmap_pars_fragment:Av,clearcoat_normal_fragment_begin:Cv,clearcoat_normal_fragment_maps:Rv,clearcoat_pars_fragment:Pv,iridescence_pars_fragment:Lv,opaque_fragment:Iv,packing:Dv,premultiplied_alpha_fragment:Uv,project_vertex:Nv,dithering_fragment:Fv,dithering_pars_fragment:Ov,roughnessmap_fragment:Bv,roughnessmap_pars_fragment:kv,shadowmap_pars_fragment:zv,shadowmap_pars_vertex:Vv,shadowmap_vertex:Hv,shadowmask_pars_fragment:Gv,skinbase_vertex:Wv,skinning_pars_vertex:Xv,skinning_vertex:qv,skinnormal_vertex:Yv,specularmap_fragment:jv,specularmap_pars_fragment:$v,tonemapping_fragment:Kv,tonemapping_pars_fragment:Zv,transmission_fragment:Jv,transmission_pars_fragment:Qv,uv_pars_fragment:t2,uv_pars_vertex:e2,uv_vertex:n2,worldpos_vertex:i2,background_vert:s2,background_frag:r2,backgroundCube_vert:a2,backgroundCube_frag:o2,cube_vert:c2,cube_frag:l2,depth_vert:h2,depth_frag:u2,distanceRGBA_vert:d2,distanceRGBA_frag:f2,equirect_vert:p2,equirect_frag:m2,linedashed_vert:g2,linedashed_frag:_2,meshbasic_vert:v2,meshbasic_frag:x2,meshlambert_vert:y2,meshlambert_frag:M2,meshmatcap_vert:S2,meshmatcap_frag:E2,meshnormal_vert:b2,meshnormal_frag:w2,meshphong_vert:T2,meshphong_frag:A2,meshphysical_vert:C2,meshphysical_frag:R2,meshtoon_vert:P2,meshtoon_frag:L2,points_vert:I2,points_frag:D2,shadow_vert:U2,shadow_frag:N2,sprite_vert:F2,sprite_frag:O2},nt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},ui={basic:{uniforms:on([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:on([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:on([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:on([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:on([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:on([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:on([nt.points,nt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:on([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:on([nt.common,nt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:on([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:on([nt.sprite,nt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:on([nt.common,nt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:on([nt.lights,nt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};ui.physical={uniforms:on([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Mo={r:0,b:0,g:0},Es=new ii,B2=new me;function k2(e,t,n,i,s,r,a){const o=new Vt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?n:t).get(b)),b}function _(E){let b=!1;const S=g(E);S===null?p(o,c):S&&S.isColor&&(p(S,1),b=!0);const O=e.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(e.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(E,b){const S=g(b);S&&(S.isCubeTexture||S.mapping===ac)?(h===void 0&&(h=new Bt(new Xr(1,1,1),new ds({name:"BackgroundCubeMaterial",uniforms:Pr(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Es.copy(b.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(B2.makeRotationFromEuler(Es)),h.material.toneMapped=Zt.getTransfer(S.colorSpace)!==ae,(u!==S||d!==S.version||f!==e.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=e.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Bt(new mn(2,2),new ds({name:"BackgroundMaterial",uniforms:Pr(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(S.colorSpace)!==ae,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=e.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,b){E.getRGB(Mo,Jp(e)),i.buffers.color.setClear(Mo.r,Mo.g,Mo.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(o,c)},render:_,addToRenderList:m}}function z2(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(x,R,I,U,H){let G=!1;const q=u(U,I,R);r!==q&&(r=q,l(r.object)),G=f(x,U,I,H),G&&g(x,U,I,H),H!==null&&t.update(H,e.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,S(x,R,I,U),H!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return e.createVertexArray()}function l(x){return e.bindVertexArray(x)}function h(x){return e.deleteVertexArray(x)}function u(x,R,I){const U=I.wireframe===!0;let H=i[x.id];H===void 0&&(H={},i[x.id]=H);let G=H[R.id];G===void 0&&(G={},H[R.id]=G);let q=G[U];return q===void 0&&(q=d(c()),G[U]=q),q}function d(x){const R=[],I=[],U=[];for(let H=0;H<n;H++)R[H]=0,I[H]=0,U[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:U,object:x,attributes:{},index:null}}function f(x,R,I,U){const H=r.attributes,G=R.attributes;let q=0;const Z=I.getAttributes();for(const X in Z)if(Z[X].location>=0){const ut=H[X];let Tt=G[X];if(Tt===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(Tt=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(Tt=x.instanceColor)),ut===void 0||ut.attribute!==Tt||Tt&&ut.data!==Tt.data)return!0;q++}return r.attributesNum!==q||r.index!==U}function g(x,R,I,U){const H={},G=R.attributes;let q=0;const Z=I.getAttributes();for(const X in Z)if(Z[X].location>=0){let ut=G[X];ut===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(ut=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(ut=x.instanceColor));const Tt={};Tt.attribute=ut,ut&&ut.data&&(Tt.data=ut.data),H[X]=Tt,q++}r.attributes=H,r.attributesNum=q,r.index=U}function _(){const x=r.newAttributes;for(let R=0,I=x.length;R<I;R++)x[R]=0}function m(x){p(x,0)}function p(x,R){const I=r.newAttributes,U=r.enabledAttributes,H=r.attributeDivisors;I[x]=1,U[x]===0&&(e.enableVertexAttribArray(x),U[x]=1),H[x]!==R&&(e.vertexAttribDivisor(x,R),H[x]=R)}function E(){const x=r.newAttributes,R=r.enabledAttributes;for(let I=0,U=R.length;I<U;I++)R[I]!==x[I]&&(e.disableVertexAttribArray(I),R[I]=0)}function b(x,R,I,U,H,G,q){q===!0?e.vertexAttribIPointer(x,R,I,H,G):e.vertexAttribPointer(x,R,I,U,H,G)}function S(x,R,I,U){_();const H=U.attributes,G=I.getAttributes(),q=R.defaultAttributeValues;for(const Z in G){const X=G[Z];if(X.location>=0){let st=H[Z];if(st===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(st=x.instanceColor)),st!==void 0){const ut=st.normalized,Tt=st.itemSize,Ht=t.get(st);if(Ht===void 0)continue;const ce=Ht.buffer,j=Ht.type,et=Ht.bytesPerElement,Mt=j===e.INT||j===e.UNSIGNED_INT||st.gpuType===Oh;if(st.isInterleavedBufferAttribute){const rt=st.data,Lt=rt.stride,Ut=st.offset;if(rt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<X.locationSize;Gt++)p(X.location+Gt,rt.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Gt=0;Gt<X.locationSize;Gt++)m(X.location+Gt);e.bindBuffer(e.ARRAY_BUFFER,ce);for(let Gt=0;Gt<X.locationSize;Gt++)b(X.location+Gt,Tt/X.locationSize,j,ut,Lt*et,(Ut+Tt/X.locationSize*Gt)*et,Mt)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<X.locationSize;rt++)p(X.location+rt,st.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<X.locationSize;rt++)m(X.location+rt);e.bindBuffer(e.ARRAY_BUFFER,ce);for(let rt=0;rt<X.locationSize;rt++)b(X.location+rt,Tt/X.locationSize,j,ut,Tt*et,Tt/X.locationSize*rt*et,Mt)}}else if(q!==void 0){const ut=q[Z];if(ut!==void 0)switch(ut.length){case 2:e.vertexAttrib2fv(X.location,ut);break;case 3:e.vertexAttrib3fv(X.location,ut);break;case 4:e.vertexAttrib4fv(X.location,ut);break;default:e.vertexAttrib1fv(X.location,ut)}}}}E()}function O(){P();for(const x in i){const R=i[x];for(const I in R){const U=R[I];for(const H in U)h(U[H].object),delete U[H];delete R[I]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;const R=i[x.id];for(const I in R){const U=R[I];for(const H in U)h(U[H].object),delete U[H];delete R[I]}delete i[x.id]}function T(x){for(const R in i){const I=i[R];if(I[x.id]===void 0)continue;const U=I[x.id];for(const H in U)h(U[H].object),delete U[H];delete I[x.id]}}function P(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:O,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function V2(e,t,n){let i;function s(l){i=l}function r(l,h){e.drawArrays(i,l,h),n.update(h,i,1)}function a(l,h,u){u!==0&&(e.drawArraysInstanced(i,l,h,u),n.update(h,i,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];n.update(f,i,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function H2(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==Qn&&i.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const P=T===Ha&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Gi&&i.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ni&&!P)}function c(T){if(T==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),E=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,A=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:O,maxSamples:A}}function G2(e){const t=this;let n=null,i=0,s=!1,r=!1;const a=new Pi,o=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){n=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=e.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const E=r?0:i,b=E*4;let S=p.clippingState||null;c.value=S,S=h(g,d,b,f);for(let O=0;O!==b;++O)S[O]=n[O];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,S=f;b!==_;++b,S+=4)a.copy(u[b]).applyMatrix4(E,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function W2(e){let t=new WeakMap;function n(a,o){return o===Bl?a.mapping=Tr:o===kl&&(a.mapping=Ar),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Bl||o===kl)if(t.has(a)){const c=t.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new e_(c.height);return l.fromEquirectangularTexture(e,a),t.set(a,l),a.addEventListener("dispose",s),n(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class nm extends Qp{constructor(t=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+n,c=s-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const vr=4,Vd=[.125,.215,.35,.446,.526,.582],Ls=20,nl=new nm,Hd=new Vt;let il=null,sl=0,rl=0,al=!1;const Cs=(1+Math.sqrt(5))/2,ur=1/Cs,Gd=[new L(-Cs,ur,0),new L(Cs,ur,0),new L(-ur,0,Cs),new L(ur,0,Cs),new L(0,Cs,-ur),new L(0,Cs,ur),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Wd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100){il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(il,sl,rl),this._renderer.xr.enabled=al,t.scissorTest=!1,So(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Tr||t.mapping===Ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),il=this._renderer.getRenderTarget(),sl=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Ha,format:Qn,colorSpace:Gr,depthBuffer:!1},s=Xd(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xd(t,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X2(r)),this._blurMaterial=q2(r,t,n)}return s}_compileMaterial(t){const n=new Bt(this._lodPlanes[0],t);this._renderer.compile(n,nl)}_sceneToCubeUV(t,n,i,s){const o=new pn(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Hd),h.toneMapping=cs,h.autoClear=!1;const f=new sn({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new Bt(new Xr,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Hd),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):E===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const b=this._cubeSize;So(s,E*b,p>2?b:0,b,b),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,s=t.mapping===Tr||t.mapping===Ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qd());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;So(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,nl)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gd[(s-r-1)%Gd.length];this._blur(t,r-1,r,a,o)}n.autoClear=i}_blur(t,n,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,n,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,n,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Bt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ls-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ls;m>Ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ls}`);const p=[];let E=0;for(let T=0;T<Ls;++T){const P=T/_,M=Math.exp(-P*P/2);p.push(M),T===0?E+=M:T<m&&(E+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const S=this._sizeLods[s],O=3*S*(s>b-vr?s-b+vr:0),A=4*(this._cubeSize-S);So(n,O,A,3*S,2*S),c.setRenderTarget(n),c.render(u,nl)}}function X2(e){const t=[],n=[],i=[];let s=e;const r=e-vr+1+Vd.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);n.push(o);let c=1/o;a>e-vr?c=Vd[a-e+vr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),b=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let A=0;A<f;A++){const T=A%3*2/3-1,P=A>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];E.set(M,_*g*A),b.set(d,m*g*A);const x=[A,A,A,A,A,A];S.set(x,p*g*A)}const O=new rn;O.setAttribute("position",new _n(E,_)),O.setAttribute("uv",new _n(b,m)),O.setAttribute("faceIndex",new _n(S,p)),t.push(O),s>vr&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Xd(e,t,n){const i=new Ws(e,t,n);return i.texture.mapping=ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function So(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function q2(e,t,n){const i=new Float32Array(Ls),s=new L(0,1,0);return new ds({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function qd(){return new ds({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function Yd(){return new ds({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function qh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Y2(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Bl||c===kl,h=c===Tr||c===Ar;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new Wd(e)),u=l?n.fromEquirectangular(o,u):n.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(n===null&&(n=new Wd(e)),u=l?n.fromEquirectangular(o):n.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function j2(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&ya("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function $2(e,t,n,i){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,n.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],e.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],e.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let b=0,S=E.length;b<S;b+=3){const O=E[b+0],A=E[b+1],T=E[b+2];d.push(O,A,A,T,T,O)}}else if(g!==void 0){const E=g.array;_=g.version;for(let b=0,S=E.length/3-1;b<S;b+=3){const O=b+0,A=b+1,T=b+2;d.push(O,A,A,T,T,O)}}else return;const m=new(Wp(d)?Zp:Kp)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function K2(e,t,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){e.drawElements(i,f,r,d*a),n.update(f,i,1)}function l(d,f,g){g!==0&&(e.drawElementsInstanced(i,f,r,d*a,g),n.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];n.update(m,i,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*_[E];n.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Z2(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function J2(e,t,n){const i=new WeakMap,s=new Te;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let x=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let O=o.attributes.position.count*S,A=1;O>t.maxTextureSize&&(A=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const T=new Float32Array(O*A*4*u),P=new qp(T,O,A,u);P.type=Ni,P.needsUpdate=!0;const M=S*4;for(let R=0;R<u;R++){const I=p[R],U=E[R],H=b[R],G=O*A*4*R;for(let q=0;q<I.count;q++){const Z=q*M;g===!0&&(s.fromBufferAttribute(I,q),T[G+Z+0]=s.x,T[G+Z+1]=s.y,T[G+Z+2]=s.z,T[G+Z+3]=0),_===!0&&(s.fromBufferAttribute(U,q),T[G+Z+4]=s.x,T[G+Z+5]=s.y,T[G+Z+6]=s.z,T[G+Z+7]=0),m===!0&&(s.fromBufferAttribute(H,q),T[G+Z+8]=s.x,T[G+Z+9]=s.y,T[G+Z+10]=s.z,T[G+Z+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new ot(O,A)},i.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(e,"morphTargetBaseInfluence",_),c.getUniforms().setValue(e,"morphTargetInfluences",l)}c.getUniforms().setValue(e,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:r}}function Q2(e,t,n,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:r,dispose:a}}class im extends Ze{constructor(t,n,i,s,r,a,o,c,l,h=Mr){if(h!==Mr&&h!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Mr&&(i=Gs),i===void 0&&h===Rr&&(i=Cr),super(null,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:ei,this.minFilter=c!==void 0?c:ei,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const sm=new Ze,jd=new im(1,1),rm=new qp,am=new k1,om=new tm,$d=[],Kd=[],Zd=new Float32Array(16),Jd=new Float32Array(9),Qd=new Float32Array(4);function qr(e,t,n){const i=e[0];if(i<=0||i>0)return e;const s=t*n;let r=$d[s];if(r===void 0&&(r=new Float32Array(s),$d[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(r,o)}return r}function He(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ge(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function lc(e,t){let n=Kd[t];n===void 0&&(n=new Int32Array(t),Kd[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function tx(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ex(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(He(n,t))return;e.uniform2fv(this.addr,t),Ge(n,t)}}function nx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(He(n,t))return;e.uniform3fv(this.addr,t),Ge(n,t)}}function ix(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(He(n,t))return;e.uniform4fv(this.addr,t),Ge(n,t)}}function sx(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(He(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ge(n,t)}else{if(He(n,i))return;Qd.set(i),e.uniformMatrix2fv(this.addr,!1,Qd),Ge(n,i)}}function rx(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(He(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ge(n,t)}else{if(He(n,i))return;Jd.set(i),e.uniformMatrix3fv(this.addr,!1,Jd),Ge(n,i)}}function ax(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(He(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ge(n,t)}else{if(He(n,i))return;Zd.set(i),e.uniformMatrix4fv(this.addr,!1,Zd),Ge(n,i)}}function ox(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function cx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(He(n,t))return;e.uniform2iv(this.addr,t),Ge(n,t)}}function lx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(He(n,t))return;e.uniform3iv(this.addr,t),Ge(n,t)}}function hx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(He(n,t))return;e.uniform4iv(this.addr,t),Ge(n,t)}}function ux(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function dx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(He(n,t))return;e.uniform2uiv(this.addr,t),Ge(n,t)}}function fx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(He(n,t))return;e.uniform3uiv(this.addr,t),Ge(n,t)}}function px(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(He(n,t))return;e.uniform4uiv(this.addr,t),Ge(n,t)}}function mx(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(jd.compareFunction=Gp,r=jd):r=sm,n.setTexture2D(t||r,s)}function gx(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||am,s)}function _x(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||om,s)}function vx(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||rm,s)}function xx(e){switch(e){case 5126:return tx;case 35664:return ex;case 35665:return nx;case 35666:return ix;case 35674:return sx;case 35675:return rx;case 35676:return ax;case 5124:case 35670:return ox;case 35667:case 35671:return cx;case 35668:case 35672:return lx;case 35669:case 35673:return hx;case 5125:return ux;case 36294:return dx;case 36295:return fx;case 36296:return px;case 35678:case 36198:case 36298:case 36306:case 35682:return mx;case 35679:case 36299:case 36307:return gx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return vx}}function yx(e,t){e.uniform1fv(this.addr,t)}function Mx(e,t){const n=qr(t,this.size,2);e.uniform2fv(this.addr,n)}function Sx(e,t){const n=qr(t,this.size,3);e.uniform3fv(this.addr,n)}function Ex(e,t){const n=qr(t,this.size,4);e.uniform4fv(this.addr,n)}function bx(e,t){const n=qr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function wx(e,t){const n=qr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Tx(e,t){const n=qr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ax(e,t){e.uniform1iv(this.addr,t)}function Cx(e,t){e.uniform2iv(this.addr,t)}function Rx(e,t){e.uniform3iv(this.addr,t)}function Px(e,t){e.uniform4iv(this.addr,t)}function Lx(e,t){e.uniform1uiv(this.addr,t)}function Ix(e,t){e.uniform2uiv(this.addr,t)}function Dx(e,t){e.uniform3uiv(this.addr,t)}function Ux(e,t){e.uniform4uiv(this.addr,t)}function Nx(e,t,n){const i=this.cache,s=t.length,r=lc(n,s);He(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let a=0;a!==s;++a)n.setTexture2D(t[a]||sm,r[a])}function Fx(e,t,n){const i=this.cache,s=t.length,r=lc(n,s);He(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let a=0;a!==s;++a)n.setTexture3D(t[a]||am,r[a])}function Ox(e,t,n){const i=this.cache,s=t.length,r=lc(n,s);He(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let a=0;a!==s;++a)n.setTextureCube(t[a]||om,r[a])}function Bx(e,t,n){const i=this.cache,s=t.length,r=lc(n,s);He(i,r)||(e.uniform1iv(this.addr,r),Ge(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(t[a]||rm,r[a])}function kx(e){switch(e){case 5126:return yx;case 35664:return Mx;case 35665:return Sx;case 35666:return Ex;case 35674:return bx;case 35675:return wx;case 35676:return Tx;case 5124:case 35670:return Ax;case 35667:case 35671:return Cx;case 35668:case 35672:return Rx;case 35669:case 35673:return Px;case 5125:return Lx;case 36294:return Ix;case 36295:return Dx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return Bx}}class zx{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=xx(n.type)}}class Vx{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=kx(n.type)}}class Hx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,n[o.id],i)}}}const ol=/(\w+)(\])?(\[|\.)?/g;function tf(e,t){e.seq.push(t),e.map[t.id]=t}function Gx(e,t,n){const i=e.name,s=i.length;for(ol.lastIndex=0;;){const r=ol.exec(i),a=ol.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){tf(n,l===void 0?new zx(o,e,t):new Vx(o,e,t));break}else{let u=n.map[o];u===void 0&&(u=new Hx(o),tf(n,u)),n=u}}}class zo{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(n,s),a=t.getUniformLocation(n,r.name);Gx(r,a,this)}}setValue(t,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){const s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,a=n.length;r!==a;++r){const o=n[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,n){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in n&&i.push(a)}return i}}function ef(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const Wx=37297;let Xx=0;function qx(e,t){const n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const nf=new Ot;function Yx(e){Zt._getMatrix(nf,Zt.workingColorSpace,e);const t=`mat3( ${nf.elements.map(n=>n.toFixed(4))} )`;switch(Zt.getTransfer(e)){case oc:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function sf(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=e.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+qx(e.getShaderSource(t),a)}else return s}function jx(e,t){const n=Yx(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function $x(e,t){let n;switch(t){case Zg:n="Linear";break;case Jg:n="Reinhard";break;case Qg:n="Cineon";break;case t1:n="ACESFilmic";break;case n1:n="AgX";break;case i1:n="Neutral";break;case e1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Eo=new L;function Kx(){Zt.getLuminanceCoefficients(Eo);const e=Eo.x.toFixed(4),t=Eo.y.toFixed(4),n=Eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zx(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function Jx(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function Qx(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=e.getActiveAttrib(t,s),a=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ma(e){return e!==""}function rf(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function af(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ty=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(e){return e.replace(ty,ny)}const ey=new Map;function ny(e,t){let n=zt[t];if(n===void 0){const i=ey.get(t);if(i!==void 0)n=zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ph(n)}const iy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function of(e){return e.replace(iy,sy)}function sy(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cf(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ry(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Lp?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Pg?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Ri&&(t="SHADOWMAP_TYPE_VSM"),t}function ay(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Tr:case Ar:t="ENVMAP_TYPE_CUBE";break;case ac:t="ENVMAP_TYPE_CUBE_UV";break}return t}function oy(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Ar:t="ENVMAP_MODE_REFRACTION";break}return t}function cy(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Fh:t="ENVMAP_BLENDING_MULTIPLY";break;case $g:t="ENVMAP_BLENDING_MIX";break;case Kg:t="ENVMAP_BLENDING_ADD";break}return t}function ly(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function hy(e,t,n,i){const s=e.getContext(),r=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=ry(n),l=ay(n),h=oy(n),u=cy(n),d=ly(n),f=Zx(n),g=Jx(r),_=s.createProgram();let m,p,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ma).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ma).join(`
`),p.length>0&&(p+=`
`)):(m=[cf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),p=[cf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==cs?"#define TONE_MAPPING":"",n.toneMapping!==cs?zt.tonemapping_pars_fragment:"",n.toneMapping!==cs?$x("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,jx("linearToOutputTexel",n.outputColorSpace),Kx(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ma).join(`
`)),a=ph(a),a=rf(a,n),a=af(a,n),o=ph(o),o=rf(o,n),o=af(o,n),a=of(a),o=of(o),n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===xd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===xd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=E+m+a,S=E+p+o,O=ef(s,s.VERTEX_SHADER,b),A=ef(s,s.FRAGMENT_SHADER,S);s.attachShader(_,O),s.attachShader(_,A),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(R){if(e.debug.checkShaderErrors){const I=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(O).trim(),H=s.getShaderInfoLog(A).trim();let G=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,_,O,A);else{const Z=sf(s,O,"vertex"),X=sf(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+Z+`
`+X)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(U===""||H==="")&&(q=!1);q&&(R.diagnostics={runnable:G,programLog:I,vertexShader:{log:U,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(O),s.deleteShader(A),P=new zo(s,_),M=Qx(s,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Wx)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Xx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=A,this}let uy=0;class dy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new fy(t),n.set(t,i)),i}}class fy{constructor(t){this.id=uy++,this.code=t,this.usedTimes=0}}function py(e,t,n,i,s,r,a){const o=new jp,c=new dy,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,x,R,I,U){const H=I.fog,G=U.geometry,q=M.isMeshStandardMaterial?I.environment:null,Z=(M.isMeshStandardMaterial?n:t).get(M.envMap||q),X=Z&&Z.mapping===ac?Z.image.height:null,st=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const ut=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Tt=ut!==void 0?ut.length:0;let Ht=0;G.morphAttributes.position!==void 0&&(Ht=1),G.morphAttributes.normal!==void 0&&(Ht=2),G.morphAttributes.color!==void 0&&(Ht=3);let ce,j,et,Mt;if(st){const se=ui[st];ce=se.vertexShader,j=se.fragmentShader}else ce=M.vertexShader,j=M.fragmentShader,c.update(M),et=c.getVertexShaderID(M),Mt=c.getFragmentShaderID(M);const rt=e.getRenderTarget(),Lt=e.state.buffers.depth.getReversed(),Ut=U.isInstancedMesh===!0,Gt=U.isBatchedMesh===!0,xe=!!M.map,$t=!!M.matcap,Ce=!!Z,B=!!M.aoMap,Nn=!!M.lightMap,Wt=!!M.bumpMap,Xt=!!M.normalMap,Rt=!!M.displacementMap,de=!!M.emissiveMap,Ct=!!M.metalnessMap,w=!!M.roughnessMap,v=M.anisotropy>0,k=M.clearcoat>0,$=M.dispersion>0,J=M.iridescence>0,Y=M.sheen>0,Et=M.transmission>0,at=v&&!!M.anisotropyMap,dt=k&&!!M.clearcoatMap,Kt=k&&!!M.clearcoatNormalMap,Q=k&&!!M.clearcoatRoughnessMap,pt=J&&!!M.iridescenceMap,Pt=J&&!!M.iridescenceThicknessMap,It=Y&&!!M.sheenColorMap,mt=Y&&!!M.sheenRoughnessMap,qt=!!M.specularMap,kt=!!M.specularColorMap,le=!!M.specularIntensityMap,D=Et&&!!M.transmissionMap,it=Et&&!!M.thicknessMap,W=!!M.gradientMap,K=!!M.alphaMap,ht=M.alphaTest>0,ct=!!M.alphaHash,Nt=!!M.extensions;let be=cs;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(be=e.toneMapping);const Qe={shaderID:st,shaderType:M.type,shaderName:M.name,vertexShader:ce,fragmentShader:j,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:Mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Gt,batchingColor:Gt&&U._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&U.instanceColor!==null,instancingMorph:Ut&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?e.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Gr,alphaToCoverage:!!M.alphaToCoverage,map:xe,matcap:$t,envMap:Ce,envMapMode:Ce&&Z.mapping,envMapCubeUVHeight:X,aoMap:B,lightMap:Nn,bumpMap:Wt,normalMap:Xt,displacementMap:d&&Rt,emissiveMap:de,normalMapObjectSpace:Xt&&M.normalMapType===o1,normalMapTangentSpace:Xt&&M.normalMapType===Gh,metalnessMap:Ct,roughnessMap:w,anisotropy:v,anisotropyMap:at,clearcoat:k,clearcoatMap:dt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:Q,dispersion:$,iridescence:J,iridescenceMap:pt,iridescenceThicknessMap:Pt,sheen:Y,sheenColorMap:It,sheenRoughnessMap:mt,specularMap:qt,specularColorMap:kt,specularIntensityMap:le,transmission:Et,transmissionMap:D,thicknessMap:it,gradientMap:W,opaque:M.transparent===!1&&M.blending===yr&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:ht,alphaHash:ct,combine:M.combine,mapUv:xe&&_(M.map.channel),aoMapUv:B&&_(M.aoMap.channel),lightMapUv:Nn&&_(M.lightMap.channel),bumpMapUv:Wt&&_(M.bumpMap.channel),normalMapUv:Xt&&_(M.normalMap.channel),displacementMapUv:Rt&&_(M.displacementMap.channel),emissiveMapUv:de&&_(M.emissiveMap.channel),metalnessMapUv:Ct&&_(M.metalnessMap.channel),roughnessMapUv:w&&_(M.roughnessMap.channel),anisotropyMapUv:at&&_(M.anisotropyMap.channel),clearcoatMapUv:dt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:It&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(M.sheenRoughnessMap.channel),specularMapUv:qt&&_(M.specularMap.channel),specularColorMapUv:kt&&_(M.specularColorMap.channel),specularIntensityMapUv:le&&_(M.specularIntensityMap.channel),transmissionMapUv:D&&_(M.transmissionMap.channel),thicknessMapUv:it&&_(M.thicknessMap.channel),alphaMapUv:K&&_(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Xt||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(xe||K),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Lt,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Ht,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:be,decodeVideoTexture:xe&&M.map.isVideoTexture===!0&&Zt.getTransfer(M.map.colorSpace)===ae,decodeVideoTextureEmissive:de&&M.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(M.emissiveMap.colorSpace)===ae,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ln,flipSided:M.side===gn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Nt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&M.extensions.multiDraw===!0||Gt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function p(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)x.push(R),x.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(E(x,M),b(x,M),x.push(e.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function E(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function b(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){const x=g[M.type];let R;if(x){const I=ui[x];R=Z1.clone(I.uniforms)}else R=M.uniforms;return R}function O(M,x){let R;for(let I=0,U=h.length;I<U;I++){const H=h[I];if(H.cacheKey===x){R=H,++R.usedTimes;break}}return R===void 0&&(R=new hy(e,x,M,r),h.push(R)),R}function A(M){if(--M.usedTimes===0){const x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function T(M){c.remove(M)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:O,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:P}}function my(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function i(a){e.delete(a)}function s(a,o,c){e.get(a)[o]=c}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function gy(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function lf(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function hf(){const e=[];let t=0;const n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function a(u,d,f,g,_,m){let p=e[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},e[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):n.push(p)}function c(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):n.unshift(p)}function l(u,d){n.length>1&&n.sort(u||gy),i.length>1&&i.sort(d||lf),s.length>1&&s.sort(d||lf)}function h(){for(let u=t,d=e.length;u<d;u++){const f=e[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function _y(){let e=new WeakMap;function t(i,s){const r=e.get(i);let a;return r===void 0?(a=new hf,e.set(i,[a])):s>=r.length?(a=new hf,r.push(a)):a=r[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function vy(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new L,color:new Vt};break;case"SpotLight":n={position:new L,direction:new L,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":n={color:new Vt,position:new L,halfWidth:new L,halfHeight:new L};break}return e[t.id]=n,n}}}function xy(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let yy=0;function My(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Sy(e){const t=new vy,n=xy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new L);const s=new L,r=new me,a=new me;function o(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,E=0,b=0,S=0,O=0,A=0,T=0;l.sort(My);for(let M=0,x=l.length;M<x;M++){const R=l[M],I=R.color,U=R.intensity,H=R.distance,G=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=I.r*U,u+=I.g*U,d+=I.b*U;else if(R.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(R.sh.coefficients[q],U);T++}else if(R.isDirectionalLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,X=n.get(R);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=G,i.directionalShadowMatrix[f]=R.shadow.matrix,E++}i.directional[f]=q,f++}else if(R.isSpotLight){const q=t.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(I).multiplyScalar(U),q.distance=H,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,i.spot[_]=q;const Z=R.shadow;if(R.map&&(i.spotLightMap[O]=R.map,O++,Z.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[_]=Z.matrix,R.castShadow){const X=n.get(R);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=G,S++}_++}else if(R.isRectAreaLight){const q=t.get(R);q.color.copy(I).multiplyScalar(U),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=q,m++}else if(R.isPointLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const Z=R.shadow,X=n.get(R);X.shadowIntensity=Z.intensity,X.shadowBias=Z.bias,X.shadowNormalBias=Z.normalBias,X.shadowRadius=Z.radius,X.shadowMapSize=Z.mapSize,X.shadowCameraNear=Z.camera.near,X.shadowCameraFar=Z.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=R.shadow.matrix,b++}i.point[g]=q,g++}else if(R.isHemisphereLight){const q=t.get(R);q.skyColor.copy(R.color).multiplyScalar(U),q.groundColor.copy(R.groundColor).multiplyScalar(U),i.hemi[p]=q,p++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==E||P.numPointShadows!==b||P.numSpotShadows!==S||P.numSpotMaps!==O||P.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+O-A,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=E,P.numPointShadows=b,P.numSpotShadows=S,P.numSpotMaps=O,P.numLightProbes=T,i.version=yy++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const b=l[p];if(b.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(b.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function uf(e){const t=new Sy(e),n=[],i=[];function s(h){l.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function a(h){i.push(h)}function o(){t.setup(n)}function c(h){t.setupView(n,h)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Ey(e){let t=new WeakMap;function n(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new uf(e),t.set(s,[o])):r>=a.length?(o=new uf(e),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class by extends gs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=r1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wy extends gs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ay=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Cy(e,t,n){let i=new Xh;const s=new ot,r=new ot,a=new Te,o=new by({depthPacking:a1}),c=new wy,l={},h=n.maxTextureSize,u={[us]:gn,[gn]:us,[ln]:ln},d=new ds({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Ty,fragmentShader:Ay}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Bt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lp;let p=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=e.getRenderTarget(),x=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),I=e.state;I.setBlending(os),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=p!==Ri&&this.type===Ri,H=p===Ri&&this.type!==Ri;for(let G=0,q=A.length;G<q;G++){const Z=A[G],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const st=X.getFrameExtents();if(s.multiply(st),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,X.mapSize.y=r.y)),X.map===null||U===!0||H===!0){const Tt=this.type!==Ri?{minFilter:ei,magFilter:ei}:{};X.map!==null&&X.map.dispose(),X.map=new Ws(s.x,s.y,Tt),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}e.setRenderTarget(X.map),e.clear();const ut=X.getViewportCount();for(let Tt=0;Tt<ut;Tt++){const Ht=X.getViewport(Tt);a.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),I.viewport(a),X.updateMatrices(Z,Tt),i=X.getFrustum(),S(T,P,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===Ri&&E(X,P),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,e.setRenderTarget(M,x,R)};function E(A,T){const P=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ws(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(T,null,P,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(T,null,P,f,_,null)}function b(A,T,P,M){let x=null;const R=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)x=R;else if(x=P.isPointLight===!0?c:o,e.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=x.uuid,U=T.uuid;let H=l[I];H===void 0&&(H={},l[I]=H);let G=H[U];G===void 0&&(G=x.clone(),H[U]=G,T.addEventListener("dispose",O)),x=G}if(x.visible=T.visible,x.wireframe=T.wireframe,M===Ri?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:u[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=e.properties.get(x);I.light=P}return x}function S(A,T,P,M,x){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Ri)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const U=t.update(A),H=A.material;if(Array.isArray(H)){const G=U.groups;for(let q=0,Z=G.length;q<Z;q++){const X=G[q],st=H[X.materialIndex];if(st&&st.visible){const ut=b(A,st,M,x);A.onBeforeShadow(e,A,T,P,U,ut,X),e.renderBufferDirect(P,null,U,ut,A,X),A.onAfterShadow(e,A,T,P,U,ut,X)}}}else if(H.visible){const G=b(A,H,M,x);A.onBeforeShadow(e,A,T,P,U,G,null),e.renderBufferDirect(P,null,U,G,A,null),A.onAfterShadow(e,A,T,P,U,G,null)}}const I=A.children;for(let U=0,H=I.length;U<H;U++)S(I[U],T,P,M,x)}function O(A){A.target.removeEventListener("dispose",O);for(const P in l){const M=l[P],x=A.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const Ry={[Ll]:Il,[Dl]:Fl,[Ul]:Ol,[wr]:Nl,[Il]:Ll,[Fl]:Dl,[Ol]:Ul,[Nl]:wr};function Py(e,t){function n(){let D=!1;const it=new Te;let W=null;const K=new Te(0,0,0,0);return{setMask:function(ht){W!==ht&&!D&&(e.colorMask(ht,ht,ht,ht),W=ht)},setLocked:function(ht){D=ht},setClear:function(ht,ct,Nt,be,Qe){Qe===!0&&(ht*=be,ct*=be,Nt*=be),it.set(ht,ct,Nt,be),K.equals(it)===!1&&(e.clearColor(ht,ct,Nt,be),K.copy(it))},reset:function(){D=!1,W=null,K.set(-1,0,0,0)}}}function i(){let D=!1,it=!1,W=null,K=null,ht=null;return{setReversed:function(ct){if(it!==ct){const Nt=t.get("EXT_clip_control");it?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const be=ht;ht=null,this.setClear(be)}it=ct},getReversed:function(){return it},setTest:function(ct){ct?rt(e.DEPTH_TEST):Lt(e.DEPTH_TEST)},setMask:function(ct){W!==ct&&!D&&(e.depthMask(ct),W=ct)},setFunc:function(ct){if(it&&(ct=Ry[ct]),K!==ct){switch(ct){case Ll:e.depthFunc(e.NEVER);break;case Il:e.depthFunc(e.ALWAYS);break;case Dl:e.depthFunc(e.LESS);break;case wr:e.depthFunc(e.LEQUAL);break;case Ul:e.depthFunc(e.EQUAL);break;case Nl:e.depthFunc(e.GEQUAL);break;case Fl:e.depthFunc(e.GREATER);break;case Ol:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}K=ct}},setLocked:function(ct){D=ct},setClear:function(ct){ht!==ct&&(it&&(ct=1-ct),e.clearDepth(ct),ht=ct)},reset:function(){D=!1,W=null,K=null,ht=null,it=!1}}}function s(){let D=!1,it=null,W=null,K=null,ht=null,ct=null,Nt=null,be=null,Qe=null;return{setTest:function(se){D||(se?rt(e.STENCIL_TEST):Lt(e.STENCIL_TEST))},setMask:function(se){it!==se&&!D&&(e.stencilMask(se),it=se)},setFunc:function(se,qn,Si){(W!==se||K!==qn||ht!==Si)&&(e.stencilFunc(se,qn,Si),W=se,K=qn,ht=Si)},setOp:function(se,qn,Si){(ct!==se||Nt!==qn||be!==Si)&&(e.stencilOp(se,qn,Si),ct=se,Nt=qn,be=Si)},setLocked:function(se){D=se},setClear:function(se){Qe!==se&&(e.clearStencil(se),Qe=se)},reset:function(){D=!1,it=null,W=null,K=null,ht=null,ct=null,Nt=null,be=null,Qe=null}}}const r=new n,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,b=null,S=null,O=null,A=null,T=new Vt(0,0,0),P=0,M=!1,x=null,R=null,I=null,U=null,H=null;const G=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Z=0;const X=e.getParameter(e.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=Z>=2);let st=null,ut={};const Tt=e.getParameter(e.SCISSOR_BOX),Ht=e.getParameter(e.VIEWPORT),ce=new Te().fromArray(Tt),j=new Te().fromArray(Ht);function et(D,it,W,K){const ht=new Uint8Array(4),ct=e.createTexture();e.bindTexture(D,ct),e.texParameteri(D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(D,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Nt=0;Nt<W;Nt++)D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY?e.texImage3D(it,0,e.RGBA,1,1,K,0,e.RGBA,e.UNSIGNED_BYTE,ht):e.texImage2D(it+Nt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ht);return ct}const Mt={};Mt[e.TEXTURE_2D]=et(e.TEXTURE_2D,e.TEXTURE_2D,1),Mt[e.TEXTURE_CUBE_MAP]=et(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[e.TEXTURE_2D_ARRAY]=et(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Mt[e.TEXTURE_3D]=et(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(e.DEPTH_TEST),a.setFunc(wr),Wt(!1),Xt(fd),rt(e.CULL_FACE),B(os);function rt(D){h[D]!==!0&&(e.enable(D),h[D]=!0)}function Lt(D){h[D]!==!1&&(e.disable(D),h[D]=!1)}function Ut(D,it){return u[D]!==it?(e.bindFramebuffer(D,it),u[D]=it,D===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=it),D===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=it),!0):!1}function Gt(D,it){let W=f,K=!1;if(D){W=d.get(it),W===void 0&&(W=[],d.set(it,W));const ht=D.textures;if(W.length!==ht.length||W[0]!==e.COLOR_ATTACHMENT0){for(let ct=0,Nt=ht.length;ct<Nt;ct++)W[ct]=e.COLOR_ATTACHMENT0+ct;W.length=ht.length,K=!0}}else W[0]!==e.BACK&&(W[0]=e.BACK,K=!0);K&&e.drawBuffers(W)}function xe(D){return g!==D?(e.useProgram(D),g=D,!0):!1}const $t={[Ps]:e.FUNC_ADD,[Ig]:e.FUNC_SUBTRACT,[Dg]:e.FUNC_REVERSE_SUBTRACT};$t[Ug]=e.MIN,$t[Ng]=e.MAX;const Ce={[Fg]:e.ZERO,[Og]:e.ONE,[Bg]:e.SRC_COLOR,[Rl]:e.SRC_ALPHA,[Wg]:e.SRC_ALPHA_SATURATE,[Hg]:e.DST_COLOR,[zg]:e.DST_ALPHA,[kg]:e.ONE_MINUS_SRC_COLOR,[Pl]:e.ONE_MINUS_SRC_ALPHA,[Gg]:e.ONE_MINUS_DST_COLOR,[Vg]:e.ONE_MINUS_DST_ALPHA,[Xg]:e.CONSTANT_COLOR,[qg]:e.ONE_MINUS_CONSTANT_COLOR,[Yg]:e.CONSTANT_ALPHA,[jg]:e.ONE_MINUS_CONSTANT_ALPHA};function B(D,it,W,K,ht,ct,Nt,be,Qe,se){if(D===os){_===!0&&(Lt(e.BLEND),_=!1);return}if(_===!1&&(rt(e.BLEND),_=!0),D!==Lg){if(D!==m||se!==M){if((p!==Ps||S!==Ps)&&(e.blendEquation(e.FUNC_ADD),p=Ps,S=Ps),se)switch(D){case yr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case pd:e.blendFunc(e.ONE,e.ONE);break;case md:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case gd:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case yr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case pd:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case md:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case gd:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,b=null,O=null,A=null,T.set(0,0,0),P=0,m=D,M=se}return}ht=ht||it,ct=ct||W,Nt=Nt||K,(it!==p||ht!==S)&&(e.blendEquationSeparate($t[it],$t[ht]),p=it,S=ht),(W!==E||K!==b||ct!==O||Nt!==A)&&(e.blendFuncSeparate(Ce[W],Ce[K],Ce[ct],Ce[Nt]),E=W,b=K,O=ct,A=Nt),(be.equals(T)===!1||Qe!==P)&&(e.blendColor(be.r,be.g,be.b,Qe),T.copy(be),P=Qe),m=D,M=!1}function Nn(D,it){D.side===ln?Lt(e.CULL_FACE):rt(e.CULL_FACE);let W=D.side===gn;it&&(W=!W),Wt(W),D.blending===yr&&D.transparent===!1?B(os):B(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const K=D.stencilWrite;o.setTest(K),K&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),de(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(e.SAMPLE_ALPHA_TO_COVERAGE):Lt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(D){x!==D&&(D?e.frontFace(e.CW):e.frontFace(e.CCW),x=D)}function Xt(D){D!==Cg?(rt(e.CULL_FACE),D!==R&&(D===fd?e.cullFace(e.BACK):D===Rg?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Lt(e.CULL_FACE),R=D}function Rt(D){D!==I&&(q&&e.lineWidth(D),I=D)}function de(D,it,W){D?(rt(e.POLYGON_OFFSET_FILL),(U!==it||H!==W)&&(e.polygonOffset(it,W),U=it,H=W)):Lt(e.POLYGON_OFFSET_FILL)}function Ct(D){D?rt(e.SCISSOR_TEST):Lt(e.SCISSOR_TEST)}function w(D){D===void 0&&(D=e.TEXTURE0+G-1),st!==D&&(e.activeTexture(D),st=D)}function v(D,it,W){W===void 0&&(st===null?W=e.TEXTURE0+G-1:W=st);let K=ut[W];K===void 0&&(K={type:void 0,texture:void 0},ut[W]=K),(K.type!==D||K.texture!==it)&&(st!==W&&(e.activeTexture(W),st=W),e.bindTexture(D,it||Mt[D]),K.type=D,K.texture=it)}function k(){const D=ut[st];D!==void 0&&D.type!==void 0&&(e.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{e.compressedTexImage2D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{e.compressedTexImage3D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{e.texSubImage2D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{e.texSubImage3D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Kt(){try{e.texStorage2D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{e.texStorage3D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{e.texImage2D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(){try{e.texImage3D.apply(e,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(D){ce.equals(D)===!1&&(e.scissor(D.x,D.y,D.z,D.w),ce.copy(D))}function mt(D){j.equals(D)===!1&&(e.viewport(D.x,D.y,D.z,D.w),j.copy(D))}function qt(D,it){let W=l.get(it);W===void 0&&(W=new WeakMap,l.set(it,W));let K=W.get(D);K===void 0&&(K=e.getUniformBlockIndex(it,D.name),W.set(D,K))}function kt(D,it){const K=l.get(it).get(D);c.get(it)!==K&&(e.uniformBlockBinding(it,K,D.__bindingPointIndex),c.set(it,K))}function le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},st=null,ut={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,b=null,S=null,O=null,A=null,T=new Vt(0,0,0),P=0,M=!1,x=null,R=null,I=null,U=null,H=null,ce.set(0,0,e.canvas.width,e.canvas.height),j.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Lt,bindFramebuffer:Ut,drawBuffers:Gt,useProgram:xe,setBlending:B,setMaterial:Nn,setFlipSided:Wt,setCullFace:Xt,setLineWidth:Rt,setPolygonOffset:de,setScissorTest:Ct,activeTexture:w,bindTexture:v,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:pt,texImage3D:Pt,updateUBOMapping:qt,uniformBlockBinding:kt,texStorage2D:Kt,texStorage3D:Q,texSubImage2D:Y,texSubImage3D:Et,compressedTexSubImage2D:at,compressedTexSubImage3D:dt,scissor:It,viewport:mt,reset:le}}function df(e,t,n,i){const s=Ly(i);switch(n){case Fp:return e*t;case Bp:return e*t;case kp:return e*t*2;case zp:return e*t/s.components*s.byteLength;case zh:return e*t/s.components*s.byteLength;case Vp:return e*t*2/s.components*s.byteLength;case Vh:return e*t*2/s.components*s.byteLength;case Op:return e*t*3/s.components*s.byteLength;case Qn:return e*t*4/s.components*s.byteLength;case Hh:return e*t*4/s.components*s.byteLength;case No:case Fo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Oo:case Bo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Hl:case Wl:return Math.max(e,16)*Math.max(t,8)/4;case Vl:case Gl:return Math.max(e,8)*Math.max(t,8)/2;case Xl:case ql:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Yl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case jl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case th:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case eh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case nh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ih:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case sh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case rh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ah:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case oh:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ko:case ch:case lh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Hp:case hh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case uh:case dh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ly(e){switch(e){case Gi:case Dp:return{byteLength:1,components:1};case Da:case Up:case Ha:return{byteLength:2,components:1};case Bh:case kh:return{byteLength:2,components:4};case Gs:case Oh:case Ni:return{byteLength:4,components:1};case Np:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function Iy(e,t,n,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return f?new OffscreenCanvas(w,v):Na("canvas")}function _(w,v,k){let $=1;const J=Ct(w);if((J.width>k||J.height>k)&&($=k/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Y=Math.floor($*J.width),Et=Math.floor($*J.height);u===void 0&&(u=g(Y,Et));const at=v?g(Y,Et):u;return at.width=Y,at.height=Et,at.getContext("2d").drawImage(w,0,0,Y,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+Et+")."),at}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){e.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(w,v,k,$,J=!1){if(w!==null){if(e[w]!==void 0)return e[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=v;if(v===e.RED&&(k===e.FLOAT&&(Y=e.R32F),k===e.HALF_FLOAT&&(Y=e.R16F),k===e.UNSIGNED_BYTE&&(Y=e.R8)),v===e.RED_INTEGER&&(k===e.UNSIGNED_BYTE&&(Y=e.R8UI),k===e.UNSIGNED_SHORT&&(Y=e.R16UI),k===e.UNSIGNED_INT&&(Y=e.R32UI),k===e.BYTE&&(Y=e.R8I),k===e.SHORT&&(Y=e.R16I),k===e.INT&&(Y=e.R32I)),v===e.RG&&(k===e.FLOAT&&(Y=e.RG32F),k===e.HALF_FLOAT&&(Y=e.RG16F),k===e.UNSIGNED_BYTE&&(Y=e.RG8)),v===e.RG_INTEGER&&(k===e.UNSIGNED_BYTE&&(Y=e.RG8UI),k===e.UNSIGNED_SHORT&&(Y=e.RG16UI),k===e.UNSIGNED_INT&&(Y=e.RG32UI),k===e.BYTE&&(Y=e.RG8I),k===e.SHORT&&(Y=e.RG16I),k===e.INT&&(Y=e.RG32I)),v===e.RGB_INTEGER&&(k===e.UNSIGNED_BYTE&&(Y=e.RGB8UI),k===e.UNSIGNED_SHORT&&(Y=e.RGB16UI),k===e.UNSIGNED_INT&&(Y=e.RGB32UI),k===e.BYTE&&(Y=e.RGB8I),k===e.SHORT&&(Y=e.RGB16I),k===e.INT&&(Y=e.RGB32I)),v===e.RGBA_INTEGER&&(k===e.UNSIGNED_BYTE&&(Y=e.RGBA8UI),k===e.UNSIGNED_SHORT&&(Y=e.RGBA16UI),k===e.UNSIGNED_INT&&(Y=e.RGBA32UI),k===e.BYTE&&(Y=e.RGBA8I),k===e.SHORT&&(Y=e.RGBA16I),k===e.INT&&(Y=e.RGBA32I)),v===e.RGB&&k===e.UNSIGNED_INT_5_9_9_9_REV&&(Y=e.RGB9_E5),v===e.RGBA){const Et=J?oc:Zt.getTransfer($);k===e.FLOAT&&(Y=e.RGBA32F),k===e.HALF_FLOAT&&(Y=e.RGBA16F),k===e.UNSIGNED_BYTE&&(Y=Et===ae?e.SRGB8_ALPHA8:e.RGBA8),k===e.UNSIGNED_SHORT_4_4_4_4&&(Y=e.RGBA4),k===e.UNSIGNED_SHORT_5_5_5_1&&(Y=e.RGB5_A1)}return(Y===e.R16F||Y===e.R32F||Y===e.RG16F||Y===e.RG32F||Y===e.RGBA16F||Y===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function S(w,v){let k;return w?v===null||v===Gs||v===Cr?k=e.DEPTH24_STENCIL8:v===Ni?k=e.DEPTH32F_STENCIL8:v===Da&&(k=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Gs||v===Cr?k=e.DEPTH_COMPONENT24:v===Ni?k=e.DEPTH_COMPONENT32F:v===Da&&(k=e.DEPTH_COMPONENT16),k}function O(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==ei&&w.minFilter!==Hn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function A(w){const v=w.target;v.removeEventListener("dispose",A),P(v),v.isVideoTexture&&h.delete(v)}function T(w){const v=w.target;v.removeEventListener("dispose",T),x(v)}function P(w){const v=i.get(w);if(v.__webglInit===void 0)return;const k=w.source,$=d.get(k);if($){const J=$[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(w),Object.keys($).length===0&&d.delete(k)}i.remove(w)}function M(w){const v=i.get(w);e.deleteTexture(v.__webglTexture);const k=w.source,$=d.get(k);delete $[v.__cacheKey],a.memory.textures--}function x(w){const v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let J=0;J<v.__webglFramebuffer[$].length;J++)e.deleteFramebuffer(v.__webglFramebuffer[$][J]);else e.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)e.deleteFramebuffer(v.__webglFramebuffer[$]);else e.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&e.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&e.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&e.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=w.textures;for(let $=0,J=k.length;$<J;$++){const Y=i.get(k[$]);Y.__webglTexture&&(e.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(k[$])}i.remove(w)}let R=0;function I(){R=0}function U(){const w=R;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),R+=1,w}function H(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function G(w,v){const k=i.get(w);if(w.isVideoTexture&&Rt(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){const $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,w,v);return}}n.bindTexture(e.TEXTURE_2D,k.__webglTexture,e.TEXTURE0+v)}function q(w,v){const k=i.get(w);if(w.version>0&&k.__version!==w.version){j(k,w,v);return}n.bindTexture(e.TEXTURE_2D_ARRAY,k.__webglTexture,e.TEXTURE0+v)}function Z(w,v){const k=i.get(w);if(w.version>0&&k.__version!==w.version){j(k,w,v);return}n.bindTexture(e.TEXTURE_3D,k.__webglTexture,e.TEXTURE0+v)}function X(w,v){const k=i.get(w);if(w.version>0&&k.__version!==w.version){et(k,w,v);return}n.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture,e.TEXTURE0+v)}const st={[Zn]:e.REPEAT,[Ds]:e.CLAMP_TO_EDGE,[zl]:e.MIRRORED_REPEAT},ut={[ei]:e.NEAREST,[s1]:e.NEAREST_MIPMAP_NEAREST,[no]:e.NEAREST_MIPMAP_LINEAR,[Hn]:e.LINEAR,[Nc]:e.LINEAR_MIPMAP_NEAREST,[Us]:e.LINEAR_MIPMAP_LINEAR},Tt={[c1]:e.NEVER,[p1]:e.ALWAYS,[l1]:e.LESS,[Gp]:e.LEQUAL,[h1]:e.EQUAL,[f1]:e.GEQUAL,[u1]:e.GREATER,[d1]:e.NOTEQUAL};function Ht(w,v){if(v.type===Ni&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Hn||v.magFilter===Nc||v.magFilter===no||v.magFilter===Us||v.minFilter===Hn||v.minFilter===Nc||v.minFilter===no||v.minFilter===Us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,st[v.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,st[v.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,st[v.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,ut[v.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,ut[v.minFilter]),v.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,Tt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ei||v.minFilter!==no&&v.minFilter!==Us||v.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ce(w,v){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",A));const $=v.source;let J=d.get($);J===void 0&&(J={},d.set($,J));const Y=H(v);if(Y!==w.__cacheKey){J[Y]===void 0&&(J[Y]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[Y].usedTimes++;const Et=J[w.__cacheKey];Et!==void 0&&(J[w.__cacheKey].usedTimes--,Et.usedTimes===0&&M(v)),w.__cacheKey=Y,w.__webglTexture=J[Y].texture}return k}function j(w,v,k){let $=e.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=e.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=e.TEXTURE_3D);const J=ce(w,v),Y=v.source;n.bindTexture($,w.__webglTexture,e.TEXTURE0+k);const Et=i.get(Y);if(Y.version!==Et.__version||J===!0){n.activeTexture(e.TEXTURE0+k);const at=Zt.getPrimaries(Zt.workingColorSpace),dt=v.colorSpace===Li?null:Zt.getPrimaries(v.colorSpace),Kt=v.colorSpace===Li||at===dt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let Q=_(v.image,!1,s.maxTextureSize);Q=de(v,Q);const pt=r.convert(v.format,v.colorSpace),Pt=r.convert(v.type);let It=b(v.internalFormat,pt,Pt,v.colorSpace,v.isVideoTexture);Ht($,v);let mt;const qt=v.mipmaps,kt=v.isVideoTexture!==!0,le=Et.__version===void 0||J===!0,D=Y.dataReady,it=O(v,Q);if(v.isDepthTexture)It=S(v.format===Rr,v.type),le&&(kt?n.texStorage2D(e.TEXTURE_2D,1,It,Q.width,Q.height):n.texImage2D(e.TEXTURE_2D,0,It,Q.width,Q.height,0,pt,Pt,null));else if(v.isDataTexture)if(qt.length>0){kt&&le&&n.texStorage2D(e.TEXTURE_2D,it,It,qt[0].width,qt[0].height);for(let W=0,K=qt.length;W<K;W++)mt=qt[W],kt?D&&n.texSubImage2D(e.TEXTURE_2D,W,0,0,mt.width,mt.height,pt,Pt,mt.data):n.texImage2D(e.TEXTURE_2D,W,It,mt.width,mt.height,0,pt,Pt,mt.data);v.generateMipmaps=!1}else kt?(le&&n.texStorage2D(e.TEXTURE_2D,it,It,Q.width,Q.height),D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,Q.width,Q.height,pt,Pt,Q.data)):n.texImage2D(e.TEXTURE_2D,0,It,Q.width,Q.height,0,pt,Pt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){kt&&le&&n.texStorage3D(e.TEXTURE_2D_ARRAY,it,It,qt[0].width,qt[0].height,Q.depth);for(let W=0,K=qt.length;W<K;W++)if(mt=qt[W],v.format!==Qn)if(pt!==null)if(kt){if(D)if(v.layerUpdates.size>0){const ht=df(mt.width,mt.height,v.format,v.type);for(const ct of v.layerUpdates){const Nt=mt.data.subarray(ct*ht/mt.data.BYTES_PER_ELEMENT,(ct+1)*ht/mt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,ct,mt.width,mt.height,1,pt,Nt)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,0,mt.width,mt.height,Q.depth,pt,mt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,W,It,mt.width,mt.height,Q.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,W,0,0,0,mt.width,mt.height,Q.depth,pt,Pt,mt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,W,It,mt.width,mt.height,Q.depth,0,pt,Pt,mt.data)}else{kt&&le&&n.texStorage2D(e.TEXTURE_2D,it,It,qt[0].width,qt[0].height);for(let W=0,K=qt.length;W<K;W++)mt=qt[W],v.format!==Qn?pt!==null?kt?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,W,0,0,mt.width,mt.height,pt,mt.data):n.compressedTexImage2D(e.TEXTURE_2D,W,It,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?D&&n.texSubImage2D(e.TEXTURE_2D,W,0,0,mt.width,mt.height,pt,Pt,mt.data):n.texImage2D(e.TEXTURE_2D,W,It,mt.width,mt.height,0,pt,Pt,mt.data)}else if(v.isDataArrayTexture)if(kt){if(le&&n.texStorage3D(e.TEXTURE_2D_ARRAY,it,It,Q.width,Q.height,Q.depth),D)if(v.layerUpdates.size>0){const W=df(Q.width,Q.height,v.format,v.type);for(const K of v.layerUpdates){const ht=Q.data.subarray(K*W/Q.data.BYTES_PER_ELEMENT,(K+1)*W/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,pt,Pt,ht)}v.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,Pt,Q.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,It,Q.width,Q.height,Q.depth,0,pt,Pt,Q.data);else if(v.isData3DTexture)kt?(le&&n.texStorage3D(e.TEXTURE_3D,it,It,Q.width,Q.height,Q.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,Pt,Q.data)):n.texImage3D(e.TEXTURE_3D,0,It,Q.width,Q.height,Q.depth,0,pt,Pt,Q.data);else if(v.isFramebufferTexture){if(le)if(kt)n.texStorage2D(e.TEXTURE_2D,it,It,Q.width,Q.height);else{let W=Q.width,K=Q.height;for(let ht=0;ht<it;ht++)n.texImage2D(e.TEXTURE_2D,ht,It,W,K,0,pt,Pt,null),W>>=1,K>>=1}}else if(qt.length>0){if(kt&&le){const W=Ct(qt[0]);n.texStorage2D(e.TEXTURE_2D,it,It,W.width,W.height)}for(let W=0,K=qt.length;W<K;W++)mt=qt[W],kt?D&&n.texSubImage2D(e.TEXTURE_2D,W,0,0,pt,Pt,mt):n.texImage2D(e.TEXTURE_2D,W,It,pt,Pt,mt);v.generateMipmaps=!1}else if(kt){if(le){const W=Ct(Q);n.texStorage2D(e.TEXTURE_2D,it,It,W.width,W.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,pt,Pt,Q)}else n.texImage2D(e.TEXTURE_2D,0,It,pt,Pt,Q);m(v)&&p($),Et.__version=Y.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function et(w,v,k){if(v.image.length!==6)return;const $=ce(w,v),J=v.source;n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+k);const Y=i.get(J);if(J.version!==Y.__version||$===!0){n.activeTexture(e.TEXTURE0+k);const Et=Zt.getPrimaries(Zt.workingColorSpace),at=v.colorSpace===Li?null:Zt.getPrimaries(v.colorSpace),dt=v.colorSpace===Li||Et===at?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Kt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,pt=[];for(let K=0;K<6;K++)!Kt&&!Q?pt[K]=_(v.image[K],!0,s.maxCubemapSize):pt[K]=Q?v.image[K].image:v.image[K],pt[K]=de(v,pt[K]);const Pt=pt[0],It=r.convert(v.format,v.colorSpace),mt=r.convert(v.type),qt=b(v.internalFormat,It,mt,v.colorSpace),kt=v.isVideoTexture!==!0,le=Y.__version===void 0||$===!0,D=J.dataReady;let it=O(v,Pt);Ht(e.TEXTURE_CUBE_MAP,v);let W;if(Kt){kt&&le&&n.texStorage2D(e.TEXTURE_CUBE_MAP,it,qt,Pt.width,Pt.height);for(let K=0;K<6;K++){W=pt[K].mipmaps;for(let ht=0;ht<W.length;ht++){const ct=W[ht];v.format!==Qn?It!==null?kt?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,ct.width,ct.height,It,ct.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,qt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,ct.width,ct.height,It,mt,ct.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,qt,ct.width,ct.height,0,It,mt,ct.data)}}}else{if(W=v.mipmaps,kt&&le){W.length>0&&it++;const K=Ct(pt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,it,qt,K.width,K.height)}for(let K=0;K<6;K++)if(Q){kt?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pt[K].width,pt[K].height,It,mt,pt[K].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qt,pt[K].width,pt[K].height,0,It,mt,pt[K].data);for(let ht=0;ht<W.length;ht++){const Nt=W[ht].image[K].image;kt?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,Nt.width,Nt.height,It,mt,Nt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,qt,Nt.width,Nt.height,0,It,mt,Nt.data)}}else{kt?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,It,mt,pt[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qt,It,mt,pt[K]);for(let ht=0;ht<W.length;ht++){const ct=W[ht];kt?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,It,mt,ct.image[K]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,qt,It,mt,ct.image[K])}}}m(v)&&p(e.TEXTURE_CUBE_MAP),Y.__version=J.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Mt(w,v,k,$,J,Y){const Et=r.convert(k.format,k.colorSpace),at=r.convert(k.type),dt=b(k.internalFormat,Et,at,k.colorSpace),Kt=i.get(v),Q=i.get(k);if(Q.__renderTarget=v,!Kt.__hasExternalTextures){const pt=Math.max(1,v.width>>Y),Pt=Math.max(1,v.height>>Y);J===e.TEXTURE_3D||J===e.TEXTURE_2D_ARRAY?n.texImage3D(J,Y,dt,pt,Pt,v.depth,0,Et,at,null):n.texImage2D(J,Y,dt,pt,Pt,0,Et,at,null)}n.bindFramebuffer(e.FRAMEBUFFER,w),Xt(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,J,Q.__webglTexture,0,Wt(v)):(J===e.TEXTURE_2D||J>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,$,J,Q.__webglTexture,Y),n.bindFramebuffer(e.FRAMEBUFFER,null)}function rt(w,v,k){if(e.bindRenderbuffer(e.RENDERBUFFER,w),v.depthBuffer){const $=v.depthTexture,J=$&&$.isDepthTexture?$.type:null,Y=S(v.stencilBuffer,J),Et=v.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=Wt(v);Xt(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,at,Y,v.width,v.height):k?e.renderbufferStorageMultisample(e.RENDERBUFFER,at,Y,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,Y,v.width,v.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Et,e.RENDERBUFFER,w)}else{const $=v.textures;for(let J=0;J<$.length;J++){const Y=$[J],Et=r.convert(Y.format,Y.colorSpace),at=r.convert(Y.type),dt=b(Y.internalFormat,Et,at,Y.colorSpace),Kt=Wt(v);k&&Xt(v)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Kt,dt,v.width,v.height):Xt(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Kt,dt,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,dt,v.width,v.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Lt(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const J=$.__webglTexture,Y=Wt(v);if(v.depthTexture.format===Mr)Xt(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,J,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,J,0);else if(v.depthTexture.format===Rr)Xt(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,J,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ut(w){const v=i.get(w),k=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){const $=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=$}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Lt(v.__webglFramebuffer,w)}else if(k){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=e.createRenderbuffer(),rt(v.__webglDepthbuffer[$],w,!1);else{const J=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[$];e.bindRenderbuffer(e.RENDERBUFFER,Y),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=e.createRenderbuffer(),rt(v.__webglDepthbuffer,w,!1);else{const $=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,J),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,J)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Gt(w,v,k){const $=i.get(w);v!==void 0&&Mt($.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),k!==void 0&&Ut(w)}function xe(w){const v=w.texture,k=i.get(w),$=i.get(v);w.addEventListener("dispose",T);const J=w.textures,Y=w.isWebGLCubeRenderTarget===!0,Et=J.length>1;if(Et||($.__webglTexture===void 0&&($.__webglTexture=e.createTexture()),$.__version=v.version,a.memory.textures++),Y){k.__webglFramebuffer=[];for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[at]=[];for(let dt=0;dt<v.mipmaps.length;dt++)k.__webglFramebuffer[at][dt]=e.createFramebuffer()}else k.__webglFramebuffer[at]=e.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)k.__webglFramebuffer[at]=e.createFramebuffer()}else k.__webglFramebuffer=e.createFramebuffer();if(Et)for(let at=0,dt=J.length;at<dt;at++){const Kt=i.get(J[at]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=e.createTexture(),a.memory.textures++)}if(w.samples>0&&Xt(w)===!1){k.__webglMultisampledFramebuffer=e.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const dt=J[at];k.__webglColorRenderbuffer[at]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,k.__webglColorRenderbuffer[at]);const Kt=r.convert(dt.format,dt.colorSpace),Q=r.convert(dt.type),pt=b(dt.internalFormat,Kt,Q,dt.colorSpace,w.isXRRenderTarget===!0),Pt=Wt(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,Pt,pt,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+at,e.RENDERBUFFER,k.__webglColorRenderbuffer[at])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=e.createRenderbuffer(),rt(k.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Y){n.bindTexture(e.TEXTURE_CUBE_MAP,$.__webglTexture),Ht(e.TEXTURE_CUBE_MAP,v);for(let at=0;at<6;at++)if(v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)Mt(k.__webglFramebuffer[at][dt],w,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+at,dt);else Mt(k.__webglFramebuffer[at],w,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(v)&&p(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Et){for(let at=0,dt=J.length;at<dt;at++){const Kt=J[at],Q=i.get(Kt);n.bindTexture(e.TEXTURE_2D,Q.__webglTexture),Ht(e.TEXTURE_2D,Kt),Mt(k.__webglFramebuffer,w,Kt,e.COLOR_ATTACHMENT0+at,e.TEXTURE_2D,0),m(Kt)&&p(e.TEXTURE_2D)}n.unbindTexture()}else{let at=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(at=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(at,$.__webglTexture),Ht(at,v),v.mipmaps&&v.mipmaps.length>0)for(let dt=0;dt<v.mipmaps.length;dt++)Mt(k.__webglFramebuffer[dt],w,v,e.COLOR_ATTACHMENT0,at,dt);else Mt(k.__webglFramebuffer,w,v,e.COLOR_ATTACHMENT0,at,0);m(v)&&p(at),n.unbindTexture()}w.depthBuffer&&Ut(w)}function $t(w){const v=w.textures;for(let k=0,$=v.length;k<$;k++){const J=v[k];if(m(J)){const Y=E(w),Et=i.get(J).__webglTexture;n.bindTexture(Y,Et),p(Y),n.unbindTexture()}}}const Ce=[],B=[];function Nn(w){if(w.samples>0){if(Xt(w)===!1){const v=w.textures,k=w.width,$=w.height;let J=e.COLOR_BUFFER_BIT;const Y=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Et=i.get(w),at=v.length>1;if(at)for(let dt=0;dt<v.length;dt++)n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=e.STENCIL_BUFFER_BIT)),at){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Et.__webglColorRenderbuffer[dt]);const Kt=i.get(v[dt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Kt,0)}e.blitFramebuffer(0,0,k,$,0,0,k,$,J,e.NEAREST),c===!0&&(Ce.length=0,B.length=0,Ce.push(e.COLOR_ATTACHMENT0+dt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ce.push(Y),B.push(Y),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,B)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ce))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),at)for(let dt=0;dt<v.length;dt++){n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.RENDERBUFFER,Et.__webglColorRenderbuffer[dt]);const Kt=i.get(v[dt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+dt,e.TEXTURE_2D,Kt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const v=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[v])}}}function Wt(w){return Math.min(s.maxSamples,w.samples)}function Xt(w){const v=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Rt(w){const v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function de(w,v){const k=w.colorSpace,$=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==Gr&&k!==Li&&(Zt.getTransfer(k)===ae?($!==Qn||J!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function Ct(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=X,this.rebindTextures=Gt,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Nn,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Xt}function Dy(e,t){function n(i,s=Li){let r;const a=Zt.getTransfer(s);if(i===Gi)return e.UNSIGNED_BYTE;if(i===Bh)return e.UNSIGNED_SHORT_4_4_4_4;if(i===kh)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Np)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Dp)return e.BYTE;if(i===Up)return e.SHORT;if(i===Da)return e.UNSIGNED_SHORT;if(i===Oh)return e.INT;if(i===Gs)return e.UNSIGNED_INT;if(i===Ni)return e.FLOAT;if(i===Ha)return e.HALF_FLOAT;if(i===Fp)return e.ALPHA;if(i===Op)return e.RGB;if(i===Qn)return e.RGBA;if(i===Bp)return e.LUMINANCE;if(i===kp)return e.LUMINANCE_ALPHA;if(i===Mr)return e.DEPTH_COMPONENT;if(i===Rr)return e.DEPTH_STENCIL;if(i===zp)return e.RED;if(i===zh)return e.RED_INTEGER;if(i===Vp)return e.RG;if(i===Vh)return e.RG_INTEGER;if(i===Hh)return e.RGBA_INTEGER;if(i===No||i===Fo||i===Oo||i===Bo)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===No)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===No)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vl||i===Hl||i===Gl||i===Wl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xl||i===ql||i===Yl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xl||i===ql)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Yl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===jl||i===$l||i===Kl||i===Zl||i===Jl||i===Ql||i===th||i===eh||i===nh||i===ih||i===sh||i===rh||i===ah||i===oh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===jl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$l)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jl)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ql)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===th)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===eh)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nh)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ih)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sh)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rh)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ah)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oh)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ko||i===ch||i===lh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ko)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ch)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hp||i===hh||i===uh||i===dh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ko)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cr?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class Uy extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Oi extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ny={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ny)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Oi;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const Fy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Oy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class By{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const s=new Ze,r=t.properties.get(s);r.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new ds({vertexShader:Fy,fragmentShader:Oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Bt(new mn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ky extends Wr{constructor(t,n){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new By,m=n.getContextAttributes();let p=null,E=null;const b=[],S=[],O=new ot;let A=null;const T=new pn;T.viewport=new Te;const P=new pn;P.viewport=new Te;const M=[T,P],x=new Uy;let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let et=b[j];return et===void 0&&(et=new cl,b[j]=et),et.getTargetRaySpace()},this.getControllerGrip=function(j){let et=b[j];return et===void 0&&(et=new cl,b[j]=et),et.getGripSpace()},this.getHand=function(j){let et=b[j];return et===void 0&&(et=new cl,b[j]=et),et.getHandSpace()};function U(j){const et=S.indexOf(j.inputSource);if(et===-1)return;const Mt=b[et];Mt!==void 0&&(Mt.update(j.inputSource,j.frame,l||a),Mt.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",G);for(let j=0;j<b.length;j++){const et=S[j];et!==null&&(S[j]=null,b[j].disconnect(et))}R=null,I=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,E=null,ce.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",H),s.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Ws(f.framebufferWidth,f.framebufferHeight,{format:Qn,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,Mt=null,rt=null;m.depth&&(rt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,et=m.stencil?Rr:Mr,Mt=m.stencil?Cr:Gs);const Lt={colorFormat:n.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,n),d=u.createProjectionLayer(Lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Ws(d.textureWidth,d.textureHeight,{format:Qn,type:Gi,depthTexture:new im(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ce.setContext(s),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(j){for(let et=0;et<j.removed.length;et++){const Mt=j.removed[et],rt=S.indexOf(Mt);rt>=0&&(S[rt]=null,b[rt].disconnect(Mt))}for(let et=0;et<j.added.length;et++){const Mt=j.added[et];let rt=S.indexOf(Mt);if(rt===-1){for(let Ut=0;Ut<b.length;Ut++)if(Ut>=S.length){S.push(Mt),rt=Ut;break}else if(S[Ut]===null){S[Ut]=Mt,rt=Ut;break}if(rt===-1)break}const Lt=b[rt];Lt&&Lt.connect(Mt)}}const q=new L,Z=new L;function X(j,et,Mt){q.setFromMatrixPosition(et.matrixWorld),Z.setFromMatrixPosition(Mt.matrixWorld);const rt=q.distanceTo(Z),Lt=et.projectionMatrix.elements,Ut=Mt.projectionMatrix.elements,Gt=Lt[14]/(Lt[10]-1),xe=Lt[14]/(Lt[10]+1),$t=(Lt[9]+1)/Lt[5],Ce=(Lt[9]-1)/Lt[5],B=(Lt[8]-1)/Lt[0],Nn=(Ut[8]+1)/Ut[0],Wt=Gt*B,Xt=Gt*Nn,Rt=rt/(-B+Nn),de=Rt*-B;if(et.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(de),j.translateZ(Rt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Lt[10]===-1)j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Ct=Gt+Rt,w=xe+Rt,v=Wt-de,k=Xt+(rt-de),$=$t*xe/w*Ct,J=Ce*xe/w*Ct;j.projectionMatrix.makePerspective(v,k,$,J,Ct,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function st(j,et){et===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(et.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let et=j.near,Mt=j.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(Mt=_.depthFar)),x.near=P.near=T.near=et,x.far=P.far=T.far=Mt,(R!==x.near||I!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,I=x.far),T.layers.mask=j.layers.mask|2,P.layers.mask=j.layers.mask|4,x.layers.mask=T.layers.mask|P.layers.mask;const rt=j.parent,Lt=x.cameras;st(x,rt);for(let Ut=0;Ut<Lt.length;Ut++)st(Lt[Ut],rt);Lt.length===2?X(x,T,P):x.projectionMatrix.copy(T.projectionMatrix),ut(j,x,rt)};function ut(j,et,Mt){Mt===null?j.matrix.copy(et.matrixWorld):(j.matrix.copy(Mt.matrixWorld),j.matrix.invert(),j.matrix.multiply(et.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ua*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let Tt=null;function Ht(j,et){if(h=et.getViewerPose(l||a),g=et,h!==null){const Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let rt=!1;Mt.length!==x.cameras.length&&(x.cameras.length=0,rt=!0);for(let Ut=0;Ut<Mt.length;Ut++){const Gt=Mt[Ut];let xe=null;if(f!==null)xe=f.getViewport(Gt);else{const Ce=u.getViewSubImage(d,Gt);xe=Ce.viewport,Ut===0&&(t.setRenderTargetTextures(E,Ce.colorTexture,d.ignoreDepthValues?void 0:Ce.depthStencilTexture),t.setRenderTarget(E))}let $t=M[Ut];$t===void 0&&($t=new pn,$t.layers.enable(Ut),$t.viewport=new Te,M[Ut]=$t),$t.matrix.fromArray(Gt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Gt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(xe.x,xe.y,xe.width,xe.height),Ut===0&&(x.matrix.copy($t.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),rt===!0&&x.cameras.push($t)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Ut=u.getDepthInformation(Mt[0]);Ut&&Ut.isValid&&Ut.texture&&_.init(t,Ut,s.renderState)}}for(let Mt=0;Mt<b.length;Mt++){const rt=S[Mt],Lt=b[Mt];rt!==null&&Lt!==void 0&&Lt.update(rt,et,l||a)}Tt&&Tt(j,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}const ce=new em;ce.setAnimationLoop(Ht),this.setAnimationLoop=function(j){Tt=j},this.dispose=function(){}}}const bs=new ii,zy=new me;function Vy(e,t){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Jp(e)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,b,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,E,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),b=E.envMap,S=E.envMapRotation;b&&(m.envMap.value=b,bs.copy(S),bs.x*=-1,bs.y*=-1,bs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),m.envMapRotation.value.setFromMatrix4(zy.makeRotationFromEuler(bs)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=b*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Hy(e,t,n,i){let s={},r={},a=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,b){const S=b.program;i.uniformBlockBinding(E,S)}function l(E,b){let S=s[E.id];S===void 0&&(g(E),S=h(E),s[E.id]=S,E.addEventListener("dispose",m));const O=b.program;i.updateUBOMapping(E,O);const A=t.render.frame;r[E.id]!==A&&(d(E),r[E.id]=A)}function h(E){const b=u();E.__bindingPointIndex=b;const S=e.createBuffer(),O=E.__size,A=E.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,O,A),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,b,S),S}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const b=s[E.id],S=E.uniforms,O=E.__cache;e.bindBuffer(e.UNIFORM_BUFFER,b);for(let A=0,T=S.length;A<T;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,x=P.length;M<x;M++){const R=P[M];if(f(R,A,M,O)===!0){const I=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let G=0;G<U.length;G++){const q=U[G],Z=_(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,e.bufferSubData(e.UNIFORM_BUFFER,I+H,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,H),H+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,I,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(E,b,S,O){const A=E.value,T=b+"_"+S;if(O[T]===void 0)return typeof A=="number"||typeof A=="boolean"?O[T]=A:O[T]=A.clone(),!0;{const P=O[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return O[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(E){const b=E.uniforms;let S=0;const O=16;for(let T=0,P=b.length;T<P;T++){const M=Array.isArray(b[T])?b[T]:[b[T]];for(let x=0,R=M.length;x<R;x++){const I=M[x],U=Array.isArray(I.value)?I.value:[I.value];for(let H=0,G=U.length;H<G;H++){const q=U[H],Z=_(q),X=S%O,st=X%Z.boundary,ut=X+st;S+=st,ut!==0&&O-ut<Z.storage&&(S+=O-ut),I.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=Z.storage}}}const A=S%O;return A>0&&(S+=O-A),E.__size=S,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),e.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const E in s)e.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Yh{constructor(t={}){const{canvas:n=L1(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Me,this.toneMapping=cs,this.toneMappingExposure=1;const S=this;let O=!1,A=0,T=0,P=null,M=-1,x=null;const R=new Te,I=new Te;let U=null;const H=new Vt(0);let G=0,q=n.width,Z=n.height,X=1,st=null,ut=null;const Tt=new Te(0,0,q,Z),Ht=new Te(0,0,q,Z);let ce=!1;const j=new Xh;let et=!1,Mt=!1;const rt=new me,Lt=new me,Ut=new L,Gt=new Te,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function Ce(){return P===null?X:1}let B=i;function Nn(y,N){return n.getContext(y,N)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Nh}`),n.addEventListener("webglcontextlost",K,!1),n.addEventListener("webglcontextrestored",ht,!1),n.addEventListener("webglcontextcreationerror",ct,!1),B===null){const N="webgl2";if(B=Nn(N,y),B===null)throw Nn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Wt,Xt,Rt,de,Ct,w,v,k,$,J,Y,Et,at,dt,Kt,Q,pt,Pt,It,mt,qt,kt,le,D;function it(){Wt=new j2(B),Wt.init(),kt=new Dy(B,Wt),Xt=new H2(B,Wt,t,kt),Rt=new Py(B,Wt),Xt.reverseDepthBuffer&&d&&Rt.buffers.depth.setReversed(!0),de=new Z2(B),Ct=new my,w=new Iy(B,Wt,Rt,Ct,Xt,kt,de),v=new W2(S),k=new Y2(S),$=new s_(B),le=new z2(B,$),J=new $2(B,$,de,le),Y=new Q2(B,J,$,de),It=new J2(B,Xt,w),Q=new G2(Ct),Et=new py(S,v,k,Wt,Xt,le,Q),at=new Vy(S,Ct),dt=new _y,Kt=new Ey(Wt),Pt=new k2(S,v,k,Rt,Y,f,c),pt=new Cy(S,Y,Xt),D=new Hy(B,de,Xt,Rt),mt=new V2(B,Wt,de),qt=new K2(B,Wt,de),de.programs=Et.programs,S.capabilities=Xt,S.extensions=Wt,S.properties=Ct,S.renderLists=dt,S.shadowMap=pt,S.state=Rt,S.info=de}it();const W=new ky(S,B);this.xr=W,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const y=Wt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Wt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(q,Z,!1))},this.getSize=function(y){return y.set(q,Z)},this.setSize=function(y,N,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,Z=N,n.width=Math.floor(y*X),n.height=Math.floor(N*X),z===!0&&(n.style.width=y+"px",n.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(q*X,Z*X).floor()},this.setDrawingBufferSize=function(y,N,z){q=y,Z=N,X=z,n.width=Math.floor(y*z),n.height=Math.floor(N*z),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(R)},this.getViewport=function(y){return y.copy(Tt)},this.setViewport=function(y,N,z,V){y.isVector4?Tt.set(y.x,y.y,y.z,y.w):Tt.set(y,N,z,V),Rt.viewport(R.copy(Tt).multiplyScalar(X).round())},this.getScissor=function(y){return y.copy(Ht)},this.setScissor=function(y,N,z,V){y.isVector4?Ht.set(y.x,y.y,y.z,y.w):Ht.set(y,N,z,V),Rt.scissor(I.copy(Ht).multiplyScalar(X).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(y){Rt.setScissorTest(ce=y)},this.setOpaqueSort=function(y){st=y},this.setTransparentSort=function(y){ut=y},this.getClearColor=function(y){return y.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(y=!0,N=!0,z=!0){let V=0;if(y){let F=!1;if(P!==null){const tt=P.texture.format;F=tt===Hh||tt===Vh||tt===zh}if(F){const tt=P.texture.type,lt=tt===Gi||tt===Gs||tt===Da||tt===Cr||tt===Bh||tt===kh,gt=Pt.getClearColor(),_t=Pt.getClearAlpha(),Dt=gt.r,Ft=gt.g,vt=gt.b;lt?(g[0]=Dt,g[1]=Ft,g[2]=vt,g[3]=_t,B.clearBufferuiv(B.COLOR,0,g)):(_[0]=Dt,_[1]=Ft,_[2]=vt,_[3]=_t,B.clearBufferiv(B.COLOR,0,_))}else V|=B.COLOR_BUFFER_BIT}N&&(V|=B.DEPTH_BUFFER_BIT),z&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",K,!1),n.removeEventListener("webglcontextrestored",ht,!1),n.removeEventListener("webglcontextcreationerror",ct,!1),dt.dispose(),Kt.dispose(),Ct.dispose(),v.dispose(),k.dispose(),Y.dispose(),le.dispose(),D.dispose(),Et.dispose(),W.dispose(),W.removeEventListener("sessionstart",rd),W.removeEventListener("sessionend",ad),vs.stop()};function K(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const y=de.autoReset,N=pt.enabled,z=pt.autoUpdate,V=pt.needsUpdate,F=pt.type;it(),de.autoReset=y,pt.enabled=N,pt.autoUpdate=z,pt.needsUpdate=V,pt.type=F}function ct(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Nt(y){const N=y.target;N.removeEventListener("dispose",Nt),be(N)}function be(y){Qe(y),Ct.remove(y)}function Qe(y){const N=Ct.get(y).programs;N!==void 0&&(N.forEach(function(z){Et.releaseProgram(z)}),y.isShaderMaterial&&Et.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,z,V,F,tt){N===null&&(N=xe);const lt=F.isMesh&&F.matrixWorld.determinant()<0,gt=Eg(y,N,z,V,F);Rt.setMaterial(V,lt);let _t=z.index,Dt=1;if(V.wireframe===!0){if(_t=J.getWireframeAttribute(z),_t===void 0)return;Dt=2}const Ft=z.drawRange,vt=z.attributes.position;let Qt=Ft.start*Dt,he=(Ft.start+Ft.count)*Dt;tt!==null&&(Qt=Math.max(Qt,tt.start*Dt),he=Math.min(he,(tt.start+tt.count)*Dt)),_t!==null?(Qt=Math.max(Qt,0),he=Math.min(he,_t.count)):vt!=null&&(Qt=Math.max(Qt,0),he=Math.min(he,vt.count));const fe=he-Qt;if(fe<0||fe===1/0)return;le.setup(F,V,gt,z,_t);let un,ne=mt;if(_t!==null&&(un=$.get(_t),ne=qt,ne.setIndex(un)),F.isMesh)V.wireframe===!0?(Rt.setLineWidth(V.wireframeLinewidth*Ce()),ne.setMode(B.LINES)):ne.setMode(B.TRIANGLES);else if(F.isLine){let bt=V.linewidth;bt===void 0&&(bt=1),Rt.setLineWidth(bt*Ce()),F.isLineSegments?ne.setMode(B.LINES):F.isLineLoop?ne.setMode(B.LINE_LOOP):ne.setMode(B.LINE_STRIP)}else F.isPoints?ne.setMode(B.POINTS):F.isSprite&&ne.setMode(B.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ne.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))ne.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const bt=F._multiDrawStarts,Ei=F._multiDrawCounts,ie=F._multiDrawCount,Yn=_t?$.get(_t).bytesPerElement:1,Zs=Ct.get(V).currentProgram.getUniforms();for(let xn=0;xn<ie;xn++)Zs.setValue(B,"_gl_DrawID",xn),ne.render(bt[xn]/Yn,Ei[xn])}else if(F.isInstancedMesh)ne.renderInstances(Qt,fe,F.count);else if(z.isInstancedBufferGeometry){const bt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ei=Math.min(z.instanceCount,bt);ne.renderInstances(Qt,fe,Ei)}else ne.render(Qt,fe)};function se(y,N,z){y.transparent===!0&&y.side===ln&&y.forceSinglePass===!1?(y.side=gn,y.needsUpdate=!0,eo(y,N,z),y.side=us,y.needsUpdate=!0,eo(y,N,z),y.side=ln):eo(y,N,z)}this.compile=function(y,N,z=null){z===null&&(z=y),p=Kt.get(z),p.init(N),b.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),y!==z&&y.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const V=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const tt=F.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){const gt=tt[lt];se(gt,z,F),V.add(gt)}else se(tt,z,F),V.add(tt)}),b.pop(),p=null,V},this.compileAsync=function(y,N,z=null){const V=this.compile(y,N,z);return new Promise(F=>{function tt(){if(V.forEach(function(lt){Ct.get(lt).currentProgram.isReady()&&V.delete(lt)}),V.size===0){F(y);return}setTimeout(tt,10)}Wt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let qn=null;function Si(y){qn&&qn(y)}function rd(){vs.stop()}function ad(){vs.start()}const vs=new em;vs.setAnimationLoop(Si),typeof self<"u"&&vs.setContext(self),this.setAnimationLoop=function(y){qn=y,W.setAnimationLoop(y),y===null?vs.stop():vs.start()},W.addEventListener("sessionstart",rd),W.addEventListener("sessionend",ad),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),y.isScene===!0&&y.onBeforeRender(S,y,N,P),p=Kt.get(y,b.length),p.init(N),b.push(p),Lt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),j.setFromProjectionMatrix(Lt),Mt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,Mt),m=dt.get(y,E.length),m.init(),E.push(m),W.enabled===!0&&W.isPresenting===!0){const tt=S.xr.getDepthSensingMesh();tt!==null&&Uc(tt,N,-1/0,S.sortObjects)}Uc(y,N,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(st,ut),$t=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,$t&&Pt.addToRenderList(m,y),this.info.render.frame++,et===!0&&Q.beginShadows();const z=p.state.shadowsArray;pt.render(z,y,N),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,F=m.transmissive;if(p.setupLights(),N.isArrayCamera){const tt=N.cameras;if(F.length>0)for(let lt=0,gt=tt.length;lt<gt;lt++){const _t=tt[lt];cd(V,F,y,_t)}$t&&Pt.render(y);for(let lt=0,gt=tt.length;lt<gt;lt++){const _t=tt[lt];od(m,y,_t,_t.viewport)}}else F.length>0&&cd(V,F,y,N),$t&&Pt.render(y),od(m,y,N);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(S,y,N),le.resetDefaultState(),M=-1,x=null,b.pop(),b.length>0?(p=b[b.length-1],et===!0&&Q.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Uc(y,N,z,V){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||j.intersectsSprite(y)){V&&Gt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Lt);const lt=Y.update(y),gt=y.material;gt.visible&&m.push(y,lt,gt,z,Gt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||j.intersectsObject(y))){const lt=Y.update(y),gt=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Gt.copy(y.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Gt.copy(lt.boundingSphere.center)),Gt.applyMatrix4(y.matrixWorld).applyMatrix4(Lt)),Array.isArray(gt)){const _t=lt.groups;for(let Dt=0,Ft=_t.length;Dt<Ft;Dt++){const vt=_t[Dt],Qt=gt[vt.materialIndex];Qt&&Qt.visible&&m.push(y,lt,Qt,z,Gt.z,vt)}}else gt.visible&&m.push(y,lt,gt,z,Gt.z,null)}}const tt=y.children;for(let lt=0,gt=tt.length;lt<gt;lt++)Uc(tt[lt],N,z,V)}function od(y,N,z,V){const F=y.opaque,tt=y.transmissive,lt=y.transparent;p.setupLightsView(z),et===!0&&Q.setGlobalState(S.clippingPlanes,z),V&&Rt.viewport(R.copy(V)),F.length>0&&to(F,N,z),tt.length>0&&to(tt,N,z),lt.length>0&&to(lt,N,z),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function cd(y,N,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Ws(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?Ha:Gi,minFilter:Us,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const tt=p.state.transmissionRenderTarget[V.id],lt=V.viewport||R;tt.setSize(lt.z,lt.w);const gt=S.getRenderTarget();S.setRenderTarget(tt),S.getClearColor(H),G=S.getClearAlpha(),G<1&&S.setClearColor(16777215,.5),S.clear(),$t&&Pt.render(z);const _t=S.toneMapping;S.toneMapping=cs;const Dt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),et===!0&&Q.setGlobalState(S.clippingPlanes,V),to(y,z,V),w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let vt=0,Qt=N.length;vt<Qt;vt++){const he=N[vt],fe=he.object,un=he.geometry,ne=he.material,bt=he.group;if(ne.side===ln&&fe.layers.test(V.layers)){const Ei=ne.side;ne.side=gn,ne.needsUpdate=!0,ld(fe,z,V,un,ne,bt),ne.side=Ei,ne.needsUpdate=!0,Ft=!0}}Ft===!0&&(w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt))}S.setRenderTarget(gt),S.setClearColor(H,G),Dt!==void 0&&(V.viewport=Dt),S.toneMapping=_t}function to(y,N,z){const V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,tt=y.length;F<tt;F++){const lt=y[F],gt=lt.object,_t=lt.geometry,Dt=V===null?lt.material:V,Ft=lt.group;gt.layers.test(z.layers)&&ld(gt,N,z,_t,Dt,Ft)}}function ld(y,N,z,V,F,tt){y.onBeforeRender(S,N,z,V,F,tt),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(S,N,z,V,y,tt),F.transparent===!0&&F.side===ln&&F.forceSinglePass===!1?(F.side=gn,F.needsUpdate=!0,S.renderBufferDirect(z,N,V,F,y,tt),F.side=us,F.needsUpdate=!0,S.renderBufferDirect(z,N,V,F,y,tt),F.side=ln):S.renderBufferDirect(z,N,V,F,y,tt),y.onAfterRender(S,N,z,V,F,tt)}function eo(y,N,z){N.isScene!==!0&&(N=xe);const V=Ct.get(y),F=p.state.lights,tt=p.state.shadowsArray,lt=F.state.version,gt=Et.getParameters(y,F.state,tt,N,z),_t=Et.getProgramCacheKey(gt);let Dt=V.programs;V.environment=y.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(y.isMeshStandardMaterial?k:v).get(y.envMap||V.environment),V.envMapRotation=V.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Dt===void 0&&(y.addEventListener("dispose",Nt),Dt=new Map,V.programs=Dt);let Ft=Dt.get(_t);if(Ft!==void 0){if(V.currentProgram===Ft&&V.lightsStateVersion===lt)return ud(y,gt),Ft}else gt.uniforms=Et.getUniforms(y),y.onBeforeCompile(gt,S),Ft=Et.acquireProgram(gt,_t),Dt.set(_t,Ft),V.uniforms=gt.uniforms;const vt=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(vt.clippingPlanes=Q.uniform),ud(y,gt),V.needsLights=wg(y),V.lightsStateVersion=lt,V.needsLights&&(vt.ambientLightColor.value=F.state.ambient,vt.lightProbe.value=F.state.probe,vt.directionalLights.value=F.state.directional,vt.directionalLightShadows.value=F.state.directionalShadow,vt.spotLights.value=F.state.spot,vt.spotLightShadows.value=F.state.spotShadow,vt.rectAreaLights.value=F.state.rectArea,vt.ltc_1.value=F.state.rectAreaLTC1,vt.ltc_2.value=F.state.rectAreaLTC2,vt.pointLights.value=F.state.point,vt.pointLightShadows.value=F.state.pointShadow,vt.hemisphereLights.value=F.state.hemi,vt.directionalShadowMap.value=F.state.directionalShadowMap,vt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,vt.spotShadowMap.value=F.state.spotShadowMap,vt.spotLightMatrix.value=F.state.spotLightMatrix,vt.spotLightMap.value=F.state.spotLightMap,vt.pointShadowMap.value=F.state.pointShadowMap,vt.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Ft,V.uniformsList=null,Ft}function hd(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=zo.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function ud(y,N){const z=Ct.get(y);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Eg(y,N,z,V,F){N.isScene!==!0&&(N=xe),w.resetTextureUnits();const tt=N.fog,lt=V.isMeshStandardMaterial?N.environment:null,gt=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Gr,_t=(V.isMeshStandardMaterial?k:v).get(V.envMap||lt),Dt=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ft=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),vt=!!z.morphAttributes.position,Qt=!!z.morphAttributes.normal,he=!!z.morphAttributes.color;let fe=cs;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(fe=S.toneMapping);const un=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ne=un!==void 0?un.length:0,bt=Ct.get(V),Ei=p.state.lights;if(et===!0&&(Mt===!0||y!==x)){const Fn=y===x&&V.id===M;Q.setState(V,y,Fn)}let ie=!1;V.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Ei.state.version||bt.outputColorSpace!==gt||F.isBatchedMesh&&bt.batching===!1||!F.isBatchedMesh&&bt.batching===!0||F.isBatchedMesh&&bt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&bt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&bt.instancing===!1||!F.isInstancedMesh&&bt.instancing===!0||F.isSkinnedMesh&&bt.skinning===!1||!F.isSkinnedMesh&&bt.skinning===!0||F.isInstancedMesh&&bt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&bt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&bt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&bt.instancingMorph===!1&&F.morphTexture!==null||bt.envMap!==_t||V.fog===!0&&bt.fog!==tt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Q.numPlanes||bt.numIntersection!==Q.numIntersection)||bt.vertexAlphas!==Dt||bt.vertexTangents!==Ft||bt.morphTargets!==vt||bt.morphNormals!==Qt||bt.morphColors!==he||bt.toneMapping!==fe||bt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,bt.__version=V.version);let Yn=bt.currentProgram;ie===!0&&(Yn=eo(V,N,F));let Zs=!1,xn=!1,oa=!1;const pe=Yn.getUniforms(),oi=bt.uniforms;if(Rt.useProgram(Yn.program)&&(Zs=!0,xn=!0,oa=!0),V.id!==M&&(M=V.id,xn=!0),Zs||x!==y){Rt.buffers.depth.getReversed()?(rt.copy(y.projectionMatrix),D1(rt),U1(rt),pe.setValue(B,"projectionMatrix",rt)):pe.setValue(B,"projectionMatrix",y.projectionMatrix),pe.setValue(B,"viewMatrix",y.matrixWorldInverse);const $i=pe.map.cameraPosition;$i!==void 0&&$i.setValue(B,Ut.setFromMatrixPosition(y.matrixWorld)),Xt.logarithmicDepthBuffer&&pe.setValue(B,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pe.setValue(B,"isOrthographic",y.isOrthographicCamera===!0),x!==y&&(x=y,xn=!0,oa=!0)}if(F.isSkinnedMesh){pe.setOptional(B,F,"bindMatrix"),pe.setOptional(B,F,"bindMatrixInverse");const Fn=F.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),pe.setValue(B,"boneTexture",Fn.boneTexture,w))}F.isBatchedMesh&&(pe.setOptional(B,F,"batchingTexture"),pe.setValue(B,"batchingTexture",F._matricesTexture,w),pe.setOptional(B,F,"batchingIdTexture"),pe.setValue(B,"batchingIdTexture",F._indirectTexture,w),pe.setOptional(B,F,"batchingColorTexture"),F._colorsTexture!==null&&pe.setValue(B,"batchingColorTexture",F._colorsTexture,w));const ca=z.morphAttributes;if((ca.position!==void 0||ca.normal!==void 0||ca.color!==void 0)&&It.update(F,z,Yn),(xn||bt.receiveShadow!==F.receiveShadow)&&(bt.receiveShadow=F.receiveShadow,pe.setValue(B,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(oi.envMap.value=_t,oi.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(oi.envMapIntensity.value=N.environmentIntensity),xn&&(pe.setValue(B,"toneMappingExposure",S.toneMappingExposure),bt.needsLights&&bg(oi,oa),tt&&V.fog===!0&&at.refreshFogUniforms(oi,tt),at.refreshMaterialUniforms(oi,V,X,Z,p.state.transmissionRenderTarget[y.id]),zo.upload(B,hd(bt),oi,w)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(zo.upload(B,hd(bt),oi,w),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pe.setValue(B,"center",F.center),pe.setValue(B,"modelViewMatrix",F.modelViewMatrix),pe.setValue(B,"normalMatrix",F.normalMatrix),pe.setValue(B,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Fn=V.uniformsGroups;for(let $i=0,Ki=Fn.length;$i<Ki;$i++){const dd=Fn[$i];D.update(dd,Yn),D.bind(dd,Yn)}}return Yn}function bg(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function wg(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,N,z){Ct.get(y.texture).__webglTexture=N,Ct.get(y.depthTexture).__webglTexture=z;const V=Ct.get(y);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,N){const z=Ct.get(y);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,z=0){P=y,A=N,T=z;let V=!0,F=null,tt=!1,lt=!1;if(y){const _t=Ct.get(y);if(_t.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(B.FRAMEBUFFER,null),V=!1;else if(_t.__webglFramebuffer===void 0)w.setupRenderTarget(y);else if(_t.__hasExternalTextures)w.rebindTextures(y,Ct.get(y.texture).__webglTexture,Ct.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const vt=y.depthTexture;if(_t.__boundDepthTexture!==vt){if(vt!==null&&Ct.has(vt)&&(y.width!==vt.image.width||y.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(y)}}const Dt=y.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(lt=!0);const Ft=Ct.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ft[N])?F=Ft[N][z]:F=Ft[N],tt=!0):y.samples>0&&w.useMultisampledRTT(y)===!1?F=Ct.get(y).__webglMultisampledFramebuffer:Array.isArray(Ft)?F=Ft[z]:F=Ft,R.copy(y.viewport),I.copy(y.scissor),U=y.scissorTest}else R.copy(Tt).multiplyScalar(X).floor(),I.copy(Ht).multiplyScalar(X).floor(),U=ce;if(Rt.bindFramebuffer(B.FRAMEBUFFER,F)&&V&&Rt.drawBuffers(y,F),Rt.viewport(R),Rt.scissor(I),Rt.setScissorTest(U),tt){const _t=Ct.get(y.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+N,_t.__webglTexture,z)}else if(lt){const _t=Ct.get(y.texture),Dt=N||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,_t.__webglTexture,z||0,Dt)}M=-1},this.readRenderTargetPixels=function(y,N,z,V,F,tt,lt){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Ct.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){Rt.bindFramebuffer(B.FRAMEBUFFER,gt);try{const _t=y.texture,Dt=_t.format,Ft=_t.type;if(!Xt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-V&&z>=0&&z<=y.height-F&&B.readPixels(N,z,V,F,kt.convert(Dt),kt.convert(Ft),tt)}finally{const _t=P!==null?Ct.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(B.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(y,N,z,V,F,tt,lt){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Ct.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&lt!==void 0&&(gt=gt[lt]),gt){const _t=y.texture,Dt=_t.format,Ft=_t.type;if(!Xt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=y.width-V&&z>=0&&z<=y.height-F){Rt.bindFramebuffer(B.FRAMEBUFFER,gt);const vt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,vt),B.bufferData(B.PIXEL_PACK_BUFFER,tt.byteLength,B.STREAM_READ),B.readPixels(N,z,V,F,kt.convert(Dt),kt.convert(Ft),0);const Qt=P!==null?Ct.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(B.FRAMEBUFFER,Qt);const he=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await I1(B,he,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,vt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,tt),B.deleteBuffer(vt),B.deleteSync(he),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,N=null,z=0){y.isTexture!==!0&&(ya("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,y=arguments[1]);const V=Math.pow(2,-z),F=Math.floor(y.image.width*V),tt=Math.floor(y.image.height*V),lt=N!==null?N.x:0,gt=N!==null?N.y:0;w.setTexture2D(y,0),B.copyTexSubImage2D(B.TEXTURE_2D,z,0,0,lt,gt,F,tt),Rt.unbindTexture()},this.copyTextureToTexture=function(y,N,z=null,V=null,F=0){y.isTexture!==!0&&(ya("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,y=arguments[1],N=arguments[2],F=arguments[3]||0,z=null);let tt,lt,gt,_t,Dt,Ft,vt,Qt,he;const fe=y.isCompressedTexture?y.mipmaps[F]:y.image;z!==null?(tt=z.max.x-z.min.x,lt=z.max.y-z.min.y,gt=z.isBox3?z.max.z-z.min.z:1,_t=z.min.x,Dt=z.min.y,Ft=z.isBox3?z.min.z:0):(tt=fe.width,lt=fe.height,gt=fe.depth||1,_t=0,Dt=0,Ft=0),V!==null?(vt=V.x,Qt=V.y,he=V.z):(vt=0,Qt=0,he=0);const un=kt.convert(N.format),ne=kt.convert(N.type);let bt;N.isData3DTexture?(w.setTexture3D(N,0),bt=B.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(w.setTexture2DArray(N,0),bt=B.TEXTURE_2D_ARRAY):(w.setTexture2D(N,0),bt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,N.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,N.unpackAlignment);const Ei=B.getParameter(B.UNPACK_ROW_LENGTH),ie=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Yn=B.getParameter(B.UNPACK_SKIP_PIXELS),Zs=B.getParameter(B.UNPACK_SKIP_ROWS),xn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,fe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,fe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,_t),B.pixelStorei(B.UNPACK_SKIP_ROWS,Dt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ft);const oa=y.isDataArrayTexture||y.isData3DTexture,pe=N.isDataArrayTexture||N.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){const oi=Ct.get(y),ca=Ct.get(N),Fn=Ct.get(oi.__renderTarget),$i=Ct.get(ca.__renderTarget);Rt.bindFramebuffer(B.READ_FRAMEBUFFER,Fn.__webglFramebuffer),Rt.bindFramebuffer(B.DRAW_FRAMEBUFFER,$i.__webglFramebuffer);for(let Ki=0;Ki<gt;Ki++)oa&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.get(y).__webglTexture,F,Ft+Ki),y.isDepthTexture?(pe&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.get(N).__webglTexture,F,he+Ki),B.blitFramebuffer(_t,Dt,tt,lt,vt,Qt,tt,lt,B.DEPTH_BUFFER_BIT,B.NEAREST)):pe?B.copyTexSubImage3D(bt,F,vt,Qt,he+Ki,_t,Dt,tt,lt):B.copyTexSubImage2D(bt,F,vt,Qt,he+Ki,_t,Dt,tt,lt);Rt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else pe?y.isDataTexture||y.isData3DTexture?B.texSubImage3D(bt,F,vt,Qt,he,tt,lt,gt,un,ne,fe.data):N.isCompressedArrayTexture?B.compressedTexSubImage3D(bt,F,vt,Qt,he,tt,lt,gt,un,fe.data):B.texSubImage3D(bt,F,vt,Qt,he,tt,lt,gt,un,ne,fe):y.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,F,vt,Qt,tt,lt,un,ne,fe.data):y.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,F,vt,Qt,fe.width,fe.height,un,fe.data):B.texSubImage2D(B.TEXTURE_2D,F,vt,Qt,tt,lt,un,ne,fe);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ei),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ie),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Yn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Zs),B.pixelStorei(B.UNPACK_SKIP_IMAGES,xn),F===0&&N.generateMipmaps&&B.generateMipmap(bt),Rt.unbindTexture()},this.copyTextureToTexture3D=function(y,N,z=null,V=null,F=0){return y.isTexture!==!0&&(ya("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,y=arguments[2],N=arguments[3],F=arguments[4]||0),ya('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,N,z,V,F)},this.initRenderTarget=function(y){Ct.get(y).__webglFramebuffer===void 0&&w.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?w.setTextureCube(y,0):y.isData3DTexture?w.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?w.setTexture2DArray(y,0):w.setTexture2D(y,0),Rt.unbindTexture()},this.resetState=function(){A=0,T=0,P=null,Rt.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Zt._getUnpackColorSpace()}}class hc{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=n,this.far=i}clone(){return new hc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jh extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Gy{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=fh,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=n.array[i+s];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new L;class jo{constructor(t,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyMatrix4(t),this.setXYZ(n,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.applyNormalMatrix(t),this.setXYZ(n,an.x,an.y,an.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)an.fromBufferAttribute(this,n),an.transformDirection(t),this.setXYZ(n,an.x,an.y,an.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=Jn(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=re(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Jn(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Jn(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Jn(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Jn(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=re(n,this.array),i=re(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=re(n,this.array),i=re(i,this.array),s=re(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=re(n,this.array),i=re(i,this.array),s=re(s,this.array),r=re(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new _n(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new jo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ti extends gs{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let dr;const fa=new L,fr=new L,pr=new L,mr=new ot,pa=new ot,cm=new me,bo=new L,ma=new L,wo=new L,ff=new ot,ll=new ot,pf=new ot;class fi extends ke{constructor(t=new ti){if(super(),this.isSprite=!0,this.type="Sprite",dr===void 0){dr=new rn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Gy(n,5);dr.setIndex([0,1,2,0,2,3]),dr.setAttribute("position",new jo(i,3,0,!1)),dr.setAttribute("uv",new jo(i,2,3,!1))}this.geometry=dr,this.material=t,this.center=new ot(.5,.5)}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fr.setFromMatrixScale(this.matrixWorld),cm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),pr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fr.multiplyScalar(-pr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;To(bo.set(-.5,-.5,0),pr,a,fr,s,r),To(ma.set(.5,-.5,0),pr,a,fr,s,r),To(wo.set(.5,.5,0),pr,a,fr,s,r),ff.set(0,0),ll.set(1,0),pf.set(1,1);let o=t.ray.intersectTriangle(bo,ma,wo,!1,fa);if(o===null&&(To(ma.set(-.5,.5,0),pr,a,fr,s,r),ll.set(0,1),o=t.ray.intersectTriangle(bo,wo,ma,!1,fa),o===null))return;const c=t.ray.origin.distanceTo(fa);c<t.near||c>t.far||n.push({distance:c,point:fa.clone(),uv:Vn.getInterpolation(fa,bo,ma,wo,ff,ll,pf,new ot),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function To(e,t,n,i,s,r){mr.subVectors(e,n).addScalar(.5).multiply(i),s!==void 0?(pa.x=r*mr.x-s*mr.y,pa.y=s*mr.x+r*mr.y):pa.copy(mr),e.copy(t),e.x+=pa.x,e.y+=pa.y,e.applyMatrix4(cm)}class lm extends gs{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const $o=new L,Ko=new L,mf=new me,ga=new Yp,Ao=new cc,hl=new L,gf=new L;class Wy extends ke{constructor(t=new rn,n=new lm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)$o.fromBufferAttribute(n,s-1),Ko.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=$o.distanceTo(Ko);t.setAttribute("lineDistance",new Ie(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(s),Ao.radius+=r,t.ray.intersectsSphere(Ao)===!1)return;mf.copy(s).invert(),ga.copy(t.ray).applyMatrix4(mf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),E=h.getX(_+1),b=Co(this,t,ga,c,p,E);b&&n.push(b)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Co(this,t,ga,c,_,m);p&&n.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=Co(this,t,ga,c,_,_+1);p&&n.push(p)}if(this.isLineLoop){const _=Co(this,t,ga,c,g-1,f);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Co(e,t,n,i,s,r){const a=e.geometry.attributes.position;if($o.fromBufferAttribute(a,s),Ko.fromBufferAttribute(a,r),n.distanceSqToSegment($o,Ko,hl,gf)>i)return;hl.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(hl);if(!(c<t.near||c>t.far))return{distance:c,point:gf.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}class Xy extends Ze{constructor(t,n,i,s,r,a,o,c,l){super(t,n,i,s,r,a,o,c,l),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Hn,this.magFilter=r!==void 0?r:Hn,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Aa extends Ze{constructor(t,n,i,s,r,a,o,c,l){super(t,n,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,n){const i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){const n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){const n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,s=this.getPoint(0),r=0;n.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n){const i=this.getLengths();let s=0;const r=i.length;let a;n?a=n:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,n){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=n||(a.isVector2?new ot:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,n){const i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n){const i=new L,s=[],r=[],a=[],o=new L,c=new me;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(n===!0){let f=Math.acos(je(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class $h extends gi{constructor(t=0,n=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,n=new ot){const i=n,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qy extends $h{constructor(t,n,i,s,r,a){super(t,n,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Kh(){let e=0,t=0,n=0,i=0;function s(r,a,o,c){e=r,t=o,n=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return e+t*r+n*a+i*o}}}const Ro=new L,ul=new Kh,dl=new Kh,fl=new Kh;class Yy extends gi{constructor(t=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=s}getPoint(t,n=new L){const i=n,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Ro.subVectors(s[0],s[1]).add(s[0]),l=Ro);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ro.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ro),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ul.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),dl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),fl.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ul.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),dl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),fl.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(ul.calc(c),dl.calc(c),fl.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const s=t.points[n];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){const s=this.points[n];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const s=t.points[n];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function _f(e,t,n,i,s){const r=(i-t)*.5,a=(s-n)*.5,o=e*e,c=e*o;return(2*n-2*i+r+a)*c+(-3*n+3*i-2*r-a)*o+r*e+n}function jy(e,t){const n=1-e;return n*n*t}function $y(e,t){return 2*(1-e)*e*t}function Ky(e,t){return e*e*t}function Ca(e,t,n,i){return jy(e,t)+$y(e,n)+Ky(e,i)}function Zy(e,t){const n=1-e;return n*n*n*t}function Jy(e,t){const n=1-e;return 3*n*n*e*t}function Qy(e,t){return 3*(1-e)*e*e*t}function t3(e,t){return e*e*e*t}function Ra(e,t,n,i,s){return Zy(e,t)+Jy(e,n)+Qy(e,i)+t3(e,s)}class hm extends gi{constructor(t=new ot,n=new ot,i=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new ot){const i=n,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ra(t,s.x,r.x,a.x,o.x),Ra(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class e3 extends gi{constructor(t=new L,n=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new L){const i=n,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ra(t,s.x,r.x,a.x,o.x),Ra(t,s.y,r.y,a.y,o.y),Ra(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class um extends gi{constructor(t=new ot,n=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new ot){const i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new ot){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class n3 extends gi{constructor(t=new L,n=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new L){const i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new L){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dm extends gi{constructor(t=new ot,n=new ot,i=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new ot){const i=n,s=this.v0,r=this.v1,a=this.v2;return i.set(Ca(t,s.x,r.x,a.x),Ca(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class i3 extends gi{constructor(t=new L,n=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new L){const i=n,s=this.v0,r=this.v1,a=this.v2;return i.set(Ca(t,s.x,r.x,a.x),Ca(t,s.y,r.y,a.y),Ca(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fm extends gi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new ot){const i=n,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(_f(o,c.x,l.x,h.x,u.x),_f(o,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const s=t.points[n];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){const s=this.points[n];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const s=t.points[n];this.points.push(new ot().fromArray(s))}return this}}var vf=Object.freeze({__proto__:null,ArcCurve:qy,CatmullRomCurve3:Yy,CubicBezierCurve:hm,CubicBezierCurve3:e3,EllipseCurve:$h,LineCurve:um,LineCurve3:n3,QuadraticBezierCurve:dm,QuadraticBezierCurve3:i3,SplineCurve:fm});class s3 extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vf[i](n,t))}return this}getPoint(t,n){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,n)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){const s=t.curves[n];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const s=this.curves[n];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){const s=t.curves[n];this.curves.push(new vf[s.type]().fromJSON(s))}return this}}class r3 extends s3{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,i=t.length;n<i;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const i=new um(this.currentPoint.clone(),new ot(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,i,s){const r=new dm(this.currentPoint.clone(),new ot(t,n),new ot(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,n,i,s,r,a){const o=new hm(this.currentPoint.clone(),new ot(t,n),new ot(i,s),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),i=new fm(n);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,i,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,n+c,i,s,r,a),this}absarc(t,n,i,s,r,a){return this.absellipse(t,n,i,i,s,r,a),this}ellipse(t,n,i,s,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,n+h,i,s,r,a,o,c),this}absellipse(t,n,i,s,r,a,o,c){const l=new $h(t,n,i,s,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Zh extends rn{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],n=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:n,phiStart:i,phiLength:s},n=Math.floor(n),s=je(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/n,u=new L,d=new ot,f=new L,g=new L,_=new L;let m=0,p=0;for(let E=0;E<=t.length-1;E++)switch(E){case 0:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[E+1].x-t[E].x,p=t[E+1].y-t[E].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let E=0;E<=n;E++){const b=i+E*h*s,S=Math.sin(b),O=Math.cos(b);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*S,u.y=t[A].y,u.z=t[A].x*O,a.push(u.x,u.y,u.z),d.x=E/n,d.y=A/(t.length-1),o.push(d.x,d.y);const T=c[3*A+0]*S,P=c[3*A+1],M=c[3*A+0]*O;l.push(T,P,M)}}for(let E=0;E<n;E++)for(let b=0;b<t.length-1;b++){const S=b+E*t.length,O=S,A=S+t.length,T=S+t.length+1,P=S+1;r.push(O,A,P),r.push(T,P,A)}this.setIndex(r),this.setAttribute("position",new Ie(a,3)),this.setAttribute("uv",new Ie(o,2)),this.setAttribute("normal",new Ie(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zh(t.points,t.segments,t.phiStart,t.phiLength)}}class Zo extends Zh{constructor(t=1,n=1,i=4,s=8){const r=new r3;r.absarc(0,-n/2,t,Math.PI*1.5,0),r.absarc(0,n/2,t,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:n,capSegments:i,radialSegments:s}}static fromJSON(t){return new Zo(t.radius,t.length,t.capSegments,t.radialSegments)}}class Yr extends rn{constructor(t=1,n=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=i/2;let p=0;E(),a===!1&&(t>0&&b(!0),n>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ie(u,3)),this.setAttribute("normal",new Ie(d,3)),this.setAttribute("uv",new Ie(f,2));function E(){const S=new L,O=new L;let A=0;const T=(n-t)/i;for(let P=0;P<=r;P++){const M=[],x=P/r,R=x*(n-t)+t;for(let I=0;I<=s;I++){const U=I/s,H=U*c+o,G=Math.sin(H),q=Math.cos(H);O.x=R*G,O.y=-x*i+m,O.z=R*q,u.push(O.x,O.y,O.z),S.set(G,T,q).normalize(),d.push(S.x,S.y,S.z),f.push(U,1-x),M.push(g++)}_.push(M)}for(let P=0;P<s;P++)for(let M=0;M<r;M++){const x=_[M][P],R=_[M+1][P],I=_[M+1][P+1],U=_[M][P+1];(t>0||M!==0)&&(h.push(x,R,U),A+=3),(n>0||M!==r-1)&&(h.push(R,I,U),A+=3)}l.addGroup(p,A,0),p+=A}function b(S){const O=g,A=new ot,T=new L;let P=0;const M=S===!0?t:n,x=S===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const R=g;for(let I=0;I<=s;I++){const H=I/s*c+o,G=Math.cos(H),q=Math.sin(H);T.x=M*q,T.y=m*x,T.z=M*G,u.push(T.x,T.y,T.z),d.push(0,x,0),A.x=G*.5+.5,A.y=q*.5*x+.5,f.push(A.x,A.y),g++}for(let I=0;I<s;I++){const U=O+I,H=R+I;S===!0?h.push(H,H+1,U):h.push(H+1,H,U),P+=3}l.addGroup(p,P,S===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jh extends Yr{constructor(t=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,n,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Jh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fa extends rn{constructor(t=.5,n=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],h=[];let u=t;const d=(n-t)/s,f=new L,g=new ot;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/n+1)/2,g.y=(f.y/n+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const E=p+m,b=E,S=E+i+1,O=E+i+2,A=E+1;o.push(b,S,A),o.push(S,O,A)}}this.setIndex(o),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Vi extends rn{constructor(t=1,n=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new L,d=new L,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const E=[],b=p/i;let S=0;p===0&&a===0?S=.5/n:p===i&&c===Math.PI&&(S=-.5/n);for(let O=0;O<=n;O++){const A=O/n;u.x=-t*Math.cos(s+A*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(s+A*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+S,1-b),E.push(l++)}h.push(E)}for(let p=0;p<i;p++)for(let E=0;E<n;E++){const b=h[p][E+1],S=h[p][E],O=h[p+1][E],A=h[p+1][E+1];(p!==0||a>0)&&f.push(b,S,A),(p!==i-1||c<Math.PI)&&f.push(S,O,A)}this.setIndex(f),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class a3 extends gs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gh,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bi extends gs{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gh,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const xf={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};class o3{constructor(t,n,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const c3=new o3;class Qh{constructor(t){this.manager=t!==void 0?t:c3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Qh.DEFAULT_MATERIAL_NAME="__DEFAULT";class l3 extends Qh{constructor(t){super(t)}load(t,n,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=xf.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){n&&n(a),r.manager.itemEnd(t)},0),a;const o=Na("img");function c(){h(),xf.add(t,this),n&&n(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Ns extends Qh{constructor(t){super(t)}load(t,n,i,s){const r=new Ze,a=new l3(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}class pm extends ke{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class tu extends pm{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const pl=new me,yf=new L,Mf=new L;class h3{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xh,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;yf.setFromMatrixPosition(t.matrixWorld),n.position.copy(yf),Mf.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Mf),n.updateMatrixWorld(),pl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(pl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class u3 extends h3{constructor(){super(new nm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mm extends pm{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new u3}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nh);const d3={color:16755200};function gm(e){return!e||typeof e!="object"?!1:(i=>Number.isInteger(i)&&i>=0&&i<=16777215)(e.color)}function _m(){try{const e=JSON.parse(localStorage.getItem("court-gesture-appearance")??localStorage.getItem("sand-volley-appearance")??"null");if(gm(e))return{...e}}catch{}return{...d3}}function f3(e){try{localStorage.setItem("court-gesture-appearance",JSON.stringify(e))}catch{}}const Yt={halfW:4,halfLen:7},di={top:2.43,halfW:Yt.halfW+.6},De={radius:.24,gravity:14,restitution:.55},ws={speed:6,accel:45,airAccelMul:.35,jumpV:6.8,gravity:20},fs={xMargin:3.5,netGap:.7,backMargin:4},hi={winScore:11,cap:15,maxTouches:3,pointDelay:1.8,actionWindow:.35,touchCooldown:.3,tossV:6.3,netMargin:.12},Po=1/120,Se=(e,t,n)=>Math.min(n,Math.max(t,e)),Ii=(e,t,n)=>e+(t-e)*n,vm=(e,t,n)=>{const i=Se((n-e)/(t-e),0,1);return i*i*(3-2*i)},Sf=(e,t,n)=>e<t?Math.min(e+n,t):Math.max(e-n,t),xm=(e,t)=>Math.hypot(e.x-t.x,e.y-t.y,e.z-t.z),Sa=e=>e===1?-1:1;class eu{constructor(t,n,i){C(this,"pos",{x:0,z:0});C(this,"y",0);C(this,"vx",0);C(this,"vz",0);C(this,"vy",0);C(this,"grounded",!0);C(this,"pending",null);C(this,"prevContactDist",1/0);C(this,"lastTouchTime",-10);C(this,"swing",0);C(this,"aim",{x:0,d:0,power:.6});C(this,"lastType","bump");this.id=t,this.side=n,this.color=i}get actor(){return{x:this.pos.x,y:this.y,z:this.pos.z,side:this.side}}teleport(t,n){this.pos.x=t,this.pos.z=n,this.vx=0,this.vz=0,this.y=0,this.vy=0,this.grounded=!0}step(t,n,i){let s=Se(n.moveX,-1,1),r=Se(n.moveF,-1,1);const a=Math.hypot(s,r);a>1&&(s/=a,r/=a);const o=s*ws.speed,c=-this.side*r*ws.speed,l=(this.grounded?ws.accel:ws.accel*ws.airAccelMul)*t;if(this.vx=Sf(this.vx,o,l),this.vz=Sf(this.vz,c,l),this.pos.x+=this.vx*t,this.pos.z+=this.vz*t,n.jump&&this.grounded&&(this.vy=ws.jumpV,this.grounded=!1),this.grounded||(this.vy-=ws.gravity*t,this.y+=this.vy*t,this.y<=0&&(this.y=0,this.vy=0,this.grounded=!0)),n.action){const u=!this.pending||this.pending.type!==n.action;this.pending={type:n.action,age:0},u&&(this.prevContactDist=1/0,this.swing=.28),this.lastType=n.action}else this.pending&&(this.pending.age+=t,this.pending.age>hi.actionWindow&&(this.pending=null));this.pending||(this.prevContactDist=1/0),this.aim={...n.aim},this.swing=Math.max(0,this.swing-t),this.pos.x=Se(this.pos.x,-7.5,Yt.halfW+fs.xMargin);const h=Se(this.side*this.pos.z,i,Yt.halfLen+fs.backMargin);this.pos.z=this.side*h}}const Ts=(e,t)=>e+Math.random()*(t-e);class ml{constructor(t,n=0,i=0){C(this,"above");C(this,"below");C(this,"ripple");C(this,"drops",[]);C(this,"elapsed",0);C(this,"previousHeight",-.45);C(this,"splashAge",2);C(this,"splashOrigin",new L);C(this,"action","swim");C(this,"actionTime",0);C(this,"actionDuration",Ts(3,6));C(this,"routeTime",0);C(this,"routeDuration",Ts(5,10));C(this,"routeStart",new ot);C(this,"routeEnd",new ot);C(this,"position",new ot);this.depthOffset=n,this.centerX=i,this.position.set(i,-19-n),this.routeStart.copy(this.position),this.chooseDestination(),this.actionTime=Ts(0,this.actionDuration*.8);const s=new Ns().load("/bert-fish.png");s.colorSpace=Me,s.wrapS=Zn;const r={map:s,transparent:!0,depthWrite:!1};this.above=new fi(new ti({...r,clippingPlanes:[new Pi(new L(0,1,0),0)]})),this.below=new fi(new ti({...r,color:5814988,opacity:.35,clippingPlanes:[new Pi(new L(0,-1,0),0)]}));for(const c of[this.below,this.above])c.scale.set(3,3,1),c.renderOrder=2,t.add(c);this.ripple=new Bt(new Fa(.8,1,40),new sn({color:13235967,transparent:!0,depthWrite:!1,side:ln})),this.ripple.rotation.x=-Math.PI/2,this.ripple.renderOrder=3,this.ripple.visible=!1,t.add(this.ripple);const a=new Vi(.055,6,4),o=new sn({color:13235967,transparent:!0,depthWrite:!1});for(let c=0;c<12;c++){const l=new Bt(a,o);l.renderOrder=3,l.visible=!1,this.drops.push(l),t.add(l)}this.update(0)}chooseDestination(){this.routeEnd.set(this.centerX+Ts(-4.5,4.5),-19-this.depthOffset+Ts(-3,3)),this.routeDuration=Math.max(4,this.routeStart.distanceTo(this.routeEnd)/Ts(.5,1.1))}nextAction(){switch(this.action){case"swim":this.action="surface";break;case"surface":this.action="dive";break;case"dive":this.action="submerged";break;case"submerged":this.action="jump";break;case"jump":this.action="rise";break;case"rise":this.action="swim";break}const t={swim:[3,6],surface:[5,10],dive:[1.2,2],submerged:[.8,2],jump:[2.2,3],rise:[1.5,2.5]};this.actionDuration=Ts(...t[this.action])}update(t){for(this.elapsed+=t,this.actionTime+=t;this.actionTime>=this.actionDuration;)this.actionTime-=this.actionDuration,this.nextAction();for(this.routeTime+=t;this.routeTime>=this.routeDuration;)this.routeTime-=this.routeDuration,this.routeStart.copy(this.routeEnd),this.chooseDestination();this.position.lerpVectors(this.routeStart,this.routeEnd,Be.smoothstep(this.routeTime,0,this.routeDuration));const n=this.elapsed,i=this.actionTime/this.actionDuration;let s=-.45+.1*Math.sin(i*Math.PI*4),r=.06*Math.sin(n*4);switch(this.action){case"surface":{const u=Be.smoothstep(this.actionTime,0,1.5)*(1-Be.smoothstep(this.actionTime,this.actionDuration-1.5,this.actionDuration));s+=u*(.65+.035*Math.sin(n*2)),r=.12*Math.sin(n*1.5);break}case"dive":s=Be.lerp(-.45,-2,Be.smoothstep(i,0,1)),r=-.4*Math.sin(i*Math.PI);break;case"submerged":s=-2;break;case"jump":s=-2+5*Math.sin(i*Math.PI),r=.8*Math.cos(i*Math.PI);break;case"rise":s=Be.lerp(-2,-.45,Be.smoothstep(i,0,1));break}const a=this.position.x,o=this.position.y,c=this.routeEnd.x>=this.routeStart.x?1:-1,l=this.above.material.map;l.repeat.x=c,l.offset.x=c<0?1:0;for(const u of[this.above,this.below])u.position.set(a,s,o),u.material.rotation=r*c;this.below.material.opacity=.35*Be.smoothstep(s,-1.8,-.4),(this.previousHeight<0&&s>=0||this.previousHeight>=0&&s<0)&&(this.splashAge=0,this.splashOrigin.set(a,.04,o)),this.previousHeight=s,this.splashAge+=t;const h=this.splashAge;this.ripple.visible=h<1.2,this.ripple.position.copy(this.splashOrigin),this.ripple.scale.setScalar(.25+h*1.5),this.ripple.material.opacity=.65*Math.max(0,1-h/1.2);for(let u=0;u<this.drops.length;u++){const d=this.drops[u],f=u/this.drops.length*Math.PI*2,g=.06+(1.7+u%3*.25)*h-3.8*h*h;d.visible=h<.8&&g>0,d.position.set(this.splashOrigin.x+Math.cos(f)*h*1.3,g,this.splashOrigin.z+Math.sin(f)*h*1.3)}}}class p3{constructor(t){C(this,"capacity",96);C(this,"lifetime",.28);C(this,"geometry",new rn);C(this,"positions",new _n(new Float32Array(this.capacity*6),3));C(this,"colors",new _n(new Float32Array(this.capacity*8),4));C(this,"color",new Vt);C(this,"history",[]);C(this,"tangent",new L);C(this,"towardCamera",new L);C(this,"width",new L);C(this,"time",0);C(this,"active",!1);this.positions.setUsage(vd),this.colors.setUsage(vd),this.geometry.setAttribute("position",this.positions),this.geometry.setAttribute("color",this.colors);const n=[];for(let s=0;s<this.capacity-1;s++){const r=s*2;n.push(r,r+1,r+2,r+1,r+3,r+2)}this.geometry.setIndex(n),this.geometry.setDrawRange(0,0);const i=new Bt(this.geometry,new sn({vertexColors:!0,transparent:!0,depthWrite:!1,side:ln}));i.frustumCulled=!1,i.renderOrder=1,t.add(i)}hit(t){this.color.setHex(t),this.active=!0}reset(){this.active=!1,this.history.length=0,this.geometry.setDrawRange(0,0)}update(t,n,i){if(!this.active)return;this.time+=t;const s=this.history[this.history.length-1];for((!s||Math.hypot(s.position.x-n.x,s.position.y-n.y,s.position.z-n.z)>.001)&&this.history.push({position:new L(n.x,n.y,n.z),time:this.time});this.history.length>this.capacity||this.history.length>0&&this.time-this.history[0].time>this.lifetime;)this.history.shift();for(let r=0;r<this.history.length;r++){const a=this.history[r],o=Math.max(0,1-(this.time-a.time)/this.lifetime),c=this.history[Math.max(0,r-1)].position,l=this.history[Math.min(this.history.length-1,r+1)].position;this.tangent.subVectors(l,c).normalize(),this.towardCamera.subVectors(i.position,a.position),this.width.crossVectors(this.tangent,this.towardCamera).normalize().multiplyScalar(.15*o);for(let h=0;h<2;h++){const u=r*2+h,d=h===0?-1:1;this.positions.setXYZ(u,a.position.x+this.width.x*d,a.position.y+this.width.y*d,a.position.z+this.width.z*d),this.colors.setXYZW(u,this.color.r,this.color.g,this.color.b,o*.75)}}this.positions.needsUpdate=!0,this.colors.needsUpdate=!0,this.geometry.setDrawRange(0,Math.max(0,this.history.length-1)*6)}}class m3{constructor(){C(this,"pos",{x:0,y:1,z:0});C(this,"vel",{x:0,y:0,z:0});C(this,"mode","held");C(this,"radius",De.radius);C(this,"landing",null)}reset(){this.mode="held",this.vel={x:0,y:0,z:0},this.landing=null}step(t){const n={netHit:!1,landed:!1};if(this.mode==="held")return n;const i=this.pos,s=this.vel,r=this.radius;s.y-=De.gravity*t;const a=i.x,o=i.y,c=i.z;if(i.x+=s.x*t,i.y+=s.y*t,i.z+=s.z*t,this.mode==="live"&&this.collideNet(a,o,c)&&(n.netHit=!0),i.y<=r&&(i.y=r,s.y<0&&(this.mode==="live"&&(this.mode="dead",this.landing={x:i.x,z:i.z},n.landed=!0),s.y=-s.y*De.restitution,s.y<1.2&&(s.y=0),s.x*=.82,s.z*=.82),s.y===0)){const l=Math.max(0,1-4*t);s.x*=l,s.z*=l}return n}collideNet(t,n,i){const s=this.pos,r=this.vel,a=this.radius,o=i>=0?1:-1,c=s.z-i;if(o*c>=0||o*s.z>=a)return!1;const l=Math.min(1,Math.max(0,(o*i-a)/(o*(i-s.z)))),h=t+(s.x-t)*l,u=n+(s.y-n)*l;return Math.abs(h)>di.halfW||u>di.top+a*.35?!1:(s.x=h,s.y=u,s.z=o*(a+.002),r.z=-r.z*.2,r.x*=.5,r.y*=.6,!0)}}function g3(e,t,n){const i=De.gravity,s=t*t+2*i*(e-n);return s<0?null:(t+Math.sqrt(s))/i}function ls(e,t,n){let i=g3(e.y,t.y,n);return i===null&&(i=t.y/De.gravity),i<0&&(i=0),{t:i,x:e.x+t.x*i,z:e.z+t.z*i}}function _3(e,t,n,i){const s=[],r=De.gravity;for(let a=0;a<i;a++){const o=a*n,c=e.y+t.y*o-.5*r*o*o;if(c<=De.radius){s.push({x:e.x+t.x*o,y:De.radius,z:e.z+t.z*o});break}s.push({x:e.x+t.x*o,y:c,z:e.z+t.z*o})}return s}const Hi={bump:{forward:.45,height:1.5,reach:2,sweet:2,tMin:1,tMax:1.5,tCap:2.2},set:{forward:.2,height:3,reach:2,sweet:2,tMin:.85,tMax:1.25,tCap:1.8},spike:{forward:.3,height:3,reach:2,sweet:2,tMin:.35,tMax:.65,tCap:1},serve:{forward:.3,height:3,reach:2,sweet:2,tMin:.8,tMax:1.4,tCap:1.9},restart:{forward:0,height:0,reach:0,sweet:0,tMin:0,tMax:0,tCap:0}};function Jo(e,t){return{x:e.x,y:e.y+t.height,z:e.z-e.side*t.forward}}function v3(e,t,n){const i=1-vm(t.sweet,t.reach,e),s=1-.35*Se(n/hi.actionWindow,0,1);return Se(i*s,.05,1)}function ym(e,t,n,i){const s=Yt.halfW,r=Yt.halfLen,a=t.side,o=i.x*(s-.5),c=Se((n.x-t.x)/1.5,-1,1)*1.2,l=(i.d+1)/2,h=De.radius;let u=0,d=0,f=0,g=!1;switch(e){case"bump":i.d>.6?(g=!0,u=o+c,f=-a*Ii(2.5,r-.7,(i.d-.6)/.4),d=h):(u=o*.8+c,f=a*Ii(3.8,1.8,(i.d+1)/1.6),d=2.4);break;case"set":u=o*.8+c*.5,f=a*Ii(2.4,1,l),d=3.2;break;case"spike":g=!0,u=o+c*.8,f=-a*Ii(1.6,r-.5,l),d=h;break;case"serve":g=!0,u=o,f=-a*Ii(3,r-.7,l),d=h;break}return u=Se(u,-3.7,s-.3),{x:u,y:d,z:f,over:g}}function Vo(e,t,n,i){return{x:(t.x-e.x)/n,y:(t.y-e.y+.5*i*n*n)/n,z:(t.z-e.z)/n}}function gl(e,t){const n=De.gravity;if(t.z===0)return 1/0;const i=-e.z/t.z;if(i<=0)return 1/0;const s=e.x+t.x*i;return Math.abs(s)>di.halfW?1/0:e.y+t.y*i-.5*n*i*i-De.radius-di.top}const x3=.05,y3=2.6;function M3(e){const t=De.gravity,n=Hi[e.type],i=e.quality,s=ym(e.type,e.actor,e.ballPos,e.aim),r=Math.pow(1-i,1.5)*4,a=e.rng()*Math.PI*2,o=r*(.4+.6*e.rng()),c={x:s.x+Math.cos(a)*o,y:s.y,z:s.z+Math.sin(a)*o},l=e.ballPos,h=Se(e.aim.power,0,1),u=Ii(n.tMax,n.tMin,h)*(1+(1-i)*.25),d=l.z*c.z<0;let f=u,g=Vo(l,c,f,t),_=null;if(d){const p=hi.netMargin+.25*i;let E={T:f,vel:g,clr:gl(l,g)};if(E.clr<p){for(let b=u+.04;b<=n.tCap+1e-6;b+=.04){const S=Vo(l,c,b,t),O=gl(l,S);if(O>E.clr&&(E={T:b,vel:S,clr:O}),O>=p)break}for(let b=n.tCap+.04;E.clr<x3&&b<=y3;b+=.05){const S=Vo(l,c,b,t),O=gl(l,S);O>E.clr&&(E={T:b,vel:S,clr:O})}}f=E.T,g=E.vel,_=E.clr}const m=vm(0,.45,i);if(m<1){const p={x:e.ballVel.x*.3,y:Math.max(2.5,Math.abs(e.ballVel.y)*.35),z:-e.ballVel.z*.35};g={x:Ii(p.x,g.x,m),y:Ii(p.y,g.y,m),z:Ii(p.z,g.z,m)}}return{vel:g,target:c,intended:s,T:f,clearance:_,over:s.over,quality:i}}const S3={bump:4513160,set:16768324,spike:16733508,serve:12281599,restart:16777215},E3={1:16407120,[-1]:4177919};function Is(e,t,n){const i=document.createElement("canvas");i.width=e,i.height=t,n(i.getContext("2d"));const s=new Aa(i);return s.colorSpace=Me,s}function Mm(){const e=Is(64,64,n=>{const i=n.createRadialGradient(32,32,2,32,32,30);i.addColorStop(0,"rgba(107, 41, 0, 0.55)"),i.addColorStop(.8,"rgba(174, 126, 6, 0.2)"),i.addColorStop(1,"rgba(174, 126, 6, 0)"),n.fillStyle=i,n.fillRect(0,0,64,64)}),t=new Bt(new mn(1,1),new sn({map:e,transparent:!0,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t.position.y=.02,t}class b3{constructor(t){C(this,"cursor",0);C(this,"particles",[]);const n=Is(32,32,i=>{const s=i.createRadialGradient(16,16,1,16,16,15);s.addColorStop(0,"rgba(255,239,196,1)"),s.addColorStop(.4,"rgba(236,207,153,0.65)"),s.addColorStop(1,"rgba(236,207,153,0)"),i.fillStyle=s,i.fillRect(0,0,32,32)});for(let i=0;i<96;i++){const s=new fi(new ti({map:n,transparent:!0,depthWrite:!1}));s.visible=!1,t.add(s),this.particles.push({sprite:s,velocity:new L,life:0,duration:1,size:0})}}emit(t,n,i=!1){if(!(Math.abs(t)>Yt.halfW+2.5||Math.abs(n)>Yt.halfLen+2.5))for(let s=0;s<(i?28:6);s++){const r=this.particles[this.cursor++%this.particles.length],a=Math.random()*Math.PI*2,o=(.25+Math.random()*.65)*(i?1.8:1);r.sprite.position.set(t+Math.cos(a)*.09,.08,n+Math.sin(a)*.09),r.velocity.set(Math.cos(a)*o,(i?1.1:.45)+Math.random()*.5,Math.sin(a)*o),r.duration=r.life=.3+Math.random()*.25,r.size=(i?.35:.22)+Math.random()*.09,r.sprite.scale.setScalar(r.size),r.sprite.material.opacity=.5,r.sprite.material.rotation=a,r.sprite.visible=!0}}update(t){for(const n of this.particles){if(n.life<=0)continue;n.life=Math.max(0,n.life-t),n.sprite.visible=n.life>0,n.velocity.y-=t*3,n.sprite.position.addScaledVector(n.velocity,t),n.sprite.position.y=Math.max(.035,n.sprite.position.y);const i=1-n.life/n.duration;n.sprite.material.opacity=.5*(1-i)**2,n.sprite.scale.setScalar(n.size*(1+i*1.5))}}}class nu{constructor(t){C(this,"group",new Oi);C(this,"shadow",Mm());C(this,"hands",[]);C(this,"legs",[]);C(this,"walkTime",0);C(this,"bodyMaterial",new Bi({transparent:!0}));this.player=t;const n=new Bt(new Zo(.25,.27,4,12),this.bodyMaterial);n.position.y=.95;const i=new Bt(new Vi(.3,14,10),this.bodyMaterial);i.position.y=1.76,this.group.add(n,i);for(const s of[-1,1]){const r=this.bodyMaterial,a=new Bt(new Vi(.105,10,8),r);this.group.add(a),this.hands.push({mesh:a,side:s});const o=new Zo(.09,.7,3,8);o.translate(0,-.7,0);const c=new Bt(o,this.bodyMaterial);c.position.set(s*.12,1.1,0),new Bt(new Yr(.124,.124,.045,12),new Bi({color:16774621})),this.group.add(c),this.legs.push(c)}this.group.rotation.y=t.side===1?0:Math.PI,this.group.traverse(s=>{s instanceof Bt&&(s.renderOrder=1)})}update(t){const n=this.player;this.bodyMaterial.color.setHex(n.color),this.group.position.set(n.pos.x,n.y,n.pos.z);const i=1-Be.clamp(n.swing/.28,0,1),s=n.swing>0?1-Be.smoothstep(i,.65,1):0;for(const c of this.hands){const l=c.side,h=new L(l*.4,.7,-.04),u=h.clone();if(n.lastType==="bump")u.set(l*.065,1.04,-.65);else if(n.lastType==="set"){const d=Math.sin(i*Math.PI)*.14;u.set(l*.14,2.05+d,-.2)}else if(l===1){const d=Be.smoothstep(i,.12,.7);u.set(.23,Be.lerp(2.3,.85,d),Be.lerp(.06,-.65,d))}else u.set(-.38,1.48,-.35);h.lerp(u,s),c.mesh.position.copy(h)}if(n.vx!==0||n.vz!==0){const c=Math.sqrt(n.vx*n.vx+n.vz*n.vz);this.walkTime+=c*3*t}else this.walkTime=Be.damp(this.walkTime,Math.round(this.walkTime/Math.PI)*Math.PI,7,t);const a=.6;this.legs[0].rotation.x=Math.sin(this.walkTime)*a,this.legs[1].rotation.x=-Math.sin(this.walkTime)*a,this.shadow.position.set(n.pos.x,.02,n.pos.z);const o=1.1/(1+n.y*1.2);this.shadow.scale.set(o,o,1)}}class w3{constructor(t,n){C(this,"renderer");C(this,"scene",new jh);C(this,"camera");C(this,"debug",!1);C(this,"effectsEnabled",!0);C(this,"spikeShake",0);C(this,"spikeStrength",0);C(this,"views");C(this,"sand");C(this,"footsteps");C(this,"ball");C(this,"ballTrail");C(this,"ballShadow",Mm());C(this,"waterFallback");C(this,"berts");C(this,"net");C(this,"netMaterials",[]);C(this,"netOpacity",1);C(this,"netShake",0);C(this,"reticle");C(this,"reticleMat");C(this,"pulse");C(this,"pulseLife",0);C(this,"serveImpact");C(this,"serveImpactLife",0);C(this,"impactHoldUntil",0);C(this,"impactNeedsFrame",!1);C(this,"lastTouchedBy",0);C(this,"reducedMotion",window.matchMedia("(prefers-reduced-motion: reduce)"));C(this,"debugGroup",new Oi);C(this,"reachSpheres",{});C(this,"trail");C(this,"trailPts",48);this.parent=t,this.game=n,this.renderer=new Yh({antialias:!0}),this.renderer.localClippingEnabled=!0,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.appendChild(this.renderer.domElement),this.scene.background=new Vt(10474495),this.scene.fog=new hc(10474495,40,110),this.camera=new pn(45,1,.1,250),this.scene.add(new tu(16777215,14203274,1.05));const i=new mm(16777215,1.4);i.position.set(8,16,6),this.scene.add(i),this.buildCourt(),this.berts=[new ml(this.scene,0,-11),new ml(this.scene,10,0),new ml(this.scene,4,11)],this.sand=new b3(this.scene),this.footsteps=n.players.map(l=>({x:l.pos.x,z:l.pos.z,distance:0,foot:1,grounded:l.grounded}));const s=5.5;for(let l=0;l<3;++l){const h=new Ns().load("/palm-tree.png",d=>{u.scale.set(s*d.image.width/d.image.height,s,1)});h.colorSpace=Me;const u=new fi(new ti({map:h,transparent:!0,depthWrite:!1}));u.center.set(.5,0),u.position.set(Yt.halfW+7-l*2,-5+3*l,1),u.scale.set(s,s,1),u.renderOrder=10-l,this.scene.add(u)}for(let l=0;l<3;++l){const h=new Ns().load("/palm-tree.png",d=>{d.wrapS=Zn,d.repeat.x=-1,d.offset.x=1,u.scale.set(s*d.image.width/d.image.height,s,1)});h.colorSpace=Me;const u=new fi(new ti({map:h,transparent:!0,depthWrite:!1}));u.center.set(.5,0),u.position.set(Yt.halfW-(15-l*2),-5+3*l,1),u.scale.set(s,s,1),u.renderOrder=10-l,this.scene.add(u)}this.net=this.buildNet(),this.scene.add(this.net),this.views=n.players.map(l=>new nu(l));for(const l of this.views)this.scene.add(l.group,l.shadow);const r=De.radius*2*1.25,a=new Ns().load("/ball.svg",l=>{const h=l.image.width/l.image.height;this.ball.scale.set(r*Math.min(h,1),r/Math.max(h,1),1)});a.colorSpace=Me,this.ball=new fi(new ti({map:a,transparent:!0,depthWrite:!1})),this.ball.renderOrder=2,this.ball.scale.set(r,r,1),this.scene.add(this.ball,this.ballShadow),this.ballTrail=new p3(this.scene),this.reticleMat=new sn({color:3399167,transparent:!0,opacity:.85,depthWrite:!1}),this.reticle=new Bt(new Fa(.32,.46,32),this.reticleMat),this.reticle.rotation.x=-Math.PI/2,this.reticle.position.y=.05,this.scene.add(this.reticle),this.pulse=new Bt(new Fa(.3,.38,28),new sn({color:16777215,transparent:!0,opacity:0,depthWrite:!1,side:ln})),this.scene.add(this.pulse);const o=Is(128,128,l=>{l.translate(64,64),l.beginPath();for(let u=0;u<24;u++){const d=u*Math.PI/12,f=u%2===0?57:17,g=Math.cos(d)*f,_=Math.sin(d)*f;u===0?l.moveTo(g,_):l.lineTo(g,_)}l.closePath();const h=`#${this.game.players[this.lastTouchedBy].color.toString(16).padStart(6,"0")}`;l.fillStyle=h,l.fill()});this.serveImpact=new fi(new ti({map:o,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1})),this.serveImpact.visible=!1,this.serveImpact.renderOrder=2,this.scene.add(this.serveImpact);for(const l of["bump","set","spike","serve"]){const h=new Bt(new Vi(Hi[l].reach,14,10),new sn({color:S3[l],wireframe:!0,transparent:!0,opacity:.35}));this.reachSpheres[l]=h,this.debugGroup.add(h)}const c=new rn;c.setAttribute("position",new _n(new Float32Array(this.trailPts*3),3)),this.trail=new Wy(c,new lm({color:16720486})),this.trail.frustumCulled=!1,this.debugGroup.add(this.trail),this.debugGroup.visible=!1,this.scene.add(this.debugGroup),this.resize(),window.addEventListener("resize",()=>this.resize())}get motionEffects(){return this.effectsEnabled&&!this.reducedMotion.matches}buildCourt(){const t=Is(128,128,T=>{const P=T.createImageData(128,128);for(let M=0;M<128;M++)for(let x=0;x<128;x++){const R=x/128*Math.PI*2,I=M/128*Math.PI*2,U=Math.sin(R*3+Math.sin(I*2))*Math.cos(I*3+Math.sin(R*2)),H=Math.pow(Math.max(0,U),8),G=(M*128+x)*4;P.data[G]=25+U*10+H*95,P.data[G+1]=145+U*20+H*65,P.data[G+2]=185+U*20+H*45,P.data[G+3]=255}T.putImageData(P,0,0)});t.wrapS=t.wrapT=Zn,t.repeat.set(60,60),this.waterFallback=t;const n=new sn({map:t,transparent:!0,opacity:.85,depthWrite:!1}),i=document.createElement("video");i.muted=!0,i.defaultMuted=!0,i.loop=!0,i.playsInline=!0,i.autoplay=!0,i.preload="auto";const s=new Xy(i);s.colorSpace=Me,s.wrapS=s.wrapT=Zn,s.repeat.set(60,60),i.addEventListener("playing",()=>{n.map=s,n.needsUpdate=!0}),i.addEventListener("error",()=>{n.map=t,n.needsUpdate=!0,console.warn("Water video could not be decoded; using animated water fallback.",i.error)});const r=()=>{i.paused&&!i.error&&i.play().catch(()=>{})};window.addEventListener("pointerdown",r),window.addEventListener("keydown",r),i.src="/wateranim1.mp4",i.load(),r();const o=-7-2.5,c=new Bt(new mn(220,220),n);c.rotation.x=-Math.PI/2,c.position.z=o-110,this.scene.add(c);const l=3,h=220,u=220,d=3,f=(T,P)=>{const M=new Ns().load("/sand-texture.png");return M.colorSpace=Me,M.wrapS=M.wrapT=Zn,M.repeat.set(T/d,P/d),M.offset.set(Be.euclideanModulo((Yt.halfW-T/2)/d,1),Be.euclideanModulo((Yt.halfLen-P/2)/d,1)),M.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),M},g=(T,P)=>{const M=((T+.5)/512-.5)*h,x=((P+.5)/512-.5)*u,R=o-x,I=.18*Math.sin(M*2.1+x*.8)+.12*Math.sin(x*2.8-M*.6),U=Be.clamp((R+I)/l,0,1);return{opacity:1-U*U*(3-2*U),wet:Be.smoothstep(R+I,-.8,l)}},_=Is(512,512,T=>{const P=T.createImageData(512,512);for(let M=0;M<512;M++)for(let x=0;x<512;x++){const R=(M*512+x)*4,I=Math.round(g(x,M).opacity*255);P.data[R]=P.data[R+1]=P.data[R+2]=I,P.data[R+3]=255}T.putImageData(P,0,0)});_.colorSpace=Li;const m=Is(512,512,T=>{const P=T.createImageData(512,512);for(let M=0;M<512;M++)for(let x=0;x<512;x++){const{opacity:R,wet:I}=g(x,M),U=(M*512+x)*4;P.data[U]=60,P.data[U+1]=45,P.data[U+2]=70,P.data[U+3]=Math.round(I*R*.25*255)}T.putImageData(P,0,0)}),p=new Bt(new mn(h,u),new Bi({map:f(h,u),alphaMap:_,transparent:!0,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.y=.002,p.renderOrder=-1,this.scene.add(p);const E=new Bt(new mn(h,u),new sn({map:m,transparent:!0,depthWrite:!1}));E.rotation.x=-Math.PI/2,E.position.y=.003,this.scene.add(E);const b=new Bt(new mn(Yt.halfW*2,Yt.halfLen*2),new Bi({map:f(Yt.halfW*2,Yt.halfLen*2)}));b.rotation.x=-Math.PI/2,b.position.y=.005,this.scene.add(b);const S=new sn({color:16777215}),O=(T,P,M,x)=>{const R=new Bt(new mn(T,P),S);R.rotation.x=-Math.PI/2,R.position.set(M,.012,x),this.scene.add(R)},A=.1;O(A,Yt.halfLen*2+A,-4,0),O(A,Yt.halfLen*2+A,Yt.halfW,0),O(Yt.halfW*2+A,A,0,-7),O(Yt.halfW*2+A,A,0,Yt.halfLen)}buildNet(){const t=new Oi,n=di.halfW*2,i=Is(32,32,a=>{a.strokeStyle="#1a1a1a",a.lineWidth=3,a.strokeRect(0,0,32,32)});i.wrapS=i.wrapT=Zn,i.repeat.set(n/.25,1/.25);const s=new Bt(new mn(n,1),new sn({map:i,transparent:!0,side:ln,depthWrite:!1}));s.position.y=di.top-.5;const r=new Bt(new Xr(n,.09,.04),new Bi({color:16777215}));r.material.transparent=!0,r.material.depthWrite=!1,this.netMaterials.push(s.material,r.material),r.position.y=di.top-.045,t.add(s,r);for(const a of[-1,1]){const o=new Bt(new Yr(.06,.06,di.top+.35,10),new Bi({color:16765773,transparent:!0}));o.position.set(a*di.halfW,(di.top+.35)/2,0),t.add(o)}return t.traverse(a=>{a instanceof Bt&&(a.renderOrder=1)}),t}resize(){const t=this.parent.clientWidth||window.innerWidth,n=this.parent.clientHeight||window.innerHeight;this.renderer.setSize(t,n),this.camera.aspect=t/n,this.camera.fov=t/n<1.3?58:45,this.camera.updateProjectionMatrix()}onEvent(t){if((t.kind==="toss"||t.kind==="retoss"||t.kind==="point"||t.kind==="over")&&this.ballTrail.reset(),t.kind==="land"&&this.motionEffects&&this.sand.emit(t.x,t.z,!0),t.kind==="net"&&(this.netShake=.3),t.kind==="hit"){t.type==="spike"&&this.motionEffects&&(this.spikeShake=.24,this.spikeStrength=.06+t.quality*.1);const n=this.game.players.find(s=>s.id===t.player);n&&this.ballTrail.hit(E3[n.side]);const i=this.game.ball.pos;this.pulse.position.set(i.x,i.y,i.z),this.pulse.lookAt(this.camera.position),this.pulseLife=.25,this.pulse.material.color.setHex(t.quality>.85?16777062:t.quality>.4?16777215:16737877),(t.type==="serve"||t.type==="spike")&&this.motionEffects&&(this.serveImpact.position.set(i.x,i.y,i.z),this.serveImpactLife=.12,this.impactNeedsFrame=t.type==="serve",this.lastTouchedBy=t.player)}}update(t,n){var h;for(const u of this.berts)u.update(t);(h=this.waterFallback)==null||h.offset.set(n*.015,Math.sin(n*.2)*.025);const i=this.game,s=i.players[i.viewPlayerId];if(this.motionEffects||(this.serveImpactLife=0,this.impactHoldUntil=0,this.impactNeedsFrame=!1),this.serveImpactLife=Math.max(0,this.serveImpactLife-t),this.serveImpact.visible=this.serveImpactLife>0,this.serveImpact.visible){const u=1-this.serveImpactLife/.12;this.serveImpact.scale.setScalar(.7+u*.8),this.serveImpact.material.opacity=(1-u)*.8,this.serveImpact.material.rotation=u*.2}for(const u of this.views)u.update(t);this.sand.update(t);for(let u=0;u<i.players.length;u++){const d=i.players[u],f=this.footsteps[u];!f.grounded&&d.grounded&&this.motionEffects&&this.sand.emit(d.pos.x,d.pos.z,!0),f.grounded=d.grounded;const g=Math.hypot(d.pos.x-f.x,d.pos.z-f.z);f.x=d.pos.x,f.z=d.pos.z,d.grounded&&g<1&&this.motionEffects?(f.distance+=g,f.distance>=.65&&(f.distance%=.65,this.sand.emit(d.pos.x+f.foot*.15,d.pos.z),f.foot*=-1)):f.distance=0}const r=i.ball;this.ball.position.set(r.pos.x,r.pos.y,r.pos.z),this.ballShadow.position.set(r.pos.x,.02,r.pos.z);const a=1/(.7+Math.max(0,r.pos.y-De.radius)*.18);if(this.ballShadow.scale.set(a,a,1),this.netShake=Math.max(0,this.netShake-t),this.motionEffects||(this.netShake=0,this.spikeShake=0,this.pulseLife=0),this.net.position.z=Math.sin(n*60)*this.netShake*.12,this.pulse.visible=this.motionEffects&&this.pulseLife>0,this.pulseLife>0){this.pulseLife-=t;const u=1-Math.max(0,this.pulseLife)/.25;this.pulse.scale.setScalar(1+u*2.2),this.pulse.material.opacity=(1-u)*.9}const o=i.phase==="ready"||i.phase==="toss"||i.phase==="rally";if(this.reticle.visible=o,o){const u=i.previewType(s),d=i.previewTarget(s,u);this.reticle.position.set(d.x,.05,d.z),this.reticleMat.color.setHex(d.over?16733508:3399167);const f=1+.06*Math.sin(n*8);this.reticle.scale.setScalar(f)}if(this.camera.position.set(r.pos.x*.12,9.5,17.5*s.side),this.camera.lookAt(r.pos.x*.05,.6,-s.side),this.spikeShake=Math.max(0,this.spikeShake-t),this.motionEffects&&this.spikeShake>0){const u=this.spikeStrength*(this.spikeShake/.24)**2;this.camera.position.x+=Math.sin(n*110)*u,this.camera.position.y+=Math.cos(n*137)*u*.6}(i.phase==="ready"||!this.motionEffects)&&this.ballTrail.reset(),this.ballTrail.update(t,r.pos,this.camera);const l=r.pos.z*s.side>=0?.18:1;this.netOpacity=Be.damp(this.netOpacity,l,12,t);for(const u of this.netMaterials)u.opacity=this.netOpacity;if(this.debugGroup.visible=this.debug,this.debug){for(const f of Object.keys(this.reachSpheres)){const g=Jo(s.actor,Hi[f]);this.reachSpheres[f].position.set(g.x,g.y,g.z)}const u=_3(r.pos,r.vel,.05,this.trailPts),d=this.trail.geometry.getAttribute("position");for(let f=0;f<this.trailPts;f++){const g=u[Math.min(f,u.length-1)];d.setXYZ(f,g.x,g.y,g.z)}d.needsUpdate=!0}}render(){const t=performance.now();if(this.impactNeedsFrame)this.impactNeedsFrame=!1,this.impactHoldUntil=t+50;else if(t<this.impactHoldUntil)return;this.renderer.render(this.scene,this.camera)}}class T3{constructor(t,n){C(this,"element",document.createElement("div"));C(this,"player",new eu(0,1,16755200));C(this,"renderer");C(this,"scene",new jh);C(this,"camera",new pn(35,1.4,.1,30));C(this,"view");C(this,"appearance",_m());this.element.className="customize-screen",this.element.hidden=!0;const i=document.createElement("h2");i.textContent="Make it yours";const s=document.createElement("div");s.className="character-preview",this.element.append(i,s);const r=()=>{Object.assign(this.player,this.appearance),t({...this.appearance})};for(const[a,o]of[["Character color","color"]]){const c=document.createElement("label");c.textContent=a;const l=document.createElement("input");l.type="color",l.value="#"+this.appearance[o].toString(16).padStart(6,"0"),l.oninput=()=>{this.appearance[o]=parseInt(l.value.slice(1),16),r()},c.append(l),this.element.append(c)}Object.assign(this.player,this.appearance),this.element.addEventListener("preview-open",()=>{if(!this.renderer)try{this.renderer=new Yh({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(280,200),this.renderer.domElement.setAttribute("aria-label","Your character preview"),this.renderer.domElement.setAttribute("role","img"),s.append(this.renderer.domElement),this.camera.position.set(2.8,1.8,5),this.camera.lookAt(0,1,0),this.scene.add(new tu(16777215,12298372,2.5)),this.view=new nu(this.player),this.scene.add(this.view.group)}catch{s.textContent="Preview unavailable; your outfit will still apply in game."}}),window.addEventListener("pagehide",()=>{var a;return(a=this.renderer)==null?void 0:a.dispose()})}update(){var t;this.element.hidden||(this.element.dispatchEvent(new Event("preview-open")),(t=this.view)==null||t.update(0),this.renderer&&this.renderer.render(this.scene,this.camera))}}class A3{constructor(){C(this,"element",document.createElement("div"));C(this,"renderer");C(this,"scene",new jh);C(this,"camera",new pn(42,1,.1,180));C(this,"player",new eu(0,1,16755200));C(this,"character");C(this,"waves",[]);C(this,"ocean");C(this,"birds",[]);C(this,"reduced",window.matchMedia("(prefers-reduced-motion: reduce)"));C(this,"width",0);C(this,"height",0);C(this,"failed",!1);C(this,"sandTextures",[]);this.element.className="title-beach",this.element.setAttribute("aria-hidden","true"),window.addEventListener("pagehide",()=>{var t;this.scene.traverse(n=>{if(n instanceof Bt){n.geometry.dispose();const i=Array.isArray(n.material)?n.material:[n.material];for(const s of i)s.dispose()}});for(const n of this.sandTextures)n.dispose();(t=this.renderer)==null||t.dispose()})}init(){this.renderer=new Yh({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.setClearColor(8636109),this.element.append(this.renderer.domElement);const t=document.createElement("canvas");t.width=4,t.height=512;const n=t.getContext("2d"),i=n.createLinearGradient(0,0,0,512);i.addColorStop(0,"#427f9d"),i.addColorStop(.45,"#a9d2d0"),i.addColorStop(.75,"#ffdc9c"),i.addColorStop(1,"#f5b982"),n.fillStyle=i,n.fillRect(0,0,4,512),this.scene.background=new Aa(t),this.scene.fog=new hc(12178634,38,145),this.scene.add(new tu(16773838,7117466,2.4));const s=new mm(16768941,2.5);s.position.set(-8,12,-12),this.scene.add(s);const r=this.sandMaterial(50,10),a=new Bt(new mn(200,40),r);a.rotation.x=-Math.PI/2,a.position.z=15,this.scene.add(a);const o=new mn(200,140,100,70);o.rotateX(-Math.PI/2),this.ocean=new Bt(o,new Bi({color:3252140,flatShading:!0})),this.ocean.position.set(0,-.09,-75),this.scene.add(this.ocean);for(let m=0;m<14;m++){const p=new mn(130,.16,100,1);p.rotateX(-Math.PI/2);const E=new Bt(p,new sn({color:15857375,transparent:!0,opacity:.35,depthWrite:!1,side:ln}));E.position.y=.035,this.waves.push(E),this.scene.add(E)}this.addBirds();const c=new Bt(new Vi(4,32,20),new sn({color:16772534,fog:!1}));c.position.set(-15,13,-95),this.scene.add(c);const l=this.sandMaterial(3,1.5);for(const[m,p,E]of[[-7,3,2],[-2,5,1.6],[7,4,2.6]]){const b=new Bt(new Vi(1,24,12),l);b.position.set(m,-.5,p),b.scale.set(E*2,.65,E),this.scene.add(b)}this.palm(-5,0,1),this.palm(-10,-8,.8),this.palm(9,-14,.65);const h=De.radius*2*1.25,u=new Ns().load("/ball.svg",m=>{const p=m.image.width/m.image.height;d.scale.set(h*Math.min(p,1),h/Math.max(p,1),1)});u.colorSpace=Me;const d=new fi(new ti({map:u,transparent:!0,depthWrite:!1}));d.scale.set(h,h,1),d.position.set(-1.35,h/2,1.7),d.renderOrder=2,this.scene.add(d);const f=3,g=new Ns().load("/sand-castle.png",m=>{_.scale.set(f,f*m.image.height/m.image.width,1)});g.colorSpace=Me;const _=new fi(new ti({map:g,transparent:!0,depthWrite:!1}));_.center.set(.5,0),_.position.set(0,.08,-.6),_.scale.set(f,f,1),_.renderOrder=1,this.scene.add(_),this.player.pos={x:-2.25,z:1},this.character=new nu(this.player),this.scene.add(this.character.group,this.character.shadow)}sandMaterial(t,n){const s=document.createElement("canvas");s.width=s.height=512;const r=document.createElement("canvas");r.width=r.height=512;const a=s.getContext("2d"),o=r.getContext("2d"),c=a.createImageData(512,512),l=o.createImageData(512,512);let h=7243;const u=()=>(h=Math.imul(h,1664525)+1013904223>>>0,h/4294967296);for(let g=0;g<512;g++)for(let _=0;_<512;_++){const m=_/512*Math.PI*2,p=g/512*Math.PI*2,E=Math.sin(p*12+Math.sin(m*2)*1.4+Math.sin(m*5)*.3),b=Math.sin(m*2+Math.sin(p))*Math.cos(p*3)*5,S=(u()-.5)*28,O=u()>.992?-35:0,A=E*5+b+S+O,T=(g*512+_)*4;c.data[T]=211+A,c.data[T+1]=185+A,c.data[T+2]=140+A,c.data[T+3]=255;const P=128+E*35+S*1.5;l.data[T]=l.data[T+1]=l.data[T+2]=P,l.data[T+3]=255}a.putImageData(c,0,0),o.putImageData(l,0,0);const d=new Aa(s),f=new Aa(r);d.colorSpace=Me;for(const g of[d,f])g.wrapS=g.wrapT=Zn,g.repeat.set(t,n),g.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),this.sandTextures.push(g);return new a3({color:16774366,map:d,bumpMap:f,bumpScale:.055,roughness:1,metalness:0})}addBirds(){const t=new sn({color:3427927,side:ln});for(let n=0;n<8;n++){const i=new Oi,s=[];for(const a of[-1,1]){const o=new rn;o.setAttribute("position",new Ie([0,0,0,a*.65,.12,0,a*.28,-.1,0],3));const c=new Bt(o,t);s.push(c),i.add(c)}const r=new Bt(new Vi(.055,6,4),t);r.scale.set(1.6,.6,1),i.add(r),i.scale.setScalar(.65+n%3*.16),this.birds.push({group:i,wings:s}),this.scene.add(i)}}palm(t,n,i){const s=new Oi;s.position.set(t,0,n),s.scale.setScalar(i);const r=new Bt(new Yr(.13,.25,5,9),new Bi({color:9069904}));r.position.set(-.25,2.5,0),r.rotation.z=-.1,s.add(r);for(let a=0;a<7;a++){const o=new Bt(new Jh(.45,3.4,5),new Bi({color:a%2?3962720:5408362})),c=a/7*Math.PI*2;o.position.set(Math.cos(c)*1.15,4.9,Math.sin(c)*1.15),o.quaternion.setFromUnitVectors(new L(0,1,0),new L(Math.cos(c),-.25,Math.sin(c)).normalize()),s.add(o)}this.scene.add(s)}update(t,n,i){if(this.failed)return;try{this.renderer||this.init()}catch{this.failed=!0;return}const s=this.element.clientWidth,r=this.element.clientHeight;if(!s||!r)return;(s!==this.width||r!==this.height)&&(this.width=s,this.height=r,this.renderer.setSize(s,r),this.camera.aspect=s/r,this.camera.updateProjectionMatrix());const a=i&&!this.reduced.matches?t:0;if(this.player.color=n,this.player.y=.06+Math.sin(a*1.8)*.055,this.character.update(0),this.character.group.rotation.y=-.35+Math.sin(a*.8)*.035,this.ocean){const c=this.ocean.geometry.attributes.position;for(let l=0;l<c.count;l++){const h=c.getX(l),u=c.getZ(l);c.setY(l,Math.sin(h*.18+u*.7+a*1.1)*.045+Math.sin(u*1.3+a*1.7)*.025)}c.needsUpdate=!0,this.ocean.geometry.computeVertexNormals()}this.waves.forEach((c,l)=>{const h=(a*.028+l/this.waves.length)%1;c.position.z=-40+h*35,c.material.opacity=Math.sin(h*Math.PI)*.4;const u=c.geometry.attributes.position;for(let d=0;d<u.count;d++){const f=u.getX(d),g=d<u.count/2?-.08:.08;u.setZ(d,g+Math.sin(f*.23+l*1.7+a*.25)*.25+Math.sin(f*.61+l)*.07)}u.needsUpdate=!0}),this.birds.forEach(({group:c,wings:l},h)=>{const u=h<5?0:1,d=u===0?1:-1,f=(a*(u===0?1.1:.8)+(u===0?27:45))%68-34;c.position.set(d*f+h%5*1.5,7.4+u*2.2+Math.abs(h%5-2)*.5+Math.sin(a*.65+h)*.15,-27-u*10-h%5*1.2);const g=Math.sin(a*3.6+h*.9)*.4;l[0].rotation.z=-g,l[1].rotation.z=g,c.rotation.z=Math.sin(a*.8+h)*.06});const o=s/r<.9;this.camera.position.set(o?-1.8:0,2.9,o?12.5:9),this.camera.lookAt(o?-1:.2,1.55,-2),this.renderer.render(this.scene,this.camera)}}class C3{constructor(t,n,i,s,r,a,o,c,l,h){C(this,"overlay",document.createElement("div"));C(this,"toggle",document.createElement("button"));C(this,"title",document.createElement("h1"));C(this,"play",document.createElement("button"));C(this,"restart",document.createElement("button"));C(this,"open",!1);C(this,"started",!1);C(this,"customize");C(this,"beach",new A3);C(this,"motion",!0);C(this,"lastPhase","");C(this,"returnAfterTutorial",!1);C(this,"screens",[]);C(this,"navigation",document.createElement("nav"));this.game=n,this.online=i,this.client=s,this.resume=l,this.overlay.className="game-menu";const u=document.createElement("section");u.className="title-menu",u.setAttribute("role","dialog"),u.setAttribute("aria-modal","true"),this.title.id="game-menu-title",u.setAttribute("aria-labelledby",this.title.id),this.title.className="title-wordmark",this.title.innerHTML="COURT<span>GESTURE</span>";const d=document.createElement("div");d.className="title-rule",d.setAttribute("aria-hidden","true");const f=document.createElement("header");f.append(this.title,d),this.navigation.setAttribute("aria-label","Game menu"),this.navigation.className="title-navigation",this.toggle.className="menu-toggle",this.toggle.textContent="Menu",this.toggle.onclick=()=>this.show(!this.open);const g=(I,U)=>{const H=document.createElement("button");return H.textContent=I,H.onclick=U,H},_=()=>{var I;this.screen(this.navigation),(I=this.navigation.querySelector("button"))==null||I.focus()},m=()=>g("← Back",_);this.play.onclick=()=>{this.started=!0,this.show(!1)},this.restart.textContent="New match",this.restart.disabled=s,this.restart.onclick=()=>{this.returnAfterTutorial=!1,n.restart(),this.started=!0,this.show(!1)},this.customize=new T3(h,_),this.customize.element.classList.add("title-subscreen"),this.customize.element.append(m());const p=document.createElement("div");p.className="title-subscreen";const E=document.createElement("h2");E.textContent="Options";const b=document.createElement("select");b.setAttribute("aria-label","CPU difficulty");for(const I of["easy","normal","hard"]){const U=document.createElement("option");U.value=I,U.textContent=I[0].toUpperCase()+I.slice(1),U.selected=I===r,b.append(U)}b.disabled=s,b.onchange=()=>a(b.value);const S=document.createElement("label");S.textContent=s?"Difficulty is set by host":"Difficulty",S.append(b);const O=(I,U)=>{const H=document.createElement("label"),G=document.createElement("input");return G.type="checkbox",G.checked=!0,G.onchange=()=>U(G.checked),H.append(document.createTextNode(I),G),H};p.append(E,S,O("Sound effects",o),O("Motion effects",I=>{this.motion=I,c(I)}),m());const A=document.createElement("div");A.className="title-subscreen";const T=document.createElement("h2");T.textContent="How to play";const P=document.createElement("p");P.className="menu-help",P.textContent="Your player follows the ball automatically. Move your hand to aim. Enable the camera after starting, then hold steady to calibrate.";const M=document.createElement("dl");M.className="title-controls";for(const[I,U]of[["Bump","Fist"],["Set","Point up"],["Spike","Thumbs up"],["Serve","Thumbs up, twice"],["Power","Hand size"],["Aim","Hand offset"]]){const H=document.createElement("dt");H.textContent=I;const G=document.createElement("dd");G.textContent=U,M.append(H,G)}A.append(T,P,M,m());const x=g("Tutorial",()=>{this.returnAfterTutorial=!0,n.startTutorial(),this.started=!0,this.show(!1)});x.disabled=s,this.navigation.append(this.play,x,g("Customize character",()=>this.screen(this.customize.element)),g("Options",()=>this.screen(p)),g("How to play",()=>this.screen(A)),this.restart),this.screens=[this.navigation,this.customize.element,p,A],this.screen(this.navigation,!1);const R=document.createElement("p");R.className="title-footer",R.textContent="Made in 24 hours for HowdyHack 2026!",u.append(f,this.navigation,this.customize.element,p,A,R),this.overlay.append(this.beach.element,u),t.append(this.toggle,this.overlay),window.addEventListener("keydown",I=>{var U;if(I.code==="Tab"&&this.open){const H=[...u.querySelectorAll("button:not(:disabled), input:not(:disabled), select:not(:disabled)")].filter(Z=>!Z.closest("[hidden]")),G=H[0],q=H.at(-1);I.shiftKey&&document.activeElement===G?(I.preventDefault(),q==null||q.focus()):!I.shiftKey&&document.activeElement===q&&(I.preventDefault(),G==null||G.focus())}if(this.open&&!this.navigation.hidden&&["ArrowDown","ArrowUp"].includes(I.code)){const H=[...this.navigation.querySelectorAll("button")].filter(q=>!q.hidden&&!q.disabled),G=H.indexOf(document.activeElement);(U=H[(G+(I.code==="ArrowDown"?1:H.length-1)+H.length)%H.length])==null||U.focus(),I.preventDefault()}I.code!=="Escape"||I.repeat||(I.preventDefault(),this.open&&this.navigation.hidden?_():this.show(!this.open))}),this.show(!i)}get paused(){return this.open&&!this.online}screen(t,n=!0){var i;for(const s of this.screens)s.hidden=s!==t;this.overlay.classList.toggle("customizing",t===this.customize.element),this.overlay.scrollTop=0,n&&((i=t.querySelector("input, select, button"))==null||i.focus())}show(t){var n,i;this.open=t,this.overlay.hidden=!t,(n=this.overlay.parentElement)==null||n.classList.toggle("menu-open",t),this.toggle.setAttribute("aria-expanded",String(t)),this.play.textContent=this.started||this.online?"Continue match":"Play",this.restart.hidden=!this.started&&!this.online,t?(this.screen(this.navigation),this.play.focus()):((i=document.activeElement)==null||i.blur(),this.resume())}update(){this.returnAfterTutorial&&!this.game.tutorial&&(this.returnAfterTutorial=!1,this.started=!1,this.lastPhase=this.game.phase,this.show(!0)),this.open&&(this.beach.update(performance.now()/1e3,this.game.players[0].color,this.motion),this.customize.update()),this.game.phase==="over"&&this.lastPhase!=="over"&&(this.started=!0,this.show(!0),this.client||this.restart.focus()),this.lastPhase==="over"&&this.game.phase!=="over"&&this.show(!1),this.lastPhase=this.game.phase}}class R3{constructor(){C(this,"context");C(this,"master");C(this,"noise");C(this,"enabled",!0);C(this,"unlock",()=>{try{if(!this.context){this.context=new AudioContext,this.master=this.context.createGain(),this.master.gain.value=this.enabled?.22:0,this.master.connect(this.context.destination),this.noise=this.context.createBuffer(1,this.context.sampleRate*.2,this.context.sampleRate);const t=this.noise.getChannelData(0);for(let n=0;n<t.length;n++)t[n]=Math.random()*2-1}this.context.state==="suspended"&&this.context.resume().catch(()=>{})}catch{}});window.addEventListener("pointerdown",this.unlock),window.addEventListener("keydown",this.unlock),window.addEventListener("pagehide",()=>{var t;(t=this.context)==null||t.close()})}setEnabled(t){this.enabled=t,this.context&&this.master&&this.master.gain.setTargetAtTime(t?.22:0,this.context.currentTime,.02)}tone(t,n,i,s,r=0,a="sine"){const o=this.context,c=o.currentTime+r,l=o.createOscillator(),h=o.createGain();l.type=a,l.frequency.setValueAtTime(t,c),l.frequency.exponentialRampToValueAtTime(n,c+i),h.gain.setValueAtTime(0,c),h.gain.linearRampToValueAtTime(s,c+.004),h.gain.exponentialRampToValueAtTime(.001,c+i),l.connect(h),h.connect(this.master),l.onended=()=>{l.disconnect(),h.disconnect()},l.start(c),l.stop(c+i+.01)}puff(t,n){const i=this.context,s=i.createBufferSource(),r=i.createBiquadFilter(),a=i.createGain();s.buffer=this.noise,r.type="lowpass",r.frequency.value=n,a.gain.setValueAtTime(t,i.currentTime),a.gain.exponentialRampToValueAtTime(.001,i.currentTime+.12),s.connect(r),r.connect(a),a.connect(this.master),s.onended=()=>{s.disconnect(),r.disconnect(),a.disconnect()},s.start(),s.stop(i.currentTime+.13)}onEvent(t,n){var i;if(!(!this.enabled||((i=this.context)==null?void 0:i.state)!=="running"))switch(t.kind){case"hit":{const s={bump:220,set:420,spike:130,serve:290,restart:0}[t.type];this.tone(s,s*.45,.12,.5+t.quality*.3,0,"triangle"),this.puff(t.type==="spike"?.5:.15,t.type==="spike"?2200:900);break}case"toss":this.tone(320,540,.12,.25);break;case"net":this.tone(100,45,.18,.5,0,"triangle"),this.puff(.2,600);break;case"land":this.puff(.45,700);break;case"point":(t.winner===n?[440,554,660]:[330,260,220]).forEach((s,r)=>this.tone(s,s,.18,.35,r*.09));break;case"over":(t.winner===n?[440,554,660,880]:[330,294,262,220]).forEach((s,r)=>this.tone(s,s,.3,.4,r*.14));break}}}const iu=()=>({moveX:0,moveF:0,jump:!1,action:null,aim:{x:0,d:0,power:.6}}),Ef=new WeakMap;function Sm(e,t,n){if(e.players.length!==4)return n;const i=(n+2)%4;if(t[i])return n;if((e.phase==="ready"||e.phase==="toss")&&e.server.side===e.players[n].side)return e.server.id;const s=e.players[n],r=e.players[i];if(e.phase==="rally"&&e.lastTouchSide!==s.side){let a=Ef.get(e);a||(a=new Map,Ef.set(e,a));const o=`${e.hitSerial}:${e.lastTouchSide}:${s.lastTouchTime}:${r.lastTouchTime}`,c=a.get(s.side);if((c==null?void 0:c.flight)===o)return c.player;const l=ls(e.ball.pos,e.ball.vel,De.radius),h=d=>Math.hypot(d.pos.x-l.x,d.pos.z-l.z),u=h(r)<h(s)?i:n;return a.set(s.side,{flight:o,player:u}),u}return s.lastTouchTime===r.lastTouchTime?n:s.lastTouchTime>r.lastTouchTime?i:n}function bf(e,t,n,i){var u;if(e.phase!=="rally")return i;const s=ls(e.ball.pos,e.ball.vel,De.radius);let r=t.id<2?-1.8:1.8,a=Yt.halfLen-3.5;if(n&&s.z*t.side>0){const d=e.lastTouchSide===t.side?e.touchCount:0,f=i.action??((u=t.pending)==null?void 0:u.type)??(d===0?"bump":d===1?"set":"spike"),g=Hi[f],_=ls(e.ball.pos,e.ball.vel,t.y+g.height);r=Se(_.x,-4+.3,Yt.halfW-.3),a=Se(_.z*t.side+g.forward,fs.netGap,Yt.halfLen-.3)}const o=r-t.pos.x,c=a-t.pos.z*t.side,l=Math.hypot(o,c),h=l<=.12?0:Math.min(1,l/.6);return{...i,moveX:l?o/l*h:0,moveF:l?-c/l*h:0}}class P3{constructor(t){C(this,"human");C(this,"teamSlots");C(this,"contactController");this.cpu=t}update(t,n,i){const s=this.teamSlots,r=s==null?void 0:s[(i.id+2)%4],a=this.human?i.id:r!=null&&r.human?(i.id+2)%4:-1;return n.players.length===4&&s&&a>=0?Sm(n,s.map(c=>!!c.human),a)===i.id?(this.contactController=s[a].human,bf(n,i,!0,this.contactController.update(t,n,i))):(this.contactController=void 0,i.pending=null,i.prevContactDist=1/0,bf(n,i,!1,iu())):(this.contactController=this.human??this.cpu,this.contactController.update(t,n,i))}sampleContactAim(){var t,n;return(n=(t=this.contactController)==null?void 0:t.sampleContactAim)==null?void 0:n.call(t)}}class L3{constructor(t,n,i,s,r){C(this,"isClient",!1);C(this,"online",!1);C(this,"appearance",_m());this.game=t,this.slots=n;for(const a of n)a.teamSlots=n;this.slots[0].human=i,Object.assign(t.players[0],this.appearance)}customize(t){gm(t)&&(this.appearance={...t},f3(this.appearance),Object.assign(this.game.players[0],this.appearance))}tick(t){this.updateViewPlayer()}record(t){}updateViewPlayer(){this.game.viewPlayerId=Sm(this.game,this.slots.map(t=>!!t.human),0)}render(t){return this.updateViewPlayer(),[]}close(){}}const wf={easy:{speed:.65,think:.3,serveDelay:1.4,overChance:.6,noise:.5,reach:.75,power:.45,posNoise:.9,miss:.18,sloppy:.35},normal:{speed:.85,think:.18,serveDelay:1,overChance:.3,noise:.3,reach:.9,power:.6,posNoise:.55,miss:.08,sloppy:.2},hard:{speed:1,think:.1,serveDelay:.7,overChance:.1,noise:.15,reach:1,power:.8,posNoise:.25,miss:.03,sloppy:.08}};class su{constructor(t,n){C(this,"skill");C(this,"serial",-1);C(this,"roll",!1);C(this,"fumble",!1);C(this,"offX",0);C(this,"offZ",0);C(this,"thinkT",0);C(this,"serveT",0);C(this,"tx",0);C(this,"tz",0);C(this,"serveAimX",0);C(this,"serveAimD",.4);this.rng=n,this.skill=wf[t]}setSkill(t){this.skill=wf[t],this.thinkT=0}update(t,n,i){const s=iu(),r=this.skill,a=Yt.halfW,o=Yt.halfLen;if(s.aim.power=r.power,n.phase==="ready")return n.server===i?(this.serveT+=t,this.serveT>r.serveDelay&&(this.serveT=0,this.serveAimX=(this.rng()*2-1)*.8,this.serveAimD=.2+this.rng()*.7,s.action="serve")):this.serveT=0,s;if(n.phase==="toss"){if(n.server===i){s.aim.x=this.serveAimX,s.aim.d=this.serveAimD;const I=n.ball;I.vel.y<0&&I.pos.y<2.9&&(s.action="serve")}return s}if(n.phase!=="rally")return s;const c=n.ball;if(n.hitSerial!==this.serial){this.serial=n.hitSerial,this.roll=this.rng()<r.overChance,this.fumble=this.rng()<r.miss;const U=this.rng()<r.sloppy?1+this.rng()*.6:this.rng()*r.posNoise,H=this.rng()*Math.PI*2;this.offX=Math.cos(H)*U,this.offZ=Math.sin(H)*U,this.thinkT=0}const l=n.lastTouchSide===i.side,h=l?n.touchCount:0;let u=h===0?"bump":h===1?"set":"spike",d=!1;h===0&&this.roll&&(d=!0),h===1&&this.roll&&(u="bump",d=!0);const f=ls(c.pos,c.vel,De.radius),g=Math.sign(f.z)===i.side,_=Math.abs(f.x)>a+.2||Math.abs(f.z)>o+.2,m=g&&!(_&&!l),p=Hi[u],E=u==="bump"?1:u==="set"?3:3.3;if(this.thinkT-=t,this.thinkT<=0)if(this.thinkT=r.think,m){const I=ls(c.pos,c.vel,E);this.tx=Se(I.x+this.offX,-6,a+2),this.tz=i.side*Se(i.side*(I.z+this.offZ+i.side*p.forward),.9,o+3)}else this.tx=0,this.tz=i.side*(o-3.5);const b=n.players.filter(I=>I.side===i.side),S=[...b].sort((I,U)=>{const H=Math.hypot(I.pos.x-f.x,I.pos.z-f.z),G=Math.hypot(U.pos.x-f.x,U.pos.z-f.z);return H-G||I.id-U.id})[0],O=b.length>1&&S!==i;O&&(this.tx=i.id<2?-1.8:1.8,this.tz=i.side*(o-3.5));const A=this.tx-i.pos.x,T=this.tz-i.pos.z,P=Math.hypot(A,T);if(P>.12){const I=Math.min(1,P/.6)*r.speed;s.moveX=A/P*I,s.moveF=-i.side*(T/P)*I}if(!m||O)return s;let M=u;if(h>=2&&c.pos.y<2.3&&(M="bump",d=!0),M==="spike"&&i.grounded){const I=ls(c.pos,c.vel,E).t,U=Math.hypot(c.pos.x-i.pos.x,c.pos.z-(i.pos.z-i.side*p.forward));I<.32&&U<1.2&&(s.jump=!0)}const x=Hi[M],R=xm(c.pos,Jo(i.actor,x));if(!this.fumble&&R<x.reach*r.reach&&c.vel.y<1){s.action=M;const I=n.player(Sa(i.side)),U=(this.rng()*2-1)*r.noise;d?(s.aim.x=Se(-I.pos.x/3+U,-.9,.9),s.aim.d=M==="bump"?.65+this.rng()*.3:-.2+this.rng()*.9):M==="set"?(s.aim.x=Se(-c.pos.x/4,-.4,.4),s.aim.d=.3):(s.aim.x=Se(-c.pos.x/3,-.6,.6),s.aim.d=-.1+this.rng()*.3)}return s}}var Lr=typeof self<"u"?self:{};function Oa(e,t){t:{for(var n=["CLOSURE_FLAGS"],i=Lr,s=0;s<n.length;s++)if((i=i[n[s]])==null){n=null;break t}n=i}return(e=n&&n[e])!=null?e:t}function As(){throw Error("Invalid UTF8")}function Tf(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}let Lo,_l;const I3=typeof TextDecoder<"u";let D3;const U3=typeof TextEncoder<"u";function Em(e){if(U3)e=(D3||(D3=new TextEncoder)).encode(e);else{let n=0;const i=new Uint8Array(3*e.length);for(let s=0;s<e.length;s++){var t=e.charCodeAt(s);if(t<128)i[n++]=t;else{if(t<2048)i[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&s<e.length){const r=e.charCodeAt(++s);if(r>=56320&&r<=57343){t=1024*(t-55296)+r-56320+65536,i[n++]=t>>18|240,i[n++]=t>>12&63|128,i[n++]=t>>6&63|128,i[n++]=63&t|128;continue}s--}t=65533}i[n++]=t>>12|224,i[n++]=t>>6&63|128}i[n++]=63&t|128}}e=n===i.length?i:i.subarray(0,n)}return e}function bm(e){Lr.setTimeout(()=>{throw e},0)}var mh,N3=Oa(610401301,!1),Af=Oa(748402147,!0),ru=Oa(824648567,!0),au=Oa(824656860,Oa(1,!0));function Cf(){var e=Lr.navigator;return e&&(e=e.userAgent)?e:""}const Rf=Lr.navigator;function uc(e){return uc[" "](e),e}mh=Rf&&Rf.userAgentData||null,uc[" "]=function(){};const wm={};let Ea=null;function F3(e){const t=e.length;let n=3*t/4;n%3?n=Math.floor(n):"=.".indexOf(e[t-1])!=-1&&(n="=.".indexOf(e[t-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let s=0;return function(r,a){function o(l){for(;c<r.length;){const h=r.charAt(c++),u=Ea[h];if(u!=null)return u;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return l}Tm();let c=0;for(;;){const l=o(-1),h=o(0),u=o(64),d=o(64);if(d===64&&l===-1)break;a(l<<2|h>>4),u!=64&&(a(h<<4&240|u>>2),d!=64&&a(u<<6&192|d))}}(e,function(r){i[s++]=r}),s!==n?i.subarray(0,s):i}function Tm(){if(!Ea){Ea={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=e.concat(t[n].split(""));wm[n]=i;for(let s=0;s<i.length;s++){const r=i[s];Ea[r]===void 0&&(Ea[r]=s)}}}}var O3=typeof Uint8Array<"u",Am=!(!(N3&&mh&&mh.brands.length>0)&&(Cf().indexOf("Trident")!=-1||Cf().indexOf("MSIE")!=-1))&&typeof btoa=="function";const Pf=/[-_.]/g,B3={"-":"+",_:"/",".":"="};function k3(e){return B3[e]||""}function Cm(e){if(!Am)return F3(e);e=Pf.test(e)?e.replace(Pf,k3):e,e=atob(e);const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function ou(e){return O3&&e!=null&&e instanceof Uint8Array}var Ir={};function Xs(){return z3||(z3=new mi(null,Ir))}function cu(e){Rm(Ir);var t=e.g;return(t=t==null||ou(t)?t:typeof t=="string"?Cm(t):null)==null?t:e.g=t}var mi=class{h(){return new Uint8Array(cu(this)||0)}constructor(e,t){if(Rm(t),this.g=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}};let z3,V3;function Rm(e){if(e!==Ir)throw Error("illegal external caller")}function Pm(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}function gh(e){return Pm(e=Error(e),"warning"),e}function Dr(e,t){if(e!=null){var n=V3??(V3={}),i=n[e]||0;i>=t||(n[e]=i+1,Pm(e=Error(),"incident"),bm(e))}}function jr(){return typeof BigInt=="function"}var $r=typeof Symbol=="function"&&typeof Symbol()=="symbol";function _i(e,t,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&e?Symbol.for(e):e!=null?Symbol(e):Symbol():t}var H3=_i("jas",void 0,!0),Lf=_i(void 0,"0di"),_a=_i(void 0,"1oa"),An=_i(void 0,Symbol()),G3=_i(void 0,"0ub"),W3=_i(void 0,"0ubs"),_h=_i(void 0,"0ubsb"),X3=_i(void 0,"0actk"),Ur=_i("m_m","Pa",!0),If=_i();const Lm={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},Im=Object.defineProperties,xt=$r?H3:"Ga";var js;const Df=[];function Xa(e,t){$r||xt in e||Im(e,Lm),e[xt]|=t}function We(e,t){$r||xt in e||Im(e,Lm),e[xt]=t}function qa(e){return Xa(e,34),e}function Ba(e){return Xa(e,8192),e}We(Df,7),js=Object.freeze(Df);var Nr={};function Rn(e,t){return t===void 0?e.h!==qs&&!!(2&(0|e.v[xt])):!!(2&t)&&e.h!==qs}const qs={};function lu(e,t){if(e!=null){if(typeof e=="string")e=e?new mi(e,Ir):Xs();else if(e.constructor!==mi)if(ou(e))e=e.length?new mi(new Uint8Array(e),Ir):Xs();else{if(!t)throw Error();e=void 0}}return e}class Uf{constructor(t,n,i){this.g=t,this.h=n,this.l=i}next(){const t=this.g.next();return t.done||(t.value=this.h.call(this.l,t.value)),t}[Symbol.iterator](){return this}}var q3=Object.freeze({});function Dm(e,t,n){const i=128&t?0:-1,s=e.length;var r;(r=!!s)&&(r=(r=e[s-1])!=null&&typeof r=="object"&&r.constructor===Object);const a=s+(r?-1:0);for(t=128&t?1:0;t<a;t++)n(t-i,e[t]);if(r){e=e[s-1];for(const o in e)!isNaN(o)&&n(+o,e[o])}}var Um={};function Kr(e){return 128&e?Um:void 0}function dc(e){return e.Na=!0,e}var Y3=dc(e=>typeof e=="number"),Nf=dc(e=>typeof e=="string"),j3=dc(e=>typeof e=="boolean"),fc=typeof Lr.BigInt=="function"&&typeof Lr.BigInt(0)=="bigint";function Cn(e){var t=e;if(Nf(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(Y3(t)&&!Number.isSafeInteger(t))throw Error(String(t));return fc?BigInt(e):e=j3(e)?e?"1":"0":Nf(e)?e.trim()||"0":String(e)}var vh=dc(e=>fc?e>=K3&&e<=J3:e[0]==="-"?Ff(e,$3):Ff(e,Z3));const $3=Number.MIN_SAFE_INTEGER.toString(),K3=fc?BigInt(Number.MIN_SAFE_INTEGER):void 0,Z3=Number.MAX_SAFE_INTEGER.toString(),J3=fc?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Ff(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){const i=e[n],s=t[n];if(i>s)return!1;if(i<s)return!0}}const Q3=typeof Uint8Array.prototype.slice=="function";let tM,ye=0,Ne=0;function Of(e){const t=e>>>0;ye=t,Ne=(e-t)/4294967296>>>0}function Fr(e){if(e<0){Of(-e);const[t,n]=fu(ye,Ne);ye=t>>>0,Ne=n>>>0}else Of(e)}function hu(e){const t=tM||(tM=new DataView(new ArrayBuffer(8)));t.setFloat32(0,+e,!0),Ne=0,ye=t.getUint32(0,!0)}function xh(e,t){const n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:ka(e,t)}function eM(e,t){return Cn(jr()?BigInt.asUintN(64,(BigInt(t>>>0)<<BigInt(32))+BigInt(e>>>0)):ka(e,t))}function uu(e,t){const n=2147483648&t;return n&&(t=~t>>>0,(e=1+~e>>>0)==0&&(t=t+1>>>0)),typeof(e=xh(e,t))=="number"?n?-e:e:n?"-"+e:e}function Nm(e,t){return jr()?Cn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(t))<<BigInt(32))+BigInt.asUintN(32,BigInt(e)))):Cn(du(e,t))}function ka(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=""+(4294967296*t+e);else jr()?n=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+Bf(n)+Bf(e));return n}function Bf(e){return e=String(e),"0000000".slice(e.length)+e}function du(e,t){if(2147483648&t)if(jr())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{const[n,i]=fu(e,t);e="-"+ka(n,i)}else e=ka(e,t);return e}function pc(e){if(e.length<16)Fr(Number(e));else if(jr())e=BigInt(e),ye=Number(e&BigInt(4294967295))>>>0,Ne=Number(e>>BigInt(32)&BigInt(4294967295));else{const t=+(e[0]==="-");Ne=ye=0;const n=e.length;for(let i=t,s=(n-t)%6+t;s<=n;i=s,s+=6){const r=Number(e.slice(i,s));Ne*=1e6,ye=1e6*ye+r,ye>=4294967296&&(Ne+=Math.trunc(ye/4294967296),Ne>>>=0,ye>>>=0)}if(t){const[i,s]=fu(ye,Ne);ye=i,Ne=s}}}function fu(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function ni(e){return Array.prototype.slice.call(e)}const Ya=typeof BigInt=="function"?BigInt.asIntN:void 0,nM=typeof BigInt=="function"?BigInt.asUintN:void 0,Ys=Number.isSafeInteger,mc=Number.isFinite,Or=Math.trunc,iM=Cn(0);function ba(e){if(e!=null&&typeof e!="number")throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);return e}function pi(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function za(e){if(e!=null&&typeof e!="boolean"){var t=typeof e;throw Error(`Expected boolean but got ${t!="object"?t:e?Array.isArray(e)?"array":t:"null"}: ${e}`)}return e}function Fm(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}const sM=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function ja(e){switch(typeof e){case"bigint":return!0;case"number":return mc(e);case"string":return sM.test(e);default:return!1}}function Zr(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return mc(e)?0|e:void 0}function Om(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return mc(e)?e>>>0:void 0}function Bm(e){const t=e.length;return(e[0]==="-"?t<20||t===20&&e<="-9223372036854775808":t<19||t===19&&e<="9223372036854775807")?e:(pc(e),du(ye,Ne))}function pu(e){return e=Or(e),Ys(e)||(Fr(e),e=uu(ye,Ne)),e}function km(e){var t=Or(Number(e));return Ys(t)?String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Bm(e))}function zm(e){var t=Or(Number(e));return Ys(t)?Cn(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),jr()?Cn(Ya(64,BigInt(e))):Cn(Bm(e)))}function Vm(e){return Ys(e)?e=Cn(pu(e)):(e=Or(e),Ys(e)?e=String(e):(Fr(e),e=du(ye,Ne)),e=Cn(e)),e}function rM(e){return e==null?e:typeof e=="bigint"?(vh(e)?e=Number(e):(e=Ya(64,e),e=vh(e)?Number(e):String(e)),e):ja(e)?typeof e=="number"?pu(e):km(e):void 0}function Qo(e){const t=typeof e;return e==null?e:t==="bigint"?Cn(Ya(64,e)):ja(e)?t==="string"?zm(e):Vm(e):void 0}function Hm(e){if(typeof e!="string")throw Error();return e}function $a(e){if(e!=null&&typeof e!="string")throw Error();return e}function Je(e){return e==null||typeof e=="string"?e:void 0}function mu(e,t,n,i){return e!=null&&e[Ur]===Nr?e:Array.isArray(e)?((i=(n=0|e[xt])|32&i|2&i)!==n&&We(e,i),new t(e)):(n?2&i?((e=t[Lf])||(qa((e=new t).v),e=t[Lf]=e),t=e):t=new t:t=void 0,t)}function aM(e,t,n){if(t)t:{if(!ja(t=e))throw gh("int64");switch(typeof t){case"string":t=zm(t);break t;case"bigint":t=Cn(Ya(64,t));break t;default:t=Vm(t)}}else t=Qo(e);return(e=t)==null?n?iM:void 0:e}const oM={};let cM=function(){try{return uc(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class vl{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,n){return this.g.set(t,n),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,n){return this.g.forEach(t,n)}[Symbol.iterator](){return this.entries()}}const lM=cM?(Object.setPrototypeOf(vl.prototype,Map.prototype),Object.defineProperties(vl.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),vl):class extends Map{constructor(){super()}};function kf(e){return e}function xl(e){if(2&e.J)throw Error("Cannot mutate an immutable Map")}var Wi=class extends lM{constructor(e,t,n=kf,i=kf){super(),this.J=0|e[xt],this.K=t,this.S=n,this.fa=this.K?hM:i;for(let s=0;s<e.length;s++){const r=e[s],a=n(r[0],!1,!0);let o=r[1];t?o===void 0&&(o=null):o=i(r[1],!1,!0,void 0,void 0,this.J),super.set(a,o)}}V(e){return Ba(Array.from(super.entries(),e))}clear(){xl(this),super.clear()}delete(e){return xl(this),super.delete(this.S(e,!0,!1))}entries(){if(this.K){var e=super.keys();e=new Uf(e,uM,this)}else e=super.entries();return e}values(){if(this.K){var e=super.keys();e=new Uf(e,Wi.prototype.get,this)}else e=super.values();return e}forEach(e,t){this.K?super.forEach((n,i,s)=>{e.call(t,s.get(i),i,s)}):super.forEach(e,t)}set(e,t){return xl(this),(e=this.S(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.fa(t,!0,!0,this.K,!1,this.J))}Ma(e){const t=this.S(e[0],!1,!0);e=e[1],e=this.K?e===void 0?null:e:this.fa(e,!1,!0,void 0,!1,this.J),super.set(t,e)}has(e){return super.has(this.S(e,!1,!1))}get(e){e=this.S(e,!1,!1);const t=super.get(e);if(t!==void 0){var n=this.K;return n?((n=this.fa(t,!1,!0,n,this.ra,this.J))!==t&&super.set(e,n),n):t}}[Symbol.iterator](){return this.entries()}};function hM(e,t,n,i,s,r){return e=mu(e,i,n,r),s&&(e=_u(e)),e}function uM(e){return[e,this.get(e)]}let dM;function zf(){return dM||(dM=new Wi(qa([]),void 0,void 0,void 0,oM))}function gc(e){return An?e[An]:void 0}function tc(e,t){for(const n in e)!isNaN(n)&&t(e,+n,e[n])}Wi.prototype.toJSON=void 0;var yh=class{};const fM={Ka:!0};function pM(e,t){t<100||Dr(W3,1)}function _c(e,t,n,i){const s=i!==void 0;i=!!i;var r,a=An;!s&&$r&&a&&(r=e[a])&&tc(r,pM),a=[];var o=e.length;let c;r=4294967295;let l=!1;const h=!!(64&t),u=h?128&t?0:-1:void 0;1&t||(c=o&&e[o-1],c!=null&&typeof c=="object"&&c.constructor===Object?r=--o:c=void 0,!h||128&t||s||(l=!0,r=r-u+u)),t=void 0;for(var d=0;d<o;d++){let f=e[d];if(f!=null&&(f=n(f,i))!=null)if(h&&d>=r){const g=d-u;(t??(t={}))[g]=f}else a[d]=f}if(c)for(let f in c){if((o=c[f])==null||(o=n(o,i))==null)continue;let g;d=+f,h&&!Number.isNaN(d)&&(g=d+u)<r?a[g]=o:(t??(t={}))[f]=o}return t&&(l?a.push(t):a[r]=t),s&&An&&(e=gc(e))&&e instanceof yh&&(a[An]=function(f){const g=new yh;return tc(f,(_,m,p)=>{g[m]=ni(p)}),g.da=f.da,g}(e)),a}function mM(e){return e[0]=Va(e[0]),e[1]=Va(e[1]),e}function Va(e){switch(typeof e){case"number":return Number.isFinite(e)?e:""+e;case"bigint":return vh(e)?Number(e):""+e;case"boolean":return e?1:0;case"object":if(Array.isArray(e)){var t=0|e[xt];return e.length===0&&1&t?void 0:_c(e,t,Va)}if(e!=null&&e[Ur]===Nr)return Gm(e);if(e instanceof mi){if((t=e.g)==null)e="";else if(typeof t=="string")e=t;else{if(Am){for(var n="",i=0,s=t.length-10240;i<s;)n+=String.fromCharCode.apply(null,t.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?t.subarray(i):t),t=btoa(n)}else{n===void 0&&(n=0),Tm(),n=wm[n],i=Array(Math.floor(t.length/3)),s=n[64]||"";let l=0,h=0;for(;l<t.length-2;l+=3){var r=t[l],a=t[l+1],o=t[l+2],c=n[r>>2];r=n[(3&r)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[h++]=c+r+a+o}switch(c=0,o=s,t.length-l){case 2:o=n[(15&(c=t[l+1]))<<2]||s;case 1:t=t[l],i[h]=n[t>>2]+n[(3&t)<<4|c>>4]+o+s}t=i.join("")}e=e.g=t}return e}return e instanceof Wi?e=e.size!==0?e.V(mM):void 0:void 0}return e}function Gm(e){return _c(e=e.v,0|e[xt],Va)}let gM,_M;function Bs(e,t){return Wm(e,t[0],t[1])}function Wm(e,t,n,i=0){if(e==null){var s=32;n?(e=[n],s|=128):e=[],t&&(s=-16760833&s|(1023&t)<<14)}else{if(!Array.isArray(e))throw Error("narr");if(s=0|e[xt],Af&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&function(){if(Af)throw Error("carr");Dr(X3,5)}(),256&s)throw Error("farr");if(64&s)return(s|i)!==s&&We(e,s|i),e;if(n&&(s|=128,n!==e[0]))throw Error("mid");t:{s|=64;var r=(n=e).length;if(r){var a=r-1;const c=n[a];if(c!=null&&typeof c=="object"&&c.constructor===Object){if((a-=t=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var o in c)(r=+o)<a&&(n[r+t]=c[o],delete c[o]);s=-16760833&s|(1023&a)<<14;break t}}if(t){if((o=Math.max(t,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&o)<<14}}}return We(e,64|s|i),e}function vM(e,t){if(typeof e!="object")return e;if(Array.isArray(e)){var n=0|e[xt];return e.length===0&&1&n?void 0:Vf(e,n,t)}if(e!=null&&e[Ur]===Nr)return Hf(e);if(e instanceof Wi){if(2&(t=e.J))return e;if(!e.size)return;if(n=qa(e.V()),e.K)for(e=0;e<n.length;e++){const i=n[e];let s=i[1];s=s==null||typeof s!="object"?void 0:s!=null&&s[Ur]===Nr?Hf(s):Array.isArray(s)?Vf(s,0|s[xt],!!(32&t)):void 0,i[1]=s}return n}return e instanceof mi?e:void 0}function Vf(e,t,n){return 2&t||(!n||4096&t||16&t?e=Jr(e,t,!1,n&&!(16&t)):(Xa(e,34),4&t&&Object.freeze(e))),e}function gu(e,t,n){return e=new e.constructor(t),n&&(e.h=qs),e.m=qs,e}function Hf(e){const t=e.v,n=0|t[xt];return Rn(e,n)?e:vu(e,t,n)?gu(e,t):Jr(t,n)}function Jr(e,t,n,i){return i??(i=!!(34&t)),e=_c(e,t,vM,i),i=32,n&&(i|=2),We(e,t=16769217&t|i),e}function _u(e){const t=e.v,n=0|t[xt];return Rn(e,n)?vu(e,t,n)?gu(e,t,!0):new e.constructor(Jr(t,n,!1)):e}function Qr(e){if(e.h!==qs)return!1;var t=e.v;return Xa(t=Jr(t,0|t[xt]),2048),e.v=t,e.h=void 0,e.m=void 0,!0}function ta(e){if(!Qr(e)&&Rn(e,0|e.v[xt]))throw Error()}function $s(e,t){t===void 0&&(t=0|e[xt]),32&t&&!(4096&t)&&We(e,4096|t)}function vu(e,t,n){return!!(2&n)||!(!(32&n)||4096&n)&&(We(t,2|n),e.h=qs,!0)}const xM=Cn(0),is={};function _e(e,t,n,i,s){if((t=Xi(e.v,t,n,s))!==null||i&&e.m!==qs)return t}function Xi(e,t,n,i){if(t===-1)return null;const s=t+(n?0:-1),r=e.length-1;let a,o;if(!(r<1+(n?0:-1))){if(s>=r)if(a=e[r],a!=null&&typeof a=="object"&&a.constructor===Object)n=a[t],o=!0;else{if(s!==r)return;n=a}else n=e[s];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[t]=i:e[s]=i,i}return n}}function oe(e,t,n,i){ta(e),ze(e=e.v,0|e[xt],t,n,i)}function ze(e,t,n,i,s){const r=n+(s?0:-1);var a=e.length-1;if(a>=1+(s?0:-1)&&r>=a){const o=e[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,t}return r<=a?(e[r]=i,t):(i!==void 0&&(n>=(a=(t??(t=0|e[xt]))>>14&1023||536870912)?i!=null&&(e[a+(s?0:-1)]={[n]:i}):e[r]=i),t)}function Fs(){return q3===void 0?2:4}function Os(e,t,n,i,s){let r=e.v,a=0|r[xt];i=Rn(e,a)?1:i,s=!!s||i===3,i===2&&Qr(e)&&(r=e.v,a=0|r[xt]);let o=(e=xu(r,t))===js?7:0|e[xt],c=yu(o,a);var l=!(4&c);if(l){4&c&&(e=ni(e),o=0,c=zs(c,a),a=ze(r,a,t,e));let h=0,u=0;for(;h<e.length;h++){const d=n(e[h]);d!=null&&(e[u++]=d)}u<h&&(e.length=u),n=-513&(4|c),c=n&=-1025,c&=-4097}return c!==o&&(We(e,c),2&c&&Object.freeze(e)),Xm(e,c,r,a,t,i,l,s)}function Xm(e,t,n,i,s,r,a,o){let c=t;return r===1||r===4&&(2&t||!(16&t)&&32&i)?ks(t)||((t|=!e.length||a&&!(4096&t)||32&i&&!(4096&t||16&t)?2:256)!==c&&We(e,t),Object.freeze(e)):(r===2&&ks(t)&&(e=ni(e),c=0,t=zs(t,i),i=ze(n,i,s,e)),ks(t)||(o||(t|=16),t!==c&&We(e,t))),2&t||!(4096&t||16&t)||$s(n,i),e}function xu(e,t,n){return e=Xi(e,t,n),Array.isArray(e)?e:js}function yu(e,t){return 2&t&&(e|=2),1|e}function ks(e){return!!(2&e)&&!!(4&e)||!!(256&e)}function qm(e){return lu(e,!0)}function Ym(e){e=ni(e);for(let t=0;t<e.length;t++){const n=e[t]=ni(e[t]);Array.isArray(n[1])&&(n[1]=qa(n[1]))}return Ba(e)}function rs(e,t,n,i){ta(e),ze(e=e.v,0|e[xt],t,(i==="0"?Number(n)===0:n===i)?void 0:n)}function ea(e,t,n){if(2&t)throw Error();const i=Kr(t);let s=xu(e,n,i),r=s===js?7:0|s[xt],a=yu(r,t);return(2&a||ks(a)||16&a)&&(a===r||ks(a)||We(s,a),s=ni(s),r=0,a=zs(a,t),ze(e,t,n,s,i)),a&=-13,a!==r&&We(s,a),s}function yl(e,t){var n=k0;return Su(Mu(e=e.v),e,void 0,n)===t?t:-1}function Mu(e){if($r)return e[_a]??(e[_a]=new Map);if(_a in e)return e[_a];const t=new Map;return Object.defineProperty(e,_a,{value:t}),t}function jm(e,t,n,i,s){const r=Mu(e),a=Su(r,e,t,n,s);return a!==i&&(a&&(t=ze(e,t,a,void 0,s)),r.set(n,i)),t}function Su(e,t,n,i,s){let r=e.get(i);if(r!=null)return r;r=0;for(let a=0;a<i.length;a++){const o=i[a];Xi(t,o,s)!=null&&(r!==0&&(n=ze(t,n,r,void 0,s)),r=o)}return e.set(i,r),r}function Eu(e,t,n){let i=0|e[xt];const s=Kr(i),r=Xi(e,n,s);let a;if(r!=null&&r[Ur]===Nr){if(!Rn(r))return Qr(r),r.v;a=r.v}else Array.isArray(r)&&(a=r);if(a){const o=0|a[xt];2&o&&(a=Jr(a,o))}return a=Bs(a,t),a!==r&&ze(e,i,n,a,s),a}function $m(e,t,n,i,s){let r=!1;if((i=Xi(e,i,s,a=>{const o=mu(a,n,!1,t);return r=o!==a&&o!=null,o}))!=null)return r&&!Rn(i)&&$s(e,t),i}function te(e,t,n,i){let s=e.v,r=0|s[xt];if((t=$m(s,r,t,n,i))==null)return t;if(r=0|s[xt],!Rn(e,r)){const a=_u(t);a!==t&&(Qr(e)&&(s=e.v,r=0|s[xt]),r=ze(s,r,n,t=a,i),$s(s,r))}return t}function Km(e,t,n,i,s,r,a,o){var c=Rn(e,n);r=c?1:r,a=!!a||r===3,c=o&&!c,(r===2||c)&&Qr(e)&&(n=0|(t=e.v)[xt]);var l=(e=xu(t,s))===js?7:0|e[xt],h=yu(l,n);if(o=!(4&h)){var u=e,d=n;const f=!!(2&h);f&&(d|=2);let g=!f,_=!0,m=0,p=0;for(;m<u.length;m++){const E=mu(u[m],i,!1,d);if(E instanceof i){if(!f){const b=Rn(E);g&&(g=!b),_&&(_=b)}u[p++]=E}}p<m&&(u.length=p),h|=4,h=_?-4097&h:4096|h,h=g?8|h:-9&h}if(h!==l&&(We(e,h),2&h&&Object.freeze(e)),c&&!(8&h||!e.length&&(r===1||r===4&&(2&h||!(16&h)&&32&n)))){for(ks(h)&&(e=ni(e),h=zs(h,n),n=ze(t,n,s,e)),i=e,c=h,l=0;l<i.length;l++)(u=i[l])!==(h=_u(u))&&(i[l]=h);c|=8,We(e,h=c=i.length?4096|c:-4097&c)}return Xm(e,h,t,n,s,r,o,a)}function qi(e,t,n){const i=e.v;return Km(e,i,0|i[xt],t,n,Fs(),!1,!0)}function Zm(e){return e==null&&(e=void 0),e}function At(e,t,n,i,s){return oe(e,n,i=Zm(i),s),i&&!Rn(i)&&$s(e.v),e}function Pa(e,t,n,i){t:{var s=i=Zm(i);ta(e);const r=e.v;let a=0|r[xt];if(s==null){const o=Mu(r);if(Su(o,r,a,n)!==t)break t;o.set(n,0)}else a=jm(r,a,n,t);ze(r,a,t,s)}i&&!Rn(i)&&$s(e.v)}function zs(e,t){return-273&(2&t?2|e:-3&e)}function bu(e,t,n,i){var s=i;ta(e),e=Km(e,i=e.v,0|i[xt],n,t,2,!0),s=s??new n,e.push(s),t=n=e===js?7:0|e[xt],(s=Rn(s))?(n&=-9,e.length===1&&(n&=-4097)):n|=4096,n!==t&&We(e,n),s||$s(i)}function Gn(e,t,n){return Zr(_e(e,t,void 0,n))}function Jm(e){return(au?_e(e,2,void 0,void 0,Qo):Qo(_e(e,2)))??xM}function Pe(e,t){return _e(e,t,void 0,void 0,pi)??0}function Yi(e,t,n){if(n!=null){if(typeof n!="number"||!mc(n))throw gh("int32");n|=0}oe(e,t,n)}function wt(e,t,n){oe(e,t,ba(n))}function Pn(e,t,n){rs(e,t,$a(n),"")}function ec(e,t,n){{ta(e);const a=e.v;let o=0|a[xt];if(n==null)ze(a,o,t);else{var i=e=n===js?7:0|n[xt],s=ks(e),r=s||Object.isFrozen(n);for(s||(e=0),r||(n=ni(n),i=0,e=zs(e,o),r=!1),e|=5,e|=(4&e?512&e?512:1024&e?1024:0:void 0)??(au?1024:0),s=0;s<n.length;s++){const c=n[s],l=Hm(c);Object.is(c,l)||(r&&(n=ni(n),i=0,e=zs(e,o),r=!1),n[s]=l)}e!==i&&(r&&(n=ni(n),e=zs(e,o)),We(n,e)),ze(a,o,t,n)}}}function vc(e,t,n){ta(e),Os(e,t,Je,2,!0).push(Hm(n))}var gr=class{constructor(e,t,n){if(this.buffer=e,n&&!t)throw Error();this.g=t}};function wu(e,t){if(typeof e=="string")return new gr(Cm(e),t);if(Array.isArray(e))return new gr(new Uint8Array(e),t);if(e.constructor===Uint8Array)return new gr(e,!1);if(e.constructor===ArrayBuffer)return e=new Uint8Array(e),new gr(e,!1);if(e.constructor===mi)return t=cu(e)||new Uint8Array(0),new gr(t,!0,e);if(e instanceof Uint8Array)return e=e.constructor===Uint8Array?e:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new gr(e,!1);throw Error()}function Br(e,t){let n,i=0,s=0,r=0;const a=e.h;let o=e.g;do n=a[o++],i|=(127&n)<<r,r+=7;while(r<32&&128&n);if(r>32)for(s|=(127&n)>>4,r=3;r<32&&128&n;r+=7)n=a[o++],s|=(127&n)<<r;if(Vs(e,o),!(128&n))return t(i>>>0,s>>>0);throw Error()}function Tu(e){let t=0,n=e.g;const i=n+10,s=e.h;for(;n<i;){const r=s[n++];if(t|=r,(128&r)==0)return Vs(e,n),!!(127&t)}throw Error()}function ps(e){const t=e.h;let n=e.g,i=t[n++],s=127&i;if(128&i&&(i=t[n++],s|=(127&i)<<7,128&i&&(i=t[n++],s|=(127&i)<<14,128&i&&(i=t[n++],s|=(127&i)<<21,128&i&&(i=t[n++],s|=i<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw Error();return Vs(e,n),s}function ji(e){return ps(e)>>>0}function nc(e){var t=e.h;const n=e.g;var i=t[n],s=t[n+1];const r=t[n+2];return t=t[n+3],Vs(e,e.g+4),e=2*((s=(i<<0|s<<8|r<<16|t<<24)>>>0)>>31)+1,i=s>>>23&255,s&=8388607,i==255?s?NaN:e*(1/0):i==0?1401298464324817e-60*e*s:e*Math.pow(2,i-150)*(s+8388608)}function yM(e){return ps(e)}function Vs(e,t){if(e.g=t,t>e.l)throw Error()}function Qm(e,t){if(t<0)throw Error();const n=e.g;if((t=n+t)>e.l)throw Error();return e.g=t,n}function t0(e,t){if(t==0)return Xs();var n=Qm(e,t);return e.Y&&e.j?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array(0):Q3?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?Xs():new mi(n,Ir)}var Gf=[];function e0(e,t,n,i){if(ic.length){const s=ic.pop();return s.o(i),s.g.init(e,t,n,i),s}return new MM(e,t,n,i)}function n0(e){e.g.clear(),e.l=-1,e.h=-1,ic.length<100&&ic.push(e)}function i0(e){var t=e.g;if(t.g==t.l)return!1;e.m=e.g.g;var n=ji(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5)||t<1)throw Error();return e.l=t,e.h=n,!0}function Ho(e){switch(e.h){case 0:e.h!=0?Ho(e):Tu(e.g);break;case 1:Vs(e=e.g,e.g+8);break;case 2:if(e.h!=2)Ho(e);else{var t=ji(e.g);Vs(e=e.g,e.g+t)}break;case 5:Vs(e=e.g,e.g+4);break;case 3:for(t=e.l;;){if(!i0(e))throw Error();if(e.h==4){if(e.l!=t)throw Error();break}Ho(e)}break;default:throw Error()}}function Ka(e,t,n){const i=e.g.l;var s=ji(e.g);let r=(s=e.g.g+s)-i;if(r<=0&&(e.g.l=s,n(t,e,void 0,void 0,void 0),r=s-e.g.g),r)throw Error();return e.g.g=s,e.g.l=i,t}function Au(e){var t=ji(e.g),n=Qm(e=e.g,t);if(e=e.h,I3){var i,s=e;(i=_l)||(i=_l=new TextDecoder("utf-8",{fatal:!0})),t=n+t,s=n===0&&t===s.length?s:s.subarray(n,t);try{var r=i.decode(s)}catch(o){if(Lo===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Lo=!0}catch{Lo=!1}}throw!Lo&&(_l=void 0),o}}else{t=(r=n)+t,n=[];let o,c=null;for(;r<t;){var a=e[r++];a<128?n.push(a):a<224?r>=t?As():(o=e[r++],a<194||(192&o)!=128?(r--,As()):n.push((31&a)<<6|63&o)):a<240?r>=t-1?As():(o=e[r++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=e[r++]))!=128?(r--,As()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?r>=t-2?As():(o=e[r++],(192&o)!=128||o-144+(a<<28)>>30||(192&(i=e[r++]))!=128||(192&(s=e[r++]))!=128?(r--,As()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&s,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):As(),n.length>=8192&&(c=Tf(c,n),n.length=0)}r=Tf(c,n)}return r}function s0(e){const t=ji(e.g);return t0(e.g,t)}function xc(e,t,n){var i=ji(e.g);for(i=e.g.g+i;e.g.g<i;)n.push(t(e.g))}var MM=class{constructor(e,t,n,i){if(Gf.length){const s=Gf.pop();s.init(e,t,n,i),e=s}else e=new class{constructor(s,r,a,o){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(s,r,a,o)}init(s,r,a,{Y:o=!1,ea:c=!1}={}){this.Y=o,this.ea=c,s&&(s=wu(s,this.ea),this.h=s.buffer,this.j=s.g,this.m=r||0,this.l=a!==void 0?this.m+a:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(e,t,n,i);this.g=e,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:e=!1}={}){this.ha=e}},ic=[];function Wf(e){return e?/^\d+$/.test(e)?(pc(e),new Mh(ye,Ne)):null:SM||(SM=new Mh(0,0))}var Mh=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let SM;function Xf(e){return e?/^-?\d+$/.test(e)?(pc(e),new Sh(ye,Ne)):null:EM||(EM=new Sh(0,0))}var Sh=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let EM;function Er(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function na(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function yc(e,t){if(t>=0)na(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function Cu(e){var t=ye;e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function kr(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function Wn(e,t,n){na(e.g,8*t+n)}function Ru(e,t){return Wn(e,t,2),t=e.g.end(),kr(e,t),t.push(e.h),t}function Pu(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function Mc(e,t,n){Wn(e,t,2),na(e.g,n.length),kr(e,e.g.end()),kr(e,n)}function sc(e,t,n,i){n!=null&&(t=Ru(e,t),i(n,e),Pu(e,t))}function vi(){const e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var Lu=vi(),r0=vi(),Iu=vi(),Du=vi(),a0=vi(),o0=vi(),bM=vi(),Sc=vi(),c0=vi(),l0=vi();function xi(e,t,n){var i=e.v;An&&An in i&&(i=i[An])&&delete i[t.g],t.h?t.j(e,t.h,t.g,n,t.l):t.j(e,t.g,n,t.l)}var yt=class{constructor(e,t){this.v=Wm(e,t,void 0,2048)}toJSON(){return Gm(this)}j(){var s;var e=aS,t=this.v,n=e.g,i=An;if($r&&i&&((s=t[i])==null?void 0:s[n])!=null&&Dr(G3,3),t=e.g,If&&An&&If===void 0&&(i=(n=this.v)[An])&&(i=i.da))try{i(n,t,fM)}catch(r){bm(r)}return e.h?e.m(this,e.h,e.g,e.l):e.m(this,e.g,e.defaultValue,e.l)}clone(){const e=this.v,t=0|e[xt];return vu(this,e,t)?gu(this,e,!0):new this.constructor(Jr(e,t,!1))}};yt.prototype[Ur]=Nr,yt.prototype.toString=function(){return this.v.toString()};var ia=class{constructor(e,t,n){this.g=e,this.h=t,e=Lu,this.l=!!e&&n===e||!1}};function Ec(e,t){return new ia(e,t,Lu)}function h0(e,t,n,i,s){sc(e,n,p0(t,i),s)}const wM=Ec(function(e,t,n,i,s){return e.h===2&&(Ka(e,Eu(t,i,n),s),!0)},h0),TM=Ec(function(e,t,n,i,s){return e.h===2&&(Ka(e,Eu(t,i,n),s),!0)},h0);var bc=Symbol(),wc=Symbol(),Eh=Symbol(),qf=Symbol(),Yf=Symbol();let u0,d0;function Ks(e,t,n,i){var s=i[e];if(s)return s;(s={}).qa=i,s.T=function(u){switch(typeof u){case"boolean":return gM||(gM=[0,void 0,!0]);case"number":return u>0?void 0:u===0?_M||(_M=[0,void 0]):[-u,void 0];case"string":return[0,u];case"object":return u}}(i[0]);var r=i[1];let a=1;r&&r.constructor===Object&&(s.ba=r,typeof(r=i[++a])=="function"&&(s.ma=!0,u0??(u0=r),d0??(d0=i[a+1]),r=i[a+=2]));const o={};for(;r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var c=0;c<r.length;c++)o[r[c]]=r;r=i[++a]}for(c=1;r!==void 0;){let u;typeof r=="number"&&(c+=r,r=i[++a]);var l=void 0;if(r instanceof ia?u=r:(u=wM,a--),u==null?void 0:u.l){r=i[++a],l=i;var h=a;typeof r=="function"&&(r=r(),l[h]=r),l=r}for(h=c+1,typeof(r=i[++a])=="number"&&r<0&&(h-=r,r=i[++a]);c<h;c++){const d=o[c];l?n(s,c,u,l,d):t(s,c,u,d)}}return i[e]=s}function f0(e){return Array.isArray(e)?e[0]instanceof ia?e:[TM,e]:[e,void 0]}function p0(e,t){return e instanceof yt?e.v:Array.isArray(e)?Bs(e,t):void 0}function Uu(e,t,n,i){const s=n.g;e[t]=i?(r,a,o)=>s(r,a,o,i):s}function Nu(e,t,n,i,s){const r=n.g;let a,o;e[t]=(c,l,h)=>r(c,l,h,o||(o=Ks(wc,Uu,Nu,i).T),a||(a=Fu(i)),s)}function Fu(e){let t=e[Eh];if(t!=null)return t;const n=Ks(wc,Uu,Nu,e);return t=n.ma?(i,s)=>u0(i,s,n):(i,s)=>{for(;i0(s)&&s.h!=4;){var r=s.l,a=n[r];if(a==null){var o=n.ba;o&&(o=o[r])&&(o=CM(o))!=null&&(a=n[r]=o)}if(a==null||!a(s,i,r)){if(a=(o=s).m,Ho(o),o.ha)var c=void 0;else c=o.g.g-a,o.g.g=a,c=t0(o.g,c);a=void 0,o=i,c&&((a=o[An]??(o[An]=new yh))[r]??(a[r]=[])).push(c)}}return(i=gc(i))&&(i.da=n.qa[Yf]),!0},e[Eh]=t,e[Yf]=AM.bind(e),t}function AM(e,t,n,i){var s=this[wc];const r=this[Eh],a=Bs(void 0,s.T),o=gc(e);if(o){var c=!1,l=s.ba;if(l){if(s=(h,u,d)=>{if(d.length!==0)if(l[u])for(const f of d){h=e0(f);try{c=!0,r(a,h)}finally{n0(h)}}else i==null||i(e,u,d)},t==null)tc(o,s);else if(o!=null){const h=o[t];h&&s(o,t,h)}if(c){let h=0|e[xt];if(2&h&&2048&h&&!(n!=null&&n.Ka))throw Error();const u=Kr(h),d=(f,g)=>{if(Xi(e,f,u)!=null){if((n==null?void 0:n.Qa)===1)return;throw Error()}g!=null&&(h=ze(e,h,f,g,u)),delete o[f]};t==null?Dm(a,0|a[xt],(f,g)=>{d(f,g)}):d(t,Xi(a,t,u))}}}}function CM(e){const t=(e=f0(e))[0].g;if(e=e[1]){const n=Fu(e),i=Ks(wc,Uu,Nu,e).T;return(s,r,a)=>t(s,r,a,i,n)}return t}function Tc(e,t,n){e[t]=n.h}function Ac(e,t,n,i){let s,r;const a=n.h;e[t]=(o,c,l)=>a(o,c,l,r||(r=Ks(bc,Tc,Ac,i).T),s||(s=m0(i)))}function m0(e){let t=e[qf];if(!t){const n=Ks(bc,Tc,Ac,e);t=(i,s)=>g0(i,s,n),e[qf]=t}return t}function g0(e,t,n){Dm(e,0|e[xt],(i,s)=>{if(s!=null){var r=function(a,o){var c=a[o];if(c)return c;if((c=a.ba)&&(c=c[o])){var l=(c=f0(c))[0].h;if(c=c[1]){const h=m0(c),u=Ks(bc,Tc,Ac,c).T;c=a.ma?d0(u,h):(d,f,g)=>l(d,f,g,u,h)}else c=l;return a[o]=c}}(n,i);r?r(t,s,i):i<500||Dr(_h,3)}}),(e=gc(e))&&tc(e,(i,s,r)=>{for(kr(t,t.g.end()),i=0;i<r.length;i++)kr(t,cu(r[i])||new Uint8Array(0))})}const RM=Cn(0);function sa(e,t){if(Array.isArray(t)){var n=0|t[xt];if(4&n)return t;for(var i=0,s=0;i<t.length;i++){const r=e(t[i]);r!=null&&(t[s++]=r)}return s<i&&(t.length=s),(e=-1537&(5|n))!==n&&We(t,e),2&e&&Object.freeze(t),t}}function hn(e,t,n){return new ia(e,t,n)}function ra(e,t,n){return new ia(e,t,n)}function Ke(e,t,n){ze(e,0|e[xt],t,n,Kr(0|e[xt]))}var PM=Ec(function(e,t,n,i,s){if(e.h!==2)return!1;if(e=ni(e=Ka(e,Bs([void 0,void 0],i),s)),s=Kr(i=0|t[xt]),2&i)throw Error();let r=Xi(t,n,s);if(r instanceof Wi)2&r.J?(r=r.V(),r.push(e),ze(t,i,n,r,s)):r.Ma(e);else if(Array.isArray(r)){var a=0|r[xt];8192&a||We(r,a|=8192),2&a&&(r=Ym(r),ze(t,i,n,r,s)),r.push(e)}else ze(t,i,n,Ba([e]),s);return!0},function(e,t,n,i,s){if(t instanceof Wi)t.forEach((r,a)=>{sc(e,n,Bs([a,r],i),s)});else if(Array.isArray(t)){for(let r=0;r<t.length;r++){const a=t[r];Array.isArray(a)&&sc(e,n,Bs(a,i),s)}Ba(t)}});function _0(e,t,n){(t=pi(t))!=null&&(Wn(e,n,5),e=e.g,hu(t),Cu(e))}function v0(e,t,n){if(t=function(i){if(i==null)return i;const s=typeof i;if(s==="bigint")return String(Ya(64,i));if(ja(i)){if(s==="string")return km(i);if(s==="number")return pu(i)}}(t),t!=null&&(typeof t=="string"&&Xf(t),t!=null))switch(Wn(e,n,0),typeof t){case"number":e=e.g,Fr(t),Er(e,ye,Ne);break;case"bigint":n=BigInt.asUintN(64,t),n=new Sh(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Er(e.g,n.h,n.g);break;default:n=Xf(t),Er(e.g,n.h,n.g)}}function x0(e,t,n){(t=Zr(t))!=null&&t!=null&&(Wn(e,n,0),yc(e.g,t))}function y0(e,t,n){(t=Fm(t))!=null&&(Wn(e,n,0),e.g.g.push(t?1:0))}function M0(e,t,n){(t=Je(t))!=null&&Mc(e,n,Em(t))}function S0(e,t,n,i,s){sc(e,n,p0(t,i),s)}function E0(e,t,n){(t=t==null||typeof t=="string"||t instanceof mi?t:void 0)!=null&&Mc(e,n,wu(t,!0).buffer)}function b0(e,t,n){return(e.h===5||e.h===2)&&(t=ea(t,0|t[xt],n),e.h==2?xc(e,nc,t):t.push(nc(e.g)),!0)}var Fe=hn(function(e,t,n){return e.h===5&&(Ke(t,n,nc(e.g)),!0)},_0,Sc),LM=ra(b0,function(e,t,n){if((t=sa(pi,t))!=null)for(let a=0;a<t.length;a++){var i=e,s=n,r=t[a];r!=null&&(Wn(i,s,5),i=i.g,hu(r),Cu(i))}},Sc),Ou=ra(b0,function(e,t,n){if((t=sa(pi,t))!=null&&t.length){Wn(e,n,2),na(e.g,4*t.length);for(let i=0;i<t.length;i++)n=e.g,hu(t[i]),Cu(n)}},Sc),IM=hn(function(e,t,n){return e.h===5&&(Ke(t,n,(e=nc(e.g))===0?void 0:e),!0)},_0,Sc),ms=hn(function(e,t,n){return ru?(e.h!==0?e=!1:(Ke(t,n,Br(e.g,Nm)),e=!0),e):e.h===0&&(Ke(t,n,Br(e.g,uu)),!0)},v0,o0),Ml=hn(function(e,t,n){return ru?(e.h!==0?t=!1:(Ke(t,n,(e=Br(e.g,Nm))===RM?void 0:e),t=!0),t):e.h===0&&(Ke(t,n,(e=Br(e.g,uu))===0?void 0:e),!0)},v0,o0),DM=hn(function(e,t,n){return ru?(e.h!==0?e=!1:(Ke(t,n,Br(e.g,eM)),e=!0),e):e.h===0&&(Ke(t,n,Br(e.g,xh)),!0)},function(e,t,n){if(t=function(i){if(i==null)return i;var s=typeof i;if(s==="bigint")return String(nM(64,i));if(ja(i)){if(s==="string")return s=Or(Number(i)),Ys(s)&&s>=0?i=String(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),(s=i[0]!=="-"&&((s=i.length)<20||s===20&&i<="18446744073709551615"))||(pc(i),i=ka(ye,Ne))),i;if(s==="number")return(i=Or(i))>=0&&Ys(i)||(Fr(i),i=xh(ye,Ne)),i}}(t),t!=null&&(typeof t=="string"&&Wf(t),t!=null))switch(Wn(e,n,0),typeof t){case"number":e=e.g,Fr(t),Er(e,ye,Ne);break;case"bigint":n=BigInt.asUintN(64,t),n=new Mh(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Er(e.g,n.h,n.g);break;default:n=Wf(t),Er(e.g,n.h,n.g)}},bM),$e=hn(function(e,t,n){return e.h===0&&(Ke(t,n,ps(e.g)),!0)},x0,Du),Za=ra(function(e,t,n){return(e.h===0||e.h===2)&&(t=ea(t,0|t[xt],n),e.h==2?xc(e,ps,t):t.push(ps(e.g)),!0)},function(e,t,n){if((t=sa(Zr,t))!=null&&t.length){n=Ru(e,n);for(let i=0;i<t.length;i++)yc(e.g,t[i]);Pu(e,n)}},Du),xr=hn(function(e,t,n){return e.h===0&&(Ke(t,n,(e=ps(e.g))===0?void 0:e),!0)},x0,Du),Le=hn(function(e,t,n){return e.h===0&&(Ke(t,n,Tu(e.g)),!0)},y0,r0),Hs=hn(function(e,t,n){return e.h===0&&(Ke(t,n,(e=Tu(e.g))===!1?void 0:e),!0)},y0,r0),nn=ra(function(e,t,n){return e.h===2&&(e=Au(e),ea(t,0|t[xt],n).push(e),!0)},function(e,t,n){if((t=sa(Je,t))!=null)for(let a=0;a<t.length;a++){var i=e,s=n,r=t[a];r!=null&&Mc(i,s,Em(r))}},Iu),as=hn(function(e,t,n){return e.h===2&&(Ke(t,n,(e=Au(e))===""?void 0:e),!0)},M0,Iu),ue=hn(function(e,t,n){return e.h===2&&(Ke(t,n,Au(e)),!0)},M0,Iu),Ye=function(e,t,n=Lu){return new ia(e,t,n)}(function(e,t,n,i,s){return e.h===2&&(i=Bs(void 0,i),ea(t,0|t[xt],n).push(i),Ka(e,i,s),!0)},function(e,t,n,i,s){if(Array.isArray(t)){for(let r=0;r<t.length;r++)S0(e,t[r],n,i,s);1&(e=0|t[xt])||We(t,1|e)}}),Re=Ec(function(e,t,n,i,s,r){if(e.h!==2)return!1;let a=0|t[xt];return jm(t,a,r,n,Kr(a)),Ka(e,t=Eu(t,i,n),s),!0},S0),w0=hn(function(e,t,n){return e.h===2&&(Ke(t,n,s0(e)),!0)},E0,c0),UM=ra(function(e,t,n){return(e.h===0||e.h===2)&&(t=ea(t,0|t[xt],n),e.h==2?xc(e,ji,t):t.push(ji(e.g)),!0)},function(e,t,n){if((t=sa(Om,t))!=null)for(let a=0;a<t.length;a++){var i=e,s=n,r=t[a];r!=null&&(Wn(i,s,0),na(i.g,r))}},a0),NM=hn(function(e,t,n){return e.h===0&&(Ke(t,n,(e=ji(e.g))===0?void 0:e),!0)},function(e,t,n){(t=Om(t))!=null&&t!=null&&(Wn(e,n,0),na(e.g,t))},a0),Ln=hn(function(e,t,n){return e.h===0&&(Ke(t,n,ps(e.g)),!0)},function(e,t,n){(t=Zr(t))!=null&&(t=parseInt(t,10),Wn(e,n,0),yc(e.g,t))},l0);class FM{constructor(t,n){var i=Dn;this.g=t,this.h=n,this.m=te,this.j=At,this.defaultValue=void 0,this.l=i.Oa!=null?Um:void 0}register(){uc(this)}}function yi(e,t){return new FM(e,t)}function _s(e,t){return(n,i)=>{{const r={ea:!0};i&&Object.assign(r,i),n=e0(n,void 0,void 0,r);try{const a=new e,o=a.v;Fu(t)(o,n);var s=a}finally{n0(n)}}return s}}function Cc(e){return function(){const t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};g0(this.v,t,Ks(bc,Tc,Ac,e)),kr(t,t.g.end());const n=new Uint8Array(t.h),i=t.l,s=i.length;let r=0;for(let a=0;a<s;a++){const o=i[a];n.set(o,r),r+=o.length}return t.l=[n],n}}var jf=class extends yt{constructor(e){super(e)}},$f=[0,as,hn(function(e,t,n){return e.h===2&&(Ke(t,n,(e=s0(e))===Xs()?void 0:e),!0)},function(e,t,n){if(t!=null){if(t instanceof yt){const i=t.Ra;return void(i?(t=i(t),t!=null&&Mc(e,n,wu(t,!0).buffer)):Dr(_h,3))}if(Array.isArray(t))return void Dr(_h,3)}E0(e,t,n)},c0)];let Sl,Kf=globalThis.trustedTypes;function Zf(e){var t;return Sl===void 0&&(Sl=function(){let n=null;if(!Kf)return n;try{const i=s=>s;n=Kf.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n}()),e=(t=Sl)?t.createScriptURL(e):e,new class{constructor(n){this.g=n}toString(){return this.g+""}}(e)}function OM(e,...t){if(t.length===0)return Zf(e[0]);let n=e[0];for(let i=0;i<t.length;i++)n+=encodeURIComponent(t[i])+e[i+1];return Zf(n)}var T0=[0,$e,Ln,Le,-1,Za,Ln,-1,Le],BM=class extends yt{constructor(e){super(e)}},A0=[0,Le,ue,Le,Ln,-1,ra(function(e,t,n){return(e.h===0||e.h===2)&&(t=ea(t,0|t[xt],n),e.h==2?xc(e,yM,t):t.push(ps(e.g)),!0)},function(e,t,n){if((t=sa(Zr,t))!=null&&t.length){n=Ru(e,n);for(let i=0;i<t.length;i++)yc(e.g,t[i]);Pu(e,n)}},l0),ue,-1,[0,Le,-1],Ln,Le,-1],C0=[0,3,Le,-1,2,[0,$e],[0,Ln,Le],[0,ue,-1],[0]],R0=[0,ue,-2],Jf=class extends yt{constructor(e){super(e)}},P0=[0],L0=[0,$e,Le,1,Le,-4],Dn=class extends yt{constructor(e){super(e,2)}},Ve={};Ve[336783863]=[0,ue,Le,-1,$e,[0,[1,2,3,4,5,6,7,8,9],Re,P0,Re,A0,Re,R0,Re,L0,Re,T0,Re,[0,ue,-2],Re,[0,ue,Ln],Re,C0,Re,[0,Ln,-1,Le]],[0,ue],Le,[0,[1,3],[2,4],Re,[0,Za],-1,Re,[0,nn],-1,Ye,[0,ue,-1]],ue];var Qf=[0,Ml,-1,Hs,-3,Ml,Za,as,xr,Ml,-1,Hs,xr,Hs,-2,as];function ve(e,t){vc(e,3,t)}function jt(e,t){vc(e,4,t)}var vn=class extends yt{constructor(e){super(e,500)}o(e){return At(this,0,7,e)}},La=[-1,{}],tp=[0,ue,1,La],ep=[0,ue,nn,La];function Xn(e,t){bu(e,1,vn,t)}function Ee(e,t){vc(e,10,t)}function ee(e,t){vc(e,15,t)}var Un=class extends yt{constructor(e){super(e,500)}o(e){return At(this,0,1001,e)}},I0=[-500,Ye,[-500,as,-1,nn,-3,[-2,Ve,Le],Ye,$f,xr,-1,tp,ep,Ye,[0,as,Hs],as,Qf,xr,nn,987,nn],4,Ye,[-500,ue,-1,[-1,{}],998,ue],Ye,[-500,ue,nn,-1,[-2,{},Le],997,nn,-1],xr,Ye,[-500,ue,nn,La,998,nn],nn,xr,tp,ep,Ye,[0,as,-1,La],nn,-2,Qf,as,-1,Hs,[0,Hs,NM],978,La,Ye,$f];Un.prototype.g=Cc(I0);var kM=_s(Un,I0),zM=class extends yt{constructor(e){super(e)}},D0=class extends yt{constructor(e){super(e)}g(){return qi(this,zM,1)}},U0=[0,Ye,[0,$e,Fe,ue,-1]],Rc=_s(D0,U0),VM=class extends yt{constructor(e){super(e)}},HM=class extends yt{constructor(e){super(e)}},El=class extends yt{constructor(e){super(e)}l(){return te(this,VM,2)}g(){return qi(this,HM,5)}},N0=_s(class extends yt{constructor(e){super(e)}},[0,nn,Za,Ou,[0,Ln,[0,$e,-3],[0,Fe,-3],[0,$e,-1,[0,Ye,[0,$e,-2]]],Ye,[0,Fe,-1,ue,Fe]],ue,-1,ms,Ye,[0,$e,Fe],nn,ms]),F0=class extends yt{constructor(e){super(e)}},br=_s(class extends yt{constructor(e){super(e)}},[0,Ye,[0,Fe,-4]]),O0=class extends yt{constructor(e){super(e)}},Ja=_s(class extends yt{constructor(e){super(e)}},[0,Ye,[0,Fe,-4]]),GM=class extends yt{constructor(e){super(e)}},WM=[0,$e,-1,Ou,Ln],B0=class extends yt{constructor(e){super(e)}};B0.prototype.g=Cc([0,Fe,-4,ms]);var XM=class extends yt{constructor(e){super(e)}},qM=_s(class extends yt{constructor(e){super(e)}},[0,Ye,[0,1,$e,ue,U0],ms]),np=class extends yt{constructor(e){super(e)}},YM=class extends yt{constructor(e){super(e)}na(){const e=_e(this,1,void 0,void 0,qm);return e??Xs()}},jM=class extends yt{constructor(e){super(e)}},k0=[1,2],$M=_s(class extends yt{constructor(e){super(e)}},[0,Ye,[0,k0,Re,[0,Ou],Re,[0,w0],$e,ue],ms]),Bu=class extends yt{constructor(e){super(e)}},z0=[0,ue,$e,Fe,nn,-1],ip=class extends yt{constructor(e){super(e)}},KM=[0,Le,-1],sp=class extends yt{constructor(e){super(e)}},Go=[1,2,3,4,5,6],rc=class extends yt{constructor(e){super(e)}g(){return _e(this,1,void 0,void 0,qm)!=null}l(){return Je(_e(this,2))!=null}},Ae=class extends yt{constructor(e){super(e)}g(){return Fm(_e(this,2))??!1}},V0=[0,w0,ue,[0,$e,ms,-1],[0,DM,ms]],Oe=[0,V0,Le,[0,Go,Re,L0,Re,A0,Re,T0,Re,P0,Re,R0,Re,C0],Ln],Pc=class extends yt{constructor(e){super(e)}},ku=[0,Oe,Fe,-1,$e],ZM=yi(502141897,Pc);Ve[502141897]=ku;var JM=_s(class extends yt{constructor(e){super(e)}},[0,[0,Ln,-1,LM,UM],WM]),H0=class extends yt{constructor(e){super(e)}},G0=class extends yt{constructor(e){super(e)}},bh=[0,Oe,Fe,[0,Oe],Le],QM=yi(508968150,G0);Ve[508968150]=[0,Oe,ku,bh,Fe,[0,[0,V0]]],Ve[508968149]=bh;var _r=class extends yt{constructor(e){super(e)}l(){return te(this,Bu,2)}g(){oe(this,2)}},W0=[0,Oe,z0];Ve[478825465]=W0;var tS=class extends yt{constructor(e){super(e)}},X0=class extends yt{constructor(e){super(e)}},zu=class extends yt{constructor(e){super(e)}},Vu=class extends yt{constructor(e){super(e)}},q0=class extends yt{constructor(e){super(e)}},rp=[0,Oe,[0,Oe],W0,-1],Y0=[0,Oe,Fe,$e],Hu=[0,Oe,Fe],j0=[0,Oe,Y0,Hu,Fe],eS=yi(479097054,q0);Ve[479097054]=[0,Oe,j0,rp],Ve[463370452]=rp,Ve[464864288]=Y0;var nS=yi(462713202,Vu);Ve[462713202]=j0,Ve[474472470]=Hu;var iS=class extends yt{constructor(e){super(e)}},$0=class extends yt{constructor(e){super(e)}},K0=class extends yt{constructor(e){super(e)}},Z0=class extends yt{constructor(e){super(e)}},Gu=[0,Oe,Fe,-1,$e],wh=[0,Oe,Fe,Le];Z0.prototype.g=Cc([0,Oe,Hu,[0,Oe],ku,bh,Gu,wh]);var J0=class extends yt{constructor(e){super(e)}},sS=yi(456383383,J0);Ve[456383383]=[0,Oe,z0];var Q0=class extends yt{constructor(e){super(e)}},rS=yi(476348187,Q0);Ve[476348187]=[0,Oe,KM];var tg=class extends yt{constructor(e){super(e)}},ap=class extends yt{constructor(e){super(e)}},eg=[0,Ln,-1],aS=yi(458105876,class extends yt{constructor(e){super(e)}g(){let e;var t=this.v;const n=0|t[xt];return e=Rn(this,n),t=function(i,s,r,a){var o=ap;!a&&Qr(i)&&(r=0|(s=i.v)[xt]);var c=Xi(s,2);if(i=!1,c==null){if(a)return zf();c=[]}else if(c.constructor===Wi){if(!(2&c.J)||a)return c;c=c.V()}else Array.isArray(c)?i=!!(2&(0|c[xt])):c=[];if(a){if(!c.length)return zf();i||(i=!0,qa(c))}else i&&(i=!1,Ba(c),c=Ym(c));return!i&&32&r&&Xa(c,32),r=ze(s,r,2,a=new Wi(c,o,aM,void 0)),i||$s(s,r),a}(this,t,n,e),!e&&ap&&(t.ra=!0),t}});Ve[458105876]=[0,eg,PM,[!0,ms,[0,ue,-1,nn]],[0,Za,Le,Ln]];var Wu=class extends yt{constructor(e){super(e)}},ng=yi(458105758,Wu);Ve[458105758]=[0,Oe,ue,eg];var bl=class extends yt{constructor(e){super(e)}},op=[0,IM,-1,Hs],oS=class extends yt{constructor(e){super(e)}},ig=class extends yt{constructor(e){super(e)}},Th=[1,2];ig.prototype.g=Cc([0,Th,Re,op,Re,[0,Ye,op]]);var sg=class extends yt{constructor(e){super(e)}},cS=yi(443442058,sg);Ve[443442058]=[0,Oe,ue,$e,Fe,nn,-1,Le,Fe],Ve[514774813]=Gu;var rg=class extends yt{constructor(e){super(e)}},lS=yi(516587230,rg);function Ah(e,t){return t=t?t.clone():new Bu,e.displayNamesLocale!==void 0?oe(t,1,$a(e.displayNamesLocale)):e.displayNamesLocale===void 0&&oe(t,1),e.maxResults!==void 0?Yi(t,2,e.maxResults):"maxResults"in e&&oe(t,2),e.scoreThreshold!==void 0?wt(t,3,e.scoreThreshold):"scoreThreshold"in e&&oe(t,3),e.categoryAllowlist!==void 0?ec(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&oe(t,4),e.categoryDenylist!==void 0?ec(t,5,e.categoryDenylist):"categoryDenylist"in e&&oe(t,5),t}function ag(e){const t=Number(e);return Number.isSafeInteger(t)?t:String(e)}function Xu(e,t=-1,n=""){return{categories:e.map(i=>({index:Gn(i,1)??0??-1,score:Pe(i,2)??0,categoryName:Je(_e(i,3))??""??"",displayName:Je(_e(i,4))??""??""})),headIndex:t,headName:n}}function hS(e){const t={classifications:qi(e,XM,1).map(n=>{var i;return Xu(((i=te(n,D0,4))==null?void 0:i.g())??[],Gn(n,2)??0,Je(_e(n,3))??"")})};return function(n){return rM(au?_e(n,2,void 0,void 0,Qo):_e(n,2))}(e)!=null&&(t.timestampMs=ag(Jm(e))),t}function og(e){var a,o;var t=Os(e,3,pi,Fs()),n=Os(e,2,Zr,Fs()),i=Os(e,1,Je,Fs()),s=Os(e,9,Je,Fs());const r={categories:[],keypoints:[]};for(let c=0;c<t.length;c++)r.categories.push({score:t[c],index:n[c]??-1,categoryName:i[c]??"",displayName:s[c]??""});if((t=(a=te(e,El,4))==null?void 0:a.l())&&(r.boundingBox={originX:Gn(t,1,is)??0,originY:Gn(t,2,is)??0,width:Gn(t,3,is)??0,height:Gn(t,4,is)??0,angle:0}),(o=te(e,El,4))==null?void 0:o.g().length)for(const c of te(e,El,4).g())r.keypoints.push({x:_e(c,1,void 0,is,pi)??0,y:_e(c,2,void 0,is,pi)??0,score:_e(c,4,void 0,is,pi)??0,label:Je(_e(c,3,void 0,is))??""});return r}function Lc(e){const t=[];for(const n of qi(e,O0,1))t.push({x:Pe(n,1)??0,y:Pe(n,2)??0,z:Pe(n,3)??0,visibility:Pe(n,4)??0});return t}function Ia(e){const t=[];for(const n of qi(e,F0,1))t.push({x:Pe(n,1)??0,y:Pe(n,2)??0,z:Pe(n,3)??0,visibility:Pe(n,4)??0});return t}function cp(e){return Array.from(e,t=>t>127?t-256:t)}function lp(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,i=0,s=0;for(let r=0;r<e.length;r++)n+=e[r]*t[r],i+=e[r]*e[r],s+=t[r]*t[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}let Io;Ve[516587230]=[0,Oe,Gu,wh,Fe],Ve[518928384]=wh;const uS=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function cg(){if(Io===void 0)try{await WebAssembly.instantiate(uS),Io=!0}catch{Io=!1}return Io}async function va(e,t=OM``){const n=await cg()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${t}/${e}_${n}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var Rs=class{};function lg(){var e=navigator;return typeof OffscreenCanvas<"u"&&(!function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")}(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function hp(e){if(typeof importScripts!="function"){const t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise((n,i)=>{t.addEventListener("load",()=>{n()},!1),t.addEventListener("error",s=>{i(s)},!1),document.body.appendChild(t)})}try{importScripts(e.toString())}catch(t){if(!(t instanceof TypeError))throw t;await self.import(e.toString())}}function hg(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function St(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function up(e,t,n){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,s]=hg(t);return!e.l||i===e.i.canvas.width&&s===e.i.canvas.height||(e.i.canvas.width=i,e.i.canvas.height=s),[i,s]}function dp(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(t.length);for(let s=0;s<t.length;s++)i[s]=e.i.stringToNewUTF8(t[s]);t=e.i._malloc(4*i.length),e.i.HEAPU32.set(i,t>>2),n(t);for(const s of i)e.i._free(s);e.i._free(t)}function ci(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function ss(e,t,n){let i=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(s,r,a)=>{r?(n(i,a),i=[]):i.push(s)}}Rs.forVisionTasks=function(e){return va("vision",e)},Rs.forTextTasks=function(e){return va("text",e)},Rs.forGenAiExperimentalTasks=function(e){return va("genai_experimental",e)},Rs.forGenAiTasks=function(e){return va("genai",e)},Rs.forAudioTasks=function(e){return va("audio",e)},Rs.isSimdSupported=function(){return cg()};async function dS(e,t,n,i){return e=await(async(s,r,a,o,c)=>{if(r&&await hp(r),!self.ModuleFactory||a&&(await hp(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((r=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new s(c,o)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),await e.o(i),e}function wl(e,t){const n=te(e.baseOptions,rc,1)||new rc;typeof t=="string"?(oe(n,2,$a(t)),oe(n,1)):t instanceof Uint8Array&&(oe(n,1,lu(t,!1)),oe(n,2)),At(e.baseOptions,0,1,n)}function fp(e){try{const t=e.H.length;if(t===1)throw Error(e.H[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.H.map(n=>n.message).join(", "))}finally{e.H=[]}}function ft(e,t){e.C=Math.max(e.C,t)}function Ic(e,t){e.B=new vn,Pn(e.B,2,"PassThroughCalculator"),ve(e.B,"free_memory"),jt(e.B,"free_memory_unused_out"),Ee(t,"free_memory"),Xn(t,e.B)}function zr(e,t){ve(e.B,t),jt(e.B,t+"_unused_out")}function Dc(e){e.g.addBoolToStream(!0,"free_memory",e.C)}var Ch=class{constructor(e){this.g=e,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){var n,i,s,r,a,o;if(t){const c=e.baseOptions||{};if((n=e.baseOptions)!=null&&n.modelAssetBuffer&&((i=e.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((s=te(this.baseOptions,rc,1))!=null&&s.g()||(r=te(this.baseOptions,rc,1))!=null&&r.l()||(a=e.baseOptions)!=null&&a.modelAssetBuffer||(o=e.baseOptions)!=null&&o.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(l,h){let u=te(l.baseOptions,sp,3);if(!u){var d=u=new sp,f=new Jf;Pa(d,4,Go,f)}"delegate"in h&&(h.delegate==="GPU"?(h=u,d=new BM,Pa(h,2,Go,d)):(h=u,d=new Jf,Pa(h,4,Go,d))),At(l.baseOptions,0,3,u)}(this,c),c.modelAssetPath)return fetch(c.modelAssetPath.toString()).then(l=>{if(l.ok)return l.arrayBuffer();throw Error(`Failed to fetch model: ${c.modelAssetPath} (${l.status})`)}).then(l=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(l),!0,!1,!1),wl(this,"/model.dat"),this.m(),this.L()});if(c.modelAssetBuffer instanceof Uint8Array)wl(this,c.modelAssetBuffer);else if(c.modelAssetBuffer)return async function(l){const h=[];for(var u=0;;){const{done:d,value:f}=await l.read();if(d)break;h.push(f),u+=f.length}if(h.length===0)return new Uint8Array(0);if(h.length===1)return h[0];l=new Uint8Array(u),u=0;for(const d of h)l.set(d,u),u+=d.length;return l}(c.modelAssetBuffer).then(l=>{wl(this,l),this.m(),this.L()})}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let e;if(this.g.ca(t=>{e=kM(t)}),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.g.attachErrorListener((n,i)=>{this.H.push(Error(i))}),this.g.Ja(),this.g.setGraph(e,t),this.B=void 0,fp(this)}finishProcessing(){this.g.finishProcessing(),fp(this)}close(){this.B=void 0,this.g.closeGraph()}};function hs(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}Ch.prototype.close=Ch.prototype.close;class fS{constructor(t,n,i,s){this.g=t,this.h=n,this.m=i,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function pp(e,t,n){const i=e.g;if(n=hs(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(e.h,n),n}function mp(e,t){const n=e.g,i=hs(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const s=hs(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(e.O),n.vertexAttribPointer(e.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const r=hs(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(e.L),n.vertexAttribPointer(e.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new fS(n,i,s,r)}function qu(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function pS(e,t,n,i){return qu(e,t),e.h||(e.m(),e.D()),n?(e.u||(e.u=mp(e,!0)),n=e.u):(e.A||(e.A=mp(e,!1)),n=e.A),t.useProgram(e.h),n.bind(),e.l(),e=i(),n.g.bindVertexArray(null),e}function ug(e,t,n){return qu(e,t),e=hs(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function dg(e,t,n){qu(e,t),e.B||(e.B=hs(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.B),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function mS(e){var t;(t=e.g)==null||t.bindFramebuffer(e.g.FRAMEBUFFER,null)}var fg=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const e=this.g;if(this.h=hs(e.createProgram(),"Failed to create WebGL program"),this.X=pp(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.W=pp(this,this.H(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.O=e.getAttribLocation(this.h,"aVertex"),this.L=e.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const e=this.g;e.deleteProgram(this.h),e.deleteShader(this.X),e.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function Di(e,t){switch(t){case 0:return e.g.find(n=>n instanceof Uint8Array);case 1:return e.g.find(n=>n instanceof Float32Array);case 2:return e.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function Rh(e){var t=Di(e,1);if(!t){if(t=Di(e,0))t=new Float32Array(t).map(i=>i/255);else{t=new Float32Array(e.width*e.height);const i=Vr(e);var n=Yu(e);if(dg(n,i,pg(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(e.width*e.height*4),i.readPixels(0,0,e.width,e.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<t.length;++s,r+=4)t[s]=n[r]}else i.readPixels(0,0,e.width,e.height,i.RED,i.FLOAT,t)}e.g.push(t)}return t}function pg(e){let t=Di(e,2);if(!t){const n=Vr(e);t=gg(e);const i=Rh(e),s=mg(e);n.texImage2D(n.TEXTURE_2D,0,s,e.width,e.height,0,n.RED,n.FLOAT,i),Ph(e)}return t}function Vr(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=hs(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function mg(e){if(e=Vr(e),!Do)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))Do=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Do=e.R16F}return Do}function Yu(e){return e.l||(e.l=new fg),e.l}function gg(e){const t=Vr(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=Di(e,2);return n||(n=ug(Yu(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function Ph(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var Do,qe=class{constructor(e,t,n,i,s,r,a){this.g=e,this.m=t,this.j=n,this.canvas=i,this.l=s,this.width=r,this.height=a,this.j&&--gp===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!Di(this,0)}ka(){return!!Di(this,1)}R(){return!!Di(this,2)}ja(){return(t=Di(e=this,0))||(t=Rh(e),t=new Uint8Array(t.map(n=>Math.round(255*n))),e.g.push(t)),t;var e,t}ia(){return Rh(this)}N(){return pg(this)}clone(){const e=[];for(const t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{const i=Vr(this),s=Yu(this);i.activeTexture(i.TEXTURE1),n=ug(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const r=mg(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),dg(s,i,n),pS(s,i,!1,()=>{gg(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Ph(this)}),mS(s),Ph(this)}}e.push(n)}return new qe(e,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Vr(this).deleteTexture(Di(this,2)),gp=-1}};qe.prototype.close=qe.prototype.close,qe.prototype.clone=qe.prototype.clone,qe.prototype.getAsWebGLTexture=qe.prototype.N,qe.prototype.getAsFloat32Array=qe.prototype.ia,qe.prototype.getAsUint8Array=qe.prototype.ja,qe.prototype.hasWebGLTexture=qe.prototype.R,qe.prototype.hasFloat32Array=qe.prototype.ka,qe.prototype.hasUint8Array=qe.prototype.Fa;var gp=250;function si(...e){return e.map(([t,n])=>({start:t,end:n}))}const gS=function(e){return class extends e{Ja(){this.i._registerModelResourcesGraphService()}}}((_p=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:lg()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){const t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){const n=e.length,i=this.i._malloc(n);this.i.HEAPU8.set(e,i),t?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(e,t,n,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),St(this,i||"input_audio",r=>{St(this,s=s||"audio_header",a=>{this.i._configureAudio(r,a,e,t??0,n)})})}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}ca(e){ci(this,"__graph_config__",t=>{e(t)}),St(this,"__graph_config__",t=>{this.i._getGraphConfig(t,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,i,s){const r=4*e.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(e,this.g/4),St(this,i,a=>{this.i._addAudioToInputStream(this.g,t,n,a,s)})}addGpuBufferToStream(e,t,n){St(this,t,i=>{const[s,r]=up(this,e,i);this.i._addBoundTextureToStream(i,s,r,n)})}addBoolToStream(e,t,n){St(this,t,i=>{this.i._addBoolToInputStream(e,i,n)})}addDoubleToStream(e,t,n){St(this,t,i=>{this.i._addDoubleToInputStream(e,i,n)})}addFloatToStream(e,t,n){St(this,t,i=>{this.i._addFloatToInputStream(e,i,n)})}addIntToStream(e,t,n){St(this,t,i=>{this.i._addIntToInputStream(e,i,n)})}addUintToStream(e,t,n){St(this,t,i=>{this.i._addUintToInputStream(e,i,n)})}addStringToStream(e,t,n){St(this,t,i=>{St(this,e,s=>{this.i._addStringToInputStream(s,i,n)})})}addStringRecordToStream(e,t,n){St(this,t,i=>{dp(this,Object.keys(e),s=>{dp(this,Object.values(e),r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(e).length,i,n)})})})}addProtoToStream(e,t,n,i){St(this,n,s=>{St(this,t,r=>{const a=this.i._malloc(e.length);this.i.HEAPU8.set(e,a),this.i._addProtoToInputStream(a,e.length,r,s,i),this.i._free(a)})})}addEmptyPacketToStream(e,t){St(this,e,n=>{this.i._addEmptyPacketToInputStream(n,t)})}addBoolVectorToStream(e,t,n){St(this,t,i=>{const s=this.i._allocateBoolVector(e.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(const r of e)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,n)})}addDoubleVectorToStream(e,t,n){St(this,t,i=>{const s=this.i._allocateDoubleVector(e.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(const r of e)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,n)})}addFloatVectorToStream(e,t,n){St(this,t,i=>{const s=this.i._allocateFloatVector(e.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(const r of e)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,n)})}addIntVectorToStream(e,t,n){St(this,t,i=>{const s=this.i._allocateIntVector(e.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(const r of e)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,n)})}addUintVectorToStream(e,t,n){St(this,t,i=>{const s=this.i._allocateUintVector(e.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of e)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,n)})}addStringVectorToStream(e,t,n){St(this,t,i=>{const s=this.i._allocateStringVector(e.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(const r of e)St(this,r,a=>{this.i._addStringVectorEntry(s,a)});this.i._addStringVectorToInputStream(s,i,n)})}addBoolToInputSidePacket(e,t){St(this,t,n=>{this.i._addBoolToInputSidePacket(e,n)})}addDoubleToInputSidePacket(e,t){St(this,t,n=>{this.i._addDoubleToInputSidePacket(e,n)})}addFloatToInputSidePacket(e,t){St(this,t,n=>{this.i._addFloatToInputSidePacket(e,n)})}addIntToInputSidePacket(e,t){St(this,t,n=>{this.i._addIntToInputSidePacket(e,n)})}addUintToInputSidePacket(e,t){St(this,t,n=>{this.i._addUintToInputSidePacket(e,n)})}addStringToInputSidePacket(e,t){St(this,t,n=>{St(this,e,i=>{this.i._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(e,t,n){St(this,n,i=>{St(this,t,s=>{const r=this.i._malloc(e.length);this.i.HEAPU8.set(e,r),this.i._addProtoToInputSidePacket(r,e.length,s,i),this.i._free(r)})})}addBoolVectorToInputSidePacket(e,t){St(this,t,n=>{const i=this.i._allocateBoolVector(e.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const s of e)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(e,t){St(this,t,n=>{const i=this.i._allocateDoubleVector(e.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const s of e)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(e,t){St(this,t,n=>{const i=this.i._allocateFloatVector(e.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const s of e)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(e,t){St(this,t,n=>{const i=this.i._allocateIntVector(e.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const s of e)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(e,t){St(this,t,n=>{const i=this.i._allocateUintVector(e.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of e)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(e,t){St(this,t,n=>{const i=this.i._allocateStringVector(e.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const s of e)St(this,s,r=>{this.i._addStringVectorEntry(i,r)});this.i._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(e,t){ci(this,e,t),St(this,e,n=>{this.i._attachBoolListener(n)})}attachBoolVectorListener(e,t){ss(this,e,t),St(this,e,n=>{this.i._attachBoolVectorListener(n)})}attachIntListener(e,t){ci(this,e,t),St(this,e,n=>{this.i._attachIntListener(n)})}attachIntVectorListener(e,t){ss(this,e,t),St(this,e,n=>{this.i._attachIntVectorListener(n)})}attachUintListener(e,t){ci(this,e,t),St(this,e,n=>{this.i._attachUintListener(n)})}attachUintVectorListener(e,t){ss(this,e,t),St(this,e,n=>{this.i._attachUintVectorListener(n)})}attachDoubleListener(e,t){ci(this,e,t),St(this,e,n=>{this.i._attachDoubleListener(n)})}attachDoubleVectorListener(e,t){ss(this,e,t),St(this,e,n=>{this.i._attachDoubleVectorListener(n)})}attachFloatListener(e,t){ci(this,e,t),St(this,e,n=>{this.i._attachFloatListener(n)})}attachFloatVectorListener(e,t){ss(this,e,t),St(this,e,n=>{this.i._attachFloatVectorListener(n)})}attachStringListener(e,t){ci(this,e,t),St(this,e,n=>{this.i._attachStringListener(n)})}attachStringVectorListener(e,t){ss(this,e,t),St(this,e,n=>{this.i._attachStringVectorListener(n)})}attachProtoListener(e,t,n){ci(this,e,t),St(this,e,i=>{this.i._attachProtoListener(i,n||!1)})}attachProtoVectorListener(e,t,n){ss(this,e,t),St(this,e,i=>{this.i._attachProtoVectorListener(i,n||!1)})}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),ci(this,e,(i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,s)}),St(this,e,i=>{this.i._attachAudioListener(i,n||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends _p{get ga(){return this.i}pa(e,t,n){St(this,t,i=>{const[s,r]=up(this,e,i);this.ga._addBoundTextureAsImageToStream(i,s,r,n)})}Z(e,t){ci(this,e,t),St(this,e,n=>{this.ga._attachImageListener(n)})}aa(e,t){ss(this,e,t),St(this,e,n=>{this.ga._attachImageVectorListener(n)})}}));var _p,ri=class extends gS{};async function Jt(e,t,n){return async function(i,s,r,a){return dS(i,s,r,a)}(e,n.canvas??(lg()?void 0:document.createElement("canvas")),t,n)}function _g(e,t,n,i){if(e.U){const r=new B0;if(n!=null&&n.regionOfInterest){if(!e.oa)throw Error("This task doesn't support region-of-interest.");var s=n.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(s.left<0||s.top<0||s.right>1||s.bottom>1)throw Error("Expected RectF values to be in [0,1].");wt(r,1,(s.left+s.right)/2),wt(r,2,(s.top+s.bottom)/2),wt(r,4,s.right-s.left),wt(r,3,s.bottom-s.top)}else wt(r,1,.5),wt(r,2,.5),wt(r,4,1),wt(r,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(wt(r,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[a,o]=hg(t);n=Pe(r,3)*o/a,s=Pe(r,4)*a/o,wt(r,4,n),wt(r,3,s)}}e.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",e.U,i)}e.g.pa(t,e.X,i??performance.now()),e.finishProcessing()}function ai(e,t,n){var i;if((i=e.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");_g(e,t,n,e.C+1)}function Mi(e,t,n,i){var s;if(!((s=e.baseOptions)!=null&&s.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");_g(e,t,n,i)}function Hr(e,t,n,i){var s=t.data;const r=t.width,a=r*(t=t.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==a)throw Error("Unsupported channel count: "+s.length/a);return e=new qe([s],n,!1,e.g.i.canvas,e.P,r,t),i?e.clone():e}var In=class extends Ch{constructor(e,t,n,i){super(e),this.g=e,this.X=t,this.U=n,this.oa=i,this.P=new fg}l(e,t=!0){if("runningMode"in e&&oe(this.baseOptions,2,za(!!e.runningMode&&e.runningMode!=="IMAGE")),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t)}close(){this.P.close(),super.close()}};In.prototype.close=In.prototype.close;var Bn=class extends In{constructor(e,t){super(new ri(e,t),"image_in","norm_rect_in",!1),this.j={detections:[]},At(e=this.h=new Pc,0,1,t=new Ae),wt(this.h,2,.5),wt(this.h,3,.3)}get baseOptions(){return te(this.h,Ae,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return"minDetectionConfidence"in e&&wt(this.h,2,e.minDetectionConfidence??.5),"minSuppressionThreshold"in e&&wt(this.h,3,e.minSuppressionThreshold??.3),this.l(e)}F(e,t){return this.j={detections:[]},ai(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},Mi(this,e,n,t),this.j}m(){var e=new Un;Ee(e,"image_in"),Ee(e,"norm_rect_in"),ee(e,"detections");const t=new Dn;xi(t,ZM,this.h);const n=new vn;Pn(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),ve(n,"IMAGE:image_in"),ve(n,"NORM_RECT:norm_rect_in"),jt(n,"DETECTIONS:detections"),n.o(t),Xn(e,n),this.g.attachProtoVectorListener("detections",(i,s)=>{for(const r of i)i=N0(r),this.j.detections.push(og(i));ft(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{ft(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Bn.prototype.detectForVideo=Bn.prototype.G,Bn.prototype.detect=Bn.prototype.F,Bn.prototype.setOptions=Bn.prototype.o,Bn.createFromModelPath=async function(e,t){return Jt(Bn,e,{baseOptions:{modelAssetPath:t}})},Bn.createFromModelBuffer=function(e,t){return Jt(Bn,e,{baseOptions:{modelAssetBuffer:t}})},Bn.createFromOptions=function(e,t){return Jt(Bn,e,t)};var ju=si([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),$u=si([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Ku=si([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),vg=si([474,475],[475,476],[476,477],[477,474]),Zu=si([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Ju=si([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),xg=si([469,470],[470,471],[471,472],[472,469]),Qu=si([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),yg=[...ju,...$u,...Ku,...Zu,...Ju,...Qu],Mg=si([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function vp(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var we=class extends In{constructor(e,t){super(new ri(e,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,At(e=this.h=new G0,0,1,t=new Ae),this.A=new H0,At(this.h,0,3,this.A),this.u=new Pc,At(this.h,0,2,this.u),Yi(this.u,4,1),wt(this.u,2,.5),wt(this.A,2,.5),wt(this.h,4,.5)}get baseOptions(){return te(this.h,Ae,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return"numFaces"in e&&Yi(this.u,4,e.numFaces??1),"minFaceDetectionConfidence"in e&&wt(this.u,2,e.minFaceDetectionConfidence??.5),"minTrackingConfidence"in e&&wt(this.h,4,e.minTrackingConfidence??.5),"minFacePresenceConfidence"in e&&wt(this.A,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}F(e,t){return vp(this),ai(this,e,t),this.j}G(e,t,n){return vp(this),Mi(this,e,n,t),this.j}m(){var e=new Un;Ee(e,"image_in"),Ee(e,"norm_rect"),ee(e,"face_landmarks");const t=new Dn;xi(t,QM,this.h);const n=new vn;Pn(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),ve(n,"IMAGE:image_in"),ve(n,"NORM_RECT:norm_rect"),jt(n,"NORM_LANDMARKS:face_landmarks"),n.o(t),Xn(e,n),this.g.attachProtoVectorListener("face_landmarks",(i,s)=>{for(const r of i)i=Ja(r),this.j.faceLandmarks.push(Lc(i));ft(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{ft(this,i)}),this.outputFaceBlendshapes&&(ee(e,"blendshapes"),jt(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,s)=>{if(this.outputFaceBlendshapes)for(const r of i)i=Rc(r),this.j.faceBlendshapes.push(Xu(i.g()??[]));ft(this,s)}),this.g.attachEmptyPacketListener("blendshapes",i=>{ft(this,i)})),this.outputFacialTransformationMatrixes&&(ee(e,"face_geometry"),jt(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,s)=>{if(this.outputFacialTransformationMatrixes)for(const r of i)(i=te(i=JM(r),GM,2))&&this.j.facialTransformationMatrixes.push({rows:Gn(i,1)??0??0,columns:Gn(i,2)??0??0,data:Os(i,3,pi,Fs()).slice()??[]});ft(this,s)}),this.g.attachEmptyPacketListener("face_geometry",i=>{ft(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};we.prototype.detectForVideo=we.prototype.G,we.prototype.detect=we.prototype.F,we.prototype.setOptions=we.prototype.o,we.createFromModelPath=function(e,t){return Jt(we,e,{baseOptions:{modelAssetPath:t}})},we.createFromModelBuffer=function(e,t){return Jt(we,e,{baseOptions:{modelAssetBuffer:t}})},we.createFromOptions=function(e,t){return Jt(we,e,t)},we.FACE_LANDMARKS_LIPS=ju,we.FACE_LANDMARKS_LEFT_EYE=$u,we.FACE_LANDMARKS_LEFT_EYEBROW=Ku,we.FACE_LANDMARKS_LEFT_IRIS=vg,we.FACE_LANDMARKS_RIGHT_EYE=Zu,we.FACE_LANDMARKS_RIGHT_EYEBROW=Ju,we.FACE_LANDMARKS_RIGHT_IRIS=xg,we.FACE_LANDMARKS_FACE_OVAL=Qu,we.FACE_LANDMARKS_CONTOURS=yg,we.FACE_LANDMARKS_TESSELATION=Mg;var td=si([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function xp(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function yp(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function Mp(e,t=!0){const n=[];for(const s of e){var i=Rc(s);e=[];for(const r of i.g())i=t&&Gn(r,1)!=null?Gn(r,1)??0:-1,e.push({score:Pe(r,2)??0,index:i,categoryName:Je(_e(r,3))??""??"",displayName:Je(_e(r,4))??""??""});n.push(e)}return n}var fn=class extends In{constructor(e,t){super(new ri(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],At(e=this.j=new q0,0,1,t=new Ae),this.u=new Vu,At(this.j,0,2,this.u),this.D=new zu,At(this.u,0,3,this.D),this.A=new X0,At(this.u,0,2,this.A),this.h=new tS,At(this.j,0,3,this.h),wt(this.A,2,.5),wt(this.u,4,.5),wt(this.D,2,.5)}get baseOptions(){return te(this.j,Ae,1)}set baseOptions(e){At(this.j,0,1,e)}o(e){var s,r,a,o;if(Yi(this.A,3,e.numHands??1),"minHandDetectionConfidence"in e&&wt(this.A,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&wt(this.u,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&wt(this.D,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new _r,n=t,i=Ah(e.cannedGesturesClassifierOptions,(s=te(this.h,_r,3))==null?void 0:s.l());At(n,0,2,i),At(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&((r=te(this.h,_r,3))==null||r.g());return e.customGesturesClassifierOptions?(At(n=t=new _r,0,2,i=Ah(e.customGesturesClassifierOptions,(a=te(this.h,_r,4))==null?void 0:a.l())),At(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&((o=te(this.h,_r,4))==null||o.g()),this.l(e)}Ha(e,t){return xp(this),ai(this,e,t),yp(this)}Ia(e,t,n){return xp(this),Mi(this,e,n,t),yp(this)}m(){var e=new Un;Ee(e,"image_in"),Ee(e,"norm_rect"),ee(e,"hand_gestures"),ee(e,"hand_landmarks"),ee(e,"world_hand_landmarks"),ee(e,"handedness");const t=new Dn;xi(t,eS,this.j);const n=new vn;Pn(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),ve(n,"IMAGE:image_in"),ve(n,"NORM_RECT:norm_rect"),jt(n,"HAND_GESTURES:hand_gestures"),jt(n,"LANDMARKS:hand_landmarks"),jt(n,"WORLD_LANDMARKS:world_hand_landmarks"),jt(n,"HANDEDNESS:handedness"),n.o(t),Xn(e,n),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(const r of i){i=Ja(r);const a=[];for(const o of qi(i,O0,1))a.push({x:Pe(o,1)??0,y:Pe(o,2)??0,z:Pe(o,3)??0,visibility:Pe(o,4)??0});this.landmarks.push(a)}ft(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{ft(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(const r of i){i=br(r);const a=[];for(const o of qi(i,F0,1))a.push({x:Pe(o,1)??0,y:Pe(o,2)??0,z:Pe(o,3)??0,visibility:Pe(o,4)??0});this.worldLandmarks.push(a)}ft(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{ft(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,s)=>{this.gestures.push(...Mp(i,!1)),ft(this,s)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{ft(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{this.handedness.push(...Mp(i)),ft(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{ft(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function Sp(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}fn.prototype.recognizeForVideo=fn.prototype.Ia,fn.prototype.recognize=fn.prototype.Ha,fn.prototype.setOptions=fn.prototype.o,fn.createFromModelPath=function(e,t){return Jt(fn,e,{baseOptions:{modelAssetPath:t}})},fn.createFromModelBuffer=function(e,t){return Jt(fn,e,{baseOptions:{modelAssetBuffer:t}})},fn.createFromOptions=function(e,t){return Jt(fn,e,t)},fn.HAND_CONNECTIONS=td;var Sn=class extends In{constructor(e,t){super(new ri(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],At(e=this.h=new Vu,0,1,t=new Ae),this.u=new zu,At(this.h,0,3,this.u),this.j=new X0,At(this.h,0,2,this.j),Yi(this.j,3,1),wt(this.j,2,.5),wt(this.u,2,.5),wt(this.h,4,.5)}get baseOptions(){return te(this.h,Ae,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return"numHands"in e&&Yi(this.j,3,e.numHands??1),"minHandDetectionConfidence"in e&&wt(this.j,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&wt(this.h,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&wt(this.u,2,e.minHandPresenceConfidence??.5),this.l(e)}F(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ai(this,e,t),Sp(this)}G(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Mi(this,e,n,t),Sp(this)}m(){var e=new Un;Ee(e,"image_in"),Ee(e,"norm_rect"),ee(e,"hand_landmarks"),ee(e,"world_hand_landmarks"),ee(e,"handedness");const t=new Dn;xi(t,nS,this.h);const n=new vn;Pn(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),ve(n,"IMAGE:image_in"),ve(n,"NORM_RECT:norm_rect"),jt(n,"LANDMARKS:hand_landmarks"),jt(n,"WORLD_LANDMARKS:world_hand_landmarks"),jt(n,"HANDEDNESS:handedness"),n.o(t),Xn(e,n),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(const r of i)i=Ja(r),this.landmarks.push(Lc(i));ft(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{ft(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(const r of i)i=br(r),this.worldLandmarks.push(Ia(i));ft(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{ft(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{var r=this.handedness,a=r.push;const o=[];for(const c of i){i=Rc(c);const l=[];for(const h of i.g())l.push({score:Pe(h,2)??0,index:Gn(h,1)??0??-1,categoryName:Je(_e(h,3))??""??"",displayName:Je(_e(h,4))??""??""});o.push(l)}a.call(r,...o),ft(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{ft(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Sn.prototype.detectForVideo=Sn.prototype.G,Sn.prototype.detect=Sn.prototype.F,Sn.prototype.setOptions=Sn.prototype.o,Sn.createFromModelPath=function(e,t){return Jt(Sn,e,{baseOptions:{modelAssetPath:t}})},Sn.createFromModelBuffer=function(e,t){return Jt(Sn,e,{baseOptions:{modelAssetBuffer:t}})},Sn.createFromOptions=function(e,t){return Jt(Sn,e,t)},Sn.HAND_CONNECTIONS=td;var Sg=si([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Ep(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function bp(e){try{if(!e.D)return e.h;e.D(e.h)}finally{Dc(e)}}function Uo(e,t){e=Ja(e),t.push(Lc(e))}var ge=class extends In{constructor(e,t){super(new ri(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,At(e=this.j=new Z0,0,1,t=new Ae),this.I=new zu,At(this.j,0,2,this.I),this.W=new iS,At(this.j,0,3,this.W),this.u=new Pc,At(this.j,0,4,this.u),this.O=new H0,At(this.j,0,5,this.O),this.A=new $0,At(this.j,0,6,this.A),this.M=new K0,At(this.j,0,7,this.M),wt(this.u,2,.5),wt(this.u,3,.3),wt(this.O,2,.5),wt(this.A,2,.5),wt(this.A,3,.3),wt(this.M,2,.5),wt(this.I,2,.5)}get baseOptions(){return te(this.j,Ae,1)}set baseOptions(e){At(this.j,0,1,e)}o(e){return"minFaceDetectionConfidence"in e&&wt(this.u,2,e.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in e&&wt(this.u,3,e.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in e&&wt(this.O,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&wt(this.A,2,e.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in e&&wt(this.A,3,e.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in e&&wt(this.M,2,e.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&wt(this.I,2,e.minHandLandmarksConfidence??.5),this.l(e)}F(e,t,n){const i=typeof t!="function"?t:{};return this.D=typeof t=="function"?t:n,Ep(this),ai(this,e,i),bp(this)}G(e,t,n,i){const s=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,Ep(this),Mi(this,e,s,t),bp(this)}m(){var e=new Un;Ee(e,"input_frames_image"),ee(e,"pose_landmarks"),ee(e,"pose_world_landmarks"),ee(e,"face_landmarks"),ee(e,"left_hand_landmarks"),ee(e,"left_hand_world_landmarks"),ee(e,"right_hand_landmarks"),ee(e,"right_hand_world_landmarks");const t=new Dn,n=new jf;Pn(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),function(s,r){if(r!=null)if(Array.isArray(r))oe(s,2,_c(r,0,Va));else{if(!(typeof r=="string"||r instanceof mi||ou(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");rs(s,2,lu(r,!1),Xs())}}(n,this.j.g());const i=new vn;Pn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),bu(i,8,jf,n),ve(i,"IMAGE:input_frames_image"),jt(i,"POSE_LANDMARKS:pose_landmarks"),jt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),jt(i,"FACE_LANDMARKS:face_landmarks"),jt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),jt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),jt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),jt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),Xn(e,i),Ic(this,e),this.g.attachProtoListener("pose_landmarks",(s,r)=>{Uo(s,this.h.poseLandmarks),ft(this,r)}),this.g.attachEmptyPacketListener("pose_landmarks",s=>{ft(this,s)}),this.g.attachProtoListener("pose_world_landmarks",(s,r)=>{var a=this.h.poseWorldLandmarks;s=br(s),a.push(Ia(s)),ft(this,r)}),this.g.attachEmptyPacketListener("pose_world_landmarks",s=>{ft(this,s)}),this.outputPoseSegmentationMasks&&(jt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),zr(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",(s,r)=>{this.h.poseSegmentationMasks=[Hr(this,s,!0,!this.D)],ft(this,r)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",s=>{this.h.poseSegmentationMasks=[],ft(this,s)})),this.g.attachProtoListener("face_landmarks",(s,r)=>{Uo(s,this.h.faceLandmarks),ft(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",s=>{ft(this,s)}),this.outputFaceBlendshapes&&(ee(e,"extra_blendshapes"),jt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(s,r)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=Rc(s),a.push(Xu(s.g()??[]))),ft(this,r)}),this.g.attachEmptyPacketListener("extra_blendshapes",s=>{ft(this,s)})),this.g.attachProtoListener("left_hand_landmarks",(s,r)=>{Uo(s,this.h.leftHandLandmarks),ft(this,r)}),this.g.attachEmptyPacketListener("left_hand_landmarks",s=>{ft(this,s)}),this.g.attachProtoListener("left_hand_world_landmarks",(s,r)=>{var a=this.h.leftHandWorldLandmarks;s=br(s),a.push(Ia(s)),ft(this,r)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",s=>{ft(this,s)}),this.g.attachProtoListener("right_hand_landmarks",(s,r)=>{Uo(s,this.h.rightHandLandmarks),ft(this,r)}),this.g.attachEmptyPacketListener("right_hand_landmarks",s=>{ft(this,s)}),this.g.attachProtoListener("right_hand_world_landmarks",(s,r)=>{var a=this.h.rightHandWorldLandmarks;s=br(s),a.push(Ia(s)),ft(this,r)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",s=>{ft(this,s)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ge.prototype.detectForVideo=ge.prototype.G,ge.prototype.detect=ge.prototype.F,ge.prototype.setOptions=ge.prototype.o,ge.createFromModelPath=function(e,t){return Jt(ge,e,{baseOptions:{modelAssetPath:t}})},ge.createFromModelBuffer=function(e,t){return Jt(ge,e,{baseOptions:{modelAssetBuffer:t}})},ge.createFromOptions=function(e,t){return Jt(ge,e,t)},ge.HAND_CONNECTIONS=td,ge.POSE_CONNECTIONS=Sg,ge.FACE_LANDMARKS_LIPS=ju,ge.FACE_LANDMARKS_LEFT_EYE=$u,ge.FACE_LANDMARKS_LEFT_EYEBROW=Ku,ge.FACE_LANDMARKS_LEFT_IRIS=vg,ge.FACE_LANDMARKS_RIGHT_EYE=Zu,ge.FACE_LANDMARKS_RIGHT_EYEBROW=Ju,ge.FACE_LANDMARKS_RIGHT_IRIS=xg,ge.FACE_LANDMARKS_FACE_OVAL=Qu,ge.FACE_LANDMARKS_CONTOURS=yg,ge.FACE_LANDMARKS_TESSELATION=Mg;var kn=class extends In{constructor(e,t){super(new ri(e,t),"input_image","norm_rect",!0),this.j={classifications:[]},At(e=this.h=new J0,0,1,t=new Ae)}get baseOptions(){return te(this.h,Ae,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return At(this.h,0,2,Ah(e,te(this.h,Bu,2))),this.l(e)}sa(e,t){return this.j={classifications:[]},ai(this,e,t),this.j}ta(e,t,n){return this.j={classifications:[]},Mi(this,e,n,t),this.j}m(){var e=new Un;Ee(e,"input_image"),Ee(e,"norm_rect"),ee(e,"classifications");const t=new Dn;xi(t,sS,this.h);const n=new vn;Pn(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),ve(n,"IMAGE:input_image"),ve(n,"NORM_RECT:norm_rect"),jt(n,"CLASSIFICATIONS:classifications"),n.o(t),Xn(e,n),this.g.attachProtoListener("classifications",(i,s)=>{this.j=hS(qM(i)),ft(this,s)}),this.g.attachEmptyPacketListener("classifications",i=>{ft(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};kn.prototype.classifyForVideo=kn.prototype.ta,kn.prototype.classify=kn.prototype.sa,kn.prototype.setOptions=kn.prototype.o,kn.createFromModelPath=function(e,t){return Jt(kn,e,{baseOptions:{modelAssetPath:t}})},kn.createFromModelBuffer=function(e,t){return Jt(kn,e,{baseOptions:{modelAssetBuffer:t}})},kn.createFromOptions=function(e,t){return Jt(kn,e,t)};var En=class extends In{constructor(e,t){super(new ri(e,t),"image_in","norm_rect",!0),this.h=new Q0,this.embeddings={embeddings:[]},At(e=this.h,0,1,t=new Ae)}get baseOptions(){return te(this.h,Ae,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){var t=this.h,n=te(this.h,ip,2);return n=n?n.clone():new ip,e.l2Normalize!==void 0?oe(n,1,za(e.l2Normalize)):"l2Normalize"in e&&oe(n,1),e.quantize!==void 0?oe(n,2,za(e.quantize)):"quantize"in e&&oe(n,2),At(t,0,2,n),this.l(e)}za(e,t){return ai(this,e,t),this.embeddings}Aa(e,t,n){return Mi(this,e,n,t),this.embeddings}m(){var e=new Un;Ee(e,"image_in"),Ee(e,"norm_rect"),ee(e,"embeddings_out");const t=new Dn;xi(t,rS,this.h);const n=new vn;Pn(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),ve(n,"IMAGE:image_in"),ve(n,"NORM_RECT:norm_rect"),jt(n,"EMBEDDINGS:embeddings_out"),n.o(t),Xn(e,n),this.g.attachProtoListener("embeddings_out",(i,s)=>{i=$M(i),this.embeddings=function(r){return{embeddings:qi(r,jM,1).map(a=>{var l,h;const o={headIndex:Gn(a,3)??0??-1,headName:Je(_e(a,4))??""??""};var c=a.v;return $m(c,0|c[xt],np,yl(a,1))!==void 0?(a=Os(a=te(a,np,yl(a,1),void 0),1,pi,Fs()),o.floatEmbedding=a.slice()):(c=new Uint8Array(0),o.quantizedEmbedding=((h=(l=te(a,YM,yl(a,2),void 0))==null?void 0:l.na())==null?void 0:h.h())??c),o}),timestampMs:ag(Jm(r))}}(i),ft(this,s)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{ft(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};En.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=lp(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=lp(cp(e.quantizedEmbedding),cp(t.quantizedEmbedding))}return e},En.prototype.embedForVideo=En.prototype.Aa,En.prototype.embed=En.prototype.za,En.prototype.setOptions=En.prototype.o,En.createFromModelPath=function(e,t){return Jt(En,e,{baseOptions:{modelAssetPath:t}})},En.createFromModelBuffer=function(e,t){return Jt(En,e,{baseOptions:{modelAssetBuffer:t}})},En.createFromOptions=function(e,t){return Jt(En,e,t)};var Lh=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach(n=>{n.close()}),(t=this.categoryMask)==null||t.close()}};function _S(e){var n,i;const t=function(s){return qi(s,vn,1)}(e.ca()).filter(s=>(Je(_e(s,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(e.u=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(((i=(n=te(t[0],Dn,7))==null?void 0:n.j())==null?void 0:i.g())??new Map).forEach((s,r)=>{e.u[Number(r)]=Je(_e(s,1))??""})}function wp(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function Tp(e){try{const t=new Lh(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{Dc(e)}}Lh.prototype.close=Lh.prototype.close;var dn=class extends In{constructor(e,t){super(new ri(e,t),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Wu,this.A=new tg,At(this.h,0,3,this.A),At(e=this.h,0,1,t=new Ae)}get baseOptions(){return te(this.h,Ae,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?oe(this.h,2,$a(e.displayNamesLocale)):"displayNamesLocale"in e&&oe(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}L(){_S(this)}segment(e,t,n){const i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:n,wp(this),ai(this,e,i),Tp(this)}La(e,t,n,i){const s=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,wp(this),Mi(this,e,s,t),Tp(this)}Da(){return this.u}m(){var e=new Un;Ee(e,"image_in"),Ee(e,"norm_rect");const t=new Dn;xi(t,ng,this.h);const n=new vn;Pn(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),ve(n,"IMAGE:image_in"),ve(n,"NORM_RECT:norm_rect"),n.o(t),Xn(e,n),Ic(this,e),this.outputConfidenceMasks&&(ee(e,"confidence_masks"),jt(n,"CONFIDENCE_MASKS:confidence_masks"),zr(this,"confidence_masks"),this.g.aa("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>Hr(this,r,!0,!this.j)),ft(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],ft(this,i)})),this.outputCategoryMask&&(ee(e,"category_mask"),jt(n,"CATEGORY_MASK:category_mask"),zr(this,"category_mask"),this.g.Z("category_mask",(i,s)=>{this.categoryMask=Hr(this,i,!1,!this.j),ft(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,ft(this,i)})),ee(e,"quality_scores"),jt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,ft(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,ft(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};dn.prototype.getLabels=dn.prototype.Da,dn.prototype.segmentForVideo=dn.prototype.La,dn.prototype.segment=dn.prototype.segment,dn.prototype.setOptions=dn.prototype.o,dn.createFromModelPath=function(e,t){return Jt(dn,e,{baseOptions:{modelAssetPath:t}})},dn.createFromModelBuffer=function(e,t){return Jt(dn,e,{baseOptions:{modelAssetBuffer:t}})},dn.createFromOptions=function(e,t){return Jt(dn,e,t)};var Ih=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach(n=>{n.close()}),(t=this.categoryMask)==null||t.close()}};Ih.prototype.close=Ih.prototype.close;var li=class extends In{constructor(e,t){super(new ri(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Wu,this.u=new tg,At(this.h,0,3,this.u),At(e=this.h,0,1,t=new Ae)}get baseOptions(){return te(this.h,Ae,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,n,i){const s=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new ig,t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var r=new bl;rs(r,3,za(!0),!1),rs(r,1,ba(t.keypoint.x),0),rs(r,2,ba(t.keypoint.y),0),Pa(i,1,Th,r)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");{const o=new oS;for(r of t.scribble)rs(t=new bl,3,za(!0),!1),rs(t,1,ba(r.x),0),rs(t,2,ba(r.y),0),bu(o,1,bl,t);Pa(i,2,Th,o)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),ai(this,e,s);t:{try{const o=new Ih(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var a=o;break t}this.j(o)}finally{Dc(this)}a=void 0}return a}m(){var e=new Un;Ee(e,"image_in"),Ee(e,"roi_in"),Ee(e,"norm_rect_in");const t=new Dn;xi(t,ng,this.h);const n=new vn;Pn(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),ve(n,"IMAGE:image_in"),ve(n,"ROI:roi_in"),ve(n,"NORM_RECT:norm_rect_in"),n.o(t),Xn(e,n),Ic(this,e),this.outputConfidenceMasks&&(ee(e,"confidence_masks"),jt(n,"CONFIDENCE_MASKS:confidence_masks"),zr(this,"confidence_masks"),this.g.aa("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>Hr(this,r,!0,!this.j)),ft(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],ft(this,i)})),this.outputCategoryMask&&(ee(e,"category_mask"),jt(n,"CATEGORY_MASK:category_mask"),zr(this,"category_mask"),this.g.Z("category_mask",(i,s)=>{this.categoryMask=Hr(this,i,!1,!this.j),ft(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,ft(this,i)})),ee(e,"quality_scores"),jt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,ft(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,ft(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};li.prototype.segment=li.prototype.segment,li.prototype.setOptions=li.prototype.o,li.createFromModelPath=function(e,t){return Jt(li,e,{baseOptions:{modelAssetPath:t}})},li.createFromModelBuffer=function(e,t){return Jt(li,e,{baseOptions:{modelAssetBuffer:t}})},li.createFromOptions=function(e,t){return Jt(li,e,t)};var zn=class extends In{constructor(e,t){super(new ri(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},At(e=this.h=new sg,0,1,t=new Ae)}get baseOptions(){return te(this.h,Ae,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?oe(this.h,2,$a(e.displayNamesLocale)):"displayNamesLocale"in e&&oe(this.h,2),e.maxResults!==void 0?Yi(this.h,3,e.maxResults):"maxResults"in e&&oe(this.h,3),e.scoreThreshold!==void 0?wt(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&oe(this.h,4),e.categoryAllowlist!==void 0?ec(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&oe(this.h,5),e.categoryDenylist!==void 0?ec(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&oe(this.h,6),this.l(e)}F(e,t){return this.j={detections:[]},ai(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},Mi(this,e,n,t),this.j}m(){var e=new Un;Ee(e,"input_frame_gpu"),Ee(e,"norm_rect"),ee(e,"detections");const t=new Dn;xi(t,cS,this.h);const n=new vn;Pn(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),ve(n,"IMAGE:input_frame_gpu"),ve(n,"NORM_RECT:norm_rect"),jt(n,"DETECTIONS:detections"),n.o(t),Xn(e,n),this.g.attachProtoVectorListener("detections",(i,s)=>{for(const r of i)i=N0(r),this.j.detections.push(og(i));ft(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{ft(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};zn.prototype.detectForVideo=zn.prototype.G,zn.prototype.detect=zn.prototype.F,zn.prototype.setOptions=zn.prototype.o,zn.createFromModelPath=async function(e,t){return Jt(zn,e,{baseOptions:{modelAssetPath:t}})},zn.createFromModelBuffer=function(e,t){return Jt(zn,e,{baseOptions:{modelAssetBuffer:t}})},zn.createFromOptions=function(e,t){return Jt(zn,e,t)};var Dh=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){var e;(e=this.segmentationMasks)==null||e.forEach(t=>{t.close()})}};function Ap(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function Cp(e){try{const t=new Dh(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.u)return t;e.u(t)}finally{Dc(e)}}Dh.prototype.close=Dh.prototype.close;var bn=class extends In{constructor(e,t){super(new ri(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,At(e=this.h=new rg,0,1,t=new Ae),this.A=new K0,At(this.h,0,3,this.A),this.j=new $0,At(this.h,0,2,this.j),Yi(this.j,4,1),wt(this.j,2,.5),wt(this.A,2,.5),wt(this.h,4,.5)}get baseOptions(){return te(this.h,Ae,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return"numPoses"in e&&Yi(this.j,4,e.numPoses??1),"minPoseDetectionConfidence"in e&&wt(this.j,2,e.minPoseDetectionConfidence??.5),"minTrackingConfidence"in e&&wt(this.h,4,e.minTrackingConfidence??.5),"minPosePresenceConfidence"in e&&wt(this.A,2,e.minPosePresenceConfidence??.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}F(e,t,n){const i=typeof t!="function"?t:{};return this.u=typeof t=="function"?t:n,Ap(this),ai(this,e,i),Cp(this)}G(e,t,n,i){const s=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,Ap(this),Mi(this,e,s,t),Cp(this)}m(){var e=new Un;Ee(e,"image_in"),Ee(e,"norm_rect"),ee(e,"normalized_landmarks"),ee(e,"world_landmarks"),ee(e,"segmentation_masks");const t=new Dn;xi(t,lS,this.h);const n=new vn;Pn(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),ve(n,"IMAGE:image_in"),ve(n,"NORM_RECT:norm_rect"),jt(n,"NORM_LANDMARKS:normalized_landmarks"),jt(n,"WORLD_LANDMARKS:world_landmarks"),n.o(t),Xn(e,n),Ic(this,e),this.g.attachProtoVectorListener("normalized_landmarks",(i,s)=>{this.landmarks=[];for(const r of i)i=Ja(r),this.landmarks.push(Lc(i));ft(this,s)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],ft(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,s)=>{this.worldLandmarks=[];for(const r of i)i=br(r),this.worldLandmarks.push(Ia(i));ft(this,s)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],ft(this,i)}),this.outputSegmentationMasks&&(jt(n,"SEGMENTATION_MASK:segmentation_masks"),zr(this,"segmentation_masks"),this.g.aa("segmentation_masks",(i,s)=>{this.segmentationMasks=i.map(r=>Hr(this,r,!0,!this.u)),ft(this,s)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],ft(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};bn.prototype.detectForVideo=bn.prototype.G,bn.prototype.detect=bn.prototype.F,bn.prototype.setOptions=bn.prototype.o,bn.createFromModelPath=function(e,t){return Jt(bn,e,{baseOptions:{modelAssetPath:t}})},bn.createFromModelBuffer=function(e,t){return Jt(bn,e,{baseOptions:{modelAssetBuffer:t}})},bn.createFromOptions=function(e,t){return Jt(bn,e,t)},bn.POSE_CONNECTIONS=Sg;class Tl{constructor(){C(this,"time");C(this,"raw",0);C(this,"value",0);C(this,"derivative",0)}reset(){this.time=void 0}update(t,n){if(this.time===void 0)return this.time=n,this.raw=this.value=t,this.derivative=0,t;const i=Math.max(.001,(n-this.time)/1e3),s=r=>1/(1+1/(2*Math.PI*r*i));return this.derivative+=s(1)*((t-this.raw)/i-this.derivative),this.value+=s(1.2+.3*Math.abs(this.derivative))*(t-this.value),this.raw=t,this.time=n,this.value}}const vS=e=>Math.abs(e)<=.04?0:Math.sign(e)*Se((Math.abs(e)-.04)/.22,0,1);class xS{constructor(){C(this,"samples",[])}clear(){this.samples=[]}push(t,n){this.samples.push({time:t,aim:{...n}}),this.prune(t)}prune(t){this.samples=this.samples.filter(n=>n.time>=t-200)}sample(t){if(this.prune(t),!this.samples.length)return;const n=this.samples.reduce((s,r)=>({x:s.x+r.aim.x,d:s.d+r.aim.d,power:s.power+r.aim.power}),{x:0,d:0,power:0}),i=this.samples.length;return{x:n.x/i,d:n.d/i,power:n.power/i}}}function yS(e,t){if(e.phase!=="rally")return 0;const n=ls(e.ball.pos,e.ball.vel,De.radius),r=(n.z*t.side>0?Se(n.z*t.side,fs.netGap,Yt.halfLen+fs.backMargin):Yt.halfLen-3.5)-t.pos.z*t.side;return Math.abs(r)<=.12?0:-Se(r/.6,-1,1)}function MS(e,t){if(e.phase!=="rally")return 0;const n=ls(e.ball.pos,e.ball.vel,De.radius);if(n.z*t.side<=0)return 0;const s=Se(n.x,-4-fs.xMargin,Yt.halfW+fs.xMargin)-t.pos.x;return Math.abs(s)<=.15?0:Se(s/.8,-.85,.85)}const SS={Closed_Fist:{label:"Closed fist",action:"bump"},Thumb_Up:{label:"Thumbs up",action:"spike"},Pointing_Up:{label:"Pointing up",action:"set"},Open_Palm:{label:"Open palm",action:null},Victory:{label:"Peace",action:"restart"}};class ES{constructor(t){C(this,"recognizer");C(this,"stream");C(this,"active",!1);C(this,"frame",0);C(this,"lastVideoTime",-1);C(this,"lastScan",0);C(this,"candidate","");C(this,"candidateFrames",0);C(this,"stable","");C(this,"queued",null);C(this,"move",{x:0,f:0});C(this,"center");C(this,"calibration",[]);C(this,"filters",[new Tl,new Tl,new Tl]);C(this,"history",new xS);C(this,"handAim",{x:0,d:0,power:.6});C(this,"tracking",!1);C(this,"keyboardAim",!1);C(this,"side",1);C(this,"depth",document.createElement("div"));C(this,"calibrate",document.createElement("button"));C(this,"video",document.createElement("video"));C(this,"status",document.createElement("div"));C(this,"result",document.createElement("div"));C(this,"button",document.createElement("button"));C(this,"buttonPanel",document.createElement("div"));C(this,"scan",()=>{var n;if(!this.active)return;const t=performance.now();try{if(this.video.readyState>=2&&this.video.currentTime!==this.lastVideoTime&&t-this.lastScan>=50){this.lastVideoTime=this.video.currentTime;const i=this.recognizer.recognizeForVideo(this.video,t);this.lastScan=t;const s=i.landmarks[0],r=(n=i.gestures[0])==null?void 0:n[0];if(!s)this.clear(),this.result.textContent="Gesture: No hand detected",this.status.textContent="Show one hand to the camera.",this.center||(this.calibration=[]),this.depth.textContent="No hand detected — keyboard controls available";else{const a=1-(s[0].x+s[9].x)/2,o=(s[0].y+s[9].y)/2,c=this.video.videoWidth/this.video.videoHeight,l=Math.hypot((s[0].x-s[9].x)*c,s[0].y-s[9].y);if(!this.center){if(l<=.01)this.calibration=[];else{const g=this.calibration[0];g&&(Math.hypot(a-g.x,o-g.y)>.035||Math.abs(l/g.scale-1)>.15)&&(this.calibration=[]),this.calibration.push({x:a,y:o,scale:l})}if(this.depth.textContent=`Hold steady to calibrate… ${this.calibration.length}/12`,this.calibration.length<12){this.frame=requestAnimationFrame(this.scan);return}this.center=this.calibration.reduce((g,_)=>({x:g.x+_.x/12,y:g.y+_.y/12,scale:g.scale+_.scale/12}),{x:0,y:0,scale:0})}const h=this.filters[0].update(a,t),u=this.filters[2].update(l/this.center.scale,t);this.move={x:vS(h-this.center.x),f:0},this.handAim={x:this.move.x,d:this.move.f,power:Se(.6+(u-1)*1.5,0,1)},this.history.push(t,this.handAim),this.tracking=!0,this.depth.textContent=`Calibrated · hand scale ${u.toFixed(2)}× · power ${Math.round(this.handAim.power*100)}%`;const d=r&&r.score>=.65?r.categoryName:"",f=SS[d];this.result.textContent=`Gesture: ${(f==null?void 0:f.label)??"Unknown"}${r?` · ${Math.round(r.score*100)}%`:""}`,this.status.textContent=`Move: ${f?f.action??"Neutral":"None"} · ${this.stable===d?"Ready":"Confirming…"}`,d!==this.candidate&&(this.candidate=d,this.candidateFrames=0),this.candidateFrames++,this.candidateFrames>=3&&d!==this.stable&&(this.stable=d,this.queued=(f==null?void 0:f.action)??null)}}}catch(i){this.stop(),this.status.textContent=`Tracking stopped: ${i instanceof Error?i.message:String(i)}. Try enabling again.`;return}this.frame=requestAnimationFrame(this.scan)});const n=document.createElement("section");n.className="hand-panel",n.setAttribute("aria-label","Hand gesture controls"),this.video.autoplay=!0,this.video.muted=!0,this.video.playsInline=!0,this.result.setAttribute("role","status"),this.status.textContent="Enable camera to use gestures.",this.result.textContent="Gesture: —",this.button.textContent="Enable camera",this.button.onclick=()=>this.active?this.stop():void this.start(),this.calibrate.textContent="Recalibrate",this.calibrate.disabled=!0,this.calibrate.onclick=()=>this.resetDepth(),this.depth.textContent="Depth: waiting for camera",this.buttonPanel.className="hand-button-panel",this.buttonPanel.append(this.button,this.calibrate);const i=document.createElement("small");n.append(this.video,this.result,this.status,this.depth,this.buttonPanel,i),t.append(n),window.addEventListener("pagehide",()=>this.stop())}async start(){var t;this.button.disabled=!0,this.status.textContent="Loading hand recognition…";try{if(!((t=navigator.mediaDevices)!=null&&t.getUserMedia))throw new Error("Camera requires localhost or HTTPS.");if(!this.recognizer){const n=await Rs.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.32/wasm");this.recognizer=await fn.createFromOptions(n,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task"},runningMode:"VIDEO",numHands:1})}this.status.textContent="Allow camera access in your browser…",this.stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:640,height:480},audio:!1}),this.video.srcObject=this.stream,await this.video.play(),this.resetDepth(),this.calibrate.disabled=!1,this.active=!0,this.lastVideoTime=-1,this.button.textContent="Stop camera",this.status.textContent="Show one hand to the camera.",this.scan()}catch(n){this.stop(),this.status.textContent=`Camera unavailable: ${n instanceof Error?n.message:String(n)} Keyboard controls still work. Try enabling again.`}finally{this.button.disabled=!1}}stop(){var t;this.active=!1,cancelAnimationFrame(this.frame),(t=this.stream)==null||t.getTracks().forEach(n=>n.stop()),this.video.srcObject=null,this.clear(),this.result.textContent="Gesture: —",this.status.textContent="Camera off. Keyboard controls active.",this.button.textContent="Enable camera",this.calibrate.disabled=!0,this.resetDepth(),this.depth.textContent="Depth: waiting for camera"}resetDepth(){this.center=void 0,this.calibration=[],this.clear(),this.depth.textContent="Hold hand at a comfortable center to calibrate…"}clear(){this.tracking=!1,this.move={x:0,f:0},this.queued=null,this.candidate=this.stable="",this.candidateFrames=0,this.history.clear(),this.filters.forEach(t=>t.reset())}update(t,n,i){this.side=i.side,performance.now()-this.lastScan>350&&this.clear();const s=iu();return s.moveX=MS(n,i),s.aim={...this.handAim,x:this.handAim.x*i.side},s.action=this.queued,this.queued=null,(n.phase==="ready"||n.phase==="toss")&&n.server===i&&s.action==="spike"?s.action="serve":!n.tutorial&&s.action==="restart"&&n.restart(),s.action&&(this.keyboardAim=!1),s.moveF=yS(n,i),s}sampleContactAim(){if(!this.active||!this.tracking||this.keyboardAim)return;const t=this.history.sample(performance.now());return t?{...t,x:t.x*this.side}:void 0}}function ed(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}class bS{constructor(t,n=1,i=!1){C(this,"ball",new m3);C(this,"players");C(this,"rng");C(this,"viewPlayerId",0);C(this,"tutorialMoves",["bump","set","spike","serve"]);C(this,"tutorial",null);C(this,"practiceHit",!1);C(this,"practiceTime",0);C(this,"practiceLandedTime",0);C(this,"practiceArmed",!1);C(this,"phase","ready");C(this,"phaseTimer",0);C(this,"time",0);C(this,"scores",[0,0]);C(this,"winner",null);C(this,"lastPointWinner",null);C(this,"message","");C(this,"server");C(this,"touchCount",0);C(this,"lastTouchSide",0);C(this,"hitSerial",0);C(this,"netSinceHit",!1);C(this,"events",[]);if(this.controllers=t,this.rng=ed(n),t.length!==2&&t.length!==4)throw new Error("Game needs two or four controllers");this.players=t.map((s,r)=>new eu(r,r%2===0?1:-1,r%2===0?16755200:43775)),this.server=this.players[0],this.resetForServe(!0),i&&this.startTutorial()}player(t){return this.players[t===1?0:1]}score(t){return this.scores[t===1?0:1]}drainEvents(){const t=this.events;return this.events=[],t}restart(){this.events=[],this.tutorial=null,this.scores=[0,0],this.winner=null,this.lastPointWinner=null,this.server=this.players[0],this.resetForServe(!0)}startTutorial(){this.restart(),this.tutorial={step:0,count:0},this.feedPracticeBall()}feedPracticeBall(){if(!this.tutorial)return;const t=this.players[this.viewPlayerId],n=this.tutorialMoves[this.tutorial.step];t.teleport(0,t.side*(n==="spike"?2:4)),t.pending=null,t.prevContactDist=1/0,t.lastTouchTime=-10,t.lastType=n,this.phase="rally",this.touchCount=0,this.lastTouchSide=0,this.ball.reset();const i=Jo(t.actor,Hi[n]);n==="bump"?(this.ball.pos={x:i.x,y:3,z:-t.side*4},this.ball.vel=Vo(this.ball.pos,i,1.4,De.gravity),this.ball.mode="live",this.events.push({kind:"toss"})):this.ball.pos={...i,y:i.y+2.5},n==="serve"&&(this.server=t,this.resetForServe(!0)),this.practiceArmed=!1,this.practiceHit=!1,this.practiceTime=0,this.practiceLandedTime=0}updatePractice(t){const n=this.tutorial;this.time+=t;const i=this.players[this.viewPlayerId],s=this.controllers[i.id].update(t,this,i),r=this.tutorialMoves[n.step];if(this.ball.mode==="held"&&r!=="serve"){if(s.action!==r)return;this.ball.mode="live",this.practiceArmed=!0,this.events.push({kind:"toss"})}if(this.phase!=="ready"&&(this.practiceTime+=t),i.step(t,{...s,moveX:0,moveF:0,jump:!1,action:!this.practiceHit&&(this.practiceArmed||s.action===r)?r:null},this.minDepth(i)),this.practiceHit)i.pending=null;else{const a=this.hitSerial;this.processAction(i),this.hitSerial!==a&&(this.practiceHit=!0,n.count++)}if(this.phase==="ready"?this.holdBall():this.stepBall(t),this.ball.mode==="dead"&&(this.practiceLandedTime+=t),this.practiceLandedTime>=.7||this.practiceTime>=6){if(n.count===4&&(n.step++,n.count=0,n.step===this.tutorialMoves.length)){this.tutorial=null,this.resetForServe(!0);return}this.feedPracticeBall()}}update(t){if(this.tutorial){this.updatePractice(t);return}this.time+=t;for(let n=0;n<this.players.length;n++){const i=this.players[n],s=this.controllers[n].update(t,this,i);i.step(t,s,this.minDepth(i))}for(const n of this.players)this.processAction(n);this.phase==="ready"?this.holdBall():this.stepBall(t),this.phase==="point"&&(this.phaseTimer-=t,this.phaseTimer<=0&&(this.winner?(this.phase="over",this.events.push({kind:"over",winner:this.winner})):this.resetForServe(!0)))}previewType(t){return this.tutorial?this.tutorialMoves[this.tutorial.step]:this.phase==="ready"||this.phase==="toss"?"serve":t.lastType==="serve"?"bump":t.lastType}previewTarget(t,n){return ym(n,t.actor,this.ball.pos,t.aim)}minDepth(t){return t===this.server&&(this.phase==="ready"||this.phase==="toss")?Yt.halfLen+.3:fs.netGap}holdBall(){const t=this.server;this.ball.pos={x:t.pos.x,y:t.y+1.7,z:t.pos.z-t.side*.3},this.ball.vel={x:0,y:0,z:0}}toss(){this.ball.mode="live",this.ball.vel={x:0,y:hi.tossV,z:0},this.phase="toss",this.events.push({kind:"toss"})}resetForServe(t){const n=this.server;for(const i of this.players){if(t){const s=this.players.length===4?i.id<2?-1.6:1.6:0;i.teleport(s,i.side*(i===n?Yt.halfLen+1.3:Yt.halfLen-3))}i.pending=null,i.prevContactDist=1/0,i.lastTouchTime=-10}this.ball.reset(),this.holdBall(),this.phase="ready",this.touchCount=0,this.lastTouchSide=0,this.netSinceHit=!1,this.message=""}processAction(t){const n=t.pending;if(!n)return;switch(this.phase){case"ready":t===this.server&&n.type==="serve"&&this.toss(),t.pending=null;return;case"toss":if(t!==this.server||n.type!=="serve")return;break;case"rally":if(n.type==="serve"){t.pending=null;return}break;default:t.pending=null;return}if(this.players.some(c=>c.side===t.side&&this.time-c.lastTouchTime<hi.touchCooldown))return;const i=Hi[n.type],s=xm(this.ball.pos,Jo(t.actor,i)),r=t.prevContactDist;if(t.prevContactDist=s<=i.reach?s:1/0,s>i.reach)return;const a=s>r+1e-4,o=n.age>=hi.actionWindow-.02;(s<=i.sweet||a||o)&&this.doHit(t,n.type,n.age,s)}doHit(t,n,i,s){var l,h;const r=Hi[n],a=v3(s,r,i),o=(h=(l=this.controllers[this.players.indexOf(t)]).sampleContactAim)==null?void 0:h.call(l);o&&(t.aim={...o});const c=M3({type:n,actor:t.actor,ballPos:{...this.ball.pos},ballVel:{...this.ball.vel},aim:t.aim,quality:a,rng:this.rng});this.ball.vel=c.vel,t.pending=null,t.prevContactDist=1/0,t.lastTouchTime=this.time,t.swing=.28,this.lastTouchSide!==t.side&&(this.touchCount=0),this.touchCount++,this.lastTouchSide=t.side,this.hitSerial++,this.netSinceHit=!1,this.phase==="toss"&&(this.phase="rally"),this.events.push({kind:"hit",player:t.id,type:n,quality:a,dist:s,T:c.T,clearance:c.clearance,over:c.over,target:c.target}),this.touchCount>hi.maxTouches&&this.award(Sa(t.side),"Too many touches")}stepBall(t){const n=this.ball.step(t);n.netHit&&(this.netSinceHit=!0,this.events.push({kind:"net"})),n.landed&&this.onLanded()}onLanded(){const{x:t,z:n}=this.ball.landing,i=this.ball.radius*.6,s=Math.abs(t)<=Yt.halfW+i&&Math.abs(n)<=Yt.halfLen+i;if(this.events.push({kind:"land",x:t,z:n,inCourt:s}),this.tutorial)return;if(this.phase==="toss"){this.resetForServe(!1),this.events.push({kind:"retoss"});return}if(this.phase!=="rally")return;const r=n>=0?1:-1,a=this.lastTouchSide===0?Sa(r):this.lastTouchSide;s?this.award(Sa(r),this.netSinceHit&&r===a?"Net!":"In!"):this.award(Sa(a),"Out!")}award(t,n){if(this.phase!=="rally"&&this.phase!=="toss")return;this.scores[t===1?0:1]++,this.server=this.player(t),this.lastPointWinner=t,this.phase="point",this.phaseTimer=hi.pointDelay,this.message=n;const[i,s]=this.scores,r=Math.max(i,s);(r>=hi.winScore&&Math.abs(i-s)>=2||r>=hi.cap)&&(this.winner=i>s?1:-1),this.events.push({kind:"point",winner:t,reason:n})}}const wS=e=>e>.85?"PERFECT":e>.6?"GOOD":e>.3?"OK":"SHANK";function wn(e,t,n="div"){const i=document.createElement(n);return i.className=e,t.appendChild(i),i}class TS{constructor(t,n){C(this,"island");C(this,"bay");C(this,"score");C(this,"status");C(this,"touches");C(this,"hit");C(this,"dbg");C(this,"help");C(this,"tutorial");C(this,"hitTimer",0);C(this,"last",{score:"",status:"",touches:""});this.game=n;const i=wn("hud",t);this.tutorial=wn("hud-tutorial",i),this.tutorial.className="hud-tutorial",this.tutorial.setAttribute("role","status"),this.tutorial.setAttribute("aria-live","polite");const s=wn("hud-top",i);this.island=wn("hud-island",s);const r=wn("hud-island-home-label",this.island);r.textContent="home",this.score=wn("hud-score",this.island);const a=wn("hud-island-away-label",this.island);a.textContent="away",this.bay=wn("hud-touches-bay",s),this.touches=wn("hud-touches",this.bay),this.status=wn("hud-status",this.bay),this.hit=wn("hud-hit",i),this.dbg=wn("hud-debug",i),this.help=wn("hud-help",i),this.help.innerHTML=["<ul><li>aim [hand offset]</li><li>power [hand size]</li><li>bump [fist]</li><li>set [point up]</li><li>spike [thumbs up]</li><li>serve [spike+nt+spike]</li><li>neutral [palm]</li><li>go to menu [esc]</li>"].join("<br>"),this.dbg.style.display="none"}onEvent(t){var n;if(t.kind==="hit"){const i=t.player===(((n=this.game)==null?void 0:n.viewPlayerId)??0)?"":`P${t.player+1} `;this.hit.textContent=`${i}${t.type.toUpperCase()} · ${wS(t.quality)}`,this.hit.className="hud-hit show q"+(t.quality>.85?"3":t.quality>.6?"2":t.quality>.3?"1":"0"),this.hitTimer=1.1;const s=t.clearance===null?"same side":t.clearance===1/0?"n/a":t.clearance.toFixed(2)+" m";this.dbg.textContent=`last hit: ${t.type}  quality ${t.quality.toFixed(2)}  dist ${t.dist.toFixed(2)} m  flight ${t.T.toFixed(2)} s  net clearance ${s}  target (${t.target.x.toFixed(1)}, ${t.target.z.toFixed(1)})`}else t.kind==="net"&&(this.hit.textContent="NET",this.hit.className="hud-hit show q0",this.hitTimer=.8)}setDebug(t){this.dbg.style.display=t?"block":"none"}update(t,n){if(this.tutorial.hidden=!t.tutorial,this.tutorial.style.display=t.tutorial?"":"none",this.island.parentElement.style.visibility=t.tutorial?"hidden":"visible",t.tutorial){const{step:a,count:o}=t.tutorial,c=t.tutorialMoves[a],l=["Make a closed fist","Point one finger up","Give a thumbs up","Give a thumbs up"][a],h=c==="serve"?t.phase==="ready"?"Give a thumbs up to toss the ball.":t.phase==="toss"?"Open your palm, then give a thumbs up to hit the toss.":"Watch your serve!":c==="bump"?`${l} as the ball flies over the net.`:t.ball.mode==="held"?`${l} to release the ball and ${c}.`:`Watch your ${c}!`,u=`Practice ${a+1}/${t.tutorialMoves.length}: ${c.toUpperCase()} (${o}/4)
${o===4?"Great! Watch your shot finish…":h}
Open palm between attempts.`;this.tutorial.textContent!==u&&(this.tutorial.textContent=u),this.tutorial.style.whiteSpace="pre-line"}else this.tutorial.textContent&&(this.tutorial.textContent="");const i=`${t.scores[0]} — ${t.scores[1]}`;i!==this.last.score&&(this.score.textContent=this.last.score=i);const s=this.statusText(t);s!==this.last.status&&(this.status.textContent=this.last.status=s,this.status.style.opacity=s?"1":"0");const r=t.phase==="rally"&&t.lastTouchSide!==0?`${t.lastTouchSide===t.players[t.viewPlayerId].side?"Your team’s":"Other team’s"} touches: ${t.touchCount}/3`:"";r!==this.last.touches&&(this.touches.textContent=this.last.touches=r),this.hitTimer>0&&(this.hitTimer-=n,this.hitTimer<=0&&(this.hit.className="hud-hit"))}statusText(t){if(t.tutorial)return"Complete the warm-up to start the match";switch(t.phase){case"rally":return t.players.length===4?`Controlling P${t.viewPlayerId+1}`:"";case"ready":return t.server.id===t.viewPlayerId?"Your serve":`P${t.server.id+1} serving…`;case"toss":return t.server.id===t.viewPlayerId?"Your serve":`P${t.server.id+1} serving…`;case"point":return`${t.lastPointWinner===t.players[t.viewPlayerId].side?"Your team scores":"Other team scores"} — ${t.message}`;case"over":return`${t.winner===t.players[t.viewPlayerId].side?"Your team wins!":"Other team wins"}  ${t.viewPlayerId===0?"Host: press Enter to play again":"Waiting for host to restart"}`;default:return""}}}class AS{constructor(t,n,i){C(this,"video",document.createElement("video"));C(this,"canvas",document.createElement("canvas"));C(this,"context");C(this,"texture");C(this,"sprite");C(this,"wait",3);C(this,"elapsed",0);C(this,"duration",3);C(this,"direction",1);C(this,"startBottom",18);C(this,"endBottom",18);C(this,"active",!1);C(this,"playing",!1);C(this,"failed",!1);C(this,"reducedMotion",window.matchMedia("(prefers-reduced-motion: reduce)"));this.parent=t,this.camera=i,this.canvas.width=256,this.canvas.height=256,this.context=this.canvas.getContext("2d",{willReadFrequently:!0}),this.texture=new Aa(this.canvas),this.texture.colorSpace=Me,this.texture.wrapS=Zn,this.sprite=new fi(new ti({map:this.texture,transparent:!0,depthWrite:!1,depthTest:!1})),this.sprite.renderOrder=.5,this.sprite.visible=!1,n.add(this.sprite),this.video.src="/crab.mp4",this.video.muted=!0,this.video.loop=!0,this.video.playbackRate=2,this.video.playsInline=!0,this.video.preload="auto",this.video.addEventListener("error",()=>{this.failed=!0}),t.addEventListener("pointerdown",()=>{this.active&&!this.playing&&this.play()}),window.addEventListener("pagehide",()=>this.video.pause())}play(){this.playing=!0,this.video.play().catch(()=>{this.playing=!1})}update(t){if(this.failed||this.reducedMotion.matches){this.sprite.visible=!1,this.video.pause(),this.playing=!1,this.active=!1;return}if(!this.active){if(this.wait-=t,this.wait>0||this.video.readyState<2)return;this.active=!0,this.elapsed=0,this.duration=2.5+Math.random()*1.5,this.direction=Math.random()<.5?1:-1,this.startBottom=18+Math.random()*20;const m=Math.random()<.7,p=(Math.random()<.5?-1:1)*(8+Math.random()*10);this.endBottom=m?Math.max(8,Math.min(50,this.startBottom+p)):this.startBottom,this.play()}if(!this.playing)return;if(this.elapsed+=t,this.elapsed>=this.duration){this.active=!1,this.wait=12+Math.random()*16,this.sprite.visible=!1,this.video.pause(),this.playing=!1;return}const n=Math.max(17,Math.min(this.parent.clientWidth*.02,29)),i=this.elapsed/this.duration,s=this.direction===1?i:1-i;if(this.video.readyState<2)return;const r=Math.max(1,Math.round(256*this.video.videoHeight/this.video.videoWidth));this.canvas.height!==r&&(this.canvas.height=r),this.context.drawImage(this.video,0,0,256,r);const a=this.context.getImageData(0,0,256,r),o=a.data;for(let m=0;m<o.length;m+=4){const p=Math.hypot(255-o[m],255-o[m+1],255-o[m+2]);o[m+3]=Math.round(255*Math.min(1,Math.max(0,(p-50)/40)))}this.context.putImageData(a,0,0),this.texture.needsUpdate=!0,this.texture.repeat.x=this.direction,this.texture.offset.x=this.direction<0?1:0;const c=this.parent.clientWidth||1,l=this.parent.clientHeight||1,h=-n+s*(c+n),u=(this.startBottom+(this.endBottom-this.startBottom)*i)/100*l,d=n*r/256;this.camera.updateMatrixWorld();const f=new L((h+n/2)/c*2-1,(u+d/2)/l*2-1,.5),g=f.clone();g.x+=n/c*2;const _=f.clone();_.y+=d/l*2,f.unproject(this.camera),g.unproject(this.camera),_.unproject(this.camera),this.sprite.position.copy(f),this.sprite.scale.set(f.distanceTo(g),f.distanceTo(_),1),this.sprite.visible=!0}}const Qa=new URLSearchParams(location.search),Al=Qa.get("skill"),nd=Al==="easy"||Al==="hard"?Al:"normal",id=Number(Qa.get("seed")??Date.now()%1e5)||1,aa=document.getElementById("app"),Wo=Qa.has("demo")?new su(nd,ed(id+1)):new ES(aa),CS=Qa.get("slots")==="4"?4:2,sd=Array.from({length:CS},(e,t)=>new P3(new su(nd,ed(id+t+2)))),cn=new bS(sd,id),Ui=new L3(cn,sd,Wo,aa,Qa),Tn=new w3(aa,cn),Xo=new TS(aa,cn),RS=new AS(aa,Tn.scene,Tn.camera),Uh=new R3,Rp=new C3(aa,cn,Ui.online,Ui.isClient,nd,e=>{for(const n of sd)n.cpu.setSkill(e);Wo instanceof su&&Wo.setSkill(e);const t=new URL(location.href);t.searchParams.set("skill",e),history.replaceState(null,"",t)},e=>Uh.setEnabled(e),e=>{Tn.effectsEnabled=e},()=>{Wo.update(0,cn,cn.players[cn.viewPlayerId])},e=>Ui.customize(e));window.addEventListener("keydown",e=>{e.target instanceof HTMLElement&&(e.target.isContentEditable||e.target.closest("input, textarea, select, button"))||(e.code==="Backquote"&&(Tn.debug=!Tn.debug,Xo.setDebug(Tn.debug)),!Ui.isClient&&e.code==="KeyR"&&!e.repeat&&cn.restart())});let Pp=performance.now(),xa=0;const PS=50;let Cl=0;function qo(e){const t=Math.min(.1,Math.max(0,e-Math.max(Pp,Cl))/1e3);if(Pp=e,e<Cl){requestAnimationFrame(qo);return}if(Rp.update(),Rp.paused){xa=0,Tn.update(0,e/1e3),Tn.render(),requestAnimationFrame(qo);return}xa+=t;let n=!1;for(;xa>=Po;){Ui.isClient||cn.update(Po),Ui.tick(Po),xa-=Po;const i=cn.drainEvents();Ui.record(i);for(const s of i)Xo.onEvent(s),Tn.onEvent(s),Uh.onEvent(s,cn.players[cn.viewPlayerId].side),!Ui.online&&Tn.motionEffects&&s.kind==="hit"&&s.type==="spike"&&(n=!0);if(n){Cl=performance.now()+PS,xa=0;break}}for(const i of Ui.render(e))Xo.onEvent(i),Tn.onEvent(i),Uh.onEvent(i,cn.players[cn.viewPlayerId].side);Xo.update(cn,n?0:t),Tn.update(n?0:t,e/1e3),RS.update(n?0:t),Tn.render(),requestAnimationFrame(qo)}requestAnimationFrame(qo);
