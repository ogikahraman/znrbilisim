(this.webpackJsonpznrbilisim=this.webpackJsonpznrbilisim||[]).push([[0],{15:function(e,a,t){e.exports=t(30)},20:function(e,a,t){},21:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(6),r=t.n(i),o=(t(20),t(9)),c=t.n(o),l=(t(21),t(10)),m=t(12),d=t.n(m),p=t(13),h=t.n(p);var u={fullScreen:{enable:!1},particles:{number:{value:150,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle"},opacity:{value:.5,random:!0},size:{value:4,random:!0},line_linked:{enable:!0,distance:150,color:"#00ccff",opacity:.4,width:1},move:{enable:!0,speed:2,direction:"none",out_mode:"out",bounce:!1}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:150,line_linked:{opacity:1}},push:{particles_nb:4}}},retina_detect:!0};var g={fullScreen:{enable:!1},particles:{number:{value:130,density:{enable:!0,value_area:800}},color:{value:"#000000"},shape:{type:"circle"},opacity:{value:.5,random:!0},size:{value:4,random:!0},line_linked:{enable:!0,distance:150,color:"#000000",opacity:.4,width:1},move:{enable:!0,speed:2,direction:"none",out_mode:"out",bounce:!1}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:150,line_linked:{opacity:1}},push:{particles_nb:4}}},retina_detect:!0};class f extends s.Component{constructor(){super(),this.titles=[],this.state={checked:!0},this.onThemeSwitchChange=this.onThemeSwitchChange.bind(this)}onThemeSwitchChange(e){this.setState({checked:e}),this.setTheme()}setTheme(){var e=document.body,a="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",a)}render(){if(this.props.sharedData)var e=this.props.sharedData.name;this.props.resumeBasicInfo&&(this.titles=this.props.resumeBasicInfo.titles.map(e=>[e.toUpperCase(),1500]).flat());const a=n.a.memo(()=>n.a.createElement(l.a,{className:"title-styles",steps:this.titles,loop:50}),(e,a)=>!0);return n.a.createElement("header",{id:"home",style:{height:window.innerHeight,display:"block"}},n.a.createElement(h.a,{id:"header-tsparticles",options:this.state.checked?u:g,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}),n.a.createElement("div",{className:"row aligner",style:{height:"100%"}},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",null,n.a.createElement("img",{src:"/images/znr.png",alt:"logo",height:"170",style:{marginBottom:0,paddingBottom:0,position:"relative"}}),n.a.createElement("br",null),n.a.createElement("h1",{className:"mb-0"},n.a.createElement(l.a,{steps:[e],wrapper:"p"})),n.a.createElement("div",{className:"title-container"},n.a.createElement(a,null)),n.a.createElement(d.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#dbdbdb",onColor:"#353535",className:"react-switch mx-auto",width:90,height:40,uncheckedIcon:n.a.createElement("span",{className:"iconify","data-icon":"twemoji:owl","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"20px",color:"#353239"}}),checkedIcon:n.a.createElement("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),id:"icon-switch"})))))}}var v=f;class E extends s.Component{render(){if(this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.social.map((function(e){return n.a.createElement("span",{key:e.name,className:"m-4 text-center d-inline-block"},n.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("i",{className:e.class,style:{fontSize:"4rem",display:"block"}}),n.a.createElement("p",{style:{marginTop:"0.5rem"}},e.name)))}));if(this.props.resumeBasicInfo)var a=this.props.resumeBasicInfo.section_name.contactus;return n.a.createElement("footer",null,n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"social-title"},a),n.a.createElement("div",{className:"social-links"},e),n.a.createElement("div",{className:"copyright py-4 text-center"},n.a.createElement("div",{className:"container"},n.a.createElement("small",null,this.props.sharedBasicInfo?this.props.sharedBasicInfo.name:"???"," ","\xa9"," Copyright")))))}}var y=E;class w extends s.Component{render(){if(this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.about,a=this.props.resumeBasicInfo.description_header,t=this.props.resumeBasicInfo.description1,s=this.props.resumeBasicInfo.description2;return n.a.createElement("section",{id:"about"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{style:{color:"black",fontSize:"31px",marginBottom:"31px"}},n.a.createElement("span",null,e)),n.a.createElement("div",{className:"row center mx-auto mb-5"},n.a.createElement("div",{className:"col-md-4 mb-5 center"},n.a.createElement("div",{className:"polaroid"},n.a.createElement("span",{style:{cursor:"auto"}},n.a.createElement("img",{height:"200px",src:"/images/aboutme/znrPic.jpeg",alt:"Avatar placeholder"})))),n.a.createElement("div",{className:"col-md-8 center"},n.a.createElement("div",{className:"col-md-10"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},n.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",n.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",n.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),n.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%"}},n.a.createElement("br",null),n.a.createElement("span",{className:"wave"},a," :) "),n.a.createElement("br",null),n.a.createElement("br",null),t,n.a.createElement("br",null),s)))))))}}var b=w,N=t(33);class k extends s.Component{render(){if(this.props.data){const i=this.props.data.technologies,r=this.props.data.images;var e=this.props.data.title,a=this.props.data.description,t=this.props.data.url;if(this.props.data.technologies){var s=i.map((e,a)=>n.a.createElement("li",{className:"list-inline-item mx-3",key:a},n.a.createElement("span",null,n.a.createElement("div",{className:"text-center"},n.a.createElement("i",{className:e.class,style:{fontSize:"300%"}},n.a.createElement("p",{className:"text-center",style:{fontSize:"30%"}},e.name))))));if(this.props.data.images)r.map((e,a)=>n.a.createElement("div",{key:a,"data-src":e}))}}return n.a.createElement(N.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),n.a.createElement("span",{onClick:this.props.onHide,className:"modal-close"},n.a.createElement("i",{className:"fas fa-times fa-3x close-icon"})),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"col-md-10 mx-auto",style:{paddingBottom:"50px"}},n.a.createElement("div",{className:"slider-tab"},n.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"emojione:red-circle","data-inline":"false",style:{marginLeft:"5px"}})," ","\xa0"," ",n.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",n.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:green-circle","data-inline":"false"})),n.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},n.a.createElement("img",{src:""+this.props.data.images,alt:"logo",height:"250",style:{marginBottom:0,paddingBottom:0,position:"relative"}}))),n.a.createElement("div",{className:"col-md-10 mx-auto"},n.a.createElement("h3",{style:{padding:"5px 5px 0 5px"}},e,t?n.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"link-href"},n.a.createElement("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})):null),n.a.createElement("p",{className:"modal-description"},a),n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("ul",{className:"list-inline mx-auto"},s)))))}}var I=k;class x extends s.Component{constructor(e){super(e),this.state={deps:{},detailsModalShow:!1}}render(){let e=e=>{this.setState({detailsModalShow:!0,deps:e})};if(this.props.resumeProjects&&this.props.resumeBasicInfo)var a=this.props.resumeBasicInfo.section_name.projects,t=this.props.resumeProjects.map((function(a){return n.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-3",key:a.title,style:{cursor:"pointer"}},n.a.createElement("span",{className:"portfolio-item d-block"},n.a.createElement("div",{className:"foto",onClick:()=>e(a)},n.a.createElement("div",null,n.a.createElement("img",{src:""+a.images,alt:"projectImages",height:"250px",style:{marginBottom:0,paddingBottom:0,position:"relative",maxWidth:"100%",objectFit:"cover"}}),n.a.createElement("br",null),n.a.createElement("p",{className:"project-title-settings mt-3"},a.title),n.a.createElement("p",{className:"project-desc-settings mt-3"},a.description)))))}));return n.a.createElement("section",{id:"portfolio"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"section-title",style:{color:"black",fontSize:"31px"}},n.a.createElement("span",null,a)),n.a.createElement("div",{className:"col-md-12 mx-auto"},n.a.createElement("div",{className:"row mx-auto"},t)),n.a.createElement(I,{show:this.state.detailsModalShow,onHide:()=>this.setState({detailsModalShow:!1}),data:this.state.deps})))}}var S=x;class B extends s.Component{constructor(e){super(e),this.state={deps:{},detailsModalShow:!1}}render(){let e=e=>{this.setState({detailsModalShow:!0,deps:e})};if(this.props.resumeServices&&this.props.resumeBasicInfo)var a=this.props.resumeBasicInfo.section_name.services,t=this.props.resumeServices.map((function(a){return n.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:a.title,style:{cursor:"pointer"}},n.a.createElement("span",{className:"services-item d-block"},n.a.createElement("div",{className:"foto",onClick:()=>e(a)},n.a.createElement("div",null,n.a.createElement("img",{src:""+a.images,alt:"servicesImages",height:"auto",style:{marginBottom:0,paddingBottom:0,position:"relative",maxWidth:"100%",objectFit:"cover"}}),n.a.createElement("br",null),n.a.createElement("p",{className:"services-title-settings mt-3"},a.title),n.a.createElement("p",{className:"services-desc-settings mt-3"},a.description)))))}));return n.a.createElement("section",{id:"services"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("h1",{className:"section-title",style:{color:"black",fontSize:"31px"}},n.a.createElement("span",null,a)),n.a.createElement("div",{className:"col-md-12 mx-auto"},n.a.createElement("div",{className:"row mx-auto"},t)),n.a.createElement(I,{show:this.state.detailsModalShow,onHide:()=>this.setState({detailsModalShow:!1}),data:this.state.deps})))}}var _=B;class j extends s.Component{constructor(e){super(),this.state={foo:"bar",resumeData:{},sharedData:{}}}applyPickedLanguage(e,a){this.swapCurrentlyActiveLanguage(a),document.documentElement.lang=e;var t=document.documentElement.lang===window.$primaryLanguage?"res_primaryLanguage.json":"res_secondaryLanguage.json";this.loadResumeFromPath(t)}swapCurrentlyActiveLanguage(e){var a=e===window.$primaryLanguageIconId?window.$secondaryLanguageIconId:window.$primaryLanguageIconId;document.getElementById(e).removeAttribute("filter","brightness(40%)"),document.getElementById(a).setAttribute("filter","brightness(40%)")}componentDidMount(){this.loadSharedData(),this.applyPickedLanguage(window.$primaryLanguage,window.$secondaryLanguageIconId)}loadResumeFromPath(e){c.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){alert(t)}})}loadSharedData(){c.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,a,t){alert(t)}})}render(){return n.a.createElement("div",null,n.a.createElement("div",{className:"col-md-12 mx-auto language",style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},n.a.createElement("span",{className:"number",style:{cursor:"pointer"},onClick:()=>{window.location.href="tel: +905368853513"}},"+90 (536) 885 3513"),n.a.createElement("div",{className:"text-right",style:{display:"flex",alignItems:"center"}},n.a.createElement("div",{onClick:()=>this.applyPickedLanguage(window.$primaryLanguage,window.$secondaryLanguageIconId),style:{marginRight:"10px",cursor:"pointer"}},n.a.createElement("span",{className:"iconify language-icon","data-icon":"twemoji-flag-for-flag-turkey","data-inline":"false",id:window.$primaryLanguageIconId})),n.a.createElement("div",{onClick:()=>this.applyPickedLanguage(window.$secondaryLanguage,window.$primaryLanguageIconId),style:{cursor:"pointer"}},n.a.createElement("span",{className:"iconify language-icon","data-icon":"twemoji-flag-for-flag-united-kingdom","data-inline":"false",id:window.$secondaryLanguageIconId})))),n.a.createElement(v,{resumeBasicInfo:this.state.resumeData.basic_info,sharedData:this.state.sharedData.basic_info}),n.a.createElement(b,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),n.a.createElement(_,{resumeServices:this.state.resumeData.services,resumeBasicInfo:this.state.resumeData.basic_info}),n.a.createElement(S,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info}),n.a.createElement(y,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}))}}var L=j;const C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(e,a){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const t=e.installing;null!=t&&(t.onstatechange=()=>{"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}t(28);window.$primaryLanguage="tr",window.$secondaryLanguage="en",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",r.a.render(n.a.createElement(L,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const a="".concat("","/service-worker.js");C?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then(t=>{const s=t.headers.get("content-type");404===t.status||null!=s&&-1===s.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):D(e,a)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):D(a,e)})}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.2503cb62.chunk.js.map