$(document).ready(function(){
    //slider
    const slider = document.querySelector('.slider');
       M.Slider.init(slider, {
         indicators: false,
         height: 500,
         transition: 500,
         interval: 6000
       });
   
});