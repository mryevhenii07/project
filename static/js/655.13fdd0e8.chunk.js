"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[655],{9315:function(e,r,a){a.d(r,{BT:function(){return i},EC:function(){return s},cC:function(){return l}});var n=a(4569),t=a.n(n),o="https://frontend-test-assignment-api.abz.agency/api/v1/";function i(e){return t().get("".concat(o,"users?page=1&count=").concat(e)).then((function(e){return e.data.users}))}function s(){return t().get("".concat(o,"token")).then((function(e){return e.data.token}))}function l(){return t().get("".concat(o,"positions")).then((function(e){return e.data.positions}))}},5655:function(e,r,a){a.r(r),a.d(r,{default:function(){return w}});var n=a(1413),t=a(885),o=a(2791),i=a(8995),s=a(9434),l=a(4624),m=a(747),u=a(2475),c=a(7263),d=a(9315),h=(a(9141),"Form_wrapForm__cCIXo"),_="Form_formMainTitle__WdEtV",p="Form_form__wD8nW",f="Form_formLabel__cgr2s",v="Form_formInputYourName__EdOF9",x="Form_formInputEmail__dmmjM",g="Form_formInputPhone__w+xKa",j="Form_wrapError__sz2h0",N="Form_error__VktGR",F="Form_noError__xZuP+",Z="Form_selectPosition__XytPK",X="Form_formRadio__8sF-u",b="Form_wrapBtnTextarea__xxewK",y="Form_formBtn__zbj6L",C="Form_formTextarea__te59x",E="Form_wrapFormSubmit__kjBsF",S="Form_formSubmit__9C1g3",q="Form_actFormSubmit__EsnXC",k=a(184),w=function(){var e,r,a,w=(0,o.useState)(""),I=(0,t.Z)(w,2),R=I[0],L=I[1],M=(0,o.useState)(""),P=(0,t.Z)(M,2),T=(P[0],P[1],(0,o.useState)("")),B=(0,t.Z)(T,2),z=B[0],A=B[1],K=(0,o.useState)([]),V=(0,t.Z)(K,2),W=V[0],O=V[1];(0,o.useEffect)((function(){(0,d.cC)().then(O),(0,d.EC)().then(A)}),[]),console.log(z);(0,s.I0)();var U=(0,i.cI)({mode:"onChange"}),Y=U.register,$=U.handleSubmit,D=(U.reset,U.formState),G=D.errors,H=D.isValid;return(0,k.jsxs)("div",{className:h,children:[(0,k.jsx)("h1",{className:_,children:"Working with POST request"}),(0,k.jsxs)("form",{onSubmit:$((function(e){var r=e.email,a=e.yourName,n=e.position_id,t=e.photo,o=e.phone;console.log(r,a,n,t,o)})),className:p,children:[(0,k.jsxs)("label",{htmlFor:"",className:f,children:[(0,k.jsx)(l.Z,(0,n.Z)((0,n.Z)({className:v},Y("yourName",{required:"Required field",minLength:{value:2,message:"Minimum 2 characters"},maxLength:{value:60,message:"Maximum 60 characters"}})),{},{id:"outlined-text-input",label:"Your name",autoComplete:"current-text",variant:"outlined"})),(0,k.jsx)("div",{className:j,children:(null===G||void 0===G?void 0:G.yourName)&&(0,k.jsx)("p",{className:N,children:(null===G||void 0===G||null===(e=G.yourName)||void 0===e?void 0:e.message)||"Error!"})})]}),(0,k.jsxs)("label",{htmlFor:"",className:f,children:[(0,k.jsx)(l.Z,(0,n.Z)((0,n.Z)({className:x,type:"email"},Y("email",{required:"Required field",minLength:{value:7,message:" Minimum 7 characters"},maxLength:{value:26,message:"Maximum 26 characters"},pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})),{},{id:"outlined-email-input",label:"Email",autoComplete:"current-email",variant:"outlined"})),(0,k.jsx)("div",{className:j,children:(null===G||void 0===G?void 0:G.email)&&(0,k.jsx)("p",{className:N,children:(null===G||void 0===G||null===(r=G.email)||void 0===r?void 0:r.message)||"errors"})})]}),(0,k.jsxs)("label",{htmlFor:"",className:f,children:[(0,k.jsx)(l.Z,(0,n.Z)((0,n.Z)({className:g,type:"phone"},Y("phone",{required:"Required field",pattern:{value:/^[+]{0,1}380[0-9]{9}$/i,message:"+38 (XXX) XXX-XX-XX"}})),{},{id:"outlined-phone-input",label:"Phone",autoComplete:"current-phone",variant:"outlined"})),(0,k.jsx)("div",{className:j,children:null!==G&&void 0!==G&&G.phone?(0,k.jsx)("p",{className:N,children:(null===G||void 0===G||null===(a=G.phone)||void 0===a?void 0:a.message)||"Error!"}):(0,k.jsx)("p",{className:F,children:"+38 (XXX) XXX-XX-XX"})})]}),(0,k.jsx)("p",{className:Z,children:"Select your position"}),(0,k.jsx)(u.Z,{"aria-label":"gender",name:"gender1",value:R,onChange:function(e){L(e.target.value)},children:W.map((function(e){var r=e.id,a=e.name;return(0,o.createElement)(c.Z,(0,n.Z)((0,n.Z)({},Y("position",{required:"Required field"})),{},{key:r,className:X,value:a,control:(0,k.jsx)(m.Z,{color:"secondary"}),label:a}))}))}),(0,k.jsxs)("div",{className:b,children:[(0,k.jsx)("button",{className:y,children:"Upload"}),(0,k.jsx)("input",(0,n.Z)((0,n.Z)({type:"file"},Y("photo",{required:"Required field"})),{},{className:C,placeholder:"Upload your photo"}))]}),(0,k.jsx)("div",{className:E,children:(0,k.jsx)("button",{type:"submit",className:"".concat(H?q:S),disabled:!H,children:"Sing up"})})]}),(0,k.jsx)("div",{})]})}}}]);
//# sourceMappingURL=655.13fdd0e8.chunk.js.map