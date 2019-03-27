$(document).on('scroll', function () {

   const windowHeight = $(window).height();
   const scrollValue = $(this).scrollTop();
   // console.log(scrollValue);
   const $design = $('.design');
   const designFromTop = $design.offset().top;
   // console.log(designFromTop);
   const designHeight = $design.outerHeight();
   // console.log(designHeight);

   const $omnie = $('.omnie');
   const omnieFromTop = $omnie.offset().top;
   const omnieHeight = $omnie.outerHeight();

   const $bitcoin = $('.bitcoin');
   const bitcoinFromTop = $bitcoin.offset().top;
   const bitcoinHeight = $bitcoin.outerHeight();

   if(scrollValue > designFromTop + designHeight - windowHeight) {
      // console.log("jestem wyświetlony");
      $design.addClass('active');
   }

   if (scrollValue > omnieFromTop + omnieHeight - windowHeight) {
      $omnie.addClass('active');
   }

   if (scrollValue > bitcoinFromTop + bitcoinHeight - windowHeight) {
      $bitcoin.addClass('active');
   }

   //czyściciel
   if (scrollValue < 100) {
      $('section').removeClass('active');
   }
})