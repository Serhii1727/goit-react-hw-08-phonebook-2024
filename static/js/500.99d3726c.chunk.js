"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[500],{7500:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(9439),r=n(2791),s=n(4420),c=n(2946),o=n(3634),u="ContactForm_form__dhl+T",i="ContactForm_label__-cVXI",l="ContactForm_label__name__VZfQ+",m="ContactForm_input__Bl93P",d="ContactForm_button__eSwX9",f=n(184);function h(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],h=t[1],p=(0,r.useState)(""),_=(0,a.Z)(p,2),b=_[0],C=_[1],N=(0,s.v9)(c.Af).contacts,v=(0,s.I0)(),x=function(e){var t=e.currentTarget,n=t.name,a=t.value;"name"===n&&h(a),"number"===n&&C(a)},A=function(){h(""),C("")};return(0,f.jsxs)("form",{className:u,onSubmit:function(e){if(e.preventDefault(),N.items.some((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return A(),void alert("".concat(n," is already in contacts"));v((0,o.uK)({name:n,number:b})),A()},children:[(0,f.jsxs)("label",{className:i,children:[(0,f.jsx)("span",{className:l,children:"Name"}),(0,f.jsx)("input",{onChange:x,className:m,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,f.jsxs)("label",{className:i,children:[(0,f.jsx)("span",{className:l,children:"Number"}),(0,f.jsx)("input",{onChange:x,className:m,type:"tel",name:"number",value:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,f.jsx)("button",{type:"submit",className:d,children:"Add contact"})]})}},2946:function(e,t,n){n.d(t,{AD:function(){return c},Af:function(){return a},NH:function(){return r},zh:function(){return s}});var a=function(e){return e.contacts},r=function(e){return e.contacts.contacts.isLoading},s=function(e){return e.contacts.contacts.error},c=function(e){return e.filter}}}]);
//# sourceMappingURL=500.99d3726c.chunk.js.map