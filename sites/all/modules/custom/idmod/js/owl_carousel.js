(function ($) {

//https://www.lullabot.com/articles/understanding-javascript-behaviors-in-drupal
Drupal.behaviors.fp = {
  attach: function (context, settings) {

    /*  Configure and call Owl Carousel 
     *  DEBUG: jQuery('div#fp-nav-research');
     *  jQuery('div#fp-nav-research').css("background-color", "yellow");
     *
     */
    $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        autoplay: false,
        rewind: false,
        items: 1,
        nav: true,
        loop: true,
        animateOut: "fadeOut",
        responsiveRefreshRate: 1
      });
     });
    

  }
};

})(jQuery);