import{_ as S}from"./iframe-e543ea1c.js";import"../sb-preview/runtime.js";var o="storybook/a11y",T=`${o}/result`,N=`${o}/request`,U=`${o}/running`,w=`${o}/error`,y=`${o}/manual`,a={RESULT:T,REQUEST:N,RUNNING:U,ERROR:w,MANUAL:y};const{global:L}=__STORYBOOK_MODULE_GLOBAL__,{addons:d}=__STORYBOOK_MODULE_PREVIEW_API__;var{document:f,window:g}=L,n=d.getChannel(),r=!1,_,A=async t=>{let{manual:e}=await O(t);e||await l(t)},l=async t=>{_=t;try{let e=await O(t);if(!r){r=!0,n.emit(a.RUNNING);let i=(await S(()=>import("./axe-12af4522.js").then(s=>s.a),["assets/axe-12af4522.js","assets/_commonjsHelpers-725317a4.js"])).default,{element:u="#storybook-root",config:R,options:c={}}=e,E=f.querySelector(u);if(!E)return;i.reset(),R&&i.configure(R);let m=await i.run(E,c);_===t?n.emit(a.RESULT,m):(r=!1,l(_))}}catch(e){n.emit(a.ERROR,e)}finally{r=!1}},O=async t=>{let{parameters:e}=await g.__STORYBOOK_STORY_STORE__.loadStory({storyId:t})||{};return e.a11y||{config:{},options:{}}};n.on(a.REQUEST,A);n.on(a.MANUAL,l);
//# sourceMappingURL=preview-7391045e.js.map
