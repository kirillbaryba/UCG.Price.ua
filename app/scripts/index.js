import './../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./../category.pug')
}

// btn-toogle
$(function(){
  $('.nav-btn').on('click', function () {
    $(this).toggleClass('nav-btn--active')
  });
});

//fixed panel onScroll
$(function(){

  const scrollTopHeight = 100;

  const $panel = $('.nav-panel');
  const panelFixed = 'nav-panel--scrolled';

   $(window).scroll(function() {

     var scroll = getCurrentScroll();
       if ( scroll >= scrollTopHeight ) {
            $panel.addClass(panelFixed);
         }
         else {
            $panel.removeClass(panelFixed);
         }
   });

 function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
     }
 });