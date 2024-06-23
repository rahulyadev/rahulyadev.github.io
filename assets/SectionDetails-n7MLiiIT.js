import{c as s,l as x,h as g,g as S,d as h,_ as k,H as d,K as m,O as p,Q as o,f as $,M as y,F as B}from"./index-Dd2Ea2xh.js";const b={dark:{type:Boolean,default:null}};function D(e,a){return s(()=>e.dark===null?a.dark.isActive:e.dark)}const q={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},c={xs:2,sm:4,md:8,lg:16,xl:24},z=x({name:"QSeparator",props:{...b,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const a=S(),t=D(e,a.proxy.$q),i=s(()=>e.vertical===!0?"vertical":"horizontal"),r=s(()=>` q-separator--${i.value}`),l=s(()=>e.inset!==!1?`${r.value}-${q[e.inset]}`:""),_=s(()=>`q-separator${r.value}${l.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(t.value===!0?" q-separator--dark":"")),f=s(()=>{const n={};if(e.size!==void 0&&(n[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const v=e.spaced===!0?`${c.md}px`:e.spaced in c?`${c[e.spaced]}px`:e.spaced,u=e.vertical===!0?["Left","Right"]:["Top","Bottom"];n[`margin${u[0]}`]=n[`margin${u[1]}`]=v}return n});return()=>g("hr",{class:_.value,style:f.value,"aria-orientation":i.value})}}),C=h({__name:"SectionDetails",props:{titleFirstPart:{},titleSecondPart:{default:""},description:{default:""}},setup(e,{expose:a}){a();const t={};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),P={class:"text-h4 text-dark text-bold text-uppercase"},F={key:0,class:"text-normal text-grey-7 text-justify"};function N(e,a,t,i,r,l){return d(),m(B,null,[p("div",P,o(t.titleFirstPart)+" "+o(t.titleSecondPart),1),$(z,{class:"q-mt-xs q-mb-sm",size:"2px",color:"accent",width:"60"}),t.description?(d(),m("p",F,o(t.description),1)):y("",!0)],64)}const V=k(C,[["render",N],["__file","SectionDetails.vue"]]);export{V as S,D as a,b as u};
