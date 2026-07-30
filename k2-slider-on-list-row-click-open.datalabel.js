<script id="k2-slider-on-list-row-click-open">
if(!window.K2Slider){
var sliderLibraryLabel=document.querySelector('[name="slider js"]');
var sliderLibraryScript=sliderLibraryLabel&&sliderLibraryLabel.querySelector("script");
if(sliderLibraryScript){
new Function(sliderLibraryScript.textContent)();
}
}
if(window.K2Slider){
window.K2Slider.open({
name:"detail-slider",
target:'[name="Detail Item View"]',
title:"Details",
width:"min(760px, 94vw)",
loading:true,
loadingText:"Loading details"
});
}
</script>
