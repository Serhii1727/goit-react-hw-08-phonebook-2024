"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[500],{7500:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(9439),r=n(2791),s=n(4420),c=n(6351),o=n(208),u="ContactForm_form__dhl+T",i="ContactForm_label__-cVXI",l="ContactForm_label__name__VZfQ+",m="ContactForm_input__Bl93P",d="ContactForm_button__eSwX9",f=n(2276),h=n(184);function p(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],p=t[1],_=(0,r.useState)(""),b=(0,a.Z)(_,2),C=b[0],N=b[1],x=(0,s.v9)(c.Af).contacts,v=(0,s.I0)(),A=function(e){var t=e.currentTarget,n=t.name,a=t.value;"name"===n&&p(a),"number"===n&&N(a)},j=function(){p(""),N("")};return(0,h.jsxs)("form",{className:u,onSubmit:function(e){if(e.preventDefault(),x.items.some((function(e){return e.name.toLowerCase()===n.toLowerCase()})))return j(),void alert("".concat(n," is already in contacts"));v((0,o.uK)({name:n,phone:C,id:(0,f.x0)()})),j()},children:[(0,h.jsxs)("label",{className:i,children:[(0,h.jsx)("span",{className:l,children:"Name"}),(0,h.jsx)("input",{onChange:A,className:m,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,h.jsxs)("label",{className:i,children:[(0,h.jsx)("span",{className:l,children:"Number"}),(0,h.jsx)("input",{onChange:A,className:m,type:"tel",name:"number",value:C,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)("button",{type:"submit",className:d,children:"Add contact"})]})}},6351:function(e,t,n){n.d(t,{AD:function(){return c},Af:function(){return a},NH:function(){return r},zh:function(){return s}});var a=function(e){return e.contacts},r=function(e){return e.contacts.contacts.isLoading},s=function(e){return e.contacts.contacts.error},c=function(e){return e.filter}}}]);
//# sourceMappingURL=500.63f77a45.chunk.js.map