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
      allowParentLinks: true
    });
    
    
    // Test code for footer: based on WOCO
    $(".accordion").accordion({
      firstChildExpand: false
    });
    
    
    
    ///*  Make the rotators clickable
    // */
    //$('div#fp-p1-video').click(function(){
    //  window.location = '/news/node/132';
    //});
    //$('div#fp-p1-releases').click(function(){
    //  window.location = '/software';
    //});     
    //$('div#fp-p1-shapes').click(function(){
    //  window.location = '/about';
    //});  
    //$('div#fp-p1-challenges').click(function(){
    //  window.location = '/news/node/142';
    //});
    //$('div#fp-p1-guinea').click(function(){
    //  window.location = '/news/node/154';
    //});
    //
    ///*  Make the panel 2 nav  clickable
    // *
    // */
    //$('div#fp-nav-research').click(function(){
    //  window.location = '/research';
    //});
    //$('div#fp-nav-publications').click(function(){
    //  window.location = '/publications';
    //});
    //$('div#fp-nav-software').click(function(){
    //  window.location = '/software';
    //});
    //$('div#fp-nav-team').click(function(){
    //  window.location = '/team';
    //});    

  }
};

})(jQuery);