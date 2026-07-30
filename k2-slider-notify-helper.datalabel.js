<script id="k2-slider-notify-helper">
if(!window.K2Slider){
var sliderLibraryLabel=document.querySelector('[name="slider js"]');
var sliderLibraryScript=sliderLibraryLabel&&sliderLibraryLabel.querySelector("script");
if(sliderLibraryScript){
new Function(sliderLibraryScript.textContent)();
}
}
(function(window){
"use strict";
function notify(type,title,message,duration,name){
if(window.K2Slider){
window.K2Slider.loading(name||"new-device-detail",false);
window.K2Slider.notify(name||"new-device-detail",{
type:type||"info",
title:title||"",
message:message||"",
duration:typeof duration==="number"?duration:4200
});
}
}
window.K2SliderNotify={
show:function(options){
options=options||{};
notify(options.type,options.title,options.message,options.duration,options.name);
},
success:function(title,message,duration,name){
notify("success",title||"Saved",message||"The request was saved successfully.",duration,name);
},
error:function(title,message,duration,name){
notify("error",title||"Unable to save",message||"The request could not be saved. Review the details and try again.",typeof duration==="number"?duration:0,name);
},
warning:function(title,message,duration,name){
notify("warning",title||"Check details",message||"",duration,name);
},
info:function(title,message,duration,name){
notify("info",title||"Notice",message||"",duration,name);
}
};
}(window));
</script>
