"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[889],{4889:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,i,a,o,l,s,c,d,u,p=t(2791),x=t(9434),f=t(4270),m=t(9439),h=t(168),b=t(6088),g=b.Z.form(r||(r=(0,h.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\nmargin-bottom: 20px;\n"]))),v=b.Z.label(i||(i=(0,h.Z)(["\n  display: block;\n  margin-bottom: 5px;\n  align-items: center;\n  font-size: 20px;\n  text-align: left;\n  width: 30%;\n"]))),Z=b.Z.input(a||(a=(0,h.Z)(["\n  display: block;\n  margin-bottom: 20px;\n  padding: 15px;\n  width: 30%;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 15px;\n\n  &:focus,\n  &:hover {\n   border: 3px solid #1976d2;\n   outline: inherit;\n"]))),j=t(3736),y=t(3634),k=function(n){return n.contacts.items},w=function(n){return n.contacts.isLoading},C=function(n){return n.filter.filter},z=t(184),A=function(){var n=(0,x.I0)(),e=(0,x.v9)(k),t=(0,p.useState)(""),r=(0,m.Z)(t,2),i=r[0],a=r[1],o=(0,p.useState)(""),l=(0,m.Z)(o,2),s=l[0],c=l[1],d=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":a(r);break;case"number":c(r);break;default:return}},u=function(){a(""),c("")};return(0,z.jsxs)(g,{onSubmit:function(t){t.preventDefault();var r={name:i,number:s};e.find((function(n){return n.name===i||n.number===s}))?alert("".concat(i," is already in contacts.")):(n((0,y.uK)(r)),u())},children:[(0,z.jsx)(v,{children:" Name "}),(0,z.jsx)(Z,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name",value:i,onChange:d}),(0,z.jsx)(v,{children:"Number"}),(0,z.jsx)(Z,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter phone number",value:s,onChange:d}),(0,z.jsx)(j.Z,{variant:"contained",type:"submit",children:"Add contact"})]})},F=b.Z.ul(o||(o=(0,h.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\n"]))),E=b.Z.li(l||(l=(0,h.Z)(["\nmargin-bottom: 20px;\nlist-style: none;\n"]))),I=b.Z.button(s||(s=(0,h.Z)(["\ndisplay: inline-block;\nmargin-left: 10px;\npadding: 5px;\nbackground-color: #fff;\nfont-size: 14px;\nwidth: 70px;\nbox-shadow: 3px 6px 20px rgba(0.12, 0.12, 0.12, 0.12), \n1px 3px 4px rgba(0, 0, 0, 0.14), \n0px 0px 2px rgba(0, 0, 0, 0.2);\nborder-radius: 5px;\nborder: inherit;\ncursor: pointer;\n\n&:focus,\n&:hover {\n    border: 3px solid #1976d2;\n    outline: inherit;\n}\n"]))),N=function(){var n=(0,x.I0)(),e=(0,x.v9)(k),t=(0,x.v9)(C);(0,p.useEffect)((function(){n((0,y.yF)())}),[n]);return(0,z.jsx)(z.Fragment,{children:e.length>0&&(0,z.jsx)(F,{children:e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})).map((function(e,t){return(0,z.jsxs)(E,{children:[e.name,": ",e.number,(0,z.jsx)(I,{onClick:function(){return n((0,y.GK)(e.id))},children:"Delete"})]},t)}))})})},_=t(4808),q=b.Z.div(c||(c=(0,h.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\ntext-align: left;\n"]))),L=b.Z.label(d||(d=(0,h.Z)(["\ndisplay: block;\nalign-items: center;\n  font-size: 20px;\n  text-align: left;\n  width: 30%;\n  margin-bottom: 5px;\n"]))),S=b.Z.input(u||(u=(0,h.Z)(["\n  display: block;\n  padding: 15px;\n  width: 30%;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 15px;\n\n  &:focus,\n  &:hover {\n   border: 3px solid #1976d2;\n   outline: inherit;\n"]))),D=function(){var n=(0,x.I0)(),e=(0,x.v9)(C);return(0,z.jsxs)(q,{children:[(0,z.jsx)(L,{children:"Find contacts by Name "}),(0,z.jsx)(S,{type:"text",name:"filter",placeholder:"Enter filter",value:e,onChange:function(e){var t=e.target.value;n((0,_.T)(t))}})]})},K=t(7275);function P(){var n=(0,x.I0)(),e=(0,x.v9)(w);return(0,p.useEffect)((function(){n((0,y.yF)())}),[n]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(f.q,{children:(0,z.jsx)("title",{children:"Phonebook"})}),(0,z.jsx)(A,{}),(0,z.jsx)("div",{children:e&&(0,z.jsx)(K.a,{})}),(0,z.jsx)(D,{}),(0,z.jsx)(N,{})]})}}}]);
//# sourceMappingURL=889.27be1756.chunk.js.map