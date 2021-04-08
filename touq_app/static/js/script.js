
$(document).ready(function () {

    AOS.init();
  
    const navbar = document.querySelector('.nav-fixed');
    window.onscroll = () => {
        if (window.scrollY > 100) {
            navbar.classList.add('nav-active');
        } else {
            navbar.classList.remove('nav-active');
        }
    };
  
    
  
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      loop: true,
      slidesPerView: 3,
      spaceBetween: 3,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
    
      },
  
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      parallax: true,
  
  
  
  
    });
    
    

  
  

      $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
        $(this).text(); 
        
        // {% comment %} Math.ceil(now) {% endcomment %}
        }
        });
        });

      
  
        var owl = $('.owl-carousel');
        owl.owlCarousel({
            items:4,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        });
        $('.play').on('click',function(){
            owl.trigger('play.owl.autoplay',[2000])
        })
        $('.stop').on('click',function(){
            owl.trigger('stop.owl.autoplay')
        })
});