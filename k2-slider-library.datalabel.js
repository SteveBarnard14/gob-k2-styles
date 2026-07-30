<script id="k2-slider-library">
(function(window,document){
"use strict";
var api=window.K2Slider||{};
var instances=api.instances||{};
function q(selector){return document.querySelector(selector);}
function byName(name){return q('[name="'+String(name).replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"]');}
function resolve(value){return !value?null:value.nodeType===1?value:q(value)||byName(value);}
function hasClass(el,name){return (" "+(el.className||"")+" ").indexOf(" "+name+" ")>-1;}
function setClass(el,name,on){if(!el){return;}var c=(" "+(el.className||"")+" ").replace(/\s+/g," ");c=c.replace(" "+name+" "," ");if(on){c+=name+" ";}el.className=c.replace(/^\s+|\s+$/g,"");}
function closest(el,selector){while(el&&el.nodeType===1){if(el.matches&&el.matches(selector)){return el;}el=el.parentElement;}return null;}
function reveal(el){if(!el){return;}setClass(el,"hidden",false);setClass(el,"visible",true);el.removeAttribute("hidden");el.setAttribute("aria-hidden","false");if(el.style){if(el.style.display==="none"){el.style.display="";}if(el.style.visibility==="hidden"){el.style.visibility="";}}}
function esc(text){return String(text||"").replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
function makeShell(name,options,target){
var host=closest(target,"form")||document.forms[0]||document.body;
var backdrop=document.createElement("div");
var panel=document.createElement("aside");
var header=document.createElement("div");
var title=document.createElement("h2");
var body=document.createElement("div");
var loading=document.createElement("div");
var loadingInner=document.createElement("div");
var loadingLogo;
var loadingText=document.createElement("div");
backdrop.className="k2-slider-backdrop";
panel.className="k2-slider-panel";
panel.setAttribute("role","dialog");
panel.setAttribute("aria-modal","true");
panel.setAttribute("aria-hidden","true");
panel.setAttribute("tabindex","-1");
if(options.width){panel.style.width=options.width;}
header.className="k2-slider-header";
title.className="k2-slider-title";
title.appendChild(document.createTextNode(options.title||"Details"));
body.className="k2-slider-body";
loading.className="k2-slider-loading";
loading.setAttribute("aria-live","polite");
loading.setAttribute("aria-hidden","true");
loadingInner.className="k2-slider-loading-inner";
if(options.logoUrl){
loadingLogo=document.createElement("img");
loadingLogo.className="k2-slider-loading-logo";
loadingLogo.alt="";
loadingLogo.src=options.logoUrl;
loadingInner.appendChild(loadingLogo);
}else{
loadingLogo=document.createElement("div");
loadingLogo.className="k2-slider-loading-mark";
loadingInner.appendChild(loadingLogo);
}
loadingText.className="k2-slider-loading-text";
loadingText.appendChild(document.createTextNode(options.loadingText||"Loading"));
loadingInner.appendChild(loadingText);
loading.appendChild(loadingInner);
header.appendChild(title);
panel.appendChild(header);
panel.appendChild(body);
panel.appendChild(loading);
host.appendChild(backdrop);
host.appendChild(panel);
return{backdrop:backdrop,panel:panel,body:body,loading:loading};
}
function moveTarget(target,shell,options){
var content=options.moveClosestView===false?target:closest(target,".view")||target;
if(!hasClass(content,"k2-slider-content")){
var placeholder=document.createElement("div");
placeholder.className="k2-slider-placeholder";
content.parentNode.insertBefore(placeholder,content);
setClass(content,"k2-slider-content",true);
shell.body.appendChild(content);
}
return content;
}
function open(options){
options=options||{};
var name=options.name||"default";
var target=resolve(options.target||options.targetName);
var instance=instances[name];
if(!target&&instance){target=instance.target;}
if(!target){return false;}
if(!instance){
var shell=makeShell(name,options,target);
var content=moveTarget(target,shell,options);
instance={name:name,target:target,content:content,shell:shell,options:options};
instances[name]=instance;
}
reveal(instance.content);
reveal(instance.target);
reveal(closest(instance.target,".panel"));
reveal(closest(instance.target,".view"));
setClass(document.body,"k2-slider-lock",true);
setClass(instance.shell.backdrop,"is-open",true);
setClass(instance.shell.panel,"is-open",true);
instance.shell.panel.setAttribute("aria-hidden","false");
setLoading(name,options.loading===true);
if(instance._loadingTimer){window.clearTimeout(instance._loadingTimer);}
if(options.loading===true&&typeof options.loadingTimeout==="number"&&options.loadingTimeout>0){
instance._loadingTimer=window.setTimeout(function(){setLoading(name,false);},options.loadingTimeout);
}
window.setTimeout(function(){
var focusTarget=instance.shell.body.querySelector("a,button,input,textarea,select,[tabindex]");
if(focusTarget&&focusTarget.focus){focusTarget.focus();}else{instance.shell.panel.focus();}
},40);
return true;
}
function setLoading(name,on){
var instance=instances[name||"default"];
if(!instance||!instance.shell.loading){return;}
if(!on&&instance._loadingTimer){window.clearTimeout(instance._loadingTimer);instance._loadingTimer=null;}
setClass(instance.shell.loading,"is-visible",!!on);
instance.shell.loading.setAttribute("aria-hidden",on?"false":"true");
}
function notify(name,options){
var instance=instances[name||"default"];
var banner;
var timer;
options=options||{};
if(!instance){return false;}
banner=instance.shell.panel.querySelector(".k2-slider-notification");
if(!banner){
banner=document.createElement("div");
banner.className="k2-slider-notification";
banner.setAttribute("role","status");
banner.setAttribute("aria-live","polite");
instance.shell.panel.insertBefore(banner,instance.shell.panel.firstChild);
}
if(banner._k2SliderTimer){window.clearTimeout(banner._k2SliderTimer);}
setClass(banner,"is-success",options.type==="success");
setClass(banner,"is-error",options.type==="error");
setClass(banner,"is-warning",options.type==="warning");
setClass(banner,"is-info",!options.type||options.type==="info");
banner.innerHTML='<div class="k2-slider-notification-title">'+esc(options.title||defaultTitle(options.type))+'</div><div class="k2-slider-notification-message">'+esc(options.message||"")+'</div>';
setClass(banner,"is-visible",true);
timer=typeof options.duration==="number"?options.duration:4200;
if(timer>0){
banner._k2SliderTimer=window.setTimeout(function(){setClass(banner,"is-visible",false);},timer);
}
return true;
}
function defaultTitle(type){
if(type==="success"){return"Saved";}
if(type==="error"){return"Unable to save";}
if(type==="warning"){return"Check details";}
return"Notice";
}
function close(name){
var instance=instances[name||"default"];
if(!instance){return;}
setLoading(name,false);
setClass(document.body,"k2-slider-lock",false);
setClass(instance.shell.backdrop,"is-open",false);
setClass(instance.shell.panel,"is-open",false);
instance.shell.panel.setAttribute("aria-hidden","true");
}
api.open=open;
api.close=close;
api.loading=setLoading;
api.notify=notify;
api.instances=instances;
window.K2Slider=api;
}(window,document));
</script>
