$('.slider').slick({
  asNavFor: '.slider_map',
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  speed: 1000
});


 /*-------------------------------------------------------------------------*/
 $('.slider_map').slick({
   asNavFor: '.slider',
   slidesToShow: 5,
   centerMode: true,
   centerPadding: '60px',
   arrows: false,
   dots: true,
   focusOnSelect: true,
   responsive: [
     {
       breakpoint: 1000,
       settings:{
         slidesToShow: 4,
         centerMode: true,
         centerPadding: '50px',
         arrows: false,
         dots: true,
         focusOnSelect: true
       }
     },
     {
       breakpoint: 650,
       settings:{
         slidesToShow: 4,
         centerMode: true,
         centerPadding: '40px',
         arrows: false,
         dots: true,
         focusOnSelect: true
       }
     },
     {
       breakpoint: 410,
       settings:{
         slidesToShow: 3,
         centerMode: true,
         centerPadding: '20px',
         arrows: false,
         dots: false,
         focusOnSelect: true
       }
     }
   ]
 });

//функция плавной прокрутки
 function slowScroll (id) {
     var offset = 0;
     $('html, body').animate ({
       scrollTop: $(id).offset ().top - offset
     }, 800);
     return false;
   }
// -------------------------
