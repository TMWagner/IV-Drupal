(function ($) {

//https://www.lullabot.com/articles/understanding-javascript-behaviors-in-drupal
Drupal.behaviors.owl_carousel = {
  attach: function (context, settings) {

    /*  Configure and call Owl Carousel 
     *  DEBUG: jQuery('div#fp-nav-research');
     *  jQuery('div#fp-nav-research').css("background-color", "yellow");
     *
     */
        
    //$( ".slicknav_collapsed" ).parent().css( "background-color", "blue" );

    $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        autoplay: false,
        rewind: false,
        items: 1,
        nav: false,
        loop: true,
        animateOut: "fadeOut",
        responsiveRefreshRate: 1
      });
     });

  }
};

})(jQuery);