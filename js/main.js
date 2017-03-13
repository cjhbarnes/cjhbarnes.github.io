$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(document).ready(function(){

    var unslider = $('div.slideshow').unslider({
        speed: 300,
        delay: 3000,
        nav: true,
        autoplay: false,
        keys: true
    }),
    data = unslider.data('unslider');

    var slides = $('div.slideshow'),
        i = 0;

    slides
    .on('swipeleft', function(e) {
        unslider.prev();
    })
    .on('swiperight', function(e) {
        unslider.next();
    });

});