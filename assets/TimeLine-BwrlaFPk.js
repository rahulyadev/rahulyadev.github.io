import{u as U,d as K,e as W,Q as w,f as J}from"./QIcon-B8wuntiH.js";import{R as G}from"./Ripple-BfHAkxqZ.js";import{u as ee,a as te}from"./SectionDetails-n7MLiiIT.js";import{l as ne,c as Y,h as _,g as re,D as ae,a4 as R,a5 as L,a6 as se,d as oe,_ as ie,H as v,K as p,F as z,L as F,O as D,f as b,Q as S,P as ce,J as ue}from"./index-Dd2Ea2xh.js";import{I as le}from"./ImageView-BGgqgsSG.js";const de={xs:8,sm:10,md:14,lg:20,xl:24},he=ne({name:"QChip",props:{...ee,...U,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:t,emit:a}){const{proxy:{$q:n}}=re(),s=te(e,n),r=K(e,de),u=Y(()=>e.selected===!0||e.icon!==void 0),o=Y(()=>e.selected===!0?e.iconSelected||n.iconSet.chip.selected:e.icon),c=Y(()=>e.iconRemove||n.iconSet.chip.remove),y=Y(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),i=Y(()=>{const d=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(d?` text-${d} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(y.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(s.value===!0?" q-chip--dark q-dark":"")}),l=Y(()=>{const d=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},$={...d,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||n.lang.label.remove};return{chip:d,remove:$}});function M(d){d.keyCode===13&&f(d)}function f(d){e.disable||(a("update:selected",!e.selected),a("click",d))}function m(d){(d.keyCode===void 0||d.keyCode===13)&&(ae(d),e.disable===!1&&(a("update:modelValue",!1),a("remove")))}function X(){const d=[];y.value===!0&&d.push(_("div",{class:"q-focus-helper"})),u.value===!0&&d.push(_(w,{class:"q-chip__icon q-chip__icon--left",name:o.value}));const $=e.label!==void 0?[_("div",{class:"ellipsis"},[e.label])]:void 0;return d.push(_("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},J(t.default,$))),e.iconRight&&d.push(_(w,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&d.push(_(w,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:c.value,...l.value.remove,onClick:m,onKeyup:m})),d}return()=>{if(e.modelValue===!1)return;const d={class:i.value,style:r.value};return y.value===!0&&Object.assign(d,l.value.chip,{onClick:f,onKeyup:M}),W("div",d,X(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[G,e.ripple]])}}});function fe(e){return e.charAt(0).toUpperCase()+e.slice(1)}function h(e,t=2,a="0"){if(e==null)return e;const n=""+e;return n.length>=t?n:new Array(t-n.length+1).join(a)+n}const B=864e5,me=36e5,q=6e4,Q="YYYY-MM-DDTHH:mm:ss.SSSZ",ge=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,De=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,I={};function ye(e,t){const a="("+t.days.join("|")+")",n=e+a;if(I[n]!==void 0)return I[n];const s="("+t.daysShort.join("|")+")",r="("+t.months.join("|")+")",u="("+t.monthsShort.join("|")+")",o={};let c=0;const y=e.replace(De,l=>{switch(c++,l){case"YY":return o.YY=c,"(-?\\d{1,2})";case"YYYY":return o.YYYY=c,"(-?\\d{1,4})";case"M":return o.M=c,"(\\d{1,2})";case"MM":return o.M=c,"(\\d{2})";case"MMM":return o.MMM=c,u;case"MMMM":return o.MMMM=c,r;case"D":return o.D=c,"(\\d{1,2})";case"Do":return o.D=c++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return o.D=c,"(\\d{2})";case"H":return o.H=c,"(\\d{1,2})";case"HH":return o.H=c,"(\\d{2})";case"h":return o.h=c,"(\\d{1,2})";case"hh":return o.h=c,"(\\d{2})";case"m":return o.m=c,"(\\d{1,2})";case"mm":return o.m=c,"(\\d{2})";case"s":return o.s=c,"(\\d{1,2})";case"ss":return o.s=c,"(\\d{2})";case"S":return o.S=c,"(\\d{1})";case"SS":return o.S=c,"(\\d{2})";case"SSS":return o.S=c,"(\\d{3})";case"A":return o.A=c,"(AM|PM)";case"a":return o.a=c,"(am|pm)";case"aa":return o.aa=c,"(a\\.m\\.|p\\.m\\.)";case"ddd":return s;case"dddd":return a;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return o.Z=c,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return o.ZZ=c,"(Z|[+-]\\d{2}\\d{2})";case"X":return o.X=c,"(-?\\d+)";case"x":return o.x=c,"(-?\\d{4,})";default:return c--,l[0]==="["&&(l=l.substring(1,l.length-1)),l.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),i={map:o,regex:new RegExp("^"+y)};return I[n]=i,i}function E(e,t){return e!==void 0?e:t!==void 0?t.date:se.date}function Z(e,t=""){const a=e>0?"-":"+",n=Math.abs(e),s=Math.floor(n/60),r=n%60;return a+h(s)+t+h(r)}function Me(e,t,a){let n=e.getFullYear(),s=e.getMonth();const r=e.getDate();return t.year!==void 0&&(n+=a*t.year,delete t.year),t.month!==void 0&&(s+=a*t.month,delete t.month),e.setDate(1),e.setMonth(2),e.setFullYear(n),e.setMonth(s),e.setDate(Math.min(r,C(e))),t.date!==void 0&&(e.setDate(e.getDate()+a*t.date),delete t.date),e}function ve(e,t,a){const n=t.year!==void 0?t.year:e[`get${a}FullYear`](),s=t.month!==void 0?t.month-1:e[`get${a}Month`](),r=new Date(n,s+1,0).getDate(),u=Math.min(r,t.date!==void 0?t.date:e[`get${a}Date`]());return e[`set${a}Date`](1),e[`set${a}Month`](2),e[`set${a}FullYear`](n),e[`set${a}Month`](s),e[`set${a}Date`](u),delete t.year,delete t.month,delete t.date,e}function T(e,t,a){const n=j(t),s=new Date(e),r=n.year!==void 0||n.month!==void 0||n.date!==void 0?Me(s,n,a):s;for(const u in n){const o=fe(u);r[`set${o}`](r[`get${o}`]()+a*n[u])}return r}function j(e){const t={...e};return e.years!==void 0&&(t.year=e.years,delete t.years),e.months!==void 0&&(t.month=e.months,delete t.months),e.days!==void 0&&(t.date=e.days,delete t.days),e.day!==void 0&&(t.date=e.day,delete t.day),e.hour!==void 0&&(t.hours=e.hour,delete t.hour),e.minute!==void 0&&(t.minutes=e.minute,delete t.minute),e.second!==void 0&&(t.seconds=e.second,delete t.second),e.millisecond!==void 0&&(t.milliseconds=e.millisecond,delete t.millisecond),t}function V(e,t,a){const n=j(t),s=a===!0?"UTC":"",r=new Date(e),u=n.year!==void 0||n.month!==void 0||n.date!==void 0?ve(r,n,s):r;for(const o in n){const c=o.charAt(0).toUpperCase()+o.slice(1);u[`set${s}${c}`](n[o])}return u}function pe(e,t,a){const n=Ye(e,t,a),s=new Date(n.year,n.month===null?null:n.month-1,n.day===null?1:n.day,n.hour,n.minute,n.second,n.millisecond),r=s.getTimezoneOffset();return n.timezoneOffset===null||n.timezoneOffset===r?s:T(s,{minutes:n.timezoneOffset-r},1)}function Ye(e,t,a,n,s){const r={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(e==null||e===""||typeof e!="string")return r;t===void 0&&(t=Q);const u=E(a,R.props),o=u.months,c=u.monthsShort,{regex:y,map:i}=ye(t,u),l=e.match(y);if(l===null)return r;let M="";if(i.X!==void 0||i.x!==void 0){const f=parseInt(l[i.X!==void 0?i.X:i.x],10);if(isNaN(f)===!0||f<0)return r;const m=new Date(f*(i.X!==void 0?1e3:1));r.year=m.getFullYear(),r.month=m.getMonth()+1,r.day=m.getDate(),r.hour=m.getHours(),r.minute=m.getMinutes(),r.second=m.getSeconds(),r.millisecond=m.getMilliseconds()}else{if(i.YYYY!==void 0)r.year=parseInt(l[i.YYYY],10);else if(i.YY!==void 0){const f=parseInt(l[i.YY],10);r.year=f<0?f:2e3+f}if(i.M!==void 0){if(r.month=parseInt(l[i.M],10),r.month<1||r.month>12)return r}else i.MMM!==void 0?r.month=c.indexOf(l[i.MMM])+1:i.MMMM!==void 0&&(r.month=o.indexOf(l[i.MMMM])+1);if(i.D!==void 0){if(r.day=parseInt(l[i.D],10),r.year===null||r.month===null||r.day<1)return r;const f=new Date(r.year,r.month,0).getDate();if(r.day>f)return r}i.H!==void 0?r.hour=parseInt(l[i.H],10)%24:i.h!==void 0&&(r.hour=parseInt(l[i.h],10)%12,(i.A&&l[i.A]==="PM"||i.a&&l[i.a]==="pm"||i.aa&&l[i.aa]==="p.m.")&&(r.hour+=12),r.hour=r.hour%24),i.m!==void 0&&(r.minute=parseInt(l[i.m],10)%60),i.s!==void 0&&(r.second=parseInt(l[i.s],10)%60),i.S!==void 0&&(r.millisecond=parseInt(l[i.S],10)*10**(3-l[i.S].length)),(i.Z!==void 0||i.ZZ!==void 0)&&(M=i.Z!==void 0?l[i.Z].replace(":",""):l[i.ZZ],r.timezoneOffset=(M[0]==="+"?-1:1)*(60*M.slice(1,3)+1*M.slice(3,5)))}return r.dateHash=h(r.year,6)+"/"+h(r.month)+"/"+h(r.day),r.timeHash=h(r.hour)+":"+h(r.minute)+":"+h(r.second)+M,r}function _e(e){return typeof e=="number"?!0:isNaN(Date.parse(e))===!1}function Se(e,t){return V(new Date,e,t)}function we(e){const t=new Date(e).getDay();return t===0?7:t}function k(e){const t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);const a=new Date(t.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);const n=t.getTimezoneOffset()-a.getTimezoneOffset();t.setHours(t.getHours()-n);const s=(t-a)/(B*7);return 1+Math.floor(s)}function be(e){return e.getFullYear()*1e4+e.getMonth()*100+e.getDate()}function H(e,t){const a=new Date(e);return t===!0?be(a):a.getTime()}function xe(e,t,a,n={}){const s=H(t,n.onlyDate),r=H(a,n.onlyDate),u=H(e,n.onlyDate);return(u>s||n.inclusiveFrom===!0&&u===s)&&(u<r||n.inclusiveTo===!0&&u===r)}function $e(e,t){return T(e,t,1)}function Ie(e,t){return T(e,t,-1)}function g(e,t,a){const n=new Date(e),s=`set${a===!0?"UTC":""}`;switch(t){case"year":case"years":n[`${s}Month`](0);case"month":case"months":n[`${s}Date`](1);case"day":case"days":case"date":n[`${s}Hours`](0);case"hour":case"hours":n[`${s}Minutes`](0);case"minute":case"minutes":n[`${s}Seconds`](0);case"second":case"seconds":n[`${s}Milliseconds`](0)}return n}function He(e,t,a){const n=new Date(e),s=`set${a===!0?"UTC":""}`;switch(t){case"year":case"years":n[`${s}Month`](11);case"month":case"months":n[`${s}Date`](C(n));case"day":case"days":case"date":n[`${s}Hours`](23);case"hour":case"hours":n[`${s}Minutes`](59);case"minute":case"minutes":n[`${s}Seconds`](59);case"second":case"seconds":n[`${s}Milliseconds`](999)}return n}function qe(e){let t=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(a=>{t=Math.max(t,new Date(a))}),t}function ke(e){let t=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(a=>{t=Math.min(t,new Date(a))}),t}function x(e,t,a){return(e.getTime()-e.getTimezoneOffset()*q-(t.getTime()-t.getTimezoneOffset()*q))/a}function P(e,t,a="days"){const n=new Date(e),s=new Date(t);switch(a){case"years":case"year":return n.getFullYear()-s.getFullYear();case"months":case"month":return(n.getFullYear()-s.getFullYear())*12+n.getMonth()-s.getMonth();case"days":case"day":case"date":return x(g(n,"day"),g(s,"day"),B);case"hours":case"hour":return x(g(n,"hour"),g(s,"hour"),me);case"minutes":case"minute":return x(g(n,"minute"),g(s,"minute"),q);case"seconds":case"second":return x(g(n,"second"),g(s,"second"),1e3)}}function O(e){return P(e,g(e,"year"),"days")+1}function Oe(e){return L(e)===!0?"date":typeof e=="number"?"number":"string"}function Te(e,t,a){const n=new Date(e);if(t){const s=new Date(t);if(n<s)return s}if(a){const s=new Date(a);if(n>s)return s}return n}function Ce(e,t,a){const n=new Date(e),s=new Date(t);if(a===void 0)return n.getTime()===s.getTime();switch(a){case"second":case"seconds":if(n.getSeconds()!==s.getSeconds())return!1;case"minute":case"minutes":if(n.getMinutes()!==s.getMinutes())return!1;case"hour":case"hours":if(n.getHours()!==s.getHours())return!1;case"day":case"days":case"date":if(n.getDate()!==s.getDate())return!1;case"month":case"months":if(n.getMonth()!==s.getMonth())return!1;case"year":case"years":if(n.getFullYear()!==s.getFullYear())return!1;break;default:throw new Error(`date isSameDate unknown unit ${a}`)}return!0}function C(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function A(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const N={YY(e,t,a){const n=this.YYYY(e,t,a)%100;return n>=0?h(n):"-"+h(Math.abs(n))},YYYY(e,t,a){return a??e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return h(e.getMonth()+1)},MMM(e,t){return t.monthsShort[e.getMonth()]},MMMM(e,t){return t.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return A(this.Q(e))},D(e){return e.getDate()},Do(e){return A(e.getDate())},DD(e){return h(e.getDate())},DDD(e){return O(e)},DDDD(e){return h(O(e),3)},d(e){return e.getDay()},dd(e,t){return this.dddd(e,t).slice(0,2)},ddd(e,t){return t.daysShort[e.getDay()]},dddd(e,t){return t.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return k(e)},ww(e){return h(k(e))},H(e){return e.getHours()},HH(e){return h(e.getHours())},h(e){const t=e.getHours();return t===0?12:t>12?t%12:t},hh(e){return h(this.h(e))},m(e){return e.getMinutes()},mm(e){return h(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return h(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return h(Math.floor(e.getMilliseconds()/10))},SSS(e){return h(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,t,a,n){const s=n??e.getTimezoneOffset();return Z(s,":")},ZZ(e,t,a,n){const s=n??e.getTimezoneOffset();return Z(s)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function ze(e,t,a,n,s){if(e!==0&&!e||e===1/0||e===-1/0)return;const r=new Date(e);if(isNaN(r))return;t===void 0&&(t=Q);const u=E(a,R.props);return t.replace(ge,(o,c)=>o in N?N[o](r,u,n,s):c===void 0?o:c.split("\\]").join("]"))}function Fe(e){return L(e)===!0?new Date(e.getTime()):e}const Ze={isValid:_e,extractDate:pe,buildDate:Se,getDayOfWeek:we,getWeekOfYear:k,isBetweenDates:xe,addToDate:$e,subtractFromDate:Ie,adjustDate:V,startOfDate:g,endOfDate:He,getMaxDate:qe,getMinDate:ke,getDateDiff:P,getDayOfYear:O,inferDateFormat:Oe,getDateBetween:Te,isSameDate:Ce,daysInMonth:C,formatDate:ze,clone:Fe},Ae=oe({__name:"TimeLine",props:{items:{}},setup(e,{expose:t}){t();const s={props:e,toReadableDate:r=>r?r==="Present"?r:Ze.formatDate(r,"MMM YYYY"):"",ImageView:le};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),Ne={class:"timeline"},Re={class:"col-auto"},Le={class:"col q-ml-md"},Be={class:"item-header items-center no-wrap"},Qe={class:"text-h6 text-weight-bold q-mb-xs q-mt-none",style:{"line-height":"23px"}},Ee={class:"text-normal text-grey-8 q-ml-md"},je={class:"text-grey-9"},Ve={class:"q-mt-md",style:{"margin-left":"-25px"}},Pe={key:0},Xe={key:1,class:"text-grey-8"},Ue={class:"timeline-item-tail"};function Ke(e,t,a,n,s,r){return v(),p("div",Ne,[(v(!0),p(z,null,F(n.props.items,u=>(v(),p("div",{key:u.id,class:"timeline-item row no-wrap"},[D("div",Re,[b(n.ImageView,{src:u.place.logoUrl,alt:"Rahul Yadav",size:40},null,8,["src"])]),D("div",Le,[D("div",Be,[D("div",Qe,S(u.title),1),D("div",Ee,[b(w,{name:"business",class:"q-mb-xs",size:"14px"}),ce(" "+S(u.place.name),1)]),b(he,{size:"12px",class:"bg-white",style:{"margin-left":"7px"}},{default:ue(()=>[b(w,{name:"event",color:"grey-9",class:"q-mr-xs"}),D("span",je,S(n.toReadableDate(u.period[0]))+" ➔ "+S(n.toReadableDate(u.period[1])),1)]),_:2},1024)]),D("div",Ve,[u.paragraph?(v(),p("p",Pe,S(u.description),1)):(v(),p("ul",Xe,[(v(!0),p(z,null,F(u.description,(o,c)=>(v(),p("li",{key:c,class:"q-mb-sm"},S(o),1))),128))]))])])]))),128)),D("div",Ue,[b(w,{name:"circle",size:"30px"})])])}const nt=ie(Ae,[["render",Ke],["__scopeId","data-v-6f58bfd3"],["__file","TimeLine.vue"]]);export{nt as T};
