
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
  
    // new Splide( '.splide', {
    //   'arrowPath': 'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z',
  
    //   type     : 'loop',
  
    //   focus    : 'center',
    //   autoplay : true,
    //   interval : 3000,
    //   direction  : 'ttb',
    //   heightRatio: 0.6,
    //   perPage    : 3,
    //   gap : 2,
  
    // } ).mount();
  
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
    
    
    $('.counter').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
    
      {
    
        duration: 1000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }
    
      });  
      
      
    
    });
  
  
  
    // function myFunction() {
    //   var x = document.getElementById("myTopnav");
    //   if (x.className === "menu-overlay") {
    //     x.className += " responsive";
    //   } else {
    //     x.className = "menu-overlay";
    //   }
    // }
  
  
    // var TxtRotate = function (el, toRotate, period) {
    //   this.toRotate = toRotate;
    //   this.el = el;
    //   this.loopNum = 0;
    //   this.period = parseInt(period, 10) || 2000;
    //   this.txt = '';
    //   this.tick();
    //   this.isDeleting = false;
    // };
  
    // TxtRotate.prototype.tick = function () {
    //   var i = this.loopNum % this.toRotate.length;
    //   var fullTxt = this.toRotate[i];
  
    //   if (this.isDeleting) {
    //     this.txt = fullTxt.substring(0, this.txt.length - 1);
    //   } else {
    //     this.txt = fullTxt.substring(0, this.txt.length + 1);
    //   }
  
    //   this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
  
    //   var that = this;
    //   var delta = 300 - Math.random() * 100;
  
    //   if (this.isDeleting) { delta /= 2; }
  
    //   if (!this.isDeleting && this.txt === fullTxt) {
    //     delta = this.period;
    //     this.isDeleting = true;
    //   } else if (this.isDeleting && this.txt === '') {
    //     this.isDeleting = false;
    //     this.loopNum++;
    //     delta = 500;
    //   }
  
    //   setTimeout(function () {
    //     that.tick();
    //   }, delta);
    // };
  
    // window.onload = function () {
    //   var elements = document.getElementsByClassName('txt-rotate');
    //   for (var i = 0; i < elements.length; i++) {
    //     var toRotate = elements[i].getAttribute('data-rotate');
    //     var period = elements[i].getAttribute('data-period');
    //     if (toRotate) {
    //       new TxtRotate(elements[i], JSON.parse(toRotate), period);
    //     }
    //   }
    //   // INJECT CSS
    //   var css = document.createElement("style");
    //   css.type = "text/css";
    //   css.innerHTML = ".txt-rotate > .wrap { border-left: 0.08em solid #666 }";
    //   document.body.appendChild(css);
    // };

    $('.counter').each(function () {
      $(this).prop('Counter',0).animate({
      Counter: $(this).text()
      }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
      $(this).text(Math.ceil(now));
      }
      });
      });
  
  });