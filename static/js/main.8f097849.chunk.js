(this.webpackJsonpmodule2=this.webpackJsonpmodule2||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),l=n.n(r),c=n(3),u=n(4),i=n(5),d=n(6),s=function(e){var t=e.good,n=e.neutral,r=e.bad;return o.a.createElement(a.Fragment,null,o.a.createElement("button",{type:"button",onClick:t},"good"),o.a.createElement("button",{type:"button",onClick:n},"neutral"),o.a.createElement("button",{type:"button",onClick:r},"bad"))},b=function(e){var t=e.good,n=e.neutral,r=e.bad,l=e.countPositiveFeedbackPercentage,c=e.countTotalFeedback;return o.a.createElement(a.Fragment,null,o.a.createElement("p",null,"Good: ",t),o.a.createElement("p",null,"Neutral: ",n),o.a.createElement("p",null,"Bad: ",r),o.a.createElement("p",null,"Total: ",c()),0!==c()&&o.a.createElement("p",null,"Positive feedback:",l().toFixed(2)))};b.defaultProps={good:0,neutral:0,bad:0};var m=b,f=function(e){var t=e.title,n=e.children;return o.a.createElement("section",null,o.a.createElement("h1",null,t),n)};f.defaultProps={title:"Section"};var g=f,v=function(e){var t=e.message;return o.a.createElement(a.Fragment,null,o.a.createElement("h1",null,t))};v.defaultProps={message:"No feedback given"};var E=v,k=function(e){Object(d.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={good:0,neutral:0,bad:0},e.good=function(){e.setState((function(e){return{good:e.good+1}}))},e.neutral=function(){e.setState((function(e){return{neutral:e.neutral+1}}))},e.bad=function(){e.setState((function(e){return{bad:e.bad+1}}))},e.countPositiveFeedbackPercentage=function(){return 100/e.countTotalFeedback()*e.state.good},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return o.a.createElement("div",null,o.a.createElement(g,{title:"Please leave feedback"},o.a.createElement(s,{good:this.good,neutral:this.neutral,bad:this.bad})),0===this.countTotalFeedback()&&o.a.createElement(E,{message:"No feedback given"}),this.countTotalFeedback()>0&&o.a.createElement(g,{title:"Statistics"},o.a.createElement(m,{good:t,neutral:n,bad:a,countPositiveFeedbackPercentage:this.countPositiveFeedbackPercentage,countTotalFeedback:this.countTotalFeedback})))}}]),n}(a.Component),p=function(){return o.a.createElement("div",null,o.a.createElement(k,null))};l.a.render(o.a.createElement(p,null),document.querySelector("#root"))},7:function(e,t,n){e.exports=n(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.8f097849.chunk.js.map