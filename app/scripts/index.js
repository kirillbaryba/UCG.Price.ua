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
  const panelScrolled = 'nav-panel--scrolled';

   $(window).scroll(function() {

     var scroll = getCurrentScroll();
       if ( scroll >= scrollTopHeight ) {
            $panel.addClass(panelScrolled);
         }
         else {
            $panel.removeClass(panelScrolled);
         }
   });

 function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
     }
 });