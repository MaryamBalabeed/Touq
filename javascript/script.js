
$(document).ready(function(){
    
    AOS.init();

 
   
    new Splide( '.splide', {
      type     : 'loop',
      autoWidth: true,
      focus    : 'center',
      number : 300 ,
      autoplay : true,
      interval : 3000,
      direction  : 'ttb',
      heightRatio: 0.6,
	    perPage    : 3,
      gap : 2,
    } ).mount();

      
});