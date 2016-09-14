(function ($) {

//https://www.lullabot.com/articles/understanding-javascript-behaviors-in-drupal
Drupal.behaviors.fp = {
  attach: function (context, settings) {

    /*  Make the panel 2 icons hover active
     *  DEBUG: jQuery('div#fp-nav-research');
     *  jQuery('div#nav2-research').css("background-color", "yellow");
     *
     */
    
  //$(alert("fp jquery loaded."));
		
    // Init SlickNav
    // Documentation: http://slicknav.com/
    // Note: (2016-2-28) Instead of fixed menu, can we clone the real menu?
    // (we are selecting .slicknav; which is hard coded in a block)
    
    $('.slicknav').slicknav({
      label: '',
      prependTo: "#secondary-menu",
//			prependTo: "#mobile-nav-menu",
      allowParentLinks: true
    });
    
    // Test code for footer: based on WOCO
    $(".accordion").accordion({
      firstChildExpand: false
    });
    
    
  }
};

})(jQuery);