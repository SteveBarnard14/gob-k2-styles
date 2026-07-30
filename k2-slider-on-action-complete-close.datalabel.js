<script id="k2-slider-on-action-complete-close">
if(!window.K2Slider){
var sliderLibraryLabel=document.querySelector('[name="slider js"]');
var sliderLibraryScript=sliderLibraryLabel&&sliderLibraryLabel.querySelector("script");
if(sliderLibraryScript){
new Function(sliderLibraryScript.textContent)();
}
}
if(window.K2Slider){
window.K2Slider.close("detail-slider");
}
window.setTimeout(function(){
var scriptLabel=document.querySelector('[name="slider action script"],[name="slider script"]');
if(scriptLabel){
scriptLabel.innerHTML="";
scriptLabel.textContent="";
}
},50);
</script>
