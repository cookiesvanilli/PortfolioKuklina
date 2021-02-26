jQuery(document).ready(function ($) {
   /*----------------------------------------------------*/
   /* Smooth Scrolling
   ------------------------------------------------------ */
   $('.smoothscroll').on('click', function (e) {
      e.preventDefault();
      var target = this.hash,
         $target = $(target);
      $('html, body').stop().animate({
         'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
         window.location.hash = target;
      });
   });

/* 
   $('header').css({
      'height': $(window).height()
   });
   $(window).on('resize', function () {

      $('header').css({
         'height': $(window).height()
      });
      $('body').css({
         'width': $(window).width()
      })
   }); */
   /*----------------------------------------------------*/
   /*	Modal Popup
   ------------------------------------------------------*/
   $('.item-wrap a').magnificPopup({
      type: 'inline',
      fixedContentPos: false,
      removalDelay: 200,
      showCloseBtn: false,
      mainClass: 'mfp-fade'
   });
   $(document).on('click', '.popup-modal-dismiss', function (e) {
      e.preventDefault();
      $.magnificPopup.close();
   });
   /*----------------------------------------------------*/
   /*	contact form
   ------------------------------------------------------*/
   $('form#contactForm button.submit').click(function () {
      $('#image-loader').fadeIn();
      return false;
   });
});