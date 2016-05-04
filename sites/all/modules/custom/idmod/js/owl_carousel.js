(function ($) {

//https://www.lullabot.com/articles/understanding-javascript-behaviors-in-drupal
Drupal.behaviors.owl_carousel = {
  attach: function (context, settings) {

    /*  Configure and call Owl Carousel 
     *  DEBUG: jQuery('div#fp-nav-research');
     *  jQuery('div#fp-nav-research').css("background-color", "yellow");
     *
     */
    
    
    
    // Init SlickNav
    // Documentation: http://slicknav.com/
    // Note: (2016-2-28) Instead of fixed menu, can we clone the real menu?
    // (we are selecting .slicknav; which is hard coded in a block)
    
    //$('.slicknav').slicknav({
    //  label: '',
    //  prependTo: "#secondary-menu",
    //  allowParentLinks: true
    //});
    //
    //
    //// Test code for footer: based on WOCO
    //$(".accordion").accordion({
    //  firstChildExpand: false
    //});
    //
    
    
    
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