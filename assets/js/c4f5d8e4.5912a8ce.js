"use strict";(self.webpackChunkkirin_lemon=self.webpackChunkkirin_lemon||[]).push([[195],{4875:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=n(7294),a=n(6010),l=n(2600),i=(n(9960),n(2263)),o="heroBanner_qdFl",c="profile_wXhA",u="features_WV7z",s=n(7462),m=n(2389),p=n(5979),d="tabItem_LplD";function v(e){var t,n,l,i=e.lazy,o=e.block,c=e.defaultValue,u=e.values,m=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=u?u:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),E=(0,p.lx)(h,(function(e,t){return e.value===t.value}));if(E.length>0)throw new Error('Docusaurus error: Duplicate values "'+E.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,p.UB)(),k=b.tabGroupChoices,w=b.setTabGroupChoices,N=(0,r.useState)(g),_=N[0],y=N[1],L=[],C=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=k[m];null!=T&&T!==_&&h.some((function(e){return e.value===T}))&&y(T)}var Z=function(e){var t=e.currentTarget,n=L.indexOf(t),r=h[n].value;r!==_&&(C(t),y(r),null!=m&&w(m,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=L.indexOf(e.currentTarget)+1;n=L[r]||L[0];break;case"ArrowLeft":var a=L.indexOf(e.currentTarget)-1;n=L[a]||L[L.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},v)},h.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,s.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return L.push(e)},onKeyDown:j,onFocus:Z,onClick:Z},l,{className:(0,a.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function f(e){var t=(0,m.Z)();return r.createElement(v,(0,s.Z)({key:String(t)},e))}function h(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}var E="container_u06u",g="previewContainer_bfGy",b="preview_XB8J",k="contents_kfgj",w="description_yLtU",N="titleContainer_SM2V",_="linkContainer_WpUv",y="links_zTkp",L="stacks_mVZG",C=function(e){var t=e.title,n=e.description,a=e.img,l=e.codeLink,i=e.liveLink,o=e.report,c=e.stack;return r.createElement("section",{className:E},r.createElement("div",{className:g},a?r.createElement("img",{className:b,src:a,alt:"project img"}):r.createElement(r.Fragment,null)),r.createElement("div",{className:k},r.createElement("div",{className:N},r.createElement("h4",null,t)),r.createElement("div",null,n?r.createElement("span",{className:w},n):r.createElement(r.Fragment,null)),r.createElement("div",{className:_},l?r.createElement("a",{href:l,target:"_blank",rel:"nofollow noreferer noopener",className:y},"code"):r.createElement(r.Fragment,null),i?r.createElement("a",{href:i,target:"_blank",rel:"nofollow noreferer noopener",className:y},"live"):r.createElement(r.Fragment,null),o?r.createElement("a",{href:o,className:y},"report"):r.createElement(r.Fragment,null)),r.createElement("div",null,c.map((function(e){return r.createElement("span",{className:L},e)})))))},T=[{title:"\uc624\ub298\ubb50\ud558\uc9c0?",description:"React Native \uae30\ubc18 \uba54\ubaa8\uc7a5",img:"img/onulmohaji.png",codeLink:"https://github.com/rewrite0w0/onulmohaji",liveLink:"https://play.google.com/store/apps/details?id=com.react_native_todo_list",report:"onulmohaji",stack:["React-Native"]},{title:"\uba54\uc77c\uc8fc\ubb38\ud504\ub85c\uadf8\ub7a8",description:"\ub124\uc774\ubc84 \uc2a4\ub9c8\ud2b8 \uc2a4\ud1a0\uc5b4 \ud398\uc774\uc9c0 \ubcd1\uc6a9 \ud504\ub85c\uadf8\ub7a8",img:"img/mailOrder.png",codeLink:"",liveLink:"https://mail-order.herokuapp.com/",report:"mail-order",stack:["React","Express","Heroku"]},{title:"\uace0\uc7a5\ub0ac\ub2e8\ub9c8\ub9ac\uc624",description:"\ubc30\uad00 \uc774\uc0c1 \uac80\ucd9c \ubaa9\uc801 \uc6d0\uaca9 \uc870\uc885 \ud0d0\uc0ac\ub85c\ubd07",img:"img/mario.png",codeLink:"",liveLink:"https://www.youtube.com/watch?v=6vx_JwwLTXQ",report:"mario",stack:["ROS/kinetic","C/C++","Raspberry Pi","OpenGL"]},{title:"\ud3ec\ud2b8\ud3f4\ub9ac\uc624",description:"\ud3ec\ud2b8\ud3f4\ub9ac\uc624",img:"img/rw.png",codeLink:"https://github.com/rewrite0w0/kirin-lemon",liveLink:"https://rewrite0w0.github.io/kirin-lemon",report:"",stack:["React"]}],Z=function(){return r.createElement(f,null,r.createElement(h,{value:"project",label:"Project",default:!0},T.map((function(e,t){return r.createElement(C,(0,s.Z)({key:t},e))}))))};function j(){return r.createElement("section",{className:u},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--offset-2 col-4"},r.createElement(Z,null)))))}function x(){var e=(0,i.Z)().siteConfig;return r.createElement("header",{className:(0,a.Z)("hero",o)},r.createElement("div",{className:"container"},r.createElement("img",{className:c,src:"img/rw.png"}),r.createElement("h1",{className:"hero__title"},e.title),r.createElement("p",{className:"hero__subtitle"},e.tagline)))}function R(){var e=(0,i.Z)().siteConfig;return r.createElement(l.Z,{title:""+e.title,description:"rewrite0w0's Portfoilo"},r.createElement(x,null),r.createElement("main",null,r.createElement(j,null)))}}}]);