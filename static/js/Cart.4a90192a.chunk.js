"use strict";(self.webpackChunkv2=self.webpackChunkv2||[]).push([[72],{7478:function(t,s,i){i.r(s),i.d(s,{default:function(){return d}});var e=i(8683),n=(i(2791),i(1087)),c=i(9434),r=i(553),a=i(184),l=function(t){var s=t.id,i=t.size,e=t.title,n=t.price,l=t.imageUrl,o=t.count,d=t.type,h=(0,c.I0)();return(0,a.jsxs)("div",{className:"cart__item",children:[(0,a.jsx)("img",{style:{width:80,height:80,marginRight:15},src:l,alt:""}),(0,a.jsxs)("div",{className:"cart__item-block",children:[(0,a.jsx)("h4",{className:"cart__item__title",children:e}),(0,a.jsxs)("b",{className:"cart__item__desc",children:[d,", ",i," \u0441\u043c."]})]}),(0,a.jsx)("button",{className:"btn__minus",disabled:1===o,onClick:function(){h((0,r.uz)(s))},style:{background:"none",border:"none"},children:(0,a.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("circle",{cx:"16",cy:"16",r:"15",fill:"white",stroke:"#FE5F1E",strokeWidth:"2"}),(0,a.jsx)("path",{d:"M15.0402 15.04H19.8402C20.3704 15.04 20.8002 15.4698 20.8002 16C20.8002 16.5302 20.3704 16.96 19.8402 16.96H15.0402H12.1602C11.63 16.96 11.2002 16.5302 11.2002 16C11.2002 15.4698 11.63 15.04 12.1602 15.04H15.0402Z",fill:"#FE5F1E"})]})}),(0,a.jsx)("span",{className:"cart__item-counter",children:o}),(0,a.jsx)("button",{onClick:function(){h((0,r.jX)({id:s}))},style:{background:"none",border:"none",marginRight:93},children:(0,a.jsx)("img",{src:"https://yuriytsyba.github.io/pizza-v2/img/plus.svg",alt:""})}),(0,a.jsxs)("span",{style:{marginRight:93},children:[n*o," $"]}),(0,a.jsx)("button",{onClick:function(){window.confirm("Are you sure you want to remove?")&&h((0,r.cl)(s))},style:{background:"none",border:"none"},children:(0,a.jsx)("img",{src:"https://yuriytsyba.github.io/pizza-v2/img/close.svg",alt:""})})]})},o=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"cart cart--empty",style:{textAlign:"center",display:"flex",flexDirection:"column",marginTop:50},children:[(0,a.jsx)("h2",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f"}),(0,a.jsx)("p",{style:{fontSize:20},children:"\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e ,\u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0435 \u043f\u0438\u0446\u0446\u0443."}),(0,a.jsx)("img",{width:300,height:300,style:{margin:"auto"},src:"https://yuriytsyba.github.io/pizza-v2/img/cart2.jpg",alt:"cart-img"}),(0,a.jsx)(n.rU,{to:"/",children:(0,a.jsxs)("button",{className:"cart__btn-back",children:[(0,a.jsx)("img",{style:{marginRight:10},src:"img/line.svg",alt:""}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})})]})})},d=function(){var t=(0,c.I0)(),s=(0,c.v9)(r.KY),i=s.totalPrice,d=s.items;return i?(0,a.jsxs)("div",{className:"cart",children:[(0,a.jsxs)("div",{className:"cart__top",children:[(0,a.jsx)("div",{children:(0,a.jsx)("h1",{className:"cart__name",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"})}),(0,a.jsx)("div",{onClick:function(){window.confirm("Are cart remove?")&&t((0,r.H5)())},children:(0,a.jsx)("span",{className:"cart__delete",children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})})]}),(0,a.jsx)("div",{className:"cart__items",children:d.map((function(t){return(0,a.jsx)(l,(0,e.Z)({},t),t.id)}))}),(0,a.jsxs)("div",{className:"cart__bottom",children:[(0,a.jsxs)("h6",{style:{fontSize:18},children:["\u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446:"," ",(0,a.jsx)("span",{style:{fontSize:26},children:d.reduce((function(t,s){return t+s.count}),0)})," ","\u0448\u0442."]}),(0,a.jsxs)("h6",{style:{fontSize:18},children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",(0,a.jsx)("span",{style:{color:"#FE5F1E",fontSize:26},children:i})," $"]})]}),(0,a.jsxs)("div",{className:"cart__bootom-btns",children:[(0,a.jsx)(n.rU,{to:"https://yuriytsyba.github.io/pizza-v2/",children:(0,a.jsxs)("button",{className:"cart__btn-back",children:[(0,a.jsx)("img",{style:{marginRight:10},src:"img/line.svg",alt:""}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})}),(0,a.jsx)("button",{className:"cart__btn-pay",children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"})]})]}):(0,a.jsx)(o,{})}}}]);
//# sourceMappingURL=Cart.4a90192a.chunk.js.map