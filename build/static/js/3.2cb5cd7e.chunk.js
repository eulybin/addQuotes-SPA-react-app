(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{47:function(e,t,c){e.exports={comments:"Comments_comments__iZX-v"}},48:function(e,t,c){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},49:function(e,t,c){e.exports={item:"CommentItem_item__24mbD"}},50:function(e,t,c){e.exports={comments:"CommentsList_comments__valp0"}},51:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},52:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(8),o=c(21),a=c(1),m=c(47),r=c.n(m),j=c(19),i=c(20),d=c(14),l=c(48),u=c.n(l),b=c(0),x=function(e){var t=Object(a.useRef)(),c=Object(j.a)(i.a),n=c.sendRequest,s=c.status,o=c.error,m=e.onAddedComment;Object(a.useEffect)((function(){"completed"!==s||o||m()}),[s,o,m]);var r=function(c){c.preventDefault();var s=t.current.value;n({commentData:{text:s},quoteId:e.quoteId})};return Object(b.jsxs)("form",{className:u.a.form,onSubmit:r,children:["pending"===s&&Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(d.a,{})}),Object(b.jsxs)("div",{className:u.a.control,onSubmit:r,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(b.jsx)("div",{className:u.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},O=c(49),h=c.n(O),f=function(e){return Object(b.jsx)("li",{className:h.a.item,children:Object(b.jsx)("p",{children:e.text})})},p=c(50),_=c.n(p),N=function(e){return Object(b.jsx)("ul",{className:_.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(f,{text:e.text},e.id)}))})},v=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1],m=Object(n.j)().quoteId,l=Object(j.a)(i.c),u=l.sendRequest,O=l.status,h=l.data;Object(a.useEffect)((function(){u(m)}),[m,u]);var f,p=Object(a.useCallback)((function(){u(m)}),[u,m]);return"pending"===O&&(f=Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(d.a,{})})),"completed"===O&&h&&h.length>0&&(f=Object(b.jsx)(N,{comments:h})),"completed"!==O||h&&0!==h.length||(f=Object(b.jsx)("p",{className:"centered",children:"No comments were added yet!"})),Object(b.jsxs)("section",{className:r.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!c&&Object(b.jsx)("button",{className:"btn",onClick:function(){s(!0)},children:"Add a Comment"}),c&&Object(b.jsx)(x,{quoteId:m,onAddedComment:p}),f]})},C=c(51),g=c.n(C),q=function(e){return Object(b.jsxs)("figure",{className:g.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(n.j)(),t=Object(n.k)(),c=e.quoteId,o=Object(j.a)(i.e),m=o.sendRequest,r=o.status,l=o.data,u=o.error;return Object(a.useEffect)((function(){m(c)}),[m,c]),"pending"===r?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(d.a,{})}):u?Object(b.jsx)("p",{className:"centered",children:u}):l?Object(b.jsxs)("div",{children:[Object(b.jsx)(q,{author:l.author,text:l.text}),Object(b.jsx)(n.c,{path:t.path,exact:!0,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(s.b,{className:"btn--flat",to:"".concat(t.url,"/comments"),children:"Load Comments"})})}),Object(b.jsx)(n.c,{path:"".concat(t.path,"/comments"),children:Object(b.jsx)(v,{})})]}):Object(b.jsx)("p",{children:"Quote was not found!"})}}}]);
//# sourceMappingURL=3.2cb5cd7e.chunk.js.map