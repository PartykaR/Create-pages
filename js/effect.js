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

   //quotes
   const $op1 = $('.op1');
   const $op2 = $('.op2');

   const op1FromTop = $op1.offset().top;
   const op2FromTop = $op2.offset().top;

   const op1Height = $op1.height();
   const op2Height = $op2.height();

   if (scrollValue > op1FromTop + op1Height / 8 - windowHeight) {
      $op1.addClass('active');
   }
   if (scrollValue > op2FromTop + op2Height / 8 - windowHeight) {
      $op2.addClass('active');
   }


   //czyściciel
   if (scrollValue < 100) {
      $('section').removeClass('active');
   }

   if (scrollValue < 100) {
      $('article').removeClass('active');
   }
})