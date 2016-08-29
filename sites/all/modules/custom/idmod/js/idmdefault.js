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
    
    //  Test to see if tag exists...
    if ( $( ".full-banner" ).length ) {
      //Mobile
      
      //$('#content').css('padding-top', '40%');
      
      //  We need an initial setting.
      
      var winWidth = $( window ).width();
      
      if (winWidth <= 480){
        $('#content').css('padding-top', '70%');
      }
      if (winWidth > 480){
        $('#content').css('padding-top', '45%');
      }
      if (winWidth  >  959){
        $('#content').css('padding-top', '40%');
      }      
      
      //  Set parameters on window RESIZE  
      $(window).resize(function(){
        
        if ($(window).width() <= 480){	
          $('#content').css('padding-top', '70%');
        }
        
        if ($(window).width() > 480){	
          $('#content').css('padding-top', '45%');
        }
      
        if ($(window).width() > 959){	
          $('#content').css('padding-top', '40%');
        }	        
        
      });
      
      //Tablet
      
      //Desktop
      
      
      
    } else {
      $('#content').css('padding-top', '0px');
      
    }
  }
};

})(jQuery);