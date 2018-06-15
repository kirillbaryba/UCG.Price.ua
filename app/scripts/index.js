import './../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('./../index.pug')
}



// nav-menu
$(function(){

  $('.nav-btn').on('click', function () {
    $(this).toggleClass('nav-btn--active')
    $('body').toggleClass('nav-menu--open');
  });

  $('.nav-menu__link').on('click', function () {
    $('.nav-btn').removeClass('nav-btn--active');
    $('body').removeClass('nav-menu--open');
  });
  
});



//fixed panel onScroll
$(function(){

  var scrollTopHeight = 100;

  var $panel = $('.nav-panel');
  var panelScrolled = 'nav-panel--scrolled';

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