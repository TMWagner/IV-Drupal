(function ($) {

//https://www.lullabot.com/articles/understanding-javascript-behaviors-in-drupal
Drupal.behaviors.idmdefault = {
  attach: function (context, settings) {

    /*  Make the panel 2 icons hover active
     *  DEBUG: jQuery('div#fp-nav-research');
     *  jQuery('div#nav2-research').css("background-color", "yellow");
     *  jQuery('#content').css("background-color", "yellow");
     *
     */

    //  Patch to fix content div spacing. Problem is that the banner div is
    //  located below the content (thank you, Zen). The banner is place into
    //  position with absolute - thus organic spacing is broken. 
    if ( $( ".full-banner" ).length ) {
      $('#content').css('padding-top', '450px');
      
    } else {
      $('#content').css('padding-top', '0px');
      
    }
  }
};

})(jQuery);