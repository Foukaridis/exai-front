import{v as m,j as t,e as P,f as y,s as B,aI as M,X as g,q as l,_ as s,h as _,r as u,k as R,l as S,m as H,t as E}from"./index-B0n4-GxW.js";const O=m(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),U=m(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),V=m(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function L(o){return y("MuiCheckbox",o)}const h=P("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),N=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],F=o=>{const{classes:e,indeterminate:c,color:a,size:r}=o,n={root:["root",c&&"indeterminate",`color${l(a)}`,`size${l(r)}`]},d=E(n,L,e);return s({},e,d)},q=B(M,{shouldForwardProp:o=>g(o)||o==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:c}=o;return[e.root,c.indeterminate&&e.indeterminate,e[`size${l(c.size)}`],c.color!=="default"&&e[`color${l(c.color)}`]]}})(({theme:o,ownerState:e})=>s({color:(o.vars||o).palette.text.secondary},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${e.color==="default"?o.vars.palette.action.activeChannel:o.vars.palette[e.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:_(e.color==="default"?o.palette.action.active:o.palette[e.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.color!=="default"&&{[`&.${h.checked}, &.${h.indeterminate}`]:{color:(o.vars||o).palette[e.color].main},[`&.${h.disabled}`]:{color:(o.vars||o).palette.action.disabled}})),T=t.jsx(U,{}),W=t.jsx(O,{}),X=t.jsx(V,{}),A=u.forwardRef(function(e,c){var a,r;const n=R({props:e,name:"MuiCheckbox"}),{checkedIcon:d=T,color:z="primary",icon:I=W,indeterminate:i=!1,indeterminateIcon:x=X,inputProps:b,size:p="medium",className:$}=n,j=S(n,N),k=i?x:I,C=i?x:d,v=s({},n,{color:z,indeterminate:i,size:p}),f=F(v);return t.jsx(q,s({type:"checkbox",inputProps:s({"data-indeterminate":i},b),icon:u.cloneElement(k,{fontSize:(a=k.props.fontSize)!=null?a:p}),checkedIcon:u.cloneElement(C,{fontSize:(r=C.props.fontSize)!=null?r:p}),ownerState:v,ref:c,className:H(f.root,$)},j,{classes:f}))});export{A as C};
